"use strict";
// Generated from src/php/PhpLexer.g4 by ANTLR 4.7.3-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
var Lexer_1 = require("antlr4ts/Lexer");
var LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var antlr4ts_1 = require("antlr4ts");
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
            }
            else {
                // Add semicolon to the end of statement if it is absent.
                // For example: <?php echo "Hello world" ?>
                if (this._prevTokenType === PhpLexer.SemiColon || this._prevTokenType === PhpLexer.Colon || this._prevTokenType === PhpLexer.OpenCurlyBracket || this._prevTokenType === PhpLexer.CloseCurlyBracket) {
                    token = _super.prototype.nextToken.call(this);
                }
                else {
                    token = new antlr4ts_1.CommonToken(PhpLexer.SemiColon);
                    //@ts-ignore
                    token.text = ';';
                }
            }
        }
        else if (token.type === PhpLexer.HtmlName) {
            this._htmlNameText = token.text;
        }
        else if (token.type === PhpLexer.HtmlDoubleQuoteString) {
            if (token.text === "php" && this._htmlNameText === "language") {
                this._phpScript = true;
            }
        }
        else if (this._mode === PhpLexer.HereDoc) {
            // Heredoc and Nowdoc syntax support: http://php.net/manual/en/language.types.string.php#language.types.string.syntax.heredoc
            if (token.type === PhpLexer.StartHereDoc || token.type === PhpLexer.StartNowDoc) {
                this._heredocIdentifier = token.text.slice(3).trim().replace(/\'$/, '');
            }
            if (token.type === PhpLexer.HereDocText) {
                if (this.CheckHeredocEnd(token.text)) {
                    this.popMode();
                    var heredocIdentifier = this.GetHeredocEnd(token.text);
                    if (token.text.trim().endsWith(';')) {
                        token = new antlr4ts_1.CommonToken(PhpLexer.SemiColon, ';');
                        token.text = heredocIdentifier + ";\n";
                    }
                    else {
                        token = _super.prototype.nextToken.call(this);
                        token.text = heredocIdentifier + "\n;";
                    }
                }
            }
        }
        else if (this._mode === PhpLexer.PHP) {
            if (this._channel === PhpLexer.HIDDEN) {
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
                this.pushMode(PhpLexer.SCRIPT);
            }
            else {
                this.pushMode(PhpLexer.PHP);
            }
            this._scriptTag = false;
        }
        else if (this._styleTag) {
            this.pushMode(PhpLexer.STYLE);
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
var PhpLexer = /** @class */ (function (_super) {
    tslib_1.__extends(PhpLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function PhpLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(PhpLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(PhpLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return PhpLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhpLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "PhpLexer.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhpLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return PhpLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhpLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return PhpLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhpLexer.prototype, "channelNames", {
        // @Override
        get: function () { return PhpLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhpLexer.prototype, "modeNames", {
        // @Override
        get: function () { return PhpLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PhpLexer.prototype.action = function (_localctx, ruleIndex, actionIndex) {
        switch (ruleIndex) {
            case 5:
                this.HtmlScriptOpen_action(_localctx, actionIndex);
                break;
            case 6:
                this.HtmlStyleOpen_action(_localctx, actionIndex);
                break;
            case 18:
                this.HtmlClose_action(_localctx, actionIndex);
                break;
            case 217:
                this.CloseCurlyBracket_action(_localctx, actionIndex);
                break;
            case 239:
                this.CurlyDollar_action(_localctx, actionIndex);
                break;
        }
    };
    PhpLexer.prototype.HtmlScriptOpen_action = function (_localctx, actionIndex) {
        switch (actionIndex) {
            case 0:
                this._scriptTag = true;
                break;
        }
    };
    PhpLexer.prototype.HtmlStyleOpen_action = function (_localctx, actionIndex) {
        switch (actionIndex) {
            case 1:
                this._styleTag = true;
                break;
        }
    };
    PhpLexer.prototype.HtmlClose_action = function (_localctx, actionIndex) {
        switch (actionIndex) {
            case 2:
                this.PushModeOnHtmlClose();
                break;
        }
    };
    PhpLexer.prototype.CloseCurlyBracket_action = function (_localctx, actionIndex) {
        switch (actionIndex) {
            case 3:
                this.PopModeOnCurlyBracketClose();
                break;
        }
    };
    PhpLexer.prototype.CurlyDollar_action = function (_localctx, actionIndex) {
        switch (actionIndex) {
            case 4:
                this.SetInsideString();
                break;
        }
    };
    // @Override
    PhpLexer.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 10:
                return this.Shebang_sempred(_localctx, predIndex);
            case 45:
                return this.PHPEnd_sempred(_localctx, predIndex);
            case 234:
                return this.StartNowDoc_sempred(_localctx, predIndex);
            case 235:
                return this.StartHereDoc_sempred(_localctx, predIndex);
            case 239:
                return this.CurlyDollar_sempred(_localctx, predIndex);
            case 250:
                return this.PhpStartEchoFragment_sempred(_localctx, predIndex);
            case 251:
                return this.PhpStartFragment_sempred(_localctx, predIndex);
        }
        return true;
    };
    PhpLexer.prototype.Shebang_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.IsNewLineOrStart(-2);
        }
        return true;
    };
    PhpLexer.prototype.PHPEnd_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 1:
                return this.HasAspTags();
            case 2:
                return this.HasPhpScriptTag();
        }
        return true;
    };
    PhpLexer.prototype.StartNowDoc_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 3:
                return this.ShouldPushHereDocMode(1);
        }
        return true;
    };
    PhpLexer.prototype.StartHereDoc_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 4:
                return this.ShouldPushHereDocMode(1);
        }
        return true;
    };
    PhpLexer.prototype.CurlyDollar_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 5:
                return this.IsCurlyDollar(1);
        }
        return true;
    };
    PhpLexer.prototype.PhpStartEchoFragment_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 6:
                return this.HasAspTags();
        }
        return true;
    };
    PhpLexer.prototype.PhpStartFragment_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 7:
                return this.HasAspTags();
        }
        return true;
    };
    Object.defineProperty(PhpLexer, "_ATN", {
        get: function () {
            if (!PhpLexer.__ATN) {
                PhpLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(PhpLexer._serializedATN));
            }
            return PhpLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    PhpLexer.SeaWhitespace = 1;
    PhpLexer.HtmlText = 2;
    PhpLexer.XmlStart = 3;
    PhpLexer.PHPStart = 4;
    PhpLexer.HtmlScriptOpen = 5;
    PhpLexer.HtmlStyleOpen = 6;
    PhpLexer.HtmlComment = 7;
    PhpLexer.HtmlDtd = 8;
    PhpLexer.HtmlOpen = 9;
    PhpLexer.Shebang = 10;
    PhpLexer.Error = 11;
    PhpLexer.XmlText = 12;
    PhpLexer.XmlClose = 13;
    PhpLexer.PHPStartInside = 14;
    PhpLexer.HtmlClose = 15;
    PhpLexer.HtmlSlashClose = 16;
    PhpLexer.HtmlSlash = 17;
    PhpLexer.HtmlEquals = 18;
    PhpLexer.HtmlStartQuoteString = 19;
    PhpLexer.HtmlStartDoubleQuoteString = 20;
    PhpLexer.HtmlHex = 21;
    PhpLexer.HtmlDecimal = 22;
    PhpLexer.HtmlSpace = 23;
    PhpLexer.HtmlName = 24;
    PhpLexer.ErrorInside = 25;
    PhpLexer.PHPStartInsideQuoteString = 26;
    PhpLexer.HtmlEndQuoteString = 27;
    PhpLexer.HtmlQuoteString = 28;
    PhpLexer.ErrorHtmlQuote = 29;
    PhpLexer.PHPStartDoubleQuoteString = 30;
    PhpLexer.HtmlEndDoubleQuoteString = 31;
    PhpLexer.HtmlDoubleQuoteString = 32;
    PhpLexer.ErrorHtmlDoubleQuote = 33;
    PhpLexer.ScriptText = 34;
    PhpLexer.ScriptClose = 35;
    PhpLexer.PHPStartInsideScript = 36;
    PhpLexer.StyleBody = 37;
    PhpLexer.PHPEnd = 38;
    PhpLexer.Whitespace = 39;
    PhpLexer.MultiLineComment = 40;
    PhpLexer.SingleLineComment = 41;
    PhpLexer.ShellStyleComment = 42;
    PhpLexer.Abstract = 43;
    PhpLexer.Array = 44;
    PhpLexer.As = 45;
    PhpLexer.BinaryCast = 46;
    PhpLexer.BoolType = 47;
    PhpLexer.BooleanConstant = 48;
    PhpLexer.Break = 49;
    PhpLexer.Callable = 50;
    PhpLexer.Case = 51;
    PhpLexer.Catch = 52;
    PhpLexer.Class = 53;
    PhpLexer.Clone = 54;
    PhpLexer.Const = 55;
    PhpLexer.Continue = 56;
    PhpLexer.Declare = 57;
    PhpLexer.Default = 58;
    PhpLexer.Do = 59;
    PhpLexer.DoubleCast = 60;
    PhpLexer.DoubleType = 61;
    PhpLexer.Echo = 62;
    PhpLexer.Else = 63;
    PhpLexer.ElseIf = 64;
    PhpLexer.Empty = 65;
    PhpLexer.EndDeclare = 66;
    PhpLexer.EndFor = 67;
    PhpLexer.EndForeach = 68;
    PhpLexer.EndIf = 69;
    PhpLexer.EndSwitch = 70;
    PhpLexer.EndWhile = 71;
    PhpLexer.Eval = 72;
    PhpLexer.Exit = 73;
    PhpLexer.Extends = 74;
    PhpLexer.Final = 75;
    PhpLexer.Finally = 76;
    PhpLexer.FloatCast = 77;
    PhpLexer.For = 78;
    PhpLexer.Foreach = 79;
    PhpLexer.Function = 80;
    PhpLexer.Global = 81;
    PhpLexer.Goto = 82;
    PhpLexer.If = 83;
    PhpLexer.Implements = 84;
    PhpLexer.Import = 85;
    PhpLexer.Include = 86;
    PhpLexer.IncludeOnce = 87;
    PhpLexer.InstanceOf = 88;
    PhpLexer.InsteadOf = 89;
    PhpLexer.Int8Cast = 90;
    PhpLexer.Int16Cast = 91;
    PhpLexer.Int64Type = 92;
    PhpLexer.IntType = 93;
    PhpLexer.Interface = 94;
    PhpLexer.IsSet = 95;
    PhpLexer.List = 96;
    PhpLexer.LogicalAnd = 97;
    PhpLexer.LogicalOr = 98;
    PhpLexer.LogicalXor = 99;
    PhpLexer.Namespace = 100;
    PhpLexer.New = 101;
    PhpLexer.Null = 102;
    PhpLexer.ObjectType = 103;
    PhpLexer.Parent_ = 104;
    PhpLexer.Partial = 105;
    PhpLexer.Print = 106;
    PhpLexer.Private = 107;
    PhpLexer.Protected = 108;
    PhpLexer.Public = 109;
    PhpLexer.Require = 110;
    PhpLexer.RequireOnce = 111;
    PhpLexer.Resource = 112;
    PhpLexer.Return = 113;
    PhpLexer.Static = 114;
    PhpLexer.StringType = 115;
    PhpLexer.Switch = 116;
    PhpLexer.Throw = 117;
    PhpLexer.Trait = 118;
    PhpLexer.Try = 119;
    PhpLexer.Typeof = 120;
    PhpLexer.UintCast = 121;
    PhpLexer.UnicodeCast = 122;
    PhpLexer.Unset = 123;
    PhpLexer.Use = 124;
    PhpLexer.Var = 125;
    PhpLexer.While = 126;
    PhpLexer.Yield = 127;
    PhpLexer.From = 128;
    PhpLexer.LambdaFn = 129;
    PhpLexer.Get = 130;
    PhpLexer.Set = 131;
    PhpLexer.Call = 132;
    PhpLexer.CallStatic = 133;
    PhpLexer.Constructor = 134;
    PhpLexer.Destruct = 135;
    PhpLexer.Wakeup = 136;
    PhpLexer.Sleep = 137;
    PhpLexer.Autoload = 138;
    PhpLexer.IsSet__ = 139;
    PhpLexer.Unset__ = 140;
    PhpLexer.ToString__ = 141;
    PhpLexer.Invoke = 142;
    PhpLexer.SetState = 143;
    PhpLexer.Clone__ = 144;
    PhpLexer.DebugInfo = 145;
    PhpLexer.Namespace__ = 146;
    PhpLexer.Class__ = 147;
    PhpLexer.Traic__ = 148;
    PhpLexer.Function__ = 149;
    PhpLexer.Method__ = 150;
    PhpLexer.Line__ = 151;
    PhpLexer.File__ = 152;
    PhpLexer.Dir__ = 153;
    PhpLexer.Spaceship = 154;
    PhpLexer.Lgeneric = 155;
    PhpLexer.Rgeneric = 156;
    PhpLexer.DoubleArrow = 157;
    PhpLexer.Inc = 158;
    PhpLexer.Dec = 159;
    PhpLexer.IsIdentical = 160;
    PhpLexer.IsNoidentical = 161;
    PhpLexer.IsEqual = 162;
    PhpLexer.IsNotEq = 163;
    PhpLexer.IsSmallerOrEqual = 164;
    PhpLexer.IsGreaterOrEqual = 165;
    PhpLexer.PlusEqual = 166;
    PhpLexer.MinusEqual = 167;
    PhpLexer.MulEqual = 168;
    PhpLexer.Pow = 169;
    PhpLexer.PowEqual = 170;
    PhpLexer.DivEqual = 171;
    PhpLexer.Concaequal = 172;
    PhpLexer.ModEqual = 173;
    PhpLexer.ShiftLeftEqual = 174;
    PhpLexer.ShiftRightEqual = 175;
    PhpLexer.AndEqual = 176;
    PhpLexer.OrEqual = 177;
    PhpLexer.XorEqual = 178;
    PhpLexer.BooleanOr = 179;
    PhpLexer.BooleanAnd = 180;
    PhpLexer.NullCoalescing = 181;
    PhpLexer.NullCoalescingEqual = 182;
    PhpLexer.ShiftLeft = 183;
    PhpLexer.ShiftRight = 184;
    PhpLexer.DoubleColon = 185;
    PhpLexer.ObjectOperator = 186;
    PhpLexer.NamespaceSeparator = 187;
    PhpLexer.Ellipsis = 188;
    PhpLexer.Less = 189;
    PhpLexer.Greater = 190;
    PhpLexer.Ampersand = 191;
    PhpLexer.Pipe = 192;
    PhpLexer.Bang = 193;
    PhpLexer.Caret = 194;
    PhpLexer.Plus = 195;
    PhpLexer.Minus = 196;
    PhpLexer.Asterisk = 197;
    PhpLexer.Percent = 198;
    PhpLexer.Divide = 199;
    PhpLexer.Tilde = 200;
    PhpLexer.SuppressWarnings = 201;
    PhpLexer.Dollar = 202;
    PhpLexer.Dot = 203;
    PhpLexer.QuestionMark = 204;
    PhpLexer.OpenRoundBracket = 205;
    PhpLexer.CloseRoundBracket = 206;
    PhpLexer.OpenSquareBracket = 207;
    PhpLexer.CloseSquareBracket = 208;
    PhpLexer.OpenCurlyBracket = 209;
    PhpLexer.CloseCurlyBracket = 210;
    PhpLexer.Comma = 211;
    PhpLexer.Colon = 212;
    PhpLexer.SemiColon = 213;
    PhpLexer.Eq = 214;
    PhpLexer.Quote = 215;
    PhpLexer.BackQuote = 216;
    PhpLexer.VarName = 217;
    PhpLexer.Label = 218;
    PhpLexer.Octal = 219;
    PhpLexer.Decimal = 220;
    PhpLexer.Real = 221;
    PhpLexer.Hex = 222;
    PhpLexer.Binary = 223;
    PhpLexer.BackQuoteString = 224;
    PhpLexer.SingleQuoteString = 225;
    PhpLexer.DoubleQuote = 226;
    PhpLexer.StartNowDoc = 227;
    PhpLexer.StartHereDoc = 228;
    PhpLexer.ErrorPhp = 229;
    PhpLexer.CurlyDollar = 230;
    PhpLexer.UnicodeEscape = 231;
    PhpLexer.StringPart = 232;
    PhpLexer.Comment = 233;
    PhpLexer.PHPEndSingleLineComment = 234;
    PhpLexer.CommentEnd = 235;
    PhpLexer.HereDocText = 236;
    PhpLexer.XmlText2 = 237;
    PhpLexer.PhpComments = 2;
    PhpLexer.ErrorLexem = 3;
    PhpLexer.SkipChannel = 4;
    PhpLexer.XML = 1;
    PhpLexer.INSIDE = 2;
    PhpLexer.HtmlQuoteStringMode = 3;
    PhpLexer.HtmlDoubleQuoteStringMode = 4;
    PhpLexer.SCRIPT = 5;
    PhpLexer.STYLE = 6;
    PhpLexer.PHP = 7;
    PhpLexer.InterpolationString = 8;
    PhpLexer.SingleLineCommentMode = 9;
    PhpLexer.HereDoc = 10;
    // tslint:disable:no-trailing-whitespace
    PhpLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN", "PhpComments", "ErrorLexem", "SkipChannel",
    ];
    // tslint:disable:no-trailing-whitespace
    PhpLexer.modeNames = [
        "DEFAULT_MODE", "XML", "INSIDE", "HtmlQuoteStringMode", "HtmlDoubleQuoteStringMode",
        "SCRIPT", "STYLE", "PHP", "InterpolationString", "SingleLineCommentMode",
        "HereDoc",
    ];
    PhpLexer.ruleNames = [
        "SeaWhitespace", "HtmlText", "XmlStart", "PHPStartEcho", "PHPStart", "HtmlScriptOpen",
        "HtmlStyleOpen", "HtmlComment", "HtmlDtd", "HtmlOpen", "Shebang", "NumberSign",
        "Error", "XmlText", "XmlClose", "XmlText2", "PHPStartEchoInside", "PHPStartInside",
        "HtmlClose", "HtmlSlashClose", "HtmlSlash", "HtmlEquals", "HtmlStartQuoteString",
        "HtmlStartDoubleQuoteString", "HtmlHex", "HtmlDecimal", "HtmlSpace", "HtmlName",
        "ErrorInside", "PHPStartEchoInsideQuoteString", "PHPStartInsideQuoteString",
        "HtmlEndQuoteString", "HtmlQuoteString", "ErrorHtmlQuote", "PHPStartEchoDoubleQuoteString",
        "PHPStartDoubleQuoteString", "HtmlEndDoubleQuoteString", "HtmlDoubleQuoteString",
        "ErrorHtmlDoubleQuote", "ScriptText", "ScriptClose", "PHPStartInsideScriptEcho",
        "PHPStartInsideScript", "ScriptText2", "StyleBody", "PHPEnd", "Whitespace",
        "MultiLineComment", "SingleLineComment", "ShellStyleComment", "Abstract",
        "Array", "As", "BinaryCast", "BoolType", "BooleanConstant", "Break", "Callable",
        "Case", "Catch", "Class", "Clone", "Const", "Continue", "Declare", "Default",
        "Do", "DoubleCast", "DoubleType", "Echo", "Else", "ElseIf", "Empty", "EndDeclare",
        "EndFor", "EndForeach", "EndIf", "EndSwitch", "EndWhile", "Eval", "Exit",
        "Extends", "Final", "Finally", "FloatCast", "For", "Foreach", "Function",
        "Global", "Goto", "If", "Implements", "Import", "Include", "IncludeOnce",
        "InstanceOf", "InsteadOf", "Int8Cast", "Int16Cast", "Int64Type", "IntType",
        "Interface", "IsSet", "List", "LogicalAnd", "LogicalOr", "LogicalXor",
        "Namespace", "New", "Null", "ObjectType", "Parent_", "Partial", "Print",
        "Private", "Protected", "Public", "Require", "RequireOnce", "Resource",
        "Return", "Static", "StringType", "Switch", "Throw", "Trait", "Try", "Typeof",
        "UintCast", "UnicodeCast", "Unset", "Use", "Var", "While", "Yield", "From",
        "LambdaFn", "Get", "Set", "Call", "CallStatic", "Constructor", "Destruct",
        "Wakeup", "Sleep", "Autoload", "IsSet__", "Unset__", "ToString__", "Invoke",
        "SetState", "Clone__", "DebugInfo", "Namespace__", "Class__", "Traic__",
        "Function__", "Method__", "Line__", "File__", "Dir__", "Spaceship", "Lgeneric",
        "Rgeneric", "DoubleArrow", "Inc", "Dec", "IsIdentical", "IsNoidentical",
        "IsEqual", "IsNotEq", "IsSmallerOrEqual", "IsGreaterOrEqual", "PlusEqual",
        "MinusEqual", "MulEqual", "Pow", "PowEqual", "DivEqual", "Concaequal",
        "ModEqual", "ShiftLeftEqual", "ShiftRightEqual", "AndEqual", "OrEqual",
        "XorEqual", "BooleanOr", "BooleanAnd", "NullCoalescing", "NullCoalescingEqual",
        "ShiftLeft", "ShiftRight", "DoubleColon", "ObjectOperator", "NamespaceSeparator",
        "Ellipsis", "Less", "Greater", "Ampersand", "Pipe", "Bang", "Caret", "Plus",
        "Minus", "Asterisk", "Percent", "Divide", "Tilde", "SuppressWarnings",
        "Dollar", "Dot", "QuestionMark", "OpenRoundBracket", "CloseRoundBracket",
        "OpenSquareBracket", "CloseSquareBracket", "OpenCurlyBracket", "CloseCurlyBracket",
        "Comma", "Colon", "SemiColon", "Eq", "Quote", "BackQuote", "VarName",
        "Label", "Octal", "Decimal", "Real", "Hex", "Binary", "BackQuoteString",
        "SingleQuoteString", "DoubleQuote", "StartNowDoc", "StartHereDoc", "ErrorPhp",
        "VarNameInInterpolation", "DollarString", "CurlyDollar", "CurlyString",
        "EscapedChar", "DoubleQuoteInInterpolation", "UnicodeEscape", "StringPart",
        "Comment", "PHPEndSingleLineComment", "CommentQuestionMark", "CommentEnd",
        "HereDocText", "PhpStartEchoFragment", "PhpStartFragment", "NameChar",
        "NameStartChar", "ExponentPart", "Digit", "HexDigit",
    ];
    PhpLexer._LITERAL_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "'/>'", undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "'abstract'", "'array'", "'as'", "'binary'", undefined, undefined,
        "'break'", "'callable'", "'case'", "'catch'", "'class'", "'clone'", "'const'",
        "'continue'", "'declare'", "'default'", "'do'", "'real'", "'double'",
        "'echo'", "'else'", "'elseif'", "'empty'", "'enddeclare'", "'endfor'",
        "'endforeach'", "'endif'", "'endswitch'", "'endwhile'", "'eval'", "'die'",
        "'extends'", "'final'", "'finally'", "'float'", "'for'", "'foreach'",
        "'function'", "'global'", "'goto'", "'if'", "'implements'", "'import'",
        "'include'", "'include_once'", "'instanceof'", "'insteadof'", "'int8'",
        "'int16'", "'int64'", undefined, "'interface'", "'isset'", "'list'", "'and'",
        "'or'", "'xor'", "'namespace'", "'new'", "'null'", "'object'", "'parent'",
        "'partial'", "'print'", "'private'", "'protected'", "'public'", "'require'",
        "'require_once'", "'resource'", "'return'", "'static'", "'string'", "'switch'",
        "'throw'", "'trait'", "'try'", "'clrtypeof'", undefined, "'unicode'",
        "'unset'", "'use'", "'var'", "'while'", "'yield'", "'from'", "'fn'", "'__get'",
        "'__set'", "'__call'", "'__callstatic'", "'__construct'", "'__destruct'",
        "'__wakeup'", "'__sleep'", "'__autoload'", "'__isset'", "'__unset'", "'__tostring'",
        "'__invoke'", "'__set_state'", "'__clone'", "'__debuginfo'", "'__namespace__'",
        "'__class__'", "'__trait__'", "'__function__'", "'__method__'", "'__line__'",
        "'__file__'", "'__dir__'", "'<=>'", "'<:'", "':>'", "'=>'", "'++'", "'--'",
        "'==='", "'!=='", "'=='", undefined, "'<='", "'>='", "'+='", "'-='", "'*='",
        "'**'", "'**='", "'/='", "'.='", "'%='", "'<<='", "'>>='", "'&='", "'|='",
        "'^='", "'||'", "'&&'", "'??'", "'??='", "'<<'", "'>>'", "'::'", "'->'",
        "'\\'", "'...'", undefined, undefined, "'&'", "'|'", "'!'", "'^'", "'+'",
        "'-'", "'*'", "'%'", undefined, "'~'", "'@'", undefined, "'.'", undefined,
        "'('", "')'", "'['", "']'", undefined, "'}'", "','", "':'", "';'", undefined,
        "'''", "'`'",
    ];
    PhpLexer._SYMBOLIC_NAMES = [
        undefined, "SeaWhitespace", "HtmlText", "XmlStart", "PHPStart", "HtmlScriptOpen",
        "HtmlStyleOpen", "HtmlComment", "HtmlDtd", "HtmlOpen", "Shebang", "Error",
        "XmlText", "XmlClose", "PHPStartInside", "HtmlClose", "HtmlSlashClose",
        "HtmlSlash", "HtmlEquals", "HtmlStartQuoteString", "HtmlStartDoubleQuoteString",
        "HtmlHex", "HtmlDecimal", "HtmlSpace", "HtmlName", "ErrorInside", "PHPStartInsideQuoteString",
        "HtmlEndQuoteString", "HtmlQuoteString", "ErrorHtmlQuote", "PHPStartDoubleQuoteString",
        "HtmlEndDoubleQuoteString", "HtmlDoubleQuoteString", "ErrorHtmlDoubleQuote",
        "ScriptText", "ScriptClose", "PHPStartInsideScript", "StyleBody", "PHPEnd",
        "Whitespace", "MultiLineComment", "SingleLineComment", "ShellStyleComment",
        "Abstract", "Array", "As", "BinaryCast", "BoolType", "BooleanConstant",
        "Break", "Callable", "Case", "Catch", "Class", "Clone", "Const", "Continue",
        "Declare", "Default", "Do", "DoubleCast", "DoubleType", "Echo", "Else",
        "ElseIf", "Empty", "EndDeclare", "EndFor", "EndForeach", "EndIf", "EndSwitch",
        "EndWhile", "Eval", "Exit", "Extends", "Final", "Finally", "FloatCast",
        "For", "Foreach", "Function", "Global", "Goto", "If", "Implements", "Import",
        "Include", "IncludeOnce", "InstanceOf", "InsteadOf", "Int8Cast", "Int16Cast",
        "Int64Type", "IntType", "Interface", "IsSet", "List", "LogicalAnd", "LogicalOr",
        "LogicalXor", "Namespace", "New", "Null", "ObjectType", "Parent_", "Partial",
        "Print", "Private", "Protected", "Public", "Require", "RequireOnce", "Resource",
        "Return", "Static", "StringType", "Switch", "Throw", "Trait", "Try", "Typeof",
        "UintCast", "UnicodeCast", "Unset", "Use", "Var", "While", "Yield", "From",
        "LambdaFn", "Get", "Set", "Call", "CallStatic", "Constructor", "Destruct",
        "Wakeup", "Sleep", "Autoload", "IsSet__", "Unset__", "ToString__", "Invoke",
        "SetState", "Clone__", "DebugInfo", "Namespace__", "Class__", "Traic__",
        "Function__", "Method__", "Line__", "File__", "Dir__", "Spaceship", "Lgeneric",
        "Rgeneric", "DoubleArrow", "Inc", "Dec", "IsIdentical", "IsNoidentical",
        "IsEqual", "IsNotEq", "IsSmallerOrEqual", "IsGreaterOrEqual", "PlusEqual",
        "MinusEqual", "MulEqual", "Pow", "PowEqual", "DivEqual", "Concaequal",
        "ModEqual", "ShiftLeftEqual", "ShiftRightEqual", "AndEqual", "OrEqual",
        "XorEqual", "BooleanOr", "BooleanAnd", "NullCoalescing", "NullCoalescingEqual",
        "ShiftLeft", "ShiftRight", "DoubleColon", "ObjectOperator", "NamespaceSeparator",
        "Ellipsis", "Less", "Greater", "Ampersand", "Pipe", "Bang", "Caret", "Plus",
        "Minus", "Asterisk", "Percent", "Divide", "Tilde", "SuppressWarnings",
        "Dollar", "Dot", "QuestionMark", "OpenRoundBracket", "CloseRoundBracket",
        "OpenSquareBracket", "CloseSquareBracket", "OpenCurlyBracket", "CloseCurlyBracket",
        "Comma", "Colon", "SemiColon", "Eq", "Quote", "BackQuote", "VarName",
        "Label", "Octal", "Decimal", "Real", "Hex", "Binary", "BackQuoteString",
        "SingleQuoteString", "DoubleQuote", "StartNowDoc", "StartHereDoc", "ErrorPhp",
        "CurlyDollar", "UnicodeEscape", "StringPart", "Comment", "PHPEndSingleLineComment",
        "CommentEnd", "HereDocText", "XmlText2",
    ];
    PhpLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(PhpLexer._LITERAL_NAMES, PhpLexer._SYMBOLIC_NAMES, []);
    PhpLexer._serializedATNSegments = 4;
    PhpLexer._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\xEF\u086A\b\x01" +
        "\b\x01\b\x01\b\x01\b\x01\b\x01\b\x01\b\x01\b\x01\b\x01\b\x01\x04\x02\t" +
        "\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
        "\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04\x0E" +
        "\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04\x13" +
        "\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04\x18" +
        "\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04\x1D" +
        "\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#\t#\x04" +
        "$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+\x04,\t" +
        ",\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044\t4\x04" +
        "5\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04=\t=\x04" +
        ">\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04F\tF\x04" +
        "G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04O\tO\x04" +
        "P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04X\tX\x04" +
        "Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t`\x04a\t" +
        "a\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04i\ti\x04" +
        "j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04r\tr\x04" +
        "s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04{\t{\x04" +
        "|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81\x04\x82" +
        "\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86\x04\x87" +
        "\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B\x04\x8C" +
        "\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90\x04\x91" +
        "\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95\x04\x96" +
        "\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A\x04\x9B" +
        "\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F\x04\xA0" +
        "\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4\x04\xA5" +
        "\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9\x04\xAA" +
        "\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE\x04\xAF" +
        "\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3\x04\xB4" +
        "\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8\x04\xB9" +
        "\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD\x04\xBE" +
        "\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x04\xC1\t\xC1\x04\xC2\t\xC2\x04\xC3" +
        "\t\xC3\x04\xC4\t\xC4\x04\xC5\t\xC5\x04\xC6\t\xC6\x04\xC7\t\xC7\x04\xC8" +
        "\t\xC8\x04\xC9\t\xC9\x04\xCA\t\xCA\x04\xCB\t\xCB\x04\xCC\t\xCC\x04\xCD" +
        "\t\xCD\x04\xCE\t\xCE\x04\xCF\t\xCF\x04\xD0\t\xD0\x04\xD1\t\xD1\x04\xD2" +
        "\t\xD2\x04\xD3\t\xD3\x04\xD4\t\xD4\x04\xD5\t\xD5\x04\xD6\t\xD6\x04\xD7" +
        "\t\xD7\x04\xD8\t\xD8\x04\xD9\t\xD9\x04\xDA\t\xDA\x04\xDB\t\xDB\x04\xDC" +
        "\t\xDC\x04\xDD\t\xDD\x04\xDE\t\xDE\x04\xDF\t\xDF\x04\xE0\t\xE0\x04\xE1" +
        "\t\xE1\x04\xE2\t\xE2\x04\xE3\t\xE3\x04\xE4\t\xE4\x04\xE5\t\xE5\x04\xE6" +
        "\t\xE6\x04\xE7\t\xE7\x04\xE8\t\xE8\x04\xE9\t\xE9\x04\xEA\t\xEA\x04\xEB" +
        "\t\xEB\x04\xEC\t\xEC\x04\xED\t\xED\x04\xEE\t\xEE\x04\xEF\t\xEF\x04\xF0" +
        "\t\xF0\x04\xF1\t\xF1\x04\xF2\t\xF2\x04\xF3\t\xF3\x04\xF4\t\xF4\x04\xF5" +
        "\t\xF5\x04\xF6\t\xF6\x04\xF7\t\xF7\x04\xF8\t\xF8\x04\xF9\t\xF9\x04\xFA" +
        "\t\xFA\x04\xFB\t\xFB\x04\xFC\t\xFC\x04\xFD\t\xFD\x04\xFE\t\xFE\x04\xFF" +
        "\t\xFF\x04\u0100\t\u0100\x04\u0101\t\u0101\x04\u0102\t\u0102\x03\x02\x06" +
        "\x02\u0211\n\x02\r\x02\x0E\x02\u0212\x03\x02\x03\x02\x03\x03\x06\x03\u0218" +
        "\n\x03\r\x03\x0E\x03\u0219\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03" +
        "\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
        "\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b" +
        "\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03" +
        "\t\x03\t\x03\t\x07\t\u024B\n\t\f\t\x0E\t\u024E\v\t\x03\t\x03\t\x03\t\x03" +
        "\t\x03\t\x03\t\x03\n\x03\n\x03\n\x07\n\u0259\n\n\f\n\x0E\n\u025C\v\n\x03" +
        "\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x07\f\u0268\n" +
        "\f\f\f\x0E\f\u026B\v\f\x03\r\x03\r\x07\r\u026F\n\r\f\r\x0E\r\u0272\v\r" +
        "\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x06\x0F\u027B\n\x0F" +
        "\r\x0F\x0E\x0F\u027C\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03" +
        "\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03" +
        "\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03" +
        "\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x05\x18\u029F" +
        "\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x05\x19\u02A6\n\x19\x03" +
        "\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x06\x1A\u02AE\n\x1A\r\x1A" +
        "\x0E\x1A\u02AF\x03\x1B\x06\x1B\u02B3\n\x1B\r\x1B\x0E\x1B\u02B4\x03\x1C" +
        "\x06\x1C\u02B8\n\x1C\r\x1C\x0E\x1C\u02B9\x03\x1C\x03\x1C\x03\x1D\x03\x1D" +
        "\x07\x1D\u02C0\n\x1D\f\x1D\x0E\x1D\u02C3\v\x1D\x03\x1E\x03\x1E\x03\x1E" +
        "\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03" +
        " \x03!\x03!\x05!\u02D5\n!\x03!\x03!\x03\"\x06\"\u02DA\n\"\r\"\x0E\"\u02DB" +
        "\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03" +
        "%\x03&\x03&\x05&\u02EE\n&\x03&\x03&\x03\'\x06\'\u02F3\n\'\r\'\x0E\'\u02F4" +
        "\x03(\x03(\x03(\x03(\x03)\x06)\u02FC\n)\r)\x0E)\u02FD\x03*\x03*\x03*\x03" +
        "*\x03*\x03*\x03*\x03*\x05*\u0308\n*\x03*\x03*\x03*\x03*\x03+\x03+\x03" +
        "+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x03.\x07.\u031D" +
        "\n.\f.\x0E.\u0320\v.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05.\u032A" +
        "\n.\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x05/\u0333\n/\x03/\x03/\x03/\x03" +
        "/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u0341\n/\x030\x060\u0344" +
        "\n0\r0\x0E0\u0345\x030\x030\x031\x031\x031\x031\x071\u034E\n1\f1\x0E1" +
        "\u0351\v1\x031\x031\x031\x031\x031\x032\x032\x032\x032\x032\x032\x033" +
        "\x033\x033\x033\x033\x034\x034\x034\x034\x034\x034\x034\x034\x034\x03" +
        "5\x035\x035\x035\x035\x035\x036\x036\x036\x037\x037\x037\x037\x037\x03" +
        "7\x037\x038\x038\x038\x038\x038\x038\x038\x038\x058\u0384\n8\x039\x03" +
        "9\x039\x039\x039\x039\x039\x039\x039\x059\u038F\n9\x03:\x03:\x03:\x03" +
        ":\x03:\x03:\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03<\x03<\x03" +
        "<\x03<\x03<\x03=\x03=\x03=\x03=\x03=\x03=\x03>\x03>\x03>\x03>\x03>\x03" +
        ">\x03?\x03?\x03?\x03?\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x03@\x03A\x03" +
        "A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x03B\x03" +
        "B\x03B\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03D\x03D\x03D\x03E\x03" +
        "E\x03E\x03E\x03E\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03G\x03G\x03G\x03" +
        "G\x03G\x03H\x03H\x03H\x03H\x03H\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03" +
        "J\x03J\x03J\x03J\x03J\x03J\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03" +
        "K\x03K\x03K\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03M\x03M\x03M\x03M\x03" +
        "M\x03M\x03M\x03M\x03M\x03M\x03M\x03N\x03N\x03N\x03N\x03N\x03N\x03O\x03" +
        "O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03P\x03P\x03P\x03P\x03P\x03" +
        "P\x03P\x03P\x03P\x03Q\x03Q\x03Q\x03Q\x03Q\x03R\x03R\x03R\x03R\x03S\x03" +
        "S\x03S\x03S\x03S\x03S\x03S\x03S\x03T\x03T\x03T\x03T\x03T\x03T\x03U\x03" +
        "U\x03U\x03U\x03U\x03U\x03U\x03U\x03V\x03V\x03V\x03V\x03V\x03V\x03W\x03" +
        "W\x03W\x03W\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03Y\x03Y\x03Y\x03" +
        "Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03[\x03" +
        "[\x03[\x03[\x03[\x03\\\x03\\\x03\\\x03]\x03]\x03]\x03]\x03]\x03]\x03]" +
        "\x03]\x03]\x03]\x03]\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03_\x03_\x03" +
        "_\x03_\x03_\x03_\x03_\x03_\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03" +
        "`\x03`\x03`\x03`\x03`\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03" +
        "a\x03a\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03c\x03c\x03" +
        "c\x03c\x03c\x03d\x03d\x03d\x03d\x03d\x03d\x03e\x03e\x03e\x03e\x03e\x03" +
        "e\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x05f\u04D0\nf\x03g\x03g\x03" +
        "g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03h\x03h\x03h\x03h\x03h\x03h\x03" +
        "i\x03i\x03i\x03i\x03i\x03j\x03j\x03j\x03j\x03k\x03k\x03k\x03l\x03l\x03" +
        "l\x03l\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x03n\x03n\x03" +
        "n\x03n\x03o\x03o\x03o\x03o\x03o\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03" +
        "q\x03q\x03q\x03q\x03q\x03q\x03q\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03" +
        "r\x03s\x03s\x03s\x03s\x03s\x03s\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03" +
        "t\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03v\x03v\x03v\x03" +
        "v\x03v\x03v\x03v\x03w\x03w\x03w\x03w\x03w\x03w\x03w\x03w\x03x\x03x\x03" +
        "x\x03x\x03x\x03x\x03x\x03x\x03x\x03x\x03x\x03x\x03x\x03y\x03y\x03y\x03" +
        "y\x03y\x03y\x03y\x03y\x03y\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03{\x03" +
        "{\x03{\x03{\x03{\x03{\x03{\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03}\x03" +
        "}\x03}\x03}\x03}\x03}\x03}\x03~\x03~\x03~\x03~\x03~\x03~\x03\x7F\x03\x7F" +
        "\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x80\x03\x80\x03\x80\x03\x80\x03\x81" +
        "\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81" +
        "\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82" +
        "\x03\x82\x05\x82\u0598\n\x82\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03" +
        "\x83\x03\x83\x03\x83\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03" +
        "\x85\x03\x85\x03\x85\x03\x85\x03\x86\x03\x86\x03\x86\x03\x86\x03\x87\x03" +
        "\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x88\x03\x88\x03\x88\x03\x88\x03" +
        "\x88\x03\x88\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x8A\x03\x8A\x03" +
        "\x8A\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8C\x03\x8C\x03" +
        "\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03" +
        "\x8D\x03\x8D\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03" +
        "\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8F\x03\x8F\x03\x8F\x03" +
        "\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03" +
        "\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03" +
        "\x90\x03\x90\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03" +
        "\x91\x03\x91\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03" +
        "\x92\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03" +
        "\x93\x03\x93\x03\x93\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03" +
        "\x94\x03\x94\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03" +
        "\x95\x03\x96\x03\x96\x03\x96\x03\x96\x03\x96\x03\x96\x03\x96\x03\x96\x03" +
        "\x96\x03\x96\x03\x96\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03" +
        "\x97\x03\x97\x03\x97\x03\x98\x03\x98\x03\x98\x03\x98\x03\x98\x03\x98\x03" +
        "\x98\x03\x98\x03\x98\x03\x98\x03\x98\x03\x98\x03\x99\x03\x99\x03\x99\x03" +
        "\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x03" +
        "\x9A\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x03\x9B\x03" +
        "\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03" +
        "\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x03" +
        "\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9D\x03\x9D\x03\x9D\x03\x9D\x03" +
        "\x9D\x03\x9D\x03\x9D\x03\x9D\x03\x9D\x03\x9D\x03\x9E\x03\x9E\x03\x9E\x03" +
        "\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03" +
        "\x9E\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x03" +
        "\x9F\x03\x9F\x03\x9F\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03" +
        "\xA0\x03\xA0\x03\xA0\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03" +
        "\xA1\x03\xA1\x03\xA1\x03\xA2\x03\xA2\x03\xA2\x03\xA2\x03\xA2\x03\xA2\x03" +
        "\xA2\x03\xA2\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x03\xA4\x03\xA4\x03\xA4\x03" +
        "\xA5\x03\xA5\x03\xA5\x03\xA6\x03\xA6\x03\xA6\x03\xA7\x03\xA7\x03\xA7\x03" +
        "\xA8\x03\xA8\x03\xA8\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x03\xAA\x03\xAA\x03" +
        "\xAA\x03\xAA\x03\xAB\x03\xAB\x03\xAB\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x05" +
        "\xAC\u06D1\n\xAC\x03\xAD\x03\xAD\x03\xAD\x03\xAE\x03\xAE\x03\xAE\x03\xAF" +
        "\x03\xAF\x03\xAF\x03\xB0\x03\xB0\x03\xB0\x03\xB1\x03\xB1\x03\xB1\x03\xB2" +
        "\x03\xB2\x03\xB2\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x03\xB4\x03\xB4\x03\xB4" +
        "\x03\xB5\x03\xB5\x03\xB5\x03\xB6\x03\xB6\x03\xB6\x03\xB7\x03\xB7\x03\xB7" +
        "\x03\xB7\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB9\x03\xB9\x03\xB9\x03\xBA" +
        "\x03\xBA\x03\xBA\x03\xBB\x03\xBB\x03\xBB\x03\xBC\x03\xBC\x03\xBC\x03\xBD" +
        "\x03\xBD\x03\xBD\x03\xBE\x03\xBE\x03\xBE\x03\xBF\x03\xBF\x03\xBF\x03\xBF" +
        "\x03\xC0\x03\xC0\x03\xC0\x03\xC1\x03\xC1\x03\xC1\x03\xC2\x03\xC2\x03\xC2" +
        "\x03\xC3\x03\xC3\x03\xC3\x03\xC4\x03\xC4\x03\xC5\x03\xC5\x03\xC5\x03\xC5" +
        "\x03\xC6\x03\xC6\x03\xC7\x03\xC7\x03\xC8\x03\xC8\x03\xC9\x03\xC9\x03\xCA" +
        "\x03\xCA\x03\xCB\x03\xCB\x03\xCC\x03\xCC\x03\xCD\x03\xCD\x03\xCE\x03\xCE" +
        "\x03\xCF\x03\xCF\x03\xD0\x03\xD0\x03\xD1\x03\xD1\x03\xD2\x03\xD2\x03\xD3" +
        "\x03\xD3\x03\xD4\x03\xD4\x03\xD5\x03\xD5\x03\xD6\x03\xD6\x03\xD7\x03\xD7" +
        "\x03\xD8\x03\xD8\x03\xD9\x03\xD9\x03\xDA\x03\xDA\x03\xDB\x03\xDB\x03\xDB" +
        "\x03\xDC\x03\xDC\x03\xDD\x03\xDD\x03\xDE\x03\xDE\x03\xDF\x03\xDF\x03\xE0" +
        "\x03\xE0\x03\xE1\x03\xE1\x03\xE2\x03\xE2\x03\xE2\x07\xE2\u075E\n\xE2\f" +
        "\xE2\x0E\xE2\u0761\v\xE2\x03\xE3\x03\xE3\x07\xE3\u0765\n\xE3\f\xE3\x0E" +
        "\xE3\u0768\v\xE3\x03\xE4\x03\xE4\x06\xE4\u076C\n\xE4\r\xE4\x0E\xE4\u076D" +
        "\x03\xE5\x06\xE5\u0771\n\xE5\r\xE5\x0E\xE5\u0772\x03\xE6\x06\xE6\u0776" +
        "\n\xE6\r\xE6\x0E\xE6\u0777\x03\xE6\x03\xE6\x07\xE6\u077C\n\xE6\f\xE6\x0E" +
        "\xE6\u077F\v\xE6\x03\xE6\x03\xE6\x06\xE6\u0783\n\xE6\r\xE6\x0E\xE6\u0784" +
        "\x05\xE6\u0787\n\xE6\x03\xE6\x05\xE6\u078A\n\xE6\x03\xE6\x06\xE6\u078D" +
        "\n\xE6\r\xE6\x0E\xE6\u078E\x03\xE6\x03\xE6\x05\xE6\u0793\n\xE6\x03\xE7" +
        "\x03\xE7\x03\xE7\x03\xE7\x06\xE7\u0799\n\xE7\r\xE7\x0E\xE7\u079A\x03\xE8" +
        "\x03\xE8\x03\xE8\x03\xE8\x06\xE8\u07A1\n\xE8\r\xE8\x0E\xE8\u07A2\x03\xE9" +
        "\x03\xE9\x07\xE9\u07A7\n\xE9\f\xE9\x0E\xE9\u07AA\v\xE9\x03\xE9\x03\xE9" +
        "\x03\xEA\x03\xEA\x03\xEA\x03\xEA\x07\xEA\u07B2\n\xEA\f\xEA\x0E\xEA\u07B5" +
        "\v\xEA\x03\xEA\x03\xEA\x03\xEB\x03\xEB\x03\xEB\x03\xEB\x03\xEC\x03\xEC" +
        "\x03\xEC\x03\xEC\x03\xEC\x07\xEC\u07C2\n\xEC\f\xEC\x0E\xEC\u07C5\v\xEC" +
        "\x03\xEC\x03\xEC\x03\xEC\x07\xEC\u07CA\n\xEC\f\xEC\x0E\xEC\u07CD\v\xEC" +
        "\x03\xEC\x03\xEC\x03\xEC\x03\xEC\x03\xEC\x03\xED\x03\xED\x03\xED\x03\xED" +
        "\x03\xED\x07\xED\u07D9\n\xED\f\xED\x0E\xED\u07DC\v\xED\x03\xED\x03\xED" +
        "\x07\xED\u07E0\n\xED\f\xED\x0E\xED\u07E3\v\xED\x03\xED\x03\xED\x03\xED" +
        "\x03\xED\x03\xEE\x03\xEE\x03\xEE\x03\xEE\x03\xEF\x03\xEF\x03\xEF\x07\xEF" +
        "\u07F0\n\xEF\f\xEF\x0E\xEF\u07F3\v\xEF\x03\xEF\x03\xEF\x03\xF0\x03\xF0" +
        "\x03\xF0\x03\xF0\x03\xF1\x03\xF1\x03\xF1\x03\xF1\x03\xF1\x03\xF1\x03\xF1" +
        "\x03\xF2\x03\xF2\x03\xF2\x03\xF2\x03\xF3\x03\xF3\x03\xF3\x03\xF3\x03\xF3" +
        "\x03\xF4\x03\xF4\x03\xF4\x03\xF4\x03\xF4\x03\xF5\x03\xF5\x03\xF5\x03\xF5" +
        "\x03\xF5\x03\xF5\x06\xF5\u0816\n\xF5\r\xF5\x0E\xF5\u0817\x03\xF5\x03\xF5" +
        "\x03\xF6\x06\xF6\u081D\n\xF6\r\xF6\x0E\xF6\u081E\x03\xF7\x06\xF7\u0822" +
        "\n\xF7\r\xF7\x0E\xF7\u0823\x03\xF7\x03\xF7\x03\xF8\x03\xF8\x03\xF8\x03" +
        "\xF9\x03\xF9\x03\xF9\x03\xF9\x03\xF9\x03\xFA\x03\xFA\x03\xFA\x03\xFA\x03" +
        "\xFA\x03\xFB\x07\xFB\u0836\n\xFB\f\xFB\x0E\xFB\u0839\v\xFB\x03\xFB\x05" +
        "\xFB\u083C\n\xFB\x03\xFB\x03\xFB\x05\xFB\u0840\n\xFB\x03\xFC\x03\xFC\x03" +
        "\xFC\x03\xFC\x03\xFC\x03\xFC\x05\xFC\u0848\n\xFC\x03\xFD\x03\xFD\x03\xFD" +
        "\x03\xFD\x03\xFD\x05\xFD\u084F\n\xFD\x03\xFD\x03\xFD\x05\xFD\u0853\n\xFD" +
        "\x03\xFE\x03\xFE\x03\xFE\x03\xFE\x05\xFE\u0859\n\xFE\x03\xFF\x05\xFF\u085C" +
        "\n\xFF\x03\u0100\x03\u0100\x05\u0100\u0860\n\u0100\x03\u0100\x06\u0100" +
        "\u0863\n\u0100\r\u0100\x0E\u0100\u0864\x03\u0101\x03\u0101\x03\u0102\x03" +
        "\u0102\x07\u024C\u025A\u031E\u034F\u0837\x02\x02\u0103\r\x02\x03\x0F\x02" +
        "\x04\x11\x02\x05\x13\x02\x02\x15\x02\x06\x17\x02\x07\x19\x02\b\x1B\x02" +
        "\t\x1D\x02\n\x1F\x02\v!\x02\f#\x02\x02%\x02\r\'\x02\x0E)\x02\x0F+\x02" +
        "\xEF-\x02\x02/\x02\x101\x02\x113\x02\x125\x02\x137\x02\x149\x02\x15;\x02" +
        "\x16=\x02\x17?\x02\x18A\x02\x19C\x02\x1AE\x02\x1BG\x02\x02I\x02\x1CK\x02" +
        "\x1DM\x02\x1EO\x02\x1FQ\x02\x02S\x02 U\x02!W\x02\"Y\x02#[\x02$]\x02%_" +
        "\x02\x02a\x02&c\x02\x02e\x02\'g\x02(i\x02)k\x02*m\x02+o\x02,q\x02-s\x02" +
        ".u\x02/w\x020y\x021{\x022}\x023\x7F\x024\x81\x025\x83\x026\x85\x027\x87" +
        "\x028\x89\x029\x8B\x02:\x8D\x02;\x8F\x02<\x91\x02=\x93\x02>\x95\x02?\x97" +
        "\x02@\x99\x02A\x9B\x02B\x9D\x02C\x9F\x02D\xA1\x02E\xA3\x02F\xA5\x02G\xA7" +
        "\x02H\xA9\x02I\xAB\x02J\xAD\x02K\xAF\x02L\xB1\x02M\xB3\x02N\xB5\x02O\xB7" +
        "\x02P\xB9\x02Q\xBB\x02R\xBD\x02S\xBF\x02T\xC1\x02U\xC3\x02V\xC5\x02W\xC7" +
        "\x02X\xC9\x02Y\xCB\x02Z\xCD\x02[\xCF\x02\\\xD1\x02]\xD3\x02^\xD5\x02_" +
        "\xD7\x02`\xD9\x02a\xDB\x02b\xDD\x02c\xDF\x02d\xE1\x02e\xE3\x02f\xE5\x02" +
        "g\xE7\x02h\xE9\x02i\xEB\x02j\xED\x02k\xEF\x02l\xF1\x02m\xF3\x02n\xF5\x02" +
        "o\xF7\x02p\xF9\x02q\xFB\x02r\xFD\x02s\xFF\x02t\u0101\x02u\u0103\x02v\u0105" +
        "\x02w\u0107\x02x\u0109\x02y\u010B\x02z\u010D\x02{\u010F\x02|\u0111\x02" +
        "}\u0113\x02~\u0115\x02\x7F\u0117\x02\x80\u0119\x02\x81\u011B\x02\x82\u011D" +
        "\x02\x83\u011F\x02\x84\u0121\x02\x85\u0123\x02\x86\u0125\x02\x87\u0127" +
        "\x02\x88\u0129\x02\x89\u012B\x02\x8A\u012D\x02\x8B\u012F\x02\x8C\u0131" +
        "\x02\x8D\u0133\x02\x8E\u0135\x02\x8F\u0137\x02\x90\u0139\x02\x91\u013B" +
        "\x02\x92\u013D\x02\x93\u013F\x02\x94\u0141\x02\x95\u0143\x02\x96\u0145" +
        "\x02\x97\u0147\x02\x98\u0149\x02\x99\u014B\x02\x9A\u014D\x02\x9B\u014F" +
        "\x02\x9C\u0151\x02\x9D\u0153\x02\x9E\u0155\x02\x9F\u0157\x02\xA0\u0159" +
        "\x02\xA1\u015B\x02\xA2\u015D\x02\xA3\u015F\x02\xA4\u0161\x02\xA5\u0163" +
        "\x02\xA6\u0165\x02\xA7\u0167\x02\xA8\u0169\x02\xA9\u016B\x02\xAA\u016D" +
        "\x02\xAB\u016F\x02\xAC\u0171\x02\xAD\u0173\x02\xAE\u0175\x02\xAF\u0177" +
        "\x02\xB0\u0179\x02\xB1\u017B\x02\xB2\u017D\x02\xB3\u017F\x02\xB4\u0181" +
        "\x02\xB5\u0183\x02\xB6\u0185\x02\xB7\u0187\x02\xB8\u0189\x02\xB9";
    PhpLexer._serializedATNSegment1 = "\u018B\x02\xBA\u018D\x02\xBB\u018F\x02\xBC\u0191\x02\xBD\u0193\x02\xBE" +
        "\u0195\x02\xBF\u0197\x02\xC0\u0199\x02\xC1\u019B\x02\xC2\u019D\x02\xC3" +
        "\u019F\x02\xC4\u01A1\x02\xC5\u01A3\x02\xC6\u01A5\x02\xC7\u01A7\x02\xC8" +
        "\u01A9\x02\xC9\u01AB\x02\xCA\u01AD\x02\xCB\u01AF\x02\xCC\u01B1\x02\xCD" +
        "\u01B3\x02\xCE\u01B5\x02\xCF\u01B7\x02\xD0\u01B9\x02\xD1\u01BB\x02\xD2" +
        "\u01BD\x02\xD3\u01BF\x02\xD4\u01C1\x02\xD5\u01C3\x02\xD6\u01C5\x02\xD7" +
        "\u01C7\x02\xD8\u01C9\x02\xD9\u01CB\x02\xDA\u01CD\x02\xDB\u01CF\x02\xDC" +
        "\u01D1\x02\xDD\u01D3\x02\xDE\u01D5\x02\xDF\u01D7\x02\xE0\u01D9\x02\xE1" +
        "\u01DB\x02\xE2\u01DD\x02\xE3\u01DF\x02\xE4\u01E1\x02\xE5\u01E3\x02\xE6" +
        "\u01E5\x02\xE7\u01E7\x02\x02\u01E9\x02\x02\u01EB\x02\xE8\u01ED\x02\x02" +
        "\u01EF\x02\x02\u01F1\x02\x02\u01F3\x02\xE9\u01F5\x02\xEA\u01F7\x02\xEB" +
        "\u01F9\x02\xEC\u01FB\x02\x02\u01FD\x02\xED\u01FF\x02\xEE\u0201\x02\x02" +
        "\u0203\x02\x02\u0205\x02\x02\u0207\x02\x02\u0209\x02\x02\u020B\x02\x02" +
        "\u020D\x02\x02\r\x02\x03\x04\x05\x06\x07\b\t\n\v\f\x19\x05\x02\v\f\x0F" +
        "\x0F\"\"\x04\x02%%>>\x04\x02\f\f\x0F\x0F\x03\x02>>\x03\x02AA\x04\x02)" +
        ")>>\x04\x02$$>>\x05\x02C\\aac|\x06\x022;C\\aac|\x03\x0229\x04\x0223aa" +
        "\x03\x02bb\x04\x02))^^\x04\x02\v\v\"\"\x05\x022;C\\c|\x06\x02$$&&^^}}" +
        "\x05\x02\f\f\x0F\x0FAA\x04\x02/0aa\x05\x02\xB9\xB9\u0302\u0371\u2041\u2042" +
        "\n\x02<<C\\c|\u2072\u2191\u2C02\u2FF1\u3003\uD801\uF902\uFDD1\uFDF2\uFFFF" +
        "\x04\x02--//\x04\x022;aa\x06\x022;CHaach\x02\u089B\x02\r\x03\x02\x02\x02" +
        "\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02" +
        "\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02" +
        "\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02" +
        "\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x03\'" +
        "\x03\x02\x02\x02\x03)\x03\x02\x02\x02\x03+\x03\x02\x02\x02\x04-\x03\x02" +
        "\x02\x02\x04/\x03\x02\x02\x02\x041\x03\x02\x02\x02\x043\x03\x02\x02\x02" +
        "\x045\x03\x02\x02\x02\x047\x03\x02\x02\x02\x049\x03\x02\x02\x02\x04;\x03" +
        "\x02\x02\x02\x04=\x03\x02\x02\x02\x04?\x03\x02\x02\x02\x04A\x03\x02\x02" +
        "\x02\x04C\x03\x02\x02\x02\x04E\x03\x02\x02\x02\x05G\x03\x02\x02\x02\x05" +
        "I\x03\x02\x02\x02\x05K\x03\x02\x02\x02\x05M\x03\x02\x02\x02\x05O\x03\x02" +
        "\x02\x02\x06Q\x03\x02\x02\x02\x06S\x03\x02\x02\x02\x06U\x03\x02\x02\x02" +
        "\x06W\x03\x02\x02\x02\x06Y\x03\x02\x02\x02\x07[\x03\x02\x02\x02\x07]\x03" +
        "\x02\x02\x02\x07_\x03\x02\x02\x02\x07a\x03\x02\x02\x02\x07c\x03\x02\x02" +
        "\x02\be\x03\x02\x02\x02\tg\x03\x02\x02\x02\ti\x03\x02\x02\x02\tk\x03\x02" +
        "\x02\x02\tm\x03\x02\x02\x02\to\x03\x02\x02\x02\tq\x03\x02\x02\x02\ts\x03" +
        "\x02\x02\x02\tu\x03\x02\x02\x02\tw\x03\x02\x02\x02\ty\x03\x02\x02\x02" +
        "\t{\x03\x02\x02\x02\t}\x03\x02\x02\x02\t\x7F\x03\x02\x02\x02\t\x81\x03" +
        "\x02\x02\x02\t\x83\x03\x02\x02\x02\t\x85\x03\x02\x02\x02\t\x87\x03\x02" +
        "\x02\x02\t\x89\x03\x02\x02\x02\t\x8B\x03\x02\x02\x02\t\x8D\x03\x02\x02" +
        "\x02\t\x8F\x03\x02\x02\x02\t\x91\x03\x02\x02\x02\t\x93\x03\x02\x02\x02" +
        "\t\x95\x03\x02\x02\x02\t\x97\x03\x02\x02\x02\t\x99\x03\x02\x02\x02\t\x9B" +
        "\x03\x02\x02\x02\t\x9D\x03\x02\x02\x02\t\x9F\x03\x02\x02\x02\t\xA1\x03" +
        "\x02\x02\x02\t\xA3\x03\x02\x02\x02\t\xA5\x03\x02\x02\x02\t\xA7\x03\x02" +
        "\x02\x02\t\xA9\x03\x02\x02\x02\t\xAB\x03\x02\x02\x02\t\xAD\x03\x02\x02" +
        "\x02\t\xAF\x03\x02\x02\x02\t\xB1\x03\x02\x02\x02\t\xB3\x03\x02\x02\x02" +
        "\t\xB5\x03\x02\x02\x02\t\xB7\x03\x02\x02\x02\t\xB9\x03\x02\x02\x02\t\xBB" +
        "\x03\x02\x02\x02\t\xBD\x03\x02\x02\x02\t\xBF\x03\x02\x02\x02\t\xC1\x03" +
        "\x02\x02\x02\t\xC3\x03\x02\x02\x02\t\xC5\x03\x02\x02\x02\t\xC7\x03\x02" +
        "\x02\x02\t\xC9\x03\x02\x02\x02\t\xCB\x03\x02\x02\x02\t\xCD\x03\x02\x02" +
        "\x02\t\xCF\x03\x02\x02\x02\t\xD1\x03\x02\x02\x02\t\xD3\x03\x02\x02\x02" +
        "\t\xD5\x03\x02\x02\x02\t\xD7\x03\x02\x02\x02\t\xD9\x03\x02\x02\x02\t\xDB" +
        "\x03\x02\x02\x02\t\xDD\x03\x02\x02\x02\t\xDF\x03\x02\x02\x02\t\xE1\x03" +
        "\x02\x02\x02\t\xE3\x03\x02\x02\x02\t\xE5\x03\x02\x02\x02\t\xE7\x03\x02" +
        "\x02\x02\t\xE9\x03\x02\x02\x02\t\xEB\x03\x02\x02\x02\t\xED\x03\x02\x02" +
        "\x02\t\xEF\x03\x02\x02\x02\t\xF1\x03\x02\x02\x02\t\xF3\x03\x02\x02\x02" +
        "\t\xF5\x03\x02\x02\x02\t\xF7\x03\x02\x02\x02\t\xF9\x03\x02\x02\x02\t\xFB" +
        "\x03\x02\x02\x02\t\xFD\x03\x02\x02\x02\t\xFF\x03\x02\x02\x02\t\u0101\x03" +
        "\x02\x02\x02\t\u0103\x03\x02\x02\x02\t\u0105\x03\x02\x02\x02\t\u0107\x03" +
        "\x02\x02\x02\t\u0109\x03\x02\x02\x02\t\u010B\x03\x02\x02\x02\t\u010D\x03" +
        "\x02\x02\x02\t\u010F\x03\x02\x02\x02\t\u0111\x03\x02\x02\x02\t\u0113\x03" +
        "\x02\x02\x02\t\u0115\x03\x02\x02\x02\t\u0117\x03\x02\x02\x02\t\u0119\x03" +
        "\x02\x02\x02\t\u011B\x03\x02\x02\x02\t\u011D\x03\x02\x02\x02\t\u011F\x03" +
        "\x02\x02\x02\t\u0121\x03\x02\x02\x02\t\u0123\x03\x02\x02\x02\t\u0125\x03" +
        "\x02\x02\x02\t\u0127\x03\x02\x02\x02\t\u0129\x03\x02\x02\x02\t\u012B\x03" +
        "\x02\x02\x02\t\u012D\x03\x02\x02\x02\t\u012F\x03\x02\x02\x02\t\u0131\x03" +
        "\x02\x02\x02\t\u0133\x03\x02\x02\x02\t\u0135\x03\x02\x02\x02\t\u0137\x03" +
        "\x02\x02\x02\t\u0139\x03\x02\x02\x02\t\u013B\x03\x02\x02\x02\t\u013D\x03" +
        "\x02\x02\x02\t\u013F\x03\x02\x02\x02\t\u0141\x03\x02\x02\x02\t\u0143\x03" +
        "\x02\x02\x02\t\u0145\x03\x02\x02\x02\t\u0147\x03\x02\x02\x02\t\u0149\x03" +
        "\x02\x02\x02\t\u014B\x03\x02\x02\x02\t\u014D\x03\x02\x02\x02\t\u014F\x03" +
        "\x02\x02\x02\t\u0151\x03\x02\x02\x02\t\u0153\x03\x02\x02\x02\t\u0155\x03" +
        "\x02\x02\x02\t\u0157\x03\x02\x02\x02\t\u0159\x03\x02\x02\x02\t\u015B\x03" +
        "\x02\x02\x02\t\u015D\x03\x02\x02\x02\t\u015F\x03\x02\x02\x02\t\u0161\x03" +
        "\x02\x02\x02\t\u0163\x03\x02\x02\x02\t\u0165\x03\x02\x02\x02\t\u0167\x03" +
        "\x02\x02\x02\t\u0169\x03\x02\x02\x02\t\u016B\x03\x02\x02\x02\t\u016D\x03" +
        "\x02\x02\x02\t\u016F\x03\x02\x02\x02\t\u0171\x03\x02\x02\x02\t\u0173\x03" +
        "\x02\x02\x02\t\u0175\x03\x02\x02\x02\t\u0177\x03\x02\x02\x02\t\u0179\x03" +
        "\x02\x02\x02\t\u017B\x03\x02\x02\x02\t\u017D\x03\x02\x02\x02\t\u017F\x03" +
        "\x02\x02\x02\t\u0181\x03\x02\x02\x02\t\u0183\x03\x02\x02\x02\t\u0185\x03" +
        "\x02\x02\x02\t\u0187\x03\x02\x02\x02\t\u0189\x03\x02\x02\x02\t\u018B\x03" +
        "\x02\x02\x02\t\u018D\x03\x02\x02\x02\t\u018F\x03\x02\x02\x02\t\u0191\x03" +
        "\x02\x02\x02\t\u0193\x03\x02\x02\x02\t\u0195\x03\x02\x02\x02\t\u0197\x03" +
        "\x02\x02\x02\t\u0199\x03\x02\x02\x02\t\u019B\x03\x02\x02\x02\t\u019D\x03" +
        "\x02\x02\x02\t\u019F\x03\x02\x02\x02\t\u01A1\x03\x02\x02\x02\t\u01A3\x03" +
        "\x02\x02\x02\t\u01A5\x03\x02\x02\x02\t\u01A7\x03\x02\x02\x02\t\u01A9\x03" +
        "\x02\x02\x02\t\u01AB\x03\x02\x02\x02\t\u01AD\x03\x02\x02\x02\t\u01AF\x03" +
        "\x02\x02\x02\t\u01B1\x03\x02\x02\x02\t\u01B3\x03\x02\x02\x02\t\u01B5\x03" +
        "\x02\x02\x02\t\u01B7\x03\x02\x02\x02\t\u01B9\x03\x02\x02\x02\t\u01BB\x03" +
        "\x02\x02\x02\t\u01BD\x03\x02\x02\x02\t\u01BF\x03\x02\x02\x02\t\u01C1\x03" +
        "\x02\x02\x02\t\u01C3\x03\x02\x02\x02\t\u01C5\x03\x02\x02\x02\t\u01C7\x03" +
        "\x02\x02\x02\t\u01C9\x03\x02\x02\x02\t\u01CB\x03\x02\x02\x02\t\u01CD\x03" +
        "\x02\x02\x02\t\u01CF\x03\x02\x02\x02\t\u01D1\x03\x02\x02\x02\t\u01D3\x03" +
        "\x02\x02\x02\t\u01D5\x03\x02\x02\x02\t\u01D7\x03\x02\x02\x02\t\u01D9\x03" +
        "\x02\x02\x02\t\u01DB\x03\x02\x02\x02\t\u01DD\x03\x02\x02\x02\t\u01DF\x03" +
        "\x02\x02\x02\t\u01E1\x03\x02\x02\x02\t\u01E3\x03\x02\x02\x02\t\u01E5\x03" +
        "\x02\x02\x02\n\u01E7\x03\x02\x02\x02\n\u01E9\x03\x02\x02\x02\n\u01EB\x03" +
        "\x02\x02\x02\n\u01ED\x03\x02\x02\x02\n\u01EF\x03\x02\x02\x02\n\u01F1\x03" +
        "\x02\x02\x02\n\u01F3\x03\x02\x02\x02\n\u01F5\x03\x02\x02\x02\v\u01F7\x03" +
        "\x02\x02\x02\v\u01F9\x03\x02\x02\x02\v\u01FB\x03\x02\x02\x02\v\u01FD\x03" +
        "\x02\x02\x02\f\u01FF\x03\x02\x02\x02\r\u0210\x03\x02\x02\x02\x0F\u0217" +
        "\x03\x02\x02\x02\x11\u021B\x03\x02\x02\x02\x13\u0223\x03\x02\x02\x02\x15" +
        "\u0228\x03\x02\x02\x02\x17\u022D\x03\x02\x02\x02\x19\u0239\x03\x02\x02" +
        "\x02\x1B\u0244\x03\x02\x02\x02\x1D\u0255\x03\x02\x02\x02\x1F\u025F\x03" +
        "\x02\x02\x02!\u0263\x03\x02\x02\x02#\u026C\x03\x02\x02\x02%\u0275\x03" +
        "\x02\x02\x02\'\u027A\x03\x02\x02\x02)\u027E\x03\x02\x02\x02+\u0283\x03" +
        "\x02\x02\x02-\u0287\x03\x02\x02\x02/\u028C\x03\x02\x02\x021\u0291\x03" +
        "\x02\x02\x023\u0294\x03\x02\x02\x025\u0299\x03\x02\x02\x027\u029B\x03" +
        "\x02\x02\x029\u029E\x03\x02\x02\x02;\u02A5\x03\x02\x02\x02=\u02AB\x03" +
        "\x02\x02\x02?\u02B2\x03\x02\x02\x02A\u02B7\x03\x02\x02\x02C\u02BD\x03" +
        "\x02\x02\x02E\u02C4\x03\x02\x02\x02G\u02C8\x03\x02\x02\x02I\u02CD\x03" +
        "\x02\x02\x02K\u02D2\x03\x02\x02\x02M\u02D9\x03\x02\x02\x02O\u02DD\x03" +
        "\x02\x02\x02Q\u02E1\x03\x02\x02\x02S\u02E6\x03\x02\x02\x02U\u02EB\x03" +
        "\x02\x02\x02W\u02F2\x03\x02\x02\x02Y\u02F6\x03\x02\x02\x02[\u02FB\x03" +
        "\x02\x02\x02]\u02FF\x03\x02\x02\x02_\u030D\x03\x02\x02\x02a\u0312\x03" +
        "\x02\x02\x02c\u0317\x03\x02\x02\x02e\u031E\x03\x02\x02\x02g\u0340\x03" +
        "\x02\x02\x02i\u0343\x03\x02\x02\x02k\u0349\x03\x02\x02\x02m\u0357\x03" +
        "\x02\x02\x02o\u035D\x03\x02\x02\x02q\u0362\x03\x02\x02\x02s\u036B\x03" +
        "\x02\x02\x02u\u0371\x03\x02\x02\x02w\u0374\x03\x02\x02\x02y\u037B\x03" +
        "\x02\x02\x02{\u038E\x03\x02\x02\x02}\u0390\x03\x02\x02\x02\x7F\u0396\x03" +
        "\x02\x02\x02\x81\u039F\x03\x02\x02\x02\x83\u03A4\x03\x02\x02\x02\x85\u03AA" +
        "\x03\x02\x02\x02\x87\u03B0\x03\x02\x02\x02\x89\u03B6\x03\x02\x02\x02\x8B" +
        "\u03BC\x03\x02\x02\x02\x8D\u03C5\x03\x02\x02\x02\x8F\u03CD\x03\x02\x02" +
        "\x02\x91\u03D5\x03\x02\x02\x02\x93\u03D8\x03\x02\x02\x02\x95\u03DD\x03" +
        "\x02\x02\x02\x97\u03E4\x03\x02\x02\x02\x99\u03E9\x03\x02\x02\x02\x9B\u03EE" +
        "\x03\x02\x02\x02\x9D\u03F5\x03\x02\x02\x02\x9F\u03FB\x03\x02\x02\x02\xA1" +
        "\u0406\x03\x02\x02\x02\xA3\u040D\x03\x02\x02\x02\xA5\u0418\x03\x02\x02" +
        "\x02\xA7\u041E\x03\x02\x02\x02\xA9\u0428\x03\x02\x02\x02\xAB\u0431\x03" +
        "\x02\x02\x02\xAD\u0436\x03\x02\x02\x02\xAF\u043A\x03\x02\x02\x02\xB1\u0442" +
        "\x03\x02\x02\x02\xB3\u0448\x03\x02\x02\x02\xB5\u0450\x03\x02\x02\x02\xB7" +
        "\u0456\x03\x02\x02\x02\xB9\u045A\x03\x02\x02\x02\xBB\u0462\x03\x02\x02" +
        "\x02\xBD\u046B\x03\x02\x02\x02\xBF\u0472\x03\x02\x02\x02\xC1\u0477\x03" +
        "\x02\x02\x02\xC3\u047A\x03\x02\x02\x02\xC5\u0485\x03\x02\x02\x02\xC7\u048C" +
        "\x03\x02\x02\x02\xC9\u0494\x03\x02\x02\x02\xCB\u04A1\x03\x02\x02\x02\xCD" +
        "\u04AC\x03\x02\x02\x02\xCF\u04B6\x03\x02\x02\x02\xD1\u04BB\x03\x02\x02" +
        "\x02\xD3\u04C1\x03\x02\x02\x02\xD5\u04C7\x03\x02\x02\x02\xD7\u04D1\x03" +
        "\x02\x02\x02\xD9\u04DB\x03\x02\x02\x02\xDB\u04E1\x03\x02\x02\x02\xDD\u04E6" +
        "\x03\x02\x02\x02\xDF\u04EA\x03\x02\x02\x02\xE1\u04ED\x03\x02\x02\x02\xE3" +
        "\u04F1\x03\x02\x02\x02\xE5\u04FB\x03\x02\x02\x02\xE7\u04FF\x03\x02\x02" +
        "\x02\xE9\u0504\x03\x02\x02\x02\xEB\u050B\x03\x02\x02\x02\xED\u0512\x03" +
        "\x02\x02\x02\xEF\u051A\x03\x02\x02\x02\xF1\u0520\x03\x02\x02\x02\xF3\u0528" +
        "\x03\x02\x02\x02\xF5\u0532\x03\x02\x02\x02\xF7\u0539\x03\x02\x02\x02\xF9" +
        "\u0541\x03\x02\x02\x02\xFB\u054E\x03\x02\x02\x02\xFD\u0557\x03\x02\x02" +
        "\x02\xFF\u055E\x03\x02\x02\x02\u0101\u0565\x03\x02\x02\x02\u0103\u056C" +
        "\x03\x02\x02\x02\u0105\u0573\x03\x02\x02\x02\u0107\u0579\x03\x02\x02\x02" +
        "\u0109\u057F\x03\x02\x02\x02\u010B\u0583\x03\x02\x02\x02\u010D\u058D\x03" +
        "\x02\x02\x02\u010F\u0599\x03\x02\x02\x02\u0111\u05A1\x03\x02\x02\x02\u0113" +
        "\u05A7\x03\x02\x02\x02\u0115\u05AB\x03\x02\x02\x02\u0117\u05AF\x03\x02" +
        "\x02\x02\u0119\u05B5\x03\x02\x02\x02\u011B\u05BB\x03\x02\x02\x02\u011D" +
        "\u05C0\x03\x02\x02\x02\u011F\u05C3\x03\x02\x02\x02\u0121\u05C9\x03\x02" +
        "\x02\x02\u0123\u05CF\x03\x02\x02\x02\u0125\u05D6\x03\x02\x02\x02\u0127" +
        "\u05E3\x03\x02\x02\x02\u0129\u05EF\x03\x02\x02\x02\u012B\u05FA\x03\x02" +
        "\x02\x02\u012D\u0603\x03\x02\x02\x02\u012F\u060B\x03\x02\x02\x02\u0131" +
        "\u0616\x03\x02\x02\x02\u0133\u061E\x03\x02\x02\x02\u0135\u0626\x03\x02" +
        "\x02\x02\u0137\u0631\x03\x02\x02\x02\u0139\u063A\x03\x02\x02\x02\u013B" +
        "\u0646\x03\x02\x02\x02\u013D\u064E\x03\x02\x02\x02\u013F\u065A\x03\x02" +
        "\x02\x02\u0141\u0668\x03\x02\x02\x02\u0143\u0672\x03\x02\x02\x02\u0145" +
        "\u067C\x03\x02\x02\x02\u0147\u0689\x03\x02\x02\x02\u0149\u0694\x03\x02" +
        "\x02\x02\u014B\u069D\x03\x02\x02\x02\u014D\u06A6\x03\x02\x02\x02\u014F" +
        "\u06AE\x03\x02\x02\x02\u0151\u06B2\x03\x02\x02\x02\u0153\u06B5\x03\x02" +
        "\x02\x02\u0155\u06B8\x03\x02\x02\x02\u0157\u06BB\x03\x02\x02\x02\u0159" +
        "\u06BE\x03\x02\x02\x02\u015B\u06C1\x03\x02\x02\x02\u015D\u06C5\x03\x02" +
        "\x02\x02\u015F\u06C9\x03\x02\x02\x02\u0161\u06D0\x03\x02\x02\x02\u0163" +
        "\u06D2\x03\x02\x02\x02\u0165\u06D5\x03\x02\x02\x02\u0167\u06D8\x03\x02" +
        "\x02\x02\u0169\u06DB\x03\x02\x02\x02\u016B\u06DE\x03\x02\x02\x02\u016D" +
        "\u06E1\x03\x02\x02\x02\u016F\u06E4\x03\x02\x02\x02\u0171\u06E8\x03\x02" +
        "\x02\x02\u0173\u06EB\x03\x02\x02\x02\u0175\u06EE\x03\x02\x02\x02\u0177" +
        "\u06F1\x03\x02\x02\x02\u0179\u06F5\x03\x02\x02\x02\u017B\u06F9\x03\x02" +
        "\x02\x02\u017D\u06FC\x03\x02\x02\x02\u017F\u06FF\x03\x02\x02\x02\u0181" +
        "\u0702\x03\x02\x02\x02\u0183\u0705\x03\x02\x02\x02\u0185\u0708\x03\x02" +
        "\x02\x02\u0187\u070B\x03\x02\x02\x02\u0189\u070F\x03\x02\x02\x02\u018B" +
        "\u0712\x03\x02\x02\x02\u018D\u0715\x03\x02\x02\x02\u018F\u0718\x03\x02" +
        "\x02\x02\u0191\u071B\x03\x02\x02\x02\u0193\u071D\x03\x02\x02\x02\u0195" +
        "\u0721\x03\x02\x02\x02\u0197\u0723\x03\x02\x02\x02\u0199\u0725\x03\x02" +
        "\x02\x02\u019B\u0727\x03\x02\x02\x02\u019D\u0729\x03\x02\x02\x02\u019F" +
        "\u072B\x03\x02\x02\x02\u01A1\u072D\x03\x02\x02\x02\u01A3\u072F\x03\x02" +
        "\x02\x02\u01A5\u0731\x03\x02\x02\x02\u01A7\u0733\x03\x02\x02\x02\u01A9" +
        "\u0735\x03\x02\x02\x02\u01AB\u0737\x03\x02\x02\x02\u01AD\u0739\x03\x02" +
        "\x02\x02\u01AF\u073B\x03\x02\x02\x02\u01B1\u073D\x03\x02\x02\x02\u01B3" +
        "\u073F\x03\x02\x02\x02\u01B5\u0741\x03\x02\x02\x02\u01B7\u0743\x03\x02" +
        "\x02\x02\u01B9\u0745\x03\x02\x02\x02\u01BB\u0747\x03\x02\x02\x02\u01BD" +
        "\u0749\x03\x02\x02\x02\u01BF\u074B\x03\x02\x02\x02\u01C1\u074E\x03\x02" +
        "\x02\x02\u01C3\u0750\x03\x02\x02\x02\u01C5\u0752\x03\x02\x02\x02\u01C7" +
        "\u0754\x03\x02\x02\x02\u01C9\u0756\x03\x02\x02\x02\u01CB\u0758\x03\x02" +
        "\x02\x02\u01CD\u075A\x03\x02\x02\x02\u01CF\u0762\x03\x02\x02\x02\u01D1" +
        "\u0769\x03\x02\x02\x02\u01D3\u0770\x03\x02\x02\x02\u01D5\u0792\x03\x02" +
        "\x02\x02\u01D7\u0794\x03\x02\x02\x02\u01D9\u079C\x03\x02\x02\x02\u01DB" +
        "\u07A4\x03\x02\x02\x02\u01DD\u07AD\x03\x02\x02\x02\u01DF\u07B8\x03\x02" +
        "\x02\x02\u01E1\u07BC\x03\x02\x02\x02\u01E3\u07D3\x03\x02\x02\x02\u01E5" +
        "\u07E8\x03\x02\x02\x02\u01E7\u07EC\x03\x02\x02\x02\u01E9\u07F6\x03\x02" +
        "\x02\x02\u01EB\u07FA\x03\x02\x02\x02\u01ED\u0801\x03\x02\x02\x02\u01EF" +
        "\u0805\x03\x02\x02\x02\u01F1\u080A\x03\x02\x02\x02\u01F3\u080F\x03\x02" +
        "\x02\x02\u01F5\u081C\x03\x02\x02\x02\u01F7\u0821\x03\x02\x02\x02\u01F9" +
        "\u0827\x03\x02\x02\x02\u01FB\u082A\x03\x02\x02\x02\u01FD\u082F\x03\x02" +
        "\x02\x02\u01FF\u0837\x03\x02\x02\x02\u0201\u0841\x03\x02\x02\x02\u0203" +
        "\u0849\x03\x02\x02\x02\u0205\u0858\x03\x02\x02\x02\u0207\u085B\x03\x02" +
        "\x02\x02\u0209\u085D\x03\x02\x02\x02\u020B\u0866\x03\x02\x02\x02\u020D" +
        "\u0868\x03\x02\x02\x02\u020F\u0211\t\x02\x02\x02\u0210\u020F\x03\x02\x02" +
        "\x02\u0211\u0212\x03\x02\x02\x02\u0212\u0210\x03\x02\x02\x02\u0212\u0213" +
        "\x03\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214\u0215\b\x02\x02\x02" +
        "\u0215\x0E\x03\x02\x02\x02\u0216\u0218\n\x03\x02\x02\u0217\u0216\x03\x02" +
        "\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219\u0217\x03\x02\x02\x02\u0219" +
        "\u021A\x03\x02\x02\x02\u021A\x10\x03\x02\x02\x02\u021B\u021C\x07>\x02" +
        "\x02\u021C\u021D\x07A\x02\x02\u021D\u021E\x07z\x02\x02\u021E\u021F\x07" +
        "o\x02\x02\u021F\u0220\x07n\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221\u0222" +
        "\b\x04\x03\x02\u0222\x12\x03\x02\x02\x02\u0223\u0224\x05\u0201\xFC\x02" +
        "\u0224\u0225\x03\x02\x02\x02\u0225\u0226\b\x05\x04\x02\u0226\u0227\b\x05" +
        "\x05\x02\u0227\x14\x03\x02\x02\x02\u0228\u0229\x05\u0203\xFD\x02\u0229" +
        "\u022A\x03\x02\x02\x02\u022A\u022B\b\x06\x06\x02\u022B\u022C\b\x06\x05" +
        "\x02\u022C\x16\x03\x02\x02\x02\u022D\u022E\x07>\x02\x02\u022E\u022F\x07" +
        "u\x02\x02\u022F\u0230\x07e\x02\x02\u0230\u0231\x07t\x02\x02\u0231\u0232" +
        "\x07k\x02\x02\u0232\u0233\x07r\x02\x02\u0233\u0234\x07v\x02\x02\u0234" +
        "\u0235\x03\x02\x02\x02\u0235\u0236\b\x07\x07\x02\u0236\u0237\x03\x02\x02" +
        "\x02\u0237\u0238\b\x07\b\x02\u0238\x18\x03\x02\x02\x02\u0239\u023A\x07" +
        ">\x02\x02\u023A\u023B\x07u\x02\x02\u023B\u023C\x07v\x02\x02\u023C\u023D" +
        "\x07{\x02\x02\u023D\u023E\x07n\x02\x02\u023E\u023F\x07g\x02\x02\u023F" +
        "\u0240\x03\x02\x02\x02\u0240\u0241\b\b\t\x02\u0241\u0242\x03\x02\x02\x02" +
        "\u0242\u0243\b\b\b\x02\u0243\x1A\x03\x02\x02\x02\u0244\u0245\x07>\x02" +
        "\x02\u0245\u0246\x07#\x02\x02\u0246\u0247\x07/\x02\x02\u0247\u0248\x07" +
        "/\x02\x02\u0248\u024C\x03\x02\x02\x02\u0249\u024B\v\x02\x02\x02\u024A" +
        "\u0249\x03\x02\x02\x02\u024B\u024E\x03\x02\x02\x02\u024C\u024D\x03\x02" +
        "\x02\x02\u024C\u024A\x03\x02\x02\x02\u024D\u024F\x03\x02\x02\x02\u024E" +
        "\u024C\x03\x02\x02\x02\u024F\u0250\x07/\x02\x02\u0250\u0251\x07/\x02\x02" +
        "\u0251\u0252\x07@\x02\x02\u0252\u0253\x03\x02\x02\x02\u0253\u0254\b\t" +
        "\x02\x02\u0254\x1C\x03\x02\x02\x02\u0255\u0256\x07>\x02\x02\u0256\u025A" +
        "\x07#\x02\x02\u0257\u0259\v\x02\x02\x02\u0258\u0257\x03\x02\x02\x02\u0259" +
        "\u025C\x03\x02\x02\x02\u025A\u025B\x03\x02\x02\x02\u025A\u0258\x03\x02" +
        "\x02\x02\u025B\u025D\x03\x02\x02\x02\u025C\u025A\x03\x02\x02\x02\u025D" +
        "\u025E\x07@\x02\x02\u025E\x1E\x03\x02\x02\x02\u025F\u0260\x07>\x02\x02" +
        "\u0260\u0261\x03\x02\x02\x02\u0261\u0262\b\v\b\x02\u0262 \x03\x02\x02" +
        "\x02\u0263\u0264\x07%\x02\x02\u0264\u0265\x06\f\x02\x02\u0265\u0269\x07" +
        "#\x02\x02\u0266\u0268\n\x04\x02\x02\u0267\u0266\x03\x02\x02\x02\u0268" +
        "\u026B\x03\x02\x02\x02\u0269\u0267\x03\x02\x02\x02\u0269\u026A\x03\x02" +
        "\x02\x02\u026A\"\x03\x02\x02\x02\u026B\u0269\x03\x02\x02\x02\u026C\u0270" +
        "\x07%\x02\x02\u026D\u026F\n\x05\x02\x02\u026E\u026D\x03\x02\x02\x02\u026F" +
        "\u0272\x03\x02\x02\x02\u0270\u026E\x03\x02\x02\x02\u0270\u0271\x03\x02" +
        "\x02\x02\u0271\u0273\x03\x02\x02\x02\u0272\u0270\x03\x02\x02\x02\u0273" +
        "\u0274\b\r\n\x02\u0274$\x03\x02\x02\x02\u0275\u0276\v\x02\x02\x02\u0276" +
        "\u0277\x03\x02\x02\x02\u0277\u0278\b\x0E\v\x02\u0278&\x03\x02\x02\x02" +
        "\u0279\u027B\n\x06\x02\x02\u027A\u0279\x03\x02\x02\x02\u027B\u027C\x03" +
        "\x02\x02\x02\u027C\u027A\x03\x02\x02\x02\u027C\u027D\x03\x02\x02\x02\u027D" +
        "(\x03\x02\x02\x02\u027E\u027F\x07A\x02\x02\u027F\u0280\x07@\x02\x02\u0280" +
        "\u0281\x03\x02\x02\x02\u0281\u0282\b\x10\f\x02\u0282*\x03\x02\x02\x02" +
        "\u0283\u0284\x07A\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285\u0286\b\x11" +
        "\r\x02\u0286,\x03\x02\x02\x02\u0287\u0288\x05\u0201\xFC\x02\u0288\u0289" +
        "\x03\x02\x02\x02\u0289\u028A\b\x12\x04\x02\u028A\u028B\b\x12\x05\x02\u028B" +
        ".\x03\x02\x02\x02\u028C\u028D\x05\u0203\xFD\x02\u028D\u028E\x03\x02\x02" +
        "\x02\u028E\u028F\b\x13\x06\x02\u028F\u0290\b\x13\x05\x02\u02900\x03\x02" +
        "\x02\x02\u0291\u0292\x07@\x02\x02\u0292\u0293\b\x14\x0E\x02\u02932\x03" +
        "\x02\x02\x02\u0294\u0295\x071\x02\x02\u0295\u0296\x07@\x02\x02\u0296\u0297" +
        "\x03\x02\x02\x02\u0297\u0298\b\x15\f\x02\u02984\x03\x02\x02\x02\u0299" +
        "\u029A\x071\x02\x02\u029A6\x03\x02\x02\x02\u029B\u029C\x07?\x02\x02\u029C" +
        "8\x03\x02\x02\x02\u029D\u029F\x07^\x02\x02\u029E\u029D\x03\x02\x02\x02" +
        "\u029E\u029F\x03\x02\x02\x02\u029F\u02A0\x03\x02\x02\x02\u02A0\u02A1\x07" +
        ")\x02\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2\u02A3\b\x18\x0F\x02\u02A3" +
        ":\x03\x02\x02\x02\u02A4\u02A6\x07^\x02\x02\u02A5\u02A4\x03\x02\x02\x02" +
        "\u02A5\u02A6\x03\x02\x02\x02\u02A6\u02A7\x03\x02\x02\x02\u02A7\u02A8\x07" +
        "$\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9\u02AA\b\x19\x10\x02\u02AA" +
        "<\x03\x02\x02\x02\u02AB\u02AD\x07%\x02\x02\u02AC\u02AE\x05\u020D\u0102" +
        "\x02\u02AD\u02AC\x03\x02\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF\u02AD" +
        "\x03\x02\x02\x02\u02AF\u02B0\x03\x02\x02\x02\u02B0>\x03\x02\x02\x02\u02B1" +
        "\u02B3\x05\u020B\u0101\x02\u02B2\u02B1\x03\x02\x02\x02\u02B3\u02B4\x03" +
        "\x02\x02\x02\u02B4\u02B2\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5" +
        "@\x03\x02\x02\x02\u02B6\u02B8\t\x02\x02\x02\u02B7\u02B6\x03\x02\x02\x02" +
        "\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02B7\x03\x02\x02\x02\u02B9\u02BA\x03" +
        "\x02\x02\x02\u02BA\u02BB\x03\x02\x02\x02\u02BB\u02BC\b\x1C\x02\x02\u02BC" +
        "B\x03\x02\x02\x02\u02BD\u02C1\x05\u0207\xFF\x02\u02BE\u02C0\x05\u0205" +
        "\xFE\x02\u02BF\u02BE\x03\x02\x02\x02\u02C0\u02C3\x03\x02\x02\x02\u02C1" +
        "\u02BF\x03\x02\x02\x02\u02C1\u02C2\x03\x02\x02\x02\u02C2D\x03\x02\x02" +
        "\x02\u02C3\u02C1\x03\x02\x02\x02\u02C4\u02C5\v\x02\x02\x02\u02C5\u02C6" +
        "\x03\x02\x02\x02\u02C6\u02C7\b\x1E\v\x02\u02C7F\x03\x02\x02\x02\u02C8" +
        "\u02C9\x05\u0201\xFC\x02\u02C9\u02CA\x03\x02\x02\x02\u02CA\u02CB\b\x1F" +
        "\x04\x02\u02CB\u02CC\b\x1F\x05\x02\u02CCH\x03\x02\x02\x02\u02CD\u02CE" +
        "\x05\u0203\xFD\x02\u02CE\u02CF\x03\x02\x02\x02\u02CF\u02D0\b \x06\x02" +
        "\u02D0\u02D1\b \x05\x02\u02D1J\x03\x02\x02\x02\u02D2\u02D4\x07)\x02\x02" +
        "\u02D3\u02D5\x07)\x02\x02\u02D4\u02D3\x03\x02\x02\x02\u02D4\u02D5\x03" +
        "\x02\x02\x02\u02D5\u02D6\x03\x02\x02\x02\u02D6\u02D7\b!\f\x02\u02D7L\x03" +
        "\x02\x02\x02\u02D8\u02DA\n\x07\x02\x02\u02D9\u02D8\x03\x02\x02\x02\u02DA" +
        "\u02DB\x03\x02\x02\x02\u02DB\u02D9\x03\x02\x02\x02\u02DB\u02DC\x03\x02" +
        "\x02\x02\u02DCN\x03\x02\x02\x02\u02DD\u02DE\v\x02\x02\x02\u02DE\u02DF" +
        "\x03\x02\x02\x02\u02DF\u02E0\b#\v\x02\u02E0P\x03\x02\x02\x02\u02E1\u02E2" +
        "\x05\u0201\xFC\x02\u02E2\u02E3\x03\x02\x02\x02\u02E3\u02E4\b$\x04\x02" +
        "\u02E4\u02E5\b$\x05\x02\u02E5R\x03\x02\x02\x02\u02E6\u02E7\x05\u0203\xFD" +
        "\x02\u02E7\u02E8\x03\x02\x02\x02\u02E8\u02E9\b%\x06\x02\u02E9\u02EA\b" +
        "%\x05\x02\u02EAT\x03\x02\x02\x02\u02EB\u02ED\x07$\x02\x02\u02EC\u02EE" +
        "\x07$\x02\x02\u02ED\u02EC\x03\x02\x02\x02\u02ED\u02EE\x03\x02\x02\x02" +
        "\u02EE\u02EF\x03\x02\x02\x02\u02EF\u02F0\b&\f\x02\u02F0V\x03\x02\x02\x02" +
        "\u02F1\u02F3\n\b\x02\x02\u02F2\u02F1\x03\x02\x02\x02\u02F3\u02F4\x03\x02" +
        "\x02\x02\u02F4\u02F2\x03\x02\x02\x02\u02F4\u02F5\x03\x02\x02\x02\u02F5" +
        "X\x03\x02\x02\x02\u02F6\u02F7\v\x02\x02\x02\u02F7\u02F8\x03\x02\x02\x02" +
        "\u02F8\u02F9\b(\v\x02\u02F9Z\x03\x02\x02\x02\u02FA\u02FC\n\x05\x02\x02" +
        "\u02FB\u02FA\x03\x02\x02\x02\u02FC\u02FD\x03\x02\x02\x02\u02FD\u02FB\x03" +
        "\x02\x02\x02\u02FD\u02FE\x03\x02\x02\x02\u02FE\\\x03\x02\x02\x02\u02FF" +
        "\u0300\x07>\x02\x02\u0300\u0307\x071\x02\x02\u0301\u0302\x07u\x02\x02" +
        "\u0302\u0303\x07e\x02\x02\u0303\u0304\x07t\x02\x02\u0304\u0305\x07";
    PhpLexer._serializedATNSegment2 = "k\x02\x02\u0305\u0306\x07r\x02\x02\u0306\u0308\x07v\x02\x02\u0307\u0301" +
        "\x03\x02\x02\x02\u0307\u0308\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02" +
        "\u0309\u030A\x07@\x02\x02\u030A\u030B\x03\x02\x02\x02\u030B\u030C\b*\f" +
        "\x02\u030C^\x03\x02\x02\x02\u030D\u030E\x05\u0201\xFC\x02\u030E\u030F" +
        "\x03\x02\x02\x02\u030F\u0310\b+\x04\x02\u0310\u0311\b+\x05\x02\u0311`" +
        "\x03\x02\x02\x02\u0312\u0313\x05\u0203\xFD\x02\u0313\u0314\x03\x02\x02" +
        "\x02\u0314\u0315\b,\x06\x02\u0315\u0316\b,\x05\x02\u0316b\x03\x02\x02" +
        "\x02\u0317\u0318\x07>\x02\x02\u0318\u0319\x03\x02\x02\x02\u0319\u031A" +
        "\b-\x11\x02\u031Ad\x03\x02\x02\x02\u031B\u031D\v\x02\x02\x02\u031C\u031B" +
        "\x03\x02\x02\x02\u031D\u0320\x03\x02\x02\x02\u031E\u031F\x03\x02\x02\x02" +
        "\u031E\u031C\x03\x02\x02\x02\u031F\u0321\x03\x02\x02\x02\u0320\u031E\x03" +
        "\x02\x02\x02\u0321\u0322\x07>\x02\x02\u0322\u0323\x071\x02\x02\u0323\u0329" +
        "\x03\x02\x02\x02\u0324\u0325\x07u\x02\x02\u0325\u0326\x07v\x02\x02\u0326" +
        "\u0327\x07{\x02\x02\u0327\u0328\x07n\x02\x02\u0328\u032A\x07g\x02\x02" +
        "\u0329\u0324\x03\x02\x02\x02\u0329\u032A\x03\x02\x02\x02\u032A\u032B\x03" +
        "\x02\x02\x02\u032B\u032C\x07@\x02\x02\u032C\u032D\x03\x02\x02\x02\u032D" +
        "\u032E\b.\f\x02\u032Ef\x03\x02\x02\x02\u032F\u0333\x07A\x02\x02\u0330" +
        "\u0331\x07\'\x02\x02\u0331\u0333\x06/\x03\x02\u0332\u032F\x03\x02\x02" +
        "\x02\u0332\u0330\x03\x02\x02\x02\u0333\u0334\x03\x02\x02\x02\u0334\u0341" +
        "\x07@\x02\x02\u0335\u0336\x07>\x02\x02\u0336\u0337\x071\x02\x02\u0337" +
        "\u0338\x07u\x02\x02\u0338\u0339\x07e\x02\x02\u0339\u033A\x07t\x02\x02" +
        "\u033A\u033B\x07k\x02\x02\u033B\u033C\x07r\x02\x02\u033C\u033D\x07v\x02" +
        "\x02\u033D\u033E\x07@\x02\x02\u033E\u033F\x03\x02\x02\x02\u033F\u0341" +
        "\x06/\x04\x02\u0340\u0332\x03\x02\x02\x02\u0340\u0335\x03\x02\x02\x02" +
        "\u0341h\x03\x02\x02\x02\u0342\u0344\t\x02\x02\x02\u0343\u0342\x03\x02" +
        "\x02\x02\u0344\u0345\x03\x02\x02\x02\u0345\u0343\x03\x02\x02\x02\u0345" +
        "\u0346\x03\x02\x02\x02\u0346\u0347\x03\x02\x02\x02\u0347\u0348\b0\x06" +
        "\x02\u0348j\x03\x02\x02\x02\u0349\u034A\x071\x02\x02\u034A\u034B\x07," +
        "\x02\x02\u034B\u034F\x03\x02\x02\x02\u034C\u034E\v\x02\x02\x02\u034D\u034C" +
        "\x03\x02\x02\x02\u034E\u0351\x03\x02\x02\x02\u034F\u0350\x03\x02\x02\x02" +
        "\u034F\u034D\x03\x02\x02\x02\u0350\u0352\x03\x02\x02\x02\u0351\u034F\x03" +
        "\x02\x02\x02\u0352\u0353\x07,\x02\x02\u0353\u0354\x071\x02\x02\u0354\u0355" +
        "\x03\x02\x02\x02\u0355\u0356\b1\x12\x02\u0356l\x03\x02\x02\x02\u0357\u0358" +
        "\x071\x02\x02\u0358\u0359\x071\x02\x02\u0359\u035A\x03\x02\x02\x02\u035A" +
        "\u035B\b2\x06\x02\u035B\u035C\b2\x13\x02\u035Cn\x03\x02\x02\x02\u035D" +
        "\u035E\x07%\x02\x02\u035E\u035F\x03\x02\x02\x02\u035F\u0360\b3\x06\x02" +
        "\u0360\u0361\b3\x13\x02\u0361p\x03\x02\x02\x02\u0362\u0363\x07c\x02\x02" +
        "\u0363\u0364\x07d\x02\x02\u0364\u0365\x07u\x02\x02\u0365\u0366\x07v\x02" +
        "\x02\u0366\u0367\x07t\x02\x02\u0367\u0368\x07c\x02\x02\u0368\u0369\x07" +
        "e\x02\x02\u0369\u036A\x07v\x02\x02\u036Ar\x03\x02\x02\x02\u036B\u036C" +
        "\x07c\x02\x02\u036C\u036D\x07t\x02\x02\u036D\u036E\x07t\x02\x02\u036E" +
        "\u036F\x07c\x02\x02\u036F\u0370\x07{\x02\x02\u0370t\x03\x02\x02\x02\u0371" +
        "\u0372\x07c\x02\x02\u0372\u0373\x07u\x02\x02\u0373v\x03\x02\x02\x02\u0374" +
        "\u0375\x07d\x02\x02\u0375\u0376\x07k\x02\x02\u0376\u0377\x07p\x02\x02" +
        "\u0377\u0378\x07c\x02\x02\u0378\u0379\x07t\x02\x02\u0379\u037A\x07{\x02" +
        "\x02\u037Ax\x03\x02\x02\x02\u037B\u037C\x07d\x02\x02\u037C\u037D\x07q" +
        "\x02\x02\u037D\u037E\x07q\x02\x02\u037E\u037F\x07n\x02\x02\u037F\u0383" +
        "\x03\x02\x02\x02\u0380\u0381\x07g\x02\x02\u0381\u0382\x07c\x02\x02\u0382" +
        "\u0384\x07p\x02\x02\u0383\u0380\x03\x02\x02\x02\u0383\u0384\x03\x02\x02" +
        "\x02\u0384z\x03\x02\x02\x02\u0385\u0386\x07v\x02\x02\u0386\u0387\x07t" +
        "\x02\x02\u0387\u0388\x07w\x02\x02\u0388\u038F\x07g\x02\x02\u0389\u038A" +
        "\x07h\x02\x02\u038A\u038B\x07c\x02\x02\u038B\u038C\x07n\x02\x02\u038C" +
        "\u038D\x07u\x02\x02\u038D\u038F\x07g\x02\x02\u038E\u0385\x03\x02\x02\x02" +
        "\u038E\u0389\x03\x02\x02\x02\u038F|\x03\x02\x02\x02\u0390\u0391\x07d\x02" +
        "\x02\u0391\u0392\x07t\x02\x02\u0392\u0393\x07g\x02\x02\u0393\u0394\x07" +
        "c\x02\x02\u0394\u0395\x07m\x02\x02\u0395~\x03\x02\x02\x02\u0396\u0397" +
        "\x07e\x02\x02\u0397\u0398\x07c\x02\x02\u0398\u0399\x07n\x02\x02\u0399" +
        "\u039A\x07n\x02\x02\u039A\u039B\x07c\x02\x02\u039B\u039C\x07d\x02\x02" +
        "\u039C\u039D\x07n\x02\x02\u039D\u039E\x07g\x02\x02\u039E\x80\x03\x02\x02" +
        "\x02\u039F\u03A0\x07e\x02\x02\u03A0\u03A1\x07c\x02\x02\u03A1\u03A2\x07" +
        "u\x02\x02\u03A2\u03A3\x07g\x02\x02\u03A3\x82\x03\x02\x02\x02\u03A4\u03A5" +
        "\x07e\x02\x02\u03A5\u03A6\x07c\x02\x02\u03A6\u03A7\x07v\x02\x02\u03A7" +
        "\u03A8\x07e\x02\x02\u03A8\u03A9\x07j\x02\x02\u03A9\x84\x03\x02\x02\x02" +
        "\u03AA\u03AB\x07e\x02\x02\u03AB\u03AC\x07n\x02\x02\u03AC\u03AD\x07c\x02" +
        "\x02\u03AD\u03AE\x07u\x02\x02\u03AE\u03AF\x07u\x02\x02\u03AF\x86\x03\x02" +
        "\x02\x02\u03B0\u03B1\x07e\x02\x02\u03B1\u03B2\x07n\x02\x02\u03B2\u03B3" +
        "\x07q\x02\x02\u03B3\u03B4\x07p\x02\x02\u03B4\u03B5\x07g\x02\x02\u03B5" +
        "\x88\x03\x02\x02\x02\u03B6\u03B7\x07e\x02\x02\u03B7\u03B8\x07q\x02\x02" +
        "\u03B8\u03B9\x07p\x02\x02\u03B9\u03BA\x07u\x02\x02\u03BA\u03BB\x07v\x02" +
        "\x02\u03BB\x8A\x03\x02\x02\x02\u03BC\u03BD\x07e\x02\x02\u03BD\u03BE\x07" +
        "q\x02\x02\u03BE\u03BF\x07p\x02\x02\u03BF\u03C0\x07v\x02\x02\u03C0\u03C1" +
        "\x07k\x02\x02\u03C1\u03C2\x07p\x02\x02\u03C2\u03C3\x07w\x02\x02\u03C3" +
        "\u03C4\x07g\x02\x02\u03C4\x8C\x03\x02\x02\x02\u03C5\u03C6\x07f\x02\x02" +
        "\u03C6\u03C7\x07g\x02\x02\u03C7\u03C8\x07e\x02\x02\u03C8\u03C9\x07n\x02" +
        "\x02\u03C9\u03CA\x07c\x02\x02\u03CA\u03CB\x07t\x02\x02\u03CB\u03CC\x07" +
        "g\x02\x02\u03CC\x8E\x03\x02\x02\x02\u03CD\u03CE\x07f\x02\x02\u03CE\u03CF" +
        "\x07g\x02\x02\u03CF\u03D0\x07h\x02\x02\u03D0\u03D1\x07c\x02\x02\u03D1" +
        "\u03D2\x07w\x02\x02\u03D2\u03D3\x07n\x02\x02\u03D3\u03D4\x07v\x02\x02" +
        "\u03D4\x90\x03\x02\x02\x02\u03D5\u03D6\x07f\x02\x02\u03D6\u03D7\x07q\x02" +
        "\x02\u03D7\x92\x03\x02\x02\x02\u03D8\u03D9\x07t\x02\x02\u03D9\u03DA\x07" +
        "g\x02\x02\u03DA\u03DB\x07c\x02\x02\u03DB\u03DC\x07n\x02\x02\u03DC\x94" +
        "\x03\x02\x02\x02\u03DD\u03DE\x07f\x02\x02\u03DE\u03DF\x07q\x02\x02\u03DF" +
        "\u03E0\x07w\x02\x02\u03E0\u03E1\x07d\x02\x02\u03E1\u03E2\x07n\x02\x02" +
        "\u03E2\u03E3\x07g\x02\x02\u03E3\x96\x03\x02\x02\x02\u03E4\u03E5\x07g\x02" +
        "\x02\u03E5\u03E6\x07e\x02\x02\u03E6\u03E7\x07j\x02\x02\u03E7\u03E8\x07" +
        "q\x02\x02\u03E8\x98\x03\x02\x02\x02\u03E9\u03EA\x07g\x02\x02\u03EA\u03EB" +
        "\x07n\x02\x02\u03EB\u03EC\x07u\x02\x02\u03EC\u03ED\x07g\x02\x02\u03ED" +
        "\x9A\x03\x02\x02\x02\u03EE\u03EF\x07g\x02\x02\u03EF\u03F0\x07n\x02\x02" +
        "\u03F0\u03F1\x07u\x02\x02\u03F1\u03F2\x07g\x02\x02\u03F2\u03F3\x07k\x02" +
        "\x02\u03F3\u03F4\x07h\x02\x02\u03F4\x9C\x03\x02\x02\x02\u03F5\u03F6\x07" +
        "g\x02\x02\u03F6\u03F7\x07o\x02\x02\u03F7\u03F8\x07r\x02\x02\u03F8\u03F9" +
        "\x07v\x02\x02\u03F9\u03FA\x07{\x02\x02\u03FA\x9E\x03\x02\x02\x02\u03FB" +
        "\u03FC\x07g\x02\x02\u03FC\u03FD\x07p\x02\x02\u03FD\u03FE\x07f\x02\x02" +
        "\u03FE\u03FF\x07f\x02\x02\u03FF\u0400\x07g\x02\x02\u0400\u0401\x07e\x02" +
        "\x02\u0401\u0402\x07n\x02\x02\u0402\u0403\x07c\x02\x02\u0403\u0404\x07" +
        "t\x02\x02\u0404\u0405\x07g\x02\x02\u0405\xA0\x03\x02\x02\x02\u0406\u0407" +
        "\x07g\x02\x02\u0407\u0408\x07p\x02\x02\u0408\u0409\x07f\x02\x02\u0409" +
        "\u040A\x07h\x02\x02\u040A\u040B\x07q\x02\x02\u040B\u040C\x07t\x02\x02" +
        "\u040C\xA2\x03\x02\x02\x02\u040D\u040E\x07g\x02\x02\u040E\u040F\x07p\x02" +
        "\x02\u040F\u0410\x07f\x02\x02\u0410\u0411\x07h\x02\x02\u0411\u0412\x07" +
        "q\x02\x02\u0412\u0413\x07t\x02\x02\u0413\u0414\x07g\x02\x02\u0414\u0415" +
        "\x07c\x02\x02\u0415\u0416\x07e\x02\x02\u0416\u0417\x07j\x02\x02\u0417" +
        "\xA4\x03\x02\x02\x02\u0418\u0419\x07g\x02\x02\u0419\u041A\x07p\x02\x02" +
        "\u041A\u041B\x07f\x02\x02\u041B\u041C\x07k\x02\x02\u041C\u041D\x07h\x02" +
        "\x02\u041D\xA6\x03\x02\x02\x02\u041E\u041F\x07g\x02\x02\u041F\u0420\x07" +
        "p\x02\x02\u0420\u0421\x07f\x02\x02\u0421\u0422\x07u\x02\x02\u0422\u0423" +
        "\x07y\x02\x02\u0423\u0424\x07k\x02\x02\u0424\u0425\x07v\x02\x02\u0425" +
        "\u0426\x07e\x02\x02\u0426\u0427\x07j\x02\x02\u0427\xA8\x03\x02\x02\x02" +
        "\u0428\u0429\x07g\x02\x02\u0429\u042A\x07p\x02\x02\u042A\u042B\x07f\x02" +
        "\x02\u042B\u042C\x07y\x02\x02\u042C\u042D\x07j\x02\x02\u042D\u042E\x07" +
        "k\x02\x02\u042E\u042F\x07n\x02\x02\u042F\u0430\x07g\x02\x02\u0430\xAA" +
        "\x03\x02\x02\x02\u0431\u0432\x07g\x02\x02\u0432\u0433\x07x\x02\x02\u0433" +
        "\u0434\x07c\x02\x02\u0434\u0435\x07n\x02\x02\u0435\xAC\x03\x02\x02\x02" +
        "\u0436\u0437\x07f\x02\x02\u0437\u0438\x07k\x02\x02\u0438\u0439\x07g\x02" +
        "\x02\u0439\xAE\x03\x02\x02\x02\u043A\u043B\x07g\x02\x02\u043B\u043C\x07" +
        "z\x02\x02\u043C\u043D\x07v\x02\x02\u043D\u043E\x07g\x02\x02\u043E\u043F" +
        "\x07p\x02\x02\u043F\u0440\x07f\x02\x02\u0440\u0441\x07u\x02\x02\u0441" +
        "\xB0\x03\x02\x02\x02\u0442\u0443\x07h\x02\x02\u0443\u0444\x07k\x02\x02" +
        "\u0444\u0445\x07p\x02\x02\u0445\u0446\x07c\x02\x02\u0446\u0447\x07n\x02" +
        "\x02\u0447\xB2\x03\x02\x02\x02\u0448\u0449\x07h\x02\x02\u0449\u044A\x07" +
        "k\x02\x02\u044A\u044B\x07p\x02\x02\u044B\u044C\x07c\x02\x02\u044C\u044D" +
        "\x07n\x02\x02\u044D\u044E\x07n\x02\x02\u044E\u044F\x07{\x02\x02\u044F" +
        "\xB4\x03\x02\x02\x02\u0450\u0451\x07h\x02\x02\u0451\u0452\x07n\x02\x02" +
        "\u0452\u0453\x07q\x02\x02\u0453\u0454\x07c\x02\x02\u0454\u0455\x07v\x02" +
        "\x02\u0455\xB6\x03\x02\x02\x02\u0456\u0457\x07h\x02\x02\u0457\u0458\x07" +
        "q\x02\x02\u0458\u0459\x07t\x02\x02\u0459\xB8\x03\x02\x02\x02\u045A\u045B" +
        "\x07h\x02\x02\u045B\u045C\x07q\x02\x02\u045C\u045D\x07t\x02\x02\u045D" +
        "\u045E\x07g\x02\x02\u045E\u045F\x07c\x02\x02\u045F\u0460\x07e\x02\x02" +
        "\u0460\u0461\x07j\x02\x02\u0461\xBA\x03\x02\x02\x02\u0462\u0463\x07h\x02" +
        "\x02\u0463\u0464\x07w\x02\x02\u0464\u0465\x07p\x02\x02\u0465\u0466\x07" +
        "e\x02\x02\u0466\u0467\x07v\x02\x02\u0467\u0468\x07k\x02\x02\u0468\u0469" +
        "\x07q\x02\x02\u0469\u046A\x07p\x02\x02\u046A\xBC\x03\x02\x02\x02\u046B" +
        "\u046C\x07i\x02\x02\u046C\u046D\x07n\x02\x02\u046D\u046E\x07q\x02\x02" +
        "\u046E\u046F\x07d\x02\x02\u046F\u0470\x07c\x02\x02\u0470\u0471\x07n\x02" +
        "\x02\u0471\xBE\x03\x02\x02\x02\u0472\u0473\x07i\x02\x02\u0473\u0474\x07" +
        "q\x02\x02\u0474\u0475\x07v\x02\x02\u0475\u0476\x07q\x02\x02\u0476\xC0" +
        "\x03\x02\x02\x02\u0477\u0478\x07k\x02\x02\u0478\u0479\x07h\x02\x02\u0479" +
        "\xC2\x03\x02\x02\x02\u047A\u047B\x07k\x02\x02\u047B\u047C\x07o\x02\x02" +
        "\u047C\u047D\x07r\x02\x02\u047D\u047E\x07n\x02\x02\u047E\u047F\x07g\x02" +
        "\x02\u047F\u0480\x07o\x02\x02\u0480\u0481\x07g\x02\x02\u0481\u0482\x07" +
        "p\x02\x02\u0482\u0483\x07v\x02\x02\u0483\u0484\x07u\x02\x02\u0484\xC4" +
        "\x03\x02\x02\x02\u0485\u0486\x07k\x02\x02\u0486\u0487\x07o\x02\x02\u0487" +
        "\u0488\x07r\x02\x02\u0488\u0489\x07q\x02\x02\u0489\u048A\x07t\x02\x02" +
        "\u048A\u048B\x07v\x02\x02\u048B\xC6\x03\x02\x02\x02\u048C\u048D\x07k\x02" +
        "\x02\u048D\u048E\x07p\x02\x02\u048E\u048F\x07e\x02\x02\u048F\u0490\x07" +
        "n\x02\x02\u0490\u0491\x07w\x02\x02\u0491\u0492\x07f\x02\x02\u0492\u0493" +
        "\x07g\x02\x02\u0493\xC8\x03\x02\x02\x02\u0494\u0495\x07k\x02\x02\u0495" +
        "\u0496\x07p\x02\x02\u0496\u0497\x07e\x02\x02\u0497\u0498\x07n\x02\x02" +
        "\u0498\u0499\x07w\x02\x02\u0499\u049A\x07f\x02\x02\u049A\u049B\x07g\x02" +
        "\x02\u049B\u049C\x07a\x02\x02\u049C\u049D\x07q\x02\x02\u049D\u049E\x07" +
        "p\x02\x02\u049E\u049F\x07e\x02\x02\u049F\u04A0\x07g\x02\x02\u04A0\xCA" +
        "\x03\x02\x02\x02\u04A1\u04A2\x07k\x02\x02\u04A2\u04A3\x07p\x02\x02\u04A3" +
        "\u04A4\x07u\x02\x02\u04A4\u04A5\x07v\x02\x02\u04A5\u04A6\x07c\x02\x02" +
        "\u04A6\u04A7\x07p\x02\x02\u04A7\u04A8\x07e\x02\x02\u04A8\u04A9\x07g\x02" +
        "\x02\u04A9\u04AA\x07q\x02\x02\u04AA\u04AB\x07h\x02\x02\u04AB\xCC\x03\x02" +
        "\x02\x02\u04AC\u04AD\x07k\x02\x02\u04AD\u04AE\x07p\x02\x02\u04AE\u04AF" +
        "\x07u\x02\x02\u04AF\u04B0\x07v\x02\x02\u04B0\u04B1\x07g\x02\x02\u04B1" +
        "\u04B2\x07c\x02\x02\u04B2\u04B3\x07f\x02\x02\u04B3\u04B4\x07q\x02\x02" +
        "\u04B4\u04B5\x07h\x02\x02\u04B5\xCE\x03\x02\x02\x02\u04B6\u04B7\x07k\x02" +
        "\x02\u04B7\u04B8\x07p\x02\x02\u04B8\u04B9\x07v\x02\x02\u04B9\u04BA\x07" +
        ":\x02\x02\u04BA\xD0\x03\x02\x02\x02\u04BB\u04BC\x07k\x02\x02\u04BC\u04BD" +
        "\x07p\x02\x02\u04BD\u04BE\x07v\x02\x02\u04BE\u04BF\x073\x02\x02\u04BF" +
        "\u04C0\x078\x02\x02\u04C0\xD2\x03\x02\x02\x02\u04C1\u04C2\x07k\x02\x02" +
        "\u04C2\u04C3\x07p\x02\x02\u04C3\u04C4\x07v\x02\x02\u04C4\u04C5\x078\x02" +
        "\x02\u04C5\u04C6\x076\x02\x02\u04C6\xD4\x03\x02\x02\x02\u04C7\u04C8\x07" +
        "k\x02\x02\u04C8\u04C9\x07p\x02\x02\u04C9\u04CA\x07v\x02\x02\u04CA\u04CF" +
        "\x03\x02\x02\x02\u04CB\u04CC\x07g\x02\x02\u04CC\u04CD\x07i\x02\x02\u04CD" +
        "\u04CE\x07g\x02\x02\u04CE\u04D0\x07t\x02\x02\u04CF\u04CB\x03\x02\x02\x02" +
        "\u04CF\u04D0\x03\x02\x02\x02\u04D0\xD6\x03\x02\x02\x02\u04D1\u04D2\x07" +
        "k\x02\x02\u04D2\u04D3\x07p\x02\x02\u04D3\u04D4\x07v\x02\x02\u04D4\u04D5" +
        "\x07g\x02\x02\u04D5\u04D6\x07t\x02\x02\u04D6\u04D7\x07h\x02\x02\u04D7" +
        "\u04D8\x07c\x02\x02\u04D8\u04D9\x07e\x02\x02\u04D9\u04DA\x07g\x02\x02" +
        "\u04DA\xD8\x03\x02\x02\x02\u04DB\u04DC\x07k\x02\x02\u04DC\u04DD\x07u\x02" +
        "\x02\u04DD\u04DE\x07u\x02\x02\u04DE\u04DF\x07g\x02\x02\u04DF\u04E0\x07" +
        "v\x02\x02\u04E0\xDA\x03\x02\x02\x02\u04E1\u04E2\x07n\x02\x02\u04E2\u04E3" +
        "\x07k\x02\x02\u04E3\u04E4\x07u\x02\x02\u04E4\u04E5\x07v\x02\x02\u04E5" +
        "\xDC\x03\x02\x02\x02\u04E6\u04E7\x07c\x02\x02\u04E7\u04E8\x07p\x02\x02" +
        "\u04E8\u04E9\x07f\x02\x02\u04E9\xDE\x03\x02\x02\x02\u04EA\u04EB\x07q\x02" +
        "\x02\u04EB\u04EC\x07t\x02\x02\u04EC\xE0\x03\x02\x02\x02\u04ED\u04EE\x07" +
        "z\x02\x02\u04EE\u04EF\x07q\x02\x02\u04EF\u04F0\x07t\x02\x02\u04F0\xE2" +
        "\x03\x02\x02\x02\u04F1\u04F2\x07p\x02\x02\u04F2\u04F3\x07c\x02\x02\u04F3" +
        "\u04F4\x07o\x02\x02\u04F4\u04F5\x07g\x02\x02\u04F5\u04F6\x07u\x02\x02" +
        "\u04F6\u04F7\x07r\x02\x02\u04F7\u04F8\x07c\x02\x02\u04F8\u04F9\x07e\x02" +
        "\x02\u04F9\u04FA\x07g\x02\x02\u04FA\xE4\x03\x02\x02\x02\u04FB\u04FC\x07" +
        "p\x02\x02\u04FC\u04FD\x07g\x02\x02\u04FD\u04FE\x07y\x02\x02\u04FE\xE6" +
        "\x03\x02\x02\x02\u04FF\u0500\x07p\x02\x02\u0500\u0501\x07w\x02\x02\u0501" +
        "\u0502\x07n\x02\x02\u0502\u0503\x07n\x02\x02\u0503\xE8\x03\x02\x02\x02" +
        "\u0504\u0505\x07q\x02\x02\u0505\u0506\x07d\x02\x02\u0506\u0507\x07l\x02" +
        "\x02\u0507\u0508\x07g\x02\x02\u0508\u0509\x07e\x02\x02\u0509\u050A\x07" +
        "v\x02\x02\u050A\xEA\x03\x02\x02\x02\u050B\u050C\x07r\x02\x02\u050C\u050D" +
        "\x07c\x02\x02\u050D\u050E\x07t\x02\x02\u050E\u050F\x07g\x02\x02\u050F" +
        "\u0510\x07p\x02\x02\u0510\u0511\x07v\x02\x02\u0511\xEC\x03\x02\x02\x02" +
        "\u0512\u0513\x07r\x02\x02\u0513\u0514\x07c\x02\x02\u0514\u0515\x07t\x02" +
        "\x02\u0515\u0516\x07v\x02\x02\u0516\u0517\x07k\x02\x02\u0517\u0518\x07" +
        "c\x02\x02\u0518\u0519\x07n\x02\x02\u0519\xEE\x03\x02\x02\x02\u051A\u051B" +
        "\x07r\x02\x02\u051B\u051C\x07t\x02\x02\u051C\u051D\x07k\x02\x02\u051D" +
        "\u051E\x07p\x02\x02\u051E\u051F\x07v\x02\x02\u051F\xF0\x03\x02\x02\x02" +
        "\u0520\u0521\x07r\x02\x02\u0521\u0522\x07t\x02\x02\u0522\u0523\x07k\x02" +
        "\x02\u0523\u0524\x07x\x02\x02\u0524\u0525\x07c\x02\x02\u0525\u0526\x07" +
        "v\x02\x02\u0526\u0527\x07g\x02\x02\u0527\xF2\x03\x02\x02\x02\u0528\u0529" +
        "\x07r\x02\x02\u0529\u052A\x07t\x02\x02\u052A\u052B\x07q\x02\x02\u052B" +
        "\u052C\x07v\x02\x02\u052C\u052D\x07g\x02\x02\u052D\u052E\x07e\x02\x02" +
        "\u052E\u052F\x07v\x02\x02\u052F\u0530\x07g\x02\x02\u0530\u0531\x07f\x02" +
        "\x02\u0531\xF4\x03\x02\x02\x02\u0532\u0533\x07r\x02\x02\u0533\u0534\x07" +
        "w\x02\x02\u0534\u0535\x07d\x02\x02\u0535\u0536\x07n\x02\x02\u0536\u0537" +
        "\x07k\x02\x02\u0537\u0538\x07e\x02\x02\u0538\xF6\x03\x02\x02\x02\u0539" +
        "\u053A\x07t\x02\x02\u053A\u053B\x07g\x02\x02\u053B\u053C\x07s\x02\x02" +
        "\u053C\u053D\x07w\x02\x02\u053D\u053E\x07k\x02\x02\u053E\u053F\x07t\x02" +
        "\x02\u053F\u0540\x07g\x02\x02\u0540\xF8\x03\x02\x02\x02\u0541\u0542\x07" +
        "t\x02\x02\u0542\u0543\x07g\x02\x02\u0543\u0544\x07s\x02\x02\u0544\u0545" +
        "\x07w\x02\x02\u0545\u0546\x07k\x02\x02\u0546\u0547\x07t\x02\x02\u0547" +
        "\u0548\x07g\x02\x02\u0548\u0549\x07a\x02\x02\u0549\u054A\x07q\x02\x02" +
        "\u054A\u054B\x07p\x02\x02\u054B\u054C\x07e\x02\x02\u054C\u054D\x07g\x02" +
        "\x02\u054D\xFA\x03\x02\x02\x02\u054E\u054F\x07t\x02\x02\u054F\u0550\x07" +
        "g\x02\x02\u0550\u0551\x07u\x02\x02\u0551\u0552\x07q\x02\x02\u0552\u0553" +
        "\x07w\x02\x02\u0553\u0554\x07t\x02\x02\u0554\u0555\x07e\x02\x02\u0555" +
        "\u0556\x07g\x02\x02\u0556\xFC\x03\x02\x02\x02\u0557\u0558\x07t\x02\x02" +
        "\u0558\u0559\x07g\x02\x02\u0559\u055A\x07v\x02\x02\u055A\u055B\x07w\x02" +
        "\x02\u055B\u055C\x07t\x02\x02\u055C\u055D\x07p\x02\x02\u055D\xFE\x03\x02" +
        "\x02\x02\u055E\u055F\x07u\x02\x02\u055F\u0560\x07v\x02\x02\u0560\u0561" +
        "\x07c\x02\x02\u0561\u0562\x07v\x02\x02\u0562\u0563\x07k\x02\x02\u0563" +
        "\u0564\x07e\x02\x02\u0564\u0100\x03\x02\x02\x02\u0565\u0566\x07u\x02\x02" +
        "\u0566\u0567\x07v\x02\x02\u0567\u0568\x07t\x02\x02\u0568\u0569\x07k\x02" +
        "\x02\u0569\u056A\x07p\x02\x02\u056A\u056B\x07i\x02\x02\u056B\u0102\x03" +
        "\x02\x02\x02\u056C\u056D\x07u\x02\x02\u056D\u056E\x07y\x02\x02\u056E\u056F" +
        "\x07k\x02\x02\u056F\u0570\x07v\x02\x02\u0570\u0571\x07e\x02\x02\u0571" +
        "\u0572\x07j\x02\x02\u0572\u0104\x03\x02\x02\x02\u0573\u0574\x07v\x02\x02" +
        "\u0574\u0575\x07j\x02\x02\u0575\u0576\x07t\x02\x02\u0576\u0577\x07q\x02" +
        "\x02\u0577\u0578\x07y\x02\x02\u0578\u0106\x03\x02\x02\x02\u0579\u057A" +
        "\x07v\x02\x02\u057A\u057B\x07t\x02\x02\u057B\u057C\x07c\x02\x02\u057C" +
        "\u057D\x07k\x02\x02\u057D\u057E\x07v\x02\x02\u057E\u0108\x03\x02\x02\x02" +
        "\u057F\u0580\x07v\x02\x02\u0580\u0581\x07t\x02\x02\u0581\u0582\x07{\x02" +
        "\x02\u0582\u010A\x03\x02\x02\x02\u0583\u0584\x07e\x02\x02\u0584\u0585" +
        "\x07n\x02\x02\u0585\u0586\x07t\x02\x02\u0586\u0587\x07v\x02\x02\u0587" +
        "\u0588\x07{\x02\x02\u0588\u0589\x07r\x02\x02\u0589\u058A\x07g\x02\x02" +
        "\u058A\u058B\x07q\x02\x02\u058B\u058C\x07h\x02\x02\u058C\u010C\x03\x02" +
        "\x02\x02\u058D\u058E\x07w\x02\x02\u058E\u058F\x07k\x02\x02\u058F\u0590" +
        "\x07p\x02\x02\u0590\u0591\x07v\x02\x02\u0591\u0597\x03\x02\x02\x02\u0592" +
        "\u0598\x07:\x02\x02\u0593\u0594\x073\x02\x02\u0594\u0598\x078\x02\x02" +
        "\u0595\u0596\x078\x02\x02\u0596\u0598\x076\x02\x02\u0597\u0592\x03\x02" +
        "\x02\x02\u0597\u0593\x03\x02\x02\x02\u0597\u0595\x03\x02\x02\x02\u0597" +
        "\u0598\x03\x02\x02\x02\u0598\u010E\x03\x02\x02\x02\u0599\u059A\x07w\x02" +
        "\x02\u059A\u059B\x07p\x02\x02\u059B\u059C\x07k\x02\x02\u059C\u059D\x07" +
        "e\x02\x02\u059D\u059E\x07q\x02\x02\u059E\u059F\x07f\x02\x02\u059F\u05A0" +
        "\x07g\x02\x02\u05A0\u0110\x03\x02\x02\x02\u05A1\u05A2\x07w\x02\x02\u05A2" +
        "\u05A3\x07p\x02\x02\u05A3\u05A4\x07u\x02\x02\u05A4\u05A5\x07g\x02\x02" +
        "\u05A5\u05A6\x07v\x02\x02\u05A6\u0112\x03\x02\x02\x02\u05A7\u05A8\x07" +
        "w\x02\x02\u05A8\u05A9\x07u\x02\x02\u05A9\u05AA\x07g\x02\x02\u05AA\u0114" +
        "\x03\x02\x02\x02\u05AB\u05AC\x07x\x02\x02\u05AC\u05AD\x07c\x02\x02\u05AD" +
        "\u05AE\x07t\x02\x02\u05AE\u0116\x03\x02\x02\x02\u05AF\u05B0\x07y\x02\x02" +
        "\u05B0\u05B1\x07j\x02\x02\u05B1\u05B2\x07k\x02\x02\u05B2\u05B3\x07n\x02" +
        "\x02\u05B3\u05B4\x07g\x02\x02\u05B4\u0118\x03\x02\x02\x02\u05B5\u05B6" +
        "\x07{\x02\x02\u05B6\u05B7\x07k\x02\x02\u05B7\u05B8\x07g\x02\x02\u05B8" +
        "\u05B9\x07n\x02\x02\u05B9\u05BA\x07f\x02\x02\u05BA\u011A\x03\x02\x02\x02" +
        "\u05BB\u05BC\x07h\x02\x02\u05BC\u05BD\x07t\x02\x02\u05BD\u05BE\x07q\x02" +
        "\x02\u05BE\u05BF\x07o\x02\x02\u05BF\u011C\x03\x02\x02\x02\u05C0\u05C1" +
        "\x07h\x02\x02\u05C1\u05C2\x07p\x02\x02\u05C2\u011E\x03\x02\x02\x02\u05C3" +
        "\u05C4\x07a\x02\x02\u05C4\u05C5\x07a\x02\x02\u05C5\u05C6\x07i\x02\x02" +
        "\u05C6\u05C7\x07g\x02\x02\u05C7\u05C8\x07v\x02\x02\u05C8\u0120\x03\x02" +
        "\x02\x02\u05C9\u05CA\x07a\x02\x02\u05CA\u05CB\x07a\x02\x02\u05CB\u05CC" +
        "\x07u\x02\x02\u05CC\u05CD\x07g\x02\x02\u05CD\u05CE\x07v\x02\x02\u05CE" +
        "\u0122\x03\x02\x02\x02\u05CF\u05D0\x07a\x02\x02\u05D0\u05D1\x07a\x02\x02" +
        "\u05D1\u05D2\x07e\x02\x02\u05D2\u05D3\x07c\x02\x02\u05D3\u05D4\x07n\x02" +
        "\x02\u05D4\u05D5\x07n\x02\x02\u05D5\u0124\x03\x02\x02\x02\u05D6\u05D7" +
        "\x07a\x02\x02\u05D7\u05D8\x07a\x02\x02\u05D8\u05D9\x07e\x02\x02\u05D9" +
        "\u05DA\x07c\x02\x02\u05DA\u05DB\x07n\x02\x02\u05DB\u05DC\x07n\x02\x02" +
        "\u05DC\u05DD\x07u\x02\x02\u05DD\u05DE\x07v\x02\x02\u05DE\u05DF\x07c\x02" +
        "\x02\u05DF\u05E0\x07v\x02\x02\u05E0\u05E1\x07k\x02\x02\u05E1\u05E2\x07" +
        "e\x02\x02\u05E2\u0126\x03\x02\x02\x02\u05E3\u05E4\x07a\x02\x02\u05E4\u05E5" +
        "\x07a\x02\x02\u05E5\u05E6\x07e\x02\x02\u05E6\u05E7\x07q\x02\x02\u05E7" +
        "\u05E8\x07p\x02\x02\u05E8\u05E9\x07u\x02\x02\u05E9\u05EA\x07v\x02\x02" +
        "\u05EA\u05EB\x07t\x02\x02\u05EB\u05EC\x07w\x02\x02\u05EC\u05ED\x07e\x02" +
        "\x02\u05ED\u05EE\x07v\x02\x02\u05EE\u0128\x03\x02\x02\x02\u05EF\u05F0" +
        "\x07a\x02\x02\u05F0\u05F1\x07a\x02\x02\u05F1\u05F2\x07f\x02\x02\u05F2" +
        "\u05F3\x07g\x02\x02\u05F3\u05F4\x07u\x02\x02\u05F4\u05F5\x07v\x02\x02" +
        "\u05F5\u05F6\x07t\x02\x02\u05F6\u05F7\x07w\x02\x02\u05F7\u05F8\x07e\x02" +
        "\x02\u05F8\u05F9\x07v\x02\x02\u05F9\u012A\x03\x02\x02\x02\u05FA\u05FB" +
        "\x07a\x02\x02\u05FB\u05FC\x07a\x02\x02\u05FC\u05FD\x07y\x02\x02\u05FD" +
        "\u05FE\x07c\x02\x02\u05FE\u05FF\x07m\x02\x02\u05FF\u0600\x07g\x02\x02" +
        "\u0600\u0601\x07w\x02\x02\u0601\u0602\x07r\x02\x02\u0602\u012C\x03\x02" +
        "\x02\x02\u0603\u0604\x07a\x02\x02\u0604\u0605\x07a\x02\x02\u0605\u0606" +
        "\x07u\x02\x02\u0606\u0607\x07n\x02\x02\u0607\u0608\x07g\x02\x02\u0608" +
        "\u0609\x07g\x02\x02\u0609\u060A\x07r\x02\x02\u060A\u012E\x03\x02\x02\x02" +
        "\u060B\u060C\x07a\x02\x02\u060C\u060D\x07a\x02\x02\u060D\u060E\x07c\x02" +
        "\x02\u060E\u060F\x07w\x02\x02\u060F\u0610\x07v\x02\x02\u0610\u0611\x07" +
        "q\x02\x02\u0611\u0612\x07n\x02\x02\u0612\u0613\x07q\x02\x02\u0613\u0614" +
        "\x07c\x02\x02\u0614\u0615\x07f\x02\x02\u0615\u0130\x03\x02\x02\x02\u0616" +
        "\u0617\x07a\x02\x02\u0617\u0618\x07a\x02\x02\u0618\u0619\x07k\x02\x02" +
        "\u0619\u061A\x07u\x02\x02\u061A\u061B\x07u\x02\x02\u061B\u061C\x07g\x02" +
        "\x02\u061C\u061D\x07v\x02\x02\u061D\u0132\x03\x02\x02\x02\u061E\u061F" +
        "\x07a\x02\x02\u061F\u0620\x07a\x02\x02\u0620\u0621\x07w\x02\x02\u0621" +
        "\u0622\x07p\x02\x02\u0622\u0623\x07u\x02\x02\u0623\u0624\x07g\x02\x02" +
        "\u0624\u0625\x07v\x02\x02\u0625\u0134\x03\x02\x02\x02\u0626\u0627\x07" +
        "a\x02\x02\u0627\u0628\x07a\x02\x02\u0628\u0629\x07v\x02\x02\u0629\u062A" +
        "\x07q\x02\x02\u062A\u062B\x07u\x02\x02\u062B\u062C\x07v\x02\x02\u062C" +
        "\u062D\x07t\x02\x02\u062D\u062E\x07k\x02\x02\u062E\u062F\x07p\x02\x02" +
        "\u062F\u0630\x07i\x02\x02\u0630\u0136\x03\x02\x02\x02\u0631\u0632\x07" +
        "a\x02\x02\u0632\u0633\x07a\x02\x02\u0633\u0634\x07k\x02\x02\u0634\u0635" +
        "\x07p\x02\x02\u0635\u0636\x07x\x02\x02\u0636\u0637\x07q\x02\x02\u0637" +
        "\u0638\x07m\x02\x02\u0638\u0639\x07g\x02";
    PhpLexer._serializedATNSegment3 = "\x02\u0639\u0138\x03\x02\x02\x02\u063A\u063B\x07a\x02\x02\u063B\u063C" +
        "\x07a\x02\x02\u063C\u063D\x07u\x02\x02\u063D\u063E\x07g\x02\x02\u063E" +
        "\u063F\x07v\x02\x02\u063F\u0640\x07a\x02\x02\u0640\u0641\x07u\x02\x02" +
        "\u0641\u0642\x07v\x02\x02\u0642\u0643\x07c\x02\x02\u0643\u0644\x07v\x02" +
        "\x02\u0644\u0645\x07g\x02\x02\u0645\u013A\x03\x02\x02\x02\u0646\u0647" +
        "\x07a\x02\x02\u0647\u0648\x07a\x02\x02\u0648\u0649\x07e\x02\x02\u0649" +
        "\u064A\x07n\x02\x02\u064A\u064B\x07q\x02\x02\u064B\u064C\x07p\x02\x02" +
        "\u064C\u064D\x07g\x02\x02\u064D\u013C\x03\x02\x02\x02\u064E\u064F\x07" +
        "a\x02\x02\u064F\u0650\x07a\x02\x02\u0650\u0651\x07f\x02\x02\u0651\u0652" +
        "\x07g\x02\x02\u0652\u0653\x07d\x02\x02\u0653\u0654\x07w\x02\x02\u0654" +
        "\u0655\x07i\x02\x02\u0655\u0656\x07k\x02\x02\u0656\u0657\x07p\x02\x02" +
        "\u0657\u0658\x07h\x02\x02\u0658\u0659\x07q\x02\x02\u0659\u013E\x03\x02" +
        "\x02\x02\u065A\u065B\x07a\x02\x02\u065B\u065C\x07a\x02\x02\u065C\u065D" +
        "\x07p\x02\x02\u065D\u065E\x07c\x02\x02\u065E\u065F\x07o\x02\x02\u065F" +
        "\u0660\x07g\x02\x02\u0660\u0661\x07u\x02\x02\u0661\u0662\x07r\x02\x02" +
        "\u0662\u0663\x07c\x02\x02\u0663\u0664\x07e\x02\x02\u0664\u0665\x07g\x02" +
        "\x02\u0665\u0666\x07a\x02\x02\u0666\u0667\x07a\x02\x02\u0667\u0140\x03" +
        "\x02\x02\x02\u0668\u0669\x07a\x02\x02\u0669\u066A\x07a\x02\x02\u066A\u066B" +
        "\x07e\x02\x02\u066B\u066C\x07n\x02\x02\u066C\u066D\x07c\x02\x02\u066D" +
        "\u066E\x07u\x02\x02\u066E\u066F\x07u\x02\x02\u066F\u0670\x07a\x02\x02" +
        "\u0670\u0671\x07a\x02\x02\u0671\u0142\x03\x02\x02\x02\u0672\u0673\x07" +
        "a\x02\x02\u0673\u0674\x07a\x02\x02\u0674\u0675\x07v\x02\x02\u0675\u0676" +
        "\x07t\x02\x02\u0676\u0677\x07c\x02\x02\u0677\u0678\x07k\x02\x02\u0678" +
        "\u0679\x07v\x02\x02\u0679\u067A\x07a\x02\x02\u067A\u067B\x07a\x02\x02" +
        "\u067B\u0144\x03\x02\x02\x02\u067C\u067D\x07a\x02\x02\u067D\u067E\x07" +
        "a\x02\x02\u067E\u067F\x07h\x02\x02\u067F\u0680\x07w\x02\x02\u0680\u0681" +
        "\x07p\x02\x02\u0681\u0682\x07e\x02\x02\u0682\u0683\x07v\x02\x02\u0683" +
        "\u0684\x07k\x02\x02\u0684\u0685\x07q\x02\x02\u0685\u0686\x07p\x02\x02" +
        "\u0686\u0687\x07a\x02\x02\u0687\u0688\x07a\x02\x02\u0688\u0146\x03\x02" +
        "\x02\x02\u0689\u068A\x07a\x02\x02\u068A\u068B\x07a\x02\x02\u068B\u068C" +
        "\x07o\x02\x02\u068C\u068D\x07g\x02\x02\u068D\u068E\x07v\x02\x02\u068E" +
        "\u068F\x07j\x02\x02\u068F\u0690\x07q\x02\x02\u0690\u0691\x07f\x02\x02" +
        "\u0691\u0692\x07a\x02\x02\u0692\u0693\x07a\x02\x02\u0693\u0148\x03\x02" +
        "\x02\x02\u0694\u0695\x07a\x02\x02\u0695\u0696\x07a\x02\x02\u0696\u0697" +
        "\x07n\x02\x02\u0697\u0698\x07k\x02\x02\u0698\u0699\x07p\x02\x02\u0699" +
        "\u069A\x07g\x02\x02\u069A\u069B\x07a\x02\x02\u069B\u069C\x07a\x02\x02" +
        "\u069C\u014A\x03\x02\x02\x02\u069D\u069E\x07a\x02\x02\u069E\u069F\x07" +
        "a\x02\x02\u069F\u06A0\x07h\x02\x02\u06A0\u06A1\x07k\x02\x02\u06A1\u06A2" +
        "\x07n\x02\x02\u06A2\u06A3\x07g\x02\x02\u06A3\u06A4\x07a\x02\x02\u06A4" +
        "\u06A5\x07a\x02\x02\u06A5\u014C\x03\x02\x02\x02\u06A6\u06A7\x07a\x02\x02" +
        "\u06A7\u06A8\x07a\x02\x02\u06A8\u06A9\x07f\x02\x02\u06A9\u06AA\x07k\x02" +
        "\x02\u06AA\u06AB\x07t\x02\x02\u06AB\u06AC\x07a\x02\x02\u06AC\u06AD\x07" +
        "a\x02\x02\u06AD\u014E\x03\x02\x02\x02\u06AE\u06AF\x07>\x02\x02\u06AF\u06B0" +
        "\x07?\x02\x02\u06B0\u06B1\x07@\x02\x02\u06B1\u0150\x03\x02\x02\x02\u06B2" +
        "\u06B3\x07>\x02\x02\u06B3\u06B4\x07<\x02\x02\u06B4\u0152\x03\x02\x02\x02" +
        "\u06B5\u06B6\x07<\x02\x02\u06B6\u06B7\x07@\x02\x02\u06B7\u0154\x03\x02" +
        "\x02\x02\u06B8\u06B9\x07?\x02\x02\u06B9\u06BA\x07@\x02\x02\u06BA\u0156" +
        "\x03\x02\x02\x02\u06BB\u06BC\x07-\x02\x02\u06BC\u06BD\x07-\x02\x02\u06BD" +
        "\u0158\x03\x02\x02\x02\u06BE\u06BF\x07/\x02\x02\u06BF\u06C0\x07/\x02\x02" +
        "\u06C0\u015A\x03\x02\x02\x02\u06C1\u06C2\x07?\x02\x02\u06C2\u06C3\x07" +
        "?\x02\x02\u06C3\u06C4\x07?\x02\x02\u06C4\u015C\x03\x02\x02\x02\u06C5\u06C6" +
        "\x07#\x02\x02\u06C6\u06C7\x07?\x02\x02\u06C7\u06C8\x07?\x02\x02\u06C8" +
        "\u015E\x03\x02\x02\x02\u06C9\u06CA\x07?\x02\x02\u06CA\u06CB\x07?\x02\x02" +
        "\u06CB\u0160\x03\x02\x02\x02\u06CC\u06CD\x07>\x02\x02\u06CD\u06D1\x07" +
        "@\x02\x02\u06CE\u06CF\x07#\x02\x02\u06CF\u06D1\x07?\x02\x02\u06D0\u06CC" +
        "\x03\x02\x02\x02\u06D0\u06CE\x03\x02\x02\x02\u06D1\u0162\x03\x02\x02\x02" +
        "\u06D2\u06D3\x07>\x02\x02\u06D3\u06D4\x07?\x02\x02\u06D4\u0164\x03\x02" +
        "\x02\x02\u06D5\u06D6\x07@\x02\x02\u06D6\u06D7\x07?\x02\x02\u06D7\u0166" +
        "\x03\x02\x02\x02\u06D8\u06D9\x07-\x02\x02\u06D9\u06DA\x07?\x02\x02\u06DA" +
        "\u0168\x03\x02\x02\x02\u06DB\u06DC\x07/\x02\x02\u06DC\u06DD\x07?\x02\x02" +
        "\u06DD\u016A\x03\x02\x02\x02\u06DE\u06DF\x07,\x02\x02\u06DF\u06E0\x07" +
        "?\x02\x02\u06E0\u016C\x03\x02\x02\x02\u06E1\u06E2\x07,\x02\x02\u06E2\u06E3" +
        "\x07,\x02\x02\u06E3\u016E\x03\x02\x02\x02\u06E4\u06E5\x07,\x02\x02\u06E5" +
        "\u06E6\x07,\x02\x02\u06E6\u06E7\x07?\x02\x02\u06E7\u0170\x03\x02\x02\x02" +
        "\u06E8\u06E9\x071\x02\x02\u06E9\u06EA\x07?\x02\x02\u06EA\u0172\x03\x02" +
        "\x02\x02\u06EB\u06EC\x070\x02\x02\u06EC\u06ED\x07?\x02\x02\u06ED\u0174" +
        "\x03\x02\x02\x02\u06EE\u06EF\x07\'\x02\x02\u06EF\u06F0\x07?\x02\x02\u06F0" +
        "\u0176\x03\x02\x02\x02\u06F1\u06F2\x07>\x02\x02\u06F2\u06F3\x07>\x02\x02" +
        "\u06F3\u06F4\x07?\x02\x02\u06F4\u0178\x03\x02\x02\x02\u06F5\u06F6\x07" +
        "@\x02\x02\u06F6\u06F7\x07@\x02\x02\u06F7\u06F8\x07?\x02\x02\u06F8\u017A" +
        "\x03\x02\x02\x02\u06F9\u06FA\x07(\x02\x02\u06FA\u06FB\x07?\x02\x02\u06FB" +
        "\u017C\x03\x02\x02\x02\u06FC\u06FD\x07~\x02\x02\u06FD\u06FE\x07?\x02\x02" +
        "\u06FE\u017E\x03\x02\x02\x02\u06FF\u0700\x07`\x02\x02\u0700\u0701\x07" +
        "?\x02\x02\u0701\u0180\x03\x02\x02\x02\u0702\u0703\x07~\x02\x02\u0703\u0704" +
        "\x07~\x02\x02\u0704\u0182\x03\x02\x02\x02\u0705\u0706\x07(\x02\x02\u0706" +
        "\u0707\x07(\x02\x02\u0707\u0184\x03\x02\x02\x02\u0708\u0709\x07A\x02\x02" +
        "\u0709\u070A\x07A\x02\x02\u070A\u0186\x03\x02\x02\x02\u070B\u070C\x07" +
        "A\x02\x02\u070C\u070D\x07A\x02\x02\u070D\u070E\x07?\x02\x02\u070E\u0188" +
        "\x03\x02\x02\x02\u070F\u0710\x07>\x02\x02\u0710\u0711\x07>\x02\x02\u0711" +
        "\u018A\x03\x02\x02\x02\u0712\u0713\x07@\x02\x02\u0713\u0714\x07@\x02\x02" +
        "\u0714\u018C\x03\x02\x02\x02\u0715\u0716\x07<\x02\x02\u0716\u0717\x07" +
        "<\x02\x02\u0717\u018E\x03\x02\x02\x02\u0718\u0719\x07/\x02\x02\u0719\u071A" +
        "\x07@\x02\x02\u071A\u0190\x03\x02\x02\x02\u071B\u071C\x07^\x02\x02\u071C" +
        "\u0192\x03\x02\x02\x02\u071D\u071E\x070\x02\x02\u071E\u071F\x070\x02\x02" +
        "\u071F\u0720\x070\x02\x02\u0720\u0194\x03\x02\x02\x02\u0721\u0722\x07" +
        ">\x02\x02\u0722\u0196\x03\x02\x02\x02\u0723\u0724\x07@\x02\x02\u0724\u0198" +
        "\x03\x02\x02\x02\u0725\u0726\x07(\x02\x02\u0726\u019A\x03\x02\x02\x02" +
        "\u0727\u0728\x07~\x02\x02\u0728\u019C\x03\x02\x02\x02\u0729\u072A\x07" +
        "#\x02\x02\u072A\u019E\x03\x02\x02\x02\u072B\u072C\x07`\x02\x02\u072C\u01A0" +
        "\x03\x02\x02\x02\u072D\u072E\x07-\x02\x02\u072E\u01A2\x03\x02\x02\x02" +
        "\u072F\u0730\x07/\x02\x02\u0730\u01A4\x03\x02\x02\x02\u0731\u0732\x07" +
        ",\x02\x02\u0732\u01A6\x03\x02\x02\x02\u0733\u0734\x07\'\x02\x02\u0734" +
        "\u01A8\x03\x02\x02\x02\u0735\u0736\x071\x02\x02\u0736\u01AA\x03\x02\x02" +
        "\x02\u0737\u0738\x07\x80\x02\x02\u0738\u01AC\x03\x02\x02\x02\u0739\u073A" +
        "\x07B\x02\x02\u073A\u01AE\x03\x02\x02\x02\u073B\u073C\x07&\x02\x02\u073C" +
        "\u01B0\x03\x02\x02\x02\u073D\u073E\x070\x02\x02\u073E\u01B2\x03\x02\x02" +
        "\x02\u073F\u0740\x07A\x02\x02\u0740\u01B4\x03\x02\x02\x02\u0741\u0742" +
        "\x07*\x02\x02\u0742\u01B6\x03\x02\x02\x02\u0743\u0744\x07+\x02\x02\u0744" +
        "\u01B8\x03\x02\x02\x02\u0745\u0746\x07]\x02\x02\u0746\u01BA\x03\x02\x02" +
        "\x02\u0747\u0748\x07_\x02\x02\u0748\u01BC\x03\x02\x02\x02\u0749\u074A" +
        "\x07}\x02\x02\u074A\u01BE\x03\x02\x02\x02\u074B\u074C\x07\x7F\x02\x02" +
        "\u074C\u074D\b\xDB\x14\x02\u074D\u01C0\x03\x02\x02\x02\u074E\u074F\x07" +
        ".\x02\x02\u074F\u01C2\x03\x02\x02\x02\u0750\u0751\x07<\x02\x02\u0751\u01C4" +
        "\x03\x02\x02\x02\u0752\u0753\x07=\x02\x02\u0753\u01C6\x03\x02\x02\x02" +
        "\u0754\u0755\x07?\x02\x02\u0755\u01C8\x03\x02\x02\x02\u0756\u0757\x07" +
        ")\x02\x02\u0757\u01CA\x03\x02\x02\x02\u0758\u0759\x07b\x02\x02\u0759\u01CC" +
        "\x03\x02\x02\x02\u075A\u075B\x07&\x02\x02\u075B\u075F\t\t\x02\x02\u075C" +
        "\u075E\t\n\x02\x02\u075D\u075C\x03\x02\x02\x02\u075E\u0761\x03\x02\x02" +
        "\x02\u075F\u075D\x03\x02\x02\x02\u075F\u0760\x03\x02\x02\x02\u0760\u01CE" +
        "\x03\x02\x02\x02\u0761\u075F\x03\x02\x02\x02\u0762\u0766\t\t\x02\x02\u0763" +
        "\u0765\t\n\x02\x02\u0764\u0763\x03\x02\x02\x02\u0765\u0768\x03\x02\x02" +
        "\x02\u0766\u0764\x03\x02\x02\x02\u0766\u0767\x03\x02\x02\x02\u0767\u01D0" +
        "\x03\x02\x02\x02\u0768\u0766\x03\x02\x02\x02\u0769\u076B\x072\x02\x02" +
        "\u076A\u076C\t\v\x02\x02\u076B\u076A\x03\x02\x02\x02\u076C\u076D\x03\x02" +
        "\x02\x02\u076D\u076B\x03\x02\x02\x02\u076D\u076E\x03\x02\x02\x02\u076E" +
        "\u01D2\x03\x02\x02\x02\u076F\u0771\x05\u020B\u0101\x02\u0770\u076F\x03" +
        "\x02\x02\x02\u0771\u0772\x03\x02\x02\x02\u0772\u0770\x03\x02\x02\x02\u0772" +
        "\u0773\x03\x02\x02\x02\u0773\u01D4\x03\x02\x02\x02\u0774\u0776\x05\u020B" +
        "\u0101\x02\u0775\u0774\x03\x02\x02\x02\u0776\u0777\x03\x02\x02\x02\u0777" +
        "\u0775\x03\x02\x02\x02\u0777\u0778\x03\x02\x02\x02\u0778\u0779\x03\x02" +
        "\x02\x02\u0779\u077D\x070\x02\x02\u077A\u077C\x05\u020B\u0101\x02\u077B" +
        "\u077A\x03\x02\x02\x02\u077C\u077F\x03\x02\x02\x02\u077D\u077B\x03\x02" +
        "\x02\x02\u077D\u077E\x03\x02\x02\x02\u077E\u0787\x03\x02\x02\x02\u077F" +
        "\u077D\x03\x02\x02\x02\u0780\u0782\x070\x02\x02\u0781\u0783\x05\u020B" +
        "\u0101\x02\u0782\u0781\x03\x02\x02\x02\u0783\u0784\x03\x02\x02\x02\u0784" +
        "\u0782\x03\x02\x02\x02\u0784\u0785\x03\x02\x02\x02\u0785\u0787\x03\x02" +
        "\x02\x02\u0786\u0775\x03\x02\x02\x02\u0786\u0780\x03\x02\x02\x02\u0787" +
        "\u0789\x03\x02\x02\x02\u0788\u078A\x05\u0209\u0100\x02\u0789\u0788\x03" +
        "\x02\x02\x02\u0789\u078A\x03\x02\x02\x02\u078A\u0793\x03\x02\x02\x02\u078B" +
        "\u078D\x05\u020B\u0101\x02\u078C\u078B\x03\x02\x02\x02\u078D\u078E\x03" +
        "\x02\x02\x02\u078E\u078C\x03\x02\x02\x02\u078E\u078F\x03\x02\x02\x02\u078F" +
        "\u0790\x03\x02\x02\x02\u0790\u0791\x05\u0209\u0100\x02\u0791\u0793\x03" +
        "\x02\x02\x02\u0792\u0786\x03\x02\x02\x02\u0792\u078C\x03\x02\x02\x02\u0793" +
        "\u01D6\x03\x02\x02\x02\u0794\u0795\x072\x02\x02\u0795\u0796\x07z\x02\x02" +
        "\u0796\u0798\x03\x02\x02\x02\u0797\u0799\x05\u020D\u0102\x02\u0798\u0797" +
        "\x03\x02\x02\x02\u0799\u079A\x03\x02\x02\x02\u079A\u0798\x03\x02\x02\x02" +
        "\u079A\u079B\x03\x02\x02\x02\u079B\u01D8\x03\x02\x02\x02\u079C\u079D\x07" +
        "2\x02\x02\u079D\u079E\x07d\x02\x02\u079E\u07A0\x03\x02\x02\x02\u079F\u07A1" +
        "\t\f\x02\x02\u07A0\u079F\x03\x02\x02\x02\u07A1\u07A2\x03\x02\x02\x02\u07A2" +
        "\u07A0\x03\x02\x02\x02\u07A2\u07A3\x03\x02\x02\x02\u07A3\u01DA\x03\x02" +
        "\x02\x02\u07A4\u07A8\x07b\x02\x02\u07A5\u07A7\n\r\x02\x02\u07A6\u07A5" +
        "\x03\x02\x02\x02\u07A7\u07AA\x03\x02\x02\x02\u07A8\u07A6\x03\x02\x02\x02" +
        "\u07A8\u07A9\x03\x02\x02\x02\u07A9\u07AB\x03\x02\x02\x02\u07AA\u07A8\x03" +
        "\x02\x02\x02\u07AB\u07AC\x07b\x02\x02\u07AC\u01DC\x03\x02\x02\x02\u07AD" +
        "\u07B3\x07)\x02\x02\u07AE\u07B2\n\x0E\x02\x02\u07AF\u07B0\x07^\x02\x02" +
        "\u07B0\u07B2\v\x02\x02\x02\u07B1\u07AE\x03\x02\x02\x02\u07B1\u07AF\x03" +
        "\x02\x02\x02\u07B2\u07B5\x03\x02\x02\x02\u07B3\u07B1\x03\x02\x02\x02\u07B3" +
        "\u07B4\x03\x02\x02\x02\u07B4\u07B6\x03\x02\x02\x02\u07B5\u07B3\x03\x02" +
        "\x02\x02\u07B6\u07B7\x07)\x02\x02\u07B7\u01DE\x03\x02\x02\x02\u07B8\u07B9" +
        "\x07$\x02\x02\u07B9\u07BA\x03\x02\x02\x02\u07BA\u07BB\b\xEB\x15\x02\u07BB" +
        "\u01E0\x03\x02\x02\x02\u07BC\u07BD\x07>\x02\x02\u07BD\u07BE\x07>\x02\x02" +
        "\u07BE\u07BF\x07>\x02\x02\u07BF\u07C3\x03\x02\x02\x02\u07C0\u07C2\t\x0F" +
        "\x02\x02\u07C1\u07C0\x03\x02\x02\x02\u07C2\u07C5\x03\x02\x02\x02\u07C3" +
        "\u07C1\x03\x02\x02\x02\u07C3\u07C4\x03\x02\x02\x02\u07C4\u07C6\x03\x02" +
        "\x02\x02\u07C5\u07C3\x03\x02\x02\x02\u07C6\u07C7\x07)\x02\x02\u07C7\u07CB" +
        "\t\t\x02\x02\u07C8\u07CA\t\n\x02\x02\u07C9\u07C8\x03\x02\x02\x02\u07CA" +
        "\u07CD\x03\x02\x02\x02\u07CB\u07C9\x03\x02\x02\x02\u07CB\u07CC\x03\x02" +
        "\x02\x02\u07CC\u07CE\x03\x02\x02\x02\u07CD\u07CB\x03\x02\x02\x02\u07CE" +
        "\u07CF\x07)\x02\x02\u07CF\u07D0\x06\xEC\x05\x02\u07D0\u07D1\x03\x02\x02" +
        "\x02\u07D1\u07D2\b\xEC\x16\x02\u07D2\u01E2\x03\x02\x02\x02\u07D3\u07D4" +
        "\x07>\x02\x02\u07D4\u07D5\x07>\x02\x02\u07D5\u07D6\x07>\x02\x02\u07D6" +
        "\u07DA\x03\x02\x02\x02\u07D7\u07D9\t\x0F\x02\x02\u07D8\u07D7\x03\x02\x02" +
        "\x02\u07D9\u07DC\x03\x02\x02\x02\u07DA\u07D8\x03\x02\x02\x02\u07DA\u07DB" +
        "\x03\x02\x02\x02\u07DB\u07DD\x03\x02\x02\x02\u07DC\u07DA\x03\x02\x02\x02" +
        "\u07DD\u07E1\t\t\x02\x02\u07DE\u07E0\t\n\x02\x02\u07DF\u07DE\x03\x02\x02" +
        "\x02\u07E0\u07E3\x03\x02\x02\x02\u07E1\u07DF\x03\x02\x02\x02\u07E1\u07E2" +
        "\x03\x02\x02\x02\u07E2\u07E4\x03\x02\x02\x02\u07E3\u07E1\x03\x02\x02\x02" +
        "\u07E4\u07E5\x06\xED\x06\x02\u07E5\u07E6\x03\x02\x02\x02\u07E6\u07E7\b" +
        "\xED\x16\x02\u07E7\u01E4\x03\x02\x02\x02\u07E8\u07E9\v\x02\x02\x02\u07E9" +
        "\u07EA\x03\x02\x02\x02\u07EA\u07EB\b\xEE\v\x02\u07EB\u01E6\x03\x02\x02" +
        "\x02\u07EC\u07ED\x07&\x02\x02\u07ED\u07F1\t\t\x02\x02\u07EE\u07F0\t\n" +
        "\x02\x02\u07EF\u07EE\x03\x02\x02\x02\u07F0\u07F3\x03\x02\x02\x02\u07F1" +
        "\u07EF\x03\x02\x02\x02\u07F1\u07F2\x03\x02\x02\x02\u07F2\u07F4\x03\x02" +
        "\x02\x02\u07F3\u07F1\x03\x02\x02\x02\u07F4\u07F5\b\xEF\x17\x02\u07F5\u01E8" +
        "\x03\x02\x02\x02\u07F6\u07F7\x07&\x02\x02\u07F7\u07F8\x03\x02\x02\x02" +
        "\u07F8\u07F9\b\xF0\x18\x02\u07F9\u01EA\x03\x02\x02\x02\u07FA\u07FB\x07" +
        "}\x02\x02\u07FB\u07FC\x06\xF1\x07\x02\u07FC\u07FD\b\xF1\x19\x02\u07FD" +
        "\u07FE\x03\x02\x02\x02\u07FE\u07FF\b\xF1\x06\x02\u07FF\u0800\b\xF1\x05" +
        "\x02\u0800\u01EC\x03\x02\x02\x02\u0801\u0802\x07}\x02\x02\u0802\u0803" +
        "\x03\x02\x02\x02\u0803\u0804\b\xF2\x18\x02\u0804\u01EE\x03\x02\x02\x02" +
        "\u0805\u0806\x07^\x02\x02\u0806\u0807\v\x02\x02\x02\u0807\u0808\x03\x02" +
        "\x02\x02\u0808\u0809\b\xF3\x18\x02\u0809\u01F0\x03\x02\x02\x02\u080A\u080B" +
        "\x07$\x02\x02\u080B\u080C\x03\x02\x02\x02\u080C\u080D\b\xF4\x1A\x02\u080D" +
        "\u080E\b\xF4\f\x02\u080E\u01F2\x03\x02\x02\x02\u080F\u0810\x07^\x02\x02" +
        "\u0810\u0811\x07w\x02\x02\u0811\u0812\x07}\x02\x02\u0812\u0813\x03\x02" +
        "\x02\x02\u0813\u0815\t\x10\x02\x02\u0814\u0816\t\x10\x02\x02\u0815\u0814" +
        "\x03\x02\x02\x02\u0816\u0817\x03\x02\x02\x02\u0817\u0815\x03\x02\x02\x02" +
        "\u0817\u0818\x03\x02\x02\x02\u0818\u0819\x03\x02\x02\x02\u0819\u081A\x07" +
        "\x7F\x02\x02\u081A\u01F4\x03\x02\x02\x02\u081B\u081D\n\x11\x02\x02\u081C" +
        "\u081B\x03\x02\x02\x02\u081D\u081E\x03\x02\x02\x02\u081E\u081C\x03\x02" +
        "\x02\x02\u081E\u081F\x03\x02\x02\x02\u081F\u01F6\x03\x02\x02\x02\u0820" +
        "\u0822\n\x12\x02\x02\u0821\u0820\x03\x02\x02\x02\u0822\u0823\x03\x02\x02" +
        "\x02\u0823\u0821\x03\x02\x02\x02\u0823\u0824\x03\x02\x02\x02\u0824\u0825" +
        "\x03\x02\x02\x02\u0825\u0826\b\xF7\x12\x02\u0826\u01F8\x03\x02\x02\x02" +
        "\u0827\u0828\x07A\x02\x02\u0828\u0829\x07@\x02\x02\u0829\u01FA\x03\x02" +
        "\x02\x02\u082A\u082B\x07A\x02\x02\u082B\u082C\x03\x02\x02\x02\u082C\u082D" +
        "\b\xF9\x1B\x02\u082D\u082E\b\xF9\x12\x02\u082E\u01FC\x03\x02\x02\x02\u082F" +
        "\u0830\t\x04\x02\x02\u0830\u0831\x03\x02\x02\x02\u0831\u0832\b\xFA\x06" +
        "\x02\u0832\u0833\b\xFA\f\x02\u0833\u01FE\x03\x02\x02\x02\u0834\u0836\n" +
        "\x04\x02\x02\u0835\u0834\x03\x02\x02\x02\u0836\u0839\x03\x02\x02\x02\u0837" +
        "\u0838\x03\x02\x02\x02\u0837\u0835\x03\x02\x02\x02\u0838\u083F\x03\x02" +
        "\x02\x02\u0839\u0837\x03\x02\x02\x02\u083A\u083C\x07\x0F\x02\x02\u083B" +
        "\u083A\x03\x02\x02\x02\u083B\u083C\x03\x02\x02\x02\u083C\u083D\x03\x02" +
        "\x02\x02\u083D\u0840\x07\f\x02\x02\u083E\u0840\x07\x0F\x02\x02\u083F\u083B" +
        "\x03\x02\x02\x02\u083F\u083E\x03\x02\x02\x02\u0840\u0200\x03\x02\x02\x02" +
        "\u0841\u0847\x07>\x02\x02\u0842\u0843\x07A\x02\x02\u0843\u0848\x07?\x02" +
        "\x02\u0844\u0845\x06\xFC\b\x02\u0845\u0846\x07\'\x02\x02\u0846\u0848\x07" +
        "?\x02\x02\u0847\u0842\x03\x02\x02\x02\u0847\u0844\x03\x02\x02\x02\u0848" +
        "\u0202\x03\x02\x02\x02\u0849\u0852\x07>\x02\x02\u084A\u084E\x07A\x02\x02" +
        "\u084B\u084C\x07r\x02\x02\u084C\u084D\x07j\x02\x02\u084D\u084F\x07r\x02" +
        "\x02\u084E\u084B\x03\x02\x02\x02\u084E\u084F\x03\x02\x02\x02\u084F\u0853" +
        "\x03\x02\x02\x02\u0850\u0851\x06\xFD\t\x02\u0851\u0853\x07\'\x02\x02\u0852" +
        "\u084A\x03\x02\x02\x02\u0852\u0850\x03\x02\x02\x02\u0853\u0204\x03\x02" +
        "\x02\x02\u0854\u0859\x05\u0207\xFF\x02\u0855\u0859\t\x13\x02\x02\u0856" +
        "\u0859\x05\u020B\u0101\x02\u0857\u0859\t\x14\x02\x02\u0858\u0854\x03\x02" +
        "\x02\x02\u0858\u0855\x03\x02\x02\x02\u0858\u0856\x03\x02\x02\x02\u0858" +
        "\u0857\x03\x02\x02\x02\u0859\u0206\x03\x02\x02\x02\u085A\u085C\t\x15\x02" +
        "\x02\u085B\u085A\x03\x02\x02\x02\u085C\u0208\x03\x02\x02\x02\u085D\u085F" +
        "\x07g\x02\x02\u085E\u0860\t\x16\x02\x02\u085F\u085E\x03\x02\x02\x02\u085F" +
        "\u0860\x03\x02\x02\x02\u0860\u0862\x03\x02\x02\x02\u0861\u0863\x05\u020B" +
        "\u0101\x02\u0862\u0861\x03\x02\x02\x02\u0863\u0864\x03\x02\x02\x02\u0864" +
        "\u0862\x03\x02\x02\x02\u0864\u0865\x03\x02\x02\x02\u0865\u020A\x03\x02" +
        "\x02\x02\u0866\u0867\t\x17\x02\x02\u0867\u020C\x03\x02\x02\x02\u0868\u0869" +
        "\t\x18\x02\x02\u0869\u020E\x03\x02\x02\x02M\x02\x03\x04\x05\x06\x07\b" +
        "\t\n\v\f\u0212\u0219\u024C\u025A\u0269\u0270\u027C\u029E\u02A5\u02AF\u02B4" +
        "\u02B9\u02C1\u02D4\u02DB\u02ED\u02F4\u02FD\u0307\u031E\u0329\u0332\u0340" +
        "\u0345\u034F\u0383\u038E\u04CF\u0597\u06D0\u075F\u0766\u076D\u0772\u0777" +
        "\u077D\u0784\u0786\u0789\u078E\u0792\u079A\u07A2\u07A8\u07B1\u07B3\u07C3" +
        "\u07CB\u07DA\u07E1\u07F1\u0817\u081E\u0823\u0837\u083B\u083F\u0847\u084E" +
        "\u0852\u0858\u085B\u085F\u0864\x1C\x02\x03\x02\x07\x03\x02\t@\x02\x07" +
        "\t\x02\x02\x06\x02\x03\x07\x02\x07\x04\x02\x03\b\x03\x05\x02\x02\x02\x05" +
        "\x02\x06\x02\x02\t\x0E\x02\x03\x14\x04\x07\x05\x02\x07\x06\x02\t$\x02" +
        "\x02\x04\x02\x07\v\x02\x03\xDB\x05\x07\n\x02\x07\f\x02\t\xDB\x02\t\xEA" +
        "\x02\x03\xF1\x06\t\xE4\x02\t\xEB\x02";
    PhpLexer._serializedATN = Utils.join([
        PhpLexer._serializedATNSegment0,
        PhpLexer._serializedATNSegment1,
        PhpLexer._serializedATNSegment2,
        PhpLexer._serializedATNSegment3,
    ], "");
    return PhpLexer;
}(PhpBaseLexer));
exports.PhpLexer = PhpLexer;
//# sourceMappingURL=PhpLexer.js.map