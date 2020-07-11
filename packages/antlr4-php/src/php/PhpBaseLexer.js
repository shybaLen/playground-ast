"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Lexer_1 = require("antlr4ts/Lexer");
var antlr4ts_1 = require("antlr4ts");
var PhpLexer_1 = require("@php/PhpLexer");
var PhpBaseLexer = /** @class */ (function (_super) {
    tslib_1.__extends(PhpBaseLexer, _super);
    function PhpBaseLexer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AspTags = true;
        _this._scriptTag = false;
        _this._styleTag = false;
        _this._heredocIdentifier = undefined;
        _this._prevTokenType = 0;
        _this._htmlNameText = undefined;
        _this._phpScript = false;
        _this._insideString = false;
        return _this;
    }
    PhpBaseLexer.prototype.nextToken = function () {
        var token = _super.prototype.nextToken.call(this);
        if (token.type === PhpLexer_1.PhpLexer.PHPEnd || token.type === PhpLexer_1.PhpLexer.PHPEndSingleLineComment) {
            if (this._mode === PhpLexer_1.PhpLexer.SingleLineCommentMode) {
                // SingleLineCommentMode for such allowed syntax:
                // // <?php echo "Hello world"; // comment ?>
                this.popMode();
            }
            this.popMode();
            if (token.text === "</script>") {
                this._phpScript = false;
                token.type = PhpLexer_1.PhpLexer.ScriptClose;
            }
            else {
                // Add semicolon to the end of statement if it is absent.
                // For example: <?php echo "Hello world" ?>
                if (this._prevTokenType === PhpLexer_1.PhpLexer.SemiColon || this._prevTokenType === PhpLexer_1.PhpLexer.Colon || this._prevTokenType === PhpLexer_1.PhpLexer.OpenCurlyBracket || this._prevTokenType === PhpLexer_1.PhpLexer.CloseCurlyBracket) {
                    token = _super.prototype.nextToken.call(this);
                }
                else {
                    token = new antlr4ts_1.CommonToken(PhpLexer_1.PhpLexer.SemiColon);
                    //@ts-ignore
                    token.text = ';';
                }
            }
        }
        else if (token.type === PhpLexer_1.PhpLexer.HtmlName) {
            this._htmlNameText = token.text;
        }
        else if (token.type === PhpLexer_1.PhpLexer.HtmlDoubleQuoteString) {
            if (token.text === "php" && this._htmlNameText === "language") {
                this._phpScript = true;
            }
        }
        else if (this._mode === PhpLexer_1.PhpLexer.HereDoc) {
            // Heredoc and Nowdoc syntax support: http://php.net/manual/en/language.types.string.php#language.types.string.syntax.heredoc
            if (token.type === PhpLexer_1.PhpLexer.StartHereDoc || token.type === PhpLexer_1.PhpLexer.StartNowDoc) {
                this._heredocIdentifier = token.text.slice(3).trim().replace(/\'$/, '');
            }
            if (token.type === PhpLexer_1.PhpLexer.HereDocText) {
                if (this.CheckHeredocEnd(token.text)) {
                    this.popMode();
                    var heredocIdentifier = this.GetHeredocEnd(token.text);
                    if (token.text.trim().endsWith(';')) {
                        token = new antlr4ts_1.CommonToken(PhpLexer_1.PhpLexer.SemiColon, ';');
                        token.text = heredocIdentifier + ";\n";
                    }
                    else {
                        token = _super.prototype.nextToken.call(this);
                        token.text = heredocIdentifier + "\n;";
                    }
                }
            }
        }
        else if (this._mode === PhpLexer_1.PhpLexer.PHP) {
            if (this._channel === PhpLexer_1.PhpLexer.HIDDEN) {
                this._prevTokenType = token.type;
            }
        }
        return token;
    };
    ;
    PhpBaseLexer.prototype.GetHeredocEnd = function (text) {
        return text.trim().replace(/\;$/, "");
    };
    ;
    PhpBaseLexer.prototype.CheckHeredocEnd = function (text) {
        return this.GetHeredocEnd(text) === this._heredocIdentifier;
    };
    ;
    PhpBaseLexer.prototype.IsNewLineOrStart = function (pos) {
        return this._input.LA(pos) <= 0 || this._input.LA(pos) == '\r'.charCodeAt(0) ||
            this._input.LA(pos) == '\n'.charCodeAt(0);
    };
    ;
    PhpBaseLexer.prototype.PushModeOnHtmlClose = function () {
        this.popMode();
        if (this._scriptTag) {
            if (!this._phpScript) {
                this.pushMode(PhpLexer_1.PhpLexer.SCRIPT);
            }
            else {
                this.pushMode(PhpLexer_1.PhpLexer.PHP);
            }
            this._scriptTag = false;
        }
        else if (this._styleTag) {
            this.pushMode(PhpLexer_1.PhpLexer.STYLE);
            this._styleTag = false;
        }
    };
    ;
    PhpBaseLexer.prototype.HasAspTags = function () {
        return this.AspTags;
    };
    ;
    PhpBaseLexer.prototype.HasPhpScriptTag = function () {
        return this._phpScript;
    };
    ;
    PhpBaseLexer.prototype.PopModeOnCurlyBracketClose = function () {
        if (this._insideString) {
            this._insideString = false;
            this.skip;
            this.popMode();
        }
    };
    ;
    PhpBaseLexer.prototype.ShouldPushHereDocMode = function (pos) {
        return this._input.LA(pos) === '\r'.charCodeAt(0) || this._input.LA(pos) === '\n'.charCodeAt(0);
    };
    ;
    PhpBaseLexer.prototype.IsCurlyDollar = function (pos) {
        return this._input.LA(pos) === '$'.charCodeAt(0);
    };
    ;
    PhpBaseLexer.prototype.SetInsideString = function () {
        this._insideString = true;
    };
    ;
    return PhpBaseLexer;
}(Lexer_1.Lexer));
//# sourceMappingURL=PhpBaseLexer.js.map