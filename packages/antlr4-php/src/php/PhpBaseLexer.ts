import { Lexer } from "antlr4ts/Lexer";
import { CommonToken } from "antlr4ts";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { PhpLexer } from "@php/PhpLexer";

export abstract class PhpBaseLexer extends Lexer {
	AspTags = true;
	_scriptTag = false;
	_styleTag = false;
	_heredocIdentifier = undefined;
	_prevTokenType = 0;
	_htmlNameText = undefined;
	_phpScript = false;
	_insideString = false;

	nextToken() {
		let token = super.nextToken();

		if (token.type === PhpLexer.PHPEnd || token.type === PhpLexer.PHPEndSingleLineComment) {
			if (this._mode === PhpLexer.SingleLineCommentMode) {
				// SingleLineCommentMode for such allowed syntax:
				// // <?php echo "Hello world"; // comment ?>
				this.popMode();
			}
			this.popMode();

			if (token.text === "</script>") {
				this._phpScript = false;
				token.type = PhpLexer.ScriptClose;
			} else {
				// Add semicolon to the end of statement if it is absent.
				// For example: <?php echo "Hello world" ?>
				if (this._prevTokenType === PhpLexer.SemiColon || this._prevTokenType === PhpLexer.Colon || this._prevTokenType === PhpLexer.OpenCurlyBracket || this._prevTokenType === PhpLexer.CloseCurlyBracket) {
					token = super.nextToken();
				} else {
					token = new CommonToken(PhpLexer.SemiColon);
					//@ts-ignore
					token.text = ';';
				}
			}
		} else if (token.type === PhpLexer.HtmlName) {
			this._htmlNameText = token.text
		} else if (token.type === PhpLexer.HtmlDoubleQuoteString) {
			if (token.text === "php" && this._htmlNameText === "language") {
				this._phpScript = true;
			}
		} else if (this._mode === PhpLexer.HereDoc) {
			// Heredoc and Nowdoc syntax support: http://php.net/manual/en/language.types.string.php#language.types.string.syntax.heredoc
			if (token.type === PhpLexer.StartHereDoc || token.type === PhpLexer.StartNowDoc) {
				this._heredocIdentifier = token.text.slice(3).trim().replace(/\'$/, '');
			}

			if (token.type === PhpLexer.HereDocText) {
				if (this.CheckHeredocEnd(token.text)) {
					this.popMode()
					const heredocIdentifier = this.GetHeredocEnd(token.text)
					if (token.text.trim().endsWith(';')) {
						token = new CommonToken(PhpLexer.SemiColon, ';');
						token.text = `${heredocIdentifier};\n`;
					} else {
						token = super.nextToken();
						token.text = `${heredocIdentifier}\n;`;
					}
				}
			}
		} else if (this._mode === PhpLexer.PHP) {
			if (this._channel === PhpLexer.HIDDEN) {
				this._prevTokenType = token.type;
			}
		}

		return token;
	};

	GetHeredocEnd(text) {
		return text.trim().replace(/\;$/, "");
	};

	CheckHeredocEnd(text) {
		return this.GetHeredocEnd(text) === this._heredocIdentifier;
	};

	IsNewLineOrStart(pos) {
		return this._input.LA(pos) <= 0 || this._input.LA(pos) == '\r'.charCodeAt(0) ||
			this._input.LA(pos) == '\n'.charCodeAt(0)
	};

	PushModeOnHtmlClose() {
		this.popMode();
		if (this._scriptTag) {
			if (!this._phpScript) {
				this.pushMode(PhpLexer.SCRIPT);
			} else {
				this.pushMode(PhpLexer.PHP);
			}
			this._scriptTag = false;
		} else if (this._styleTag) {
			this.pushMode(PhpLexer.STYLE);
			this._styleTag = false;
		}
	};

	HasAspTags() {
		return this.AspTags;
	};

	HasPhpScriptTag() {
		return this._phpScript;
	};

	PopModeOnCurlyBracketClose() {
		if (this._insideString) {
			this._insideString = false;
			this.skip;
			this.popMode();
		}
	};

	ShouldPushHereDocMode(pos) {
		return this._input.LA(pos) === '\r'.charCodeAt(0) || this._input.LA(pos) === '\n'.charCodeAt(0);
	};

	IsCurlyDollar(pos) {
		return this._input.LA(pos) === '$'.charCodeAt(0);
	};

	SetInsideString() {
		this._insideString = true
	};

	readonly channelNames: string[];
	readonly grammarFileName: string;
	readonly modeNames: string[];
	readonly ruleNames: string[];
	readonly vocabulary: Vocabulary;
}
