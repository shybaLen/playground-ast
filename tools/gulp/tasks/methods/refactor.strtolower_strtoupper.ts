import ts from 'typescript';
import { wrapperExpression } from '../utils/wrapper-expression';


export function refactor_strtolower_strtoupper<T extends ts.Node>(/*typeChecker: TypeChecker*/): ts.TransformerFactory<T> {
  return (context) => {
    let parent;
    const visit: ts.Visitor = (node) => {
      if (ts.isDecorator(node)) {
        return undefined;
      }

      if (
        ts.isCallExpression(node) &&
        ts.isIdentifier(node.expression) &&
        node.expression.text === 'strtolower'
      ) {
        return ts.createCall(
          ts.createPropertyAccess(
            wrapperExpression(node.arguments[0]),
            ts.createIdentifier("toLowerCase")
          ),
          undefined,
          []
        );
      }


      if (
        ts.isCallExpression(node) &&
        ts.isIdentifier(node.expression) &&
        node.expression.text === 'strtoupper'
      ) {
        return ts.createCall(
          ts.createPropertyAccess(
            wrapperExpression(node.arguments[0]),
            ts.createIdentifier("toUpperCase")
          ),
          undefined,
          []
        );
      }

      return ts.visitEachChild(node, (child) => visit(child), context);
    };

    return (node) => ts.visitNode(node, visit);
  };
}
