import { camelCase, upperFirst } from 'lodash';
import ts from 'typescript';
import commentParse from 'comment-parser';
import { debug } from 'debug';
import { TextToToken } from './text-to-token';

const d = debug('visitor');

function createSynthesizedComment(comment, isMulti = false, hasTrailingNewLine?): ts.SynthesizedComment {
  return {
    text: comment || '',
    kind: (isMulti ? ts.SyntaxKind.MultiLineCommentTrivia : ts.SyntaxKind.SingleLineCommentTrivia) as ts.CommentKind,
    pos: -1,
    end: -1,
    hasTrailingNewLine
  };
}


export class OutputVisitor {
  private missingFn: any[] = [];
  private currentComment: commentParse.Comment;
  private currentClazzName: any;

  constructor(public output) {

  }

  visitProgram(ast) {
    const res = [];
    if (Array.isArray(ast.children)) {
      for (let it of ast.children) {
        res.push(this.visit(it));
      }
    }
    if (res.length === 1) {
      return res.pop();
    } else {
      return res;
    }
  }

  visitNamespace(ast) {
    const nAst = ts.createSourceFile(ast.name.replace('\\', '/'), '', ts.ScriptTarget.Latest, undefined, ts.ScriptKind.TS);
    const global = {
      stmts: [],
      clazzList: []
    };

    this._forEachAsts(ast.children, global);
    nAst.statements = ts.createNodeArray([...global.stmts, ...global.clazzList]);
    return nAst;
  }

  visitUsegroup(ast, ctx) {
    this._forEachAsts(ast.items, ctx.stmts);
  }

  visitUseitem(ast, ctx) {
    const splited = ast.name.split('\\');
    const clz = splited.pop();
    const module = splited.join('/') || 'ROOT';
    const alias = ast.alias && ast.alias.name;
    const rst = ts.createImportDeclaration(undefined,
      undefined,
      ts.createImportClause(undefined,
        ts.createNamedImports([
          alias ?
            ts.createImportSpecifier(ts.createIdentifier(clz), ts.createIdentifier(alias)) :
            ts.createImportSpecifier(undefined, ts.createIdentifier(clz))
        ])
      ),
      ts.createStringLiteral(module)
    );

    ctx.push(rst);

    return rst;
  }

  _visitClassOrInterface(ast, type, ctx) {
    const { clazzList } = ctx;
    const clazzName = ast.name.name;
    const _extends = ast.extends;

    this.currentClazzName = clazzName;
    const _implements = ast.implements && ast.implements.map(it => {
      return ts.createExpressionWithTypeArguments(
        undefined,
        ts.createIdentifier(it.name)
      );
    });
    const comments = ast.leadingComments && ast.leadingComments.reduce((prev, curr) => {
      const contents = commentParse(curr.value);

      contents.forEach(it => {
        if (curr.kind === 'commentblock') {
          prev.push(createSynthesizedComment(it.description, true, true));
        } else if (curr.kind === 'commentline') {
          prev.push(createSynthesizedComment(it.description, false));
        }
      });
      return prev;
    }, []);

    //class body
    const clazzCtx = {
      traits: [],
      properties: [],
      methods: []
    };
    this._forEachAsts(ast.body, clazzCtx);

    // tx.createJSDocNode
    let nAst: ts.ClassDeclaration | ts.InterfaceDeclaration;
    if (type === 'class') {
      nAst = ts.createClassDeclaration(
        undefined,
        undefined,
        ts.createIdentifier(clazzName),
        undefined,
        [
          _extends ? ts.createHeritageClause(
            ts.SyntaxKind.ExtendsKeyword,
            [
              ts.createExpressionWithTypeArguments(
                undefined,
                this.visit(_extends)
              )]
          ) : undefined,
          _implements ? ts.createHeritageClause(
            ts.SyntaxKind.ImplementsKeyword,
            _implements
          ) : undefined
        ].filter(it => !!it),
        [
          ...clazzCtx.properties,
          ...clazzCtx.methods
        ]
      );
    } else if (type === 'interface') {
      nAst = ts.createInterfaceDeclaration(
        undefined,
        undefined,
        ts.createIdentifier(clazzName),
        undefined,
        [ts.createHeritageClause(
          ts.SyntaxKind.ImplementsKeyword,
          _implements
        )],
        [
          ...clazzCtx.properties,
          ...clazzCtx.methods
        ]
      );
    }
    if (comments) {
      ts.setSyntheticLeadingComments(nAst, comments);
    }


    ctx.clazzList.push(nAst);

    this.currentClazzName = undefined;
    return nAst;
  }

  visitClass(ast, ctx) {

    return this._visitClassOrInterface(ast, 'class', ctx);
    //
    // ts.updateClassDeclaration()

  }

  visitTraituse(ast, ctx) {
    const { traits } = ctx;
    ast.traits.forEach(it => {
      traits.push(it.name.replace('\\', '/'));
    });

  }

  visitPropertystatement(ast, ctx) {
    let node;

    const properties = this._visitArrayList(ast.properties, ctx);

    let modifiers = this._handleModifier(ast);


    properties.forEach((it: ts.PropertyDeclaration) => {
      it.modifiers = ts.createNodeArray([...it.modifiers, ...modifiers]);
    });
    const propertyComments = this._visitComments(ast);

    let type: string;
    if (propertyComments) {
      const comment = this.currentComment;
      if (comment && comment.tags.length > 0) {
        const lastTag = comment.tags.find(it => it.tag === 'var');
        if (lastTag && lastTag.name) {
          properties[0].type = this._visitCommentType(lastTag);
        }
      }
      ts.setSyntheticLeadingComments(properties[0], propertyComments);
    }


    ctx.properties = [...ctx.properties, ...properties];

    return properties;
  }

  visitProperty(ast) {
    return ts.createProperty(
      undefined,
      [],
      ts.createIdentifier(ast.name.name),
      undefined,
      ts.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword),
      ast.value ? this.visit(ast.value) : undefined
    );
  }

  visitMethod(ast, ctx) {
    const methodName = this.visit(ast.name) as ts.Identifier;
    const comments = this._visitComments(ast);
    const modifiers = this._handleModifier(ast);
    const parameters = this._visitArrayList(ast.arguments, ctx);
    const body = ast.body ? this.visit(ast.body, ctx) : undefined;
    let node;
    if (ast.name.name === '__construct') {
      node = ts.createConstructor(
        undefined,
        modifiers,
        parameters,
        body
      );


    } else {
      node = ts.createMethod(
        undefined,
        modifiers,
        undefined,
        this.visit(ast.name),
        undefined,
        undefined,
        parameters,
        undefined,
        body
      );

    }

    if (node) {
      if (ast.leadingComments) {
        ts.setSyntheticLeadingComments(node, comments);
      }
      ctx.methods.push(node);
    }
    this.currentComment = undefined;
  }

  visitNullkeyword(ast, ctx) {
    return ts.createNull();
  }

  visitParameter(ast, ctx) {
    const typeInfo = this.currentComment.tags
      .filter(it => it.tag === 'param')
      .find(it => it.description === `$${ast.name!.name}`);

    return ts.createParameter(
      undefined,
      undefined,
      undefined,
      this.visit(ast.name),
      undefined,
      typeInfo ? this._visitCommentType(typeInfo) : undefined,
      ast.value ? this.visit(ast.value) : undefined
    );
  }


  //region method body
  visitBlock(ast, ctx) {
    return ts.createBlock(
      this._visitArrayList(ast.children, ctx),
      true
    );
  }

  visitExpressionstatement(ast, ctx) {
    const comments = this._visitComments(ast);

    let node = this.visit(ast.expression, ctx);

    if (comments && node) {
      ts.setSyntheticLeadingComments(node, comments);
    }

    return node;
  }

  visitAssign(ast, ctx) {
    const left = this.visit(ast.left);
    const right = this.visit(ast.right);
    if (ast.left && ast.left.kind === 'offsetlookup' && ast.left.offset === false) {
      return ts.createExpressionStatement(ts.createCall(
        ts.createPropertyAccess(
          this.visit(ast.left.what),
          ts.createIdentifier('push')
        ),
        undefined,
        [right]
      ));

    }
    return ts.createBinary(
      left,
      TextToToken[ast.operator],
      right
    );
  }

  visitCall(ast, ctx) {
    return ts.createCall(
      this.visit(ast.what),
      undefined,
      this._visitArrayList(ast.arguments, ctx)
    );

  }

  visitOffsetlookup(ast, ctx) {
    if (ast.offset === false) {
      //make visitor never come here
      return ts.createElementAccess(
        this.visit(ast.what, ctx),
        ts.createIdentifier('')
      );
    }
    return ts.createElementAccess(
      this.visit(ast.what, ctx),
      this.visit(ast.offset, ctx)
    );
  }

  visitPropertylookup(ast, ctx) {
    if (ast.offset.kind === 'encapsedpart') {
      return ts.createElementAccess(
        this.visit(ast.what, ctx),
        this.visit(ast.offset.expression, ctx)
      );
    }
    return ts.createPropertyAccess(
      this.visit(ast.what, ctx),
      this.visit(ast.offset, ctx)
    );
  }

  visitVariable(ast, ctx) {
    if (ast.name === 'this') {
      return ts.createThis();
    } else {
      return ts.createIdentifier(ast.name);
    }
  }

  visitReturn(ast, ctx) {
    return ts.createReturn(
      ast.expr ? this.visit(ast.expr) : undefined
    );
  }

  visitNoop(ast, ctx) {
    return ts.createIdentifier('');
  }

  visitEntry(ast, ctx) {
    return this.visit(ast.value);
  }

  visitIf(ast, ctx) {
    return ts.createIf(
      this.visit(ast.test),
      this.visit(ast.body),
      ast.alternate ? this.visit(ast.alternate) : undefined
    );
  }

  visitWhile(ast, ctx) {
    return ts.createWhile(
      this.visit(ast.test, ctx),
      this.visit(ast.body, ctx)
    );
  }

  visitForeach(ast, ctx) {
    if (ast.source.kind === 'array') {
      return ts.createExpressionStatement(
        ts.createCall(
          ts.createPropertyAccess(
            ts.createArrayLiteral(
              this.visit(ast.source, ctx),
              false
            ),
            ts.createIdentifier('forEach')
          ),
          undefined,
          [
            ts.createArrowFunction(
              undefined,
              undefined,
              [
                ts.createParameter(
                  undefined,
                  undefined,
                  undefined,
                  this.visit(ast.value, ctx) || 'it',
                  undefined,
                  undefined,
                  undefined
                ),
                ts.createParameter(
                  undefined,
                  undefined,
                  undefined,
                  this.visit(ast.key, ctx) || 'index',
                  undefined,
                  undefined,
                  undefined
                )
              ],
              undefined,
              ts.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
              ts.createBlock(
                [],
                true
              )
            )]
        ));

    } else if (!ast.key) {
      return ts.createForOf(
        undefined,
        ts.createVariableDeclarationList(
          [
            ts.createVariableDeclaration(
              this.visit(ast.value, ctx),
              undefined,
              undefined
            )],
          ts.NodeFlags.Let
        ),
        this.visit(ast.source),
        this.visit(ast.body)
      );
    } else {
      return ts.createForOf(
        undefined,
        ts.createVariableDeclarationList(
          [
            ts.createVariableDeclaration(
              ts.createArrayBindingPattern([
                ast.key ? ts.createBindingElement(
                  undefined,
                  undefined,
                  this.visit(ast.key),
                  undefined
                ) : undefined,
                ast.value ? ts.createBindingElement(
                  undefined,
                  undefined,
                  this.visit(ast.value),
                  undefined
                ) : undefined
              ]),
              undefined,
              undefined
            )],
          ts.NodeFlags.Let
        ),
        ts.createCall(
          ts.createPropertyAccess(
            ts.createIdentifier('Object'),
            ts.createIdentifier('entries')
          ),
          undefined,
          [this.visit(ast.source)]
        ),
        this.visit(ast.body)
      );
    }
  }

  visitTry(ast, ctx) {
    if (ast.catches && ast.catches.length > 1) {
      return ts.createTry(
        this.visit(ast.body),
        ts.createCatchClause(
          ts.createVariableDeclaration(
            ts.createIdentifier('e'),
            undefined,
            undefined
          ),
          ts.createBlock(
            [
              ast.catches.map(it => {
                return ts.createIf(
                  ts.createBinary(
                    ts.createIdentifier('e'),
                    ts.createToken(ts.SyntaxKind.InstanceOfKeyword),
                    this.visit(it.what[0])
                  ),
                  ts.createBlock(
                    [
                      it.variable.name !== 'e' ? ts.createBlock(
                        [ts.createExpressionStatement(ts.createBinary(
                          ts.createIdentifier(it.variable.name),
                          ts.createToken(ts.SyntaxKind.EqualsToken),
                          ts.createIdentifier('e')
                        ))],
                        true
                      ) : ts.createEmptyStatement(),
                      ...this._visitArrayList(ast.children, ctx)
                    ],
                    true
                  ),
                  undefined
                );

              })

            ],
            true
          )
        ),
        this.visit(ast.always)
      );
    } else if (ast.catches && ast.catches.length === 1) {
      return ts.createTry(
        this.visit(ast.body),
        this.visit(ast.catches[0]),
        ast.always ? this.visit(ast.always) : undefined
      );
    } else {
      return ts.createTry(
        this.visit(ast.body),
        undefined,
        ast.always ? this.visit(ast.always) : undefined
      );
    }
  }

  visitCatch(ast, ctx) {
    const variable = ast.variable;
    const what = ast.what;

    return ts.createCatchClause(
      variable ? ts.createVariableDeclaration(
        this.visit(variable),
        this.visit(what[0]),
        undefined
      ) : undefined,
      this.visit(ast.body)
    );
  }

  visitThrow(ast, ctx) {
    return ts.createThrow(ast.what);
  }

  visitSwitch(ast, ctx) {
    return ts.createSwitch(
      this.visit(ast.test),
      this._visitCase(ast.body, ctx)
    );
  }

  visitCase(ast, ctx) {
    return ts.createCaseClause(
      this.visit(ast.test),
      this._visitArrayList(ast.body.children, ctx)
    );
  }

  visitBreak(ast, ctx) {
    return ts.createBreak();
  }

  visitNew(ast, ctx) {
    return ts.createNew(
      this.visit(ast.what, ctx),
      undefined,
      this._visitArrayList(ast.arguments, ctx)
    );
  }

  visitClosure(ast, ctx) {
    return ts.createFunctionDeclaration(
      undefined,
      undefined,
      undefined,
      ts.createIdentifier(''),
      undefined,
      this._visitArrayList(ast.arguments, ctx),
      undefined,
      this.visit(ast.body)
    );

  }

  visitYield(ast, ctx) {
    return ts.createYield(
      this.visit(ast.value)
    );
  }

  visitRetif(ast, ctx) {
    if (ast.trueExpr) {
      return ts.createExpressionStatement(
        ts.createConditional(
          this.visit(ast.test),
          ts.createToken(ts.SyntaxKind.QuestionToken),
          this.visit(ast.trueExpr),
          ts.createToken(ts.SyntaxKind.ColonToken),
          this.visit(ast.falseExpr)
        ));
    } else {
      return ts.createExpressionStatement(
        ts.createBinary(
          this.visit(ast.test),
          ts.createToken(ts.SyntaxKind.BarBarToken),
          this.visit(ast.falseExpr)
        ));

    }
  }

  visitBin(ast, ctx) {
    return ts.createBinary(
      this.visit(ast.left),
      ts.createToken(TextToToken[ast.type]),
      this.visit(ast.right)
    );
  }

  visitCast(ast, ctx) {
    const node = this.visit(ast.expr);
    ts.addSyntheticLeadingComment(
      node,
      ts.SyntaxKind.SingleLineCommentTrivia,
      `cast type ${ast.type}`,
      false
    );
    return node;
  }

  visitIsset(ast, ctx) {
    if (ast.variables && ast.variables.length > 0) {
      const list = ast.variables.map(it => {
        return ts.createBinary(
          this.visit(it, ctx),
          ts.createToken(ts.SyntaxKind.ExclamationEqualsEqualsToken),
          ts.createIdentifier('undefined')
        );
      });

      const first = list.shift();
      return list.reduce((curr, prev) => {
        return ts.createBinary(
          prev,
          ts.createToken(ts.SyntaxKind.AmpersandAmpersandToken),
          curr
        );
      }, first);

    } else {
      return ts.createIdentifier('/* error */');
    }

  }

  visitUnary(ast, ctx) {
    return ts.createPrefix(
      TextToToken[ast.type],
      this.visit(ast.what, ctx)
    );
  }

  visitStaticreference(ast, ctx) {
    return ts.createIdentifier(this.currentClazzName || 'static');
  }

  _visitCase(ast, ctx) {
    return ts.createCaseBlock(
      this._visitArrayList(ast, ctx)
    );
  }


  //endregion


  visitName(ast, ctx) {
    return ts.createIdentifier(ast.name);
  }

  visitIdentifier(ast, ctx) {
    return ts.createIdentifier(ast.name);
  }

  visitString(ast, ctx) {
    return ts.createStringLiteral(ast.value);
  }

  visitArray(ast, ctx) {
    const entries = ast.items;
    let objectEntries = [];
    if (entries.find(it => !!it.key)) {
      let idx = 0;
      for (let it of ast.items) {
        const value = this.visit(it.value);
        if (it.key.kind === 'string' || it.key.kind === 'number') {
          const key = this.visit(it.key);
          objectEntries.push(
            ts.createPropertyAssignment(
              key,
              value
            )
          );
        } else if (!it.key) {
          objectEntries.push(
            ts.createPropertyAssignment(
              ts.createNumericLiteral(`${idx++}`),
              value
            )
          );
        }
      }

      return ts.createObjectLiteral(
        objectEntries, true
      );

    } else {
      return ts.createArrayLiteral(
        this._visitArrayList(ast.items, ctx)
      );
    }
  }

  visitStaticlookup(ast, ctx) {
    return ts.createPropertyAccess(
      this.visit(ast.what, ctx),
      this.visit(ast.offset, ctx)
    );
  }

  visitNumber(ast, ctx) {
    return ts.createNumericLiteral(ast.value);
  }

  visitBoolean(ast, ctx) {
    if (ast.value === true || ast.raw === 'true') {
      return ts.createTrue();
    } else if (ast.value === false || ast.raw === 'false') {
      return ts.createFalse();
    }
  }

  _handleModifier(ast) {
    let modifiers = [];

    if (ast.isStatic) {
      modifiers.push(ts.createModifier(ts.SyntaxKind.StaticKeyword));
    }

    if (ast.isAbstract) {
      modifiers.push(ts.createModifier(ts.SyntaxKind.AbstractKeyword));
    }

    if (ast.visibility === 'public') {
      modifiers.push(ts.createModifier(ts.SyntaxKind.PublicKeyword));
    } else if (ast.visibility === 'protected') {
      modifiers.push(ts.createModifier(ts.SyntaxKind.ProtectedKeyword));
    } else if (ast.visibility === 'private') {
      modifiers.push(ts.createModifier(ts.SyntaxKind.PrivateKeyword));
    }

    return modifiers;
  }

  _visitCommentType(ast) {
    const type = ast.name.split('\\').filter(it => !!it).join('.');

    if (type === 'bool') {
      return ts.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword);
    } else if (type === 'array') {
      return ts.createArrayTypeNode(ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword));
    } else if (type === 'int') {
      return ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
    } else if (type === 'mixed') {
      return ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);
    } else {
      return ts.createTypeReferenceNode(
        ts.createIdentifier(type),
        undefined
      );
    }
  }

  _visitComments(ast) {
    if (Array.isArray(ast.leadingComments)) {

      const comments = ast.leadingComments.reduce((prev, curr) => {
        const contents = commentParse(curr.value);

        contents.forEach(it => {
          this.currentComment = it;
          if (curr.kind === 'commentblock') {
            prev.push(createSynthesizedComment(it.description, true, true));
          } else if (curr.kind === 'commentline') {
            prev.push(createSynthesizedComment(it.description, false));
          }
        });
        return prev;
      }, []);
      if (comments && comments.length > 0) {
        return comments;
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  }

  _forEachAsts(asts, ctx) {
    if (Array.isArray(asts)) {
      for (let it of asts) {
        this.visit(it, ctx);
      }
    }
  }

  _visitArrayList(asts, ctx) {
    const result = [];

    if (Array.isArray(asts)) {
      for (let it of asts) {
        const node = this.visit(it, ctx);
        if (node) {
          result.push(node);
        } else {
          console.warn(`node not return from ${it.kind}`);
        }
      }
    }
    return ts.createNodeArray(result);
  }

  visit(ast, ctx?) {
    if (ast === undefined || ast === null) {
      return undefined;
    }
    if (Array.isArray(ast)) {
      throw new Error(`should call visitArrayList, not visit`);
    }

    const fn = `visit${upperFirst(camelCase(ast.kind))}`;

    if (fn === 'visit') {
      throw new Error(`where is the ${ast.kind}`);
    }

    if (Reflect.has(this, fn)) {
      return this[fn](ast, ctx);
    } else {
      d(`${fn} is not exist in visitor`);

      if (this.missingFn.indexOf(fn) === -1) {
        this.missingFn.push(fn);
      }
      return this._visitArrayList(ast.children, ctx);

    }
  }

  flushLog() {
    this.missingFn.forEach(it => {
      console.log(`${it}(ast, ctx){\n}`);
    });
  }


  visitArrowfunc(ast, ctx) {
    return this.visitClosure(ast, ctx);
  }

  visitAssignref(ast, ctx) {
    return this.visitAssign(ast, ctx);
  }

  // visitByref(ast, ctx) {
  //   return this.visitx(ast);
  // }

  visitClassconstant(ast, ctx) {
    const { properties } = ctx;
    ast.constants.forEach(it => {
      const node = ts.createProperty(
        undefined,
        [ts.createModifier(ts.SyntaxKind.StaticKeyword)],
        this.visit(it.name, ctx),
        undefined,
        undefined,
        it.value ? this.visit(it.value, ctx) : undefined
      );
      properties.push(node);
    });

    return undefined;
  }

  visitClone(ast, ctx) {
    return ts.createExpressionStatement(
      ts.createCall(
        ts.createPropertyAccess(
          this.visit(ast.what),
          ts.createIdentifier('clone')
        ),
        undefined,
        []
      ));
  }

  // visitComment(ast, ctx) {
  //   return this.visit(ast.x);
  // }

  // visitCommentblock(ast, ctx) {
  //   return this.visit(ast.x);
  // }

  // visitCommentline(ast, ctx) {
  //   return this.visit(ast.x);
  // }

  visitConstant(ast, ctx) {
    return ts.createVariableDeclaration(
      this.visit(ast.name),
      undefined,
      ast.value ? this.visit(ast.value) : undefined
    );

  }

  visitConstantstatement(ast, ctx) {
    return ts.createVariableStatement(
      undefined,
      ts.createVariableDeclarationList(
        this._visitArrayList(ast.constants, ctx),
        ts.NodeFlags.Const
      )
    );
  }

  visitContinue(ast, ctx) {
    return ts.createContinue(
      ast.level ? `${ast.level}` : undefined
    );
  }

  // visitDeclaration(ast, ctx) {
  //   return this.visit(ast.x);
  // }

  // visitDeclare(ast, ctx) {
  //   // return this.visit(ast.x);
  // }

  // visitDeclaredirective(ast, ctx) {
  //   return this.visit(ast.x);
  // }

  visitDo(ast, ctx) {
    return ts.createDo(
      this.visit(ast.body),
      this.visit(ast.test)
    );
  }

  visitEcho(ast, ctx) {
    return ts.createExpressionStatement(
      ts.createCall(
        ts.createPropertyAccess(
          ts.createIdentifier('console'),
          ts.createIdentifier('log')
        ),
        undefined,
        this._visitArrayList(ast.expressions, ctx)
      ));
  }

  visitEmpty(ast, ctx) {
    return ts.createCall(
      ts.createIdentifier('empty'),
      undefined,
      [this.visit(ast.expression, ctx)]
    );
  }

  visitEncapsed(ast, ctx) {
    return ts.createStringLiteral(ast.raw.replace(/<<<([^\n]+?)\n(.+?)\n\1/gs, '$2'));
  }

  visitEncapsedpart(ast, ctx) {
    return this.visit(ast.expression);
  }

  // visitError(ast, ctx) {
  //   return this.visit(ast.x);
  // }

  // visitEval(ast, ctx) {
  //   return this.visit(ast.x);
  // }

  // visitExit(ast, ctx) {
  //   return this.visit(ast.x);
  // }

  // visitExpression(ast, ctx) {
  //   return this.visit(ast.x);
  // }

  visitFor(ast, ctx) {
    return ts.createFor(
      ts.createVariableDeclarationList(
        this._visitArrayList(ast.init, ctx),
        ts.NodeFlags.Let
      ),
      this._visitArrayList(ast.test, ctx)
        .reduce((curr, prev, idx) => {
          if (idx === 0) {
            return curr;
          }
          return ts.createBinary(
            prev,
            ts.createToken(ts.SyntaxKind.AmpersandAmpersandToken),
            curr
          );
        }),
      this._visitArrayList(ast.increment, ctx)
        .reduce((curr, prev, idx) => {
            if (idx === 0) {
              return curr;
            }
            return ts.createBinary(
              prev,
              ts.createToken(ts.SyntaxKind.CommaToken),
              curr
            );
          }
        ),
      this.visit(ast.body)
    );

  }

  visitFunction(ast, ctx) {
    return this.visit(ast.x);
  }

  // visitGlobal(ast, ctx) {
  //   return this.visit(ast.x);
  // }

  // visitGoto(ast, ctx) {
  //   return this.visit(ast.x);
  // }

  // visitHalt(ast, ctx) {
  //   return this.visit(ast.x);
  // }

  visitInclude(ast, ctx) {
    return ts.createIdentifier('import');
  }

  // visitInline(ast, ctx) {
  //   return this.visit(ast.x);
  // }

  visitInterface(ast, ctx) {
    return this._visitClassOrInterface(ast, 'interface', ctx);
  }

  // visitLabel(ast, ctx) {
  //   return this.visit(ast.x);
  // }

  visitList(ast, ctx) {
    return ts.createVariableStatement(
      undefined,
      ts.createVariableDeclarationList(
        [
          ts.createVariableDeclaration(
            ts.createObjectBindingPattern(
              this._visitArrayList(ast.items, ctx).map(it => {
                return ts.createBindingElement(
                  undefined,
                  undefined,
                  it,
                  undefined
                );
              })
            ),
            undefined,
            this.visit(ast.right, ctx)
          )
        ],
        ts.NodeFlags.Const
      )
    );

  }

  visitLiteral(ast, ctx) {
    return ts.createLiteral(ast.value);
  }

  // visitLocation(ast, ctx) {
  //   return this.visit(ast.x);
  // }

  // visitLookup(ast, ctx) {
  //   return this.visit(ast.x);
  // }

  visitMagic(ast, ctx) {
    return ts.createIdentifier(ast.value);
  }

  //
  // visitNowdoc(ast, ctx) {
  //   return this.visit(ast.x);
  // }

  visitOperation(ast, ctx) {
    return this.visit(ast.x);
  }

  visitParentreference(ast, ctx) {
    return ts.createSuper();
  }

  visitPosition(ast, ctx) {
    return this.visit(ast.x);
  }

  visitPost(ast, ctx) {
    let token;
    if (ast.type === '+') {
      token = ts.SyntaxKind.PlusPlusToken;
    } else if (ast.type === '-') {
      token = ts.SyntaxKind.MinusMinusToken;
    }
    return ts.createExpressionStatement(
      ts.createPostfix(
        this.visit(ast.what),
        token
      )
    );
  }

  visitPre(ast, ctx) {
    let token;
    if (ast.type === '+') {
      token = ts.SyntaxKind.PlusPlusToken;
    } else if (ast.type === '-') {
      token = ts.SyntaxKind.MinusMinusToken;
    }
    return ts.createExpressionStatement(
      ts.createPrefix(
        this.visit(ast.what),
        token
      )
    );
  }

  //
  // visitPrint(ast, ctx) {
  //   return this.visit(ast.x);
  // }

  // visitReference(ast, ctx) {
  //   return this.visit(ast.x);
  // }

  visitSelfreference(ast, ctx) {
    return ts.createIdentifier(this.currentClazzName);
  }

  // visitSilent(ast, ctx) {
  //   return this.visit(ast.x);
  // }

  // visitStatement(ast, ctx) {
  // }

  visitStatic(ast, ctx) {
    const node = ts.createVariableDeclarationList(
      ast.variables.map(it => {
        return ts.createVariableDeclaration(
          this.visit(it),
          undefined,
          undefined
        );
      }),
      ts.NodeFlags.Const
    );

    ts.addSyntheticLeadingComment(node, ts.SyntaxKind.SingleLineCommentTrivia, 'static', false);
    return node;

  }

  visitStaticvariable(ast, ctx) {
    return ts.createVariableDeclaration(
      this.visit(ast.variable),
      undefined,
      ast.defaultValue ? this.visit(ast.defaultValue) : undefined
    );
  }

  visitTrait(ast, ctx) {
    return this._visitClassOrInterface(ast, 'class', ctx);
  }

  // visitTraitalias(ast, ctx) {
  //   return this.visit(ast.x);
  // }

  // visitTraitprecedence(ast, ctx) {
  //   return this.visit(ast.x);
  // }

  // visitTypereference(ast, ctx) {
  //   return this.visit(ast.x);
  // }

  visitUnset(ast, ctx) {
    if (Array.isArray(ast.variables)) {
      if (ast.variables.length > 1) {
        return ts.createBlock(
          this._visitArrayList(ast.variables, ctx).map(it => {
            return ts.createExpressionStatement(ts.createDelete(it));
          }),
          true
        );
      } else if (ast.variables.length === 1) {
        return ts.createDelete(
          this.visit(ast.variables[0])
        );
      }
    }
  }

  visitVariadic(ast, ctx) {
    return ts.createParameter(
      undefined,
      undefined,
      ts.createToken(ts.SyntaxKind.DotDotDotToken),
      ts.createIdentifier('arg1'),
      undefined,
      undefined,
      undefined
    );
  }

  visitYieldfrom(ast, ctx) {
    const node = this.visitYield(ast, ctx);
    ts.addSyntheticLeadingComment(node, ts.SyntaxKind.SingleLineCommentTrivia, 'yield from', false);
    return node;
  }
}
