import { beginParse } from './app/run';
import * as fs from 'fs';
import { join, resolve } from 'path';

console.log('Hello World!');

console.log(__dirname);

const content = fs.readFileSync(join('/Users/LinBoLen/Projects/playground-nrwl/packages/antlr4-php/src', 'example.php'), { encoding: 'utf8' });

const output = beginParse(content);

console.log(output.file)
console.log(output.output.join('\n'));
