import ts from 'typescript';
import { wrapperExpression } from '../utils/wrapper-expression';


export function refactor_explode_implode<T extends ts.Node>(/*typeChecker: TypeChecker*/): ts.TransformerFactory<T> {
  return (context) => {
    let parent;
    const visit: ts.Visitor = (node) => {
      if (ts.isDecorator(node)) {
        return undefined;
      }
      if (
        ts.isCallExpression(node) &&
        ts.isIdentifier(node.expression) &&
        node.expression.text === 'explode'
      ) {
        return ts.createCall(
          ts.createPropertyAccess(
            wrapperExpression(node.arguments[1]),
            ts.createIdentifier("split")
          ),
          undefined,
          [node.arguments[0]]
        )
      }

      if (
        ts.isCallExpression(node) &&
        ts.isIdentifier(node.expression) &&
        node.expression.text === 'implode'
      ) {
        return ts.createCall(
          ts.createPropertyAccess(
            wrapperExpression(node.arguments[1]),
            ts.createIdentifier("join")
          ),
          undefined,
          [node.arguments[0]]
        )
      }

      return ts.visitEachChild(node, (child) => visit(child), context);
    };

    return (node) => ts.visitNode(node, visit);
  };
}
