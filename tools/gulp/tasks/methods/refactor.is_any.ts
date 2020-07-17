import ts, { BinaryOperator, BinaryOperatorToken, Expression } from 'typescript';

function _createBinary(express: Expression, token: BinaryOperator | BinaryOperatorToken, value: Expression) {
  return ts.createBinary(
    express,
    token,
    value
  );
}


export function refactorIsAny<T extends ts.Node>(/*typeChecker: TypeChecker*/): ts.TransformerFactory<T> {
  return (context) => {
    const visit: ts.Visitor = (node) => {
      if (ts.isDecorator(node)) {
        return undefined;
      }
      // if (
      //   ts.isPrefixUnaryExpression(node) &&
      //   ts.isCallExpression(node.operand) &&
      //   ts.isIdentifier(node.operand.expression)
      // ) {
      //   return _createBinary(node.operand, ts.SyntaxKind.ExclamationEqualsEqualsToken, ts.createNull());
      // } else if (
      //   ts.isCallExpression(node) &&
      //   ts.isIdentifier(node.expression)
      // ) {
      //   if (node.expression.text === 'is_null' && node.arguments.length === 1) {
      //     return _createBinary(node.arguments[0], ts.SyntaxKind.EqualsEqualsEqualsToken, ts.createNull());
      //   } else {
      //     return node;
      //   }
      // }


      if (
        ts.isCallExpression(node) &&
        ts.isIdentifier(node.expression)
      ) {
        if (node.expression.text === 'is_null' && node.arguments.length === 1) {
          return ts.updateCall(node, ts.createIdentifier('isBlank'), undefined, node.arguments);
        }
        return node;
      }

      return ts.visitEachChild(node, (child) => visit(child), context);
    };

    return (node) => ts.visitNode(node, visit);
  };
}
