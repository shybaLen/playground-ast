import ts from 'typescript';


export function wrapperExpression(node: any) {
  if (ts.isConditionalExpression(node)) {
    return ts.createParen(node);
  }

  return node;
}
