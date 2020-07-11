import { PhpParserVisitor } from '@php/PhpParserVisitor';
import { kebabCase } from 'lodash';
import {
  ActualArgumentContext,
  ActualArgumentsContext,
  AnoymousClassContext,
  ArgumentsContext,
  ArithmeticExpressionContext,
  ArrayCreationContext,
  ArrayCreationExpressionContext,
  ArrayItemContext,
  ArrayItemListContext,
  AssignableContext,
  AssignmentExpressionContext,
  AssignmentListContext,
  AssignmentListElementContext,
  AssignmentOperatorContext,
  AttributeArgListContext,
  AttributeContext,
  AttributeNamedArgContext,
  AttributeNamedArgListContext,
  AttributesContext,
  AttributesGroupContext,
  BackQuoteStringExpressionContext,
  BaseCtorCallContext,
  BitwiseExpressionContext,
  BlockStatementContext,
  BreakStatementContext,
  CastExpressionContext,
  CastOperationContext,
  CatchClauseContext,
  ChainBaseContext,
  ChainContext,
  ChainExpressionContext,
  ChainListContext,
  ChainOriginContext,
  ClassConstantContext,
  ClassDeclarationContext,
  ClassEntryTypeContext,
  ClassStatementContext,
  CloneExpressionContext,
  ComparisonExpressionContext,
  ConditionalExpressionContext,
  ConstantArrayItemContext,
  ConstantArrayItemListContext,
  ConstantContext,
  ConstantInititalizerContext,
  ContinueStatementContext,
  DeclareListContext,
  DeclareStatementContext,
  DoWhileStatementContext,
  EchoStatementContext,
  ElseColonStatementContext,
  ElseIfColonStatementContext,
  ElseIfStatementContext,
  ElseStatementContext,
  EmptyStatementContext,
  ExpressionContext,
  ExpressionListContext,
  ExpressionStatementContext,
  FinallyStatementContext,
  ForeachStatementContext,
  ForInitContext,
  FormalParameterContext,
  FormalParameterListContext,
  ForStatementContext,
  ForUpdateContext,
  FunctionCallContext,
  FunctionCallNameContext,
  FunctionDeclarationContext,
  GenericDynamicArgsContext,
  GlobalConstantDeclarationContext,
  GlobalStatementContext,
  GlobalVarContext,
  GotoStatementContext,
  HtmlDocumentContext,
  HtmlElementContext,
  HtmlElementOrPhpBlockContext,
  HtmlElementsContext,
  IdentifierContext,
  IdentifierInititalizerContext,
  IfStatementContext,
  ImportStatementContext,
  IndexerExpressionContext,
  IndirectTypeRefContext,
  InlineHtmlContext,
  InlineHtmlStatementContext,
  InnerStatementContext,
  InnerStatementListContext,
  InstanceOfExpressionContext,
  InterfaceListContext,
  InterpolatedStringPartContext,
  KeyedFieldNameContext,
  KeyedSimpleFieldNameContext,
  KeyedVariableContext,
  LambdaFunctionExprContext,
  LambdaFunctionExpressionContext,
  LambdaFunctionUseVarContext,
  LambdaFunctionUseVarsContext,
  LiteralConstantContext,
  LogicalExpressionContext,
  MagicConstantContext,
  MagicMethodContext,
  MemberAccessContext,
  MemberModifierContext,
  MemberModifiersContext,
  MethodBodyContext,
  ModifierContext,
  NamespaceDeclarationContext,
  NamespaceNameListContext,
  NamespaceNameTailContext,
  NamespaceStatementContext,
  NewExprContext,
  NewExpressionContext,
  NullCoalescingExpressionContext,
  NumericConstantContext,
  ParenthesesContext,
  ParenthesisExpressionContext,
  PhpBlockContext,
  PostfixIncDecExpressionContext,
  PrefixIncDecExpressionContext,
  PrimitiveTypeContext,
  PrintExpressionContext,
  PropertyModifiersContext,
  QualifiedNamespaceNameContext,
  QualifiedNamespaceNameListContext,
  QualifiedStaticTypeRefContext,
  ReturnStatementContext,
  ScalarExpressionContext,
  ScriptTextPartContext,
  SpaceshipExpressionContext,
  SpecialWordExpressionContext,
  SquareCurlyExpressionContext,
  StatementContext,
  StaticVariableStatementContext,
  StringConstantContext,
  StringContext,
  SwitchBlockContext,
  SwitchStatementContext,
  ThrowStatementContext,
  TopStatementContext,
  TraitAdaptationsContext,
  TraitAdaptationStatementContext,
  TraitAliasContext,
  TraitMethodReferenceContext,
  TraitPrecedenceContext,
  TryCatchFinallyContext,
  TypeHintContext,
  TypeParameterDeclContext,
  TypeParameterListContext,
  TypeParameterListInBracketsContext,
  TypeParameterWithDefaultDeclContext,
  TypeParameterWithDefaultsListContext,
  TypeRefContext,
  UnaryOperatorExpressionContext,
  UnsetStatementContext,
  UseDeclarationContentContext,
  UseDeclarationContentListContext,
  UseDeclarationContext,
  VariableInitializerContext,
  WhileStatementContext,
  YieldExpressionContext
} from '@php/PhpParser';
import { AbstractParseTreeVisitor, ErrorNode, ParseTree, RuleNode, TerminalNode } from 'antlr4ts/tree';
import { Token } from 'antlr4ts';
import { OutputEmit } from './outputEmit';
import { PhpLexer } from '@php/PhpLexer';


export class PhpVisitor extends AbstractParseTreeVisitor<any> implements PhpParserVisitor<any> {
  constructor(public output: OutputEmit) {
    super();
  }

  visitActualArgument(ctx: ActualArgumentContext): any {
    return this.visitChildren(ctx);
  }

  visitActualArguments(ctx: ActualArgumentsContext): any {
    return this.visitChildren(ctx);
  }

  visitAnoymousClass(ctx: AnoymousClassContext): any {
    return this.visitChildren(ctx);
  }

  visitArguments(ctx: ArgumentsContext): any {
    return this.visitChildren(ctx);
  }

  visitArithmeticExpression(ctx: ArithmeticExpressionContext): any {
    return this.visitChildren(ctx);
  }

  visitArrayCreation(ctx: ArrayCreationContext): any {
    return this.visitChildren(ctx);
  }

  visitArrayCreationExpression(ctx: ArrayCreationExpressionContext): any {
    return this.visitChildren(ctx);
  }

  visitArrayItem(ctx: ArrayItemContext): any {
    return this.visitChildren(ctx);
  }

  visitArrayItemList(ctx: ArrayItemListContext): any {
    return this.visitChildren(ctx);
  }

  visitAssignable(ctx: AssignableContext): any {
    return this.visitChildren(ctx);
  }

  visitAssignmentExpression(ctx: AssignmentExpressionContext): any {
    return this.visitChildren(ctx);
  }

  visitAssignmentList(ctx: AssignmentListContext): any {
    return this.visitChildren(ctx);
  }

  visitAssignmentListElement(ctx: AssignmentListElementContext): any {
    return this.visitChildren(ctx);
  }

  visitAssignmentOperator(ctx: AssignmentOperatorContext): any {
    return this.visitChildren(ctx);
  }

  visitAttribute(ctx: AttributeContext): any {
    return this.visitChildren(ctx);
  }

  visitAttributeArgList(ctx: AttributeArgListContext): any {
    return this.visitChildren(ctx);
  }

  visitAttributeNamedArg(ctx: AttributeNamedArgContext): any {
    return this.visitChildren(ctx);
  }

  visitAttributeNamedArgList(ctx: AttributeNamedArgListContext): any {
    return this.visitChildren(ctx);
  }

  visitAttributes(ctx: AttributesContext): any {
    return this.visitChildren(ctx);
  }

  visitAttributesGroup(ctx: AttributesGroupContext): any {
    return this.visitChildren(ctx);
  }

  visitBackQuoteStringExpression(ctx: BackQuoteStringExpressionContext): any {
    return this.visitChildren(ctx);
  }

  visitBaseCtorCall(ctx: BaseCtorCallContext): any {
    return this.visitChildren(ctx);
  }

  visitBitwiseExpression(ctx: BitwiseExpressionContext): any {
    return this.visitChildren(ctx);
  }

  visitBlockStatement(ctx: BlockStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitBreakStatement(ctx: BreakStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitCastExpression(ctx: CastExpressionContext): any {
    return this.visitChildren(ctx);
  }

  visitCastOperation(ctx: CastOperationContext): any {
    return this.visitChildren(ctx);
  }

  visitCatchClause(ctx: CatchClauseContext): any {
    return this.visitChildren(ctx);
  }

  visitChain(ctx: ChainContext): any {
    return this.visitChildren(ctx);
  }

  visitChainBase(ctx: ChainBaseContext): any {
    return this.visitChildren(ctx);
  }

  visitChainExpression(ctx: ChainExpressionContext): any {
    return this.visitChildren(ctx);
  }

  visitChainList(ctx: ChainListContext): any {
    return this.visitChildren(ctx);
  }

  visitChainOrigin(ctx: ChainOriginContext): any {
    return this.visitChildren(ctx);
  }

  visitClassConstant(ctx: ClassConstantContext): any {
    return this.visitChildren(ctx);
  }

  visitClassDeclaration(ctx: ClassDeclarationContext): any {
    return this.visitChildren(ctx);
  }

  visitClassEntryType(ctx: ClassEntryTypeContext): any {
    return this.visitChildren(ctx);
  }

  visitClassStatement(ctx: ClassStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitCloneExpression(ctx: CloneExpressionContext): any {
    return this.visitChildren(ctx);
  }

  visitComparisonExpression(ctx: ComparisonExpressionContext): any {
    return this.visitChildren(ctx);
  }

  visitConditionalExpression(ctx: ConditionalExpressionContext): any {
    return this.visitChildren(ctx);
  }

  visitConstant(ctx: ConstantContext): any {
    return this.visitChildren(ctx);
  }

  visitConstantArrayItem(ctx: ConstantArrayItemContext): any {
    return this.visitChildren(ctx);
  }

  visitConstantArrayItemList(ctx: ConstantArrayItemListContext): any {
    return this.visitChildren(ctx);
  }

  visitConstantInititalizer(ctx: ConstantInititalizerContext): any {
    return this.visitChildren(ctx);
  }

  visitContinueStatement(ctx: ContinueStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitDeclareList(ctx: DeclareListContext): any {
    return this.visitChildren(ctx);
  }

  visitDeclareStatement(ctx: DeclareStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitDoWhileStatement(ctx: DoWhileStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitEchoStatement(ctx: EchoStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitElseColonStatement(ctx: ElseColonStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitElseIfColonStatement(ctx: ElseIfColonStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitElseIfStatement(ctx: ElseIfStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitElseStatement(ctx: ElseStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitEmptyStatement(ctx: EmptyStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitExpression(ctx: ExpressionContext): any {
    return this.visitChildren(ctx);
  }

  visitExpressionList(ctx: ExpressionListContext): any {
    return this.visitChildren(ctx);
  }

  visitExpressionStatement(ctx: ExpressionStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitFinallyStatement(ctx: FinallyStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitForInit(ctx: ForInitContext): any {
    return this.visitChildren(ctx);
  }

  visitForStatement(ctx: ForStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitForUpdate(ctx: ForUpdateContext): any {
    return this.visitChildren(ctx);
  }

  visitForeachStatement(ctx: ForeachStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitFormalParameter(ctx: FormalParameterContext): any {
    return this.visitChildren(ctx);
  }

  visitFormalParameterList(ctx: FormalParameterListContext): any {
    return this.visitChildren(ctx);
  }

  visitFunctionCall(ctx: FunctionCallContext): any {
    return this.visitChildren(ctx);
  }

  visitFunctionCallName(ctx: FunctionCallNameContext): any {
    return this.visitChildren(ctx);
  }

  visitFunctionDeclaration(ctx: FunctionDeclarationContext): any {
    return this.visitChildren(ctx);
  }

  visitGenericDynamicArgs(ctx: GenericDynamicArgsContext): any {
    return this.visitChildren(ctx);
  }

  visitGlobalConstantDeclaration(ctx: GlobalConstantDeclarationContext): any {
    return this.visitChildren(ctx);
  }

  visitGlobalStatement(ctx: GlobalStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitGlobalVar(ctx: GlobalVarContext): any {
    return this.visitChildren(ctx);
  }

  visitGotoStatement(ctx: GotoStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitHtmlDocument(ctx: HtmlDocumentContext): any {
    // this.visit(ctx.htmlElementOrPhpBlock())

    return this.visitChildren(ctx);
  }

  visitHtmlElement(ctx: HtmlElementContext): any {
    return this.visitChildren(ctx);
  }

  visitHtmlElementOrPhpBlock(ctx: HtmlElementOrPhpBlockContext): any {
    return this.visitChildren(ctx);
  }

  visitHtmlElements(ctx: HtmlElementsContext): any {
    return this.visitChildren(ctx);
  }

  visitIdentifier(ctx: IdentifierContext): any {
    return this.visitChildren(ctx);
  }

  visitIdentifierInititalizer(ctx: IdentifierInititalizerContext): any {
    return this.visitChildren(ctx);
  }

  visitIfStatement(ctx: IfStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitImportStatement(ctx: ImportStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitIndexerExpression(ctx: IndexerExpressionContext): any {
    return this.visitChildren(ctx);
  }

  visitIndirectTypeRef(ctx: IndirectTypeRefContext): any {
    return this.visitChildren(ctx);
  }

  visitInlineHtml(ctx: InlineHtmlContext): any {
    return this.visitChildren(ctx);
  }

  visitInlineHtmlStatement(ctx: InlineHtmlStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitInnerStatement(ctx: InnerStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitInnerStatementList(ctx: InnerStatementListContext): any {
    return this.visitChildren(ctx);
  }

  visitInstanceOfExpression(ctx: InstanceOfExpressionContext): any {
    return this.visitChildren(ctx);
  }

  visitInterfaceList(ctx: InterfaceListContext): any {
    return this.visitChildren(ctx);
  }

  visitInterpolatedStringPart(ctx: InterpolatedStringPartContext): any {
    return this.visitChildren(ctx);
  }

  visitKeyedFieldName(ctx: KeyedFieldNameContext): any {
    return this.visitChildren(ctx);
  }

  visitKeyedSimpleFieldName(ctx: KeyedSimpleFieldNameContext): any {
    return this.visitChildren(ctx);
  }

  visitKeyedVariable(ctx: KeyedVariableContext): any {
    return this.visitChildren(ctx);
  }

  visitLambdaFunctionExpr(ctx: LambdaFunctionExprContext): any {
    return this.visitChildren(ctx);
  }

  visitLambdaFunctionExpression(ctx: LambdaFunctionExpressionContext): any {
    return this.visitChildren(ctx);
  }

  visitLambdaFunctionUseVar(ctx: LambdaFunctionUseVarContext): any {
    return this.visitChildren(ctx);
  }

  visitLambdaFunctionUseVars(ctx: LambdaFunctionUseVarsContext): any {
    return this.visitChildren(ctx);
  }

  visitLiteralConstant(ctx: LiteralConstantContext): any {
    return this.visitChildren(ctx);
  }

  visitLogicalExpression(ctx: LogicalExpressionContext): any {
    return this.visitChildren(ctx);
  }

  visitMagicConstant(ctx: MagicConstantContext): any {
    return this.visitChildren(ctx);
  }

  visitMagicMethod(ctx: MagicMethodContext): any {
    return this.visitChildren(ctx);
  }

  visitMemberAccess(ctx: MemberAccessContext): any {
    return this.visitChildren(ctx);
  }

  visitMemberModifier(ctx: MemberModifierContext): any {
    return this.visitChildren(ctx);
  }

  visitMemberModifiers(ctx: MemberModifiersContext): any {
    return this.visitChildren(ctx);
  }

  visitMethodBody(ctx: MethodBodyContext): any {
    return this.visitChildren(ctx);
  }

  visitModifier(ctx: ModifierContext): any {
    return this.visitChildren(ctx);
  }

  visitNamespaceDeclaration(ctx: NamespaceDeclarationContext): any {
    const fileName = this.visitChildren(ctx.namespaceNameList());
    this.output.file = fileName;
  }

  visitNamespaceNameList(ctx: NamespaceNameListContext): any {
    let result = this.defaultResult();
    let n = ctx.childCount;
    let output = [];
    for (let i = 0; i < n; i++) {
      if (!this.shouldVisitNextChild(ctx, result)) {
        break;
      }
      let c = ctx.getChild(i);
      if (c instanceof IdentifierContext) {
        output.push(kebabCase((c as IdentifierContext).text));
      } else {
        output.push(c.accept(this));
      }
    }
    return output.join('');
  }

  visitNamespaceNameTail(ctx: NamespaceNameTailContext): any {
    return this.visitChildren(ctx);
  }

  visitNamespaceStatement(ctx: NamespaceStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitNewExpr(ctx: NewExprContext): any {
    return this.visitChildren(ctx);
  }

  visitNewExpression(ctx: NewExpressionContext): any {
    return this.visitChildren(ctx);
  }

  visitNullCoalescingExpression(ctx: NullCoalescingExpressionContext): any {
    return this.visitChildren(ctx);
  }

  visitNumericConstant(ctx: NumericConstantContext): any {
    return this.visitChildren(ctx);
  }

  visitParentheses(ctx: ParenthesesContext): any {
    return this.visitChildren(ctx);
  }

  visitParenthesisExpression(ctx: ParenthesisExpressionContext): any {
    return this.visitChildren(ctx);
  }

  visitPhpBlock(ctx: PhpBlockContext): any {
    return this.visitChildren(ctx);
  }

  visitPostfixIncDecExpression(ctx: PostfixIncDecExpressionContext): any {
    return this.visitChildren(ctx);
  }

  visitPrefixIncDecExpression(ctx: PrefixIncDecExpressionContext): any {
    return this.visitChildren(ctx);
  }

  visitPrimitiveType(ctx: PrimitiveTypeContext): any {
    return this.visitChildren(ctx);
  }

  visitPrintExpression(ctx: PrintExpressionContext): any {
    return this.visitChildren(ctx);
  }

  visitPropertyModifiers(ctx: PropertyModifiersContext): any {
    return this.visitChildren(ctx);
  }

  visitQualifiedNamespaceName(ctx: QualifiedNamespaceNameContext): any {
    const fileName = this.visitChildren(ctx.namespaceNameList());
    this.output.file = fileName;
  }

  visitQualifiedNamespaceNameList(ctx: QualifiedNamespaceNameListContext): any {
    return this.visitChildren(ctx);
  }

  visitQualifiedStaticTypeRef(ctx: QualifiedStaticTypeRefContext): any {
    return this.visitChildren(ctx);
  }

  visitReturnStatement(ctx: ReturnStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitScalarExpression(ctx: ScalarExpressionContext): any {
    return this.visitChildren(ctx);
  }

  visitScriptTextPart(ctx: ScriptTextPartContext): any {
    return this.visitChildren(ctx);
  }

  visitSpaceshipExpression(ctx: SpaceshipExpressionContext): any {
    return this.visitChildren(ctx);
  }

  visitSpecialWordExpression(ctx: SpecialWordExpressionContext): any {
    return this.visitChildren(ctx);
  }

  visitSquareCurlyExpression(ctx: SquareCurlyExpressionContext): any {
    return this.visitChildren(ctx);
  }

  visitStatement(ctx: StatementContext): any {
    return this.visitChildren(ctx);
  }

  visitStaticVariableStatement(ctx: StaticVariableStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitString(ctx: StringContext): any {
    return this.visitChildren(ctx);
  }

  visitStringConstant(ctx: StringConstantContext): any {
    return this.visitChildren(ctx);
  }

  visitSwitchBlock(ctx: SwitchBlockContext): any {
    return this.visitChildren(ctx);
  }

  visitSwitchStatement(ctx: SwitchStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitThrowStatement(ctx: ThrowStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitTopStatement(ctx: TopStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitTraitAdaptationStatement(ctx: TraitAdaptationStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitTraitAdaptations(ctx: TraitAdaptationsContext): any {
    return this.visitChildren(ctx);
  }

  visitTraitAlias(ctx: TraitAliasContext): any {
    return this.visitChildren(ctx);
  }

  visitTraitMethodReference(ctx: TraitMethodReferenceContext): any {
    return this.visitChildren(ctx);
  }

  visitTraitPrecedence(ctx: TraitPrecedenceContext): any {
    return this.visitChildren(ctx);
  }

  visitTryCatchFinally(ctx: TryCatchFinallyContext): any {
    return this.visitChildren(ctx);
  }

  visitTypeHint(ctx: TypeHintContext): any {
    return this.visitChildren(ctx);
  }

  visitTypeParameterDecl(ctx: TypeParameterDeclContext): any {
    return this.visitChildren(ctx);
  }

  visitTypeParameterList(ctx: TypeParameterListContext): any {
    return this.visitChildren(ctx);
  }

  visitTypeParameterListInBrackets(ctx: TypeParameterListInBracketsContext): any {
    return this.visitChildren(ctx);
  }

  visitTypeParameterWithDefaultDecl(ctx: TypeParameterWithDefaultDeclContext): any {
    return this.visitChildren(ctx);
  }

  visitTypeParameterWithDefaultsList(ctx: TypeParameterWithDefaultsListContext): any {
    return this.visitChildren(ctx);
  }

  visitTypeRef(ctx: TypeRefContext): any {
    return this.visitChildren(ctx);
  }

  visitUnaryOperatorExpression(ctx: UnaryOperatorExpressionContext): any {
    return this.visitChildren(ctx);
  }

  visitUnsetStatement(ctx: UnsetStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitUseDeclaration(ctx: UseDeclarationContext): any {
    return this.visitChildren(ctx);
  }

  visitUseDeclarationContent(ctx: UseDeclarationContentContext): any {
    return this.visitChildren(ctx);
  }

  visitUseDeclarationContentList(ctx: UseDeclarationContentListContext): any {
    return this.visitChildren(ctx);
  }

  visitVariableInitializer(ctx: VariableInitializerContext): any {
    return this.visitChildren(ctx);
  }

  visitWhileStatement(ctx: WhileStatementContext): any {
    return this.visitChildren(ctx);
  }

  visitYieldExpression(ctx: YieldExpressionContext): any {
    return this.visitChildren(ctx);
  }

  visitTerminal(node: TerminalNode): any {
    if (node.symbol.type === Token.EOF) {
    } else if (node.symbol.type === PhpLexer.NamespaceSeparator) {
      this.output.write(`${node.symbol.type}: /`);
      return '/';
    } else {
      this.output.write(`${node.symbol.type}: ${node.text}`);
    }

    return node.text;
  }

  protected defaultResult(): any {
  }

}
