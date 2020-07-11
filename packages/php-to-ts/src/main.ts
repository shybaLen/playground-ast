import Parser from 'php-parser';
import * as fs from 'fs';
import { OutputVisitor } from './app/output-visitor';
import { Output } from './app/output';
import ts from 'typescript';

const parser = new Parser({
  ast: {
    withPositions: true,
    withSource: true
  },
  parser: {
    extractDoc: true
  }
});

const code = fs.readFileSync('/Users/LinBoLen/Projects/playground-nrwl/source-code/Illuminate/Database/Connection.php', 'utf8');

const result = parser.parseCode(code, 'connection.php');

const output = new Output();
const visitor = new OutputVisitor(output);
const node = visitor.visit(result);

visitor.flushLog();

const printer = ts.createPrinter({ removeComments: false, newLine: ts.NewLineKind.LineFeed });

const resultFile = ts.createSourceFile('someFileName.ts', '', ts.ScriptTarget.Latest, /*setParentNodes*/ false, ts.ScriptKind.TS);

const emitted = printer.printNode(ts.EmitHint.Unspecified, node, resultFile);
console.log(emitted);
// console.log(result);
