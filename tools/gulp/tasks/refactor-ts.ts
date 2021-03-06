import { dest, src, task } from 'gulp';
import { buildConfig } from '../../package-tools';
import { join } from 'path';
import through2 from 'through2';
import ts from 'typescript';
import { refactorArrayMerge } from './methods/refactor.array_merge';
import { refactorIsAny } from './methods/refactor.is_any';
import { refactor_strtolower_strtoupper } from './methods/refactor.strtolower_strtoupper';
import { refactor_explode_implode } from './methods/refactor.explode_implode';
import { refactor_sprintf } from './methods/refactor.sprintf';


task('refactor-ts:dist', async () => {
  console.log(buildConfig.projectDir);

  const projectDir = buildConfig.projectDir;
  const outputDir = join(buildConfig.outputDir, 'output-refactor-ts');

  src('dist/output-ts/source-code/**/*.ts', {
    base: 'dist/output-ts/source-code/'
  })
    .pipe(
      through2.obj((file, _, cb) => {
        if (file.isBuffer()) {

          const filename = 'test.ts';
          const code = file.contents.toString();

          const sourceFile = ts.createSourceFile(
            filename, code, ts.ScriptTarget.Latest
          );

          let transformationResult = ts.transform(sourceFile, [
            refactorArrayMerge(),
            refactorIsAny(),
            refactor_strtolower_strtoupper(),
            refactor_explode_implode(),
            refactor_sprintf()
          ]);

          const transformedSourceFile = transformationResult.transformed[0];
          const printer = ts.createPrinter();

          const result = printer.printNode(
            ts.EmitHint.Unspecified,
            transformedSourceFile,
            transformedSourceFile
          );

          file.contents = Buffer.from(result);
        }
        cb(null, file);
      }))
    .pipe(
      dest(outputDir)
    );
});
