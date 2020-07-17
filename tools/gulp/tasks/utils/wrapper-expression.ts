import ts from 'typescript';


export function wrapperExpression(node) {
  if (ts.isConditionalExpression(node)) {
    return ts.createParen(node);
  }

  return node;
}
