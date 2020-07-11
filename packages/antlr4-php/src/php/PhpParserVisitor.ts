// Generated from ./packages/antlr4-php/src/php/PhpParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { CloneExpressionContext } from "./PhpParser";
import { NewExpressionContext } from "./PhpParser";
import { IndexerExpressionContext } from "./PhpParser";
import { CastExpressionContext } from "./PhpParser";
import { UnaryOperatorExpressionContext } from "./PhpParser";
import { PrefixIncDecExpressionContext } from "./PhpParser";
import { PostfixIncDecExpressionContext } from "./PhpParser";
import { PrintExpressionContext } from "./PhpParser";
import { ChainExpressionContext } from "./PhpParser";
import { ScalarExpressionContext } from "./PhpParser";
import { BackQuoteStringExpressionContext } from "./PhpParser";
import { ParenthesisExpressionContext } from "./PhpParser";
import { ArrayCreationExpressionContext } from "./PhpParser";
import { SpecialWordExpressionContext } from "./PhpParser";
import { LambdaFunctionExpressionContext } from "./PhpParser";
import { ArithmeticExpressionContext } from "./PhpParser";
import { InstanceOfExpressionContext } from "./PhpParser";
import { ComparisonExpressionContext } from "./PhpParser";
import { BitwiseExpressionContext } from "./PhpParser";
import { ConditionalExpressionContext } from "./PhpParser";
import { NullCoalescingExpressionContext } from "./PhpParser";
import { SpaceshipExpressionContext } from "./PhpParser";
import { AssignmentExpressionContext } from "./PhpParser";
import { LogicalExpressionContext } from "./PhpParser";
import { HtmlDocumentContext } from "./PhpParser";
import { HtmlElementOrPhpBlockContext } from "./PhpParser";
import { HtmlElementsContext } from "./PhpParser";
import { HtmlElementContext } from "./PhpParser";
import { ScriptTextPartContext } from "./PhpParser";
import { PhpBlockContext } from "./PhpParser";
import { ImportStatementContext } from "./PhpParser";
import { TopStatementContext } from "./PhpParser";
import { UseDeclarationContext } from "./PhpParser";
import { UseDeclarationContentListContext } from "./PhpParser";
import { UseDeclarationContentContext } from "./PhpParser";
import { NamespaceDeclarationContext } from "./PhpParser";
import { NamespaceStatementContext } from "./PhpParser";
import { FunctionDeclarationContext } from "./PhpParser";
import { ClassDeclarationContext } from "./PhpParser";
import { ClassEntryTypeContext } from "./PhpParser";
import { InterfaceListContext } from "./PhpParser";
import { TypeParameterListInBracketsContext } from "./PhpParser";
import { TypeParameterListContext } from "./PhpParser";
import { TypeParameterWithDefaultsListContext } from "./PhpParser";
import { TypeParameterDeclContext } from "./PhpParser";
import { TypeParameterWithDefaultDeclContext } from "./PhpParser";
import { GenericDynamicArgsContext } from "./PhpParser";
import { AttributesContext } from "./PhpParser";
import { AttributesGroupContext } from "./PhpParser";
import { AttributeContext } from "./PhpParser";
import { AttributeArgListContext } from "./PhpParser";
import { AttributeNamedArgListContext } from "./PhpParser";
import { AttributeNamedArgContext } from "./PhpParser";
import { InnerStatementListContext } from "./PhpParser";
import { InnerStatementContext } from "./PhpParser";
import { StatementContext } from "./PhpParser";
import { EmptyStatementContext } from "./PhpParser";
import { BlockStatementContext } from "./PhpParser";
import { IfStatementContext } from "./PhpParser";
import { ElseIfStatementContext } from "./PhpParser";
import { ElseIfColonStatementContext } from "./PhpParser";
import { ElseStatementContext } from "./PhpParser";
import { ElseColonStatementContext } from "./PhpParser";
import { WhileStatementContext } from "./PhpParser";
import { DoWhileStatementContext } from "./PhpParser";
import { ForStatementContext } from "./PhpParser";
import { ForInitContext } from "./PhpParser";
import { ForUpdateContext } from "./PhpParser";
import { SwitchStatementContext } from "./PhpParser";
import { SwitchBlockContext } from "./PhpParser";
import { BreakStatementContext } from "./PhpParser";
import { ContinueStatementContext } from "./PhpParser";
import { ReturnStatementContext } from "./PhpParser";
import { ExpressionStatementContext } from "./PhpParser";
import { UnsetStatementContext } from "./PhpParser";
import { ForeachStatementContext } from "./PhpParser";
import { TryCatchFinallyContext } from "./PhpParser";
import { CatchClauseContext } from "./PhpParser";
import { FinallyStatementContext } from "./PhpParser";
import { ThrowStatementContext } from "./PhpParser";
import { GotoStatementContext } from "./PhpParser";
import { DeclareStatementContext } from "./PhpParser";
import { InlineHtmlStatementContext } from "./PhpParser";
import { InlineHtmlContext } from "./PhpParser";
import { DeclareListContext } from "./PhpParser";
import { FormalParameterListContext } from "./PhpParser";
import { FormalParameterContext } from "./PhpParser";
import { TypeHintContext } from "./PhpParser";
import { GlobalStatementContext } from "./PhpParser";
import { GlobalVarContext } from "./PhpParser";
import { EchoStatementContext } from "./PhpParser";
import { StaticVariableStatementContext } from "./PhpParser";
import { ClassStatementContext } from "./PhpParser";
import { TraitAdaptationsContext } from "./PhpParser";
import { TraitAdaptationStatementContext } from "./PhpParser";
import { TraitPrecedenceContext } from "./PhpParser";
import { TraitAliasContext } from "./PhpParser";
import { TraitMethodReferenceContext } from "./PhpParser";
import { BaseCtorCallContext } from "./PhpParser";
import { MethodBodyContext } from "./PhpParser";
import { PropertyModifiersContext } from "./PhpParser";
import { MemberModifiersContext } from "./PhpParser";
import { VariableInitializerContext } from "./PhpParser";
import { IdentifierInititalizerContext } from "./PhpParser";
import { GlobalConstantDeclarationContext } from "./PhpParser";
import { ExpressionListContext } from "./PhpParser";
import { ParenthesesContext } from "./PhpParser";
import { ExpressionContext } from "./PhpParser";
import { AssignableContext } from "./PhpParser";
import { ArrayCreationContext } from "./PhpParser";
import { LambdaFunctionExprContext } from "./PhpParser";
import { NewExprContext } from "./PhpParser";
import { AssignmentOperatorContext } from "./PhpParser";
import { YieldExpressionContext } from "./PhpParser";
import { ArrayItemListContext } from "./PhpParser";
import { ArrayItemContext } from "./PhpParser";
import { LambdaFunctionUseVarsContext } from "./PhpParser";
import { LambdaFunctionUseVarContext } from "./PhpParser";
import { QualifiedStaticTypeRefContext } from "./PhpParser";
import { TypeRefContext } from "./PhpParser";
import { AnoymousClassContext } from "./PhpParser";
import { IndirectTypeRefContext } from "./PhpParser";
import { QualifiedNamespaceNameContext } from "./PhpParser";
import { NamespaceNameListContext } from "./PhpParser";
import { NamespaceNameTailContext } from "./PhpParser";
import { QualifiedNamespaceNameListContext } from "./PhpParser";
import { ArgumentsContext } from "./PhpParser";
import { ActualArgumentContext } from "./PhpParser";
import { ConstantInititalizerContext } from "./PhpParser";
import { ConstantArrayItemListContext } from "./PhpParser";
import { ConstantArrayItemContext } from "./PhpParser";
import { ConstantContext } from "./PhpParser";
import { LiteralConstantContext } from "./PhpParser";
import { NumericConstantContext } from "./PhpParser";
import { ClassConstantContext } from "./PhpParser";
import { StringConstantContext } from "./PhpParser";
import { StringContext } from "./PhpParser";
import { InterpolatedStringPartContext } from "./PhpParser";
import { ChainListContext } from "./PhpParser";
import { ChainContext } from "./PhpParser";
import { ChainOriginContext } from "./PhpParser";
import { MemberAccessContext } from "./PhpParser";
import { FunctionCallContext } from "./PhpParser";
import { FunctionCallNameContext } from "./PhpParser";
import { ActualArgumentsContext } from "./PhpParser";
import { ChainBaseContext } from "./PhpParser";
import { KeyedFieldNameContext } from "./PhpParser";
import { KeyedSimpleFieldNameContext } from "./PhpParser";
import { KeyedVariableContext } from "./PhpParser";
import { SquareCurlyExpressionContext } from "./PhpParser";
import { AssignmentListContext } from "./PhpParser";
import { AssignmentListElementContext } from "./PhpParser";
import { ModifierContext } from "./PhpParser";
import { IdentifierContext } from "./PhpParser";
import { MemberModifierContext } from "./PhpParser";
import { MagicConstantContext } from "./PhpParser";
import { MagicMethodContext } from "./PhpParser";
import { PrimitiveTypeContext } from "./PhpParser";
import { CastOperationContext } from "./PhpParser";
import { CommentContext } from "./PhpParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PhpParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface PhpParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `CloneExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCloneExpression?: (ctx: CloneExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `NewExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewExpression?: (ctx: NewExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `IndexerExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexerExpression?: (ctx: IndexerExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `CastExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastExpression?: (ctx: CastExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnaryOperatorExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryOperatorExpression?: (ctx: UnaryOperatorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PrefixIncDecExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixIncDecExpression?: (ctx: PrefixIncDecExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PostfixIncDecExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixIncDecExpression?: (ctx: PostfixIncDecExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PrintExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintExpression?: (ctx: PrintExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ChainExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChainExpression?: (ctx: ChainExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ScalarExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScalarExpression?: (ctx: ScalarExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BackQuoteStringExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackQuoteStringExpression?: (ctx: BackQuoteStringExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ParenthesisExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesisExpression?: (ctx: ParenthesisExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArrayCreationExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayCreationExpression?: (ctx: ArrayCreationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `SpecialWordExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecialWordExpression?: (ctx: SpecialWordExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LambdaFunctionExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaFunctionExpression?: (ctx: LambdaFunctionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArithmeticExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticExpression?: (ctx: ArithmeticExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `InstanceOfExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceOfExpression?: (ctx: InstanceOfExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ComparisonExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonExpression?: (ctx: ComparisonExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitwiseExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseExpression?: (ctx: BitwiseExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ConditionalExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `NullCoalescingExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullCoalescingExpression?: (ctx: NullCoalescingExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `SpaceshipExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpaceshipExpression?: (ctx: SpaceshipExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AssignmentExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentExpression?: (ctx: AssignmentExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LogicalExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalExpression?: (ctx: LogicalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.htmlDocument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHtmlDocument?: (ctx: HtmlDocumentContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.htmlElementOrPhpBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHtmlElementOrPhpBlock?: (ctx: HtmlElementOrPhpBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.htmlElements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHtmlElements?: (ctx: HtmlElementsContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.htmlElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHtmlElement?: (ctx: HtmlElementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.scriptTextPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScriptTextPart?: (ctx: ScriptTextPartContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.phpBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPhpBlock?: (ctx: PhpBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.importStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportStatement?: (ctx: ImportStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.topStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTopStatement?: (ctx: TopStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.useDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUseDeclaration?: (ctx: UseDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.useDeclarationContentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUseDeclarationContentList?: (ctx: UseDeclarationContentListContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.useDeclarationContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUseDeclarationContent?: (ctx: UseDeclarationContentContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.namespaceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespaceDeclaration?: (ctx: NamespaceDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.namespaceStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespaceStatement?: (ctx: NamespaceStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.classDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.classEntryType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassEntryType?: (ctx: ClassEntryTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.interfaceList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceList?: (ctx: InterfaceListContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.typeParameterListInBrackets`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameterListInBrackets?: (ctx: TypeParameterListInBracketsContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.typeParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameterList?: (ctx: TypeParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.typeParameterWithDefaultsList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameterWithDefaultsList?: (ctx: TypeParameterWithDefaultsListContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.typeParameterDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameterDecl?: (ctx: TypeParameterDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.typeParameterWithDefaultDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameterWithDefaultDecl?: (ctx: TypeParameterWithDefaultDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.genericDynamicArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericDynamicArgs?: (ctx: GenericDynamicArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.attributes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributes?: (ctx: AttributesContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.attributesGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributesGroup?: (ctx: AttributesGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute?: (ctx: AttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.attributeArgList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeArgList?: (ctx: AttributeArgListContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.attributeNamedArgList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeNamedArgList?: (ctx: AttributeNamedArgListContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.attributeNamedArg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeNamedArg?: (ctx: AttributeNamedArgContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.innerStatementList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInnerStatementList?: (ctx: InnerStatementListContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.innerStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInnerStatement?: (ctx: InnerStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.emptyStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyStatement?: (ctx: EmptyStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.blockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatement?: (ctx: BlockStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.elseIfStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseIfStatement?: (ctx: ElseIfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.elseIfColonStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseIfColonStatement?: (ctx: ElseIfColonStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.elseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseStatement?: (ctx: ElseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.elseColonStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseColonStatement?: (ctx: ElseColonStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.doWhileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoWhileStatement?: (ctx: DoWhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.forInit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInit?: (ctx: ForInitContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.forUpdate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForUpdate?: (ctx: ForUpdateContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.switchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.switchBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchBlock?: (ctx: SwitchBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.continueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStatement?: (ctx: ContinueStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.unsetStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnsetStatement?: (ctx: UnsetStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.foreachStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForeachStatement?: (ctx: ForeachStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.tryCatchFinally`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryCatchFinally?: (ctx: TryCatchFinallyContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.catchClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchClause?: (ctx: CatchClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.finallyStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinallyStatement?: (ctx: FinallyStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.throwStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrowStatement?: (ctx: ThrowStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.gotoStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGotoStatement?: (ctx: GotoStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.declareStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclareStatement?: (ctx: DeclareStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.inlineHtmlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineHtmlStatement?: (ctx: InlineHtmlStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.inlineHtml`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineHtml?: (ctx: InlineHtmlContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.declareList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclareList?: (ctx: DeclareListContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.formalParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterList?: (ctx: FormalParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.formalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameter?: (ctx: FormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.typeHint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeHint?: (ctx: TypeHintContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.globalStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalStatement?: (ctx: GlobalStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.globalVar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalVar?: (ctx: GlobalVarContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.echoStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEchoStatement?: (ctx: EchoStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.staticVariableStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticVariableStatement?: (ctx: StaticVariableStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.classStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassStatement?: (ctx: ClassStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.traitAdaptations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTraitAdaptations?: (ctx: TraitAdaptationsContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.traitAdaptationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTraitAdaptationStatement?: (ctx: TraitAdaptationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.traitPrecedence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTraitPrecedence?: (ctx: TraitPrecedenceContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.traitAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTraitAlias?: (ctx: TraitAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.traitMethodReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTraitMethodReference?: (ctx: TraitMethodReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.baseCtorCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBaseCtorCall?: (ctx: BaseCtorCallContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.methodBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodBody?: (ctx: MethodBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.propertyModifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyModifiers?: (ctx: PropertyModifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.memberModifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberModifiers?: (ctx: MemberModifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.variableInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableInitializer?: (ctx: VariableInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.identifierInititalizer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierInititalizer?: (ctx: IdentifierInititalizerContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.globalConstantDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalConstantDeclaration?: (ctx: GlobalConstantDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.parentheses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParentheses?: (ctx: ParenthesesContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.assignable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignable?: (ctx: AssignableContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.arrayCreation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayCreation?: (ctx: ArrayCreationContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.lambdaFunctionExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaFunctionExpr?: (ctx: LambdaFunctionExprContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.newExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewExpr?: (ctx: NewExprContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.assignmentOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentOperator?: (ctx: AssignmentOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.yieldExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYieldExpression?: (ctx: YieldExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.arrayItemList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayItemList?: (ctx: ArrayItemListContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.arrayItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayItem?: (ctx: ArrayItemContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.lambdaFunctionUseVars`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaFunctionUseVars?: (ctx: LambdaFunctionUseVarsContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.lambdaFunctionUseVar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaFunctionUseVar?: (ctx: LambdaFunctionUseVarContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.qualifiedStaticTypeRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedStaticTypeRef?: (ctx: QualifiedStaticTypeRefContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.typeRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeRef?: (ctx: TypeRefContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.anoymousClass`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnoymousClass?: (ctx: AnoymousClassContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.indirectTypeRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndirectTypeRef?: (ctx: IndirectTypeRefContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.qualifiedNamespaceName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedNamespaceName?: (ctx: QualifiedNamespaceNameContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.namespaceNameList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespaceNameList?: (ctx: NamespaceNameListContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.namespaceNameTail`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespaceNameTail?: (ctx: NamespaceNameTailContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.qualifiedNamespaceNameList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedNamespaceNameList?: (ctx: QualifiedNamespaceNameListContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.actualArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActualArgument?: (ctx: ActualArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.constantInititalizer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantInititalizer?: (ctx: ConstantInititalizerContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.constantArrayItemList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantArrayItemList?: (ctx: ConstantArrayItemListContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.constantArrayItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantArrayItem?: (ctx: ConstantArrayItemContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.literalConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralConstant?: (ctx: LiteralConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.numericConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericConstant?: (ctx: NumericConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.classConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassConstant?: (ctx: ClassConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.stringConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringConstant?: (ctx: StringConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.interpolatedStringPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterpolatedStringPart?: (ctx: InterpolatedStringPartContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.chainList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChainList?: (ctx: ChainListContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.chain`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChain?: (ctx: ChainContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.chainOrigin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChainOrigin?: (ctx: ChainOriginContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.memberAccess`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberAccess?: (ctx: MemberAccessContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.functionCallName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallName?: (ctx: FunctionCallNameContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.actualArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActualArguments?: (ctx: ActualArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.chainBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChainBase?: (ctx: ChainBaseContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.keyedFieldName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyedFieldName?: (ctx: KeyedFieldNameContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.keyedSimpleFieldName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyedSimpleFieldName?: (ctx: KeyedSimpleFieldNameContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.keyedVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyedVariable?: (ctx: KeyedVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.squareCurlyExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSquareCurlyExpression?: (ctx: SquareCurlyExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.assignmentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentList?: (ctx: AssignmentListContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.assignmentListElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentListElement?: (ctx: AssignmentListElementContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.modifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifier?: (ctx: ModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.memberModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberModifier?: (ctx: MemberModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.magicConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMagicConstant?: (ctx: MagicConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.magicMethod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMagicMethod?: (ctx: MagicMethodContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.castOperation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastOperation?: (ctx: CastOperationContext) => Result;

	/**
	 * Visit a parse tree produced by `PhpParser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;
}

