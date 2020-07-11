// Generated from ./packages/antlr4-php/src/php/PhpParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `PhpParser`.
 */
export interface PhpParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `CloneExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterCloneExpression?: (ctx: CloneExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `CloneExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitCloneExpression?: (ctx: CloneExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `NewExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNewExpression?: (ctx: NewExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `NewExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNewExpression?: (ctx: NewExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `IndexerExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIndexerExpression?: (ctx: IndexerExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `IndexerExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIndexerExpression?: (ctx: IndexerExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `CastExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterCastExpression?: (ctx: CastExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `CastExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitCastExpression?: (ctx: CastExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `UnaryOperatorExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterUnaryOperatorExpression?: (ctx: UnaryOperatorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryOperatorExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitUnaryOperatorExpression?: (ctx: UnaryOperatorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PrefixIncDecExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPrefixIncDecExpression?: (ctx: PrefixIncDecExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PrefixIncDecExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPrefixIncDecExpression?: (ctx: PrefixIncDecExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PostfixIncDecExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPostfixIncDecExpression?: (ctx: PostfixIncDecExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PostfixIncDecExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPostfixIncDecExpression?: (ctx: PostfixIncDecExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PrintExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPrintExpression?: (ctx: PrintExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PrintExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPrintExpression?: (ctx: PrintExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ChainExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterChainExpression?: (ctx: ChainExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ChainExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitChainExpression?: (ctx: ChainExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ScalarExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterScalarExpression?: (ctx: ScalarExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ScalarExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitScalarExpression?: (ctx: ScalarExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BackQuoteStringExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBackQuoteStringExpression?: (ctx: BackQuoteStringExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BackQuoteStringExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBackQuoteStringExpression?: (ctx: BackQuoteStringExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ParenthesisExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterParenthesisExpression?: (ctx: ParenthesisExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ParenthesisExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitParenthesisExpression?: (ctx: ParenthesisExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ArrayCreationExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterArrayCreationExpression?: (ctx: ArrayCreationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ArrayCreationExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitArrayCreationExpression?: (ctx: ArrayCreationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `SpecialWordExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSpecialWordExpression?: (ctx: SpecialWordExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `SpecialWordExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSpecialWordExpression?: (ctx: SpecialWordExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `LambdaFunctionExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLambdaFunctionExpression?: (ctx: LambdaFunctionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LambdaFunctionExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLambdaFunctionExpression?: (ctx: LambdaFunctionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ArithmeticExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticExpression?: (ctx: ArithmeticExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ArithmeticExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticExpression?: (ctx: ArithmeticExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `InstanceOfExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterInstanceOfExpression?: (ctx: InstanceOfExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `InstanceOfExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitInstanceOfExpression?: (ctx: InstanceOfExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ComparisonExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterComparisonExpression?: (ctx: ComparisonExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ComparisonExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitComparisonExpression?: (ctx: ComparisonExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitwiseExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseExpression?: (ctx: BitwiseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitwiseExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseExpression?: (ctx: BitwiseExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ConditionalExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ConditionalExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `NullCoalescingExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNullCoalescingExpression?: (ctx: NullCoalescingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `NullCoalescingExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNullCoalescingExpression?: (ctx: NullCoalescingExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `SpaceshipExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSpaceshipExpression?: (ctx: SpaceshipExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `SpaceshipExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSpaceshipExpression?: (ctx: SpaceshipExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AssignmentExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AssignmentExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `LogicalExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogicalExpression?: (ctx: LogicalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LogicalExpression`
	 * labeled alternative in `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogicalExpression?: (ctx: LogicalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.htmlDocument`.
	 * @param ctx the parse tree
	 */
	enterHtmlDocument?: (ctx: HtmlDocumentContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.htmlDocument`.
	 * @param ctx the parse tree
	 */
	exitHtmlDocument?: (ctx: HtmlDocumentContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.htmlElementOrPhpBlock`.
	 * @param ctx the parse tree
	 */
	enterHtmlElementOrPhpBlock?: (ctx: HtmlElementOrPhpBlockContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.htmlElementOrPhpBlock`.
	 * @param ctx the parse tree
	 */
	exitHtmlElementOrPhpBlock?: (ctx: HtmlElementOrPhpBlockContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.htmlElements`.
	 * @param ctx the parse tree
	 */
	enterHtmlElements?: (ctx: HtmlElementsContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.htmlElements`.
	 * @param ctx the parse tree
	 */
	exitHtmlElements?: (ctx: HtmlElementsContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.htmlElement`.
	 * @param ctx the parse tree
	 */
	enterHtmlElement?: (ctx: HtmlElementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.htmlElement`.
	 * @param ctx the parse tree
	 */
	exitHtmlElement?: (ctx: HtmlElementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.scriptTextPart`.
	 * @param ctx the parse tree
	 */
	enterScriptTextPart?: (ctx: ScriptTextPartContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.scriptTextPart`.
	 * @param ctx the parse tree
	 */
	exitScriptTextPart?: (ctx: ScriptTextPartContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.phpBlock`.
	 * @param ctx the parse tree
	 */
	enterPhpBlock?: (ctx: PhpBlockContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.phpBlock`.
	 * @param ctx the parse tree
	 */
	exitPhpBlock?: (ctx: PhpBlockContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.importStatement`.
	 * @param ctx the parse tree
	 */
	enterImportStatement?: (ctx: ImportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.importStatement`.
	 * @param ctx the parse tree
	 */
	exitImportStatement?: (ctx: ImportStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.topStatement`.
	 * @param ctx the parse tree
	 */
	enterTopStatement?: (ctx: TopStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.topStatement`.
	 * @param ctx the parse tree
	 */
	exitTopStatement?: (ctx: TopStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.useDeclaration`.
	 * @param ctx the parse tree
	 */
	enterUseDeclaration?: (ctx: UseDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.useDeclaration`.
	 * @param ctx the parse tree
	 */
	exitUseDeclaration?: (ctx: UseDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.useDeclarationContentList`.
	 * @param ctx the parse tree
	 */
	enterUseDeclarationContentList?: (ctx: UseDeclarationContentListContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.useDeclarationContentList`.
	 * @param ctx the parse tree
	 */
	exitUseDeclarationContentList?: (ctx: UseDeclarationContentListContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.useDeclarationContent`.
	 * @param ctx the parse tree
	 */
	enterUseDeclarationContent?: (ctx: UseDeclarationContentContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.useDeclarationContent`.
	 * @param ctx the parse tree
	 */
	exitUseDeclarationContent?: (ctx: UseDeclarationContentContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.namespaceDeclaration`.
	 * @param ctx the parse tree
	 */
	enterNamespaceDeclaration?: (ctx: NamespaceDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.namespaceDeclaration`.
	 * @param ctx the parse tree
	 */
	exitNamespaceDeclaration?: (ctx: NamespaceDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.namespaceStatement`.
	 * @param ctx the parse tree
	 */
	enterNamespaceStatement?: (ctx: NamespaceStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.namespaceStatement`.
	 * @param ctx the parse tree
	 */
	exitNamespaceStatement?: (ctx: NamespaceStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.classEntryType`.
	 * @param ctx the parse tree
	 */
	enterClassEntryType?: (ctx: ClassEntryTypeContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.classEntryType`.
	 * @param ctx the parse tree
	 */
	exitClassEntryType?: (ctx: ClassEntryTypeContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.interfaceList`.
	 * @param ctx the parse tree
	 */
	enterInterfaceList?: (ctx: InterfaceListContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.interfaceList`.
	 * @param ctx the parse tree
	 */
	exitInterfaceList?: (ctx: InterfaceListContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.typeParameterListInBrackets`.
	 * @param ctx the parse tree
	 */
	enterTypeParameterListInBrackets?: (ctx: TypeParameterListInBracketsContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.typeParameterListInBrackets`.
	 * @param ctx the parse tree
	 */
	exitTypeParameterListInBrackets?: (ctx: TypeParameterListInBracketsContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.typeParameterList`.
	 * @param ctx the parse tree
	 */
	enterTypeParameterList?: (ctx: TypeParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.typeParameterList`.
	 * @param ctx the parse tree
	 */
	exitTypeParameterList?: (ctx: TypeParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.typeParameterWithDefaultsList`.
	 * @param ctx the parse tree
	 */
	enterTypeParameterWithDefaultsList?: (ctx: TypeParameterWithDefaultsListContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.typeParameterWithDefaultsList`.
	 * @param ctx the parse tree
	 */
	exitTypeParameterWithDefaultsList?: (ctx: TypeParameterWithDefaultsListContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.typeParameterDecl`.
	 * @param ctx the parse tree
	 */
	enterTypeParameterDecl?: (ctx: TypeParameterDeclContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.typeParameterDecl`.
	 * @param ctx the parse tree
	 */
	exitTypeParameterDecl?: (ctx: TypeParameterDeclContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.typeParameterWithDefaultDecl`.
	 * @param ctx the parse tree
	 */
	enterTypeParameterWithDefaultDecl?: (ctx: TypeParameterWithDefaultDeclContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.typeParameterWithDefaultDecl`.
	 * @param ctx the parse tree
	 */
	exitTypeParameterWithDefaultDecl?: (ctx: TypeParameterWithDefaultDeclContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.genericDynamicArgs`.
	 * @param ctx the parse tree
	 */
	enterGenericDynamicArgs?: (ctx: GenericDynamicArgsContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.genericDynamicArgs`.
	 * @param ctx the parse tree
	 */
	exitGenericDynamicArgs?: (ctx: GenericDynamicArgsContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.attributes`.
	 * @param ctx the parse tree
	 */
	enterAttributes?: (ctx: AttributesContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.attributes`.
	 * @param ctx the parse tree
	 */
	exitAttributes?: (ctx: AttributesContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.attributesGroup`.
	 * @param ctx the parse tree
	 */
	enterAttributesGroup?: (ctx: AttributesGroupContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.attributesGroup`.
	 * @param ctx the parse tree
	 */
	exitAttributesGroup?: (ctx: AttributesGroupContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.attributeArgList`.
	 * @param ctx the parse tree
	 */
	enterAttributeArgList?: (ctx: AttributeArgListContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.attributeArgList`.
	 * @param ctx the parse tree
	 */
	exitAttributeArgList?: (ctx: AttributeArgListContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.attributeNamedArgList`.
	 * @param ctx the parse tree
	 */
	enterAttributeNamedArgList?: (ctx: AttributeNamedArgListContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.attributeNamedArgList`.
	 * @param ctx the parse tree
	 */
	exitAttributeNamedArgList?: (ctx: AttributeNamedArgListContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.attributeNamedArg`.
	 * @param ctx the parse tree
	 */
	enterAttributeNamedArg?: (ctx: AttributeNamedArgContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.attributeNamedArg`.
	 * @param ctx the parse tree
	 */
	exitAttributeNamedArg?: (ctx: AttributeNamedArgContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.innerStatementList`.
	 * @param ctx the parse tree
	 */
	enterInnerStatementList?: (ctx: InnerStatementListContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.innerStatementList`.
	 * @param ctx the parse tree
	 */
	exitInnerStatementList?: (ctx: InnerStatementListContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.innerStatement`.
	 * @param ctx the parse tree
	 */
	enterInnerStatement?: (ctx: InnerStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.innerStatement`.
	 * @param ctx the parse tree
	 */
	exitInnerStatement?: (ctx: InnerStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.emptyStatement`.
	 * @param ctx the parse tree
	 */
	enterEmptyStatement?: (ctx: EmptyStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.emptyStatement`.
	 * @param ctx the parse tree
	 */
	exitEmptyStatement?: (ctx: EmptyStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	enterBlockStatement?: (ctx: BlockStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	exitBlockStatement?: (ctx: BlockStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.elseIfStatement`.
	 * @param ctx the parse tree
	 */
	enterElseIfStatement?: (ctx: ElseIfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.elseIfStatement`.
	 * @param ctx the parse tree
	 */
	exitElseIfStatement?: (ctx: ElseIfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.elseIfColonStatement`.
	 * @param ctx the parse tree
	 */
	enterElseIfColonStatement?: (ctx: ElseIfColonStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.elseIfColonStatement`.
	 * @param ctx the parse tree
	 */
	exitElseIfColonStatement?: (ctx: ElseIfColonStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.elseStatement`.
	 * @param ctx the parse tree
	 */
	enterElseStatement?: (ctx: ElseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.elseStatement`.
	 * @param ctx the parse tree
	 */
	exitElseStatement?: (ctx: ElseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.elseColonStatement`.
	 * @param ctx the parse tree
	 */
	enterElseColonStatement?: (ctx: ElseColonStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.elseColonStatement`.
	 * @param ctx the parse tree
	 */
	exitElseColonStatement?: (ctx: ElseColonStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.doWhileStatement`.
	 * @param ctx the parse tree
	 */
	enterDoWhileStatement?: (ctx: DoWhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.doWhileStatement`.
	 * @param ctx the parse tree
	 */
	exitDoWhileStatement?: (ctx: DoWhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.forStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.forStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.forInit`.
	 * @param ctx the parse tree
	 */
	enterForInit?: (ctx: ForInitContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.forInit`.
	 * @param ctx the parse tree
	 */
	exitForInit?: (ctx: ForInitContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.forUpdate`.
	 * @param ctx the parse tree
	 */
	enterForUpdate?: (ctx: ForUpdateContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.forUpdate`.
	 * @param ctx the parse tree
	 */
	exitForUpdate?: (ctx: ForUpdateContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	enterSwitchStatement?: (ctx: SwitchStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	exitSwitchStatement?: (ctx: SwitchStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.switchBlock`.
	 * @param ctx the parse tree
	 */
	enterSwitchBlock?: (ctx: SwitchBlockContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.switchBlock`.
	 * @param ctx the parse tree
	 */
	exitSwitchBlock?: (ctx: SwitchBlockContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	enterBreakStatement?: (ctx: BreakStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	exitBreakStatement?: (ctx: BreakStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	enterContinueStatement?: (ctx: ContinueStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	exitContinueStatement?: (ctx: ContinueStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.unsetStatement`.
	 * @param ctx the parse tree
	 */
	enterUnsetStatement?: (ctx: UnsetStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.unsetStatement`.
	 * @param ctx the parse tree
	 */
	exitUnsetStatement?: (ctx: UnsetStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.foreachStatement`.
	 * @param ctx the parse tree
	 */
	enterForeachStatement?: (ctx: ForeachStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.foreachStatement`.
	 * @param ctx the parse tree
	 */
	exitForeachStatement?: (ctx: ForeachStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.tryCatchFinally`.
	 * @param ctx the parse tree
	 */
	enterTryCatchFinally?: (ctx: TryCatchFinallyContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.tryCatchFinally`.
	 * @param ctx the parse tree
	 */
	exitTryCatchFinally?: (ctx: TryCatchFinallyContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.catchClause`.
	 * @param ctx the parse tree
	 */
	enterCatchClause?: (ctx: CatchClauseContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.catchClause`.
	 * @param ctx the parse tree
	 */
	exitCatchClause?: (ctx: CatchClauseContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.finallyStatement`.
	 * @param ctx the parse tree
	 */
	enterFinallyStatement?: (ctx: FinallyStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.finallyStatement`.
	 * @param ctx the parse tree
	 */
	exitFinallyStatement?: (ctx: FinallyStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.throwStatement`.
	 * @param ctx the parse tree
	 */
	enterThrowStatement?: (ctx: ThrowStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.throwStatement`.
	 * @param ctx the parse tree
	 */
	exitThrowStatement?: (ctx: ThrowStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.gotoStatement`.
	 * @param ctx the parse tree
	 */
	enterGotoStatement?: (ctx: GotoStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.gotoStatement`.
	 * @param ctx the parse tree
	 */
	exitGotoStatement?: (ctx: GotoStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.declareStatement`.
	 * @param ctx the parse tree
	 */
	enterDeclareStatement?: (ctx: DeclareStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.declareStatement`.
	 * @param ctx the parse tree
	 */
	exitDeclareStatement?: (ctx: DeclareStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.inlineHtmlStatement`.
	 * @param ctx the parse tree
	 */
	enterInlineHtmlStatement?: (ctx: InlineHtmlStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.inlineHtmlStatement`.
	 * @param ctx the parse tree
	 */
	exitInlineHtmlStatement?: (ctx: InlineHtmlStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.inlineHtml`.
	 * @param ctx the parse tree
	 */
	enterInlineHtml?: (ctx: InlineHtmlContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.inlineHtml`.
	 * @param ctx the parse tree
	 */
	exitInlineHtml?: (ctx: InlineHtmlContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.declareList`.
	 * @param ctx the parse tree
	 */
	enterDeclareList?: (ctx: DeclareListContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.declareList`.
	 * @param ctx the parse tree
	 */
	exitDeclareList?: (ctx: DeclareListContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterList?: (ctx: FormalParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterList?: (ctx: FormalParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.formalParameter`.
	 * @param ctx the parse tree
	 */
	enterFormalParameter?: (ctx: FormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.formalParameter`.
	 * @param ctx the parse tree
	 */
	exitFormalParameter?: (ctx: FormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.typeHint`.
	 * @param ctx the parse tree
	 */
	enterTypeHint?: (ctx: TypeHintContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.typeHint`.
	 * @param ctx the parse tree
	 */
	exitTypeHint?: (ctx: TypeHintContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.globalStatement`.
	 * @param ctx the parse tree
	 */
	enterGlobalStatement?: (ctx: GlobalStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.globalStatement`.
	 * @param ctx the parse tree
	 */
	exitGlobalStatement?: (ctx: GlobalStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.globalVar`.
	 * @param ctx the parse tree
	 */
	enterGlobalVar?: (ctx: GlobalVarContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.globalVar`.
	 * @param ctx the parse tree
	 */
	exitGlobalVar?: (ctx: GlobalVarContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.echoStatement`.
	 * @param ctx the parse tree
	 */
	enterEchoStatement?: (ctx: EchoStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.echoStatement`.
	 * @param ctx the parse tree
	 */
	exitEchoStatement?: (ctx: EchoStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.staticVariableStatement`.
	 * @param ctx the parse tree
	 */
	enterStaticVariableStatement?: (ctx: StaticVariableStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.staticVariableStatement`.
	 * @param ctx the parse tree
	 */
	exitStaticVariableStatement?: (ctx: StaticVariableStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.classStatement`.
	 * @param ctx the parse tree
	 */
	enterClassStatement?: (ctx: ClassStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.classStatement`.
	 * @param ctx the parse tree
	 */
	exitClassStatement?: (ctx: ClassStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.traitAdaptations`.
	 * @param ctx the parse tree
	 */
	enterTraitAdaptations?: (ctx: TraitAdaptationsContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.traitAdaptations`.
	 * @param ctx the parse tree
	 */
	exitTraitAdaptations?: (ctx: TraitAdaptationsContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.traitAdaptationStatement`.
	 * @param ctx the parse tree
	 */
	enterTraitAdaptationStatement?: (ctx: TraitAdaptationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.traitAdaptationStatement`.
	 * @param ctx the parse tree
	 */
	exitTraitAdaptationStatement?: (ctx: TraitAdaptationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.traitPrecedence`.
	 * @param ctx the parse tree
	 */
	enterTraitPrecedence?: (ctx: TraitPrecedenceContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.traitPrecedence`.
	 * @param ctx the parse tree
	 */
	exitTraitPrecedence?: (ctx: TraitPrecedenceContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.traitAlias`.
	 * @param ctx the parse tree
	 */
	enterTraitAlias?: (ctx: TraitAliasContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.traitAlias`.
	 * @param ctx the parse tree
	 */
	exitTraitAlias?: (ctx: TraitAliasContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.traitMethodReference`.
	 * @param ctx the parse tree
	 */
	enterTraitMethodReference?: (ctx: TraitMethodReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.traitMethodReference`.
	 * @param ctx the parse tree
	 */
	exitTraitMethodReference?: (ctx: TraitMethodReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.baseCtorCall`.
	 * @param ctx the parse tree
	 */
	enterBaseCtorCall?: (ctx: BaseCtorCallContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.baseCtorCall`.
	 * @param ctx the parse tree
	 */
	exitBaseCtorCall?: (ctx: BaseCtorCallContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.methodBody`.
	 * @param ctx the parse tree
	 */
	enterMethodBody?: (ctx: MethodBodyContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.methodBody`.
	 * @param ctx the parse tree
	 */
	exitMethodBody?: (ctx: MethodBodyContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.propertyModifiers`.
	 * @param ctx the parse tree
	 */
	enterPropertyModifiers?: (ctx: PropertyModifiersContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.propertyModifiers`.
	 * @param ctx the parse tree
	 */
	exitPropertyModifiers?: (ctx: PropertyModifiersContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.memberModifiers`.
	 * @param ctx the parse tree
	 */
	enterMemberModifiers?: (ctx: MemberModifiersContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.memberModifiers`.
	 * @param ctx the parse tree
	 */
	exitMemberModifiers?: (ctx: MemberModifiersContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.variableInitializer`.
	 * @param ctx the parse tree
	 */
	enterVariableInitializer?: (ctx: VariableInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.variableInitializer`.
	 * @param ctx the parse tree
	 */
	exitVariableInitializer?: (ctx: VariableInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.identifierInititalizer`.
	 * @param ctx the parse tree
	 */
	enterIdentifierInititalizer?: (ctx: IdentifierInititalizerContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.identifierInititalizer`.
	 * @param ctx the parse tree
	 */
	exitIdentifierInititalizer?: (ctx: IdentifierInititalizerContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.globalConstantDeclaration`.
	 * @param ctx the parse tree
	 */
	enterGlobalConstantDeclaration?: (ctx: GlobalConstantDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.globalConstantDeclaration`.
	 * @param ctx the parse tree
	 */
	exitGlobalConstantDeclaration?: (ctx: GlobalConstantDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.parentheses`.
	 * @param ctx the parse tree
	 */
	enterParentheses?: (ctx: ParenthesesContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.parentheses`.
	 * @param ctx the parse tree
	 */
	exitParentheses?: (ctx: ParenthesesContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.assignable`.
	 * @param ctx the parse tree
	 */
	enterAssignable?: (ctx: AssignableContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.assignable`.
	 * @param ctx the parse tree
	 */
	exitAssignable?: (ctx: AssignableContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.arrayCreation`.
	 * @param ctx the parse tree
	 */
	enterArrayCreation?: (ctx: ArrayCreationContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.arrayCreation`.
	 * @param ctx the parse tree
	 */
	exitArrayCreation?: (ctx: ArrayCreationContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.lambdaFunctionExpr`.
	 * @param ctx the parse tree
	 */
	enterLambdaFunctionExpr?: (ctx: LambdaFunctionExprContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.lambdaFunctionExpr`.
	 * @param ctx the parse tree
	 */
	exitLambdaFunctionExpr?: (ctx: LambdaFunctionExprContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.newExpr`.
	 * @param ctx the parse tree
	 */
	enterNewExpr?: (ctx: NewExprContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.newExpr`.
	 * @param ctx the parse tree
	 */
	exitNewExpr?: (ctx: NewExprContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.yieldExpression`.
	 * @param ctx the parse tree
	 */
	enterYieldExpression?: (ctx: YieldExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.yieldExpression`.
	 * @param ctx the parse tree
	 */
	exitYieldExpression?: (ctx: YieldExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.arrayItemList`.
	 * @param ctx the parse tree
	 */
	enterArrayItemList?: (ctx: ArrayItemListContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.arrayItemList`.
	 * @param ctx the parse tree
	 */
	exitArrayItemList?: (ctx: ArrayItemListContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.arrayItem`.
	 * @param ctx the parse tree
	 */
	enterArrayItem?: (ctx: ArrayItemContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.arrayItem`.
	 * @param ctx the parse tree
	 */
	exitArrayItem?: (ctx: ArrayItemContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.lambdaFunctionUseVars`.
	 * @param ctx the parse tree
	 */
	enterLambdaFunctionUseVars?: (ctx: LambdaFunctionUseVarsContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.lambdaFunctionUseVars`.
	 * @param ctx the parse tree
	 */
	exitLambdaFunctionUseVars?: (ctx: LambdaFunctionUseVarsContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.lambdaFunctionUseVar`.
	 * @param ctx the parse tree
	 */
	enterLambdaFunctionUseVar?: (ctx: LambdaFunctionUseVarContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.lambdaFunctionUseVar`.
	 * @param ctx the parse tree
	 */
	exitLambdaFunctionUseVar?: (ctx: LambdaFunctionUseVarContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.qualifiedStaticTypeRef`.
	 * @param ctx the parse tree
	 */
	enterQualifiedStaticTypeRef?: (ctx: QualifiedStaticTypeRefContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.qualifiedStaticTypeRef`.
	 * @param ctx the parse tree
	 */
	exitQualifiedStaticTypeRef?: (ctx: QualifiedStaticTypeRefContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.typeRef`.
	 * @param ctx the parse tree
	 */
	enterTypeRef?: (ctx: TypeRefContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.typeRef`.
	 * @param ctx the parse tree
	 */
	exitTypeRef?: (ctx: TypeRefContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.anoymousClass`.
	 * @param ctx the parse tree
	 */
	enterAnoymousClass?: (ctx: AnoymousClassContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.anoymousClass`.
	 * @param ctx the parse tree
	 */
	exitAnoymousClass?: (ctx: AnoymousClassContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.indirectTypeRef`.
	 * @param ctx the parse tree
	 */
	enterIndirectTypeRef?: (ctx: IndirectTypeRefContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.indirectTypeRef`.
	 * @param ctx the parse tree
	 */
	exitIndirectTypeRef?: (ctx: IndirectTypeRefContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.qualifiedNamespaceName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedNamespaceName?: (ctx: QualifiedNamespaceNameContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.qualifiedNamespaceName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedNamespaceName?: (ctx: QualifiedNamespaceNameContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.namespaceNameList`.
	 * @param ctx the parse tree
	 */
	enterNamespaceNameList?: (ctx: NamespaceNameListContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.namespaceNameList`.
	 * @param ctx the parse tree
	 */
	exitNamespaceNameList?: (ctx: NamespaceNameListContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.namespaceNameTail`.
	 * @param ctx the parse tree
	 */
	enterNamespaceNameTail?: (ctx: NamespaceNameTailContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.namespaceNameTail`.
	 * @param ctx the parse tree
	 */
	exitNamespaceNameTail?: (ctx: NamespaceNameTailContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.qualifiedNamespaceNameList`.
	 * @param ctx the parse tree
	 */
	enterQualifiedNamespaceNameList?: (ctx: QualifiedNamespaceNameListContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.qualifiedNamespaceNameList`.
	 * @param ctx the parse tree
	 */
	exitQualifiedNamespaceNameList?: (ctx: QualifiedNamespaceNameListContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.actualArgument`.
	 * @param ctx the parse tree
	 */
	enterActualArgument?: (ctx: ActualArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.actualArgument`.
	 * @param ctx the parse tree
	 */
	exitActualArgument?: (ctx: ActualArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.constantInititalizer`.
	 * @param ctx the parse tree
	 */
	enterConstantInititalizer?: (ctx: ConstantInititalizerContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.constantInititalizer`.
	 * @param ctx the parse tree
	 */
	exitConstantInititalizer?: (ctx: ConstantInititalizerContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.constantArrayItemList`.
	 * @param ctx the parse tree
	 */
	enterConstantArrayItemList?: (ctx: ConstantArrayItemListContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.constantArrayItemList`.
	 * @param ctx the parse tree
	 */
	exitConstantArrayItemList?: (ctx: ConstantArrayItemListContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.constantArrayItem`.
	 * @param ctx the parse tree
	 */
	enterConstantArrayItem?: (ctx: ConstantArrayItemContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.constantArrayItem`.
	 * @param ctx the parse tree
	 */
	exitConstantArrayItem?: (ctx: ConstantArrayItemContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.literalConstant`.
	 * @param ctx the parse tree
	 */
	enterLiteralConstant?: (ctx: LiteralConstantContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.literalConstant`.
	 * @param ctx the parse tree
	 */
	exitLiteralConstant?: (ctx: LiteralConstantContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.numericConstant`.
	 * @param ctx the parse tree
	 */
	enterNumericConstant?: (ctx: NumericConstantContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.numericConstant`.
	 * @param ctx the parse tree
	 */
	exitNumericConstant?: (ctx: NumericConstantContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.classConstant`.
	 * @param ctx the parse tree
	 */
	enterClassConstant?: (ctx: ClassConstantContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.classConstant`.
	 * @param ctx the parse tree
	 */
	exitClassConstant?: (ctx: ClassConstantContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.stringConstant`.
	 * @param ctx the parse tree
	 */
	enterStringConstant?: (ctx: StringConstantContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.stringConstant`.
	 * @param ctx the parse tree
	 */
	exitStringConstant?: (ctx: StringConstantContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.interpolatedStringPart`.
	 * @param ctx the parse tree
	 */
	enterInterpolatedStringPart?: (ctx: InterpolatedStringPartContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.interpolatedStringPart`.
	 * @param ctx the parse tree
	 */
	exitInterpolatedStringPart?: (ctx: InterpolatedStringPartContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.chainList`.
	 * @param ctx the parse tree
	 */
	enterChainList?: (ctx: ChainListContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.chainList`.
	 * @param ctx the parse tree
	 */
	exitChainList?: (ctx: ChainListContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.chain`.
	 * @param ctx the parse tree
	 */
	enterChain?: (ctx: ChainContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.chain`.
	 * @param ctx the parse tree
	 */
	exitChain?: (ctx: ChainContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.chainOrigin`.
	 * @param ctx the parse tree
	 */
	enterChainOrigin?: (ctx: ChainOriginContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.chainOrigin`.
	 * @param ctx the parse tree
	 */
	exitChainOrigin?: (ctx: ChainOriginContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.memberAccess`.
	 * @param ctx the parse tree
	 */
	enterMemberAccess?: (ctx: MemberAccessContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.memberAccess`.
	 * @param ctx the parse tree
	 */
	exitMemberAccess?: (ctx: MemberAccessContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.functionCallName`.
	 * @param ctx the parse tree
	 */
	enterFunctionCallName?: (ctx: FunctionCallNameContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.functionCallName`.
	 * @param ctx the parse tree
	 */
	exitFunctionCallName?: (ctx: FunctionCallNameContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.actualArguments`.
	 * @param ctx the parse tree
	 */
	enterActualArguments?: (ctx: ActualArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.actualArguments`.
	 * @param ctx the parse tree
	 */
	exitActualArguments?: (ctx: ActualArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.chainBase`.
	 * @param ctx the parse tree
	 */
	enterChainBase?: (ctx: ChainBaseContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.chainBase`.
	 * @param ctx the parse tree
	 */
	exitChainBase?: (ctx: ChainBaseContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.keyedFieldName`.
	 * @param ctx the parse tree
	 */
	enterKeyedFieldName?: (ctx: KeyedFieldNameContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.keyedFieldName`.
	 * @param ctx the parse tree
	 */
	exitKeyedFieldName?: (ctx: KeyedFieldNameContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.keyedSimpleFieldName`.
	 * @param ctx the parse tree
	 */
	enterKeyedSimpleFieldName?: (ctx: KeyedSimpleFieldNameContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.keyedSimpleFieldName`.
	 * @param ctx the parse tree
	 */
	exitKeyedSimpleFieldName?: (ctx: KeyedSimpleFieldNameContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.keyedVariable`.
	 * @param ctx the parse tree
	 */
	enterKeyedVariable?: (ctx: KeyedVariableContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.keyedVariable`.
	 * @param ctx the parse tree
	 */
	exitKeyedVariable?: (ctx: KeyedVariableContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.squareCurlyExpression`.
	 * @param ctx the parse tree
	 */
	enterSquareCurlyExpression?: (ctx: SquareCurlyExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.squareCurlyExpression`.
	 * @param ctx the parse tree
	 */
	exitSquareCurlyExpression?: (ctx: SquareCurlyExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.assignmentList`.
	 * @param ctx the parse tree
	 */
	enterAssignmentList?: (ctx: AssignmentListContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.assignmentList`.
	 * @param ctx the parse tree
	 */
	exitAssignmentList?: (ctx: AssignmentListContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.assignmentListElement`.
	 * @param ctx the parse tree
	 */
	enterAssignmentListElement?: (ctx: AssignmentListElementContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.assignmentListElement`.
	 * @param ctx the parse tree
	 */
	exitAssignmentListElement?: (ctx: AssignmentListElementContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.modifier`.
	 * @param ctx the parse tree
	 */
	enterModifier?: (ctx: ModifierContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.modifier`.
	 * @param ctx the parse tree
	 */
	exitModifier?: (ctx: ModifierContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.memberModifier`.
	 * @param ctx the parse tree
	 */
	enterMemberModifier?: (ctx: MemberModifierContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.memberModifier`.
	 * @param ctx the parse tree
	 */
	exitMemberModifier?: (ctx: MemberModifierContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.magicConstant`.
	 * @param ctx the parse tree
	 */
	enterMagicConstant?: (ctx: MagicConstantContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.magicConstant`.
	 * @param ctx the parse tree
	 */
	exitMagicConstant?: (ctx: MagicConstantContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.magicMethod`.
	 * @param ctx the parse tree
	 */
	enterMagicMethod?: (ctx: MagicMethodContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.magicMethod`.
	 * @param ctx the parse tree
	 */
	exitMagicMethod?: (ctx: MagicMethodContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.castOperation`.
	 * @param ctx the parse tree
	 */
	enterCastOperation?: (ctx: CastOperationContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.castOperation`.
	 * @param ctx the parse tree
	 */
	exitCastOperation?: (ctx: CastOperationContext) => void;

	/**
	 * Enter a parse tree produced by `PhpParser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `PhpParser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;
}

