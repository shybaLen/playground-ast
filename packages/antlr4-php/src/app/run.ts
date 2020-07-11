import {ANTLRInputStream, CommonTokenStream} from "antlr4ts";
import { HtmlDocumentContext, PhpParser } from "../php/PhpParser";
import { PhpLexer } from "../php/PhpLexer";
import { PhpVisitor } from './PhpVisitor';
import { OutputEmit } from './outputEmit';


export function beginParse(data) {

	let inputStream = new ANTLRInputStream(data);
	let lexer       = new PhpLexer(inputStream);
	let tokenStream = new CommonTokenStream(lexer);
	let parser      = new PhpParser(tokenStream);

	// Parse the input, where `compilationUnit` is whatever entry point you defined
	let tree: HtmlDocumentContext = parser.htmlDocument();

	// let walker: ParseTreeWalker = new ParseTreeWalker(); // create standard walker
	// let javaListener: CustomJavaListener = new CustomJavaListener();
	// walker.walk(javaListener, tree); // initiate walk of tree with listener

	// let javaVisitor = new CustomClassBodyDeclarationVisitor(pbStructure);
	// javaVisitor.visit(tree);

  let output = new OutputEmit();
  let phpVisitor = new PhpVisitor(output)

  phpVisitor.visit(tree);


  return phpVisitor.output
}


