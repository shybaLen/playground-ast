import ts, { CallExpression } from 'typescript';


export function refactor_sprintf<T extends ts.Node>(/*typeChecker: TypeChecker*/): ts.TransformerFactory<T> {
  return (context) => {
    let parent;
    const visit: ts.Visitor = (node) => {
      if (ts.isDecorator(node)) {
        return undefined;
      }
      if (
        ts.isCallExpression(node) &&
        ts.isIdentifier(node.expression) &&
        node.expression.text === 'sprintf' && ts.isStringLiteral(node.arguments[0])
      ) {
        const stringLiteral: ts.StringLiteral = node.arguments[0] as ts.StringLiteral;
        const str = stringLiteral.text;
        const splitted = str.split(/%\w/g)
        const restNode = node.arguments.slice(1);
        const first = splitted.shift() || "";
        const last = splitted.pop() || "";

        return ts.createTemplateExpression(
          ts.createTemplateHead(
            first,
            first
          ),
          [
            ...splitted.map(it=>{
            return ts.createTemplateSpan(
              restNode.shift() || ts.createIdentifier(''),
              ts.createTemplateMiddle(
                it,
                it
              )
            )
          }), ts.createTemplateSpan(
              restNode.shift() || ts.createIdentifier(''),
              ts.createTemplateTail(
                last,
                last
              )
            )
          ]
        )

      }

      return ts.visitEachChild(node, (child) => visit(child), context);
    };

    return (node) => ts.visitNode(node, visit);
  };
}
