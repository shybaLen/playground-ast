"use strict";
// Generated from src/php/PhpParser.g4 by ANTLR 4.7.3-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ATN_1 = require("antlr4ts/atn/ATN");
var ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
var FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
var NoViableAltException_1 = require("antlr4ts/NoViableAltException");
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var PhpParser = /** @class */ (function (_super) {
    tslib_1.__extends(PhpParser, _super);
    function PhpParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(PhpParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(PhpParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return PhpParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhpParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "PhpParser.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhpParser.prototype, "ruleNames", {
        // @Override
        get: function () { return PhpParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhpParser.prototype, "serializedATN", {
        // @Override
        get: function () { return PhpParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    PhpParser.prototype.htmlDocument = function () {
        var _localctx = new HtmlDocumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, PhpParser.RULE_htmlDocument);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 271;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PhpParser.Shebang) {
                    {
                        this.state = 270;
                        this.match(PhpParser.Shebang);
                    }
                }
                this.state = 276;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PhpParser.HtmlText) | (1 << PhpParser.XmlStart) | (1 << PhpParser.HtmlScriptOpen) | (1 << PhpParser.HtmlStyleOpen) | (1 << PhpParser.HtmlDtd) | (1 << PhpParser.HtmlOpen) | (1 << PhpParser.HtmlClose) | (1 << PhpParser.HtmlSlashClose) | (1 << PhpParser.HtmlSlash) | (1 << PhpParser.HtmlEquals) | (1 << PhpParser.HtmlStartQuoteString) | (1 << PhpParser.HtmlStartDoubleQuoteString) | (1 << PhpParser.HtmlHex) | (1 << PhpParser.HtmlDecimal) | (1 << PhpParser.HtmlName) | (1 << PhpParser.HtmlEndQuoteString) | (1 << PhpParser.HtmlQuoteString) | (1 << PhpParser.HtmlEndDoubleQuoteString))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PhpParser.HtmlDoubleQuoteString - 32)) | (1 << (PhpParser.ScriptText - 32)) | (1 << (PhpParser.ScriptClose - 32)) | (1 << (PhpParser.StyleBody - 32)) | (1 << (PhpParser.Abstract - 32)) | (1 << (PhpParser.Array - 32)) | (1 << (PhpParser.As - 32)) | (1 << (PhpParser.BinaryCast - 32)) | (1 << (PhpParser.BoolType - 32)) | (1 << (PhpParser.BooleanConstant - 32)) | (1 << (PhpParser.Break - 32)) | (1 << (PhpParser.Callable - 32)) | (1 << (PhpParser.Case - 32)) | (1 << (PhpParser.Catch - 32)) | (1 << (PhpParser.Class - 32)) | (1 << (PhpParser.Clone - 32)) | (1 << (PhpParser.Const - 32)) | (1 << (PhpParser.Continue - 32)) | (1 << (PhpParser.Declare - 32)) | (1 << (PhpParser.Default - 32)) | (1 << (PhpParser.Do - 32)) | (1 << (PhpParser.DoubleCast - 32)) | (1 << (PhpParser.DoubleType - 32)) | (1 << (PhpParser.Echo - 32)) | (1 << (PhpParser.Else - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (PhpParser.ElseIf - 64)) | (1 << (PhpParser.Empty - 64)) | (1 << (PhpParser.EndDeclare - 64)) | (1 << (PhpParser.EndFor - 64)) | (1 << (PhpParser.EndForeach - 64)) | (1 << (PhpParser.EndIf - 64)) | (1 << (PhpParser.EndSwitch - 64)) | (1 << (PhpParser.EndWhile - 64)) | (1 << (PhpParser.Eval - 64)) | (1 << (PhpParser.Exit - 64)) | (1 << (PhpParser.Extends - 64)) | (1 << (PhpParser.Final - 64)) | (1 << (PhpParser.Finally - 64)) | (1 << (PhpParser.FloatCast - 64)) | (1 << (PhpParser.For - 64)) | (1 << (PhpParser.Foreach - 64)) | (1 << (PhpParser.Function - 64)) | (1 << (PhpParser.Global - 64)) | (1 << (PhpParser.Goto - 64)) | (1 << (PhpParser.If - 64)) | (1 << (PhpParser.Implements - 64)) | (1 << (PhpParser.Import - 64)) | (1 << (PhpParser.Include - 64)) | (1 << (PhpParser.IncludeOnce - 64)) | (1 << (PhpParser.InstanceOf - 64)) | (1 << (PhpParser.InsteadOf - 64)) | (1 << (PhpParser.Int8Cast - 64)) | (1 << (PhpParser.Int16Cast - 64)) | (1 << (PhpParser.Int64Type - 64)) | (1 << (PhpParser.IntType - 64)) | (1 << (PhpParser.Interface - 64)) | (1 << (PhpParser.IsSet - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (PhpParser.List - 96)) | (1 << (PhpParser.LogicalAnd - 96)) | (1 << (PhpParser.LogicalOr - 96)) | (1 << (PhpParser.LogicalXor - 96)) | (1 << (PhpParser.Namespace - 96)) | (1 << (PhpParser.New - 96)) | (1 << (PhpParser.Null - 96)) | (1 << (PhpParser.ObjectType - 96)) | (1 << (PhpParser.Parent_ - 96)) | (1 << (PhpParser.Partial - 96)) | (1 << (PhpParser.Print - 96)) | (1 << (PhpParser.Private - 96)) | (1 << (PhpParser.Protected - 96)) | (1 << (PhpParser.Public - 96)) | (1 << (PhpParser.Require - 96)) | (1 << (PhpParser.RequireOnce - 96)) | (1 << (PhpParser.Resource - 96)) | (1 << (PhpParser.Return - 96)) | (1 << (PhpParser.Static - 96)) | (1 << (PhpParser.StringType - 96)) | (1 << (PhpParser.Switch - 96)) | (1 << (PhpParser.Throw - 96)) | (1 << (PhpParser.Trait - 96)) | (1 << (PhpParser.Try - 96)) | (1 << (PhpParser.Typeof - 96)) | (1 << (PhpParser.UintCast - 96)) | (1 << (PhpParser.UnicodeCast - 96)) | (1 << (PhpParser.Unset - 96)) | (1 << (PhpParser.Use - 96)) | (1 << (PhpParser.Var - 96)) | (1 << (PhpParser.While - 96)) | (1 << (PhpParser.Yield - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (PhpParser.From - 128)) | (1 << (PhpParser.LambdaFn - 128)) | (1 << (PhpParser.Get - 128)) | (1 << (PhpParser.Set - 128)) | (1 << (PhpParser.Call - 128)) | (1 << (PhpParser.CallStatic - 128)) | (1 << (PhpParser.Constructor - 128)) | (1 << (PhpParser.Destruct - 128)) | (1 << (PhpParser.Wakeup - 128)) | (1 << (PhpParser.Sleep - 128)) | (1 << (PhpParser.Autoload - 128)) | (1 << (PhpParser.IsSet__ - 128)) | (1 << (PhpParser.Unset__ - 128)) | (1 << (PhpParser.ToString__ - 128)) | (1 << (PhpParser.Invoke - 128)) | (1 << (PhpParser.SetState - 128)) | (1 << (PhpParser.Clone__ - 128)) | (1 << (PhpParser.DebugInfo - 128)) | (1 << (PhpParser.Namespace__ - 128)) | (1 << (PhpParser.Class__ - 128)) | (1 << (PhpParser.Traic__ - 128)) | (1 << (PhpParser.Function__ - 128)) | (1 << (PhpParser.Method__ - 128)) | (1 << (PhpParser.Line__ - 128)) | (1 << (PhpParser.File__ - 128)) | (1 << (PhpParser.Dir__ - 128)) | (1 << (PhpParser.Inc - 128)) | (1 << (PhpParser.Dec - 128)))) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & ((1 << (PhpParser.NamespaceSeparator - 187)) | (1 << (PhpParser.Ellipsis - 187)) | (1 << (PhpParser.Ampersand - 187)) | (1 << (PhpParser.Bang - 187)) | (1 << (PhpParser.Plus - 187)) | (1 << (PhpParser.Minus - 187)) | (1 << (PhpParser.Tilde - 187)) | (1 << (PhpParser.SuppressWarnings - 187)) | (1 << (PhpParser.Dollar - 187)) | (1 << (PhpParser.QuestionMark - 187)) | (1 << (PhpParser.OpenRoundBracket - 187)) | (1 << (PhpParser.OpenSquareBracket - 187)) | (1 << (PhpParser.OpenCurlyBracket - 187)) | (1 << (PhpParser.SemiColon - 187)) | (1 << (PhpParser.VarName - 187)) | (1 << (PhpParser.Label - 187)))) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & ((1 << (PhpParser.Octal - 219)) | (1 << (PhpParser.Decimal - 219)) | (1 << (PhpParser.Real - 219)) | (1 << (PhpParser.Hex - 219)) | (1 << (PhpParser.Binary - 219)) | (1 << (PhpParser.BackQuoteString - 219)) | (1 << (PhpParser.SingleQuoteString - 219)) | (1 << (PhpParser.DoubleQuote - 219)) | (1 << (PhpParser.StartNowDoc - 219)) | (1 << (PhpParser.StartHereDoc - 219)))) !== 0)) {
                    {
                        {
                            this.state = 273;
                            this.htmlElementOrPhpBlock();
                        }
                    }
                    this.state = 278;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 279;
                this.match(PhpParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.htmlElementOrPhpBlock = function () {
        var _localctx = new HtmlElementOrPhpBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, PhpParser.RULE_htmlElementOrPhpBlock);
        try {
            this.state = 284;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 281;
                        this.htmlElements();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 282;
                        this.phpBlock();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 283;
                        this.scriptTextPart();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.htmlElements = function () {
        var _localctx = new HtmlElementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, PhpParser.RULE_htmlElements);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 287;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 286;
                                    this.htmlElement();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 289;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.htmlElement = function () {
        var _localctx = new HtmlElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, PhpParser.RULE_htmlElement);
        var _la;
        try {
            this.state = 319;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PhpParser.HtmlDtd:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 291;
                        this.match(PhpParser.HtmlDtd);
                    }
                    break;
                case PhpParser.HtmlScriptOpen:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 292;
                        this.match(PhpParser.HtmlScriptOpen);
                    }
                    break;
                case PhpParser.HtmlClose:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 293;
                        this.match(PhpParser.HtmlClose);
                    }
                    break;
                case PhpParser.HtmlStyleOpen:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 294;
                        this.match(PhpParser.HtmlStyleOpen);
                    }
                    break;
                case PhpParser.HtmlOpen:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 295;
                        this.match(PhpParser.HtmlOpen);
                    }
                    break;
                case PhpParser.HtmlName:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 296;
                        this.match(PhpParser.HtmlName);
                    }
                    break;
                case PhpParser.HtmlSlashClose:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 297;
                        this.match(PhpParser.HtmlSlashClose);
                    }
                    break;
                case PhpParser.HtmlSlash:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 298;
                        this.match(PhpParser.HtmlSlash);
                    }
                    break;
                case PhpParser.HtmlText:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 299;
                        this.match(PhpParser.HtmlText);
                    }
                    break;
                case PhpParser.HtmlEquals:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 300;
                        this.match(PhpParser.HtmlEquals);
                    }
                    break;
                case PhpParser.HtmlStartQuoteString:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 301;
                        this.match(PhpParser.HtmlStartQuoteString);
                    }
                    break;
                case PhpParser.HtmlEndQuoteString:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 302;
                        this.match(PhpParser.HtmlEndQuoteString);
                    }
                    break;
                case PhpParser.HtmlStartDoubleQuoteString:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 303;
                        this.match(PhpParser.HtmlStartDoubleQuoteString);
                    }
                    break;
                case PhpParser.HtmlEndDoubleQuoteString:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 304;
                        this.match(PhpParser.HtmlEndDoubleQuoteString);
                    }
                    break;
                case PhpParser.HtmlHex:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 305;
                        this.match(PhpParser.HtmlHex);
                    }
                    break;
                case PhpParser.HtmlDecimal:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 306;
                        this.match(PhpParser.HtmlDecimal);
                    }
                    break;
                case PhpParser.HtmlQuoteString:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 307;
                        this.match(PhpParser.HtmlQuoteString);
                    }
                    break;
                case PhpParser.HtmlDoubleQuoteString:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 308;
                        this.match(PhpParser.HtmlDoubleQuoteString);
                    }
                    break;
                case PhpParser.StyleBody:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 309;
                        this.match(PhpParser.StyleBody);
                    }
                    break;
                case PhpParser.ScriptClose:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 310;
                        this.match(PhpParser.ScriptClose);
                    }
                    break;
                case PhpParser.XmlStart:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 311;
                        this.match(PhpParser.XmlStart);
                        this.state = 315;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === PhpParser.XmlText) {
                            {
                                {
                                    this.state = 312;
                                    this.match(PhpParser.XmlText);
                                }
                            }
                            this.state = 317;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 318;
                        this.match(PhpParser.XmlClose);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.scriptTextPart = function () {
        var _localctx = new ScriptTextPartContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, PhpParser.RULE_scriptTextPart);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 322;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 321;
                                    this.match(PhpParser.ScriptText);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 324;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.phpBlock = function () {
        var _localctx = new PhpBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, PhpParser.RULE_phpBlock);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 329;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 326;
                                this.importStatement();
                            }
                        }
                    }
                    this.state = 331;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                }
                this.state = 333;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 332;
                                    this.topStatement();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 335;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.importStatement = function () {
        var _localctx = new ImportStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, PhpParser.RULE_importStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 337;
                this.match(PhpParser.Import);
                this.state = 338;
                this.match(PhpParser.Namespace);
                this.state = 339;
                this.namespaceNameList();
                this.state = 340;
                this.match(PhpParser.SemiColon);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.topStatement = function () {
        var _localctx = new TopStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, PhpParser.RULE_topStatement);
        try {
            this.state = 348;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 342;
                        this.statement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 343;
                        this.useDeclaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 344;
                        this.namespaceDeclaration();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 345;
                        this.functionDeclaration();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 346;
                        this.classDeclaration();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 347;
                        this.globalConstantDeclaration();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.useDeclaration = function () {
        var _localctx = new UseDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, PhpParser.RULE_useDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 350;
                this.match(PhpParser.Use);
                this.state = 352;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                    case 1:
                        {
                            this.state = 351;
                            _la = this._input.LA(1);
                            if (!(_la === PhpParser.Const || _la === PhpParser.Function)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                        break;
                }
                this.state = 354;
                this.useDeclarationContentList();
                this.state = 355;
                this.match(PhpParser.SemiColon);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.useDeclarationContentList = function () {
        var _localctx = new UseDeclarationContentListContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, PhpParser.RULE_useDeclarationContentList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 358;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PhpParser.NamespaceSeparator) {
                    {
                        this.state = 357;
                        this.match(PhpParser.NamespaceSeparator);
                    }
                }
                this.state = 360;
                this.useDeclarationContent();
                this.state = 368;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PhpParser.Comma) {
                    {
                        {
                            this.state = 361;
                            this.match(PhpParser.Comma);
                            this.state = 363;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === PhpParser.NamespaceSeparator) {
                                {
                                    this.state = 362;
                                    this.match(PhpParser.NamespaceSeparator);
                                }
                            }
                            this.state = 365;
                            this.useDeclarationContent();
                        }
                    }
                    this.state = 370;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.useDeclarationContent = function () {
        var _localctx = new UseDeclarationContentContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, PhpParser.RULE_useDeclarationContent);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 371;
                this.namespaceNameList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.namespaceDeclaration = function () {
        var _localctx = new NamespaceDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, PhpParser.RULE_namespaceDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 373;
                this.match(PhpParser.Namespace);
                this.state = 388;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
                    case 1:
                        {
                            this.state = 375;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (PhpParser.Abstract - 43)) | (1 << (PhpParser.Array - 43)) | (1 << (PhpParser.As - 43)) | (1 << (PhpParser.BinaryCast - 43)) | (1 << (PhpParser.BoolType - 43)) | (1 << (PhpParser.BooleanConstant - 43)) | (1 << (PhpParser.Break - 43)) | (1 << (PhpParser.Callable - 43)) | (1 << (PhpParser.Case - 43)) | (1 << (PhpParser.Catch - 43)) | (1 << (PhpParser.Class - 43)) | (1 << (PhpParser.Clone - 43)) | (1 << (PhpParser.Const - 43)) | (1 << (PhpParser.Continue - 43)) | (1 << (PhpParser.Declare - 43)) | (1 << (PhpParser.Default - 43)) | (1 << (PhpParser.Do - 43)) | (1 << (PhpParser.DoubleCast - 43)) | (1 << (PhpParser.DoubleType - 43)) | (1 << (PhpParser.Echo - 43)) | (1 << (PhpParser.Else - 43)) | (1 << (PhpParser.ElseIf - 43)) | (1 << (PhpParser.Empty - 43)) | (1 << (PhpParser.EndDeclare - 43)) | (1 << (PhpParser.EndFor - 43)) | (1 << (PhpParser.EndForeach - 43)) | (1 << (PhpParser.EndIf - 43)) | (1 << (PhpParser.EndSwitch - 43)) | (1 << (PhpParser.EndWhile - 43)) | (1 << (PhpParser.Eval - 43)) | (1 << (PhpParser.Exit - 43)) | (1 << (PhpParser.Extends - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (PhpParser.Final - 75)) | (1 << (PhpParser.Finally - 75)) | (1 << (PhpParser.FloatCast - 75)) | (1 << (PhpParser.For - 75)) | (1 << (PhpParser.Foreach - 75)) | (1 << (PhpParser.Function - 75)) | (1 << (PhpParser.Global - 75)) | (1 << (PhpParser.Goto - 75)) | (1 << (PhpParser.If - 75)) | (1 << (PhpParser.Implements - 75)) | (1 << (PhpParser.Import - 75)) | (1 << (PhpParser.Include - 75)) | (1 << (PhpParser.IncludeOnce - 75)) | (1 << (PhpParser.InstanceOf - 75)) | (1 << (PhpParser.InsteadOf - 75)) | (1 << (PhpParser.Int8Cast - 75)) | (1 << (PhpParser.Int16Cast - 75)) | (1 << (PhpParser.Int64Type - 75)) | (1 << (PhpParser.IntType - 75)) | (1 << (PhpParser.Interface - 75)) | (1 << (PhpParser.IsSet - 75)) | (1 << (PhpParser.List - 75)) | (1 << (PhpParser.LogicalAnd - 75)) | (1 << (PhpParser.LogicalOr - 75)) | (1 << (PhpParser.LogicalXor - 75)) | (1 << (PhpParser.Namespace - 75)) | (1 << (PhpParser.New - 75)) | (1 << (PhpParser.Null - 75)) | (1 << (PhpParser.ObjectType - 75)) | (1 << (PhpParser.Parent_ - 75)) | (1 << (PhpParser.Partial - 75)) | (1 << (PhpParser.Print - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (PhpParser.Private - 107)) | (1 << (PhpParser.Protected - 107)) | (1 << (PhpParser.Public - 107)) | (1 << (PhpParser.Require - 107)) | (1 << (PhpParser.RequireOnce - 107)) | (1 << (PhpParser.Resource - 107)) | (1 << (PhpParser.Return - 107)) | (1 << (PhpParser.Static - 107)) | (1 << (PhpParser.StringType - 107)) | (1 << (PhpParser.Switch - 107)) | (1 << (PhpParser.Throw - 107)) | (1 << (PhpParser.Trait - 107)) | (1 << (PhpParser.Try - 107)) | (1 << (PhpParser.Typeof - 107)) | (1 << (PhpParser.UintCast - 107)) | (1 << (PhpParser.UnicodeCast - 107)) | (1 << (PhpParser.Unset - 107)) | (1 << (PhpParser.Use - 107)) | (1 << (PhpParser.Var - 107)) | (1 << (PhpParser.While - 107)) | (1 << (PhpParser.Yield - 107)) | (1 << (PhpParser.From - 107)) | (1 << (PhpParser.Get - 107)) | (1 << (PhpParser.Set - 107)) | (1 << (PhpParser.Call - 107)) | (1 << (PhpParser.CallStatic - 107)) | (1 << (PhpParser.Constructor - 107)) | (1 << (PhpParser.Destruct - 107)) | (1 << (PhpParser.Wakeup - 107)) | (1 << (PhpParser.Sleep - 107)) | (1 << (PhpParser.Autoload - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (PhpParser.IsSet__ - 139)) | (1 << (PhpParser.Unset__ - 139)) | (1 << (PhpParser.ToString__ - 139)) | (1 << (PhpParser.Invoke - 139)) | (1 << (PhpParser.SetState - 139)) | (1 << (PhpParser.Clone__ - 139)) | (1 << (PhpParser.DebugInfo - 139)) | (1 << (PhpParser.Namespace__ - 139)) | (1 << (PhpParser.Class__ - 139)) | (1 << (PhpParser.Traic__ - 139)) | (1 << (PhpParser.Function__ - 139)) | (1 << (PhpParser.Method__ - 139)) | (1 << (PhpParser.Line__ - 139)) | (1 << (PhpParser.File__ - 139)) | (1 << (PhpParser.Dir__ - 139)))) !== 0) || _la === PhpParser.Label) {
                                {
                                    this.state = 374;
                                    this.namespaceNameList();
                                }
                            }
                            this.state = 377;
                            this.match(PhpParser.OpenCurlyBracket);
                            this.state = 381;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PhpParser.HtmlText) | (1 << PhpParser.XmlStart) | (1 << PhpParser.HtmlScriptOpen) | (1 << PhpParser.HtmlStyleOpen) | (1 << PhpParser.HtmlDtd) | (1 << PhpParser.HtmlOpen) | (1 << PhpParser.HtmlClose) | (1 << PhpParser.HtmlSlashClose) | (1 << PhpParser.HtmlSlash) | (1 << PhpParser.HtmlEquals) | (1 << PhpParser.HtmlStartQuoteString) | (1 << PhpParser.HtmlStartDoubleQuoteString) | (1 << PhpParser.HtmlHex) | (1 << PhpParser.HtmlDecimal) | (1 << PhpParser.HtmlName) | (1 << PhpParser.HtmlEndQuoteString) | (1 << PhpParser.HtmlQuoteString) | (1 << PhpParser.HtmlEndDoubleQuoteString))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PhpParser.HtmlDoubleQuoteString - 32)) | (1 << (PhpParser.ScriptText - 32)) | (1 << (PhpParser.ScriptClose - 32)) | (1 << (PhpParser.StyleBody - 32)) | (1 << (PhpParser.Abstract - 32)) | (1 << (PhpParser.Array - 32)) | (1 << (PhpParser.As - 32)) | (1 << (PhpParser.BinaryCast - 32)) | (1 << (PhpParser.BoolType - 32)) | (1 << (PhpParser.BooleanConstant - 32)) | (1 << (PhpParser.Break - 32)) | (1 << (PhpParser.Callable - 32)) | (1 << (PhpParser.Case - 32)) | (1 << (PhpParser.Catch - 32)) | (1 << (PhpParser.Class - 32)) | (1 << (PhpParser.Clone - 32)) | (1 << (PhpParser.Const - 32)) | (1 << (PhpParser.Continue - 32)) | (1 << (PhpParser.Declare - 32)) | (1 << (PhpParser.Default - 32)) | (1 << (PhpParser.Do - 32)) | (1 << (PhpParser.DoubleCast - 32)) | (1 << (PhpParser.DoubleType - 32)) | (1 << (PhpParser.Echo - 32)) | (1 << (PhpParser.Else - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (PhpParser.ElseIf - 64)) | (1 << (PhpParser.Empty - 64)) | (1 << (PhpParser.EndDeclare - 64)) | (1 << (PhpParser.EndFor - 64)) | (1 << (PhpParser.EndForeach - 64)) | (1 << (PhpParser.EndIf - 64)) | (1 << (PhpParser.EndSwitch - 64)) | (1 << (PhpParser.EndWhile - 64)) | (1 << (PhpParser.Eval - 64)) | (1 << (PhpParser.Exit - 64)) | (1 << (PhpParser.Extends - 64)) | (1 << (PhpParser.Final - 64)) | (1 << (PhpParser.Finally - 64)) | (1 << (PhpParser.FloatCast - 64)) | (1 << (PhpParser.For - 64)) | (1 << (PhpParser.Foreach - 64)) | (1 << (PhpParser.Function - 64)) | (1 << (PhpParser.Global - 64)) | (1 << (PhpParser.Goto - 64)) | (1 << (PhpParser.If - 64)) | (1 << (PhpParser.Implements - 64)) | (1 << (PhpParser.Import - 64)) | (1 << (PhpParser.Include - 64)) | (1 << (PhpParser.IncludeOnce - 64)) | (1 << (PhpParser.InstanceOf - 64)) | (1 << (PhpParser.InsteadOf - 64)) | (1 << (PhpParser.Int8Cast - 64)) | (1 << (PhpParser.Int16Cast - 64)) | (1 << (PhpParser.Int64Type - 64)) | (1 << (PhpParser.IntType - 64)) | (1 << (PhpParser.Interface - 64)) | (1 << (PhpParser.IsSet - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (PhpParser.List - 96)) | (1 << (PhpParser.LogicalAnd - 96)) | (1 << (PhpParser.LogicalOr - 96)) | (1 << (PhpParser.LogicalXor - 96)) | (1 << (PhpParser.Namespace - 96)) | (1 << (PhpParser.New - 96)) | (1 << (PhpParser.Null - 96)) | (1 << (PhpParser.ObjectType - 96)) | (1 << (PhpParser.Parent_ - 96)) | (1 << (PhpParser.Partial - 96)) | (1 << (PhpParser.Print - 96)) | (1 << (PhpParser.Private - 96)) | (1 << (PhpParser.Protected - 96)) | (1 << (PhpParser.Public - 96)) | (1 << (PhpParser.Require - 96)) | (1 << (PhpParser.RequireOnce - 96)) | (1 << (PhpParser.Resource - 96)) | (1 << (PhpParser.Return - 96)) | (1 << (PhpParser.Static - 96)) | (1 << (PhpParser.StringType - 96)) | (1 << (PhpParser.Switch - 96)) | (1 << (PhpParser.Throw - 96)) | (1 << (PhpParser.Trait - 96)) | (1 << (PhpParser.Try - 96)) | (1 << (PhpParser.Typeof - 96)) | (1 << (PhpParser.UintCast - 96)) | (1 << (PhpParser.UnicodeCast - 96)) | (1 << (PhpParser.Unset - 96)) | (1 << (PhpParser.Use - 96)) | (1 << (PhpParser.Var - 96)) | (1 << (PhpParser.While - 96)) | (1 << (PhpParser.Yield - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (PhpParser.From - 128)) | (1 << (PhpParser.LambdaFn - 128)) | (1 << (PhpParser.Get - 128)) | (1 << (PhpParser.Set - 128)) | (1 << (PhpParser.Call - 128)) | (1 << (PhpParser.CallStatic - 128)) | (1 << (PhpParser.Constructor - 128)) | (1 << (PhpParser.Destruct - 128)) | (1 << (PhpParser.Wakeup - 128)) | (1 << (PhpParser.Sleep - 128)) | (1 << (PhpParser.Autoload - 128)) | (1 << (PhpParser.IsSet__ - 128)) | (1 << (PhpParser.Unset__ - 128)) | (1 << (PhpParser.ToString__ - 128)) | (1 << (PhpParser.Invoke - 128)) | (1 << (PhpParser.SetState - 128)) | (1 << (PhpParser.Clone__ - 128)) | (1 << (PhpParser.DebugInfo - 128)) | (1 << (PhpParser.Namespace__ - 128)) | (1 << (PhpParser.Class__ - 128)) | (1 << (PhpParser.Traic__ - 128)) | (1 << (PhpParser.Function__ - 128)) | (1 << (PhpParser.Method__ - 128)) | (1 << (PhpParser.Line__ - 128)) | (1 << (PhpParser.File__ - 128)) | (1 << (PhpParser.Dir__ - 128)) | (1 << (PhpParser.Inc - 128)) | (1 << (PhpParser.Dec - 128)))) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & ((1 << (PhpParser.NamespaceSeparator - 187)) | (1 << (PhpParser.Ellipsis - 187)) | (1 << (PhpParser.Ampersand - 187)) | (1 << (PhpParser.Bang - 187)) | (1 << (PhpParser.Plus - 187)) | (1 << (PhpParser.Minus - 187)) | (1 << (PhpParser.Tilde - 187)) | (1 << (PhpParser.SuppressWarnings - 187)) | (1 << (PhpParser.Dollar - 187)) | (1 << (PhpParser.QuestionMark - 187)) | (1 << (PhpParser.OpenRoundBracket - 187)) | (1 << (PhpParser.OpenSquareBracket - 187)) | (1 << (PhpParser.OpenCurlyBracket - 187)) | (1 << (PhpParser.SemiColon - 187)) | (1 << (PhpParser.VarName - 187)) | (1 << (PhpParser.Label - 187)))) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & ((1 << (PhpParser.Octal - 219)) | (1 << (PhpParser.Decimal - 219)) | (1 << (PhpParser.Real - 219)) | (1 << (PhpParser.Hex - 219)) | (1 << (PhpParser.Binary - 219)) | (1 << (PhpParser.BackQuoteString - 219)) | (1 << (PhpParser.SingleQuoteString - 219)) | (1 << (PhpParser.DoubleQuote - 219)) | (1 << (PhpParser.StartNowDoc - 219)) | (1 << (PhpParser.StartHereDoc - 219)))) !== 0)) {
                                {
                                    {
                                        this.state = 378;
                                        this.namespaceStatement();
                                    }
                                }
                                this.state = 383;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 384;
                            this.match(PhpParser.CloseCurlyBracket);
                        }
                        break;
                    case 2:
                        {
                            this.state = 385;
                            this.namespaceNameList();
                            this.state = 386;
                            this.match(PhpParser.SemiColon);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.namespaceStatement = function () {
        var _localctx = new NamespaceStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, PhpParser.RULE_namespaceStatement);
        try {
            this.state = 395;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 390;
                        this.statement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 391;
                        this.useDeclaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 392;
                        this.functionDeclaration();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 393;
                        this.classDeclaration();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 394;
                        this.globalConstantDeclaration();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.functionDeclaration = function () {
        var _localctx = new FunctionDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, PhpParser.RULE_functionDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 397;
                this.attributes();
                this.state = 398;
                this.match(PhpParser.Function);
                this.state = 400;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PhpParser.Ampersand) {
                    {
                        this.state = 399;
                        this.match(PhpParser.Ampersand);
                    }
                }
                this.state = 402;
                this.identifier();
                this.state = 404;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PhpParser.Lgeneric) {
                    {
                        this.state = 403;
                        this.typeParameterListInBrackets();
                    }
                }
                this.state = 406;
                this.match(PhpParser.OpenRoundBracket);
                this.state = 407;
                this.formalParameterList();
                this.state = 408;
                this.match(PhpParser.CloseRoundBracket);
                this.state = 414;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PhpParser.Colon) {
                    {
                        this.state = 409;
                        this.match(PhpParser.Colon);
                        this.state = 411;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PhpParser.QuestionMark) {
                            {
                                this.state = 410;
                                this.match(PhpParser.QuestionMark);
                            }
                        }
                        this.state = 413;
                        this.typeHint();
                    }
                }
                this.state = 416;
                this.blockStatement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.classDeclaration = function () {
        var _localctx = new ClassDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, PhpParser.RULE_classDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 418;
                this.attributes();
                this.state = 420;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PhpParser.Private) {
                    {
                        this.state = 419;
                        this.match(PhpParser.Private);
                    }
                }
                this.state = 423;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PhpParser.Abstract || _la === PhpParser.Final) {
                    {
                        this.state = 422;
                        this.modifier();
                    }
                }
                this.state = 426;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PhpParser.Partial) {
                    {
                        this.state = 425;
                        this.match(PhpParser.Partial);
                    }
                }
                this.state = 450;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PhpParser.Class:
                    case PhpParser.Trait:
                        {
                            this.state = 428;
                            this.classEntryType();
                            this.state = 429;
                            this.identifier();
                            this.state = 431;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === PhpParser.Lgeneric) {
                                {
                                    this.state = 430;
                                    this.typeParameterListInBrackets();
                                }
                            }
                            this.state = 435;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === PhpParser.Extends) {
                                {
                                    this.state = 433;
                                    this.match(PhpParser.Extends);
                                    this.state = 434;
                                    this.qualifiedStaticTypeRef();
                                }
                            }
                            this.state = 439;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === PhpParser.Implements) {
                                {
                                    this.state = 437;
                                    this.match(PhpParser.Implements);
                                    this.state = 438;
                                    this.interfaceList();
                                }
                            }
                        }
                        break;
                    case PhpParser.Interface:
                        {
                            this.state = 441;
                            this.match(PhpParser.Interface);
                            this.state = 442;
                            this.identifier();
                            this.state = 444;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === PhpParser.Lgeneric) {
                                {
                                    this.state = 443;
                                    this.typeParameterListInBrackets();
                                }
                            }
                            this.state = 448;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === PhpParser.Extends) {
                                {
                                    this.state = 446;
                                    this.match(PhpParser.Extends);
                                    this.state = 447;
                                    this.interfaceList();
                                }
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 452;
                this.match(PhpParser.OpenCurlyBracket);
                this.state = 456;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (PhpParser.Abstract - 43)) | (1 << (PhpParser.Array - 43)) | (1 << (PhpParser.As - 43)) | (1 << (PhpParser.BinaryCast - 43)) | (1 << (PhpParser.BoolType - 43)) | (1 << (PhpParser.BooleanConstant - 43)) | (1 << (PhpParser.Break - 43)) | (1 << (PhpParser.Callable - 43)) | (1 << (PhpParser.Case - 43)) | (1 << (PhpParser.Catch - 43)) | (1 << (PhpParser.Class - 43)) | (1 << (PhpParser.Clone - 43)) | (1 << (PhpParser.Const - 43)) | (1 << (PhpParser.Continue - 43)) | (1 << (PhpParser.Declare - 43)) | (1 << (PhpParser.Default - 43)) | (1 << (PhpParser.Do - 43)) | (1 << (PhpParser.DoubleCast - 43)) | (1 << (PhpParser.DoubleType - 43)) | (1 << (PhpParser.Echo - 43)) | (1 << (PhpParser.Else - 43)) | (1 << (PhpParser.ElseIf - 43)) | (1 << (PhpParser.Empty - 43)) | (1 << (PhpParser.EndDeclare - 43)) | (1 << (PhpParser.EndFor - 43)) | (1 << (PhpParser.EndForeach - 43)) | (1 << (PhpParser.EndIf - 43)) | (1 << (PhpParser.EndSwitch - 43)) | (1 << (PhpParser.EndWhile - 43)) | (1 << (PhpParser.Eval - 43)) | (1 << (PhpParser.Exit - 43)) | (1 << (PhpParser.Extends - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (PhpParser.Final - 75)) | (1 << (PhpParser.Finally - 75)) | (1 << (PhpParser.FloatCast - 75)) | (1 << (PhpParser.For - 75)) | (1 << (PhpParser.Foreach - 75)) | (1 << (PhpParser.Function - 75)) | (1 << (PhpParser.Global - 75)) | (1 << (PhpParser.Goto - 75)) | (1 << (PhpParser.If - 75)) | (1 << (PhpParser.Implements - 75)) | (1 << (PhpParser.Import - 75)) | (1 << (PhpParser.Include - 75)) | (1 << (PhpParser.IncludeOnce - 75)) | (1 << (PhpParser.InstanceOf - 75)) | (1 << (PhpParser.InsteadOf - 75)) | (1 << (PhpParser.Int8Cast - 75)) | (1 << (PhpParser.Int16Cast - 75)) | (1 << (PhpParser.Int64Type - 75)) | (1 << (PhpParser.IntType - 75)) | (1 << (PhpParser.Interface - 75)) | (1 << (PhpParser.IsSet - 75)) | (1 << (PhpParser.List - 75)) | (1 << (PhpParser.LogicalAnd - 75)) | (1 << (PhpParser.LogicalOr - 75)) | (1 << (PhpParser.LogicalXor - 75)) | (1 << (PhpParser.Namespace - 75)) | (1 << (PhpParser.New - 75)) | (1 << (PhpParser.Null - 75)) | (1 << (PhpParser.ObjectType - 75)) | (1 << (PhpParser.Parent_ - 75)) | (1 << (PhpParser.Partial - 75)) | (1 << (PhpParser.Print - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (PhpParser.Private - 107)) | (1 << (PhpParser.Protected - 107)) | (1 << (PhpParser.Public - 107)) | (1 << (PhpParser.Require - 107)) | (1 << (PhpParser.RequireOnce - 107)) | (1 << (PhpParser.Resource - 107)) | (1 << (PhpParser.Return - 107)) | (1 << (PhpParser.Static - 107)) | (1 << (PhpParser.StringType - 107)) | (1 << (PhpParser.Switch - 107)) | (1 << (PhpParser.Throw - 107)) | (1 << (PhpParser.Trait - 107)) | (1 << (PhpParser.Try - 107)) | (1 << (PhpParser.Typeof - 107)) | (1 << (PhpParser.UintCast - 107)) | (1 << (PhpParser.UnicodeCast - 107)) | (1 << (PhpParser.Unset - 107)) | (1 << (PhpParser.Use - 107)) | (1 << (PhpParser.Var - 107)) | (1 << (PhpParser.While - 107)) | (1 << (PhpParser.Yield - 107)) | (1 << (PhpParser.From - 107)) | (1 << (PhpParser.Get - 107)) | (1 << (PhpParser.Set - 107)) | (1 << (PhpParser.Call - 107)) | (1 << (PhpParser.CallStatic - 107)) | (1 << (PhpParser.Constructor - 107)) | (1 << (PhpParser.Destruct - 107)) | (1 << (PhpParser.Wakeup - 107)) | (1 << (PhpParser.Sleep - 107)) | (1 << (PhpParser.Autoload - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (PhpParser.IsSet__ - 139)) | (1 << (PhpParser.Unset__ - 139)) | (1 << (PhpParser.ToString__ - 139)) | (1 << (PhpParser.Invoke - 139)) | (1 << (PhpParser.SetState - 139)) | (1 << (PhpParser.Clone__ - 139)) | (1 << (PhpParser.DebugInfo - 139)) | (1 << (PhpParser.Namespace__ - 139)) | (1 << (PhpParser.Class__ - 139)) | (1 << (PhpParser.Traic__ - 139)) | (1 << (PhpParser.Function__ - 139)) | (1 << (PhpParser.Method__ - 139)) | (1 << (PhpParser.Line__ - 139)) | (1 << (PhpParser.File__ - 139)) | (1 << (PhpParser.Dir__ - 139)))) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & ((1 << (PhpParser.NamespaceSeparator - 187)) | (1 << (PhpParser.Ellipsis - 187)) | (1 << (PhpParser.Ampersand - 187)) | (1 << (PhpParser.QuestionMark - 187)) | (1 << (PhpParser.OpenSquareBracket - 187)) | (1 << (PhpParser.VarName - 187)) | (1 << (PhpParser.Label - 187)))) !== 0)) {
                    {
                        {
                            this.state = 453;
                            this.classStatement();
                        }
                    }
                    this.state = 458;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 459;
                this.match(PhpParser.CloseCurlyBracket);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.classEntryType = function () {
        var _localctx = new ClassEntryTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, PhpParser.RULE_classEntryType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 461;
                _la = this._input.LA(1);
                if (!(_la === PhpParser.Class || _la === PhpParser.Trait)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.interfaceList = function () {
        var _localctx = new InterfaceListContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, PhpParser.RULE_interfaceList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 463;
                this.qualifiedStaticTypeRef();
                this.state = 468;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PhpParser.Comma) {
                    {
                        {
                            this.state = 464;
                            this.match(PhpParser.Comma);
                            this.state = 465;
                            this.qualifiedStaticTypeRef();
                        }
                    }
                    this.state = 470;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.typeParameterListInBrackets = function () {
        var _localctx = new TypeParameterListInBracketsContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, PhpParser.RULE_typeParameterListInBrackets);
        try {
            this.state = 485;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 471;
                        this.match(PhpParser.Lgeneric);
                        this.state = 472;
                        this.typeParameterList();
                        this.state = 473;
                        this.match(PhpParser.Rgeneric);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 475;
                        this.match(PhpParser.Lgeneric);
                        this.state = 476;
                        this.typeParameterWithDefaultsList();
                        this.state = 477;
                        this.match(PhpParser.Rgeneric);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 479;
                        this.match(PhpParser.Lgeneric);
                        this.state = 480;
                        this.typeParameterList();
                        this.state = 481;
                        this.match(PhpParser.Comma);
                        this.state = 482;
                        this.typeParameterWithDefaultsList();
                        this.state = 483;
                        this.match(PhpParser.Rgeneric);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.typeParameterList = function () {
        var _localctx = new TypeParameterListContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, PhpParser.RULE_typeParameterList);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 487;
                this.typeParameterDecl();
                this.state = 492;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 488;
                                this.match(PhpParser.Comma);
                                this.state = 489;
                                this.typeParameterDecl();
                            }
                        }
                    }
                    this.state = 494;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.typeParameterWithDefaultsList = function () {
        var _localctx = new TypeParameterWithDefaultsListContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, PhpParser.RULE_typeParameterWithDefaultsList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 495;
                this.typeParameterWithDefaultDecl();
                this.state = 500;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PhpParser.Comma) {
                    {
                        {
                            this.state = 496;
                            this.match(PhpParser.Comma);
                            this.state = 497;
                            this.typeParameterWithDefaultDecl();
                        }
                    }
                    this.state = 502;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.typeParameterDecl = function () {
        var _localctx = new TypeParameterDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, PhpParser.RULE_typeParameterDecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 503;
                this.attributes();
                this.state = 504;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.typeParameterWithDefaultDecl = function () {
        var _localctx = new TypeParameterWithDefaultDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, PhpParser.RULE_typeParameterWithDefaultDecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 506;
                this.attributes();
                this.state = 507;
                this.identifier();
                this.state = 508;
                this.match(PhpParser.Eq);
                this.state = 511;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
                    case 1:
                        {
                            this.state = 509;
                            this.qualifiedStaticTypeRef();
                        }
                        break;
                    case 2:
                        {
                            this.state = 510;
                            this.primitiveType();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.genericDynamicArgs = function () {
        var _localctx = new GenericDynamicArgsContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, PhpParser.RULE_genericDynamicArgs);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 513;
                this.match(PhpParser.Lgeneric);
                this.state = 514;
                this.typeRef();
                this.state = 519;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PhpParser.Comma) {
                    {
                        {
                            this.state = 515;
                            this.match(PhpParser.Comma);
                            this.state = 516;
                            this.typeRef();
                        }
                    }
                    this.state = 521;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 522;
                this.match(PhpParser.Rgeneric);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.attributes = function () {
        var _localctx = new AttributesContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, PhpParser.RULE_attributes);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 527;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PhpParser.OpenSquareBracket) {
                    {
                        {
                            this.state = 524;
                            this.attributesGroup();
                        }
                    }
                    this.state = 529;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.attributesGroup = function () {
        var _localctx = new AttributesGroupContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, PhpParser.RULE_attributesGroup);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 530;
                this.match(PhpParser.OpenSquareBracket);
                this.state = 534;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                    case 1:
                        {
                            this.state = 531;
                            this.identifier();
                            this.state = 532;
                            this.match(PhpParser.Colon);
                        }
                        break;
                }
                this.state = 536;
                this.attribute();
                this.state = 541;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PhpParser.Comma) {
                    {
                        {
                            this.state = 537;
                            this.match(PhpParser.Comma);
                            this.state = 538;
                            this.attribute();
                        }
                    }
                    this.state = 543;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 544;
                this.match(PhpParser.CloseSquareBracket);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.attribute = function () {
        var _localctx = new AttributeContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, PhpParser.RULE_attribute);
        try {
            this.state = 564;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 41, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 546;
                        this.qualifiedNamespaceName();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 547;
                        this.qualifiedNamespaceName();
                        this.state = 548;
                        this.match(PhpParser.OpenRoundBracket);
                        this.state = 549;
                        this.attributeArgList();
                        this.state = 550;
                        this.match(PhpParser.CloseRoundBracket);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 552;
                        this.qualifiedNamespaceName();
                        this.state = 553;
                        this.match(PhpParser.OpenRoundBracket);
                        this.state = 554;
                        this.attributeNamedArgList();
                        this.state = 555;
                        this.match(PhpParser.CloseRoundBracket);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 557;
                        this.qualifiedNamespaceName();
                        this.state = 558;
                        this.match(PhpParser.OpenRoundBracket);
                        this.state = 559;
                        this.attributeArgList();
                        this.state = 560;
                        this.match(PhpParser.Comma);
                        this.state = 561;
                        this.attributeNamedArgList();
                        this.state = 562;
                        this.match(PhpParser.CloseRoundBracket);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.attributeArgList = function () {
        var _localctx = new AttributeArgListContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, PhpParser.RULE_attributeArgList);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 566;
                this.expression(0);
                this.state = 571;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 567;
                                this.match(PhpParser.Comma);
                                this.state = 568;
                                this.expression(0);
                            }
                        }
                    }
                    this.state = 573;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.attributeNamedArgList = function () {
        var _localctx = new AttributeNamedArgListContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, PhpParser.RULE_attributeNamedArgList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 574;
                this.attributeNamedArg();
                this.state = 579;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PhpParser.Comma) {
                    {
                        {
                            this.state = 575;
                            this.match(PhpParser.Comma);
                            this.state = 576;
                            this.attributeNamedArg();
                        }
                    }
                    this.state = 581;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.attributeNamedArg = function () {
        var _localctx = new AttributeNamedArgContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, PhpParser.RULE_attributeNamedArg);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 582;
                this.match(PhpParser.VarName);
                this.state = 583;
                this.match(PhpParser.DoubleArrow);
                this.state = 584;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.innerStatementList = function () {
        var _localctx = new InnerStatementListContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, PhpParser.RULE_innerStatementList);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 589;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 586;
                                this.innerStatement();
                            }
                        }
                    }
                    this.state = 591;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.innerStatement = function () {
        var _localctx = new InnerStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, PhpParser.RULE_innerStatement);
        try {
            this.state = 595;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 45, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 592;
                        this.statement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 593;
                        this.functionDeclaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 594;
                        this.classDeclaration();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, PhpParser.RULE_statement);
        try {
            this.state = 624;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 46, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 597;
                        this.identifier();
                        this.state = 598;
                        this.match(PhpParser.Colon);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 600;
                        this.blockStatement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 601;
                        this.ifStatement();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 602;
                        this.whileStatement();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 603;
                        this.doWhileStatement();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 604;
                        this.forStatement();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 605;
                        this.switchStatement();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 606;
                        this.breakStatement();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 607;
                        this.continueStatement();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 608;
                        this.returnStatement();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 609;
                        this.yieldExpression();
                        this.state = 610;
                        this.match(PhpParser.SemiColon);
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 612;
                        this.globalStatement();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 613;
                        this.staticVariableStatement();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 614;
                        this.echoStatement();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 615;
                        this.expressionStatement();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 616;
                        this.unsetStatement();
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 617;
                        this.foreachStatement();
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 618;
                        this.tryCatchFinally();
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 619;
                        this.throwStatement();
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 620;
                        this.gotoStatement();
                    }
                    break;
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 621;
                        this.declareStatement();
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 622;
                        this.emptyStatement();
                    }
                    break;
                case 23:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 623;
                        this.inlineHtmlStatement();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.emptyStatement = function () {
        var _localctx = new EmptyStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, PhpParser.RULE_emptyStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 626;
                this.match(PhpParser.SemiColon);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.blockStatement = function () {
        var _localctx = new BlockStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, PhpParser.RULE_blockStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 628;
                this.match(PhpParser.OpenCurlyBracket);
                this.state = 629;
                this.innerStatementList();
                this.state = 630;
                this.match(PhpParser.CloseCurlyBracket);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.ifStatement = function () {
        var _localctx = new IfStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, PhpParser.RULE_ifStatement);
        var _la;
        try {
            var _alt = void 0;
            this.state = 660;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 51, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 632;
                        this.match(PhpParser.If);
                        this.state = 633;
                        this.parentheses();
                        this.state = 634;
                        this.statement();
                        this.state = 638;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 635;
                                        this.elseIfStatement();
                                    }
                                }
                            }
                            this.state = 640;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
                        }
                        this.state = 642;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 48, this._ctx)) {
                            case 1:
                                {
                                    this.state = 641;
                                    this.elseStatement();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 644;
                        this.match(PhpParser.If);
                        this.state = 645;
                        this.parentheses();
                        this.state = 646;
                        this.match(PhpParser.Colon);
                        this.state = 647;
                        this.innerStatementList();
                        this.state = 651;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === PhpParser.ElseIf) {
                            {
                                {
                                    this.state = 648;
                                    this.elseIfColonStatement();
                                }
                            }
                            this.state = 653;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 655;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PhpParser.Else) {
                            {
                                this.state = 654;
                                this.elseColonStatement();
                            }
                        }
                        this.state = 657;
                        this.match(PhpParser.EndIf);
                        this.state = 658;
                        this.match(PhpParser.SemiColon);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.elseIfStatement = function () {
        var _localctx = new ElseIfStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, PhpParser.RULE_elseIfStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 662;
                this.match(PhpParser.ElseIf);
                this.state = 663;
                this.parentheses();
                this.state = 664;
                this.statement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.elseIfColonStatement = function () {
        var _localctx = new ElseIfColonStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, PhpParser.RULE_elseIfColonStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 666;
                this.match(PhpParser.ElseIf);
                this.state = 667;
                this.parentheses();
                this.state = 668;
                this.match(PhpParser.Colon);
                this.state = 669;
                this.innerStatementList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.elseStatement = function () {
        var _localctx = new ElseStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, PhpParser.RULE_elseStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 671;
                this.match(PhpParser.Else);
                this.state = 672;
                this.statement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.elseColonStatement = function () {
        var _localctx = new ElseColonStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, PhpParser.RULE_elseColonStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 674;
                this.match(PhpParser.Else);
                this.state = 675;
                this.match(PhpParser.Colon);
                this.state = 676;
                this.innerStatementList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.whileStatement = function () {
        var _localctx = new WhileStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, PhpParser.RULE_whileStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 678;
                this.match(PhpParser.While);
                this.state = 679;
                this.parentheses();
                this.state = 686;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PhpParser.HtmlText:
                    case PhpParser.XmlStart:
                    case PhpParser.HtmlScriptOpen:
                    case PhpParser.HtmlStyleOpen:
                    case PhpParser.HtmlDtd:
                    case PhpParser.HtmlOpen:
                    case PhpParser.HtmlClose:
                    case PhpParser.HtmlSlashClose:
                    case PhpParser.HtmlSlash:
                    case PhpParser.HtmlEquals:
                    case PhpParser.HtmlStartQuoteString:
                    case PhpParser.HtmlStartDoubleQuoteString:
                    case PhpParser.HtmlHex:
                    case PhpParser.HtmlDecimal:
                    case PhpParser.HtmlName:
                    case PhpParser.HtmlEndQuoteString:
                    case PhpParser.HtmlQuoteString:
                    case PhpParser.HtmlEndDoubleQuoteString:
                    case PhpParser.HtmlDoubleQuoteString:
                    case PhpParser.ScriptText:
                    case PhpParser.ScriptClose:
                    case PhpParser.StyleBody:
                    case PhpParser.Abstract:
                    case PhpParser.Array:
                    case PhpParser.As:
                    case PhpParser.BinaryCast:
                    case PhpParser.BoolType:
                    case PhpParser.BooleanConstant:
                    case PhpParser.Break:
                    case PhpParser.Callable:
                    case PhpParser.Case:
                    case PhpParser.Catch:
                    case PhpParser.Class:
                    case PhpParser.Clone:
                    case PhpParser.Const:
                    case PhpParser.Continue:
                    case PhpParser.Declare:
                    case PhpParser.Default:
                    case PhpParser.Do:
                    case PhpParser.DoubleCast:
                    case PhpParser.DoubleType:
                    case PhpParser.Echo:
                    case PhpParser.Else:
                    case PhpParser.ElseIf:
                    case PhpParser.Empty:
                    case PhpParser.EndDeclare:
                    case PhpParser.EndFor:
                    case PhpParser.EndForeach:
                    case PhpParser.EndIf:
                    case PhpParser.EndSwitch:
                    case PhpParser.EndWhile:
                    case PhpParser.Eval:
                    case PhpParser.Exit:
                    case PhpParser.Extends:
                    case PhpParser.Final:
                    case PhpParser.Finally:
                    case PhpParser.FloatCast:
                    case PhpParser.For:
                    case PhpParser.Foreach:
                    case PhpParser.Function:
                    case PhpParser.Global:
                    case PhpParser.Goto:
                    case PhpParser.If:
                    case PhpParser.Implements:
                    case PhpParser.Import:
                    case PhpParser.Include:
                    case PhpParser.IncludeOnce:
                    case PhpParser.InstanceOf:
                    case PhpParser.InsteadOf:
                    case PhpParser.Int8Cast:
                    case PhpParser.Int16Cast:
                    case PhpParser.Int64Type:
                    case PhpParser.IntType:
                    case PhpParser.Interface:
                    case PhpParser.IsSet:
                    case PhpParser.List:
                    case PhpParser.LogicalAnd:
                    case PhpParser.LogicalOr:
                    case PhpParser.LogicalXor:
                    case PhpParser.Namespace:
                    case PhpParser.New:
                    case PhpParser.Null:
                    case PhpParser.ObjectType:
                    case PhpParser.Parent_:
                    case PhpParser.Partial:
                    case PhpParser.Print:
                    case PhpParser.Private:
                    case PhpParser.Protected:
                    case PhpParser.Public:
                    case PhpParser.Require:
                    case PhpParser.RequireOnce:
                    case PhpParser.Resource:
                    case PhpParser.Return:
                    case PhpParser.Static:
                    case PhpParser.StringType:
                    case PhpParser.Switch:
                    case PhpParser.Throw:
                    case PhpParser.Trait:
                    case PhpParser.Try:
                    case PhpParser.Typeof:
                    case PhpParser.UintCast:
                    case PhpParser.UnicodeCast:
                    case PhpParser.Unset:
                    case PhpParser.Use:
                    case PhpParser.Var:
                    case PhpParser.While:
                    case PhpParser.Yield:
                    case PhpParser.From:
                    case PhpParser.LambdaFn:
                    case PhpParser.Get:
                    case PhpParser.Set:
                    case PhpParser.Call:
                    case PhpParser.CallStatic:
                    case PhpParser.Constructor:
                    case PhpParser.Destruct:
                    case PhpParser.Wakeup:
                    case PhpParser.Sleep:
                    case PhpParser.Autoload:
                    case PhpParser.IsSet__:
                    case PhpParser.Unset__:
                    case PhpParser.ToString__:
                    case PhpParser.Invoke:
                    case PhpParser.SetState:
                    case PhpParser.Clone__:
                    case PhpParser.DebugInfo:
                    case PhpParser.Namespace__:
                    case PhpParser.Class__:
                    case PhpParser.Traic__:
                    case PhpParser.Function__:
                    case PhpParser.Method__:
                    case PhpParser.Line__:
                    case PhpParser.File__:
                    case PhpParser.Dir__:
                    case PhpParser.Inc:
                    case PhpParser.Dec:
                    case PhpParser.NamespaceSeparator:
                    case PhpParser.Bang:
                    case PhpParser.Plus:
                    case PhpParser.Minus:
                    case PhpParser.Tilde:
                    case PhpParser.SuppressWarnings:
                    case PhpParser.Dollar:
                    case PhpParser.OpenRoundBracket:
                    case PhpParser.OpenSquareBracket:
                    case PhpParser.OpenCurlyBracket:
                    case PhpParser.SemiColon:
                    case PhpParser.VarName:
                    case PhpParser.Label:
                    case PhpParser.Octal:
                    case PhpParser.Decimal:
                    case PhpParser.Real:
                    case PhpParser.Hex:
                    case PhpParser.Binary:
                    case PhpParser.BackQuoteString:
                    case PhpParser.SingleQuoteString:
                    case PhpParser.DoubleQuote:
                    case PhpParser.StartNowDoc:
                    case PhpParser.StartHereDoc:
                        {
                            this.state = 680;
                            this.statement();
                        }
                        break;
                    case PhpParser.Colon:
                        {
                            this.state = 681;
                            this.match(PhpParser.Colon);
                            this.state = 682;
                            this.innerStatementList();
                            this.state = 683;
                            this.match(PhpParser.EndWhile);
                            this.state = 684;
                            this.match(PhpParser.SemiColon);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.doWhileStatement = function () {
        var _localctx = new DoWhileStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, PhpParser.RULE_doWhileStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 688;
                this.match(PhpParser.Do);
                this.state = 689;
                this.statement();
                this.state = 690;
                this.match(PhpParser.While);
                this.state = 691;
                this.parentheses();
                this.state = 692;
                this.match(PhpParser.SemiColon);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.forStatement = function () {
        var _localctx = new ForStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, PhpParser.RULE_forStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 694;
                this.match(PhpParser.For);
                this.state = 695;
                this.match(PhpParser.OpenRoundBracket);
                this.state = 697;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (PhpParser.Abstract - 43)) | (1 << (PhpParser.Array - 43)) | (1 << (PhpParser.As - 43)) | (1 << (PhpParser.BinaryCast - 43)) | (1 << (PhpParser.BoolType - 43)) | (1 << (PhpParser.BooleanConstant - 43)) | (1 << (PhpParser.Break - 43)) | (1 << (PhpParser.Callable - 43)) | (1 << (PhpParser.Case - 43)) | (1 << (PhpParser.Catch - 43)) | (1 << (PhpParser.Class - 43)) | (1 << (PhpParser.Clone - 43)) | (1 << (PhpParser.Const - 43)) | (1 << (PhpParser.Continue - 43)) | (1 << (PhpParser.Declare - 43)) | (1 << (PhpParser.Default - 43)) | (1 << (PhpParser.Do - 43)) | (1 << (PhpParser.DoubleCast - 43)) | (1 << (PhpParser.DoubleType - 43)) | (1 << (PhpParser.Echo - 43)) | (1 << (PhpParser.Else - 43)) | (1 << (PhpParser.ElseIf - 43)) | (1 << (PhpParser.Empty - 43)) | (1 << (PhpParser.EndDeclare - 43)) | (1 << (PhpParser.EndFor - 43)) | (1 << (PhpParser.EndForeach - 43)) | (1 << (PhpParser.EndIf - 43)) | (1 << (PhpParser.EndSwitch - 43)) | (1 << (PhpParser.EndWhile - 43)) | (1 << (PhpParser.Eval - 43)) | (1 << (PhpParser.Exit - 43)) | (1 << (PhpParser.Extends - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (PhpParser.Final - 75)) | (1 << (PhpParser.Finally - 75)) | (1 << (PhpParser.FloatCast - 75)) | (1 << (PhpParser.For - 75)) | (1 << (PhpParser.Foreach - 75)) | (1 << (PhpParser.Function - 75)) | (1 << (PhpParser.Global - 75)) | (1 << (PhpParser.Goto - 75)) | (1 << (PhpParser.If - 75)) | (1 << (PhpParser.Implements - 75)) | (1 << (PhpParser.Import - 75)) | (1 << (PhpParser.Include - 75)) | (1 << (PhpParser.IncludeOnce - 75)) | (1 << (PhpParser.InstanceOf - 75)) | (1 << (PhpParser.InsteadOf - 75)) | (1 << (PhpParser.Int8Cast - 75)) | (1 << (PhpParser.Int16Cast - 75)) | (1 << (PhpParser.Int64Type - 75)) | (1 << (PhpParser.IntType - 75)) | (1 << (PhpParser.Interface - 75)) | (1 << (PhpParser.IsSet - 75)) | (1 << (PhpParser.List - 75)) | (1 << (PhpParser.LogicalAnd - 75)) | (1 << (PhpParser.LogicalOr - 75)) | (1 << (PhpParser.LogicalXor - 75)) | (1 << (PhpParser.Namespace - 75)) | (1 << (PhpParser.New - 75)) | (1 << (PhpParser.Null - 75)) | (1 << (PhpParser.ObjectType - 75)) | (1 << (PhpParser.Parent_ - 75)) | (1 << (PhpParser.Partial - 75)) | (1 << (PhpParser.Print - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (PhpParser.Private - 107)) | (1 << (PhpParser.Protected - 107)) | (1 << (PhpParser.Public - 107)) | (1 << (PhpParser.Require - 107)) | (1 << (PhpParser.RequireOnce - 107)) | (1 << (PhpParser.Resource - 107)) | (1 << (PhpParser.Return - 107)) | (1 << (PhpParser.Static - 107)) | (1 << (PhpParser.StringType - 107)) | (1 << (PhpParser.Switch - 107)) | (1 << (PhpParser.Throw - 107)) | (1 << (PhpParser.Trait - 107)) | (1 << (PhpParser.Try - 107)) | (1 << (PhpParser.Typeof - 107)) | (1 << (PhpParser.UintCast - 107)) | (1 << (PhpParser.UnicodeCast - 107)) | (1 << (PhpParser.Unset - 107)) | (1 << (PhpParser.Use - 107)) | (1 << (PhpParser.Var - 107)) | (1 << (PhpParser.While - 107)) | (1 << (PhpParser.Yield - 107)) | (1 << (PhpParser.From - 107)) | (1 << (PhpParser.LambdaFn - 107)) | (1 << (PhpParser.Get - 107)) | (1 << (PhpParser.Set - 107)) | (1 << (PhpParser.Call - 107)) | (1 << (PhpParser.CallStatic - 107)) | (1 << (PhpParser.Constructor - 107)) | (1 << (PhpParser.Destruct - 107)) | (1 << (PhpParser.Wakeup - 107)) | (1 << (PhpParser.Sleep - 107)) | (1 << (PhpParser.Autoload - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (PhpParser.IsSet__ - 139)) | (1 << (PhpParser.Unset__ - 139)) | (1 << (PhpParser.ToString__ - 139)) | (1 << (PhpParser.Invoke - 139)) | (1 << (PhpParser.SetState - 139)) | (1 << (PhpParser.Clone__ - 139)) | (1 << (PhpParser.DebugInfo - 139)) | (1 << (PhpParser.Namespace__ - 139)) | (1 << (PhpParser.Class__ - 139)) | (1 << (PhpParser.Traic__ - 139)) | (1 << (PhpParser.Function__ - 139)) | (1 << (PhpParser.Method__ - 139)) | (1 << (PhpParser.Line__ - 139)) | (1 << (PhpParser.File__ - 139)) | (1 << (PhpParser.Dir__ - 139)) | (1 << (PhpParser.Inc - 139)) | (1 << (PhpParser.Dec - 139)))) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & ((1 << (PhpParser.NamespaceSeparator - 187)) | (1 << (PhpParser.Bang - 187)) | (1 << (PhpParser.Plus - 187)) | (1 << (PhpParser.Minus - 187)) | (1 << (PhpParser.Tilde - 187)) | (1 << (PhpParser.SuppressWarnings - 187)) | (1 << (PhpParser.Dollar - 187)) | (1 << (PhpParser.OpenRoundBracket - 187)) | (1 << (PhpParser.OpenSquareBracket - 187)) | (1 << (PhpParser.VarName - 187)) | (1 << (PhpParser.Label - 187)))) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & ((1 << (PhpParser.Octal - 219)) | (1 << (PhpParser.Decimal - 219)) | (1 << (PhpParser.Real - 219)) | (1 << (PhpParser.Hex - 219)) | (1 << (PhpParser.Binary - 219)) | (1 << (PhpParser.BackQuoteString - 219)) | (1 << (PhpParser.SingleQuoteString - 219)) | (1 << (PhpParser.DoubleQuote - 219)) | (1 << (PhpParser.StartNowDoc - 219)) | (1 << (PhpParser.StartHereDoc - 219)))) !== 0)) {
                    {
                        this.state = 696;
                        this.forInit();
                    }
                }
                this.state = 699;
                this.match(PhpParser.SemiColon);
                this.state = 701;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (PhpParser.Abstract - 43)) | (1 << (PhpParser.Array - 43)) | (1 << (PhpParser.As - 43)) | (1 << (PhpParser.BinaryCast - 43)) | (1 << (PhpParser.BoolType - 43)) | (1 << (PhpParser.BooleanConstant - 43)) | (1 << (PhpParser.Break - 43)) | (1 << (PhpParser.Callable - 43)) | (1 << (PhpParser.Case - 43)) | (1 << (PhpParser.Catch - 43)) | (1 << (PhpParser.Class - 43)) | (1 << (PhpParser.Clone - 43)) | (1 << (PhpParser.Const - 43)) | (1 << (PhpParser.Continue - 43)) | (1 << (PhpParser.Declare - 43)) | (1 << (PhpParser.Default - 43)) | (1 << (PhpParser.Do - 43)) | (1 << (PhpParser.DoubleCast - 43)) | (1 << (PhpParser.DoubleType - 43)) | (1 << (PhpParser.Echo - 43)) | (1 << (PhpParser.Else - 43)) | (1 << (PhpParser.ElseIf - 43)) | (1 << (PhpParser.Empty - 43)) | (1 << (PhpParser.EndDeclare - 43)) | (1 << (PhpParser.EndFor - 43)) | (1 << (PhpParser.EndForeach - 43)) | (1 << (PhpParser.EndIf - 43)) | (1 << (PhpParser.EndSwitch - 43)) | (1 << (PhpParser.EndWhile - 43)) | (1 << (PhpParser.Eval - 43)) | (1 << (PhpParser.Exit - 43)) | (1 << (PhpParser.Extends - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (PhpParser.Final - 75)) | (1 << (PhpParser.Finally - 75)) | (1 << (PhpParser.FloatCast - 75)) | (1 << (PhpParser.For - 75)) | (1 << (PhpParser.Foreach - 75)) | (1 << (PhpParser.Function - 75)) | (1 << (PhpParser.Global - 75)) | (1 << (PhpParser.Goto - 75)) | (1 << (PhpParser.If - 75)) | (1 << (PhpParser.Implements - 75)) | (1 << (PhpParser.Import - 75)) | (1 << (PhpParser.Include - 75)) | (1 << (PhpParser.IncludeOnce - 75)) | (1 << (PhpParser.InstanceOf - 75)) | (1 << (PhpParser.InsteadOf - 75)) | (1 << (PhpParser.Int8Cast - 75)) | (1 << (PhpParser.Int16Cast - 75)) | (1 << (PhpParser.Int64Type - 75)) | (1 << (PhpParser.IntType - 75)) | (1 << (PhpParser.Interface - 75)) | (1 << (PhpParser.IsSet - 75)) | (1 << (PhpParser.List - 75)) | (1 << (PhpParser.LogicalAnd - 75)) | (1 << (PhpParser.LogicalOr - 75)) | (1 << (PhpParser.LogicalXor - 75)) | (1 << (PhpParser.Namespace - 75)) | (1 << (PhpParser.New - 75)) | (1 << (PhpParser.Null - 75)) | (1 << (PhpParser.ObjectType - 75)) | (1 << (PhpParser.Parent_ - 75)) | (1 << (PhpParser.Partial - 75)) | (1 << (PhpParser.Print - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (PhpParser.Private - 107)) | (1 << (PhpParser.Protected - 107)) | (1 << (PhpParser.Public - 107)) | (1 << (PhpParser.Require - 107)) | (1 << (PhpParser.RequireOnce - 107)) | (1 << (PhpParser.Resource - 107)) | (1 << (PhpParser.Return - 107)) | (1 << (PhpParser.Static - 107)) | (1 << (PhpParser.StringType - 107)) | (1 << (PhpParser.Switch - 107)) | (1 << (PhpParser.Throw - 107)) | (1 << (PhpParser.Trait - 107)) | (1 << (PhpParser.Try - 107)) | (1 << (PhpParser.Typeof - 107)) | (1 << (PhpParser.UintCast - 107)) | (1 << (PhpParser.UnicodeCast - 107)) | (1 << (PhpParser.Unset - 107)) | (1 << (PhpParser.Use - 107)) | (1 << (PhpParser.Var - 107)) | (1 << (PhpParser.While - 107)) | (1 << (PhpParser.Yield - 107)) | (1 << (PhpParser.From - 107)) | (1 << (PhpParser.LambdaFn - 107)) | (1 << (PhpParser.Get - 107)) | (1 << (PhpParser.Set - 107)) | (1 << (PhpParser.Call - 107)) | (1 << (PhpParser.CallStatic - 107)) | (1 << (PhpParser.Constructor - 107)) | (1 << (PhpParser.Destruct - 107)) | (1 << (PhpParser.Wakeup - 107)) | (1 << (PhpParser.Sleep - 107)) | (1 << (PhpParser.Autoload - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (PhpParser.IsSet__ - 139)) | (1 << (PhpParser.Unset__ - 139)) | (1 << (PhpParser.ToString__ - 139)) | (1 << (PhpParser.Invoke - 139)) | (1 << (PhpParser.SetState - 139)) | (1 << (PhpParser.Clone__ - 139)) | (1 << (PhpParser.DebugInfo - 139)) | (1 << (PhpParser.Namespace__ - 139)) | (1 << (PhpParser.Class__ - 139)) | (1 << (PhpParser.Traic__ - 139)) | (1 << (PhpParser.Function__ - 139)) | (1 << (PhpParser.Method__ - 139)) | (1 << (PhpParser.Line__ - 139)) | (1 << (PhpParser.File__ - 139)) | (1 << (PhpParser.Dir__ - 139)) | (1 << (PhpParser.Inc - 139)) | (1 << (PhpParser.Dec - 139)))) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & ((1 << (PhpParser.NamespaceSeparator - 187)) | (1 << (PhpParser.Bang - 187)) | (1 << (PhpParser.Plus - 187)) | (1 << (PhpParser.Minus - 187)) | (1 << (PhpParser.Tilde - 187)) | (1 << (PhpParser.SuppressWarnings - 187)) | (1 << (PhpParser.Dollar - 187)) | (1 << (PhpParser.OpenRoundBracket - 187)) | (1 << (PhpParser.OpenSquareBracket - 187)) | (1 << (PhpParser.VarName - 187)) | (1 << (PhpParser.Label - 187)))) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & ((1 << (PhpParser.Octal - 219)) | (1 << (PhpParser.Decimal - 219)) | (1 << (PhpParser.Real - 219)) | (1 << (PhpParser.Hex - 219)) | (1 << (PhpParser.Binary - 219)) | (1 << (PhpParser.BackQuoteString - 219)) | (1 << (PhpParser.SingleQuoteString - 219)) | (1 << (PhpParser.DoubleQuote - 219)) | (1 << (PhpParser.StartNowDoc - 219)) | (1 << (PhpParser.StartHereDoc - 219)))) !== 0)) {
                    {
                        this.state = 700;
                        this.expressionList();
                    }
                }
                this.state = 703;
                this.match(PhpParser.SemiColon);
                this.state = 705;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (PhpParser.Abstract - 43)) | (1 << (PhpParser.Array - 43)) | (1 << (PhpParser.As - 43)) | (1 << (PhpParser.BinaryCast - 43)) | (1 << (PhpParser.BoolType - 43)) | (1 << (PhpParser.BooleanConstant - 43)) | (1 << (PhpParser.Break - 43)) | (1 << (PhpParser.Callable - 43)) | (1 << (PhpParser.Case - 43)) | (1 << (PhpParser.Catch - 43)) | (1 << (PhpParser.Class - 43)) | (1 << (PhpParser.Clone - 43)) | (1 << (PhpParser.Const - 43)) | (1 << (PhpParser.Continue - 43)) | (1 << (PhpParser.Declare - 43)) | (1 << (PhpParser.Default - 43)) | (1 << (PhpParser.Do - 43)) | (1 << (PhpParser.DoubleCast - 43)) | (1 << (PhpParser.DoubleType - 43)) | (1 << (PhpParser.Echo - 43)) | (1 << (PhpParser.Else - 43)) | (1 << (PhpParser.ElseIf - 43)) | (1 << (PhpParser.Empty - 43)) | (1 << (PhpParser.EndDeclare - 43)) | (1 << (PhpParser.EndFor - 43)) | (1 << (PhpParser.EndForeach - 43)) | (1 << (PhpParser.EndIf - 43)) | (1 << (PhpParser.EndSwitch - 43)) | (1 << (PhpParser.EndWhile - 43)) | (1 << (PhpParser.Eval - 43)) | (1 << (PhpParser.Exit - 43)) | (1 << (PhpParser.Extends - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (PhpParser.Final - 75)) | (1 << (PhpParser.Finally - 75)) | (1 << (PhpParser.FloatCast - 75)) | (1 << (PhpParser.For - 75)) | (1 << (PhpParser.Foreach - 75)) | (1 << (PhpParser.Function - 75)) | (1 << (PhpParser.Global - 75)) | (1 << (PhpParser.Goto - 75)) | (1 << (PhpParser.If - 75)) | (1 << (PhpParser.Implements - 75)) | (1 << (PhpParser.Import - 75)) | (1 << (PhpParser.Include - 75)) | (1 << (PhpParser.IncludeOnce - 75)) | (1 << (PhpParser.InstanceOf - 75)) | (1 << (PhpParser.InsteadOf - 75)) | (1 << (PhpParser.Int8Cast - 75)) | (1 << (PhpParser.Int16Cast - 75)) | (1 << (PhpParser.Int64Type - 75)) | (1 << (PhpParser.IntType - 75)) | (1 << (PhpParser.Interface - 75)) | (1 << (PhpParser.IsSet - 75)) | (1 << (PhpParser.List - 75)) | (1 << (PhpParser.LogicalAnd - 75)) | (1 << (PhpParser.LogicalOr - 75)) | (1 << (PhpParser.LogicalXor - 75)) | (1 << (PhpParser.Namespace - 75)) | (1 << (PhpParser.New - 75)) | (1 << (PhpParser.Null - 75)) | (1 << (PhpParser.ObjectType - 75)) | (1 << (PhpParser.Parent_ - 75)) | (1 << (PhpParser.Partial - 75)) | (1 << (PhpParser.Print - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (PhpParser.Private - 107)) | (1 << (PhpParser.Protected - 107)) | (1 << (PhpParser.Public - 107)) | (1 << (PhpParser.Require - 107)) | (1 << (PhpParser.RequireOnce - 107)) | (1 << (PhpParser.Resource - 107)) | (1 << (PhpParser.Return - 107)) | (1 << (PhpParser.Static - 107)) | (1 << (PhpParser.StringType - 107)) | (1 << (PhpParser.Switch - 107)) | (1 << (PhpParser.Throw - 107)) | (1 << (PhpParser.Trait - 107)) | (1 << (PhpParser.Try - 107)) | (1 << (PhpParser.Typeof - 107)) | (1 << (PhpParser.UintCast - 107)) | (1 << (PhpParser.UnicodeCast - 107)) | (1 << (PhpParser.Unset - 107)) | (1 << (PhpParser.Use - 107)) | (1 << (PhpParser.Var - 107)) | (1 << (PhpParser.While - 107)) | (1 << (PhpParser.Yield - 107)) | (1 << (PhpParser.From - 107)) | (1 << (PhpParser.LambdaFn - 107)) | (1 << (PhpParser.Get - 107)) | (1 << (PhpParser.Set - 107)) | (1 << (PhpParser.Call - 107)) | (1 << (PhpParser.CallStatic - 107)) | (1 << (PhpParser.Constructor - 107)) | (1 << (PhpParser.Destruct - 107)) | (1 << (PhpParser.Wakeup - 107)) | (1 << (PhpParser.Sleep - 107)) | (1 << (PhpParser.Autoload - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (PhpParser.IsSet__ - 139)) | (1 << (PhpParser.Unset__ - 139)) | (1 << (PhpParser.ToString__ - 139)) | (1 << (PhpParser.Invoke - 139)) | (1 << (PhpParser.SetState - 139)) | (1 << (PhpParser.Clone__ - 139)) | (1 << (PhpParser.DebugInfo - 139)) | (1 << (PhpParser.Namespace__ - 139)) | (1 << (PhpParser.Class__ - 139)) | (1 << (PhpParser.Traic__ - 139)) | (1 << (PhpParser.Function__ - 139)) | (1 << (PhpParser.Method__ - 139)) | (1 << (PhpParser.Line__ - 139)) | (1 << (PhpParser.File__ - 139)) | (1 << (PhpParser.Dir__ - 139)) | (1 << (PhpParser.Inc - 139)) | (1 << (PhpParser.Dec - 139)))) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & ((1 << (PhpParser.NamespaceSeparator - 187)) | (1 << (PhpParser.Bang - 187)) | (1 << (PhpParser.Plus - 187)) | (1 << (PhpParser.Minus - 187)) | (1 << (PhpParser.Tilde - 187)) | (1 << (PhpParser.SuppressWarnings - 187)) | (1 << (PhpParser.Dollar - 187)) | (1 << (PhpParser.OpenRoundBracket - 187)) | (1 << (PhpParser.OpenSquareBracket - 187)) | (1 << (PhpParser.VarName - 187)) | (1 << (PhpParser.Label - 187)))) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & ((1 << (PhpParser.Octal - 219)) | (1 << (PhpParser.Decimal - 219)) | (1 << (PhpParser.Real - 219)) | (1 << (PhpParser.Hex - 219)) | (1 << (PhpParser.Binary - 219)) | (1 << (PhpParser.BackQuoteString - 219)) | (1 << (PhpParser.SingleQuoteString - 219)) | (1 << (PhpParser.DoubleQuote - 219)) | (1 << (PhpParser.StartNowDoc - 219)) | (1 << (PhpParser.StartHereDoc - 219)))) !== 0)) {
                    {
                        this.state = 704;
                        this.forUpdate();
                    }
                }
                this.state = 707;
                this.match(PhpParser.CloseRoundBracket);
                this.state = 714;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PhpParser.HtmlText:
                    case PhpParser.XmlStart:
                    case PhpParser.HtmlScriptOpen:
                    case PhpParser.HtmlStyleOpen:
                    case PhpParser.HtmlDtd:
                    case PhpParser.HtmlOpen:
                    case PhpParser.HtmlClose:
                    case PhpParser.HtmlSlashClose:
                    case PhpParser.HtmlSlash:
                    case PhpParser.HtmlEquals:
                    case PhpParser.HtmlStartQuoteString:
                    case PhpParser.HtmlStartDoubleQuoteString:
                    case PhpParser.HtmlHex:
                    case PhpParser.HtmlDecimal:
                    case PhpParser.HtmlName:
                    case PhpParser.HtmlEndQuoteString:
                    case PhpParser.HtmlQuoteString:
                    case PhpParser.HtmlEndDoubleQuoteString:
                    case PhpParser.HtmlDoubleQuoteString:
                    case PhpParser.ScriptText:
                    case PhpParser.ScriptClose:
                    case PhpParser.StyleBody:
                    case PhpParser.Abstract:
                    case PhpParser.Array:
                    case PhpParser.As:
                    case PhpParser.BinaryCast:
                    case PhpParser.BoolType:
                    case PhpParser.BooleanConstant:
                    case PhpParser.Break:
                    case PhpParser.Callable:
                    case PhpParser.Case:
                    case PhpParser.Catch:
                    case PhpParser.Class:
                    case PhpParser.Clone:
                    case PhpParser.Const:
                    case PhpParser.Continue:
                    case PhpParser.Declare:
                    case PhpParser.Default:
                    case PhpParser.Do:
                    case PhpParser.DoubleCast:
                    case PhpParser.DoubleType:
                    case PhpParser.Echo:
                    case PhpParser.Else:
                    case PhpParser.ElseIf:
                    case PhpParser.Empty:
                    case PhpParser.EndDeclare:
                    case PhpParser.EndFor:
                    case PhpParser.EndForeach:
                    case PhpParser.EndIf:
                    case PhpParser.EndSwitch:
                    case PhpParser.EndWhile:
                    case PhpParser.Eval:
                    case PhpParser.Exit:
                    case PhpParser.Extends:
                    case PhpParser.Final:
                    case PhpParser.Finally:
                    case PhpParser.FloatCast:
                    case PhpParser.For:
                    case PhpParser.Foreach:
                    case PhpParser.Function:
                    case PhpParser.Global:
                    case PhpParser.Goto:
                    case PhpParser.If:
                    case PhpParser.Implements:
                    case PhpParser.Import:
                    case PhpParser.Include:
                    case PhpParser.IncludeOnce:
                    case PhpParser.InstanceOf:
                    case PhpParser.InsteadOf:
                    case PhpParser.Int8Cast:
                    case PhpParser.Int16Cast:
                    case PhpParser.Int64Type:
                    case PhpParser.IntType:
                    case PhpParser.Interface:
                    case PhpParser.IsSet:
                    case PhpParser.List:
                    case PhpParser.LogicalAnd:
                    case PhpParser.LogicalOr:
                    case PhpParser.LogicalXor:
                    case PhpParser.Namespace:
                    case PhpParser.New:
                    case PhpParser.Null:
                    case PhpParser.ObjectType:
                    case PhpParser.Parent_:
                    case PhpParser.Partial:
                    case PhpParser.Print:
                    case PhpParser.Private:
                    case PhpParser.Protected:
                    case PhpParser.Public:
                    case PhpParser.Require:
                    case PhpParser.RequireOnce:
                    case PhpParser.Resource:
                    case PhpParser.Return:
                    case PhpParser.Static:
                    case PhpParser.StringType:
                    case PhpParser.Switch:
                    case PhpParser.Throw:
                    case PhpParser.Trait:
                    case PhpParser.Try:
                    case PhpParser.Typeof:
                    case PhpParser.UintCast:
                    case PhpParser.UnicodeCast:
                    case PhpParser.Unset:
                    case PhpParser.Use:
                    case PhpParser.Var:
                    case PhpParser.While:
                    case PhpParser.Yield:
                    case PhpParser.From:
                    case PhpParser.LambdaFn:
                    case PhpParser.Get:
                    case PhpParser.Set:
                    case PhpParser.Call:
                    case PhpParser.CallStatic:
                    case PhpParser.Constructor:
                    case PhpParser.Destruct:
                    case PhpParser.Wakeup:
                    case PhpParser.Sleep:
                    case PhpParser.Autoload:
                    case PhpParser.IsSet__:
                    case PhpParser.Unset__:
                    case PhpParser.ToString__:
                    case PhpParser.Invoke:
                    case PhpParser.SetState:
                    case PhpParser.Clone__:
                    case PhpParser.DebugInfo:
                    case PhpParser.Namespace__:
                    case PhpParser.Class__:
                    case PhpParser.Traic__:
                    case PhpParser.Function__:
                    case PhpParser.Method__:
                    case PhpParser.Line__:
                    case PhpParser.File__:
                    case PhpParser.Dir__:
                    case PhpParser.Inc:
                    case PhpParser.Dec:
                    case PhpParser.NamespaceSeparator:
                    case PhpParser.Bang:
                    case PhpParser.Plus:
                    case PhpParser.Minus:
                    case PhpParser.Tilde:
                    case PhpParser.SuppressWarnings:
                    case PhpParser.Dollar:
                    case PhpParser.OpenRoundBracket:
                    case PhpParser.OpenSquareBracket:
                    case PhpParser.OpenCurlyBracket:
                    case PhpParser.SemiColon:
                    case PhpParser.VarName:
                    case PhpParser.Label:
                    case PhpParser.Octal:
                    case PhpParser.Decimal:
                    case PhpParser.Real:
                    case PhpParser.Hex:
                    case PhpParser.Binary:
                    case PhpParser.BackQuoteString:
                    case PhpParser.SingleQuoteString:
                    case PhpParser.DoubleQuote:
                    case PhpParser.StartNowDoc:
                    case PhpParser.StartHereDoc:
                        {
                            this.state = 708;
                            this.statement();
                        }
                        break;
                    case PhpParser.Colon:
                        {
                            this.state = 709;
                            this.match(PhpParser.Colon);
                            this.state = 710;
                            this.innerStatementList();
                            this.state = 711;
                            this.match(PhpParser.EndFor);
                            this.state = 712;
                            this.match(PhpParser.SemiColon);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.forInit = function () {
        var _localctx = new ForInitContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, PhpParser.RULE_forInit);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 716;
                this.expressionList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.forUpdate = function () {
        var _localctx = new ForUpdateContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, PhpParser.RULE_forUpdate);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 718;
                this.expressionList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.switchStatement = function () {
        var _localctx = new SwitchStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, PhpParser.RULE_switchStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 720;
                this.match(PhpParser.Switch);
                this.state = 721;
                this.parentheses();
                this.state = 745;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PhpParser.OpenCurlyBracket:
                        {
                            this.state = 722;
                            this.match(PhpParser.OpenCurlyBracket);
                            this.state = 724;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === PhpParser.SemiColon) {
                                {
                                    this.state = 723;
                                    this.match(PhpParser.SemiColon);
                                }
                            }
                            this.state = 729;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === PhpParser.Case || _la === PhpParser.Default) {
                                {
                                    {
                                        this.state = 726;
                                        this.switchBlock();
                                    }
                                }
                                this.state = 731;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 732;
                            this.match(PhpParser.CloseCurlyBracket);
                        }
                        break;
                    case PhpParser.Colon:
                        {
                            this.state = 733;
                            this.match(PhpParser.Colon);
                            this.state = 735;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === PhpParser.SemiColon) {
                                {
                                    this.state = 734;
                                    this.match(PhpParser.SemiColon);
                                }
                            }
                            this.state = 740;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === PhpParser.Case || _la === PhpParser.Default) {
                                {
                                    {
                                        this.state = 737;
                                        this.switchBlock();
                                    }
                                }
                                this.state = 742;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 743;
                            this.match(PhpParser.EndSwitch);
                            this.state = 744;
                            this.match(PhpParser.SemiColon);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.switchBlock = function () {
        var _localctx = new SwitchBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, PhpParser.RULE_switchBlock);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 753;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 750;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case PhpParser.Case:
                                            {
                                                this.state = 747;
                                                this.match(PhpParser.Case);
                                                this.state = 748;
                                                this.expression(0);
                                            }
                                            break;
                                        case PhpParser.Default:
                                            {
                                                this.state = 749;
                                                this.match(PhpParser.Default);
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                    this.state = 752;
                                    _la = this._input.LA(1);
                                    if (!(_la === PhpParser.Colon || _la === PhpParser.SemiColon)) {
                                        this._errHandler.recoverInline(this);
                                    }
                                    else {
                                        if (this._input.LA(1) === Token_1.Token.EOF) {
                                            this.matchedEOF = true;
                                        }
                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 755;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 757;
                this.innerStatementList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.breakStatement = function () {
        var _localctx = new BreakStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, PhpParser.RULE_breakStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 759;
                this.match(PhpParser.Break);
                this.state = 761;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (PhpParser.Abstract - 43)) | (1 << (PhpParser.Array - 43)) | (1 << (PhpParser.As - 43)) | (1 << (PhpParser.BinaryCast - 43)) | (1 << (PhpParser.BoolType - 43)) | (1 << (PhpParser.BooleanConstant - 43)) | (1 << (PhpParser.Break - 43)) | (1 << (PhpParser.Callable - 43)) | (1 << (PhpParser.Case - 43)) | (1 << (PhpParser.Catch - 43)) | (1 << (PhpParser.Class - 43)) | (1 << (PhpParser.Clone - 43)) | (1 << (PhpParser.Const - 43)) | (1 << (PhpParser.Continue - 43)) | (1 << (PhpParser.Declare - 43)) | (1 << (PhpParser.Default - 43)) | (1 << (PhpParser.Do - 43)) | (1 << (PhpParser.DoubleCast - 43)) | (1 << (PhpParser.DoubleType - 43)) | (1 << (PhpParser.Echo - 43)) | (1 << (PhpParser.Else - 43)) | (1 << (PhpParser.ElseIf - 43)) | (1 << (PhpParser.Empty - 43)) | (1 << (PhpParser.EndDeclare - 43)) | (1 << (PhpParser.EndFor - 43)) | (1 << (PhpParser.EndForeach - 43)) | (1 << (PhpParser.EndIf - 43)) | (1 << (PhpParser.EndSwitch - 43)) | (1 << (PhpParser.EndWhile - 43)) | (1 << (PhpParser.Eval - 43)) | (1 << (PhpParser.Exit - 43)) | (1 << (PhpParser.Extends - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (PhpParser.Final - 75)) | (1 << (PhpParser.Finally - 75)) | (1 << (PhpParser.FloatCast - 75)) | (1 << (PhpParser.For - 75)) | (1 << (PhpParser.Foreach - 75)) | (1 << (PhpParser.Function - 75)) | (1 << (PhpParser.Global - 75)) | (1 << (PhpParser.Goto - 75)) | (1 << (PhpParser.If - 75)) | (1 << (PhpParser.Implements - 75)) | (1 << (PhpParser.Import - 75)) | (1 << (PhpParser.Include - 75)) | (1 << (PhpParser.IncludeOnce - 75)) | (1 << (PhpParser.InstanceOf - 75)) | (1 << (PhpParser.InsteadOf - 75)) | (1 << (PhpParser.Int8Cast - 75)) | (1 << (PhpParser.Int16Cast - 75)) | (1 << (PhpParser.Int64Type - 75)) | (1 << (PhpParser.IntType - 75)) | (1 << (PhpParser.Interface - 75)) | (1 << (PhpParser.IsSet - 75)) | (1 << (PhpParser.List - 75)) | (1 << (PhpParser.LogicalAnd - 75)) | (1 << (PhpParser.LogicalOr - 75)) | (1 << (PhpParser.LogicalXor - 75)) | (1 << (PhpParser.Namespace - 75)) | (1 << (PhpParser.New - 75)) | (1 << (PhpParser.Null - 75)) | (1 << (PhpParser.ObjectType - 75)) | (1 << (PhpParser.Parent_ - 75)) | (1 << (PhpParser.Partial - 75)) | (1 << (PhpParser.Print - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (PhpParser.Private - 107)) | (1 << (PhpParser.Protected - 107)) | (1 << (PhpParser.Public - 107)) | (1 << (PhpParser.Require - 107)) | (1 << (PhpParser.RequireOnce - 107)) | (1 << (PhpParser.Resource - 107)) | (1 << (PhpParser.Return - 107)) | (1 << (PhpParser.Static - 107)) | (1 << (PhpParser.StringType - 107)) | (1 << (PhpParser.Switch - 107)) | (1 << (PhpParser.Throw - 107)) | (1 << (PhpParser.Trait - 107)) | (1 << (PhpParser.Try - 107)) | (1 << (PhpParser.Typeof - 107)) | (1 << (PhpParser.UintCast - 107)) | (1 << (PhpParser.UnicodeCast - 107)) | (1 << (PhpParser.Unset - 107)) | (1 << (PhpParser.Use - 107)) | (1 << (PhpParser.Var - 107)) | (1 << (PhpParser.While - 107)) | (1 << (PhpParser.Yield - 107)) | (1 << (PhpParser.From - 107)) | (1 << (PhpParser.LambdaFn - 107)) | (1 << (PhpParser.Get - 107)) | (1 << (PhpParser.Set - 107)) | (1 << (PhpParser.Call - 107)) | (1 << (PhpParser.CallStatic - 107)) | (1 << (PhpParser.Constructor - 107)) | (1 << (PhpParser.Destruct - 107)) | (1 << (PhpParser.Wakeup - 107)) | (1 << (PhpParser.Sleep - 107)) | (1 << (PhpParser.Autoload - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (PhpParser.IsSet__ - 139)) | (1 << (PhpParser.Unset__ - 139)) | (1 << (PhpParser.ToString__ - 139)) | (1 << (PhpParser.Invoke - 139)) | (1 << (PhpParser.SetState - 139)) | (1 << (PhpParser.Clone__ - 139)) | (1 << (PhpParser.DebugInfo - 139)) | (1 << (PhpParser.Namespace__ - 139)) | (1 << (PhpParser.Class__ - 139)) | (1 << (PhpParser.Traic__ - 139)) | (1 << (PhpParser.Function__ - 139)) | (1 << (PhpParser.Method__ - 139)) | (1 << (PhpParser.Line__ - 139)) | (1 << (PhpParser.File__ - 139)) | (1 << (PhpParser.Dir__ - 139)) | (1 << (PhpParser.Inc - 139)) | (1 << (PhpParser.Dec - 139)))) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & ((1 << (PhpParser.NamespaceSeparator - 187)) | (1 << (PhpParser.Bang - 187)) | (1 << (PhpParser.Plus - 187)) | (1 << (PhpParser.Minus - 187)) | (1 << (PhpParser.Tilde - 187)) | (1 << (PhpParser.SuppressWarnings - 187)) | (1 << (PhpParser.Dollar - 187)) | (1 << (PhpParser.OpenRoundBracket - 187)) | (1 << (PhpParser.OpenSquareBracket - 187)) | (1 << (PhpParser.VarName - 187)) | (1 << (PhpParser.Label - 187)))) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & ((1 << (PhpParser.Octal - 219)) | (1 << (PhpParser.Decimal - 219)) | (1 << (PhpParser.Real - 219)) | (1 << (PhpParser.Hex - 219)) | (1 << (PhpParser.Binary - 219)) | (1 << (PhpParser.BackQuoteString - 219)) | (1 << (PhpParser.SingleQuoteString - 219)) | (1 << (PhpParser.DoubleQuote - 219)) | (1 << (PhpParser.StartNowDoc - 219)) | (1 << (PhpParser.StartHereDoc - 219)))) !== 0)) {
                    {
                        this.state = 760;
                        this.expression(0);
                    }
                }
                this.state = 763;
                this.match(PhpParser.SemiColon);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.continueStatement = function () {
        var _localctx = new ContinueStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, PhpParser.RULE_continueStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 765;
                this.match(PhpParser.Continue);
                this.state = 767;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (PhpParser.Abstract - 43)) | (1 << (PhpParser.Array - 43)) | (1 << (PhpParser.As - 43)) | (1 << (PhpParser.BinaryCast - 43)) | (1 << (PhpParser.BoolType - 43)) | (1 << (PhpParser.BooleanConstant - 43)) | (1 << (PhpParser.Break - 43)) | (1 << (PhpParser.Callable - 43)) | (1 << (PhpParser.Case - 43)) | (1 << (PhpParser.Catch - 43)) | (1 << (PhpParser.Class - 43)) | (1 << (PhpParser.Clone - 43)) | (1 << (PhpParser.Const - 43)) | (1 << (PhpParser.Continue - 43)) | (1 << (PhpParser.Declare - 43)) | (1 << (PhpParser.Default - 43)) | (1 << (PhpParser.Do - 43)) | (1 << (PhpParser.DoubleCast - 43)) | (1 << (PhpParser.DoubleType - 43)) | (1 << (PhpParser.Echo - 43)) | (1 << (PhpParser.Else - 43)) | (1 << (PhpParser.ElseIf - 43)) | (1 << (PhpParser.Empty - 43)) | (1 << (PhpParser.EndDeclare - 43)) | (1 << (PhpParser.EndFor - 43)) | (1 << (PhpParser.EndForeach - 43)) | (1 << (PhpParser.EndIf - 43)) | (1 << (PhpParser.EndSwitch - 43)) | (1 << (PhpParser.EndWhile - 43)) | (1 << (PhpParser.Eval - 43)) | (1 << (PhpParser.Exit - 43)) | (1 << (PhpParser.Extends - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (PhpParser.Final - 75)) | (1 << (PhpParser.Finally - 75)) | (1 << (PhpParser.FloatCast - 75)) | (1 << (PhpParser.For - 75)) | (1 << (PhpParser.Foreach - 75)) | (1 << (PhpParser.Function - 75)) | (1 << (PhpParser.Global - 75)) | (1 << (PhpParser.Goto - 75)) | (1 << (PhpParser.If - 75)) | (1 << (PhpParser.Implements - 75)) | (1 << (PhpParser.Import - 75)) | (1 << (PhpParser.Include - 75)) | (1 << (PhpParser.IncludeOnce - 75)) | (1 << (PhpParser.InstanceOf - 75)) | (1 << (PhpParser.InsteadOf - 75)) | (1 << (PhpParser.Int8Cast - 75)) | (1 << (PhpParser.Int16Cast - 75)) | (1 << (PhpParser.Int64Type - 75)) | (1 << (PhpParser.IntType - 75)) | (1 << (PhpParser.Interface - 75)) | (1 << (PhpParser.IsSet - 75)) | (1 << (PhpParser.List - 75)) | (1 << (PhpParser.LogicalAnd - 75)) | (1 << (PhpParser.LogicalOr - 75)) | (1 << (PhpParser.LogicalXor - 75)) | (1 << (PhpParser.Namespace - 75)) | (1 << (PhpParser.New - 75)) | (1 << (PhpParser.Null - 75)) | (1 << (PhpParser.ObjectType - 75)) | (1 << (PhpParser.Parent_ - 75)) | (1 << (PhpParser.Partial - 75)) | (1 << (PhpParser.Print - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (PhpParser.Private - 107)) | (1 << (PhpParser.Protected - 107)) | (1 << (PhpParser.Public - 107)) | (1 << (PhpParser.Require - 107)) | (1 << (PhpParser.RequireOnce - 107)) | (1 << (PhpParser.Resource - 107)) | (1 << (PhpParser.Return - 107)) | (1 << (PhpParser.Static - 107)) | (1 << (PhpParser.StringType - 107)) | (1 << (PhpParser.Switch - 107)) | (1 << (PhpParser.Throw - 107)) | (1 << (PhpParser.Trait - 107)) | (1 << (PhpParser.Try - 107)) | (1 << (PhpParser.Typeof - 107)) | (1 << (PhpParser.UintCast - 107)) | (1 << (PhpParser.UnicodeCast - 107)) | (1 << (PhpParser.Unset - 107)) | (1 << (PhpParser.Use - 107)) | (1 << (PhpParser.Var - 107)) | (1 << (PhpParser.While - 107)) | (1 << (PhpParser.Yield - 107)) | (1 << (PhpParser.From - 107)) | (1 << (PhpParser.LambdaFn - 107)) | (1 << (PhpParser.Get - 107)) | (1 << (PhpParser.Set - 107)) | (1 << (PhpParser.Call - 107)) | (1 << (PhpParser.CallStatic - 107)) | (1 << (PhpParser.Constructor - 107)) | (1 << (PhpParser.Destruct - 107)) | (1 << (PhpParser.Wakeup - 107)) | (1 << (PhpParser.Sleep - 107)) | (1 << (PhpParser.Autoload - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (PhpParser.IsSet__ - 139)) | (1 << (PhpParser.Unset__ - 139)) | (1 << (PhpParser.ToString__ - 139)) | (1 << (PhpParser.Invoke - 139)) | (1 << (PhpParser.SetState - 139)) | (1 << (PhpParser.Clone__ - 139)) | (1 << (PhpParser.DebugInfo - 139)) | (1 << (PhpParser.Namespace__ - 139)) | (1 << (PhpParser.Class__ - 139)) | (1 << (PhpParser.Traic__ - 139)) | (1 << (PhpParser.Function__ - 139)) | (1 << (PhpParser.Method__ - 139)) | (1 << (PhpParser.Line__ - 139)) | (1 << (PhpParser.File__ - 139)) | (1 << (PhpParser.Dir__ - 139)) | (1 << (PhpParser.Inc - 139)) | (1 << (PhpParser.Dec - 139)))) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & ((1 << (PhpParser.NamespaceSeparator - 187)) | (1 << (PhpParser.Bang - 187)) | (1 << (PhpParser.Plus - 187)) | (1 << (PhpParser.Minus - 187)) | (1 << (PhpParser.Tilde - 187)) | (1 << (PhpParser.SuppressWarnings - 187)) | (1 << (PhpParser.Dollar - 187)) | (1 << (PhpParser.OpenRoundBracket - 187)) | (1 << (PhpParser.OpenSquareBracket - 187)) | (1 << (PhpParser.VarName - 187)) | (1 << (PhpParser.Label - 187)))) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & ((1 << (PhpParser.Octal - 219)) | (1 << (PhpParser.Decimal - 219)) | (1 << (PhpParser.Real - 219)) | (1 << (PhpParser.Hex - 219)) | (1 << (PhpParser.Binary - 219)) | (1 << (PhpParser.BackQuoteString - 219)) | (1 << (PhpParser.SingleQuoteString - 219)) | (1 << (PhpParser.DoubleQuote - 219)) | (1 << (PhpParser.StartNowDoc - 219)) | (1 << (PhpParser.StartHereDoc - 219)))) !== 0)) {
                    {
                        this.state = 766;
                        this.expression(0);
                    }
                }
                this.state = 769;
                this.match(PhpParser.SemiColon);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.returnStatement = function () {
        var _localctx = new ReturnStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, PhpParser.RULE_returnStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 771;
                this.match(PhpParser.Return);
                this.state = 773;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (PhpParser.Abstract - 43)) | (1 << (PhpParser.Array - 43)) | (1 << (PhpParser.As - 43)) | (1 << (PhpParser.BinaryCast - 43)) | (1 << (PhpParser.BoolType - 43)) | (1 << (PhpParser.BooleanConstant - 43)) | (1 << (PhpParser.Break - 43)) | (1 << (PhpParser.Callable - 43)) | (1 << (PhpParser.Case - 43)) | (1 << (PhpParser.Catch - 43)) | (1 << (PhpParser.Class - 43)) | (1 << (PhpParser.Clone - 43)) | (1 << (PhpParser.Const - 43)) | (1 << (PhpParser.Continue - 43)) | (1 << (PhpParser.Declare - 43)) | (1 << (PhpParser.Default - 43)) | (1 << (PhpParser.Do - 43)) | (1 << (PhpParser.DoubleCast - 43)) | (1 << (PhpParser.DoubleType - 43)) | (1 << (PhpParser.Echo - 43)) | (1 << (PhpParser.Else - 43)) | (1 << (PhpParser.ElseIf - 43)) | (1 << (PhpParser.Empty - 43)) | (1 << (PhpParser.EndDeclare - 43)) | (1 << (PhpParser.EndFor - 43)) | (1 << (PhpParser.EndForeach - 43)) | (1 << (PhpParser.EndIf - 43)) | (1 << (PhpParser.EndSwitch - 43)) | (1 << (PhpParser.EndWhile - 43)) | (1 << (PhpParser.Eval - 43)) | (1 << (PhpParser.Exit - 43)) | (1 << (PhpParser.Extends - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (PhpParser.Final - 75)) | (1 << (PhpParser.Finally - 75)) | (1 << (PhpParser.FloatCast - 75)) | (1 << (PhpParser.For - 75)) | (1 << (PhpParser.Foreach - 75)) | (1 << (PhpParser.Function - 75)) | (1 << (PhpParser.Global - 75)) | (1 << (PhpParser.Goto - 75)) | (1 << (PhpParser.If - 75)) | (1 << (PhpParser.Implements - 75)) | (1 << (PhpParser.Import - 75)) | (1 << (PhpParser.Include - 75)) | (1 << (PhpParser.IncludeOnce - 75)) | (1 << (PhpParser.InstanceOf - 75)) | (1 << (PhpParser.InsteadOf - 75)) | (1 << (PhpParser.Int8Cast - 75)) | (1 << (PhpParser.Int16Cast - 75)) | (1 << (PhpParser.Int64Type - 75)) | (1 << (PhpParser.IntType - 75)) | (1 << (PhpParser.Interface - 75)) | (1 << (PhpParser.IsSet - 75)) | (1 << (PhpParser.List - 75)) | (1 << (PhpParser.LogicalAnd - 75)) | (1 << (PhpParser.LogicalOr - 75)) | (1 << (PhpParser.LogicalXor - 75)) | (1 << (PhpParser.Namespace - 75)) | (1 << (PhpParser.New - 75)) | (1 << (PhpParser.Null - 75)) | (1 << (PhpParser.ObjectType - 75)) | (1 << (PhpParser.Parent_ - 75)) | (1 << (PhpParser.Partial - 75)) | (1 << (PhpParser.Print - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (PhpParser.Private - 107)) | (1 << (PhpParser.Protected - 107)) | (1 << (PhpParser.Public - 107)) | (1 << (PhpParser.Require - 107)) | (1 << (PhpParser.RequireOnce - 107)) | (1 << (PhpParser.Resource - 107)) | (1 << (PhpParser.Return - 107)) | (1 << (PhpParser.Static - 107)) | (1 << (PhpParser.StringType - 107)) | (1 << (PhpParser.Switch - 107)) | (1 << (PhpParser.Throw - 107)) | (1 << (PhpParser.Trait - 107)) | (1 << (PhpParser.Try - 107)) | (1 << (PhpParser.Typeof - 107)) | (1 << (PhpParser.UintCast - 107)) | (1 << (PhpParser.UnicodeCast - 107)) | (1 << (PhpParser.Unset - 107)) | (1 << (PhpParser.Use - 107)) | (1 << (PhpParser.Var - 107)) | (1 << (PhpParser.While - 107)) | (1 << (PhpParser.Yield - 107)) | (1 << (PhpParser.From - 107)) | (1 << (PhpParser.LambdaFn - 107)) | (1 << (PhpParser.Get - 107)) | (1 << (PhpParser.Set - 107)) | (1 << (PhpParser.Call - 107)) | (1 << (PhpParser.CallStatic - 107)) | (1 << (PhpParser.Constructor - 107)) | (1 << (PhpParser.Destruct - 107)) | (1 << (PhpParser.Wakeup - 107)) | (1 << (PhpParser.Sleep - 107)) | (1 << (PhpParser.Autoload - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (PhpParser.IsSet__ - 139)) | (1 << (PhpParser.Unset__ - 139)) | (1 << (PhpParser.ToString__ - 139)) | (1 << (PhpParser.Invoke - 139)) | (1 << (PhpParser.SetState - 139)) | (1 << (PhpParser.Clone__ - 139)) | (1 << (PhpParser.DebugInfo - 139)) | (1 << (PhpParser.Namespace__ - 139)) | (1 << (PhpParser.Class__ - 139)) | (1 << (PhpParser.Traic__ - 139)) | (1 << (PhpParser.Function__ - 139)) | (1 << (PhpParser.Method__ - 139)) | (1 << (PhpParser.Line__ - 139)) | (1 << (PhpParser.File__ - 139)) | (1 << (PhpParser.Dir__ - 139)) | (1 << (PhpParser.Inc - 139)) | (1 << (PhpParser.Dec - 139)))) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & ((1 << (PhpParser.NamespaceSeparator - 187)) | (1 << (PhpParser.Bang - 187)) | (1 << (PhpParser.Plus - 187)) | (1 << (PhpParser.Minus - 187)) | (1 << (PhpParser.Tilde - 187)) | (1 << (PhpParser.SuppressWarnings - 187)) | (1 << (PhpParser.Dollar - 187)) | (1 << (PhpParser.OpenRoundBracket - 187)) | (1 << (PhpParser.OpenSquareBracket - 187)) | (1 << (PhpParser.VarName - 187)) | (1 << (PhpParser.Label - 187)))) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & ((1 << (PhpParser.Octal - 219)) | (1 << (PhpParser.Decimal - 219)) | (1 << (PhpParser.Real - 219)) | (1 << (PhpParser.Hex - 219)) | (1 << (PhpParser.Binary - 219)) | (1 << (PhpParser.BackQuoteString - 219)) | (1 << (PhpParser.SingleQuoteString - 219)) | (1 << (PhpParser.DoubleQuote - 219)) | (1 << (PhpParser.StartNowDoc - 219)) | (1 << (PhpParser.StartHereDoc - 219)))) !== 0)) {
                    {
                        this.state = 772;
                        this.expression(0);
                    }
                }
                this.state = 775;
                this.match(PhpParser.SemiColon);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.expressionStatement = function () {
        var _localctx = new ExpressionStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, PhpParser.RULE_expressionStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 777;
                this.expression(0);
                this.state = 778;
                this.match(PhpParser.SemiColon);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.unsetStatement = function () {
        var _localctx = new UnsetStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, PhpParser.RULE_unsetStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 780;
                this.match(PhpParser.Unset);
                this.state = 781;
                this.match(PhpParser.OpenRoundBracket);
                this.state = 782;
                this.chainList();
                this.state = 783;
                this.match(PhpParser.CloseRoundBracket);
                this.state = 784;
                this.match(PhpParser.SemiColon);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.foreachStatement = function () {
        var _localctx = new ForeachStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, PhpParser.RULE_foreachStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 786;
                this.match(PhpParser.Foreach);
                this.state = 825;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 72, this._ctx)) {
                    case 1:
                        {
                            this.state = 787;
                            this.match(PhpParser.OpenRoundBracket);
                            this.state = 788;
                            this.chain();
                            this.state = 789;
                            this.match(PhpParser.As);
                            this.state = 791;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === PhpParser.Ampersand) {
                                {
                                    this.state = 790;
                                    this.match(PhpParser.Ampersand);
                                }
                            }
                            this.state = 793;
                            this.assignable();
                            this.state = 799;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === PhpParser.DoubleArrow) {
                                {
                                    this.state = 794;
                                    this.match(PhpParser.DoubleArrow);
                                    this.state = 796;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === PhpParser.Ampersand) {
                                        {
                                            this.state = 795;
                                            this.match(PhpParser.Ampersand);
                                        }
                                    }
                                    this.state = 798;
                                    this.chain();
                                }
                            }
                            this.state = 801;
                            this.match(PhpParser.CloseRoundBracket);
                        }
                        break;
                    case 2:
                        {
                            this.state = 803;
                            this.match(PhpParser.OpenRoundBracket);
                            this.state = 804;
                            this.expression(0);
                            this.state = 805;
                            this.match(PhpParser.As);
                            this.state = 806;
                            this.assignable();
                            this.state = 812;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === PhpParser.DoubleArrow) {
                                {
                                    this.state = 807;
                                    this.match(PhpParser.DoubleArrow);
                                    this.state = 809;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === PhpParser.Ampersand) {
                                        {
                                            this.state = 808;
                                            this.match(PhpParser.Ampersand);
                                        }
                                    }
                                    this.state = 811;
                                    this.chain();
                                }
                            }
                            this.state = 814;
                            this.match(PhpParser.CloseRoundBracket);
                        }
                        break;
                    case 3:
                        {
                            this.state = 816;
                            this.match(PhpParser.OpenRoundBracket);
                            this.state = 817;
                            this.chain();
                            this.state = 818;
                            this.match(PhpParser.As);
                            this.state = 819;
                            this.match(PhpParser.List);
                            this.state = 820;
                            this.match(PhpParser.OpenRoundBracket);
                            this.state = 821;
                            this.assignmentList();
                            this.state = 822;
                            this.match(PhpParser.CloseRoundBracket);
                            this.state = 823;
                            this.match(PhpParser.CloseRoundBracket);
                        }
                        break;
                }
                this.state = 833;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PhpParser.HtmlText:
                    case PhpParser.XmlStart:
                    case PhpParser.HtmlScriptOpen:
                    case PhpParser.HtmlStyleOpen:
                    case PhpParser.HtmlDtd:
                    case PhpParser.HtmlOpen:
                    case PhpParser.HtmlClose:
                    case PhpParser.HtmlSlashClose:
                    case PhpParser.HtmlSlash:
                    case PhpParser.HtmlEquals:
                    case PhpParser.HtmlStartQuoteString:
                    case PhpParser.HtmlStartDoubleQuoteString:
                    case PhpParser.HtmlHex:
                    case PhpParser.HtmlDecimal:
                    case PhpParser.HtmlName:
                    case PhpParser.HtmlEndQuoteString:
                    case PhpParser.HtmlQuoteString:
                    case PhpParser.HtmlEndDoubleQuoteString:
                    case PhpParser.HtmlDoubleQuoteString:
                    case PhpParser.ScriptText:
                    case PhpParser.ScriptClose:
                    case PhpParser.StyleBody:
                    case PhpParser.Abstract:
                    case PhpParser.Array:
                    case PhpParser.As:
                    case PhpParser.BinaryCast:
                    case PhpParser.BoolType:
                    case PhpParser.BooleanConstant:
                    case PhpParser.Break:
                    case PhpParser.Callable:
                    case PhpParser.Case:
                    case PhpParser.Catch:
                    case PhpParser.Class:
                    case PhpParser.Clone:
                    case PhpParser.Const:
                    case PhpParser.Continue:
                    case PhpParser.Declare:
                    case PhpParser.Default:
                    case PhpParser.Do:
                    case PhpParser.DoubleCast:
                    case PhpParser.DoubleType:
                    case PhpParser.Echo:
                    case PhpParser.Else:
                    case PhpParser.ElseIf:
                    case PhpParser.Empty:
                    case PhpParser.EndDeclare:
                    case PhpParser.EndFor:
                    case PhpParser.EndForeach:
                    case PhpParser.EndIf:
                    case PhpParser.EndSwitch:
                    case PhpParser.EndWhile:
                    case PhpParser.Eval:
                    case PhpParser.Exit:
                    case PhpParser.Extends:
                    case PhpParser.Final:
                    case PhpParser.Finally:
                    case PhpParser.FloatCast:
                    case PhpParser.For:
                    case PhpParser.Foreach:
                    case PhpParser.Function:
                    case PhpParser.Global:
                    case PhpParser.Goto:
                    case PhpParser.If:
                    case PhpParser.Implements:
                    case PhpParser.Import:
                    case PhpParser.Include:
                    case PhpParser.IncludeOnce:
                    case PhpParser.InstanceOf:
                    case PhpParser.InsteadOf:
                    case PhpParser.Int8Cast:
                    case PhpParser.Int16Cast:
                    case PhpParser.Int64Type:
                    case PhpParser.IntType:
                    case PhpParser.Interface:
                    case PhpParser.IsSet:
                    case PhpParser.List:
                    case PhpParser.LogicalAnd:
                    case PhpParser.LogicalOr:
                    case PhpParser.LogicalXor:
                    case PhpParser.Namespace:
                    case PhpParser.New:
                    case PhpParser.Null:
                    case PhpParser.ObjectType:
                    case PhpParser.Parent_:
                    case PhpParser.Partial:
                    case PhpParser.Print:
                    case PhpParser.Private:
                    case PhpParser.Protected:
                    case PhpParser.Public:
                    case PhpParser.Require:
                    case PhpParser.RequireOnce:
                    case PhpParser.Resource:
                    case PhpParser.Return:
                    case PhpParser.Static:
                    case PhpParser.StringType:
                    case PhpParser.Switch:
                    case PhpParser.Throw:
                    case PhpParser.Trait:
                    case PhpParser.Try:
                    case PhpParser.Typeof:
                    case PhpParser.UintCast:
                    case PhpParser.UnicodeCast:
                    case PhpParser.Unset:
                    case PhpParser.Use:
                    case PhpParser.Var:
                    case PhpParser.While:
                    case PhpParser.Yield:
                    case PhpParser.From:
                    case PhpParser.LambdaFn:
                    case PhpParser.Get:
                    case PhpParser.Set:
                    case PhpParser.Call:
                    case PhpParser.CallStatic:
                    case PhpParser.Constructor:
                    case PhpParser.Destruct:
                    case PhpParser.Wakeup:
                    case PhpParser.Sleep:
                    case PhpParser.Autoload:
                    case PhpParser.IsSet__:
                    case PhpParser.Unset__:
                    case PhpParser.ToString__:
                    case PhpParser.Invoke:
                    case PhpParser.SetState:
                    case PhpParser.Clone__:
                    case PhpParser.DebugInfo:
                    case PhpParser.Namespace__:
                    case PhpParser.Class__:
                    case PhpParser.Traic__:
                    case PhpParser.Function__:
                    case PhpParser.Method__:
                    case PhpParser.Line__:
                    case PhpParser.File__:
                    case PhpParser.Dir__:
                    case PhpParser.Inc:
                    case PhpParser.Dec:
                    case PhpParser.NamespaceSeparator:
                    case PhpParser.Bang:
                    case PhpParser.Plus:
                    case PhpParser.Minus:
                    case PhpParser.Tilde:
                    case PhpParser.SuppressWarnings:
                    case PhpParser.Dollar:
                    case PhpParser.OpenRoundBracket:
                    case PhpParser.OpenSquareBracket:
                    case PhpParser.OpenCurlyBracket:
                    case PhpParser.SemiColon:
                    case PhpParser.VarName:
                    case PhpParser.Label:
                    case PhpParser.Octal:
                    case PhpParser.Decimal:
                    case PhpParser.Real:
                    case PhpParser.Hex:
                    case PhpParser.Binary:
                    case PhpParser.BackQuoteString:
                    case PhpParser.SingleQuoteString:
                    case PhpParser.DoubleQuote:
                    case PhpParser.StartNowDoc:
                    case PhpParser.StartHereDoc:
                        {
                            this.state = 827;
                            this.statement();
                        }
                        break;
                    case PhpParser.Colon:
                        {
                            this.state = 828;
                            this.match(PhpParser.Colon);
                            this.state = 829;
                            this.innerStatementList();
                            this.state = 830;
                            this.match(PhpParser.EndForeach);
                            this.state = 831;
                            this.match(PhpParser.SemiColon);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.tryCatchFinally = function () {
        var _localctx = new TryCatchFinallyContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, PhpParser.RULE_tryCatchFinally);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 835;
                this.match(PhpParser.Try);
                this.state = 836;
                this.blockStatement();
                this.state = 852;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 77, this._ctx)) {
                    case 1:
                        {
                            this.state = 838;
                            this._errHandler.sync(this);
                            _alt = 1;
                            do {
                                switch (_alt) {
                                    case 1:
                                        {
                                            {
                                                this.state = 837;
                                                this.catchClause();
                                            }
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                                this.state = 840;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
                            } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                            this.state = 843;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 75, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 842;
                                        this.finallyStatement();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 848;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === PhpParser.Catch) {
                                {
                                    {
                                        this.state = 845;
                                        this.catchClause();
                                    }
                                }
                                this.state = 850;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 851;
                            this.finallyStatement();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.catchClause = function () {
        var _localctx = new CatchClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, PhpParser.RULE_catchClause);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 854;
                this.match(PhpParser.Catch);
                this.state = 855;
                this.match(PhpParser.OpenRoundBracket);
                this.state = 856;
                this.qualifiedStaticTypeRef();
                this.state = 861;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PhpParser.Pipe) {
                    {
                        {
                            this.state = 857;
                            this.match(PhpParser.Pipe);
                            this.state = 858;
                            this.qualifiedStaticTypeRef();
                        }
                    }
                    this.state = 863;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 864;
                this.match(PhpParser.VarName);
                this.state = 865;
                this.match(PhpParser.CloseRoundBracket);
                this.state = 866;
                this.blockStatement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.finallyStatement = function () {
        var _localctx = new FinallyStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, PhpParser.RULE_finallyStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 868;
                this.match(PhpParser.Finally);
                this.state = 869;
                this.blockStatement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.throwStatement = function () {
        var _localctx = new ThrowStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, PhpParser.RULE_throwStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 871;
                this.match(PhpParser.Throw);
                this.state = 872;
                this.expression(0);
                this.state = 873;
                this.match(PhpParser.SemiColon);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.gotoStatement = function () {
        var _localctx = new GotoStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, PhpParser.RULE_gotoStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 875;
                this.match(PhpParser.Goto);
                this.state = 876;
                this.identifier();
                this.state = 877;
                this.match(PhpParser.SemiColon);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.declareStatement = function () {
        var _localctx = new DeclareStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, PhpParser.RULE_declareStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 879;
                this.match(PhpParser.Declare);
                this.state = 880;
                this.match(PhpParser.OpenRoundBracket);
                this.state = 881;
                this.declareList();
                this.state = 882;
                this.match(PhpParser.CloseRoundBracket);
                this.state = 889;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PhpParser.HtmlText:
                    case PhpParser.XmlStart:
                    case PhpParser.HtmlScriptOpen:
                    case PhpParser.HtmlStyleOpen:
                    case PhpParser.HtmlDtd:
                    case PhpParser.HtmlOpen:
                    case PhpParser.HtmlClose:
                    case PhpParser.HtmlSlashClose:
                    case PhpParser.HtmlSlash:
                    case PhpParser.HtmlEquals:
                    case PhpParser.HtmlStartQuoteString:
                    case PhpParser.HtmlStartDoubleQuoteString:
                    case PhpParser.HtmlHex:
                    case PhpParser.HtmlDecimal:
                    case PhpParser.HtmlName:
                    case PhpParser.HtmlEndQuoteString:
                    case PhpParser.HtmlQuoteString:
                    case PhpParser.HtmlEndDoubleQuoteString:
                    case PhpParser.HtmlDoubleQuoteString:
                    case PhpParser.ScriptText:
                    case PhpParser.ScriptClose:
                    case PhpParser.StyleBody:
                    case PhpParser.Abstract:
                    case PhpParser.Array:
                    case PhpParser.As:
                    case PhpParser.BinaryCast:
                    case PhpParser.BoolType:
                    case PhpParser.BooleanConstant:
                    case PhpParser.Break:
                    case PhpParser.Callable:
                    case PhpParser.Case:
                    case PhpParser.Catch:
                    case PhpParser.Class:
                    case PhpParser.Clone:
                    case PhpParser.Const:
                    case PhpParser.Continue:
                    case PhpParser.Declare:
                    case PhpParser.Default:
                    case PhpParser.Do:
                    case PhpParser.DoubleCast:
                    case PhpParser.DoubleType:
                    case PhpParser.Echo:
                    case PhpParser.Else:
                    case PhpParser.ElseIf:
                    case PhpParser.Empty:
                    case PhpParser.EndDeclare:
                    case PhpParser.EndFor:
                    case PhpParser.EndForeach:
                    case PhpParser.EndIf:
                    case PhpParser.EndSwitch:
                    case PhpParser.EndWhile:
                    case PhpParser.Eval:
                    case PhpParser.Exit:
                    case PhpParser.Extends:
                    case PhpParser.Final:
                    case PhpParser.Finally:
                    case PhpParser.FloatCast:
                    case PhpParser.For:
                    case PhpParser.Foreach:
                    case PhpParser.Function:
                    case PhpParser.Global:
                    case PhpParser.Goto:
                    case PhpParser.If:
                    case PhpParser.Implements:
                    case PhpParser.Import:
                    case PhpParser.Include:
                    case PhpParser.IncludeOnce:
                    case PhpParser.InstanceOf:
                    case PhpParser.InsteadOf:
                    case PhpParser.Int8Cast:
                    case PhpParser.Int16Cast:
                    case PhpParser.Int64Type:
                    case PhpParser.IntType:
                    case PhpParser.Interface:
                    case PhpParser.IsSet:
                    case PhpParser.List:
                    case PhpParser.LogicalAnd:
                    case PhpParser.LogicalOr:
                    case PhpParser.LogicalXor:
                    case PhpParser.Namespace:
                    case PhpParser.New:
                    case PhpParser.Null:
                    case PhpParser.ObjectType:
                    case PhpParser.Parent_:
                    case PhpParser.Partial:
                    case PhpParser.Print:
                    case PhpParser.Private:
                    case PhpParser.Protected:
                    case PhpParser.Public:
                    case PhpParser.Require:
                    case PhpParser.RequireOnce:
                    case PhpParser.Resource:
                    case PhpParser.Return:
                    case PhpParser.Static:
                    case PhpParser.StringType:
                    case PhpParser.Switch:
                    case PhpParser.Throw:
                    case PhpParser.Trait:
                    case PhpParser.Try:
                    case PhpParser.Typeof:
                    case PhpParser.UintCast:
                    case PhpParser.UnicodeCast:
                    case PhpParser.Unset:
                    case PhpParser.Use:
                    case PhpParser.Var:
                    case PhpParser.While:
                    case PhpParser.Yield:
                    case PhpParser.From:
                    case PhpParser.LambdaFn:
                    case PhpParser.Get:
                    case PhpParser.Set:
                    case PhpParser.Call:
                    case PhpParser.CallStatic:
                    case PhpParser.Constructor:
                    case PhpParser.Destruct:
                    case PhpParser.Wakeup:
                    case PhpParser.Sleep:
                    case PhpParser.Autoload:
                    case PhpParser.IsSet__:
                    case PhpParser.Unset__:
                    case PhpParser.ToString__:
                    case PhpParser.Invoke:
                    case PhpParser.SetState:
                    case PhpParser.Clone__:
                    case PhpParser.DebugInfo:
                    case PhpParser.Namespace__:
                    case PhpParser.Class__:
                    case PhpParser.Traic__:
                    case PhpParser.Function__:
                    case PhpParser.Method__:
                    case PhpParser.Line__:
                    case PhpParser.File__:
                    case PhpParser.Dir__:
                    case PhpParser.Inc:
                    case PhpParser.Dec:
                    case PhpParser.NamespaceSeparator:
                    case PhpParser.Bang:
                    case PhpParser.Plus:
                    case PhpParser.Minus:
                    case PhpParser.Tilde:
                    case PhpParser.SuppressWarnings:
                    case PhpParser.Dollar:
                    case PhpParser.OpenRoundBracket:
                    case PhpParser.OpenSquareBracket:
                    case PhpParser.OpenCurlyBracket:
                    case PhpParser.SemiColon:
                    case PhpParser.VarName:
                    case PhpParser.Label:
                    case PhpParser.Octal:
                    case PhpParser.Decimal:
                    case PhpParser.Real:
                    case PhpParser.Hex:
                    case PhpParser.Binary:
                    case PhpParser.BackQuoteString:
                    case PhpParser.SingleQuoteString:
                    case PhpParser.DoubleQuote:
                    case PhpParser.StartNowDoc:
                    case PhpParser.StartHereDoc:
                        {
                            this.state = 883;
                            this.statement();
                        }
                        break;
                    case PhpParser.Colon:
                        {
                            this.state = 884;
                            this.match(PhpParser.Colon);
                            this.state = 885;
                            this.innerStatementList();
                            this.state = 886;
                            this.match(PhpParser.EndDeclare);
                            this.state = 887;
                            this.match(PhpParser.SemiColon);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.inlineHtmlStatement = function () {
        var _localctx = new InlineHtmlStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, PhpParser.RULE_inlineHtmlStatement);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 892;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 891;
                                    this.inlineHtml();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 894;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.inlineHtml = function () {
        var _localctx = new InlineHtmlContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, PhpParser.RULE_inlineHtml);
        try {
            this.state = 898;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PhpParser.HtmlText:
                case PhpParser.XmlStart:
                case PhpParser.HtmlScriptOpen:
                case PhpParser.HtmlStyleOpen:
                case PhpParser.HtmlDtd:
                case PhpParser.HtmlOpen:
                case PhpParser.HtmlClose:
                case PhpParser.HtmlSlashClose:
                case PhpParser.HtmlSlash:
                case PhpParser.HtmlEquals:
                case PhpParser.HtmlStartQuoteString:
                case PhpParser.HtmlStartDoubleQuoteString:
                case PhpParser.HtmlHex:
                case PhpParser.HtmlDecimal:
                case PhpParser.HtmlName:
                case PhpParser.HtmlEndQuoteString:
                case PhpParser.HtmlQuoteString:
                case PhpParser.HtmlEndDoubleQuoteString:
                case PhpParser.HtmlDoubleQuoteString:
                case PhpParser.ScriptClose:
                case PhpParser.StyleBody:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 896;
                        this.htmlElements();
                    }
                    break;
                case PhpParser.ScriptText:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 897;
                        this.scriptTextPart();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.declareList = function () {
        var _localctx = new DeclareListContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, PhpParser.RULE_declareList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 900;
                this.identifierInititalizer();
                this.state = 905;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PhpParser.Comma) {
                    {
                        {
                            this.state = 901;
                            this.match(PhpParser.Comma);
                            this.state = 902;
                            this.identifierInititalizer();
                        }
                    }
                    this.state = 907;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.formalParameterList = function () {
        var _localctx = new FormalParameterListContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, PhpParser.RULE_formalParameterList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 909;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (PhpParser.Abstract - 43)) | (1 << (PhpParser.Array - 43)) | (1 << (PhpParser.As - 43)) | (1 << (PhpParser.BinaryCast - 43)) | (1 << (PhpParser.BoolType - 43)) | (1 << (PhpParser.BooleanConstant - 43)) | (1 << (PhpParser.Break - 43)) | (1 << (PhpParser.Callable - 43)) | (1 << (PhpParser.Case - 43)) | (1 << (PhpParser.Catch - 43)) | (1 << (PhpParser.Class - 43)) | (1 << (PhpParser.Clone - 43)) | (1 << (PhpParser.Const - 43)) | (1 << (PhpParser.Continue - 43)) | (1 << (PhpParser.Declare - 43)) | (1 << (PhpParser.Default - 43)) | (1 << (PhpParser.Do - 43)) | (1 << (PhpParser.DoubleCast - 43)) | (1 << (PhpParser.DoubleType - 43)) | (1 << (PhpParser.Echo - 43)) | (1 << (PhpParser.Else - 43)) | (1 << (PhpParser.ElseIf - 43)) | (1 << (PhpParser.Empty - 43)) | (1 << (PhpParser.EndDeclare - 43)) | (1 << (PhpParser.EndFor - 43)) | (1 << (PhpParser.EndForeach - 43)) | (1 << (PhpParser.EndIf - 43)) | (1 << (PhpParser.EndSwitch - 43)) | (1 << (PhpParser.EndWhile - 43)) | (1 << (PhpParser.Eval - 43)) | (1 << (PhpParser.Exit - 43)) | (1 << (PhpParser.Extends - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (PhpParser.Final - 75)) | (1 << (PhpParser.Finally - 75)) | (1 << (PhpParser.FloatCast - 75)) | (1 << (PhpParser.For - 75)) | (1 << (PhpParser.Foreach - 75)) | (1 << (PhpParser.Function - 75)) | (1 << (PhpParser.Global - 75)) | (1 << (PhpParser.Goto - 75)) | (1 << (PhpParser.If - 75)) | (1 << (PhpParser.Implements - 75)) | (1 << (PhpParser.Import - 75)) | (1 << (PhpParser.Include - 75)) | (1 << (PhpParser.IncludeOnce - 75)) | (1 << (PhpParser.InstanceOf - 75)) | (1 << (PhpParser.InsteadOf - 75)) | (1 << (PhpParser.Int8Cast - 75)) | (1 << (PhpParser.Int16Cast - 75)) | (1 << (PhpParser.Int64Type - 75)) | (1 << (PhpParser.IntType - 75)) | (1 << (PhpParser.Interface - 75)) | (1 << (PhpParser.IsSet - 75)) | (1 << (PhpParser.List - 75)) | (1 << (PhpParser.LogicalAnd - 75)) | (1 << (PhpParser.LogicalOr - 75)) | (1 << (PhpParser.LogicalXor - 75)) | (1 << (PhpParser.Namespace - 75)) | (1 << (PhpParser.New - 75)) | (1 << (PhpParser.Null - 75)) | (1 << (PhpParser.ObjectType - 75)) | (1 << (PhpParser.Parent_ - 75)) | (1 << (PhpParser.Partial - 75)) | (1 << (PhpParser.Print - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (PhpParser.Private - 107)) | (1 << (PhpParser.Protected - 107)) | (1 << (PhpParser.Public - 107)) | (1 << (PhpParser.Require - 107)) | (1 << (PhpParser.RequireOnce - 107)) | (1 << (PhpParser.Resource - 107)) | (1 << (PhpParser.Return - 107)) | (1 << (PhpParser.Static - 107)) | (1 << (PhpParser.StringType - 107)) | (1 << (PhpParser.Switch - 107)) | (1 << (PhpParser.Throw - 107)) | (1 << (PhpParser.Trait - 107)) | (1 << (PhpParser.Try - 107)) | (1 << (PhpParser.Typeof - 107)) | (1 << (PhpParser.UintCast - 107)) | (1 << (PhpParser.UnicodeCast - 107)) | (1 << (PhpParser.Unset - 107)) | (1 << (PhpParser.Use - 107)) | (1 << (PhpParser.Var - 107)) | (1 << (PhpParser.While - 107)) | (1 << (PhpParser.Yield - 107)) | (1 << (PhpParser.From - 107)) | (1 << (PhpParser.Get - 107)) | (1 << (PhpParser.Set - 107)) | (1 << (PhpParser.Call - 107)) | (1 << (PhpParser.CallStatic - 107)) | (1 << (PhpParser.Constructor - 107)) | (1 << (PhpParser.Destruct - 107)) | (1 << (PhpParser.Wakeup - 107)) | (1 << (PhpParser.Sleep - 107)) | (1 << (PhpParser.Autoload - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (PhpParser.IsSet__ - 139)) | (1 << (PhpParser.Unset__ - 139)) | (1 << (PhpParser.ToString__ - 139)) | (1 << (PhpParser.Invoke - 139)) | (1 << (PhpParser.SetState - 139)) | (1 << (PhpParser.Clone__ - 139)) | (1 << (PhpParser.DebugInfo - 139)) | (1 << (PhpParser.Namespace__ - 139)) | (1 << (PhpParser.Class__ - 139)) | (1 << (PhpParser.Traic__ - 139)) | (1 << (PhpParser.Function__ - 139)) | (1 << (PhpParser.Method__ - 139)) | (1 << (PhpParser.Line__ - 139)) | (1 << (PhpParser.File__ - 139)) | (1 << (PhpParser.Dir__ - 139)))) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & ((1 << (PhpParser.NamespaceSeparator - 187)) | (1 << (PhpParser.Ellipsis - 187)) | (1 << (PhpParser.Ampersand - 187)) | (1 << (PhpParser.QuestionMark - 187)) | (1 << (PhpParser.OpenSquareBracket - 187)) | (1 << (PhpParser.VarName - 187)) | (1 << (PhpParser.Label - 187)))) !== 0)) {
                    {
                        this.state = 908;
                        this.formalParameter();
                    }
                }
                this.state = 915;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PhpParser.Comma) {
                    {
                        {
                            this.state = 911;
                            this.match(PhpParser.Comma);
                            this.state = 912;
                            this.formalParameter();
                        }
                    }
                    this.state = 917;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.formalParameter = function () {
        var _localctx = new FormalParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, PhpParser.RULE_formalParameter);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 918;
                this.attributes();
                this.state = 920;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PhpParser.QuestionMark) {
                    {
                        this.state = 919;
                        this.match(PhpParser.QuestionMark);
                    }
                }
                this.state = 923;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (PhpParser.Abstract - 43)) | (1 << (PhpParser.Array - 43)) | (1 << (PhpParser.As - 43)) | (1 << (PhpParser.BinaryCast - 43)) | (1 << (PhpParser.BoolType - 43)) | (1 << (PhpParser.BooleanConstant - 43)) | (1 << (PhpParser.Break - 43)) | (1 << (PhpParser.Callable - 43)) | (1 << (PhpParser.Case - 43)) | (1 << (PhpParser.Catch - 43)) | (1 << (PhpParser.Class - 43)) | (1 << (PhpParser.Clone - 43)) | (1 << (PhpParser.Const - 43)) | (1 << (PhpParser.Continue - 43)) | (1 << (PhpParser.Declare - 43)) | (1 << (PhpParser.Default - 43)) | (1 << (PhpParser.Do - 43)) | (1 << (PhpParser.DoubleCast - 43)) | (1 << (PhpParser.DoubleType - 43)) | (1 << (PhpParser.Echo - 43)) | (1 << (PhpParser.Else - 43)) | (1 << (PhpParser.ElseIf - 43)) | (1 << (PhpParser.Empty - 43)) | (1 << (PhpParser.EndDeclare - 43)) | (1 << (PhpParser.EndFor - 43)) | (1 << (PhpParser.EndForeach - 43)) | (1 << (PhpParser.EndIf - 43)) | (1 << (PhpParser.EndSwitch - 43)) | (1 << (PhpParser.EndWhile - 43)) | (1 << (PhpParser.Eval - 43)) | (1 << (PhpParser.Exit - 43)) | (1 << (PhpParser.Extends - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (PhpParser.Final - 75)) | (1 << (PhpParser.Finally - 75)) | (1 << (PhpParser.FloatCast - 75)) | (1 << (PhpParser.For - 75)) | (1 << (PhpParser.Foreach - 75)) | (1 << (PhpParser.Function - 75)) | (1 << (PhpParser.Global - 75)) | (1 << (PhpParser.Goto - 75)) | (1 << (PhpParser.If - 75)) | (1 << (PhpParser.Implements - 75)) | (1 << (PhpParser.Import - 75)) | (1 << (PhpParser.Include - 75)) | (1 << (PhpParser.IncludeOnce - 75)) | (1 << (PhpParser.InstanceOf - 75)) | (1 << (PhpParser.InsteadOf - 75)) | (1 << (PhpParser.Int8Cast - 75)) | (1 << (PhpParser.Int16Cast - 75)) | (1 << (PhpParser.Int64Type - 75)) | (1 << (PhpParser.IntType - 75)) | (1 << (PhpParser.Interface - 75)) | (1 << (PhpParser.IsSet - 75)) | (1 << (PhpParser.List - 75)) | (1 << (PhpParser.LogicalAnd - 75)) | (1 << (PhpParser.LogicalOr - 75)) | (1 << (PhpParser.LogicalXor - 75)) | (1 << (PhpParser.Namespace - 75)) | (1 << (PhpParser.New - 75)) | (1 << (PhpParser.Null - 75)) | (1 << (PhpParser.ObjectType - 75)) | (1 << (PhpParser.Parent_ - 75)) | (1 << (PhpParser.Partial - 75)) | (1 << (PhpParser.Print - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (PhpParser.Private - 107)) | (1 << (PhpParser.Protected - 107)) | (1 << (PhpParser.Public - 107)) | (1 << (PhpParser.Require - 107)) | (1 << (PhpParser.RequireOnce - 107)) | (1 << (PhpParser.Resource - 107)) | (1 << (PhpParser.Return - 107)) | (1 << (PhpParser.Static - 107)) | (1 << (PhpParser.StringType - 107)) | (1 << (PhpParser.Switch - 107)) | (1 << (PhpParser.Throw - 107)) | (1 << (PhpParser.Trait - 107)) | (1 << (PhpParser.Try - 107)) | (1 << (PhpParser.Typeof - 107)) | (1 << (PhpParser.UintCast - 107)) | (1 << (PhpParser.UnicodeCast - 107)) | (1 << (PhpParser.Unset - 107)) | (1 << (PhpParser.Use - 107)) | (1 << (PhpParser.Var - 107)) | (1 << (PhpParser.While - 107)) | (1 << (PhpParser.Yield - 107)) | (1 << (PhpParser.From - 107)) | (1 << (PhpParser.Get - 107)) | (1 << (PhpParser.Set - 107)) | (1 << (PhpParser.Call - 107)) | (1 << (PhpParser.CallStatic - 107)) | (1 << (PhpParser.Constructor - 107)) | (1 << (PhpParser.Destruct - 107)) | (1 << (PhpParser.Wakeup - 107)) | (1 << (PhpParser.Sleep - 107)) | (1 << (PhpParser.Autoload - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (PhpParser.IsSet__ - 139)) | (1 << (PhpParser.Unset__ - 139)) | (1 << (PhpParser.ToString__ - 139)) | (1 << (PhpParser.Invoke - 139)) | (1 << (PhpParser.SetState - 139)) | (1 << (PhpParser.Clone__ - 139)) | (1 << (PhpParser.DebugInfo - 139)) | (1 << (PhpParser.Namespace__ - 139)) | (1 << (PhpParser.Class__ - 139)) | (1 << (PhpParser.Traic__ - 139)) | (1 << (PhpParser.Function__ - 139)) | (1 << (PhpParser.Method__ - 139)) | (1 << (PhpParser.Line__ - 139)) | (1 << (PhpParser.File__ - 139)) | (1 << (PhpParser.Dir__ - 139)))) !== 0) || _la === PhpParser.NamespaceSeparator || _la === PhpParser.Label) {
                    {
                        this.state = 922;
                        this.typeHint();
                    }
                }
                this.state = 926;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PhpParser.Ampersand) {
                    {
                        this.state = 925;
                        this.match(PhpParser.Ampersand);
                    }
                }
                this.state = 929;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PhpParser.Ellipsis) {
                    {
                        this.state = 928;
                        this.match(PhpParser.Ellipsis);
                    }
                }
                this.state = 931;
                this.variableInitializer();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.typeHint = function () {
        var _localctx = new TypeHintContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, PhpParser.RULE_typeHint);
        try {
            this.state = 936;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 89, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 933;
                        this.qualifiedStaticTypeRef();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 934;
                        this.match(PhpParser.Callable);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 935;
                        this.primitiveType();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.globalStatement = function () {
        var _localctx = new GlobalStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, PhpParser.RULE_globalStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 938;
                this.match(PhpParser.Global);
                this.state = 939;
                this.globalVar();
                this.state = 944;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PhpParser.Comma) {
                    {
                        {
                            this.state = 940;
                            this.match(PhpParser.Comma);
                            this.state = 941;
                            this.globalVar();
                        }
                    }
                    this.state = 946;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 947;
                this.match(PhpParser.SemiColon);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.globalVar = function () {
        var _localctx = new GlobalVarContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, PhpParser.RULE_globalVar);
        try {
            this.state = 957;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 91, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 949;
                        this.match(PhpParser.VarName);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 950;
                        this.match(PhpParser.Dollar);
                        this.state = 951;
                        this.chain();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 952;
                        this.match(PhpParser.Dollar);
                        this.state = 953;
                        this.match(PhpParser.OpenCurlyBracket);
                        this.state = 954;
                        this.expression(0);
                        this.state = 955;
                        this.match(PhpParser.CloseCurlyBracket);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.echoStatement = function () {
        var _localctx = new EchoStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, PhpParser.RULE_echoStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 959;
                this.match(PhpParser.Echo);
                this.state = 960;
                this.expressionList();
                this.state = 961;
                this.match(PhpParser.SemiColon);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.staticVariableStatement = function () {
        var _localctx = new StaticVariableStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, PhpParser.RULE_staticVariableStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 963;
                this.match(PhpParser.Static);
                this.state = 964;
                this.variableInitializer();
                this.state = 969;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PhpParser.Comma) {
                    {
                        {
                            this.state = 965;
                            this.match(PhpParser.Comma);
                            this.state = 966;
                            this.variableInitializer();
                        }
                    }
                    this.state = 971;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 972;
                this.match(PhpParser.SemiColon);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.classStatement = function () {
        var _localctx = new ClassStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, PhpParser.RULE_classStatement);
        var _la;
        try {
            this.state = 1031;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 102, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 974;
                        this.attributes();
                        this.state = 975;
                        this.propertyModifiers();
                        this.state = 977;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (PhpParser.Abstract - 43)) | (1 << (PhpParser.Array - 43)) | (1 << (PhpParser.As - 43)) | (1 << (PhpParser.BinaryCast - 43)) | (1 << (PhpParser.BoolType - 43)) | (1 << (PhpParser.BooleanConstant - 43)) | (1 << (PhpParser.Break - 43)) | (1 << (PhpParser.Callable - 43)) | (1 << (PhpParser.Case - 43)) | (1 << (PhpParser.Catch - 43)) | (1 << (PhpParser.Class - 43)) | (1 << (PhpParser.Clone - 43)) | (1 << (PhpParser.Const - 43)) | (1 << (PhpParser.Continue - 43)) | (1 << (PhpParser.Declare - 43)) | (1 << (PhpParser.Default - 43)) | (1 << (PhpParser.Do - 43)) | (1 << (PhpParser.DoubleCast - 43)) | (1 << (PhpParser.DoubleType - 43)) | (1 << (PhpParser.Echo - 43)) | (1 << (PhpParser.Else - 43)) | (1 << (PhpParser.ElseIf - 43)) | (1 << (PhpParser.Empty - 43)) | (1 << (PhpParser.EndDeclare - 43)) | (1 << (PhpParser.EndFor - 43)) | (1 << (PhpParser.EndForeach - 43)) | (1 << (PhpParser.EndIf - 43)) | (1 << (PhpParser.EndSwitch - 43)) | (1 << (PhpParser.EndWhile - 43)) | (1 << (PhpParser.Eval - 43)) | (1 << (PhpParser.Exit - 43)) | (1 << (PhpParser.Extends - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (PhpParser.Final - 75)) | (1 << (PhpParser.Finally - 75)) | (1 << (PhpParser.FloatCast - 75)) | (1 << (PhpParser.For - 75)) | (1 << (PhpParser.Foreach - 75)) | (1 << (PhpParser.Function - 75)) | (1 << (PhpParser.Global - 75)) | (1 << (PhpParser.Goto - 75)) | (1 << (PhpParser.If - 75)) | (1 << (PhpParser.Implements - 75)) | (1 << (PhpParser.Import - 75)) | (1 << (PhpParser.Include - 75)) | (1 << (PhpParser.IncludeOnce - 75)) | (1 << (PhpParser.InstanceOf - 75)) | (1 << (PhpParser.InsteadOf - 75)) | (1 << (PhpParser.Int8Cast - 75)) | (1 << (PhpParser.Int16Cast - 75)) | (1 << (PhpParser.Int64Type - 75)) | (1 << (PhpParser.IntType - 75)) | (1 << (PhpParser.Interface - 75)) | (1 << (PhpParser.IsSet - 75)) | (1 << (PhpParser.List - 75)) | (1 << (PhpParser.LogicalAnd - 75)) | (1 << (PhpParser.LogicalOr - 75)) | (1 << (PhpParser.LogicalXor - 75)) | (1 << (PhpParser.Namespace - 75)) | (1 << (PhpParser.New - 75)) | (1 << (PhpParser.Null - 75)) | (1 << (PhpParser.ObjectType - 75)) | (1 << (PhpParser.Parent_ - 75)) | (1 << (PhpParser.Partial - 75)) | (1 << (PhpParser.Print - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (PhpParser.Private - 107)) | (1 << (PhpParser.Protected - 107)) | (1 << (PhpParser.Public - 107)) | (1 << (PhpParser.Require - 107)) | (1 << (PhpParser.RequireOnce - 107)) | (1 << (PhpParser.Resource - 107)) | (1 << (PhpParser.Return - 107)) | (1 << (PhpParser.Static - 107)) | (1 << (PhpParser.StringType - 107)) | (1 << (PhpParser.Switch - 107)) | (1 << (PhpParser.Throw - 107)) | (1 << (PhpParser.Trait - 107)) | (1 << (PhpParser.Try - 107)) | (1 << (PhpParser.Typeof - 107)) | (1 << (PhpParser.UintCast - 107)) | (1 << (PhpParser.UnicodeCast - 107)) | (1 << (PhpParser.Unset - 107)) | (1 << (PhpParser.Use - 107)) | (1 << (PhpParser.Var - 107)) | (1 << (PhpParser.While - 107)) | (1 << (PhpParser.Yield - 107)) | (1 << (PhpParser.From - 107)) | (1 << (PhpParser.Get - 107)) | (1 << (PhpParser.Set - 107)) | (1 << (PhpParser.Call - 107)) | (1 << (PhpParser.CallStatic - 107)) | (1 << (PhpParser.Constructor - 107)) | (1 << (PhpParser.Destruct - 107)) | (1 << (PhpParser.Wakeup - 107)) | (1 << (PhpParser.Sleep - 107)) | (1 << (PhpParser.Autoload - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (PhpParser.IsSet__ - 139)) | (1 << (PhpParser.Unset__ - 139)) | (1 << (PhpParser.ToString__ - 139)) | (1 << (PhpParser.Invoke - 139)) | (1 << (PhpParser.SetState - 139)) | (1 << (PhpParser.Clone__ - 139)) | (1 << (PhpParser.DebugInfo - 139)) | (1 << (PhpParser.Namespace__ - 139)) | (1 << (PhpParser.Class__ - 139)) | (1 << (PhpParser.Traic__ - 139)) | (1 << (PhpParser.Function__ - 139)) | (1 << (PhpParser.Method__ - 139)) | (1 << (PhpParser.Line__ - 139)) | (1 << (PhpParser.File__ - 139)) | (1 << (PhpParser.Dir__ - 139)))) !== 0) || _la === PhpParser.NamespaceSeparator || _la === PhpParser.Label) {
                            {
                                this.state = 976;
                                this.typeHint();
                            }
                        }
                        this.state = 979;
                        this.variableInitializer();
                        this.state = 984;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === PhpParser.Comma) {
                            {
                                {
                                    this.state = 980;
                                    this.match(PhpParser.Comma);
                                    this.state = 981;
                                    this.variableInitializer();
                                }
                            }
                            this.state = 986;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 987;
                        this.match(PhpParser.SemiColon);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 989;
                        this.attributes();
                        this.state = 991;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PhpParser.Abstract || _la === PhpParser.Final || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (PhpParser.Private - 107)) | (1 << (PhpParser.Protected - 107)) | (1 << (PhpParser.Public - 107)) | (1 << (PhpParser.Static - 107)))) !== 0)) {
                            {
                                this.state = 990;
                                this.memberModifiers();
                            }
                        }
                        this.state = 993;
                        this.match(PhpParser.Const);
                        this.state = 995;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 96, this._ctx)) {
                            case 1:
                                {
                                    this.state = 994;
                                    this.typeHint();
                                }
                                break;
                        }
                        this.state = 997;
                        this.identifierInititalizer();
                        this.state = 1002;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === PhpParser.Comma) {
                            {
                                {
                                    this.state = 998;
                                    this.match(PhpParser.Comma);
                                    this.state = 999;
                                    this.identifierInititalizer();
                                }
                            }
                            this.state = 1004;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1005;
                        this.match(PhpParser.SemiColon);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1007;
                        this.attributes();
                        this.state = 1009;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PhpParser.Abstract || _la === PhpParser.Final || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (PhpParser.Private - 107)) | (1 << (PhpParser.Protected - 107)) | (1 << (PhpParser.Public - 107)) | (1 << (PhpParser.Static - 107)))) !== 0)) {
                            {
                                this.state = 1008;
                                this.memberModifiers();
                            }
                        }
                        this.state = 1011;
                        this.match(PhpParser.Function);
                        this.state = 1013;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PhpParser.Ampersand) {
                            {
                                this.state = 1012;
                                this.match(PhpParser.Ampersand);
                            }
                        }
                        this.state = 1015;
                        this.identifier();
                        this.state = 1017;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PhpParser.Lgeneric) {
                            {
                                this.state = 1016;
                                this.typeParameterListInBrackets();
                            }
                        }
                        this.state = 1019;
                        this.match(PhpParser.OpenRoundBracket);
                        this.state = 1020;
                        this.formalParameterList();
                        this.state = 1021;
                        this.match(PhpParser.CloseRoundBracket);
                        this.state = 1023;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PhpParser.Colon) {
                            {
                                this.state = 1022;
                                this.baseCtorCall();
                            }
                        }
                        this.state = 1025;
                        this.methodBody();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1027;
                        this.match(PhpParser.Use);
                        this.state = 1028;
                        this.qualifiedNamespaceNameList();
                        this.state = 1029;
                        this.traitAdaptations();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.traitAdaptations = function () {
        var _localctx = new TraitAdaptationsContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, PhpParser.RULE_traitAdaptations);
        var _la;
        try {
            this.state = 1042;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PhpParser.SemiColon:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1033;
                        this.match(PhpParser.SemiColon);
                    }
                    break;
                case PhpParser.OpenCurlyBracket:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1034;
                        this.match(PhpParser.OpenCurlyBracket);
                        this.state = 1038;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (PhpParser.Abstract - 43)) | (1 << (PhpParser.Array - 43)) | (1 << (PhpParser.As - 43)) | (1 << (PhpParser.BinaryCast - 43)) | (1 << (PhpParser.BoolType - 43)) | (1 << (PhpParser.BooleanConstant - 43)) | (1 << (PhpParser.Break - 43)) | (1 << (PhpParser.Callable - 43)) | (1 << (PhpParser.Case - 43)) | (1 << (PhpParser.Catch - 43)) | (1 << (PhpParser.Class - 43)) | (1 << (PhpParser.Clone - 43)) | (1 << (PhpParser.Const - 43)) | (1 << (PhpParser.Continue - 43)) | (1 << (PhpParser.Declare - 43)) | (1 << (PhpParser.Default - 43)) | (1 << (PhpParser.Do - 43)) | (1 << (PhpParser.DoubleCast - 43)) | (1 << (PhpParser.DoubleType - 43)) | (1 << (PhpParser.Echo - 43)) | (1 << (PhpParser.Else - 43)) | (1 << (PhpParser.ElseIf - 43)) | (1 << (PhpParser.Empty - 43)) | (1 << (PhpParser.EndDeclare - 43)) | (1 << (PhpParser.EndFor - 43)) | (1 << (PhpParser.EndForeach - 43)) | (1 << (PhpParser.EndIf - 43)) | (1 << (PhpParser.EndSwitch - 43)) | (1 << (PhpParser.EndWhile - 43)) | (1 << (PhpParser.Eval - 43)) | (1 << (PhpParser.Exit - 43)) | (1 << (PhpParser.Extends - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (PhpParser.Final - 75)) | (1 << (PhpParser.Finally - 75)) | (1 << (PhpParser.FloatCast - 75)) | (1 << (PhpParser.For - 75)) | (1 << (PhpParser.Foreach - 75)) | (1 << (PhpParser.Function - 75)) | (1 << (PhpParser.Global - 75)) | (1 << (PhpParser.Goto - 75)) | (1 << (PhpParser.If - 75)) | (1 << (PhpParser.Implements - 75)) | (1 << (PhpParser.Import - 75)) | (1 << (PhpParser.Include - 75)) | (1 << (PhpParser.IncludeOnce - 75)) | (1 << (PhpParser.InstanceOf - 75)) | (1 << (PhpParser.InsteadOf - 75)) | (1 << (PhpParser.Int8Cast - 75)) | (1 << (PhpParser.Int16Cast - 75)) | (1 << (PhpParser.Int64Type - 75)) | (1 << (PhpParser.IntType - 75)) | (1 << (PhpParser.Interface - 75)) | (1 << (PhpParser.IsSet - 75)) | (1 << (PhpParser.List - 75)) | (1 << (PhpParser.LogicalAnd - 75)) | (1 << (PhpParser.LogicalOr - 75)) | (1 << (PhpParser.LogicalXor - 75)) | (1 << (PhpParser.Namespace - 75)) | (1 << (PhpParser.New - 75)) | (1 << (PhpParser.Null - 75)) | (1 << (PhpParser.ObjectType - 75)) | (1 << (PhpParser.Parent_ - 75)) | (1 << (PhpParser.Partial - 75)) | (1 << (PhpParser.Print - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (PhpParser.Private - 107)) | (1 << (PhpParser.Protected - 107)) | (1 << (PhpParser.Public - 107)) | (1 << (PhpParser.Require - 107)) | (1 << (PhpParser.RequireOnce - 107)) | (1 << (PhpParser.Resource - 107)) | (1 << (PhpParser.Return - 107)) | (1 << (PhpParser.Static - 107)) | (1 << (PhpParser.StringType - 107)) | (1 << (PhpParser.Switch - 107)) | (1 << (PhpParser.Throw - 107)) | (1 << (PhpParser.Trait - 107)) | (1 << (PhpParser.Try - 107)) | (1 << (PhpParser.Typeof - 107)) | (1 << (PhpParser.UintCast - 107)) | (1 << (PhpParser.UnicodeCast - 107)) | (1 << (PhpParser.Unset - 107)) | (1 << (PhpParser.Use - 107)) | (1 << (PhpParser.Var - 107)) | (1 << (PhpParser.While - 107)) | (1 << (PhpParser.Yield - 107)) | (1 << (PhpParser.From - 107)) | (1 << (PhpParser.Get - 107)) | (1 << (PhpParser.Set - 107)) | (1 << (PhpParser.Call - 107)) | (1 << (PhpParser.CallStatic - 107)) | (1 << (PhpParser.Constructor - 107)) | (1 << (PhpParser.Destruct - 107)) | (1 << (PhpParser.Wakeup - 107)) | (1 << (PhpParser.Sleep - 107)) | (1 << (PhpParser.Autoload - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (PhpParser.IsSet__ - 139)) | (1 << (PhpParser.Unset__ - 139)) | (1 << (PhpParser.ToString__ - 139)) | (1 << (PhpParser.Invoke - 139)) | (1 << (PhpParser.SetState - 139)) | (1 << (PhpParser.Clone__ - 139)) | (1 << (PhpParser.DebugInfo - 139)) | (1 << (PhpParser.Namespace__ - 139)) | (1 << (PhpParser.Class__ - 139)) | (1 << (PhpParser.Traic__ - 139)) | (1 << (PhpParser.Function__ - 139)) | (1 << (PhpParser.Method__ - 139)) | (1 << (PhpParser.Line__ - 139)) | (1 << (PhpParser.File__ - 139)) | (1 << (PhpParser.Dir__ - 139)))) !== 0) || _la === PhpParser.NamespaceSeparator || _la === PhpParser.Label) {
                            {
                                {
                                    this.state = 1035;
                                    this.traitAdaptationStatement();
                                }
                            }
                            this.state = 1040;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1041;
                        this.match(PhpParser.CloseCurlyBracket);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.traitAdaptationStatement = function () {
        var _localctx = new TraitAdaptationStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, PhpParser.RULE_traitAdaptationStatement);
        try {
            this.state = 1046;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 105, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1044;
                        this.traitPrecedence();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1045;
                        this.traitAlias();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.traitPrecedence = function () {
        var _localctx = new TraitPrecedenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, PhpParser.RULE_traitPrecedence);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1048;
                this.qualifiedNamespaceName();
                this.state = 1049;
                this.match(PhpParser.DoubleColon);
                this.state = 1050;
                this.identifier();
                this.state = 1051;
                this.match(PhpParser.InsteadOf);
                this.state = 1052;
                this.qualifiedNamespaceNameList();
                this.state = 1053;
                this.match(PhpParser.SemiColon);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.traitAlias = function () {
        var _localctx = new TraitAliasContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, PhpParser.RULE_traitAlias);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1055;
                this.traitMethodReference();
                this.state = 1056;
                this.match(PhpParser.As);
                this.state = 1062;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 107, this._ctx)) {
                    case 1:
                        {
                            this.state = 1057;
                            this.memberModifier();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1059;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 106, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1058;
                                        this.memberModifier();
                                    }
                                    break;
                            }
                            this.state = 1061;
                            this.identifier();
                        }
                        break;
                }
                this.state = 1064;
                this.match(PhpParser.SemiColon);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.traitMethodReference = function () {
        var _localctx = new TraitMethodReferenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, PhpParser.RULE_traitMethodReference);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1069;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 108, this._ctx)) {
                    case 1:
                        {
                            this.state = 1066;
                            this.qualifiedNamespaceName();
                            this.state = 1067;
                            this.match(PhpParser.DoubleColon);
                        }
                        break;
                }
                this.state = 1071;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.baseCtorCall = function () {
        var _localctx = new BaseCtorCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, PhpParser.RULE_baseCtorCall);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1073;
                this.match(PhpParser.Colon);
                this.state = 1074;
                this.identifier();
                this.state = 1076;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PhpParser.OpenRoundBracket) {
                    {
                        this.state = 1075;
                        this.arguments();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.methodBody = function () {
        var _localctx = new MethodBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, PhpParser.RULE_methodBody);
        try {
            this.state = 1080;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PhpParser.SemiColon:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1078;
                        this.match(PhpParser.SemiColon);
                    }
                    break;
                case PhpParser.OpenCurlyBracket:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1079;
                        this.blockStatement();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.propertyModifiers = function () {
        var _localctx = new PropertyModifiersContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, PhpParser.RULE_propertyModifiers);
        try {
            this.state = 1084;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PhpParser.Abstract:
                case PhpParser.Final:
                case PhpParser.Private:
                case PhpParser.Protected:
                case PhpParser.Public:
                case PhpParser.Static:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1082;
                        this.memberModifiers();
                    }
                    break;
                case PhpParser.Var:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1083;
                        this.match(PhpParser.Var);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.memberModifiers = function () {
        var _localctx = new MemberModifiersContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, PhpParser.RULE_memberModifiers);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1087;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 1086;
                                    this.memberModifier();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 1089;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.variableInitializer = function () {
        var _localctx = new VariableInitializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, PhpParser.RULE_variableInitializer);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1091;
                this.match(PhpParser.VarName);
                this.state = 1094;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PhpParser.Eq) {
                    {
                        this.state = 1092;
                        this.match(PhpParser.Eq);
                        this.state = 1093;
                        this.constantInititalizer();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.identifierInititalizer = function () {
        var _localctx = new IdentifierInititalizerContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, PhpParser.RULE_identifierInititalizer);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1096;
                this.identifier();
                this.state = 1097;
                this.match(PhpParser.Eq);
                this.state = 1098;
                this.constantInititalizer();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.globalConstantDeclaration = function () {
        var _localctx = new GlobalConstantDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, PhpParser.RULE_globalConstantDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1100;
                this.attributes();
                this.state = 1101;
                this.match(PhpParser.Const);
                this.state = 1102;
                this.identifierInititalizer();
                this.state = 1107;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PhpParser.Comma) {
                    {
                        {
                            this.state = 1103;
                            this.match(PhpParser.Comma);
                            this.state = 1104;
                            this.identifierInititalizer();
                        }
                    }
                    this.state = 1109;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1110;
                this.match(PhpParser.SemiColon);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.expressionList = function () {
        var _localctx = new ExpressionListContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, PhpParser.RULE_expressionList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1112;
                this.expression(0);
                this.state = 1117;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PhpParser.Comma) {
                    {
                        {
                            this.state = 1113;
                            this.match(PhpParser.Comma);
                            this.state = 1114;
                            this.expression(0);
                        }
                    }
                    this.state = 1119;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.parentheses = function () {
        var _localctx = new ParenthesesContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, PhpParser.RULE_parentheses);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1120;
                this.match(PhpParser.OpenRoundBracket);
                this.state = 1123;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 116, this._ctx)) {
                    case 1:
                        {
                            this.state = 1121;
                            this.expression(0);
                        }
                        break;
                    case 2:
                        {
                            this.state = 1122;
                            this.yieldExpression();
                        }
                        break;
                }
                this.state = 1125;
                this.match(PhpParser.CloseRoundBracket);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.expression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 166;
        this.enterRecursionRule(_localctx, 166, PhpParser.RULE_expression, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1204;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 119, this._ctx)) {
                    case 1:
                        {
                            _localctx = new CloneExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1128;
                            this.match(PhpParser.Clone);
                            this.state = 1129;
                            this.expression(45);
                        }
                        break;
                    case 2:
                        {
                            _localctx = new NewExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1130;
                            this.newExpr();
                        }
                        break;
                    case 3:
                        {
                            _localctx = new IndexerExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1131;
                            this.stringConstant();
                            this.state = 1132;
                            this.match(PhpParser.OpenSquareBracket);
                            this.state = 1133;
                            this.expression(0);
                            this.state = 1134;
                            this.match(PhpParser.CloseSquareBracket);
                        }
                        break;
                    case 4:
                        {
                            _localctx = new CastExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1136;
                            this.match(PhpParser.OpenRoundBracket);
                            this.state = 1137;
                            this.castOperation();
                            this.state = 1138;
                            this.match(PhpParser.CloseRoundBracket);
                            this.state = 1139;
                            this.expression(42);
                        }
                        break;
                    case 5:
                        {
                            _localctx = new UnaryOperatorExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1141;
                            _la = this._input.LA(1);
                            if (!(_la === PhpParser.Tilde || _la === PhpParser.SuppressWarnings)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1142;
                            this.expression(41);
                        }
                        break;
                    case 6:
                        {
                            _localctx = new UnaryOperatorExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1143;
                            _la = this._input.LA(1);
                            if (!(((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (PhpParser.Bang - 193)) | (1 << (PhpParser.Plus - 193)) | (1 << (PhpParser.Minus - 193)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1144;
                            this.expression(40);
                        }
                        break;
                    case 7:
                        {
                            _localctx = new PrefixIncDecExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1145;
                            _la = this._input.LA(1);
                            if (!(_la === PhpParser.Inc || _la === PhpParser.Dec)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1146;
                            this.chain();
                        }
                        break;
                    case 8:
                        {
                            _localctx = new PostfixIncDecExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1147;
                            this.chain();
                            this.state = 1148;
                            _la = this._input.LA(1);
                            if (!(_la === PhpParser.Inc || _la === PhpParser.Dec)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                        break;
                    case 9:
                        {
                            _localctx = new PrintExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1150;
                            this.match(PhpParser.Print);
                            this.state = 1151;
                            this.expression(37);
                        }
                        break;
                    case 10:
                        {
                            _localctx = new ChainExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1152;
                            this.chain();
                        }
                        break;
                    case 11:
                        {
                            _localctx = new ScalarExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1153;
                            this.constant();
                        }
                        break;
                    case 12:
                        {
                            _localctx = new ScalarExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1154;
                            this.string();
                        }
                        break;
                    case 13:
                        {
                            _localctx = new ScalarExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1155;
                            this.match(PhpParser.Label);
                        }
                        break;
                    case 14:
                        {
                            _localctx = new BackQuoteStringExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1156;
                            this.match(PhpParser.BackQuoteString);
                        }
                        break;
                    case 15:
                        {
                            _localctx = new ParenthesisExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1157;
                            this.parentheses();
                        }
                        break;
                    case 16:
                        {
                            _localctx = new ArrayCreationExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1158;
                            this.arrayCreation();
                        }
                        break;
                    case 17:
                        {
                            _localctx = new SpecialWordExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1159;
                            this.match(PhpParser.Yield);
                        }
                        break;
                    case 18:
                        {
                            _localctx = new SpecialWordExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1160;
                            this.match(PhpParser.List);
                            this.state = 1161;
                            this.match(PhpParser.OpenRoundBracket);
                            this.state = 1162;
                            this.assignmentList();
                            this.state = 1163;
                            this.match(PhpParser.CloseRoundBracket);
                            this.state = 1164;
                            this.match(PhpParser.Eq);
                            this.state = 1165;
                            this.expression(28);
                        }
                        break;
                    case 19:
                        {
                            _localctx = new SpecialWordExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1167;
                            this.match(PhpParser.IsSet);
                            this.state = 1168;
                            this.match(PhpParser.OpenRoundBracket);
                            this.state = 1169;
                            this.chainList();
                            this.state = 1170;
                            this.match(PhpParser.CloseRoundBracket);
                        }
                        break;
                    case 20:
                        {
                            _localctx = new SpecialWordExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1172;
                            this.match(PhpParser.Empty);
                            this.state = 1173;
                            this.match(PhpParser.OpenRoundBracket);
                            this.state = 1174;
                            this.chain();
                            this.state = 1175;
                            this.match(PhpParser.CloseRoundBracket);
                        }
                        break;
                    case 21:
                        {
                            _localctx = new SpecialWordExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1177;
                            this.match(PhpParser.Eval);
                            this.state = 1178;
                            this.match(PhpParser.OpenRoundBracket);
                            this.state = 1179;
                            this.expression(0);
                            this.state = 1180;
                            this.match(PhpParser.CloseRoundBracket);
                        }
                        break;
                    case 22:
                        {
                            _localctx = new SpecialWordExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1182;
                            this.match(PhpParser.Exit);
                            this.state = 1186;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 117, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1183;
                                        this.match(PhpParser.OpenRoundBracket);
                                        this.state = 1184;
                                        this.match(PhpParser.CloseRoundBracket);
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 1185;
                                        this.parentheses();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 23:
                        {
                            _localctx = new SpecialWordExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1188;
                            _la = this._input.LA(1);
                            if (!(_la === PhpParser.Include || _la === PhpParser.IncludeOnce)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1189;
                            this.expression(23);
                        }
                        break;
                    case 24:
                        {
                            _localctx = new SpecialWordExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1190;
                            _la = this._input.LA(1);
                            if (!(_la === PhpParser.Require || _la === PhpParser.RequireOnce)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1191;
                            this.expression(22);
                        }
                        break;
                    case 25:
                        {
                            _localctx = new LambdaFunctionExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1192;
                            this.lambdaFunctionExpr();
                        }
                        break;
                    case 26:
                        {
                            _localctx = new AssignmentExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1193;
                            this.assignable();
                            this.state = 1194;
                            this.assignmentOperator();
                            this.state = 1195;
                            this.expression(5);
                        }
                        break;
                    case 27:
                        {
                            _localctx = new AssignmentExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 1197;
                            this.assignable();
                            this.state = 1198;
                            this.match(PhpParser.Eq);
                            this.state = 1199;
                            this.match(PhpParser.Ampersand);
                            this.state = 1202;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 118, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1200;
                                        this.chain();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 1201;
                                        this.newExpr();
                                    }
                                    break;
                            }
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1266;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 1264;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 121, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ArithmeticExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, PhpParser.RULE_expression);
                                        this.state = 1206;
                                        if (!(this.precpred(this._ctx, 20))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
                                        }
                                        this.state = 1207;
                                        _localctx._op = this.match(PhpParser.Pow);
                                        this.state = 1208;
                                        this.expression(20);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ArithmeticExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, PhpParser.RULE_expression);
                                        this.state = 1209;
                                        if (!(this.precpred(this._ctx, 18))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                                        }
                                        this.state = 1210;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 197)) & ~0x1F) === 0 && ((1 << (_la - 197)) & ((1 << (PhpParser.Asterisk - 197)) | (1 << (PhpParser.Percent - 197)) | (1 << (PhpParser.Divide - 197)))) !== 0))) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1211;
                                        this.expression(19);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new ArithmeticExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, PhpParser.RULE_expression);
                                        this.state = 1212;
                                        if (!(this.precpred(this._ctx, 17))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                                        }
                                        this.state = 1213;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 195)) & ~0x1F) === 0 && ((1 << (_la - 195)) & ((1 << (PhpParser.Plus - 195)) | (1 << (PhpParser.Minus - 195)) | (1 << (PhpParser.Dot - 195)))) !== 0))) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1214;
                                        this.expression(18);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new ComparisonExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, PhpParser.RULE_expression);
                                        this.state = 1215;
                                        if (!(this.precpred(this._ctx, 16))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                                        }
                                        this.state = 1216;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === PhpParser.ShiftLeft || _la === PhpParser.ShiftRight)) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1217;
                                        this.expression(17);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new ComparisonExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, PhpParser.RULE_expression);
                                        this.state = 1218;
                                        if (!(this.precpred(this._ctx, 15))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                                        }
                                        this.state = 1219;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (PhpParser.IsSmallerOrEqual - 164)) | (1 << (PhpParser.IsGreaterOrEqual - 164)) | (1 << (PhpParser.Less - 164)) | (1 << (PhpParser.Greater - 164)))) !== 0))) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1220;
                                        this.expression(16);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new ComparisonExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, PhpParser.RULE_expression);
                                        this.state = 1221;
                                        if (!(this.precpred(this._ctx, 14))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                                        }
                                        this.state = 1222;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (PhpParser.IsIdentical - 160)) | (1 << (PhpParser.IsNoidentical - 160)) | (1 << (PhpParser.IsEqual - 160)) | (1 << (PhpParser.IsNotEq - 160)))) !== 0))) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1223;
                                        this.expression(15);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new BitwiseExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, PhpParser.RULE_expression);
                                        this.state = 1224;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 1225;
                                        _localctx._op = this.match(PhpParser.Ampersand);
                                        this.state = 1226;
                                        this.expression(14);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new BitwiseExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, PhpParser.RULE_expression);
                                        this.state = 1227;
                                        if (!(this.precpred(this._ctx, 12))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                                        }
                                        this.state = 1228;
                                        _localctx._op = this.match(PhpParser.Caret);
                                        this.state = 1229;
                                        this.expression(13);
                                    }
                                    break;
                                case 9:
                                    {
                                        _localctx = new BitwiseExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, PhpParser.RULE_expression);
                                        this.state = 1230;
                                        if (!(this.precpred(this._ctx, 11))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                                        }
                                        this.state = 1231;
                                        _localctx._op = this.match(PhpParser.Pipe);
                                        this.state = 1232;
                                        this.expression(12);
                                    }
                                    break;
                                case 10:
                                    {
                                        _localctx = new BitwiseExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, PhpParser.RULE_expression);
                                        this.state = 1233;
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                                        }
                                        this.state = 1234;
                                        _localctx._op = this.match(PhpParser.BooleanAnd);
                                        this.state = 1235;
                                        this.expression(11);
                                    }
                                    break;
                                case 11:
                                    {
                                        _localctx = new BitwiseExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, PhpParser.RULE_expression);
                                        this.state = 1236;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 1237;
                                        _localctx._op = this.match(PhpParser.BooleanOr);
                                        this.state = 1238;
                                        this.expression(10);
                                    }
                                    break;
                                case 12:
                                    {
                                        _localctx = new ConditionalExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, PhpParser.RULE_expression);
                                        this.state = 1239;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 1240;
                                        _localctx._op = this.match(PhpParser.QuestionMark);
                                        this.state = 1242;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (PhpParser.Abstract - 43)) | (1 << (PhpParser.Array - 43)) | (1 << (PhpParser.As - 43)) | (1 << (PhpParser.BinaryCast - 43)) | (1 << (PhpParser.BoolType - 43)) | (1 << (PhpParser.BooleanConstant - 43)) | (1 << (PhpParser.Break - 43)) | (1 << (PhpParser.Callable - 43)) | (1 << (PhpParser.Case - 43)) | (1 << (PhpParser.Catch - 43)) | (1 << (PhpParser.Class - 43)) | (1 << (PhpParser.Clone - 43)) | (1 << (PhpParser.Const - 43)) | (1 << (PhpParser.Continue - 43)) | (1 << (PhpParser.Declare - 43)) | (1 << (PhpParser.Default - 43)) | (1 << (PhpParser.Do - 43)) | (1 << (PhpParser.DoubleCast - 43)) | (1 << (PhpParser.DoubleType - 43)) | (1 << (PhpParser.Echo - 43)) | (1 << (PhpParser.Else - 43)) | (1 << (PhpParser.ElseIf - 43)) | (1 << (PhpParser.Empty - 43)) | (1 << (PhpParser.EndDeclare - 43)) | (1 << (PhpParser.EndFor - 43)) | (1 << (PhpParser.EndForeach - 43)) | (1 << (PhpParser.EndIf - 43)) | (1 << (PhpParser.EndSwitch - 43)) | (1 << (PhpParser.EndWhile - 43)) | (1 << (PhpParser.Eval - 43)) | (1 << (PhpParser.Exit - 43)) | (1 << (PhpParser.Extends - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (PhpParser.Final - 75)) | (1 << (PhpParser.Finally - 75)) | (1 << (PhpParser.FloatCast - 75)) | (1 << (PhpParser.For - 75)) | (1 << (PhpParser.Foreach - 75)) | (1 << (PhpParser.Function - 75)) | (1 << (PhpParser.Global - 75)) | (1 << (PhpParser.Goto - 75)) | (1 << (PhpParser.If - 75)) | (1 << (PhpParser.Implements - 75)) | (1 << (PhpParser.Import - 75)) | (1 << (PhpParser.Include - 75)) | (1 << (PhpParser.IncludeOnce - 75)) | (1 << (PhpParser.InstanceOf - 75)) | (1 << (PhpParser.InsteadOf - 75)) | (1 << (PhpParser.Int8Cast - 75)) | (1 << (PhpParser.Int16Cast - 75)) | (1 << (PhpParser.Int64Type - 75)) | (1 << (PhpParser.IntType - 75)) | (1 << (PhpParser.Interface - 75)) | (1 << (PhpParser.IsSet - 75)) | (1 << (PhpParser.List - 75)) | (1 << (PhpParser.LogicalAnd - 75)) | (1 << (PhpParser.LogicalOr - 75)) | (1 << (PhpParser.LogicalXor - 75)) | (1 << (PhpParser.Namespace - 75)) | (1 << (PhpParser.New - 75)) | (1 << (PhpParser.Null - 75)) | (1 << (PhpParser.ObjectType - 75)) | (1 << (PhpParser.Parent_ - 75)) | (1 << (PhpParser.Partial - 75)) | (1 << (PhpParser.Print - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (PhpParser.Private - 107)) | (1 << (PhpParser.Protected - 107)) | (1 << (PhpParser.Public - 107)) | (1 << (PhpParser.Require - 107)) | (1 << (PhpParser.RequireOnce - 107)) | (1 << (PhpParser.Resource - 107)) | (1 << (PhpParser.Return - 107)) | (1 << (PhpParser.Static - 107)) | (1 << (PhpParser.StringType - 107)) | (1 << (PhpParser.Switch - 107)) | (1 << (PhpParser.Throw - 107)) | (1 << (PhpParser.Trait - 107)) | (1 << (PhpParser.Try - 107)) | (1 << (PhpParser.Typeof - 107)) | (1 << (PhpParser.UintCast - 107)) | (1 << (PhpParser.UnicodeCast - 107)) | (1 << (PhpParser.Unset - 107)) | (1 << (PhpParser.Use - 107)) | (1 << (PhpParser.Var - 107)) | (1 << (PhpParser.While - 107)) | (1 << (PhpParser.Yield - 107)) | (1 << (PhpParser.From - 107)) | (1 << (PhpParser.LambdaFn - 107)) | (1 << (PhpParser.Get - 107)) | (1 << (PhpParser.Set - 107)) | (1 << (PhpParser.Call - 107)) | (1 << (PhpParser.CallStatic - 107)) | (1 << (PhpParser.Constructor - 107)) | (1 << (PhpParser.Destruct - 107)) | (1 << (PhpParser.Wakeup - 107)) | (1 << (PhpParser.Sleep - 107)) | (1 << (PhpParser.Autoload - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (PhpParser.IsSet__ - 139)) | (1 << (PhpParser.Unset__ - 139)) | (1 << (PhpParser.ToString__ - 139)) | (1 << (PhpParser.Invoke - 139)) | (1 << (PhpParser.SetState - 139)) | (1 << (PhpParser.Clone__ - 139)) | (1 << (PhpParser.DebugInfo - 139)) | (1 << (PhpParser.Namespace__ - 139)) | (1 << (PhpParser.Class__ - 139)) | (1 << (PhpParser.Traic__ - 139)) | (1 << (PhpParser.Function__ - 139)) | (1 << (PhpParser.Method__ - 139)) | (1 << (PhpParser.Line__ - 139)) | (1 << (PhpParser.File__ - 139)) | (1 << (PhpParser.Dir__ - 139)) | (1 << (PhpParser.Inc - 139)) | (1 << (PhpParser.Dec - 139)))) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & ((1 << (PhpParser.NamespaceSeparator - 187)) | (1 << (PhpParser.Bang - 187)) | (1 << (PhpParser.Plus - 187)) | (1 << (PhpParser.Minus - 187)) | (1 << (PhpParser.Tilde - 187)) | (1 << (PhpParser.SuppressWarnings - 187)) | (1 << (PhpParser.Dollar - 187)) | (1 << (PhpParser.OpenRoundBracket - 187)) | (1 << (PhpParser.OpenSquareBracket - 187)) | (1 << (PhpParser.VarName - 187)) | (1 << (PhpParser.Label - 187)))) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & ((1 << (PhpParser.Octal - 219)) | (1 << (PhpParser.Decimal - 219)) | (1 << (PhpParser.Real - 219)) | (1 << (PhpParser.Hex - 219)) | (1 << (PhpParser.Binary - 219)) | (1 << (PhpParser.BackQuoteString - 219)) | (1 << (PhpParser.SingleQuoteString - 219)) | (1 << (PhpParser.DoubleQuote - 219)) | (1 << (PhpParser.StartNowDoc - 219)) | (1 << (PhpParser.StartHereDoc - 219)))) !== 0)) {
                                            {
                                                this.state = 1241;
                                                this.expression(0);
                                            }
                                        }
                                        this.state = 1244;
                                        this.match(PhpParser.Colon);
                                        this.state = 1245;
                                        this.expression(9);
                                    }
                                    break;
                                case 13:
                                    {
                                        _localctx = new NullCoalescingExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, PhpParser.RULE_expression);
                                        this.state = 1246;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 1247;
                                        _localctx._op = this.match(PhpParser.NullCoalescing);
                                        this.state = 1248;
                                        this.expression(8);
                                    }
                                    break;
                                case 14:
                                    {
                                        _localctx = new SpaceshipExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, PhpParser.RULE_expression);
                                        this.state = 1249;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 1250;
                                        _localctx._op = this.match(PhpParser.Spaceship);
                                        this.state = 1251;
                                        this.expression(7);
                                    }
                                    break;
                                case 15:
                                    {
                                        _localctx = new LogicalExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, PhpParser.RULE_expression);
                                        this.state = 1252;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 1253;
                                        _localctx._op = this.match(PhpParser.LogicalAnd);
                                        this.state = 1254;
                                        this.expression(4);
                                    }
                                    break;
                                case 16:
                                    {
                                        _localctx = new LogicalExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, PhpParser.RULE_expression);
                                        this.state = 1255;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 1256;
                                        _localctx._op = this.match(PhpParser.LogicalXor);
                                        this.state = 1257;
                                        this.expression(3);
                                    }
                                    break;
                                case 17:
                                    {
                                        _localctx = new LogicalExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, PhpParser.RULE_expression);
                                        this.state = 1258;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 1259;
                                        _localctx._op = this.match(PhpParser.LogicalOr);
                                        this.state = 1260;
                                        this.expression(2);
                                    }
                                    break;
                                case 18:
                                    {
                                        _localctx = new InstanceOfExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, PhpParser.RULE_expression);
                                        this.state = 1261;
                                        if (!(this.precpred(this._ctx, 19))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                                        }
                                        this.state = 1262;
                                        this.match(PhpParser.InstanceOf);
                                        this.state = 1263;
                                        this.typeRef();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1268;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.assignable = function () {
        var _localctx = new AssignableContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, PhpParser.RULE_assignable);
        try {
            this.state = 1271;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 123, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1269;
                        this.chain();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1270;
                        this.arrayCreation();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.arrayCreation = function () {
        var _localctx = new ArrayCreationContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, PhpParser.RULE_arrayCreation);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1284;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PhpParser.Array:
                        {
                            this.state = 1273;
                            this.match(PhpParser.Array);
                            this.state = 1274;
                            this.match(PhpParser.OpenRoundBracket);
                            this.state = 1276;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (PhpParser.Abstract - 43)) | (1 << (PhpParser.Array - 43)) | (1 << (PhpParser.As - 43)) | (1 << (PhpParser.BinaryCast - 43)) | (1 << (PhpParser.BoolType - 43)) | (1 << (PhpParser.BooleanConstant - 43)) | (1 << (PhpParser.Break - 43)) | (1 << (PhpParser.Callable - 43)) | (1 << (PhpParser.Case - 43)) | (1 << (PhpParser.Catch - 43)) | (1 << (PhpParser.Class - 43)) | (1 << (PhpParser.Clone - 43)) | (1 << (PhpParser.Const - 43)) | (1 << (PhpParser.Continue - 43)) | (1 << (PhpParser.Declare - 43)) | (1 << (PhpParser.Default - 43)) | (1 << (PhpParser.Do - 43)) | (1 << (PhpParser.DoubleCast - 43)) | (1 << (PhpParser.DoubleType - 43)) | (1 << (PhpParser.Echo - 43)) | (1 << (PhpParser.Else - 43)) | (1 << (PhpParser.ElseIf - 43)) | (1 << (PhpParser.Empty - 43)) | (1 << (PhpParser.EndDeclare - 43)) | (1 << (PhpParser.EndFor - 43)) | (1 << (PhpParser.EndForeach - 43)) | (1 << (PhpParser.EndIf - 43)) | (1 << (PhpParser.EndSwitch - 43)) | (1 << (PhpParser.EndWhile - 43)) | (1 << (PhpParser.Eval - 43)) | (1 << (PhpParser.Exit - 43)) | (1 << (PhpParser.Extends - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (PhpParser.Final - 75)) | (1 << (PhpParser.Finally - 75)) | (1 << (PhpParser.FloatCast - 75)) | (1 << (PhpParser.For - 75)) | (1 << (PhpParser.Foreach - 75)) | (1 << (PhpParser.Function - 75)) | (1 << (PhpParser.Global - 75)) | (1 << (PhpParser.Goto - 75)) | (1 << (PhpParser.If - 75)) | (1 << (PhpParser.Implements - 75)) | (1 << (PhpParser.Import - 75)) | (1 << (PhpParser.Include - 75)) | (1 << (PhpParser.IncludeOnce - 75)) | (1 << (PhpParser.InstanceOf - 75)) | (1 << (PhpParser.InsteadOf - 75)) | (1 << (PhpParser.Int8Cast - 75)) | (1 << (PhpParser.Int16Cast - 75)) | (1 << (PhpParser.Int64Type - 75)) | (1 << (PhpParser.IntType - 75)) | (1 << (PhpParser.Interface - 75)) | (1 << (PhpParser.IsSet - 75)) | (1 << (PhpParser.List - 75)) | (1 << (PhpParser.LogicalAnd - 75)) | (1 << (PhpParser.LogicalOr - 75)) | (1 << (PhpParser.LogicalXor - 75)) | (1 << (PhpParser.Namespace - 75)) | (1 << (PhpParser.New - 75)) | (1 << (PhpParser.Null - 75)) | (1 << (PhpParser.ObjectType - 75)) | (1 << (PhpParser.Parent_ - 75)) | (1 << (PhpParser.Partial - 75)) | (1 << (PhpParser.Print - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (PhpParser.Private - 107)) | (1 << (PhpParser.Protected - 107)) | (1 << (PhpParser.Public - 107)) | (1 << (PhpParser.Require - 107)) | (1 << (PhpParser.RequireOnce - 107)) | (1 << (PhpParser.Resource - 107)) | (1 << (PhpParser.Return - 107)) | (1 << (PhpParser.Static - 107)) | (1 << (PhpParser.StringType - 107)) | (1 << (PhpParser.Switch - 107)) | (1 << (PhpParser.Throw - 107)) | (1 << (PhpParser.Trait - 107)) | (1 << (PhpParser.Try - 107)) | (1 << (PhpParser.Typeof - 107)) | (1 << (PhpParser.UintCast - 107)) | (1 << (PhpParser.UnicodeCast - 107)) | (1 << (PhpParser.Unset - 107)) | (1 << (PhpParser.Use - 107)) | (1 << (PhpParser.Var - 107)) | (1 << (PhpParser.While - 107)) | (1 << (PhpParser.Yield - 107)) | (1 << (PhpParser.From - 107)) | (1 << (PhpParser.LambdaFn - 107)) | (1 << (PhpParser.Get - 107)) | (1 << (PhpParser.Set - 107)) | (1 << (PhpParser.Call - 107)) | (1 << (PhpParser.CallStatic - 107)) | (1 << (PhpParser.Constructor - 107)) | (1 << (PhpParser.Destruct - 107)) | (1 << (PhpParser.Wakeup - 107)) | (1 << (PhpParser.Sleep - 107)) | (1 << (PhpParser.Autoload - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (PhpParser.IsSet__ - 139)) | (1 << (PhpParser.Unset__ - 139)) | (1 << (PhpParser.ToString__ - 139)) | (1 << (PhpParser.Invoke - 139)) | (1 << (PhpParser.SetState - 139)) | (1 << (PhpParser.Clone__ - 139)) | (1 << (PhpParser.DebugInfo - 139)) | (1 << (PhpParser.Namespace__ - 139)) | (1 << (PhpParser.Class__ - 139)) | (1 << (PhpParser.Traic__ - 139)) | (1 << (PhpParser.Function__ - 139)) | (1 << (PhpParser.Method__ - 139)) | (1 << (PhpParser.Line__ - 139)) | (1 << (PhpParser.File__ - 139)) | (1 << (PhpParser.Dir__ - 139)) | (1 << (PhpParser.Inc - 139)) | (1 << (PhpParser.Dec - 139)))) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & ((1 << (PhpParser.NamespaceSeparator - 187)) | (1 << (PhpParser.Ampersand - 187)) | (1 << (PhpParser.Bang - 187)) | (1 << (PhpParser.Plus - 187)) | (1 << (PhpParser.Minus - 187)) | (1 << (PhpParser.Tilde - 187)) | (1 << (PhpParser.SuppressWarnings - 187)) | (1 << (PhpParser.Dollar - 187)) | (1 << (PhpParser.OpenRoundBracket - 187)) | (1 << (PhpParser.OpenSquareBracket - 187)) | (1 << (PhpParser.VarName - 187)) | (1 << (PhpParser.Label - 187)))) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & ((1 << (PhpParser.Octal - 219)) | (1 << (PhpParser.Decimal - 219)) | (1 << (PhpParser.Real - 219)) | (1 << (PhpParser.Hex - 219)) | (1 << (PhpParser.Binary - 219)) | (1 << (PhpParser.BackQuoteString - 219)) | (1 << (PhpParser.SingleQuoteString - 219)) | (1 << (PhpParser.DoubleQuote - 219)) | (1 << (PhpParser.StartNowDoc - 219)) | (1 << (PhpParser.StartHereDoc - 219)))) !== 0)) {
                                {
                                    this.state = 1275;
                                    this.arrayItemList();
                                }
                            }
                            this.state = 1278;
                            this.match(PhpParser.CloseRoundBracket);
                        }
                        break;
                    case PhpParser.OpenSquareBracket:
                        {
                            this.state = 1279;
                            this.match(PhpParser.OpenSquareBracket);
                            this.state = 1281;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (PhpParser.Abstract - 43)) | (1 << (PhpParser.Array - 43)) | (1 << (PhpParser.As - 43)) | (1 << (PhpParser.BinaryCast - 43)) | (1 << (PhpParser.BoolType - 43)) | (1 << (PhpParser.BooleanConstant - 43)) | (1 << (PhpParser.Break - 43)) | (1 << (PhpParser.Callable - 43)) | (1 << (PhpParser.Case - 43)) | (1 << (PhpParser.Catch - 43)) | (1 << (PhpParser.Class - 43)) | (1 << (PhpParser.Clone - 43)) | (1 << (PhpParser.Const - 43)) | (1 << (PhpParser.Continue - 43)) | (1 << (PhpParser.Declare - 43)) | (1 << (PhpParser.Default - 43)) | (1 << (PhpParser.Do - 43)) | (1 << (PhpParser.DoubleCast - 43)) | (1 << (PhpParser.DoubleType - 43)) | (1 << (PhpParser.Echo - 43)) | (1 << (PhpParser.Else - 43)) | (1 << (PhpParser.ElseIf - 43)) | (1 << (PhpParser.Empty - 43)) | (1 << (PhpParser.EndDeclare - 43)) | (1 << (PhpParser.EndFor - 43)) | (1 << (PhpParser.EndForeach - 43)) | (1 << (PhpParser.EndIf - 43)) | (1 << (PhpParser.EndSwitch - 43)) | (1 << (PhpParser.EndWhile - 43)) | (1 << (PhpParser.Eval - 43)) | (1 << (PhpParser.Exit - 43)) | (1 << (PhpParser.Extends - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (PhpParser.Final - 75)) | (1 << (PhpParser.Finally - 75)) | (1 << (PhpParser.FloatCast - 75)) | (1 << (PhpParser.For - 75)) | (1 << (PhpParser.Foreach - 75)) | (1 << (PhpParser.Function - 75)) | (1 << (PhpParser.Global - 75)) | (1 << (PhpParser.Goto - 75)) | (1 << (PhpParser.If - 75)) | (1 << (PhpParser.Implements - 75)) | (1 << (PhpParser.Import - 75)) | (1 << (PhpParser.Include - 75)) | (1 << (PhpParser.IncludeOnce - 75)) | (1 << (PhpParser.InstanceOf - 75)) | (1 << (PhpParser.InsteadOf - 75)) | (1 << (PhpParser.Int8Cast - 75)) | (1 << (PhpParser.Int16Cast - 75)) | (1 << (PhpParser.Int64Type - 75)) | (1 << (PhpParser.IntType - 75)) | (1 << (PhpParser.Interface - 75)) | (1 << (PhpParser.IsSet - 75)) | (1 << (PhpParser.List - 75)) | (1 << (PhpParser.LogicalAnd - 75)) | (1 << (PhpParser.LogicalOr - 75)) | (1 << (PhpParser.LogicalXor - 75)) | (1 << (PhpParser.Namespace - 75)) | (1 << (PhpParser.New - 75)) | (1 << (PhpParser.Null - 75)) | (1 << (PhpParser.ObjectType - 75)) | (1 << (PhpParser.Parent_ - 75)) | (1 << (PhpParser.Partial - 75)) | (1 << (PhpParser.Print - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (PhpParser.Private - 107)) | (1 << (PhpParser.Protected - 107)) | (1 << (PhpParser.Public - 107)) | (1 << (PhpParser.Require - 107)) | (1 << (PhpParser.RequireOnce - 107)) | (1 << (PhpParser.Resource - 107)) | (1 << (PhpParser.Return - 107)) | (1 << (PhpParser.Static - 107)) | (1 << (PhpParser.StringType - 107)) | (1 << (PhpParser.Switch - 107)) | (1 << (PhpParser.Throw - 107)) | (1 << (PhpParser.Trait - 107)) | (1 << (PhpParser.Try - 107)) | (1 << (PhpParser.Typeof - 107)) | (1 << (PhpParser.UintCast - 107)) | (1 << (PhpParser.UnicodeCast - 107)) | (1 << (PhpParser.Unset - 107)) | (1 << (PhpParser.Use - 107)) | (1 << (PhpParser.Var - 107)) | (1 << (PhpParser.While - 107)) | (1 << (PhpParser.Yield - 107)) | (1 << (PhpParser.From - 107)) | (1 << (PhpParser.LambdaFn - 107)) | (1 << (PhpParser.Get - 107)) | (1 << (PhpParser.Set - 107)) | (1 << (PhpParser.Call - 107)) | (1 << (PhpParser.CallStatic - 107)) | (1 << (PhpParser.Constructor - 107)) | (1 << (PhpParser.Destruct - 107)) | (1 << (PhpParser.Wakeup - 107)) | (1 << (PhpParser.Sleep - 107)) | (1 << (PhpParser.Autoload - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (PhpParser.IsSet__ - 139)) | (1 << (PhpParser.Unset__ - 139)) | (1 << (PhpParser.ToString__ - 139)) | (1 << (PhpParser.Invoke - 139)) | (1 << (PhpParser.SetState - 139)) | (1 << (PhpParser.Clone__ - 139)) | (1 << (PhpParser.DebugInfo - 139)) | (1 << (PhpParser.Namespace__ - 139)) | (1 << (PhpParser.Class__ - 139)) | (1 << (PhpParser.Traic__ - 139)) | (1 << (PhpParser.Function__ - 139)) | (1 << (PhpParser.Method__ - 139)) | (1 << (PhpParser.Line__ - 139)) | (1 << (PhpParser.File__ - 139)) | (1 << (PhpParser.Dir__ - 139)) | (1 << (PhpParser.Inc - 139)) | (1 << (PhpParser.Dec - 139)))) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & ((1 << (PhpParser.NamespaceSeparator - 187)) | (1 << (PhpParser.Ampersand - 187)) | (1 << (PhpParser.Bang - 187)) | (1 << (PhpParser.Plus - 187)) | (1 << (PhpParser.Minus - 187)) | (1 << (PhpParser.Tilde - 187)) | (1 << (PhpParser.SuppressWarnings - 187)) | (1 << (PhpParser.Dollar - 187)) | (1 << (PhpParser.OpenRoundBracket - 187)) | (1 << (PhpParser.OpenSquareBracket - 187)) | (1 << (PhpParser.VarName - 187)) | (1 << (PhpParser.Label - 187)))) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & ((1 << (PhpParser.Octal - 219)) | (1 << (PhpParser.Decimal - 219)) | (1 << (PhpParser.Real - 219)) | (1 << (PhpParser.Hex - 219)) | (1 << (PhpParser.Binary - 219)) | (1 << (PhpParser.BackQuoteString - 219)) | (1 << (PhpParser.SingleQuoteString - 219)) | (1 << (PhpParser.DoubleQuote - 219)) | (1 << (PhpParser.StartNowDoc - 219)) | (1 << (PhpParser.StartHereDoc - 219)))) !== 0)) {
                                {
                                    this.state = 1280;
                                    this.arrayItemList();
                                }
                            }
                            this.state = 1283;
                            this.match(PhpParser.CloseSquareBracket);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1290;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 127, this._ctx)) {
                    case 1:
                        {
                            this.state = 1286;
                            this.match(PhpParser.OpenSquareBracket);
                            this.state = 1287;
                            this.expression(0);
                            this.state = 1288;
                            this.match(PhpParser.CloseSquareBracket);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.lambdaFunctionExpr = function () {
        var _localctx = new LambdaFunctionExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, PhpParser.RULE_lambdaFunctionExpr);
        var _la;
        try {
            this.state = 1318;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PhpParser.Function:
                case PhpParser.Static:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1293;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PhpParser.Static) {
                            {
                                this.state = 1292;
                                this.match(PhpParser.Static);
                            }
                        }
                        this.state = 1295;
                        this.match(PhpParser.Function);
                        this.state = 1297;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PhpParser.Ampersand) {
                            {
                                this.state = 1296;
                                this.match(PhpParser.Ampersand);
                            }
                        }
                        this.state = 1299;
                        this.match(PhpParser.OpenRoundBracket);
                        this.state = 1300;
                        this.formalParameterList();
                        this.state = 1301;
                        this.match(PhpParser.CloseRoundBracket);
                        this.state = 1303;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PhpParser.Use) {
                            {
                                this.state = 1302;
                                this.lambdaFunctionUseVars();
                            }
                        }
                        this.state = 1307;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PhpParser.Colon) {
                            {
                                this.state = 1305;
                                this.match(PhpParser.Colon);
                                this.state = 1306;
                                this.typeHint();
                            }
                        }
                        this.state = 1309;
                        this.blockStatement();
                    }
                    break;
                case PhpParser.LambdaFn:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1311;
                        this.match(PhpParser.LambdaFn);
                        this.state = 1312;
                        this.match(PhpParser.OpenRoundBracket);
                        this.state = 1313;
                        this.formalParameterList();
                        this.state = 1314;
                        this.match(PhpParser.CloseRoundBracket);
                        this.state = 1315;
                        this.match(PhpParser.DoubleArrow);
                        this.state = 1316;
                        this.expression(0);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.newExpr = function () {
        var _localctx = new NewExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, PhpParser.RULE_newExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1320;
                this.match(PhpParser.New);
                this.state = 1321;
                this.typeRef();
                this.state = 1323;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 133, this._ctx)) {
                    case 1:
                        {
                            this.state = 1322;
                            this.arguments();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.assignmentOperator = function () {
        var _localctx = new AssignmentOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, PhpParser.RULE_assignmentOperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1325;
                _la = this._input.LA(1);
                if (!(((((_la - 166)) & ~0x1F) === 0 && ((1 << (_la - 166)) & ((1 << (PhpParser.PlusEqual - 166)) | (1 << (PhpParser.MinusEqual - 166)) | (1 << (PhpParser.MulEqual - 166)) | (1 << (PhpParser.PowEqual - 166)) | (1 << (PhpParser.DivEqual - 166)) | (1 << (PhpParser.Concaequal - 166)) | (1 << (PhpParser.ModEqual - 166)) | (1 << (PhpParser.ShiftLeftEqual - 166)) | (1 << (PhpParser.ShiftRightEqual - 166)) | (1 << (PhpParser.AndEqual - 166)) | (1 << (PhpParser.OrEqual - 166)) | (1 << (PhpParser.XorEqual - 166)) | (1 << (PhpParser.NullCoalescingEqual - 166)))) !== 0) || _la === PhpParser.Eq)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.yieldExpression = function () {
        var _localctx = new YieldExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, PhpParser.RULE_yieldExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1327;
                this.match(PhpParser.Yield);
                this.state = 1335;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 135, this._ctx)) {
                    case 1:
                        {
                            this.state = 1328;
                            this.expression(0);
                            this.state = 1331;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === PhpParser.DoubleArrow) {
                                {
                                    this.state = 1329;
                                    this.match(PhpParser.DoubleArrow);
                                    this.state = 1330;
                                    this.expression(0);
                                }
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 1333;
                            this.match(PhpParser.From);
                            this.state = 1334;
                            this.expression(0);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.arrayItemList = function () {
        var _localctx = new ArrayItemListContext(this._ctx, this.state);
        this.enterRule(_localctx, 180, PhpParser.RULE_arrayItemList);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1337;
                this.arrayItem();
                this.state = 1342;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1338;
                                this.match(PhpParser.Comma);
                                this.state = 1339;
                                this.arrayItem();
                            }
                        }
                    }
                    this.state = 1344;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
                }
                this.state = 1346;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PhpParser.Comma) {
                    {
                        this.state = 1345;
                        this.match(PhpParser.Comma);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.arrayItem = function () {
        var _localctx = new ArrayItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 182, PhpParser.RULE_arrayItem);
        var _la;
        try {
            this.state = 1360;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 140, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1348;
                        this.expression(0);
                        this.state = 1351;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PhpParser.DoubleArrow) {
                            {
                                this.state = 1349;
                                this.match(PhpParser.DoubleArrow);
                                this.state = 1350;
                                this.expression(0);
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1356;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (PhpParser.Abstract - 43)) | (1 << (PhpParser.Array - 43)) | (1 << (PhpParser.As - 43)) | (1 << (PhpParser.BinaryCast - 43)) | (1 << (PhpParser.BoolType - 43)) | (1 << (PhpParser.BooleanConstant - 43)) | (1 << (PhpParser.Break - 43)) | (1 << (PhpParser.Callable - 43)) | (1 << (PhpParser.Case - 43)) | (1 << (PhpParser.Catch - 43)) | (1 << (PhpParser.Class - 43)) | (1 << (PhpParser.Clone - 43)) | (1 << (PhpParser.Const - 43)) | (1 << (PhpParser.Continue - 43)) | (1 << (PhpParser.Declare - 43)) | (1 << (PhpParser.Default - 43)) | (1 << (PhpParser.Do - 43)) | (1 << (PhpParser.DoubleCast - 43)) | (1 << (PhpParser.DoubleType - 43)) | (1 << (PhpParser.Echo - 43)) | (1 << (PhpParser.Else - 43)) | (1 << (PhpParser.ElseIf - 43)) | (1 << (PhpParser.Empty - 43)) | (1 << (PhpParser.EndDeclare - 43)) | (1 << (PhpParser.EndFor - 43)) | (1 << (PhpParser.EndForeach - 43)) | (1 << (PhpParser.EndIf - 43)) | (1 << (PhpParser.EndSwitch - 43)) | (1 << (PhpParser.EndWhile - 43)) | (1 << (PhpParser.Eval - 43)) | (1 << (PhpParser.Exit - 43)) | (1 << (PhpParser.Extends - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (PhpParser.Final - 75)) | (1 << (PhpParser.Finally - 75)) | (1 << (PhpParser.FloatCast - 75)) | (1 << (PhpParser.For - 75)) | (1 << (PhpParser.Foreach - 75)) | (1 << (PhpParser.Function - 75)) | (1 << (PhpParser.Global - 75)) | (1 << (PhpParser.Goto - 75)) | (1 << (PhpParser.If - 75)) | (1 << (PhpParser.Implements - 75)) | (1 << (PhpParser.Import - 75)) | (1 << (PhpParser.Include - 75)) | (1 << (PhpParser.IncludeOnce - 75)) | (1 << (PhpParser.InstanceOf - 75)) | (1 << (PhpParser.InsteadOf - 75)) | (1 << (PhpParser.Int8Cast - 75)) | (1 << (PhpParser.Int16Cast - 75)) | (1 << (PhpParser.Int64Type - 75)) | (1 << (PhpParser.IntType - 75)) | (1 << (PhpParser.Interface - 75)) | (1 << (PhpParser.IsSet - 75)) | (1 << (PhpParser.List - 75)) | (1 << (PhpParser.LogicalAnd - 75)) | (1 << (PhpParser.LogicalOr - 75)) | (1 << (PhpParser.LogicalXor - 75)) | (1 << (PhpParser.Namespace - 75)) | (1 << (PhpParser.New - 75)) | (1 << (PhpParser.Null - 75)) | (1 << (PhpParser.ObjectType - 75)) | (1 << (PhpParser.Parent_ - 75)) | (1 << (PhpParser.Partial - 75)) | (1 << (PhpParser.Print - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (PhpParser.Private - 107)) | (1 << (PhpParser.Protected - 107)) | (1 << (PhpParser.Public - 107)) | (1 << (PhpParser.Require - 107)) | (1 << (PhpParser.RequireOnce - 107)) | (1 << (PhpParser.Resource - 107)) | (1 << (PhpParser.Return - 107)) | (1 << (PhpParser.Static - 107)) | (1 << (PhpParser.StringType - 107)) | (1 << (PhpParser.Switch - 107)) | (1 << (PhpParser.Throw - 107)) | (1 << (PhpParser.Trait - 107)) | (1 << (PhpParser.Try - 107)) | (1 << (PhpParser.Typeof - 107)) | (1 << (PhpParser.UintCast - 107)) | (1 << (PhpParser.UnicodeCast - 107)) | (1 << (PhpParser.Unset - 107)) | (1 << (PhpParser.Use - 107)) | (1 << (PhpParser.Var - 107)) | (1 << (PhpParser.While - 107)) | (1 << (PhpParser.Yield - 107)) | (1 << (PhpParser.From - 107)) | (1 << (PhpParser.LambdaFn - 107)) | (1 << (PhpParser.Get - 107)) | (1 << (PhpParser.Set - 107)) | (1 << (PhpParser.Call - 107)) | (1 << (PhpParser.CallStatic - 107)) | (1 << (PhpParser.Constructor - 107)) | (1 << (PhpParser.Destruct - 107)) | (1 << (PhpParser.Wakeup - 107)) | (1 << (PhpParser.Sleep - 107)) | (1 << (PhpParser.Autoload - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (PhpParser.IsSet__ - 139)) | (1 << (PhpParser.Unset__ - 139)) | (1 << (PhpParser.ToString__ - 139)) | (1 << (PhpParser.Invoke - 139)) | (1 << (PhpParser.SetState - 139)) | (1 << (PhpParser.Clone__ - 139)) | (1 << (PhpParser.DebugInfo - 139)) | (1 << (PhpParser.Namespace__ - 139)) | (1 << (PhpParser.Class__ - 139)) | (1 << (PhpParser.Traic__ - 139)) | (1 << (PhpParser.Function__ - 139)) | (1 << (PhpParser.Method__ - 139)) | (1 << (PhpParser.Line__ - 139)) | (1 << (PhpParser.File__ - 139)) | (1 << (PhpParser.Dir__ - 139)) | (1 << (PhpParser.Inc - 139)) | (1 << (PhpParser.Dec - 139)))) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & ((1 << (PhpParser.NamespaceSeparator - 187)) | (1 << (PhpParser.Bang - 187)) | (1 << (PhpParser.Plus - 187)) | (1 << (PhpParser.Minus - 187)) | (1 << (PhpParser.Tilde - 187)) | (1 << (PhpParser.SuppressWarnings - 187)) | (1 << (PhpParser.Dollar - 187)) | (1 << (PhpParser.OpenRoundBracket - 187)) | (1 << (PhpParser.OpenSquareBracket - 187)) | (1 << (PhpParser.VarName - 187)) | (1 << (PhpParser.Label - 187)))) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & ((1 << (PhpParser.Octal - 219)) | (1 << (PhpParser.Decimal - 219)) | (1 << (PhpParser.Real - 219)) | (1 << (PhpParser.Hex - 219)) | (1 << (PhpParser.Binary - 219)) | (1 << (PhpParser.BackQuoteString - 219)) | (1 << (PhpParser.SingleQuoteString - 219)) | (1 << (PhpParser.DoubleQuote - 219)) | (1 << (PhpParser.StartNowDoc - 219)) | (1 << (PhpParser.StartHereDoc - 219)))) !== 0)) {
                            {
                                this.state = 1353;
                                this.expression(0);
                                this.state = 1354;
                                this.match(PhpParser.DoubleArrow);
                            }
                        }
                        this.state = 1358;
                        this.match(PhpParser.Ampersand);
                        this.state = 1359;
                        this.chain();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.lambdaFunctionUseVars = function () {
        var _localctx = new LambdaFunctionUseVarsContext(this._ctx, this.state);
        this.enterRule(_localctx, 184, PhpParser.RULE_lambdaFunctionUseVars);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1362;
                this.match(PhpParser.Use);
                this.state = 1363;
                this.match(PhpParser.OpenRoundBracket);
                this.state = 1364;
                this.lambdaFunctionUseVar();
                this.state = 1369;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PhpParser.Comma) {
                    {
                        {
                            this.state = 1365;
                            this.match(PhpParser.Comma);
                            this.state = 1366;
                            this.lambdaFunctionUseVar();
                        }
                    }
                    this.state = 1371;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1372;
                this.match(PhpParser.CloseRoundBracket);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.lambdaFunctionUseVar = function () {
        var _localctx = new LambdaFunctionUseVarContext(this._ctx, this.state);
        this.enterRule(_localctx, 186, PhpParser.RULE_lambdaFunctionUseVar);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1375;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PhpParser.Ampersand) {
                    {
                        this.state = 1374;
                        this.match(PhpParser.Ampersand);
                    }
                }
                this.state = 1377;
                this.match(PhpParser.VarName);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.qualifiedStaticTypeRef = function () {
        var _localctx = new QualifiedStaticTypeRefContext(this._ctx, this.state);
        this.enterRule(_localctx, 188, PhpParser.RULE_qualifiedStaticTypeRef);
        var _la;
        try {
            this.state = 1384;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 144, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1379;
                        this.qualifiedNamespaceName();
                        this.state = 1381;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PhpParser.Lgeneric) {
                            {
                                this.state = 1380;
                                this.genericDynamicArgs();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1383;
                        this.match(PhpParser.Static);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.typeRef = function () {
        var _localctx = new TypeRefContext(this._ctx, this.state);
        this.enterRule(_localctx, 190, PhpParser.RULE_typeRef);
        try {
            this.state = 1396;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 147, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1388;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 145, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1386;
                                    this.qualifiedNamespaceName();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1387;
                                    this.indirectTypeRef();
                                }
                                break;
                        }
                        this.state = 1391;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 146, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1390;
                                    this.genericDynamicArgs();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1393;
                        this.primitiveType();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1394;
                        this.match(PhpParser.Static);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1395;
                        this.anoymousClass();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.anoymousClass = function () {
        var _localctx = new AnoymousClassContext(this._ctx, this.state);
        this.enterRule(_localctx, 192, PhpParser.RULE_anoymousClass);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1398;
                this.attributes();
                this.state = 1400;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PhpParser.Private) {
                    {
                        this.state = 1399;
                        this.match(PhpParser.Private);
                    }
                }
                this.state = 1403;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PhpParser.Abstract || _la === PhpParser.Final) {
                    {
                        this.state = 1402;
                        this.modifier();
                    }
                }
                this.state = 1406;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PhpParser.Partial) {
                    {
                        this.state = 1405;
                        this.match(PhpParser.Partial);
                    }
                }
                this.state = 1429;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PhpParser.Class:
                    case PhpParser.Trait:
                        {
                            this.state = 1408;
                            this.classEntryType();
                            this.state = 1410;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === PhpParser.Lgeneric) {
                                {
                                    this.state = 1409;
                                    this.typeParameterListInBrackets();
                                }
                            }
                            this.state = 1414;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === PhpParser.Extends) {
                                {
                                    this.state = 1412;
                                    this.match(PhpParser.Extends);
                                    this.state = 1413;
                                    this.qualifiedStaticTypeRef();
                                }
                            }
                            this.state = 1418;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === PhpParser.Implements) {
                                {
                                    this.state = 1416;
                                    this.match(PhpParser.Implements);
                                    this.state = 1417;
                                    this.interfaceList();
                                }
                            }
                        }
                        break;
                    case PhpParser.Interface:
                        {
                            this.state = 1420;
                            this.match(PhpParser.Interface);
                            this.state = 1421;
                            this.identifier();
                            this.state = 1423;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === PhpParser.Lgeneric) {
                                {
                                    this.state = 1422;
                                    this.typeParameterListInBrackets();
                                }
                            }
                            this.state = 1427;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === PhpParser.Extends) {
                                {
                                    this.state = 1425;
                                    this.match(PhpParser.Extends);
                                    this.state = 1426;
                                    this.interfaceList();
                                }
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1431;
                this.match(PhpParser.OpenCurlyBracket);
                this.state = 1435;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (PhpParser.Abstract - 43)) | (1 << (PhpParser.Array - 43)) | (1 << (PhpParser.As - 43)) | (1 << (PhpParser.BinaryCast - 43)) | (1 << (PhpParser.BoolType - 43)) | (1 << (PhpParser.BooleanConstant - 43)) | (1 << (PhpParser.Break - 43)) | (1 << (PhpParser.Callable - 43)) | (1 << (PhpParser.Case - 43)) | (1 << (PhpParser.Catch - 43)) | (1 << (PhpParser.Class - 43)) | (1 << (PhpParser.Clone - 43)) | (1 << (PhpParser.Const - 43)) | (1 << (PhpParser.Continue - 43)) | (1 << (PhpParser.Declare - 43)) | (1 << (PhpParser.Default - 43)) | (1 << (PhpParser.Do - 43)) | (1 << (PhpParser.DoubleCast - 43)) | (1 << (PhpParser.DoubleType - 43)) | (1 << (PhpParser.Echo - 43)) | (1 << (PhpParser.Else - 43)) | (1 << (PhpParser.ElseIf - 43)) | (1 << (PhpParser.Empty - 43)) | (1 << (PhpParser.EndDeclare - 43)) | (1 << (PhpParser.EndFor - 43)) | (1 << (PhpParser.EndForeach - 43)) | (1 << (PhpParser.EndIf - 43)) | (1 << (PhpParser.EndSwitch - 43)) | (1 << (PhpParser.EndWhile - 43)) | (1 << (PhpParser.Eval - 43)) | (1 << (PhpParser.Exit - 43)) | (1 << (PhpParser.Extends - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (PhpParser.Final - 75)) | (1 << (PhpParser.Finally - 75)) | (1 << (PhpParser.FloatCast - 75)) | (1 << (PhpParser.For - 75)) | (1 << (PhpParser.Foreach - 75)) | (1 << (PhpParser.Function - 75)) | (1 << (PhpParser.Global - 75)) | (1 << (PhpParser.Goto - 75)) | (1 << (PhpParser.If - 75)) | (1 << (PhpParser.Implements - 75)) | (1 << (PhpParser.Import - 75)) | (1 << (PhpParser.Include - 75)) | (1 << (PhpParser.IncludeOnce - 75)) | (1 << (PhpParser.InstanceOf - 75)) | (1 << (PhpParser.InsteadOf - 75)) | (1 << (PhpParser.Int8Cast - 75)) | (1 << (PhpParser.Int16Cast - 75)) | (1 << (PhpParser.Int64Type - 75)) | (1 << (PhpParser.IntType - 75)) | (1 << (PhpParser.Interface - 75)) | (1 << (PhpParser.IsSet - 75)) | (1 << (PhpParser.List - 75)) | (1 << (PhpParser.LogicalAnd - 75)) | (1 << (PhpParser.LogicalOr - 75)) | (1 << (PhpParser.LogicalXor - 75)) | (1 << (PhpParser.Namespace - 75)) | (1 << (PhpParser.New - 75)) | (1 << (PhpParser.Null - 75)) | (1 << (PhpParser.ObjectType - 75)) | (1 << (PhpParser.Parent_ - 75)) | (1 << (PhpParser.Partial - 75)) | (1 << (PhpParser.Print - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (PhpParser.Private - 107)) | (1 << (PhpParser.Protected - 107)) | (1 << (PhpParser.Public - 107)) | (1 << (PhpParser.Require - 107)) | (1 << (PhpParser.RequireOnce - 107)) | (1 << (PhpParser.Resource - 107)) | (1 << (PhpParser.Return - 107)) | (1 << (PhpParser.Static - 107)) | (1 << (PhpParser.StringType - 107)) | (1 << (PhpParser.Switch - 107)) | (1 << (PhpParser.Throw - 107)) | (1 << (PhpParser.Trait - 107)) | (1 << (PhpParser.Try - 107)) | (1 << (PhpParser.Typeof - 107)) | (1 << (PhpParser.UintCast - 107)) | (1 << (PhpParser.UnicodeCast - 107)) | (1 << (PhpParser.Unset - 107)) | (1 << (PhpParser.Use - 107)) | (1 << (PhpParser.Var - 107)) | (1 << (PhpParser.While - 107)) | (1 << (PhpParser.Yield - 107)) | (1 << (PhpParser.From - 107)) | (1 << (PhpParser.Get - 107)) | (1 << (PhpParser.Set - 107)) | (1 << (PhpParser.Call - 107)) | (1 << (PhpParser.CallStatic - 107)) | (1 << (PhpParser.Constructor - 107)) | (1 << (PhpParser.Destruct - 107)) | (1 << (PhpParser.Wakeup - 107)) | (1 << (PhpParser.Sleep - 107)) | (1 << (PhpParser.Autoload - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (PhpParser.IsSet__ - 139)) | (1 << (PhpParser.Unset__ - 139)) | (1 << (PhpParser.ToString__ - 139)) | (1 << (PhpParser.Invoke - 139)) | (1 << (PhpParser.SetState - 139)) | (1 << (PhpParser.Clone__ - 139)) | (1 << (PhpParser.DebugInfo - 139)) | (1 << (PhpParser.Namespace__ - 139)) | (1 << (PhpParser.Class__ - 139)) | (1 << (PhpParser.Traic__ - 139)) | (1 << (PhpParser.Function__ - 139)) | (1 << (PhpParser.Method__ - 139)) | (1 << (PhpParser.Line__ - 139)) | (1 << (PhpParser.File__ - 139)) | (1 << (PhpParser.Dir__ - 139)))) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & ((1 << (PhpParser.NamespaceSeparator - 187)) | (1 << (PhpParser.Ellipsis - 187)) | (1 << (PhpParser.Ampersand - 187)) | (1 << (PhpParser.QuestionMark - 187)) | (1 << (PhpParser.OpenSquareBracket - 187)) | (1 << (PhpParser.VarName - 187)) | (1 << (PhpParser.Label - 187)))) !== 0)) {
                    {
                        {
                            this.state = 1432;
                            this.classStatement();
                        }
                    }
                    this.state = 1437;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1438;
                this.match(PhpParser.CloseCurlyBracket);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.indirectTypeRef = function () {
        var _localctx = new IndirectTypeRefContext(this._ctx, this.state);
        this.enterRule(_localctx, 194, PhpParser.RULE_indirectTypeRef);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1440;
                this.chainBase();
                this.state = 1445;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1441;
                                this.match(PhpParser.ObjectOperator);
                                this.state = 1442;
                                this.keyedFieldName();
                            }
                        }
                    }
                    this.state = 1447;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.qualifiedNamespaceName = function () {
        var _localctx = new QualifiedNamespaceNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 196, PhpParser.RULE_qualifiedNamespaceName);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1449;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 159, this._ctx)) {
                    case 1:
                        {
                            this.state = 1448;
                            this.match(PhpParser.Namespace);
                        }
                        break;
                }
                this.state = 1452;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PhpParser.NamespaceSeparator) {
                    {
                        this.state = 1451;
                        this.match(PhpParser.NamespaceSeparator);
                    }
                }
                this.state = 1454;
                this.namespaceNameList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.namespaceNameList = function () {
        var _localctx = new NamespaceNameListContext(this._ctx, this.state);
        this.enterRule(_localctx, 198, PhpParser.RULE_namespaceNameList);
        try {
            var _alt = void 0;
            this.state = 1469;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 163, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1456;
                        this.identifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1457;
                        this.identifier();
                        this.state = 1462;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 161, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1458;
                                        this.match(PhpParser.NamespaceSeparator);
                                        this.state = 1459;
                                        this.identifier();
                                    }
                                }
                            }
                            this.state = 1464;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 161, this._ctx);
                        }
                        this.state = 1467;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 162, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1465;
                                    this.match(PhpParser.NamespaceSeparator);
                                    this.state = 1466;
                                    this.namespaceNameTail();
                                }
                                break;
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.namespaceNameTail = function () {
        var _localctx = new NamespaceNameTailContext(this._ctx, this.state);
        this.enterRule(_localctx, 200, PhpParser.RULE_namespaceNameTail);
        var _la;
        try {
            var _alt = void 0;
            this.state = 1490;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PhpParser.Abstract:
                case PhpParser.Array:
                case PhpParser.As:
                case PhpParser.BinaryCast:
                case PhpParser.BoolType:
                case PhpParser.BooleanConstant:
                case PhpParser.Break:
                case PhpParser.Callable:
                case PhpParser.Case:
                case PhpParser.Catch:
                case PhpParser.Class:
                case PhpParser.Clone:
                case PhpParser.Const:
                case PhpParser.Continue:
                case PhpParser.Declare:
                case PhpParser.Default:
                case PhpParser.Do:
                case PhpParser.DoubleCast:
                case PhpParser.DoubleType:
                case PhpParser.Echo:
                case PhpParser.Else:
                case PhpParser.ElseIf:
                case PhpParser.Empty:
                case PhpParser.EndDeclare:
                case PhpParser.EndFor:
                case PhpParser.EndForeach:
                case PhpParser.EndIf:
                case PhpParser.EndSwitch:
                case PhpParser.EndWhile:
                case PhpParser.Eval:
                case PhpParser.Exit:
                case PhpParser.Extends:
                case PhpParser.Final:
                case PhpParser.Finally:
                case PhpParser.FloatCast:
                case PhpParser.For:
                case PhpParser.Foreach:
                case PhpParser.Function:
                case PhpParser.Global:
                case PhpParser.Goto:
                case PhpParser.If:
                case PhpParser.Implements:
                case PhpParser.Import:
                case PhpParser.Include:
                case PhpParser.IncludeOnce:
                case PhpParser.InstanceOf:
                case PhpParser.InsteadOf:
                case PhpParser.Int8Cast:
                case PhpParser.Int16Cast:
                case PhpParser.Int64Type:
                case PhpParser.IntType:
                case PhpParser.Interface:
                case PhpParser.IsSet:
                case PhpParser.List:
                case PhpParser.LogicalAnd:
                case PhpParser.LogicalOr:
                case PhpParser.LogicalXor:
                case PhpParser.Namespace:
                case PhpParser.New:
                case PhpParser.Null:
                case PhpParser.ObjectType:
                case PhpParser.Parent_:
                case PhpParser.Partial:
                case PhpParser.Print:
                case PhpParser.Private:
                case PhpParser.Protected:
                case PhpParser.Public:
                case PhpParser.Require:
                case PhpParser.RequireOnce:
                case PhpParser.Resource:
                case PhpParser.Return:
                case PhpParser.Static:
                case PhpParser.StringType:
                case PhpParser.Switch:
                case PhpParser.Throw:
                case PhpParser.Trait:
                case PhpParser.Try:
                case PhpParser.Typeof:
                case PhpParser.UintCast:
                case PhpParser.UnicodeCast:
                case PhpParser.Unset:
                case PhpParser.Use:
                case PhpParser.Var:
                case PhpParser.While:
                case PhpParser.Yield:
                case PhpParser.From:
                case PhpParser.Get:
                case PhpParser.Set:
                case PhpParser.Call:
                case PhpParser.CallStatic:
                case PhpParser.Constructor:
                case PhpParser.Destruct:
                case PhpParser.Wakeup:
                case PhpParser.Sleep:
                case PhpParser.Autoload:
                case PhpParser.IsSet__:
                case PhpParser.Unset__:
                case PhpParser.ToString__:
                case PhpParser.Invoke:
                case PhpParser.SetState:
                case PhpParser.Clone__:
                case PhpParser.DebugInfo:
                case PhpParser.Namespace__:
                case PhpParser.Class__:
                case PhpParser.Traic__:
                case PhpParser.Function__:
                case PhpParser.Method__:
                case PhpParser.Line__:
                case PhpParser.File__:
                case PhpParser.Dir__:
                case PhpParser.Label:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1471;
                        this.identifier();
                        this.state = 1474;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 164, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1472;
                                    this.match(PhpParser.As);
                                    this.state = 1473;
                                    this.identifier();
                                }
                                break;
                        }
                    }
                    break;
                case PhpParser.OpenCurlyBracket:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1476;
                        this.match(PhpParser.OpenCurlyBracket);
                        this.state = 1477;
                        this.namespaceNameTail();
                        this.state = 1482;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1478;
                                        this.match(PhpParser.Comma);
                                        this.state = 1479;
                                        this.namespaceNameTail();
                                    }
                                }
                            }
                            this.state = 1484;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
                        }
                        this.state = 1486;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PhpParser.Comma) {
                            {
                                this.state = 1485;
                                this.match(PhpParser.Comma);
                            }
                        }
                        this.state = 1488;
                        this.match(PhpParser.CloseCurlyBracket);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.qualifiedNamespaceNameList = function () {
        var _localctx = new QualifiedNamespaceNameListContext(this._ctx, this.state);
        this.enterRule(_localctx, 202, PhpParser.RULE_qualifiedNamespaceNameList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1492;
                this.qualifiedNamespaceName();
                this.state = 1497;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PhpParser.Comma) {
                    {
                        {
                            this.state = 1493;
                            this.match(PhpParser.Comma);
                            this.state = 1494;
                            this.qualifiedNamespaceName();
                        }
                    }
                    this.state = 1499;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.arguments = function () {
        var _localctx = new ArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 204, PhpParser.RULE_arguments);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1500;
                this.match(PhpParser.OpenRoundBracket);
                this.state = 1510;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 170, this._ctx)) {
                    case 1:
                        {
                            this.state = 1501;
                            this.actualArgument();
                            this.state = 1506;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1502;
                                            this.match(PhpParser.Comma);
                                            this.state = 1503;
                                            this.actualArgument();
                                        }
                                    }
                                }
                                this.state = 1508;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 1509;
                            this.yieldExpression();
                        }
                        break;
                }
                this.state = 1513;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PhpParser.Comma) {
                    {
                        this.state = 1512;
                        this.match(PhpParser.Comma);
                    }
                }
                this.state = 1515;
                this.match(PhpParser.CloseRoundBracket);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.actualArgument = function () {
        var _localctx = new ActualArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 206, PhpParser.RULE_actualArgument);
        var _la;
        try {
            this.state = 1523;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PhpParser.Abstract:
                case PhpParser.Array:
                case PhpParser.As:
                case PhpParser.BinaryCast:
                case PhpParser.BoolType:
                case PhpParser.BooleanConstant:
                case PhpParser.Break:
                case PhpParser.Callable:
                case PhpParser.Case:
                case PhpParser.Catch:
                case PhpParser.Class:
                case PhpParser.Clone:
                case PhpParser.Const:
                case PhpParser.Continue:
                case PhpParser.Declare:
                case PhpParser.Default:
                case PhpParser.Do:
                case PhpParser.DoubleCast:
                case PhpParser.DoubleType:
                case PhpParser.Echo:
                case PhpParser.Else:
                case PhpParser.ElseIf:
                case PhpParser.Empty:
                case PhpParser.EndDeclare:
                case PhpParser.EndFor:
                case PhpParser.EndForeach:
                case PhpParser.EndIf:
                case PhpParser.EndSwitch:
                case PhpParser.EndWhile:
                case PhpParser.Eval:
                case PhpParser.Exit:
                case PhpParser.Extends:
                case PhpParser.Final:
                case PhpParser.Finally:
                case PhpParser.FloatCast:
                case PhpParser.For:
                case PhpParser.Foreach:
                case PhpParser.Function:
                case PhpParser.Global:
                case PhpParser.Goto:
                case PhpParser.If:
                case PhpParser.Implements:
                case PhpParser.Import:
                case PhpParser.Include:
                case PhpParser.IncludeOnce:
                case PhpParser.InstanceOf:
                case PhpParser.InsteadOf:
                case PhpParser.Int8Cast:
                case PhpParser.Int16Cast:
                case PhpParser.Int64Type:
                case PhpParser.IntType:
                case PhpParser.Interface:
                case PhpParser.IsSet:
                case PhpParser.List:
                case PhpParser.LogicalAnd:
                case PhpParser.LogicalOr:
                case PhpParser.LogicalXor:
                case PhpParser.Namespace:
                case PhpParser.New:
                case PhpParser.Null:
                case PhpParser.ObjectType:
                case PhpParser.Parent_:
                case PhpParser.Partial:
                case PhpParser.Print:
                case PhpParser.Private:
                case PhpParser.Protected:
                case PhpParser.Public:
                case PhpParser.Require:
                case PhpParser.RequireOnce:
                case PhpParser.Resource:
                case PhpParser.Return:
                case PhpParser.Static:
                case PhpParser.StringType:
                case PhpParser.Switch:
                case PhpParser.Throw:
                case PhpParser.Trait:
                case PhpParser.Try:
                case PhpParser.Typeof:
                case PhpParser.UintCast:
                case PhpParser.UnicodeCast:
                case PhpParser.Unset:
                case PhpParser.Use:
                case PhpParser.Var:
                case PhpParser.While:
                case PhpParser.Yield:
                case PhpParser.From:
                case PhpParser.LambdaFn:
                case PhpParser.Get:
                case PhpParser.Set:
                case PhpParser.Call:
                case PhpParser.CallStatic:
                case PhpParser.Constructor:
                case PhpParser.Destruct:
                case PhpParser.Wakeup:
                case PhpParser.Sleep:
                case PhpParser.Autoload:
                case PhpParser.IsSet__:
                case PhpParser.Unset__:
                case PhpParser.ToString__:
                case PhpParser.Invoke:
                case PhpParser.SetState:
                case PhpParser.Clone__:
                case PhpParser.DebugInfo:
                case PhpParser.Namespace__:
                case PhpParser.Class__:
                case PhpParser.Traic__:
                case PhpParser.Function__:
                case PhpParser.Method__:
                case PhpParser.Line__:
                case PhpParser.File__:
                case PhpParser.Dir__:
                case PhpParser.Inc:
                case PhpParser.Dec:
                case PhpParser.NamespaceSeparator:
                case PhpParser.Ellipsis:
                case PhpParser.Bang:
                case PhpParser.Plus:
                case PhpParser.Minus:
                case PhpParser.Tilde:
                case PhpParser.SuppressWarnings:
                case PhpParser.Dollar:
                case PhpParser.OpenRoundBracket:
                case PhpParser.OpenSquareBracket:
                case PhpParser.VarName:
                case PhpParser.Label:
                case PhpParser.Octal:
                case PhpParser.Decimal:
                case PhpParser.Real:
                case PhpParser.Hex:
                case PhpParser.Binary:
                case PhpParser.BackQuoteString:
                case PhpParser.SingleQuoteString:
                case PhpParser.DoubleQuote:
                case PhpParser.StartNowDoc:
                case PhpParser.StartHereDoc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1518;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PhpParser.Ellipsis) {
                            {
                                this.state = 1517;
                                this.match(PhpParser.Ellipsis);
                            }
                        }
                        this.state = 1520;
                        this.expression(0);
                    }
                    break;
                case PhpParser.Ampersand:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1521;
                        this.match(PhpParser.Ampersand);
                        this.state = 1522;
                        this.chain();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.constantInititalizer = function () {
        var _localctx = new ConstantInititalizerContext(this._ctx, this.state);
        this.enterRule(_localctx, 208, PhpParser.RULE_constantInititalizer);
        var _la;
        try {
            this.state = 1546;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 178, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1525;
                        this.constant();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1526;
                        this.string();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1527;
                        this.match(PhpParser.Array);
                        this.state = 1528;
                        this.match(PhpParser.OpenRoundBracket);
                        this.state = 1533;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (PhpParser.Abstract - 43)) | (1 << (PhpParser.Array - 43)) | (1 << (PhpParser.As - 43)) | (1 << (PhpParser.BinaryCast - 43)) | (1 << (PhpParser.BoolType - 43)) | (1 << (PhpParser.BooleanConstant - 43)) | (1 << (PhpParser.Break - 43)) | (1 << (PhpParser.Callable - 43)) | (1 << (PhpParser.Case - 43)) | (1 << (PhpParser.Catch - 43)) | (1 << (PhpParser.Class - 43)) | (1 << (PhpParser.Clone - 43)) | (1 << (PhpParser.Const - 43)) | (1 << (PhpParser.Continue - 43)) | (1 << (PhpParser.Declare - 43)) | (1 << (PhpParser.Default - 43)) | (1 << (PhpParser.Do - 43)) | (1 << (PhpParser.DoubleCast - 43)) | (1 << (PhpParser.DoubleType - 43)) | (1 << (PhpParser.Echo - 43)) | (1 << (PhpParser.Else - 43)) | (1 << (PhpParser.ElseIf - 43)) | (1 << (PhpParser.Empty - 43)) | (1 << (PhpParser.EndDeclare - 43)) | (1 << (PhpParser.EndFor - 43)) | (1 << (PhpParser.EndForeach - 43)) | (1 << (PhpParser.EndIf - 43)) | (1 << (PhpParser.EndSwitch - 43)) | (1 << (PhpParser.EndWhile - 43)) | (1 << (PhpParser.Eval - 43)) | (1 << (PhpParser.Exit - 43)) | (1 << (PhpParser.Extends - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (PhpParser.Final - 75)) | (1 << (PhpParser.Finally - 75)) | (1 << (PhpParser.FloatCast - 75)) | (1 << (PhpParser.For - 75)) | (1 << (PhpParser.Foreach - 75)) | (1 << (PhpParser.Function - 75)) | (1 << (PhpParser.Global - 75)) | (1 << (PhpParser.Goto - 75)) | (1 << (PhpParser.If - 75)) | (1 << (PhpParser.Implements - 75)) | (1 << (PhpParser.Import - 75)) | (1 << (PhpParser.Include - 75)) | (1 << (PhpParser.IncludeOnce - 75)) | (1 << (PhpParser.InstanceOf - 75)) | (1 << (PhpParser.InsteadOf - 75)) | (1 << (PhpParser.Int8Cast - 75)) | (1 << (PhpParser.Int16Cast - 75)) | (1 << (PhpParser.Int64Type - 75)) | (1 << (PhpParser.IntType - 75)) | (1 << (PhpParser.Interface - 75)) | (1 << (PhpParser.IsSet - 75)) | (1 << (PhpParser.List - 75)) | (1 << (PhpParser.LogicalAnd - 75)) | (1 << (PhpParser.LogicalOr - 75)) | (1 << (PhpParser.LogicalXor - 75)) | (1 << (PhpParser.Namespace - 75)) | (1 << (PhpParser.New - 75)) | (1 << (PhpParser.Null - 75)) | (1 << (PhpParser.ObjectType - 75)) | (1 << (PhpParser.Parent_ - 75)) | (1 << (PhpParser.Partial - 75)) | (1 << (PhpParser.Print - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (PhpParser.Private - 107)) | (1 << (PhpParser.Protected - 107)) | (1 << (PhpParser.Public - 107)) | (1 << (PhpParser.Require - 107)) | (1 << (PhpParser.RequireOnce - 107)) | (1 << (PhpParser.Resource - 107)) | (1 << (PhpParser.Return - 107)) | (1 << (PhpParser.Static - 107)) | (1 << (PhpParser.StringType - 107)) | (1 << (PhpParser.Switch - 107)) | (1 << (PhpParser.Throw - 107)) | (1 << (PhpParser.Trait - 107)) | (1 << (PhpParser.Try - 107)) | (1 << (PhpParser.Typeof - 107)) | (1 << (PhpParser.UintCast - 107)) | (1 << (PhpParser.UnicodeCast - 107)) | (1 << (PhpParser.Unset - 107)) | (1 << (PhpParser.Use - 107)) | (1 << (PhpParser.Var - 107)) | (1 << (PhpParser.While - 107)) | (1 << (PhpParser.Yield - 107)) | (1 << (PhpParser.From - 107)) | (1 << (PhpParser.Get - 107)) | (1 << (PhpParser.Set - 107)) | (1 << (PhpParser.Call - 107)) | (1 << (PhpParser.CallStatic - 107)) | (1 << (PhpParser.Constructor - 107)) | (1 << (PhpParser.Destruct - 107)) | (1 << (PhpParser.Wakeup - 107)) | (1 << (PhpParser.Sleep - 107)) | (1 << (PhpParser.Autoload - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (PhpParser.IsSet__ - 139)) | (1 << (PhpParser.Unset__ - 139)) | (1 << (PhpParser.ToString__ - 139)) | (1 << (PhpParser.Invoke - 139)) | (1 << (PhpParser.SetState - 139)) | (1 << (PhpParser.Clone__ - 139)) | (1 << (PhpParser.DebugInfo - 139)) | (1 << (PhpParser.Namespace__ - 139)) | (1 << (PhpParser.Class__ - 139)) | (1 << (PhpParser.Traic__ - 139)) | (1 << (PhpParser.Function__ - 139)) | (1 << (PhpParser.Method__ - 139)) | (1 << (PhpParser.Line__ - 139)) | (1 << (PhpParser.File__ - 139)) | (1 << (PhpParser.Dir__ - 139)))) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & ((1 << (PhpParser.NamespaceSeparator - 187)) | (1 << (PhpParser.Plus - 187)) | (1 << (PhpParser.Minus - 187)) | (1 << (PhpParser.Dollar - 187)) | (1 << (PhpParser.OpenSquareBracket - 187)) | (1 << (PhpParser.VarName - 187)) | (1 << (PhpParser.Label - 187)))) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & ((1 << (PhpParser.Octal - 219)) | (1 << (PhpParser.Decimal - 219)) | (1 << (PhpParser.Real - 219)) | (1 << (PhpParser.Hex - 219)) | (1 << (PhpParser.Binary - 219)) | (1 << (PhpParser.SingleQuoteString - 219)) | (1 << (PhpParser.DoubleQuote - 219)) | (1 << (PhpParser.StartNowDoc - 219)) | (1 << (PhpParser.StartHereDoc - 219)))) !== 0)) {
                            {
                                this.state = 1529;
                                this.constantArrayItemList();
                                this.state = 1531;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === PhpParser.Comma) {
                                    {
                                        this.state = 1530;
                                        this.match(PhpParser.Comma);
                                    }
                                }
                            }
                        }
                        this.state = 1535;
                        this.match(PhpParser.CloseRoundBracket);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1536;
                        this.match(PhpParser.OpenSquareBracket);
                        this.state = 1541;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (PhpParser.Abstract - 43)) | (1 << (PhpParser.Array - 43)) | (1 << (PhpParser.As - 43)) | (1 << (PhpParser.BinaryCast - 43)) | (1 << (PhpParser.BoolType - 43)) | (1 << (PhpParser.BooleanConstant - 43)) | (1 << (PhpParser.Break - 43)) | (1 << (PhpParser.Callable - 43)) | (1 << (PhpParser.Case - 43)) | (1 << (PhpParser.Catch - 43)) | (1 << (PhpParser.Class - 43)) | (1 << (PhpParser.Clone - 43)) | (1 << (PhpParser.Const - 43)) | (1 << (PhpParser.Continue - 43)) | (1 << (PhpParser.Declare - 43)) | (1 << (PhpParser.Default - 43)) | (1 << (PhpParser.Do - 43)) | (1 << (PhpParser.DoubleCast - 43)) | (1 << (PhpParser.DoubleType - 43)) | (1 << (PhpParser.Echo - 43)) | (1 << (PhpParser.Else - 43)) | (1 << (PhpParser.ElseIf - 43)) | (1 << (PhpParser.Empty - 43)) | (1 << (PhpParser.EndDeclare - 43)) | (1 << (PhpParser.EndFor - 43)) | (1 << (PhpParser.EndForeach - 43)) | (1 << (PhpParser.EndIf - 43)) | (1 << (PhpParser.EndSwitch - 43)) | (1 << (PhpParser.EndWhile - 43)) | (1 << (PhpParser.Eval - 43)) | (1 << (PhpParser.Exit - 43)) | (1 << (PhpParser.Extends - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (PhpParser.Final - 75)) | (1 << (PhpParser.Finally - 75)) | (1 << (PhpParser.FloatCast - 75)) | (1 << (PhpParser.For - 75)) | (1 << (PhpParser.Foreach - 75)) | (1 << (PhpParser.Function - 75)) | (1 << (PhpParser.Global - 75)) | (1 << (PhpParser.Goto - 75)) | (1 << (PhpParser.If - 75)) | (1 << (PhpParser.Implements - 75)) | (1 << (PhpParser.Import - 75)) | (1 << (PhpParser.Include - 75)) | (1 << (PhpParser.IncludeOnce - 75)) | (1 << (PhpParser.InstanceOf - 75)) | (1 << (PhpParser.InsteadOf - 75)) | (1 << (PhpParser.Int8Cast - 75)) | (1 << (PhpParser.Int16Cast - 75)) | (1 << (PhpParser.Int64Type - 75)) | (1 << (PhpParser.IntType - 75)) | (1 << (PhpParser.Interface - 75)) | (1 << (PhpParser.IsSet - 75)) | (1 << (PhpParser.List - 75)) | (1 << (PhpParser.LogicalAnd - 75)) | (1 << (PhpParser.LogicalOr - 75)) | (1 << (PhpParser.LogicalXor - 75)) | (1 << (PhpParser.Namespace - 75)) | (1 << (PhpParser.New - 75)) | (1 << (PhpParser.Null - 75)) | (1 << (PhpParser.ObjectType - 75)) | (1 << (PhpParser.Parent_ - 75)) | (1 << (PhpParser.Partial - 75)) | (1 << (PhpParser.Print - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (PhpParser.Private - 107)) | (1 << (PhpParser.Protected - 107)) | (1 << (PhpParser.Public - 107)) | (1 << (PhpParser.Require - 107)) | (1 << (PhpParser.RequireOnce - 107)) | (1 << (PhpParser.Resource - 107)) | (1 << (PhpParser.Return - 107)) | (1 << (PhpParser.Static - 107)) | (1 << (PhpParser.StringType - 107)) | (1 << (PhpParser.Switch - 107)) | (1 << (PhpParser.Throw - 107)) | (1 << (PhpParser.Trait - 107)) | (1 << (PhpParser.Try - 107)) | (1 << (PhpParser.Typeof - 107)) | (1 << (PhpParser.UintCast - 107)) | (1 << (PhpParser.UnicodeCast - 107)) | (1 << (PhpParser.Unset - 107)) | (1 << (PhpParser.Use - 107)) | (1 << (PhpParser.Var - 107)) | (1 << (PhpParser.While - 107)) | (1 << (PhpParser.Yield - 107)) | (1 << (PhpParser.From - 107)) | (1 << (PhpParser.Get - 107)) | (1 << (PhpParser.Set - 107)) | (1 << (PhpParser.Call - 107)) | (1 << (PhpParser.CallStatic - 107)) | (1 << (PhpParser.Constructor - 107)) | (1 << (PhpParser.Destruct - 107)) | (1 << (PhpParser.Wakeup - 107)) | (1 << (PhpParser.Sleep - 107)) | (1 << (PhpParser.Autoload - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (PhpParser.IsSet__ - 139)) | (1 << (PhpParser.Unset__ - 139)) | (1 << (PhpParser.ToString__ - 139)) | (1 << (PhpParser.Invoke - 139)) | (1 << (PhpParser.SetState - 139)) | (1 << (PhpParser.Clone__ - 139)) | (1 << (PhpParser.DebugInfo - 139)) | (1 << (PhpParser.Namespace__ - 139)) | (1 << (PhpParser.Class__ - 139)) | (1 << (PhpParser.Traic__ - 139)) | (1 << (PhpParser.Function__ - 139)) | (1 << (PhpParser.Method__ - 139)) | (1 << (PhpParser.Line__ - 139)) | (1 << (PhpParser.File__ - 139)) | (1 << (PhpParser.Dir__ - 139)))) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & ((1 << (PhpParser.NamespaceSeparator - 187)) | (1 << (PhpParser.Plus - 187)) | (1 << (PhpParser.Minus - 187)) | (1 << (PhpParser.Dollar - 187)) | (1 << (PhpParser.OpenSquareBracket - 187)) | (1 << (PhpParser.VarName - 187)) | (1 << (PhpParser.Label - 187)))) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & ((1 << (PhpParser.Octal - 219)) | (1 << (PhpParser.Decimal - 219)) | (1 << (PhpParser.Real - 219)) | (1 << (PhpParser.Hex - 219)) | (1 << (PhpParser.Binary - 219)) | (1 << (PhpParser.SingleQuoteString - 219)) | (1 << (PhpParser.DoubleQuote - 219)) | (1 << (PhpParser.StartNowDoc - 219)) | (1 << (PhpParser.StartHereDoc - 219)))) !== 0)) {
                            {
                                this.state = 1537;
                                this.constantArrayItemList();
                                this.state = 1539;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === PhpParser.Comma) {
                                    {
                                        this.state = 1538;
                                        this.match(PhpParser.Comma);
                                    }
                                }
                            }
                        }
                        this.state = 1543;
                        this.match(PhpParser.CloseSquareBracket);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1544;
                        _la = this._input.LA(1);
                        if (!(_la === PhpParser.Plus || _la === PhpParser.Minus)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1545;
                        this.constantInititalizer();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.constantArrayItemList = function () {
        var _localctx = new ConstantArrayItemListContext(this._ctx, this.state);
        this.enterRule(_localctx, 210, PhpParser.RULE_constantArrayItemList);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1548;
                this.constantArrayItem();
                this.state = 1553;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1549;
                                this.match(PhpParser.Comma);
                                this.state = 1550;
                                this.constantArrayItem();
                            }
                        }
                    }
                    this.state = 1555;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.constantArrayItem = function () {
        var _localctx = new ConstantArrayItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 212, PhpParser.RULE_constantArrayItem);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1556;
                this.constantInititalizer();
                this.state = 1559;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PhpParser.DoubleArrow) {
                    {
                        this.state = 1557;
                        this.match(PhpParser.DoubleArrow);
                        this.state = 1558;
                        this.constantInititalizer();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.constant = function () {
        var _localctx = new ConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 214, PhpParser.RULE_constant);
        try {
            this.state = 1566;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 181, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1561;
                        this.match(PhpParser.Null);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1562;
                        this.literalConstant();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1563;
                        this.magicConstant();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1564;
                        this.classConstant();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1565;
                        this.qualifiedNamespaceName();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.literalConstant = function () {
        var _localctx = new LiteralConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 216, PhpParser.RULE_literalConstant);
        try {
            this.state = 1572;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PhpParser.Real:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1568;
                        this.match(PhpParser.Real);
                    }
                    break;
                case PhpParser.BooleanConstant:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1569;
                        this.match(PhpParser.BooleanConstant);
                    }
                    break;
                case PhpParser.Octal:
                case PhpParser.Decimal:
                case PhpParser.Hex:
                case PhpParser.Binary:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1570;
                        this.numericConstant();
                    }
                    break;
                case PhpParser.Label:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1571;
                        this.stringConstant();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.numericConstant = function () {
        var _localctx = new NumericConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 218, PhpParser.RULE_numericConstant);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1574;
                _la = this._input.LA(1);
                if (!(((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & ((1 << (PhpParser.Octal - 219)) | (1 << (PhpParser.Decimal - 219)) | (1 << (PhpParser.Hex - 219)) | (1 << (PhpParser.Binary - 219)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.classConstant = function () {
        var _localctx = new ClassConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 220, PhpParser.RULE_classConstant);
        var _la;
        try {
            this.state = 1594;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 186, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1576;
                        _la = this._input.LA(1);
                        if (!(_la === PhpParser.Class || _la === PhpParser.Parent_)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1577;
                        this.match(PhpParser.DoubleColon);
                        this.state = 1582;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 183, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1578;
                                    this.identifier();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1579;
                                    this.match(PhpParser.Constructor);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 1580;
                                    this.match(PhpParser.Get);
                                }
                                break;
                            case 4:
                                {
                                    this.state = 1581;
                                    this.match(PhpParser.Set);
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1587;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case PhpParser.Abstract:
                            case PhpParser.Array:
                            case PhpParser.As:
                            case PhpParser.BinaryCast:
                            case PhpParser.BoolType:
                            case PhpParser.BooleanConstant:
                            case PhpParser.Break:
                            case PhpParser.Callable:
                            case PhpParser.Case:
                            case PhpParser.Catch:
                            case PhpParser.Class:
                            case PhpParser.Clone:
                            case PhpParser.Const:
                            case PhpParser.Continue:
                            case PhpParser.Declare:
                            case PhpParser.Default:
                            case PhpParser.Do:
                            case PhpParser.DoubleCast:
                            case PhpParser.DoubleType:
                            case PhpParser.Echo:
                            case PhpParser.Else:
                            case PhpParser.ElseIf:
                            case PhpParser.Empty:
                            case PhpParser.EndDeclare:
                            case PhpParser.EndFor:
                            case PhpParser.EndForeach:
                            case PhpParser.EndIf:
                            case PhpParser.EndSwitch:
                            case PhpParser.EndWhile:
                            case PhpParser.Eval:
                            case PhpParser.Exit:
                            case PhpParser.Extends:
                            case PhpParser.Final:
                            case PhpParser.Finally:
                            case PhpParser.FloatCast:
                            case PhpParser.For:
                            case PhpParser.Foreach:
                            case PhpParser.Function:
                            case PhpParser.Global:
                            case PhpParser.Goto:
                            case PhpParser.If:
                            case PhpParser.Implements:
                            case PhpParser.Import:
                            case PhpParser.Include:
                            case PhpParser.IncludeOnce:
                            case PhpParser.InstanceOf:
                            case PhpParser.InsteadOf:
                            case PhpParser.Int8Cast:
                            case PhpParser.Int16Cast:
                            case PhpParser.Int64Type:
                            case PhpParser.IntType:
                            case PhpParser.Interface:
                            case PhpParser.IsSet:
                            case PhpParser.List:
                            case PhpParser.LogicalAnd:
                            case PhpParser.LogicalOr:
                            case PhpParser.LogicalXor:
                            case PhpParser.Namespace:
                            case PhpParser.New:
                            case PhpParser.Null:
                            case PhpParser.ObjectType:
                            case PhpParser.Parent_:
                            case PhpParser.Partial:
                            case PhpParser.Print:
                            case PhpParser.Private:
                            case PhpParser.Protected:
                            case PhpParser.Public:
                            case PhpParser.Require:
                            case PhpParser.RequireOnce:
                            case PhpParser.Resource:
                            case PhpParser.Return:
                            case PhpParser.Static:
                            case PhpParser.StringType:
                            case PhpParser.Switch:
                            case PhpParser.Throw:
                            case PhpParser.Trait:
                            case PhpParser.Try:
                            case PhpParser.Typeof:
                            case PhpParser.UintCast:
                            case PhpParser.UnicodeCast:
                            case PhpParser.Unset:
                            case PhpParser.Use:
                            case PhpParser.Var:
                            case PhpParser.While:
                            case PhpParser.Yield:
                            case PhpParser.From:
                            case PhpParser.Get:
                            case PhpParser.Set:
                            case PhpParser.Call:
                            case PhpParser.CallStatic:
                            case PhpParser.Constructor:
                            case PhpParser.Destruct:
                            case PhpParser.Wakeup:
                            case PhpParser.Sleep:
                            case PhpParser.Autoload:
                            case PhpParser.IsSet__:
                            case PhpParser.Unset__:
                            case PhpParser.ToString__:
                            case PhpParser.Invoke:
                            case PhpParser.SetState:
                            case PhpParser.Clone__:
                            case PhpParser.DebugInfo:
                            case PhpParser.Namespace__:
                            case PhpParser.Class__:
                            case PhpParser.Traic__:
                            case PhpParser.Function__:
                            case PhpParser.Method__:
                            case PhpParser.Line__:
                            case PhpParser.File__:
                            case PhpParser.Dir__:
                            case PhpParser.NamespaceSeparator:
                            case PhpParser.Label:
                                {
                                    this.state = 1584;
                                    this.qualifiedStaticTypeRef();
                                }
                                break;
                            case PhpParser.Dollar:
                            case PhpParser.VarName:
                                {
                                    this.state = 1585;
                                    this.keyedVariable();
                                }
                                break;
                            case PhpParser.SingleQuoteString:
                            case PhpParser.DoubleQuote:
                            case PhpParser.StartNowDoc:
                            case PhpParser.StartHereDoc:
                                {
                                    this.state = 1586;
                                    this.string();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1589;
                        this.match(PhpParser.DoubleColon);
                        this.state = 1592;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case PhpParser.Abstract:
                            case PhpParser.Array:
                            case PhpParser.As:
                            case PhpParser.BinaryCast:
                            case PhpParser.BoolType:
                            case PhpParser.BooleanConstant:
                            case PhpParser.Break:
                            case PhpParser.Callable:
                            case PhpParser.Case:
                            case PhpParser.Catch:
                            case PhpParser.Class:
                            case PhpParser.Clone:
                            case PhpParser.Const:
                            case PhpParser.Continue:
                            case PhpParser.Declare:
                            case PhpParser.Default:
                            case PhpParser.Do:
                            case PhpParser.DoubleCast:
                            case PhpParser.DoubleType:
                            case PhpParser.Echo:
                            case PhpParser.Else:
                            case PhpParser.ElseIf:
                            case PhpParser.Empty:
                            case PhpParser.EndDeclare:
                            case PhpParser.EndFor:
                            case PhpParser.EndForeach:
                            case PhpParser.EndIf:
                            case PhpParser.EndSwitch:
                            case PhpParser.EndWhile:
                            case PhpParser.Eval:
                            case PhpParser.Exit:
                            case PhpParser.Extends:
                            case PhpParser.Final:
                            case PhpParser.Finally:
                            case PhpParser.FloatCast:
                            case PhpParser.For:
                            case PhpParser.Foreach:
                            case PhpParser.Function:
                            case PhpParser.Global:
                            case PhpParser.Goto:
                            case PhpParser.If:
                            case PhpParser.Implements:
                            case PhpParser.Import:
                            case PhpParser.Include:
                            case PhpParser.IncludeOnce:
                            case PhpParser.InstanceOf:
                            case PhpParser.InsteadOf:
                            case PhpParser.Int8Cast:
                            case PhpParser.Int16Cast:
                            case PhpParser.Int64Type:
                            case PhpParser.IntType:
                            case PhpParser.Interface:
                            case PhpParser.IsSet:
                            case PhpParser.List:
                            case PhpParser.LogicalAnd:
                            case PhpParser.LogicalOr:
                            case PhpParser.LogicalXor:
                            case PhpParser.Namespace:
                            case PhpParser.New:
                            case PhpParser.Null:
                            case PhpParser.ObjectType:
                            case PhpParser.Parent_:
                            case PhpParser.Partial:
                            case PhpParser.Print:
                            case PhpParser.Private:
                            case PhpParser.Protected:
                            case PhpParser.Public:
                            case PhpParser.Require:
                            case PhpParser.RequireOnce:
                            case PhpParser.Resource:
                            case PhpParser.Return:
                            case PhpParser.Static:
                            case PhpParser.StringType:
                            case PhpParser.Switch:
                            case PhpParser.Throw:
                            case PhpParser.Trait:
                            case PhpParser.Try:
                            case PhpParser.Typeof:
                            case PhpParser.UintCast:
                            case PhpParser.UnicodeCast:
                            case PhpParser.Unset:
                            case PhpParser.Use:
                            case PhpParser.Var:
                            case PhpParser.While:
                            case PhpParser.Yield:
                            case PhpParser.From:
                            case PhpParser.Get:
                            case PhpParser.Set:
                            case PhpParser.Call:
                            case PhpParser.CallStatic:
                            case PhpParser.Constructor:
                            case PhpParser.Destruct:
                            case PhpParser.Wakeup:
                            case PhpParser.Sleep:
                            case PhpParser.Autoload:
                            case PhpParser.IsSet__:
                            case PhpParser.Unset__:
                            case PhpParser.ToString__:
                            case PhpParser.Invoke:
                            case PhpParser.SetState:
                            case PhpParser.Clone__:
                            case PhpParser.DebugInfo:
                            case PhpParser.Namespace__:
                            case PhpParser.Class__:
                            case PhpParser.Traic__:
                            case PhpParser.Function__:
                            case PhpParser.Method__:
                            case PhpParser.Line__:
                            case PhpParser.File__:
                            case PhpParser.Dir__:
                            case PhpParser.Label:
                                {
                                    this.state = 1590;
                                    this.identifier();
                                }
                                break;
                            case PhpParser.Dollar:
                            case PhpParser.VarName:
                                {
                                    this.state = 1591;
                                    this.keyedVariable();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.stringConstant = function () {
        var _localctx = new StringConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 222, PhpParser.RULE_stringConstant);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1596;
                this.match(PhpParser.Label);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.string = function () {
        var _localctx = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 224, PhpParser.RULE_string);
        try {
            var _alt = void 0;
            this.state = 1619;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PhpParser.StartHereDoc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1598;
                        this.match(PhpParser.StartHereDoc);
                        this.state = 1600;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 1599;
                                            this.match(PhpParser.HereDocText);
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 1602;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 187, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case PhpParser.StartNowDoc:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1604;
                        this.match(PhpParser.StartNowDoc);
                        this.state = 1606;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 1605;
                                            this.match(PhpParser.HereDocText);
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 1608;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 188, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case PhpParser.SingleQuoteString:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1610;
                        this.match(PhpParser.SingleQuoteString);
                    }
                    break;
                case PhpParser.DoubleQuote:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1611;
                        this.match(PhpParser.DoubleQuote);
                        this.state = 1615;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1612;
                                        this.interpolatedStringPart();
                                    }
                                }
                            }
                            this.state = 1617;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
                        }
                        this.state = 1618;
                        this.match(PhpParser.DoubleQuote);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.interpolatedStringPart = function () {
        var _localctx = new InterpolatedStringPartContext(this._ctx, this.state);
        this.enterRule(_localctx, 226, PhpParser.RULE_interpolatedStringPart);
        try {
            this.state = 1624;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PhpParser.StringPart:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1621;
                        this.match(PhpParser.StringPart);
                    }
                    break;
                case PhpParser.UnicodeEscape:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1622;
                        this.match(PhpParser.UnicodeEscape);
                    }
                    break;
                case PhpParser.Abstract:
                case PhpParser.Array:
                case PhpParser.As:
                case PhpParser.BinaryCast:
                case PhpParser.BoolType:
                case PhpParser.BooleanConstant:
                case PhpParser.Break:
                case PhpParser.Callable:
                case PhpParser.Case:
                case PhpParser.Catch:
                case PhpParser.Class:
                case PhpParser.Clone:
                case PhpParser.Const:
                case PhpParser.Continue:
                case PhpParser.Declare:
                case PhpParser.Default:
                case PhpParser.Do:
                case PhpParser.DoubleCast:
                case PhpParser.DoubleType:
                case PhpParser.Echo:
                case PhpParser.Else:
                case PhpParser.ElseIf:
                case PhpParser.Empty:
                case PhpParser.EndDeclare:
                case PhpParser.EndFor:
                case PhpParser.EndForeach:
                case PhpParser.EndIf:
                case PhpParser.EndSwitch:
                case PhpParser.EndWhile:
                case PhpParser.Eval:
                case PhpParser.Exit:
                case PhpParser.Extends:
                case PhpParser.Final:
                case PhpParser.Finally:
                case PhpParser.FloatCast:
                case PhpParser.For:
                case PhpParser.Foreach:
                case PhpParser.Function:
                case PhpParser.Global:
                case PhpParser.Goto:
                case PhpParser.If:
                case PhpParser.Implements:
                case PhpParser.Import:
                case PhpParser.Include:
                case PhpParser.IncludeOnce:
                case PhpParser.InstanceOf:
                case PhpParser.InsteadOf:
                case PhpParser.Int8Cast:
                case PhpParser.Int16Cast:
                case PhpParser.Int64Type:
                case PhpParser.IntType:
                case PhpParser.Interface:
                case PhpParser.IsSet:
                case PhpParser.List:
                case PhpParser.LogicalAnd:
                case PhpParser.LogicalOr:
                case PhpParser.LogicalXor:
                case PhpParser.Namespace:
                case PhpParser.New:
                case PhpParser.Null:
                case PhpParser.ObjectType:
                case PhpParser.Parent_:
                case PhpParser.Partial:
                case PhpParser.Print:
                case PhpParser.Private:
                case PhpParser.Protected:
                case PhpParser.Public:
                case PhpParser.Require:
                case PhpParser.RequireOnce:
                case PhpParser.Resource:
                case PhpParser.Return:
                case PhpParser.Static:
                case PhpParser.StringType:
                case PhpParser.Switch:
                case PhpParser.Throw:
                case PhpParser.Trait:
                case PhpParser.Try:
                case PhpParser.Typeof:
                case PhpParser.UintCast:
                case PhpParser.UnicodeCast:
                case PhpParser.Unset:
                case PhpParser.Use:
                case PhpParser.Var:
                case PhpParser.While:
                case PhpParser.Yield:
                case PhpParser.From:
                case PhpParser.Get:
                case PhpParser.Set:
                case PhpParser.Call:
                case PhpParser.CallStatic:
                case PhpParser.Constructor:
                case PhpParser.Destruct:
                case PhpParser.Wakeup:
                case PhpParser.Sleep:
                case PhpParser.Autoload:
                case PhpParser.IsSet__:
                case PhpParser.Unset__:
                case PhpParser.ToString__:
                case PhpParser.Invoke:
                case PhpParser.SetState:
                case PhpParser.Clone__:
                case PhpParser.DebugInfo:
                case PhpParser.Namespace__:
                case PhpParser.Class__:
                case PhpParser.Traic__:
                case PhpParser.Function__:
                case PhpParser.Method__:
                case PhpParser.Line__:
                case PhpParser.File__:
                case PhpParser.Dir__:
                case PhpParser.NamespaceSeparator:
                case PhpParser.Dollar:
                case PhpParser.OpenRoundBracket:
                case PhpParser.VarName:
                case PhpParser.Label:
                case PhpParser.SingleQuoteString:
                case PhpParser.DoubleQuote:
                case PhpParser.StartNowDoc:
                case PhpParser.StartHereDoc:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1623;
                        this.chain();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.chainList = function () {
        var _localctx = new ChainListContext(this._ctx, this.state);
        this.enterRule(_localctx, 228, PhpParser.RULE_chainList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1626;
                this.chain();
                this.state = 1631;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PhpParser.Comma) {
                    {
                        {
                            this.state = 1627;
                            this.match(PhpParser.Comma);
                            this.state = 1628;
                            this.chain();
                        }
                    }
                    this.state = 1633;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.chain = function () {
        var _localctx = new ChainContext(this._ctx, this.state);
        this.enterRule(_localctx, 230, PhpParser.RULE_chain);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1634;
                this.chainOrigin();
                this.state = 1638;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 193, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1635;
                                this.memberAccess();
                            }
                        }
                    }
                    this.state = 1640;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 193, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.chainOrigin = function () {
        var _localctx = new ChainOriginContext(this._ctx, this.state);
        this.enterRule(_localctx, 232, PhpParser.RULE_chainOrigin);
        try {
            this.state = 1647;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 194, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1641;
                        this.chainBase();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1642;
                        this.functionCall();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1643;
                        this.match(PhpParser.OpenRoundBracket);
                        this.state = 1644;
                        this.newExpr();
                        this.state = 1645;
                        this.match(PhpParser.CloseRoundBracket);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.memberAccess = function () {
        var _localctx = new MemberAccessContext(this._ctx, this.state);
        this.enterRule(_localctx, 234, PhpParser.RULE_memberAccess);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1649;
                this.match(PhpParser.ObjectOperator);
                this.state = 1650;
                this.keyedFieldName();
                this.state = 1652;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 195, this._ctx)) {
                    case 1:
                        {
                            this.state = 1651;
                            this.actualArguments();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.functionCall = function () {
        var _localctx = new FunctionCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 236, PhpParser.RULE_functionCall);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1654;
                this.functionCallName();
                this.state = 1655;
                this.actualArguments();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.functionCallName = function () {
        var _localctx = new FunctionCallNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 238, PhpParser.RULE_functionCallName);
        try {
            this.state = 1661;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 196, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1657;
                        this.qualifiedNamespaceName();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1658;
                        this.classConstant();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1659;
                        this.chainBase();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1660;
                        this.parentheses();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.actualArguments = function () {
        var _localctx = new ActualArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 240, PhpParser.RULE_actualArguments);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1664;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PhpParser.Lgeneric) {
                    {
                        this.state = 1663;
                        this.genericDynamicArgs();
                    }
                }
                this.state = 1666;
                this.arguments();
                this.state = 1670;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 198, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1667;
                                this.squareCurlyExpression();
                            }
                        }
                    }
                    this.state = 1672;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 198, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.chainBase = function () {
        var _localctx = new ChainBaseContext(this._ctx, this.state);
        this.enterRule(_localctx, 242, PhpParser.RULE_chainBase);
        try {
            this.state = 1682;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PhpParser.Dollar:
                case PhpParser.VarName:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1673;
                        this.keyedVariable();
                        this.state = 1676;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 199, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1674;
                                    this.match(PhpParser.DoubleColon);
                                    this.state = 1675;
                                    this.keyedVariable();
                                }
                                break;
                        }
                    }
                    break;
                case PhpParser.Abstract:
                case PhpParser.Array:
                case PhpParser.As:
                case PhpParser.BinaryCast:
                case PhpParser.BoolType:
                case PhpParser.BooleanConstant:
                case PhpParser.Break:
                case PhpParser.Callable:
                case PhpParser.Case:
                case PhpParser.Catch:
                case PhpParser.Class:
                case PhpParser.Clone:
                case PhpParser.Const:
                case PhpParser.Continue:
                case PhpParser.Declare:
                case PhpParser.Default:
                case PhpParser.Do:
                case PhpParser.DoubleCast:
                case PhpParser.DoubleType:
                case PhpParser.Echo:
                case PhpParser.Else:
                case PhpParser.ElseIf:
                case PhpParser.Empty:
                case PhpParser.EndDeclare:
                case PhpParser.EndFor:
                case PhpParser.EndForeach:
                case PhpParser.EndIf:
                case PhpParser.EndSwitch:
                case PhpParser.EndWhile:
                case PhpParser.Eval:
                case PhpParser.Exit:
                case PhpParser.Extends:
                case PhpParser.Final:
                case PhpParser.Finally:
                case PhpParser.FloatCast:
                case PhpParser.For:
                case PhpParser.Foreach:
                case PhpParser.Function:
                case PhpParser.Global:
                case PhpParser.Goto:
                case PhpParser.If:
                case PhpParser.Implements:
                case PhpParser.Import:
                case PhpParser.Include:
                case PhpParser.IncludeOnce:
                case PhpParser.InstanceOf:
                case PhpParser.InsteadOf:
                case PhpParser.Int8Cast:
                case PhpParser.Int16Cast:
                case PhpParser.Int64Type:
                case PhpParser.IntType:
                case PhpParser.Interface:
                case PhpParser.IsSet:
                case PhpParser.List:
                case PhpParser.LogicalAnd:
                case PhpParser.LogicalOr:
                case PhpParser.LogicalXor:
                case PhpParser.Namespace:
                case PhpParser.New:
                case PhpParser.Null:
                case PhpParser.ObjectType:
                case PhpParser.Parent_:
                case PhpParser.Partial:
                case PhpParser.Print:
                case PhpParser.Private:
                case PhpParser.Protected:
                case PhpParser.Public:
                case PhpParser.Require:
                case PhpParser.RequireOnce:
                case PhpParser.Resource:
                case PhpParser.Return:
                case PhpParser.Static:
                case PhpParser.StringType:
                case PhpParser.Switch:
                case PhpParser.Throw:
                case PhpParser.Trait:
                case PhpParser.Try:
                case PhpParser.Typeof:
                case PhpParser.UintCast:
                case PhpParser.UnicodeCast:
                case PhpParser.Unset:
                case PhpParser.Use:
                case PhpParser.Var:
                case PhpParser.While:
                case PhpParser.Yield:
                case PhpParser.From:
                case PhpParser.Get:
                case PhpParser.Set:
                case PhpParser.Call:
                case PhpParser.CallStatic:
                case PhpParser.Constructor:
                case PhpParser.Destruct:
                case PhpParser.Wakeup:
                case PhpParser.Sleep:
                case PhpParser.Autoload:
                case PhpParser.IsSet__:
                case PhpParser.Unset__:
                case PhpParser.ToString__:
                case PhpParser.Invoke:
                case PhpParser.SetState:
                case PhpParser.Clone__:
                case PhpParser.DebugInfo:
                case PhpParser.Namespace__:
                case PhpParser.Class__:
                case PhpParser.Traic__:
                case PhpParser.Function__:
                case PhpParser.Method__:
                case PhpParser.Line__:
                case PhpParser.File__:
                case PhpParser.Dir__:
                case PhpParser.NamespaceSeparator:
                case PhpParser.Label:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1678;
                        this.qualifiedStaticTypeRef();
                        this.state = 1679;
                        this.match(PhpParser.DoubleColon);
                        this.state = 1680;
                        this.keyedVariable();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.keyedFieldName = function () {
        var _localctx = new KeyedFieldNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 244, PhpParser.RULE_keyedFieldName);
        try {
            this.state = 1686;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PhpParser.Abstract:
                case PhpParser.Array:
                case PhpParser.As:
                case PhpParser.BinaryCast:
                case PhpParser.BoolType:
                case PhpParser.BooleanConstant:
                case PhpParser.Break:
                case PhpParser.Callable:
                case PhpParser.Case:
                case PhpParser.Catch:
                case PhpParser.Class:
                case PhpParser.Clone:
                case PhpParser.Const:
                case PhpParser.Continue:
                case PhpParser.Declare:
                case PhpParser.Default:
                case PhpParser.Do:
                case PhpParser.DoubleCast:
                case PhpParser.DoubleType:
                case PhpParser.Echo:
                case PhpParser.Else:
                case PhpParser.ElseIf:
                case PhpParser.Empty:
                case PhpParser.EndDeclare:
                case PhpParser.EndFor:
                case PhpParser.EndForeach:
                case PhpParser.EndIf:
                case PhpParser.EndSwitch:
                case PhpParser.EndWhile:
                case PhpParser.Eval:
                case PhpParser.Exit:
                case PhpParser.Extends:
                case PhpParser.Final:
                case PhpParser.Finally:
                case PhpParser.FloatCast:
                case PhpParser.For:
                case PhpParser.Foreach:
                case PhpParser.Function:
                case PhpParser.Global:
                case PhpParser.Goto:
                case PhpParser.If:
                case PhpParser.Implements:
                case PhpParser.Import:
                case PhpParser.Include:
                case PhpParser.IncludeOnce:
                case PhpParser.InstanceOf:
                case PhpParser.InsteadOf:
                case PhpParser.Int8Cast:
                case PhpParser.Int16Cast:
                case PhpParser.Int64Type:
                case PhpParser.IntType:
                case PhpParser.Interface:
                case PhpParser.IsSet:
                case PhpParser.List:
                case PhpParser.LogicalAnd:
                case PhpParser.LogicalOr:
                case PhpParser.LogicalXor:
                case PhpParser.Namespace:
                case PhpParser.New:
                case PhpParser.Null:
                case PhpParser.ObjectType:
                case PhpParser.Parent_:
                case PhpParser.Partial:
                case PhpParser.Print:
                case PhpParser.Private:
                case PhpParser.Protected:
                case PhpParser.Public:
                case PhpParser.Require:
                case PhpParser.RequireOnce:
                case PhpParser.Resource:
                case PhpParser.Return:
                case PhpParser.Static:
                case PhpParser.StringType:
                case PhpParser.Switch:
                case PhpParser.Throw:
                case PhpParser.Trait:
                case PhpParser.Try:
                case PhpParser.Typeof:
                case PhpParser.UintCast:
                case PhpParser.UnicodeCast:
                case PhpParser.Unset:
                case PhpParser.Use:
                case PhpParser.Var:
                case PhpParser.While:
                case PhpParser.Yield:
                case PhpParser.From:
                case PhpParser.Get:
                case PhpParser.Set:
                case PhpParser.Call:
                case PhpParser.CallStatic:
                case PhpParser.Constructor:
                case PhpParser.Destruct:
                case PhpParser.Wakeup:
                case PhpParser.Sleep:
                case PhpParser.Autoload:
                case PhpParser.IsSet__:
                case PhpParser.Unset__:
                case PhpParser.ToString__:
                case PhpParser.Invoke:
                case PhpParser.SetState:
                case PhpParser.Clone__:
                case PhpParser.DebugInfo:
                case PhpParser.Namespace__:
                case PhpParser.Class__:
                case PhpParser.Traic__:
                case PhpParser.Function__:
                case PhpParser.Method__:
                case PhpParser.Line__:
                case PhpParser.File__:
                case PhpParser.Dir__:
                case PhpParser.OpenCurlyBracket:
                case PhpParser.Label:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1684;
                        this.keyedSimpleFieldName();
                    }
                    break;
                case PhpParser.Dollar:
                case PhpParser.VarName:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1685;
                        this.keyedVariable();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.keyedSimpleFieldName = function () {
        var _localctx = new KeyedSimpleFieldNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 246, PhpParser.RULE_keyedSimpleFieldName);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1693;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PhpParser.Abstract:
                    case PhpParser.Array:
                    case PhpParser.As:
                    case PhpParser.BinaryCast:
                    case PhpParser.BoolType:
                    case PhpParser.BooleanConstant:
                    case PhpParser.Break:
                    case PhpParser.Callable:
                    case PhpParser.Case:
                    case PhpParser.Catch:
                    case PhpParser.Class:
                    case PhpParser.Clone:
                    case PhpParser.Const:
                    case PhpParser.Continue:
                    case PhpParser.Declare:
                    case PhpParser.Default:
                    case PhpParser.Do:
                    case PhpParser.DoubleCast:
                    case PhpParser.DoubleType:
                    case PhpParser.Echo:
                    case PhpParser.Else:
                    case PhpParser.ElseIf:
                    case PhpParser.Empty:
                    case PhpParser.EndDeclare:
                    case PhpParser.EndFor:
                    case PhpParser.EndForeach:
                    case PhpParser.EndIf:
                    case PhpParser.EndSwitch:
                    case PhpParser.EndWhile:
                    case PhpParser.Eval:
                    case PhpParser.Exit:
                    case PhpParser.Extends:
                    case PhpParser.Final:
                    case PhpParser.Finally:
                    case PhpParser.FloatCast:
                    case PhpParser.For:
                    case PhpParser.Foreach:
                    case PhpParser.Function:
                    case PhpParser.Global:
                    case PhpParser.Goto:
                    case PhpParser.If:
                    case PhpParser.Implements:
                    case PhpParser.Import:
                    case PhpParser.Include:
                    case PhpParser.IncludeOnce:
                    case PhpParser.InstanceOf:
                    case PhpParser.InsteadOf:
                    case PhpParser.Int8Cast:
                    case PhpParser.Int16Cast:
                    case PhpParser.Int64Type:
                    case PhpParser.IntType:
                    case PhpParser.Interface:
                    case PhpParser.IsSet:
                    case PhpParser.List:
                    case PhpParser.LogicalAnd:
                    case PhpParser.LogicalOr:
                    case PhpParser.LogicalXor:
                    case PhpParser.Namespace:
                    case PhpParser.New:
                    case PhpParser.Null:
                    case PhpParser.ObjectType:
                    case PhpParser.Parent_:
                    case PhpParser.Partial:
                    case PhpParser.Print:
                    case PhpParser.Private:
                    case PhpParser.Protected:
                    case PhpParser.Public:
                    case PhpParser.Require:
                    case PhpParser.RequireOnce:
                    case PhpParser.Resource:
                    case PhpParser.Return:
                    case PhpParser.Static:
                    case PhpParser.StringType:
                    case PhpParser.Switch:
                    case PhpParser.Throw:
                    case PhpParser.Trait:
                    case PhpParser.Try:
                    case PhpParser.Typeof:
                    case PhpParser.UintCast:
                    case PhpParser.UnicodeCast:
                    case PhpParser.Unset:
                    case PhpParser.Use:
                    case PhpParser.Var:
                    case PhpParser.While:
                    case PhpParser.Yield:
                    case PhpParser.From:
                    case PhpParser.Get:
                    case PhpParser.Set:
                    case PhpParser.Call:
                    case PhpParser.CallStatic:
                    case PhpParser.Constructor:
                    case PhpParser.Destruct:
                    case PhpParser.Wakeup:
                    case PhpParser.Sleep:
                    case PhpParser.Autoload:
                    case PhpParser.IsSet__:
                    case PhpParser.Unset__:
                    case PhpParser.ToString__:
                    case PhpParser.Invoke:
                    case PhpParser.SetState:
                    case PhpParser.Clone__:
                    case PhpParser.DebugInfo:
                    case PhpParser.Namespace__:
                    case PhpParser.Class__:
                    case PhpParser.Traic__:
                    case PhpParser.Function__:
                    case PhpParser.Method__:
                    case PhpParser.Line__:
                    case PhpParser.File__:
                    case PhpParser.Dir__:
                    case PhpParser.Label:
                        {
                            this.state = 1688;
                            this.identifier();
                        }
                        break;
                    case PhpParser.OpenCurlyBracket:
                        {
                            this.state = 1689;
                            this.match(PhpParser.OpenCurlyBracket);
                            this.state = 1690;
                            this.expression(0);
                            this.state = 1691;
                            this.match(PhpParser.CloseCurlyBracket);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1698;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 203, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1695;
                                this.squareCurlyExpression();
                            }
                        }
                    }
                    this.state = 1700;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 203, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.keyedVariable = function () {
        var _localctx = new KeyedVariableContext(this._ctx, this.state);
        this.enterRule(_localctx, 248, PhpParser.RULE_keyedVariable);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1704;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 204, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1701;
                                this.match(PhpParser.Dollar);
                            }
                        }
                    }
                    this.state = 1706;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 204, this._ctx);
                }
                this.state = 1713;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PhpParser.VarName:
                        {
                            this.state = 1707;
                            this.match(PhpParser.VarName);
                        }
                        break;
                    case PhpParser.Dollar:
                        {
                            this.state = 1708;
                            this.match(PhpParser.Dollar);
                            this.state = 1709;
                            this.match(PhpParser.OpenCurlyBracket);
                            this.state = 1710;
                            this.expression(0);
                            this.state = 1711;
                            this.match(PhpParser.CloseCurlyBracket);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1718;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 206, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1715;
                                this.squareCurlyExpression();
                            }
                        }
                    }
                    this.state = 1720;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 206, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.squareCurlyExpression = function () {
        var _localctx = new SquareCurlyExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 250, PhpParser.RULE_squareCurlyExpression);
        var _la;
        try {
            this.state = 1730;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PhpParser.OpenSquareBracket:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1721;
                        this.match(PhpParser.OpenSquareBracket);
                        this.state = 1723;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (PhpParser.Abstract - 43)) | (1 << (PhpParser.Array - 43)) | (1 << (PhpParser.As - 43)) | (1 << (PhpParser.BinaryCast - 43)) | (1 << (PhpParser.BoolType - 43)) | (1 << (PhpParser.BooleanConstant - 43)) | (1 << (PhpParser.Break - 43)) | (1 << (PhpParser.Callable - 43)) | (1 << (PhpParser.Case - 43)) | (1 << (PhpParser.Catch - 43)) | (1 << (PhpParser.Class - 43)) | (1 << (PhpParser.Clone - 43)) | (1 << (PhpParser.Const - 43)) | (1 << (PhpParser.Continue - 43)) | (1 << (PhpParser.Declare - 43)) | (1 << (PhpParser.Default - 43)) | (1 << (PhpParser.Do - 43)) | (1 << (PhpParser.DoubleCast - 43)) | (1 << (PhpParser.DoubleType - 43)) | (1 << (PhpParser.Echo - 43)) | (1 << (PhpParser.Else - 43)) | (1 << (PhpParser.ElseIf - 43)) | (1 << (PhpParser.Empty - 43)) | (1 << (PhpParser.EndDeclare - 43)) | (1 << (PhpParser.EndFor - 43)) | (1 << (PhpParser.EndForeach - 43)) | (1 << (PhpParser.EndIf - 43)) | (1 << (PhpParser.EndSwitch - 43)) | (1 << (PhpParser.EndWhile - 43)) | (1 << (PhpParser.Eval - 43)) | (1 << (PhpParser.Exit - 43)) | (1 << (PhpParser.Extends - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (PhpParser.Final - 75)) | (1 << (PhpParser.Finally - 75)) | (1 << (PhpParser.FloatCast - 75)) | (1 << (PhpParser.For - 75)) | (1 << (PhpParser.Foreach - 75)) | (1 << (PhpParser.Function - 75)) | (1 << (PhpParser.Global - 75)) | (1 << (PhpParser.Goto - 75)) | (1 << (PhpParser.If - 75)) | (1 << (PhpParser.Implements - 75)) | (1 << (PhpParser.Import - 75)) | (1 << (PhpParser.Include - 75)) | (1 << (PhpParser.IncludeOnce - 75)) | (1 << (PhpParser.InstanceOf - 75)) | (1 << (PhpParser.InsteadOf - 75)) | (1 << (PhpParser.Int8Cast - 75)) | (1 << (PhpParser.Int16Cast - 75)) | (1 << (PhpParser.Int64Type - 75)) | (1 << (PhpParser.IntType - 75)) | (1 << (PhpParser.Interface - 75)) | (1 << (PhpParser.IsSet - 75)) | (1 << (PhpParser.List - 75)) | (1 << (PhpParser.LogicalAnd - 75)) | (1 << (PhpParser.LogicalOr - 75)) | (1 << (PhpParser.LogicalXor - 75)) | (1 << (PhpParser.Namespace - 75)) | (1 << (PhpParser.New - 75)) | (1 << (PhpParser.Null - 75)) | (1 << (PhpParser.ObjectType - 75)) | (1 << (PhpParser.Parent_ - 75)) | (1 << (PhpParser.Partial - 75)) | (1 << (PhpParser.Print - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (PhpParser.Private - 107)) | (1 << (PhpParser.Protected - 107)) | (1 << (PhpParser.Public - 107)) | (1 << (PhpParser.Require - 107)) | (1 << (PhpParser.RequireOnce - 107)) | (1 << (PhpParser.Resource - 107)) | (1 << (PhpParser.Return - 107)) | (1 << (PhpParser.Static - 107)) | (1 << (PhpParser.StringType - 107)) | (1 << (PhpParser.Switch - 107)) | (1 << (PhpParser.Throw - 107)) | (1 << (PhpParser.Trait - 107)) | (1 << (PhpParser.Try - 107)) | (1 << (PhpParser.Typeof - 107)) | (1 << (PhpParser.UintCast - 107)) | (1 << (PhpParser.UnicodeCast - 107)) | (1 << (PhpParser.Unset - 107)) | (1 << (PhpParser.Use - 107)) | (1 << (PhpParser.Var - 107)) | (1 << (PhpParser.While - 107)) | (1 << (PhpParser.Yield - 107)) | (1 << (PhpParser.From - 107)) | (1 << (PhpParser.LambdaFn - 107)) | (1 << (PhpParser.Get - 107)) | (1 << (PhpParser.Set - 107)) | (1 << (PhpParser.Call - 107)) | (1 << (PhpParser.CallStatic - 107)) | (1 << (PhpParser.Constructor - 107)) | (1 << (PhpParser.Destruct - 107)) | (1 << (PhpParser.Wakeup - 107)) | (1 << (PhpParser.Sleep - 107)) | (1 << (PhpParser.Autoload - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (PhpParser.IsSet__ - 139)) | (1 << (PhpParser.Unset__ - 139)) | (1 << (PhpParser.ToString__ - 139)) | (1 << (PhpParser.Invoke - 139)) | (1 << (PhpParser.SetState - 139)) | (1 << (PhpParser.Clone__ - 139)) | (1 << (PhpParser.DebugInfo - 139)) | (1 << (PhpParser.Namespace__ - 139)) | (1 << (PhpParser.Class__ - 139)) | (1 << (PhpParser.Traic__ - 139)) | (1 << (PhpParser.Function__ - 139)) | (1 << (PhpParser.Method__ - 139)) | (1 << (PhpParser.Line__ - 139)) | (1 << (PhpParser.File__ - 139)) | (1 << (PhpParser.Dir__ - 139)) | (1 << (PhpParser.Inc - 139)) | (1 << (PhpParser.Dec - 139)))) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & ((1 << (PhpParser.NamespaceSeparator - 187)) | (1 << (PhpParser.Bang - 187)) | (1 << (PhpParser.Plus - 187)) | (1 << (PhpParser.Minus - 187)) | (1 << (PhpParser.Tilde - 187)) | (1 << (PhpParser.SuppressWarnings - 187)) | (1 << (PhpParser.Dollar - 187)) | (1 << (PhpParser.OpenRoundBracket - 187)) | (1 << (PhpParser.OpenSquareBracket - 187)) | (1 << (PhpParser.VarName - 187)) | (1 << (PhpParser.Label - 187)))) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & ((1 << (PhpParser.Octal - 219)) | (1 << (PhpParser.Decimal - 219)) | (1 << (PhpParser.Real - 219)) | (1 << (PhpParser.Hex - 219)) | (1 << (PhpParser.Binary - 219)) | (1 << (PhpParser.BackQuoteString - 219)) | (1 << (PhpParser.SingleQuoteString - 219)) | (1 << (PhpParser.DoubleQuote - 219)) | (1 << (PhpParser.StartNowDoc - 219)) | (1 << (PhpParser.StartHereDoc - 219)))) !== 0)) {
                            {
                                this.state = 1722;
                                this.expression(0);
                            }
                        }
                        this.state = 1725;
                        this.match(PhpParser.CloseSquareBracket);
                    }
                    break;
                case PhpParser.OpenCurlyBracket:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1726;
                        this.match(PhpParser.OpenCurlyBracket);
                        this.state = 1727;
                        this.expression(0);
                        this.state = 1728;
                        this.match(PhpParser.CloseCurlyBracket);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.assignmentList = function () {
        var _localctx = new AssignmentListContext(this._ctx, this.state);
        this.enterRule(_localctx, 252, PhpParser.RULE_assignmentList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1733;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (PhpParser.Abstract - 43)) | (1 << (PhpParser.Array - 43)) | (1 << (PhpParser.As - 43)) | (1 << (PhpParser.BinaryCast - 43)) | (1 << (PhpParser.BoolType - 43)) | (1 << (PhpParser.BooleanConstant - 43)) | (1 << (PhpParser.Break - 43)) | (1 << (PhpParser.Callable - 43)) | (1 << (PhpParser.Case - 43)) | (1 << (PhpParser.Catch - 43)) | (1 << (PhpParser.Class - 43)) | (1 << (PhpParser.Clone - 43)) | (1 << (PhpParser.Const - 43)) | (1 << (PhpParser.Continue - 43)) | (1 << (PhpParser.Declare - 43)) | (1 << (PhpParser.Default - 43)) | (1 << (PhpParser.Do - 43)) | (1 << (PhpParser.DoubleCast - 43)) | (1 << (PhpParser.DoubleType - 43)) | (1 << (PhpParser.Echo - 43)) | (1 << (PhpParser.Else - 43)) | (1 << (PhpParser.ElseIf - 43)) | (1 << (PhpParser.Empty - 43)) | (1 << (PhpParser.EndDeclare - 43)) | (1 << (PhpParser.EndFor - 43)) | (1 << (PhpParser.EndForeach - 43)) | (1 << (PhpParser.EndIf - 43)) | (1 << (PhpParser.EndSwitch - 43)) | (1 << (PhpParser.EndWhile - 43)) | (1 << (PhpParser.Eval - 43)) | (1 << (PhpParser.Exit - 43)) | (1 << (PhpParser.Extends - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (PhpParser.Final - 75)) | (1 << (PhpParser.Finally - 75)) | (1 << (PhpParser.FloatCast - 75)) | (1 << (PhpParser.For - 75)) | (1 << (PhpParser.Foreach - 75)) | (1 << (PhpParser.Function - 75)) | (1 << (PhpParser.Global - 75)) | (1 << (PhpParser.Goto - 75)) | (1 << (PhpParser.If - 75)) | (1 << (PhpParser.Implements - 75)) | (1 << (PhpParser.Import - 75)) | (1 << (PhpParser.Include - 75)) | (1 << (PhpParser.IncludeOnce - 75)) | (1 << (PhpParser.InstanceOf - 75)) | (1 << (PhpParser.InsteadOf - 75)) | (1 << (PhpParser.Int8Cast - 75)) | (1 << (PhpParser.Int16Cast - 75)) | (1 << (PhpParser.Int64Type - 75)) | (1 << (PhpParser.IntType - 75)) | (1 << (PhpParser.Interface - 75)) | (1 << (PhpParser.IsSet - 75)) | (1 << (PhpParser.List - 75)) | (1 << (PhpParser.LogicalAnd - 75)) | (1 << (PhpParser.LogicalOr - 75)) | (1 << (PhpParser.LogicalXor - 75)) | (1 << (PhpParser.Namespace - 75)) | (1 << (PhpParser.New - 75)) | (1 << (PhpParser.Null - 75)) | (1 << (PhpParser.ObjectType - 75)) | (1 << (PhpParser.Parent_ - 75)) | (1 << (PhpParser.Partial - 75)) | (1 << (PhpParser.Print - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (PhpParser.Private - 107)) | (1 << (PhpParser.Protected - 107)) | (1 << (PhpParser.Public - 107)) | (1 << (PhpParser.Require - 107)) | (1 << (PhpParser.RequireOnce - 107)) | (1 << (PhpParser.Resource - 107)) | (1 << (PhpParser.Return - 107)) | (1 << (PhpParser.Static - 107)) | (1 << (PhpParser.StringType - 107)) | (1 << (PhpParser.Switch - 107)) | (1 << (PhpParser.Throw - 107)) | (1 << (PhpParser.Trait - 107)) | (1 << (PhpParser.Try - 107)) | (1 << (PhpParser.Typeof - 107)) | (1 << (PhpParser.UintCast - 107)) | (1 << (PhpParser.UnicodeCast - 107)) | (1 << (PhpParser.Unset - 107)) | (1 << (PhpParser.Use - 107)) | (1 << (PhpParser.Var - 107)) | (1 << (PhpParser.While - 107)) | (1 << (PhpParser.Yield - 107)) | (1 << (PhpParser.From - 107)) | (1 << (PhpParser.LambdaFn - 107)) | (1 << (PhpParser.Get - 107)) | (1 << (PhpParser.Set - 107)) | (1 << (PhpParser.Call - 107)) | (1 << (PhpParser.CallStatic - 107)) | (1 << (PhpParser.Constructor - 107)) | (1 << (PhpParser.Destruct - 107)) | (1 << (PhpParser.Wakeup - 107)) | (1 << (PhpParser.Sleep - 107)) | (1 << (PhpParser.Autoload - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (PhpParser.IsSet__ - 139)) | (1 << (PhpParser.Unset__ - 139)) | (1 << (PhpParser.ToString__ - 139)) | (1 << (PhpParser.Invoke - 139)) | (1 << (PhpParser.SetState - 139)) | (1 << (PhpParser.Clone__ - 139)) | (1 << (PhpParser.DebugInfo - 139)) | (1 << (PhpParser.Namespace__ - 139)) | (1 << (PhpParser.Class__ - 139)) | (1 << (PhpParser.Traic__ - 139)) | (1 << (PhpParser.Function__ - 139)) | (1 << (PhpParser.Method__ - 139)) | (1 << (PhpParser.Line__ - 139)) | (1 << (PhpParser.File__ - 139)) | (1 << (PhpParser.Dir__ - 139)) | (1 << (PhpParser.Inc - 139)) | (1 << (PhpParser.Dec - 139)))) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & ((1 << (PhpParser.NamespaceSeparator - 187)) | (1 << (PhpParser.Ampersand - 187)) | (1 << (PhpParser.Bang - 187)) | (1 << (PhpParser.Plus - 187)) | (1 << (PhpParser.Minus - 187)) | (1 << (PhpParser.Tilde - 187)) | (1 << (PhpParser.SuppressWarnings - 187)) | (1 << (PhpParser.Dollar - 187)) | (1 << (PhpParser.OpenRoundBracket - 187)) | (1 << (PhpParser.OpenSquareBracket - 187)) | (1 << (PhpParser.VarName - 187)) | (1 << (PhpParser.Label - 187)))) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & ((1 << (PhpParser.Octal - 219)) | (1 << (PhpParser.Decimal - 219)) | (1 << (PhpParser.Real - 219)) | (1 << (PhpParser.Hex - 219)) | (1 << (PhpParser.Binary - 219)) | (1 << (PhpParser.BackQuoteString - 219)) | (1 << (PhpParser.SingleQuoteString - 219)) | (1 << (PhpParser.DoubleQuote - 219)) | (1 << (PhpParser.StartNowDoc - 219)) | (1 << (PhpParser.StartHereDoc - 219)))) !== 0)) {
                    {
                        this.state = 1732;
                        this.assignmentListElement();
                    }
                }
                this.state = 1741;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PhpParser.Comma) {
                    {
                        {
                            this.state = 1735;
                            this.match(PhpParser.Comma);
                            this.state = 1737;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (PhpParser.Abstract - 43)) | (1 << (PhpParser.Array - 43)) | (1 << (PhpParser.As - 43)) | (1 << (PhpParser.BinaryCast - 43)) | (1 << (PhpParser.BoolType - 43)) | (1 << (PhpParser.BooleanConstant - 43)) | (1 << (PhpParser.Break - 43)) | (1 << (PhpParser.Callable - 43)) | (1 << (PhpParser.Case - 43)) | (1 << (PhpParser.Catch - 43)) | (1 << (PhpParser.Class - 43)) | (1 << (PhpParser.Clone - 43)) | (1 << (PhpParser.Const - 43)) | (1 << (PhpParser.Continue - 43)) | (1 << (PhpParser.Declare - 43)) | (1 << (PhpParser.Default - 43)) | (1 << (PhpParser.Do - 43)) | (1 << (PhpParser.DoubleCast - 43)) | (1 << (PhpParser.DoubleType - 43)) | (1 << (PhpParser.Echo - 43)) | (1 << (PhpParser.Else - 43)) | (1 << (PhpParser.ElseIf - 43)) | (1 << (PhpParser.Empty - 43)) | (1 << (PhpParser.EndDeclare - 43)) | (1 << (PhpParser.EndFor - 43)) | (1 << (PhpParser.EndForeach - 43)) | (1 << (PhpParser.EndIf - 43)) | (1 << (PhpParser.EndSwitch - 43)) | (1 << (PhpParser.EndWhile - 43)) | (1 << (PhpParser.Eval - 43)) | (1 << (PhpParser.Exit - 43)) | (1 << (PhpParser.Extends - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (PhpParser.Final - 75)) | (1 << (PhpParser.Finally - 75)) | (1 << (PhpParser.FloatCast - 75)) | (1 << (PhpParser.For - 75)) | (1 << (PhpParser.Foreach - 75)) | (1 << (PhpParser.Function - 75)) | (1 << (PhpParser.Global - 75)) | (1 << (PhpParser.Goto - 75)) | (1 << (PhpParser.If - 75)) | (1 << (PhpParser.Implements - 75)) | (1 << (PhpParser.Import - 75)) | (1 << (PhpParser.Include - 75)) | (1 << (PhpParser.IncludeOnce - 75)) | (1 << (PhpParser.InstanceOf - 75)) | (1 << (PhpParser.InsteadOf - 75)) | (1 << (PhpParser.Int8Cast - 75)) | (1 << (PhpParser.Int16Cast - 75)) | (1 << (PhpParser.Int64Type - 75)) | (1 << (PhpParser.IntType - 75)) | (1 << (PhpParser.Interface - 75)) | (1 << (PhpParser.IsSet - 75)) | (1 << (PhpParser.List - 75)) | (1 << (PhpParser.LogicalAnd - 75)) | (1 << (PhpParser.LogicalOr - 75)) | (1 << (PhpParser.LogicalXor - 75)) | (1 << (PhpParser.Namespace - 75)) | (1 << (PhpParser.New - 75)) | (1 << (PhpParser.Null - 75)) | (1 << (PhpParser.ObjectType - 75)) | (1 << (PhpParser.Parent_ - 75)) | (1 << (PhpParser.Partial - 75)) | (1 << (PhpParser.Print - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (PhpParser.Private - 107)) | (1 << (PhpParser.Protected - 107)) | (1 << (PhpParser.Public - 107)) | (1 << (PhpParser.Require - 107)) | (1 << (PhpParser.RequireOnce - 107)) | (1 << (PhpParser.Resource - 107)) | (1 << (PhpParser.Return - 107)) | (1 << (PhpParser.Static - 107)) | (1 << (PhpParser.StringType - 107)) | (1 << (PhpParser.Switch - 107)) | (1 << (PhpParser.Throw - 107)) | (1 << (PhpParser.Trait - 107)) | (1 << (PhpParser.Try - 107)) | (1 << (PhpParser.Typeof - 107)) | (1 << (PhpParser.UintCast - 107)) | (1 << (PhpParser.UnicodeCast - 107)) | (1 << (PhpParser.Unset - 107)) | (1 << (PhpParser.Use - 107)) | (1 << (PhpParser.Var - 107)) | (1 << (PhpParser.While - 107)) | (1 << (PhpParser.Yield - 107)) | (1 << (PhpParser.From - 107)) | (1 << (PhpParser.LambdaFn - 107)) | (1 << (PhpParser.Get - 107)) | (1 << (PhpParser.Set - 107)) | (1 << (PhpParser.Call - 107)) | (1 << (PhpParser.CallStatic - 107)) | (1 << (PhpParser.Constructor - 107)) | (1 << (PhpParser.Destruct - 107)) | (1 << (PhpParser.Wakeup - 107)) | (1 << (PhpParser.Sleep - 107)) | (1 << (PhpParser.Autoload - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (PhpParser.IsSet__ - 139)) | (1 << (PhpParser.Unset__ - 139)) | (1 << (PhpParser.ToString__ - 139)) | (1 << (PhpParser.Invoke - 139)) | (1 << (PhpParser.SetState - 139)) | (1 << (PhpParser.Clone__ - 139)) | (1 << (PhpParser.DebugInfo - 139)) | (1 << (PhpParser.Namespace__ - 139)) | (1 << (PhpParser.Class__ - 139)) | (1 << (PhpParser.Traic__ - 139)) | (1 << (PhpParser.Function__ - 139)) | (1 << (PhpParser.Method__ - 139)) | (1 << (PhpParser.Line__ - 139)) | (1 << (PhpParser.File__ - 139)) | (1 << (PhpParser.Dir__ - 139)) | (1 << (PhpParser.Inc - 139)) | (1 << (PhpParser.Dec - 139)))) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & ((1 << (PhpParser.NamespaceSeparator - 187)) | (1 << (PhpParser.Ampersand - 187)) | (1 << (PhpParser.Bang - 187)) | (1 << (PhpParser.Plus - 187)) | (1 << (PhpParser.Minus - 187)) | (1 << (PhpParser.Tilde - 187)) | (1 << (PhpParser.SuppressWarnings - 187)) | (1 << (PhpParser.Dollar - 187)) | (1 << (PhpParser.OpenRoundBracket - 187)) | (1 << (PhpParser.OpenSquareBracket - 187)) | (1 << (PhpParser.VarName - 187)) | (1 << (PhpParser.Label - 187)))) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & ((1 << (PhpParser.Octal - 219)) | (1 << (PhpParser.Decimal - 219)) | (1 << (PhpParser.Real - 219)) | (1 << (PhpParser.Hex - 219)) | (1 << (PhpParser.Binary - 219)) | (1 << (PhpParser.BackQuoteString - 219)) | (1 << (PhpParser.SingleQuoteString - 219)) | (1 << (PhpParser.DoubleQuote - 219)) | (1 << (PhpParser.StartNowDoc - 219)) | (1 << (PhpParser.StartHereDoc - 219)))) !== 0)) {
                                {
                                    this.state = 1736;
                                    this.assignmentListElement();
                                }
                            }
                        }
                    }
                    this.state = 1743;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.assignmentListElement = function () {
        var _localctx = new AssignmentListElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 254, PhpParser.RULE_assignmentListElement);
        try {
            this.state = 1751;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 212, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1744;
                        this.chain();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1745;
                        this.match(PhpParser.List);
                        this.state = 1746;
                        this.match(PhpParser.OpenRoundBracket);
                        this.state = 1747;
                        this.assignmentList();
                        this.state = 1748;
                        this.match(PhpParser.CloseRoundBracket);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1750;
                        this.arrayItem();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.modifier = function () {
        var _localctx = new ModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 256, PhpParser.RULE_modifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1753;
                _la = this._input.LA(1);
                if (!(_la === PhpParser.Abstract || _la === PhpParser.Final)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.identifier = function () {
        var _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 258, PhpParser.RULE_identifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1755;
                _la = this._input.LA(1);
                if (!(((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (PhpParser.Abstract - 43)) | (1 << (PhpParser.Array - 43)) | (1 << (PhpParser.As - 43)) | (1 << (PhpParser.BinaryCast - 43)) | (1 << (PhpParser.BoolType - 43)) | (1 << (PhpParser.BooleanConstant - 43)) | (1 << (PhpParser.Break - 43)) | (1 << (PhpParser.Callable - 43)) | (1 << (PhpParser.Case - 43)) | (1 << (PhpParser.Catch - 43)) | (1 << (PhpParser.Class - 43)) | (1 << (PhpParser.Clone - 43)) | (1 << (PhpParser.Const - 43)) | (1 << (PhpParser.Continue - 43)) | (1 << (PhpParser.Declare - 43)) | (1 << (PhpParser.Default - 43)) | (1 << (PhpParser.Do - 43)) | (1 << (PhpParser.DoubleCast - 43)) | (1 << (PhpParser.DoubleType - 43)) | (1 << (PhpParser.Echo - 43)) | (1 << (PhpParser.Else - 43)) | (1 << (PhpParser.ElseIf - 43)) | (1 << (PhpParser.Empty - 43)) | (1 << (PhpParser.EndDeclare - 43)) | (1 << (PhpParser.EndFor - 43)) | (1 << (PhpParser.EndForeach - 43)) | (1 << (PhpParser.EndIf - 43)) | (1 << (PhpParser.EndSwitch - 43)) | (1 << (PhpParser.EndWhile - 43)) | (1 << (PhpParser.Eval - 43)) | (1 << (PhpParser.Exit - 43)) | (1 << (PhpParser.Extends - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (PhpParser.Final - 75)) | (1 << (PhpParser.Finally - 75)) | (1 << (PhpParser.FloatCast - 75)) | (1 << (PhpParser.For - 75)) | (1 << (PhpParser.Foreach - 75)) | (1 << (PhpParser.Function - 75)) | (1 << (PhpParser.Global - 75)) | (1 << (PhpParser.Goto - 75)) | (1 << (PhpParser.If - 75)) | (1 << (PhpParser.Implements - 75)) | (1 << (PhpParser.Import - 75)) | (1 << (PhpParser.Include - 75)) | (1 << (PhpParser.IncludeOnce - 75)) | (1 << (PhpParser.InstanceOf - 75)) | (1 << (PhpParser.InsteadOf - 75)) | (1 << (PhpParser.Int8Cast - 75)) | (1 << (PhpParser.Int16Cast - 75)) | (1 << (PhpParser.Int64Type - 75)) | (1 << (PhpParser.IntType - 75)) | (1 << (PhpParser.Interface - 75)) | (1 << (PhpParser.IsSet - 75)) | (1 << (PhpParser.List - 75)) | (1 << (PhpParser.LogicalAnd - 75)) | (1 << (PhpParser.LogicalOr - 75)) | (1 << (PhpParser.LogicalXor - 75)) | (1 << (PhpParser.Namespace - 75)) | (1 << (PhpParser.New - 75)) | (1 << (PhpParser.Null - 75)) | (1 << (PhpParser.ObjectType - 75)) | (1 << (PhpParser.Parent_ - 75)) | (1 << (PhpParser.Partial - 75)) | (1 << (PhpParser.Print - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (PhpParser.Private - 107)) | (1 << (PhpParser.Protected - 107)) | (1 << (PhpParser.Public - 107)) | (1 << (PhpParser.Require - 107)) | (1 << (PhpParser.RequireOnce - 107)) | (1 << (PhpParser.Resource - 107)) | (1 << (PhpParser.Return - 107)) | (1 << (PhpParser.Static - 107)) | (1 << (PhpParser.StringType - 107)) | (1 << (PhpParser.Switch - 107)) | (1 << (PhpParser.Throw - 107)) | (1 << (PhpParser.Trait - 107)) | (1 << (PhpParser.Try - 107)) | (1 << (PhpParser.Typeof - 107)) | (1 << (PhpParser.UintCast - 107)) | (1 << (PhpParser.UnicodeCast - 107)) | (1 << (PhpParser.Unset - 107)) | (1 << (PhpParser.Use - 107)) | (1 << (PhpParser.Var - 107)) | (1 << (PhpParser.While - 107)) | (1 << (PhpParser.Yield - 107)) | (1 << (PhpParser.From - 107)) | (1 << (PhpParser.Get - 107)) | (1 << (PhpParser.Set - 107)) | (1 << (PhpParser.Call - 107)) | (1 << (PhpParser.CallStatic - 107)) | (1 << (PhpParser.Constructor - 107)) | (1 << (PhpParser.Destruct - 107)) | (1 << (PhpParser.Wakeup - 107)) | (1 << (PhpParser.Sleep - 107)) | (1 << (PhpParser.Autoload - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (PhpParser.IsSet__ - 139)) | (1 << (PhpParser.Unset__ - 139)) | (1 << (PhpParser.ToString__ - 139)) | (1 << (PhpParser.Invoke - 139)) | (1 << (PhpParser.SetState - 139)) | (1 << (PhpParser.Clone__ - 139)) | (1 << (PhpParser.DebugInfo - 139)) | (1 << (PhpParser.Namespace__ - 139)) | (1 << (PhpParser.Class__ - 139)) | (1 << (PhpParser.Traic__ - 139)) | (1 << (PhpParser.Function__ - 139)) | (1 << (PhpParser.Method__ - 139)) | (1 << (PhpParser.Line__ - 139)) | (1 << (PhpParser.File__ - 139)) | (1 << (PhpParser.Dir__ - 139)))) !== 0) || _la === PhpParser.Label)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.memberModifier = function () {
        var _localctx = new MemberModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 260, PhpParser.RULE_memberModifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1757;
                _la = this._input.LA(1);
                if (!(_la === PhpParser.Abstract || _la === PhpParser.Final || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (PhpParser.Private - 107)) | (1 << (PhpParser.Protected - 107)) | (1 << (PhpParser.Public - 107)) | (1 << (PhpParser.Static - 107)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.magicConstant = function () {
        var _localctx = new MagicConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 262, PhpParser.RULE_magicConstant);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1759;
                _la = this._input.LA(1);
                if (!(((((_la - 146)) & ~0x1F) === 0 && ((1 << (_la - 146)) & ((1 << (PhpParser.Namespace__ - 146)) | (1 << (PhpParser.Class__ - 146)) | (1 << (PhpParser.Traic__ - 146)) | (1 << (PhpParser.Function__ - 146)) | (1 << (PhpParser.Method__ - 146)) | (1 << (PhpParser.Line__ - 146)) | (1 << (PhpParser.File__ - 146)) | (1 << (PhpParser.Dir__ - 146)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.magicMethod = function () {
        var _localctx = new MagicMethodContext(this._ctx, this.state);
        this.enterRule(_localctx, 264, PhpParser.RULE_magicMethod);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1761;
                _la = this._input.LA(1);
                if (!(((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (PhpParser.Get - 130)) | (1 << (PhpParser.Set - 130)) | (1 << (PhpParser.Call - 130)) | (1 << (PhpParser.CallStatic - 130)) | (1 << (PhpParser.Constructor - 130)) | (1 << (PhpParser.Destruct - 130)) | (1 << (PhpParser.Wakeup - 130)) | (1 << (PhpParser.Sleep - 130)) | (1 << (PhpParser.Autoload - 130)) | (1 << (PhpParser.IsSet__ - 130)) | (1 << (PhpParser.Unset__ - 130)) | (1 << (PhpParser.ToString__ - 130)) | (1 << (PhpParser.Invoke - 130)) | (1 << (PhpParser.SetState - 130)) | (1 << (PhpParser.Clone__ - 130)) | (1 << (PhpParser.DebugInfo - 130)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.primitiveType = function () {
        var _localctx = new PrimitiveTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 266, PhpParser.RULE_primitiveType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1763;
                _la = this._input.LA(1);
                if (!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (PhpParser.Array - 44)) | (1 << (PhpParser.BoolType - 44)) | (1 << (PhpParser.DoubleType - 44)))) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (PhpParser.Int64Type - 92)) | (1 << (PhpParser.IntType - 92)) | (1 << (PhpParser.ObjectType - 92)) | (1 << (PhpParser.Resource - 92)) | (1 << (PhpParser.StringType - 92)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    PhpParser.prototype.castOperation = function () {
        var _localctx = new CastOperationContext(this._ctx, this.state);
        this.enterRule(_localctx, 268, PhpParser.RULE_castOperation);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1765;
                _la = this._input.LA(1);
                if (!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (PhpParser.Array - 44)) | (1 << (PhpParser.BinaryCast - 44)) | (1 << (PhpParser.BoolType - 44)) | (1 << (PhpParser.DoubleCast - 44)) | (1 << (PhpParser.DoubleType - 44)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (PhpParser.FloatCast - 77)) | (1 << (PhpParser.Int8Cast - 77)) | (1 << (PhpParser.Int16Cast - 77)) | (1 << (PhpParser.Int64Type - 77)) | (1 << (PhpParser.IntType - 77)) | (1 << (PhpParser.ObjectType - 77)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (PhpParser.Resource - 112)) | (1 << (PhpParser.StringType - 112)) | (1 << (PhpParser.UintCast - 112)) | (1 << (PhpParser.UnicodeCast - 112)) | (1 << (PhpParser.Unset - 112)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    PhpParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 83:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    };
    PhpParser.prototype.expression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 20);
            case 1:
                return this.precpred(this._ctx, 18);
            case 2:
                return this.precpred(this._ctx, 17);
            case 3:
                return this.precpred(this._ctx, 16);
            case 4:
                return this.precpred(this._ctx, 15);
            case 5:
                return this.precpred(this._ctx, 14);
            case 6:
                return this.precpred(this._ctx, 13);
            case 7:
                return this.precpred(this._ctx, 12);
            case 8:
                return this.precpred(this._ctx, 11);
            case 9:
                return this.precpred(this._ctx, 10);
            case 10:
                return this.precpred(this._ctx, 9);
            case 11:
                return this.precpred(this._ctx, 8);
            case 12:
                return this.precpred(this._ctx, 7);
            case 13:
                return this.precpred(this._ctx, 6);
            case 14:
                return this.precpred(this._ctx, 3);
            case 15:
                return this.precpred(this._ctx, 2);
            case 16:
                return this.precpred(this._ctx, 1);
            case 17:
                return this.precpred(this._ctx, 19);
        }
        return true;
    };
    Object.defineProperty(PhpParser, "_ATN", {
        get: function () {
            if (!PhpParser.__ATN) {
                PhpParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(PhpParser._serializedATN));
            }
            return PhpParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    PhpParser.SeaWhitespace = 1;
    PhpParser.HtmlText = 2;
    PhpParser.XmlStart = 3;
    PhpParser.PHPStart = 4;
    PhpParser.HtmlScriptOpen = 5;
    PhpParser.HtmlStyleOpen = 6;
    PhpParser.HtmlComment = 7;
    PhpParser.HtmlDtd = 8;
    PhpParser.HtmlOpen = 9;
    PhpParser.Shebang = 10;
    PhpParser.Error = 11;
    PhpParser.XmlText = 12;
    PhpParser.XmlClose = 13;
    PhpParser.PHPStartInside = 14;
    PhpParser.HtmlClose = 15;
    PhpParser.HtmlSlashClose = 16;
    PhpParser.HtmlSlash = 17;
    PhpParser.HtmlEquals = 18;
    PhpParser.HtmlStartQuoteString = 19;
    PhpParser.HtmlStartDoubleQuoteString = 20;
    PhpParser.HtmlHex = 21;
    PhpParser.HtmlDecimal = 22;
    PhpParser.HtmlSpace = 23;
    PhpParser.HtmlName = 24;
    PhpParser.ErrorInside = 25;
    PhpParser.PHPStartInsideQuoteString = 26;
    PhpParser.HtmlEndQuoteString = 27;
    PhpParser.HtmlQuoteString = 28;
    PhpParser.ErrorHtmlQuote = 29;
    PhpParser.PHPStartDoubleQuoteString = 30;
    PhpParser.HtmlEndDoubleQuoteString = 31;
    PhpParser.HtmlDoubleQuoteString = 32;
    PhpParser.ErrorHtmlDoubleQuote = 33;
    PhpParser.ScriptText = 34;
    PhpParser.ScriptClose = 35;
    PhpParser.PHPStartInsideScript = 36;
    PhpParser.StyleBody = 37;
    PhpParser.PHPEnd = 38;
    PhpParser.Whitespace = 39;
    PhpParser.MultiLineComment = 40;
    PhpParser.SingleLineComment = 41;
    PhpParser.ShellStyleComment = 42;
    PhpParser.Abstract = 43;
    PhpParser.Array = 44;
    PhpParser.As = 45;
    PhpParser.BinaryCast = 46;
    PhpParser.BoolType = 47;
    PhpParser.BooleanConstant = 48;
    PhpParser.Break = 49;
    PhpParser.Callable = 50;
    PhpParser.Case = 51;
    PhpParser.Catch = 52;
    PhpParser.Class = 53;
    PhpParser.Clone = 54;
    PhpParser.Const = 55;
    PhpParser.Continue = 56;
    PhpParser.Declare = 57;
    PhpParser.Default = 58;
    PhpParser.Do = 59;
    PhpParser.DoubleCast = 60;
    PhpParser.DoubleType = 61;
    PhpParser.Echo = 62;
    PhpParser.Else = 63;
    PhpParser.ElseIf = 64;
    PhpParser.Empty = 65;
    PhpParser.EndDeclare = 66;
    PhpParser.EndFor = 67;
    PhpParser.EndForeach = 68;
    PhpParser.EndIf = 69;
    PhpParser.EndSwitch = 70;
    PhpParser.EndWhile = 71;
    PhpParser.Eval = 72;
    PhpParser.Exit = 73;
    PhpParser.Extends = 74;
    PhpParser.Final = 75;
    PhpParser.Finally = 76;
    PhpParser.FloatCast = 77;
    PhpParser.For = 78;
    PhpParser.Foreach = 79;
    PhpParser.Function = 80;
    PhpParser.Global = 81;
    PhpParser.Goto = 82;
    PhpParser.If = 83;
    PhpParser.Implements = 84;
    PhpParser.Import = 85;
    PhpParser.Include = 86;
    PhpParser.IncludeOnce = 87;
    PhpParser.InstanceOf = 88;
    PhpParser.InsteadOf = 89;
    PhpParser.Int8Cast = 90;
    PhpParser.Int16Cast = 91;
    PhpParser.Int64Type = 92;
    PhpParser.IntType = 93;
    PhpParser.Interface = 94;
    PhpParser.IsSet = 95;
    PhpParser.List = 96;
    PhpParser.LogicalAnd = 97;
    PhpParser.LogicalOr = 98;
    PhpParser.LogicalXor = 99;
    PhpParser.Namespace = 100;
    PhpParser.New = 101;
    PhpParser.Null = 102;
    PhpParser.ObjectType = 103;
    PhpParser.Parent_ = 104;
    PhpParser.Partial = 105;
    PhpParser.Print = 106;
    PhpParser.Private = 107;
    PhpParser.Protected = 108;
    PhpParser.Public = 109;
    PhpParser.Require = 110;
    PhpParser.RequireOnce = 111;
    PhpParser.Resource = 112;
    PhpParser.Return = 113;
    PhpParser.Static = 114;
    PhpParser.StringType = 115;
    PhpParser.Switch = 116;
    PhpParser.Throw = 117;
    PhpParser.Trait = 118;
    PhpParser.Try = 119;
    PhpParser.Typeof = 120;
    PhpParser.UintCast = 121;
    PhpParser.UnicodeCast = 122;
    PhpParser.Unset = 123;
    PhpParser.Use = 124;
    PhpParser.Var = 125;
    PhpParser.While = 126;
    PhpParser.Yield = 127;
    PhpParser.From = 128;
    PhpParser.LambdaFn = 129;
    PhpParser.Get = 130;
    PhpParser.Set = 131;
    PhpParser.Call = 132;
    PhpParser.CallStatic = 133;
    PhpParser.Constructor = 134;
    PhpParser.Destruct = 135;
    PhpParser.Wakeup = 136;
    PhpParser.Sleep = 137;
    PhpParser.Autoload = 138;
    PhpParser.IsSet__ = 139;
    PhpParser.Unset__ = 140;
    PhpParser.ToString__ = 141;
    PhpParser.Invoke = 142;
    PhpParser.SetState = 143;
    PhpParser.Clone__ = 144;
    PhpParser.DebugInfo = 145;
    PhpParser.Namespace__ = 146;
    PhpParser.Class__ = 147;
    PhpParser.Traic__ = 148;
    PhpParser.Function__ = 149;
    PhpParser.Method__ = 150;
    PhpParser.Line__ = 151;
    PhpParser.File__ = 152;
    PhpParser.Dir__ = 153;
    PhpParser.Spaceship = 154;
    PhpParser.Lgeneric = 155;
    PhpParser.Rgeneric = 156;
    PhpParser.DoubleArrow = 157;
    PhpParser.Inc = 158;
    PhpParser.Dec = 159;
    PhpParser.IsIdentical = 160;
    PhpParser.IsNoidentical = 161;
    PhpParser.IsEqual = 162;
    PhpParser.IsNotEq = 163;
    PhpParser.IsSmallerOrEqual = 164;
    PhpParser.IsGreaterOrEqual = 165;
    PhpParser.PlusEqual = 166;
    PhpParser.MinusEqual = 167;
    PhpParser.MulEqual = 168;
    PhpParser.Pow = 169;
    PhpParser.PowEqual = 170;
    PhpParser.DivEqual = 171;
    PhpParser.Concaequal = 172;
    PhpParser.ModEqual = 173;
    PhpParser.ShiftLeftEqual = 174;
    PhpParser.ShiftRightEqual = 175;
    PhpParser.AndEqual = 176;
    PhpParser.OrEqual = 177;
    PhpParser.XorEqual = 178;
    PhpParser.BooleanOr = 179;
    PhpParser.BooleanAnd = 180;
    PhpParser.NullCoalescing = 181;
    PhpParser.NullCoalescingEqual = 182;
    PhpParser.ShiftLeft = 183;
    PhpParser.ShiftRight = 184;
    PhpParser.DoubleColon = 185;
    PhpParser.ObjectOperator = 186;
    PhpParser.NamespaceSeparator = 187;
    PhpParser.Ellipsis = 188;
    PhpParser.Less = 189;
    PhpParser.Greater = 190;
    PhpParser.Ampersand = 191;
    PhpParser.Pipe = 192;
    PhpParser.Bang = 193;
    PhpParser.Caret = 194;
    PhpParser.Plus = 195;
    PhpParser.Minus = 196;
    PhpParser.Asterisk = 197;
    PhpParser.Percent = 198;
    PhpParser.Divide = 199;
    PhpParser.Tilde = 200;
    PhpParser.SuppressWarnings = 201;
    PhpParser.Dollar = 202;
    PhpParser.Dot = 203;
    PhpParser.QuestionMark = 204;
    PhpParser.OpenRoundBracket = 205;
    PhpParser.CloseRoundBracket = 206;
    PhpParser.OpenSquareBracket = 207;
    PhpParser.CloseSquareBracket = 208;
    PhpParser.OpenCurlyBracket = 209;
    PhpParser.CloseCurlyBracket = 210;
    PhpParser.Comma = 211;
    PhpParser.Colon = 212;
    PhpParser.SemiColon = 213;
    PhpParser.Eq = 214;
    PhpParser.Quote = 215;
    PhpParser.BackQuote = 216;
    PhpParser.VarName = 217;
    PhpParser.Label = 218;
    PhpParser.Octal = 219;
    PhpParser.Decimal = 220;
    PhpParser.Real = 221;
    PhpParser.Hex = 222;
    PhpParser.Binary = 223;
    PhpParser.BackQuoteString = 224;
    PhpParser.SingleQuoteString = 225;
    PhpParser.DoubleQuote = 226;
    PhpParser.StartNowDoc = 227;
    PhpParser.StartHereDoc = 228;
    PhpParser.ErrorPhp = 229;
    PhpParser.CurlyDollar = 230;
    PhpParser.UnicodeEscape = 231;
    PhpParser.StringPart = 232;
    PhpParser.Comment = 233;
    PhpParser.PHPEndSingleLineComment = 234;
    PhpParser.CommentEnd = 235;
    PhpParser.HereDocText = 236;
    PhpParser.XmlText2 = 237;
    PhpParser.RULE_htmlDocument = 0;
    PhpParser.RULE_htmlElementOrPhpBlock = 1;
    PhpParser.RULE_htmlElements = 2;
    PhpParser.RULE_htmlElement = 3;
    PhpParser.RULE_scriptTextPart = 4;
    PhpParser.RULE_phpBlock = 5;
    PhpParser.RULE_importStatement = 6;
    PhpParser.RULE_topStatement = 7;
    PhpParser.RULE_useDeclaration = 8;
    PhpParser.RULE_useDeclarationContentList = 9;
    PhpParser.RULE_useDeclarationContent = 10;
    PhpParser.RULE_namespaceDeclaration = 11;
    PhpParser.RULE_namespaceStatement = 12;
    PhpParser.RULE_functionDeclaration = 13;
    PhpParser.RULE_classDeclaration = 14;
    PhpParser.RULE_classEntryType = 15;
    PhpParser.RULE_interfaceList = 16;
    PhpParser.RULE_typeParameterListInBrackets = 17;
    PhpParser.RULE_typeParameterList = 18;
    PhpParser.RULE_typeParameterWithDefaultsList = 19;
    PhpParser.RULE_typeParameterDecl = 20;
    PhpParser.RULE_typeParameterWithDefaultDecl = 21;
    PhpParser.RULE_genericDynamicArgs = 22;
    PhpParser.RULE_attributes = 23;
    PhpParser.RULE_attributesGroup = 24;
    PhpParser.RULE_attribute = 25;
    PhpParser.RULE_attributeArgList = 26;
    PhpParser.RULE_attributeNamedArgList = 27;
    PhpParser.RULE_attributeNamedArg = 28;
    PhpParser.RULE_innerStatementList = 29;
    PhpParser.RULE_innerStatement = 30;
    PhpParser.RULE_statement = 31;
    PhpParser.RULE_emptyStatement = 32;
    PhpParser.RULE_blockStatement = 33;
    PhpParser.RULE_ifStatement = 34;
    PhpParser.RULE_elseIfStatement = 35;
    PhpParser.RULE_elseIfColonStatement = 36;
    PhpParser.RULE_elseStatement = 37;
    PhpParser.RULE_elseColonStatement = 38;
    PhpParser.RULE_whileStatement = 39;
    PhpParser.RULE_doWhileStatement = 40;
    PhpParser.RULE_forStatement = 41;
    PhpParser.RULE_forInit = 42;
    PhpParser.RULE_forUpdate = 43;
    PhpParser.RULE_switchStatement = 44;
    PhpParser.RULE_switchBlock = 45;
    PhpParser.RULE_breakStatement = 46;
    PhpParser.RULE_continueStatement = 47;
    PhpParser.RULE_returnStatement = 48;
    PhpParser.RULE_expressionStatement = 49;
    PhpParser.RULE_unsetStatement = 50;
    PhpParser.RULE_foreachStatement = 51;
    PhpParser.RULE_tryCatchFinally = 52;
    PhpParser.RULE_catchClause = 53;
    PhpParser.RULE_finallyStatement = 54;
    PhpParser.RULE_throwStatement = 55;
    PhpParser.RULE_gotoStatement = 56;
    PhpParser.RULE_declareStatement = 57;
    PhpParser.RULE_inlineHtmlStatement = 58;
    PhpParser.RULE_inlineHtml = 59;
    PhpParser.RULE_declareList = 60;
    PhpParser.RULE_formalParameterList = 61;
    PhpParser.RULE_formalParameter = 62;
    PhpParser.RULE_typeHint = 63;
    PhpParser.RULE_globalStatement = 64;
    PhpParser.RULE_globalVar = 65;
    PhpParser.RULE_echoStatement = 66;
    PhpParser.RULE_staticVariableStatement = 67;
    PhpParser.RULE_classStatement = 68;
    PhpParser.RULE_traitAdaptations = 69;
    PhpParser.RULE_traitAdaptationStatement = 70;
    PhpParser.RULE_traitPrecedence = 71;
    PhpParser.RULE_traitAlias = 72;
    PhpParser.RULE_traitMethodReference = 73;
    PhpParser.RULE_baseCtorCall = 74;
    PhpParser.RULE_methodBody = 75;
    PhpParser.RULE_propertyModifiers = 76;
    PhpParser.RULE_memberModifiers = 77;
    PhpParser.RULE_variableInitializer = 78;
    PhpParser.RULE_identifierInititalizer = 79;
    PhpParser.RULE_globalConstantDeclaration = 80;
    PhpParser.RULE_expressionList = 81;
    PhpParser.RULE_parentheses = 82;
    PhpParser.RULE_expression = 83;
    PhpParser.RULE_assignable = 84;
    PhpParser.RULE_arrayCreation = 85;
    PhpParser.RULE_lambdaFunctionExpr = 86;
    PhpParser.RULE_newExpr = 87;
    PhpParser.RULE_assignmentOperator = 88;
    PhpParser.RULE_yieldExpression = 89;
    PhpParser.RULE_arrayItemList = 90;
    PhpParser.RULE_arrayItem = 91;
    PhpParser.RULE_lambdaFunctionUseVars = 92;
    PhpParser.RULE_lambdaFunctionUseVar = 93;
    PhpParser.RULE_qualifiedStaticTypeRef = 94;
    PhpParser.RULE_typeRef = 95;
    PhpParser.RULE_anoymousClass = 96;
    PhpParser.RULE_indirectTypeRef = 97;
    PhpParser.RULE_qualifiedNamespaceName = 98;
    PhpParser.RULE_namespaceNameList = 99;
    PhpParser.RULE_namespaceNameTail = 100;
    PhpParser.RULE_qualifiedNamespaceNameList = 101;
    PhpParser.RULE_arguments = 102;
    PhpParser.RULE_actualArgument = 103;
    PhpParser.RULE_constantInititalizer = 104;
    PhpParser.RULE_constantArrayItemList = 105;
    PhpParser.RULE_constantArrayItem = 106;
    PhpParser.RULE_constant = 107;
    PhpParser.RULE_literalConstant = 108;
    PhpParser.RULE_numericConstant = 109;
    PhpParser.RULE_classConstant = 110;
    PhpParser.RULE_stringConstant = 111;
    PhpParser.RULE_string = 112;
    PhpParser.RULE_interpolatedStringPart = 113;
    PhpParser.RULE_chainList = 114;
    PhpParser.RULE_chain = 115;
    PhpParser.RULE_chainOrigin = 116;
    PhpParser.RULE_memberAccess = 117;
    PhpParser.RULE_functionCall = 118;
    PhpParser.RULE_functionCallName = 119;
    PhpParser.RULE_actualArguments = 120;
    PhpParser.RULE_chainBase = 121;
    PhpParser.RULE_keyedFieldName = 122;
    PhpParser.RULE_keyedSimpleFieldName = 123;
    PhpParser.RULE_keyedVariable = 124;
    PhpParser.RULE_squareCurlyExpression = 125;
    PhpParser.RULE_assignmentList = 126;
    PhpParser.RULE_assignmentListElement = 127;
    PhpParser.RULE_modifier = 128;
    PhpParser.RULE_identifier = 129;
    PhpParser.RULE_memberModifier = 130;
    PhpParser.RULE_magicConstant = 131;
    PhpParser.RULE_magicMethod = 132;
    PhpParser.RULE_primitiveType = 133;
    PhpParser.RULE_castOperation = 134;
    // tslint:disable:no-trailing-whitespace
    PhpParser.ruleNames = [
        "htmlDocument", "htmlElementOrPhpBlock", "htmlElements", "htmlElement",
        "scriptTextPart", "phpBlock", "importStatement", "topStatement", "useDeclaration",
        "useDeclarationContentList", "useDeclarationContent", "namespaceDeclaration",
        "namespaceStatement", "functionDeclaration", "classDeclaration", "classEntryType",
        "interfaceList", "typeParameterListInBrackets", "typeParameterList", "typeParameterWithDefaultsList",
        "typeParameterDecl", "typeParameterWithDefaultDecl", "genericDynamicArgs",
        "attributes", "attributesGroup", "attribute", "attributeArgList", "attributeNamedArgList",
        "attributeNamedArg", "innerStatementList", "innerStatement", "statement",
        "emptyStatement", "blockStatement", "ifStatement", "elseIfStatement",
        "elseIfColonStatement", "elseStatement", "elseColonStatement", "whileStatement",
        "doWhileStatement", "forStatement", "forInit", "forUpdate", "switchStatement",
        "switchBlock", "breakStatement", "continueStatement", "returnStatement",
        "expressionStatement", "unsetStatement", "foreachStatement", "tryCatchFinally",
        "catchClause", "finallyStatement", "throwStatement", "gotoStatement",
        "declareStatement", "inlineHtmlStatement", "inlineHtml", "declareList",
        "formalParameterList", "formalParameter", "typeHint", "globalStatement",
        "globalVar", "echoStatement", "staticVariableStatement", "classStatement",
        "traitAdaptations", "traitAdaptationStatement", "traitPrecedence", "traitAlias",
        "traitMethodReference", "baseCtorCall", "methodBody", "propertyModifiers",
        "memberModifiers", "variableInitializer", "identifierInititalizer", "globalConstantDeclaration",
        "expressionList", "parentheses", "expression", "assignable", "arrayCreation",
        "lambdaFunctionExpr", "newExpr", "assignmentOperator", "yieldExpression",
        "arrayItemList", "arrayItem", "lambdaFunctionUseVars", "lambdaFunctionUseVar",
        "qualifiedStaticTypeRef", "typeRef", "anoymousClass", "indirectTypeRef",
        "qualifiedNamespaceName", "namespaceNameList", "namespaceNameTail", "qualifiedNamespaceNameList",
        "arguments", "actualArgument", "constantInititalizer", "constantArrayItemList",
        "constantArrayItem", "constant", "literalConstant", "numericConstant",
        "classConstant", "stringConstant", "string", "interpolatedStringPart",
        "chainList", "chain", "chainOrigin", "memberAccess", "functionCall", "functionCallName",
        "actualArguments", "chainBase", "keyedFieldName", "keyedSimpleFieldName",
        "keyedVariable", "squareCurlyExpression", "assignmentList", "assignmentListElement",
        "modifier", "identifier", "memberModifier", "magicConstant", "magicMethod",
        "primitiveType", "castOperation",
    ];
    PhpParser._LITERAL_NAMES = [
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
    PhpParser._SYMBOLIC_NAMES = [
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
    PhpParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(PhpParser._LITERAL_NAMES, PhpParser._SYMBOLIC_NAMES, []);
    PhpParser._serializedATNSegments = 4;
    PhpParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xEF\u06EA\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
        "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
        "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
        "\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
        "\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
        "#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
        "+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
        "4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
        "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
        "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
        "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
        "X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
        "`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
        "i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
        "r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
        "{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
        "\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
        "\x04\x87\t\x87\x04\x88\t\x88\x03\x02\x05\x02\u0112\n\x02\x03\x02\x07\x02" +
        "\u0115\n\x02\f\x02\x0E\x02\u0118\v\x02\x03\x02\x03\x02\x03\x03\x03\x03" +
        "\x03\x03\x05\x03\u011F\n\x03\x03\x04\x06\x04\u0122\n\x04\r\x04\x0E\x04" +
        "\u0123\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\u013C\n\x05\f\x05\x0E" +
        "\x05\u013F\v\x05\x03\x05\x05\x05\u0142\n\x05\x03\x06\x06\x06\u0145\n\x06" +
        "\r\x06\x0E\x06\u0146\x03\x07\x07\x07\u014A\n\x07\f\x07\x0E\x07\u014D\v" +
        "\x07\x03\x07\x06\x07\u0150\n\x07\r\x07\x0E\x07\u0151\x03\b\x03\b\x03\b" +
        "\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u015F\n\t\x03\n" +
        "\x03\n\x05\n\u0163\n\n\x03\n\x03\n\x03\n\x03\v\x05\v\u0169\n\v\x03\v\x03" +
        "\v\x03\v\x05\v\u016E\n\v\x03\v\x07\v\u0171\n\v\f\v\x0E\v\u0174\v\v\x03" +
        "\f\x03\f\x03\r\x03\r\x05\r\u017A\n\r\x03\r\x03\r\x07\r\u017E\n\r\f\r\x0E" +
        "\r\u0181\v\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0187\n\r\x03\x0E\x03\x0E\x03" +
        "\x0E\x03\x0E\x03\x0E\x05\x0E\u018E\n\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F" +
        "\u0193\n\x0F\x03\x0F\x03\x0F\x05\x0F\u0197\n\x0F\x03\x0F\x03\x0F\x03\x0F" +
        "\x03\x0F\x03\x0F\x05\x0F\u019E\n\x0F\x03\x0F\x05\x0F\u01A1\n\x0F\x03\x0F" +
        "\x03\x0F\x03\x10\x03\x10\x05\x10\u01A7\n\x10\x03\x10\x05\x10\u01AA\n\x10" +
        "\x03\x10\x05\x10\u01AD\n\x10\x03\x10\x03\x10\x03\x10\x05\x10\u01B2\n\x10" +
        "\x03\x10\x03\x10\x05\x10\u01B6\n\x10\x03\x10\x03\x10\x05\x10\u01BA\n\x10" +
        "\x03\x10\x03\x10\x03\x10\x05\x10\u01BF\n\x10\x03\x10\x03\x10\x05\x10\u01C3" +
        "\n\x10\x05\x10\u01C5\n\x10\x03\x10\x03\x10\x07\x10\u01C9\n\x10\f\x10\x0E" +
        "\x10\u01CC\v\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12" +
        "\x07\x12\u01D5\n\x12\f\x12\x0E\x12\u01D8\v\x12\x03\x13\x03\x13\x03\x13" +
        "\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
        "\x03\x13\x03\x13\x05\x13\u01E8\n\x13\x03\x14\x03\x14\x03\x14\x07\x14\u01ED" +
        "\n\x14\f\x14\x0E\x14\u01F0\v\x14\x03\x15\x03\x15\x03\x15\x07\x15\u01F5" +
        "\n\x15\f\x15\x0E\x15\u01F8\v\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17" +
        "\x03\x17\x03\x17\x03\x17\x05\x17\u0202\n\x17\x03\x18\x03\x18\x03\x18\x03" +
        "\x18\x07\x18\u0208\n\x18\f\x18\x0E\x18\u020B\v\x18\x03\x18\x03\x18\x03" +
        "\x19\x07\x19\u0210\n\x19\f\x19\x0E\x19\u0213\v\x19\x03\x1A\x03\x1A\x03" +
        "\x1A\x03\x1A\x05\x1A\u0219\n\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u021E" +
        "\n\x1A\f\x1A\x0E\x1A\u0221\v\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B" +
        "\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
        "\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0237\n\x1B\x03" +
        "\x1C\x03\x1C\x03\x1C\x07\x1C\u023C\n\x1C\f\x1C\x0E\x1C\u023F\v\x1C\x03" +
        "\x1D\x03\x1D\x03\x1D\x07\x1D\u0244\n\x1D\f\x1D\x0E\x1D\u0247\v\x1D\x03" +
        "\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x07\x1F\u024E\n\x1F\f\x1F\x0E\x1F" +
        "\u0251\v\x1F\x03 \x03 \x03 \x05 \u0256\n \x03!\x03!\x03!\x03!\x03!\x03" +
        "!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
        "!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x05!\u0273\n!\x03\"\x03\"\x03#\x03" +
        "#\x03#\x03#\x03$\x03$\x03$\x03$\x07$\u027F\n$\f$\x0E$\u0282\v$\x03$\x05" +
        "$\u0285\n$\x03$\x03$\x03$\x03$\x03$\x07$\u028C\n$\f$\x0E$\u028F\v$\x03" +
        "$\x05$\u0292\n$\x03$\x03$\x03$\x05$\u0297\n$\x03%\x03%\x03%\x03%\x03&" +
        "\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03)\x03)\x03" +
        ")\x03)\x03)\x03)\x03)\x03)\x05)\u02B1\n)\x03*\x03*\x03*\x03*\x03*\x03" +
        "*\x03+\x03+\x03+\x05+\u02BC\n+\x03+\x03+\x05+\u02C0\n+\x03+\x03+\x05+" +
        "\u02C4\n+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u02CD\n+\x03,\x03,\x03" +
        "-\x03-\x03.\x03.\x03.\x03.\x05.\u02D7\n.\x03.\x07.\u02DA\n.\f.\x0E.\u02DD" +
        "\v.\x03.\x03.\x03.\x05.\u02E2\n.\x03.\x07.\u02E5\n.\f.\x0E.\u02E8\v.\x03" +
        ".\x03.\x05.\u02EC\n.\x03/\x03/\x03/\x05/\u02F1\n/\x03/\x06/\u02F4\n/\r" +
        "/\x0E/\u02F5\x03/\x03/\x030\x030\x050\u02FC\n0\x030\x030\x031\x031\x05" +
        "1\u0302\n1\x031\x031\x032\x032\x052\u0308\n2\x032\x032\x033\x033\x033" +
        "\x034\x034\x034\x034\x034\x034\x035\x035\x035\x035\x035\x055\u031A\n5" +
        "\x035\x035\x035\x055\u031F\n5\x035\x055\u0322\n5\x035\x035\x035\x035\x03" +
        "5\x035\x035\x035\x055\u032C\n5\x035\x055\u032F\n5\x035\x035\x035\x035" +
        "\x035\x035\x035\x035\x035\x035\x035\x055\u033C\n5\x035\x035\x035\x035" +
        "\x035\x035\x055\u0344\n5\x036\x036\x036\x066\u0349\n6\r6\x0E6\u034A\x03" +
        "6\x056\u034E\n6\x036\x076\u0351\n6\f6\x0E6\u0354\v6\x036\x056\u0357\n" +
        "6\x037\x037\x037\x037\x037\x077\u035E\n7\f7\x0E7\u0361\v7\x037\x037\x03" +
        "7\x037\x038\x038\x038\x039\x039\x039\x039\x03:\x03:\x03:\x03:\x03;\x03" +
        ";\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x05;\u037C\n;\x03<\x06<\u037F" +
        "\n<\r<\x0E<\u0380\x03=\x03=\x05=\u0385\n=\x03>\x03>\x03>\x07>\u038A\n" +
        ">\f>\x0E>\u038D\v>\x03?\x05?\u0390\n?\x03?\x03?\x07?\u0394\n?\f?\x0E?" +
        "\u0397\v?\x03@\x03@\x05@\u039B\n@\x03@\x05@\u039E\n@\x03@\x05@\u03A1\n" +
        "@\x03@\x05@\u03A4\n@\x03@\x03@\x03A\x03A\x03A\x05A\u03AB\nA\x03B\x03B" +
        "\x03B\x03B\x07B\u03B1\nB\fB\x0EB\u03B4\vB\x03B\x03B\x03C\x03C\x03C\x03" +
        "C\x03C\x03C\x03C\x03C\x05C\u03C0\nC\x03D\x03D\x03D\x03D\x03E\x03E\x03" +
        "E\x03E\x07E\u03CA\nE\fE\x0EE\u03CD\vE\x03E\x03E\x03F\x03F\x03F\x05F\u03D4" +
        "\nF\x03F\x03F\x03F\x07F\u03D9\nF\fF\x0EF\u03DC\vF\x03F\x03F\x03F\x03F" +
        "\x05F\u03E2\nF\x03F\x03F\x05F\u03E6\nF\x03F\x03F\x03F\x07F\u03EB\nF\f" +
        "F\x0EF\u03EE\vF\x03F\x03F\x03F\x03F\x05F\u03F4\nF\x03F\x03F\x05F\u03F8" +
        "\nF\x03F\x03F\x05F\u03FC\nF\x03F\x03F\x03F\x03F\x05F\u0402\nF\x03F\x03" +
        "F\x03F\x03F\x03F\x03F\x05F\u040A\nF\x03G\x03G\x03G\x07G\u040F\nG\fG\x0E" +
        "G\u0412\vG\x03G\x05G\u0415\nG\x03H\x03H\x05H\u0419\nH\x03I\x03I\x03I\x03" +
        "I\x03I\x03I\x03I\x03J\x03J\x03J\x03J\x05J\u0426\nJ\x03J\x05J\u0429\nJ" +
        "\x03J\x03J\x03K\x03K\x03K\x05K\u0430\nK\x03K\x03K\x03L\x03L\x03L\x05L" +
        "\u0437\nL\x03M\x03M\x05M\u043B\nM\x03N\x03N\x05N\u043F\nN\x03O\x06O\u0442" +
        "\nO\rO\x0EO\u0443\x03P\x03P\x03P\x05P\u0449\nP\x03Q\x03Q\x03Q\x03Q\x03" +
        "R\x03R\x03R\x03R\x03R\x07R\u0454\nR\fR\x0ER\u0457\vR\x03R\x03R\x03S\x03" +
        "S\x03S\x07S\u045E\nS\fS\x0ES\u0461\vS\x03T\x03T\x03T\x05T\u0466\nT\x03" +
        "T\x03T\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03" +
        "U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03" +
        "U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03" +
        "U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03" +
        "U\x03U\x03U\x03U\x03U\x05U\u04A5\nU\x03U\x03U\x03U\x03U\x03U\x03U\x03" +
        "U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x05U\u04B5\nU\x05U\u04B7\nU\x03U" +
        "\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03" +
        "U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03" +
        "U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x05U\u04DD\nU\x03U\x03U\x03U\x03" +
        "U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03" +
        "U\x03U\x03U\x07U\u04F3\nU\fU\x0EU\u04F6\vU\x03V\x03V\x05V\u04FA\nV\x03" +
        "W\x03W\x03W\x05W\u04FF\nW\x03W\x03W\x03W\x05W\u0504\nW\x03W\x05W\u0507" +
        "\nW\x03W\x03W\x03W\x03W\x05W\u050D\nW\x03X\x05X\u0510\nX\x03X\x03X\x05" +
        "X\u0514\nX\x03X\x03X\x03X\x03X\x05X\u051A\nX\x03X\x03X\x05X\u051E\nX\x03" +
        "X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x05X\u0529\nX\x03Y\x03Y\x03" +
        "Y\x05Y\u052E\nY\x03Z\x03Z\x03[\x03[\x03[\x03[\x05[\u0536\n[\x03[\x03[" +
        "\x05[\u053A\n[\x03\\\x03\\\x03\\\x07\\\u053F\n\\\f\\\x0E\\\u0542\v\\\x03" +
        "\\\x05\\\u0545\n\\\x03]\x03]\x03]\x05]\u054A\n]\x03]\x03]\x03]\x05]\u054F" +
        "\n]\x03]\x03]\x05]\u0553\n]\x03^\x03^\x03^\x03^\x03^\x07^\u055A\n^\f^" +
        "\x0E^\u055D\v^\x03^\x03^\x03_\x05_\u0562\n_\x03_\x03_\x03`\x03`\x05`\u0568" +
        "\n`\x03`\x05`\u056B\n`\x03a\x03a\x05a\u056F\na\x03a\x05a\u0572\na\x03" +
        "a\x03a\x03a\x05a\u0577\na\x03b\x03b\x05b\u057B\nb\x03b\x05b\u057E\nb\x03" +
        "b\x05b\u0581\nb\x03b\x03b\x05b\u0585\nb\x03b\x03b\x05b\u0589\nb\x03b\x03" +
        "b\x05b\u058D\nb\x03b\x03b\x03b\x05b\u0592\nb\x03b\x03b\x05b\u0596\nb\x05" +
        "b\u0598\nb\x03b\x03b\x07b\u059C\nb\fb\x0Eb\u059F\vb\x03b\x03b\x03c\x03" +
        "c\x03c\x07c\u05A6\nc\fc\x0Ec\u05A9\vc\x03d\x05d\u05AC\nd\x03d\x05d\u05AF" +
        "\nd\x03d\x03d\x03e\x03e\x03e\x03e\x07e\u05B7\ne\fe\x0Ee\u05BA\ve\x03e" +
        "\x03e\x05e\u05BE\ne\x05e\u05C0\ne\x03f\x03f\x03f\x05f\u05C5\nf\x03f\x03" +
        "f\x03f\x03f\x07f\u05CB\nf\ff\x0Ef\u05CE\vf\x03f\x05f\u05D1\nf\x03f\x03" +
        "f\x05f\u05D5\nf\x03g\x03g\x03g\x07g\u05DA\ng\fg\x0Eg\u05DD\vg\x03h\x03" +
        "h\x03h\x03h\x07h\u05E3\nh\fh\x0Eh\u05E6\vh\x03h\x05h\u05E9\nh\x03h\x05" +
        "h\u05EC\nh\x03h\x03h\x03i\x05i\u05F1\ni\x03i\x03i\x03i\x05i\u05F6\ni\x03" +
        "j\x03j\x03j\x03j\x03j\x03j\x05j\u05FE\nj\x05j\u0600\nj\x03j\x03j\x03j" +
        "\x03j\x05j\u0606\nj\x05j\u0608\nj\x03j\x03j\x03j\x05j\u060D\nj\x03k\x03" +
        "k\x03k\x07k\u0612\nk\fk\x0Ek\u0615\vk\x03l\x03l\x03l\x05l\u061A\nl\x03" +
        "m\x03m\x03m\x03m\x03m\x05m\u0621\nm\x03n\x03n\x03n\x03n\x05n\u0627\nn" +
        "\x03o\x03o\x03p\x03p\x03p\x03p\x03p\x03p\x05p\u0631\np\x03p\x03p\x03p" +
        "\x05p\u0636\np\x03p\x03p\x03p\x05p\u063B\np\x05p\u063D\np\x03q\x03q\x03" +
        "r\x03r\x06r\u0643\nr\rr\x0Er\u0644\x03r\x03r\x06r\u0649\nr\rr\x0Er\u064A" +
        "\x03r\x03r\x03r\x07r\u0650\nr\fr\x0Er\u0653\vr\x03r\x05r\u0656\nr\x03" +
        "s\x03s\x03s\x05s\u065B\ns\x03t\x03t\x03t\x07t\u0660\nt\ft\x0Et\u0663\v" +
        "t\x03u\x03u\x07u\u0667\nu\fu\x0Eu\u066A\vu\x03v\x03v\x03v\x03v\x03v\x03" +
        "v\x05v\u0672\nv\x03w\x03w\x03w\x05w\u0677\nw\x03x\x03x\x03x\x03y\x03y" +
        "\x03y\x03y\x05y\u0680\ny\x03z\x05z\u0683\nz\x03z\x03z\x07z\u0687\nz\f" +
        "z\x0Ez\u068A\vz\x03{\x03{\x03{\x05{\u068F\n{\x03{\x03{\x03{\x03{\x05{" +
        "\u0695\n{\x03|\x03|\x05|\u0699\n|\x03}\x03}\x03}\x03}\x03}\x05}\u06A0" +
        "\n}\x03}\x07}\u06A3\n}\f}\x0E}\u06A6\v}\x03~\x07~\u06A9\n~\f~\x0E~\u06AC" +
        "\v~\x03~\x03~\x03~\x03~\x03~\x03~\x05~\u06B4\n~\x03~\x07~\u06B7\n~\f~" +
        "\x0E~\u06BA\v~\x03\x7F\x03\x7F\x05\x7F\u06BE\n\x7F\x03\x7F\x03\x7F\x03" +
        "\x7F\x03\x7F\x03\x7F\x05\x7F\u06C5\n\x7F\x03\x80\x05\x80\u06C8\n\x80\x03" +
        "\x80\x03\x80\x05\x80\u06CC\n\x80\x07\x80\u06CE\n\x80\f\x80\x0E\x80\u06D1" +
        "\v\x80\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x05\x81" +
        "\u06DA\n\x81\x03\x82\x03\x82\x03\x83\x03\x83\x03\x84\x03\x84\x03\x85\x03" +
        "\x85\x03\x86\x03\x86\x03\x87\x03\x87\x03\x88\x03\x88\x03\x88\x02\x02\x03" +
        "\xA8\x89\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
        "\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
        "\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
        "B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
        "^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
        "z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
        "\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02" +
        "\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02" +
        "\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02" +
        "\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02" +
        "\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02" +
        "\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02" +
        "\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108" +
        "\x02\u010A\x02\u010C\x02\u010E\x02\x02\x1A\x04\x0299RR\x04\x0277xx\x03" +
        "\x02\xD6\xD7\x03\x02\xCA\xCB\x04\x02\xC3\xC3\xC5\xC6\x03\x02\xA0\xA1\x03" +
        "\x02XY\x03\x02pq\x03\x02\xC7\xC9\x04\x02\xC5\xC6\xCD\xCD\x03\x02\xB9\xBA" +
        "\x04\x02\xA6\xA7\xBF\xC0\x03\x02\xA2\xA5\x06\x02\xA8\xAA\xAC\xB4\xB8\xB8" +
        "\xD8\xD8\x03\x02\xC5\xC6\x04\x02\xDD\xDE\xE0\xE1\x04\x0277jj\x04\x02-" +
        "-MM\x05\x02-\x82\x84\x9B\xDC\xDC\x06\x02--MMmott\x03\x02\x94\x9B\x03\x02" +
        "\x84\x93\t\x02..11??^_iirruu\v\x02..01>?OO\\_iirruu{}\x02\u07AF\x02\u0111" +
        "\x03\x02\x02\x02\x04\u011E\x03\x02\x02\x02\x06\u0121\x03\x02\x02\x02\b" +
        "\u0141\x03\x02\x02\x02\n\u0144\x03\x02\x02\x02\f\u014B\x03\x02\x02\x02" +
        "\x0E\u0153\x03\x02\x02\x02\x10\u015E\x03\x02\x02\x02\x12\u0160\x03\x02" +
        "\x02\x02\x14\u0168\x03\x02\x02\x02\x16\u0175\x03\x02\x02\x02\x18\u0177" +
        "\x03\x02\x02\x02\x1A\u018D\x03\x02\x02\x02\x1C\u018F\x03\x02\x02\x02\x1E" +
        "\u01A4\x03\x02\x02\x02 \u01CF\x03\x02\x02\x02\"\u01D1\x03\x02\x02\x02" +
        "$\u01E7\x03\x02\x02\x02&\u01E9\x03\x02\x02\x02(\u01F1\x03\x02\x02\x02" +
        "*\u01F9\x03\x02\x02\x02,\u01FC\x03\x02\x02\x02.\u0203\x03\x02\x02\x02" +
        "0\u0211\x03\x02\x02\x022\u0214\x03\x02\x02\x024\u0236\x03\x02\x02\x02" +
        "6\u0238\x03\x02\x02\x028\u0240\x03\x02\x02\x02:\u0248\x03\x02\x02\x02" +
        "<\u024F\x03\x02\x02\x02>\u0255\x03\x02\x02\x02@\u0272\x03\x02\x02\x02" +
        "B\u0274\x03\x02\x02\x02D\u0276\x03\x02\x02\x02F\u0296\x03\x02\x02\x02" +
        "H\u0298\x03\x02\x02\x02J\u029C\x03\x02\x02\x02L\u02A1\x03\x02\x02\x02" +
        "N\u02A4\x03\x02\x02\x02P\u02A8\x03\x02\x02\x02R\u02B2\x03\x02\x02\x02" +
        "T\u02B8\x03\x02\x02\x02V\u02CE\x03\x02\x02\x02X\u02D0\x03\x02\x02\x02" +
        "Z\u02D2\x03\x02\x02\x02\\\u02F3\x03\x02\x02\x02^\u02F9\x03\x02\x02\x02" +
        "`\u02FF\x03\x02\x02\x02b\u0305\x03\x02\x02\x02d\u030B\x03\x02\x02\x02" +
        "f\u030E\x03\x02\x02\x02h\u0314\x03\x02\x02\x02j\u0345\x03\x02\x02\x02" +
        "l\u0358\x03\x02\x02\x02n\u0366\x03\x02\x02\x02p\u0369\x03\x02\x02\x02" +
        "r\u036D\x03\x02\x02\x02t\u0371\x03\x02\x02\x02v\u037E\x03\x02\x02\x02" +
        "x\u0384\x03\x02\x02\x02z\u0386\x03\x02\x02\x02|\u038F\x03\x02\x02\x02" +
        "~\u0398\x03\x02\x02\x02\x80\u03AA\x03\x02\x02\x02\x82\u03AC\x03\x02\x02" +
        "\x02\x84\u03BF\x03\x02\x02\x02\x86\u03C1\x03\x02\x02\x02\x88\u03C5\x03" +
        "\x02\x02\x02\x8A\u0409\x03\x02\x02\x02\x8C\u0414\x03\x02\x02\x02\x8E\u0418" +
        "\x03\x02\x02\x02\x90\u041A\x03\x02\x02\x02\x92\u0421\x03\x02\x02\x02\x94" +
        "\u042F\x03\x02\x02\x02\x96\u0433\x03\x02\x02\x02\x98\u043A\x03\x02\x02" +
        "\x02\x9A\u043E\x03\x02\x02\x02\x9C\u0441\x03\x02\x02\x02\x9E\u0445\x03" +
        "\x02\x02\x02\xA0\u044A\x03\x02\x02\x02\xA2\u044E\x03\x02\x02\x02\xA4\u045A" +
        "\x03\x02\x02\x02\xA6\u0462\x03\x02\x02\x02\xA8\u04B6\x03\x02\x02\x02\xAA" +
        "\u04F9\x03\x02\x02\x02\xAC\u0506\x03\x02\x02\x02\xAE\u0528\x03\x02\x02" +
        "\x02\xB0\u052A\x03\x02\x02\x02\xB2\u052F\x03\x02\x02\x02\xB4\u0531\x03" +
        "\x02\x02\x02\xB6\u053B\x03\x02\x02\x02\xB8\u0552\x03\x02\x02\x02\xBA\u0554" +
        "\x03\x02\x02\x02\xBC\u0561\x03\x02\x02\x02\xBE\u056A\x03\x02\x02\x02\xC0" +
        "\u0576\x03\x02\x02\x02\xC2\u0578\x03\x02\x02\x02\xC4\u05A2\x03\x02\x02" +
        "\x02\xC6\u05AB\x03\x02\x02\x02\xC8\u05BF\x03\x02\x02\x02\xCA\u05D4\x03" +
        "\x02\x02\x02\xCC\u05D6\x03\x02\x02\x02\xCE\u05DE\x03\x02\x02\x02\xD0\u05F5" +
        "\x03\x02\x02\x02\xD2\u060C\x03\x02\x02\x02\xD4\u060E\x03\x02\x02\x02\xD6" +
        "\u0616\x03\x02\x02\x02\xD8\u0620\x03\x02\x02\x02\xDA\u0626\x03\x02\x02" +
        "\x02\xDC\u0628\x03\x02\x02\x02\xDE\u063C\x03\x02\x02\x02\xE0\u063E\x03" +
        "\x02\x02\x02\xE2\u0655\x03\x02\x02\x02\xE4\u065A\x03\x02\x02\x02\xE6\u065C" +
        "\x03\x02\x02\x02\xE8\u0664\x03\x02\x02\x02\xEA\u0671\x03\x02\x02\x02\xEC" +
        "\u0673\x03\x02\x02\x02\xEE\u0678\x03\x02\x02\x02\xF0\u067F\x03\x02\x02" +
        "\x02\xF2\u0682\x03\x02\x02\x02\xF4\u0694\x03\x02\x02\x02\xF6\u0698\x03" +
        "\x02\x02\x02\xF8\u069F\x03\x02\x02\x02\xFA\u06AA\x03\x02";
    PhpParser._serializedATNSegment1 = "\x02\x02\xFC\u06C4\x03\x02\x02\x02\xFE\u06C7\x03\x02\x02\x02\u0100\u06D9" +
        "\x03\x02\x02\x02\u0102\u06DB\x03\x02\x02\x02\u0104\u06DD\x03\x02\x02\x02" +
        "\u0106\u06DF\x03\x02\x02\x02\u0108\u06E1\x03\x02\x02\x02\u010A\u06E3\x03" +
        "\x02\x02\x02\u010C\u06E5\x03\x02\x02\x02\u010E\u06E7\x03\x02\x02\x02\u0110" +
        "\u0112\x07\f\x02\x02\u0111\u0110\x03\x02\x02\x02\u0111\u0112\x03\x02\x02" +
        "\x02\u0112\u0116\x03\x02\x02\x02\u0113\u0115\x05\x04\x03\x02\u0114\u0113" +
        "\x03\x02\x02\x02\u0115\u0118\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02" +
        "\u0116\u0117\x03\x02\x02\x02\u0117\u0119\x03\x02\x02\x02\u0118\u0116\x03" +
        "\x02\x02\x02\u0119\u011A\x07\x02\x02\x03\u011A\x03\x03\x02\x02\x02\u011B" +
        "\u011F\x05\x06\x04\x02\u011C\u011F\x05\f\x07\x02\u011D\u011F\x05\n\x06" +
        "\x02\u011E\u011B\x03\x02\x02\x02\u011E\u011C\x03\x02\x02\x02\u011E\u011D" +
        "\x03\x02\x02\x02\u011F\x05\x03\x02\x02\x02\u0120\u0122\x05\b\x05\x02\u0121" +
        "\u0120\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0121\x03\x02" +
        "\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124\x07\x03\x02\x02\x02\u0125\u0142" +
        "\x07\n\x02\x02\u0126\u0142\x07\x07\x02\x02\u0127\u0142\x07\x11\x02\x02" +
        "\u0128\u0142\x07\b\x02\x02\u0129\u0142\x07\v\x02\x02\u012A\u0142\x07\x1A" +
        "\x02\x02\u012B\u0142\x07\x12\x02\x02\u012C\u0142\x07\x13\x02\x02\u012D" +
        "\u0142\x07\x04\x02\x02\u012E\u0142\x07\x14\x02\x02\u012F\u0142\x07\x15" +
        "\x02\x02\u0130\u0142\x07\x1D\x02\x02\u0131\u0142\x07\x16\x02\x02\u0132" +
        "\u0142\x07!\x02\x02\u0133\u0142\x07\x17\x02\x02\u0134\u0142\x07\x18\x02" +
        "\x02\u0135\u0142\x07\x1E\x02\x02\u0136\u0142\x07\"\x02\x02\u0137\u0142" +
        "\x07\'\x02\x02\u0138\u0142\x07%\x02\x02\u0139\u013D\x07\x05\x02\x02\u013A" +
        "\u013C\x07\x0E\x02\x02\u013B\u013A\x03\x02\x02\x02\u013C\u013F\x03\x02" +
        "\x02\x02\u013D\u013B\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E" +
        "\u0140\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u0140\u0142\x07\x0F" +
        "\x02\x02\u0141\u0125\x03\x02\x02\x02\u0141\u0126\x03\x02\x02\x02\u0141" +
        "\u0127\x03\x02\x02\x02\u0141\u0128\x03\x02\x02\x02\u0141\u0129\x03\x02" +
        "\x02\x02\u0141\u012A\x03\x02\x02\x02\u0141\u012B\x03\x02\x02\x02\u0141" +
        "\u012C\x03\x02\x02\x02\u0141\u012D\x03\x02\x02\x02\u0141\u012E\x03\x02" +
        "\x02\x02\u0141\u012F\x03\x02\x02\x02\u0141\u0130\x03\x02\x02\x02\u0141" +
        "\u0131\x03\x02\x02\x02\u0141\u0132\x03\x02\x02\x02\u0141\u0133\x03\x02" +
        "\x02\x02\u0141\u0134\x03\x02\x02\x02\u0141\u0135\x03\x02\x02\x02\u0141" +
        "\u0136\x03\x02\x02\x02\u0141\u0137\x03\x02\x02\x02\u0141\u0138\x03\x02" +
        "\x02\x02\u0141\u0139\x03\x02\x02\x02\u0142\t\x03\x02\x02\x02\u0143\u0145" +
        "\x07$\x02\x02\u0144\u0143\x03\x02\x02\x02\u0145\u0146\x03\x02\x02\x02" +
        "\u0146\u0144\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\v\x03\x02" +
        "\x02\x02\u0148\u014A\x05\x0E\b\x02\u0149\u0148\x03\x02\x02\x02\u014A\u014D" +
        "\x03\x02\x02\x02\u014B\u0149\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02" +
        "\u014C\u014F\x03\x02\x02\x02\u014D\u014B\x03\x02\x02\x02\u014E\u0150\x05" +
        "\x10\t\x02\u014F\u014E\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151" +
        "\u014F\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02\u0152\r\x03\x02\x02" +
        "\x02\u0153\u0154\x07W\x02\x02\u0154\u0155\x07f\x02\x02\u0155\u0156\x05" +
        "\xC8e\x02\u0156\u0157\x07\xD7\x02\x02\u0157\x0F\x03\x02\x02\x02\u0158" +
        "\u015F\x05@!\x02\u0159\u015F\x05\x12\n\x02\u015A\u015F\x05\x18\r\x02\u015B" +
        "\u015F\x05\x1C\x0F\x02\u015C\u015F\x05\x1E\x10\x02\u015D\u015F\x05\xA2" +
        "R\x02\u015E\u0158\x03\x02\x02\x02\u015E\u0159\x03\x02\x02\x02\u015E\u015A" +
        "\x03\x02\x02\x02\u015E\u015B\x03\x02\x02\x02\u015E\u015C\x03\x02\x02\x02" +
        "\u015E\u015D\x03\x02\x02\x02\u015F\x11\x03\x02\x02\x02\u0160\u0162\x07" +
        "~\x02\x02\u0161\u0163\t\x02\x02\x02\u0162\u0161\x03\x02\x02\x02\u0162" +
        "\u0163\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0165\x05\x14" +
        "\v\x02\u0165\u0166\x07\xD7\x02\x02\u0166\x13\x03\x02\x02\x02\u0167\u0169" +
        "\x07\xBD\x02\x02\u0168\u0167\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02" +
        "\u0169\u016A\x03\x02\x02\x02\u016A\u0172\x05\x16\f\x02\u016B\u016D\x07" +
        "\xD5\x02\x02\u016C\u016E\x07\xBD\x02\x02\u016D\u016C\x03\x02\x02\x02\u016D" +
        "\u016E\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u0171\x05\x16" +
        "\f\x02\u0170\u016B\x03\x02\x02\x02\u0171\u0174\x03\x02\x02\x02\u0172\u0170" +
        "\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173\x15\x03\x02\x02\x02" +
        "\u0174\u0172\x03\x02\x02\x02\u0175\u0176\x05\xC8e\x02\u0176\x17\x03\x02" +
        "\x02\x02\u0177\u0186\x07f\x02\x02\u0178\u017A\x05\xC8e\x02\u0179\u0178" +
        "\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02" +
        "\u017B\u017F\x07\xD3\x02\x02\u017C\u017E\x05\x1A\x0E\x02\u017D\u017C\x03" +
        "\x02\x02\x02\u017E\u0181\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02\u017F" +
        "\u0180\x03\x02\x02\x02\u0180\u0182\x03\x02\x02\x02\u0181\u017F\x03\x02" +
        "\x02\x02\u0182\u0187\x07\xD4\x02\x02\u0183\u0184\x05\xC8e\x02\u0184\u0185" +
        "\x07\xD7\x02\x02\u0185\u0187\x03\x02\x02\x02\u0186\u0179\x03\x02\x02\x02" +
        "\u0186\u0183\x03\x02\x02\x02\u0187\x19\x03\x02\x02\x02\u0188\u018E\x05" +
        "@!\x02\u0189\u018E\x05\x12\n\x02\u018A\u018E\x05\x1C\x0F\x02\u018B\u018E" +
        "\x05\x1E\x10\x02\u018C\u018E\x05\xA2R\x02\u018D\u0188\x03\x02\x02\x02" +
        "\u018D\u0189\x03\x02\x02\x02\u018D\u018A\x03\x02\x02\x02\u018D\u018B\x03" +
        "\x02\x02\x02\u018D\u018C\x03\x02\x02\x02\u018E\x1B\x03\x02\x02\x02\u018F" +
        "\u0190\x050\x19\x02\u0190\u0192\x07R\x02\x02\u0191\u0193\x07\xC1\x02\x02" +
        "\u0192\u0191\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193\u0194\x03" +
        "\x02\x02\x02\u0194\u0196\x05\u0104\x83\x02\u0195\u0197\x05$\x13\x02\u0196" +
        "\u0195\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u0198\x03\x02" +
        "\x02\x02\u0198\u0199\x07\xCF\x02\x02\u0199\u019A\x05|?\x02\u019A\u01A0" +
        "\x07\xD0\x02\x02\u019B\u019D\x07\xD6\x02\x02\u019C\u019E\x07\xCE\x02\x02" +
        "\u019D\u019C\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E\u019F\x03" +
        "\x02\x02\x02\u019F\u01A1\x05\x80A\x02\u01A0\u019B\x03\x02\x02\x02\u01A0" +
        "\u01A1\x03\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A3\x05D#\x02" +
        "\u01A3\x1D\x03\x02\x02\x02\u01A4\u01A6\x050\x19\x02\u01A5\u01A7\x07m\x02" +
        "\x02\u01A6\u01A5\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01A9" +
        "\x03\x02\x02\x02\u01A8\u01AA\x05\u0102\x82\x02\u01A9\u01A8\x03\x02\x02" +
        "\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA\u01AC\x03\x02\x02\x02\u01AB\u01AD" +
        "\x07k\x02\x02\u01AC\u01AB\x03\x02\x02\x02\u01AC\u01AD\x03\x02\x02\x02" +
        "\u01AD\u01C4\x03\x02\x02\x02\u01AE\u01AF\x05 \x11\x02\u01AF\u01B1\x05" +
        "\u0104\x83\x02\u01B0\u01B2\x05$\x13\x02\u01B1\u01B0\x03\x02\x02\x02\u01B1" +
        "\u01B2\x03\x02\x02\x02\u01B2\u01B5\x03\x02\x02\x02\u01B3\u01B4\x07L\x02" +
        "\x02\u01B4\u01B6\x05\xBE`\x02\u01B5\u01B3\x03\x02\x02\x02\u01B5\u01B6" +
        "\x03\x02\x02\x02\u01B6\u01B9\x03\x02\x02\x02\u01B7\u01B8\x07V\x02\x02" +
        "\u01B8\u01BA\x05\"\x12\x02\u01B9\u01B7\x03\x02\x02\x02\u01B9\u01BA\x03" +
        "\x02\x02\x02\u01BA\u01C5\x03\x02\x02\x02\u01BB\u01BC\x07`\x02\x02\u01BC" +
        "\u01BE\x05\u0104\x83\x02\u01BD\u01BF\x05$\x13\x02\u01BE\u01BD\x03\x02" +
        "\x02\x02\u01BE\u01BF\x03\x02\x02\x02\u01BF\u01C2\x03\x02\x02\x02\u01C0" +
        "\u01C1\x07L\x02\x02\u01C1\u01C3\x05\"\x12\x02\u01C2\u01C0\x03\x02\x02" +
        "\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C5\x03\x02\x02\x02\u01C4\u01AE" +
        "\x03\x02\x02\x02\u01C4\u01BB\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02" +
        "\u01C6\u01CA\x07\xD3\x02\x02\u01C7\u01C9\x05\x8AF\x02\u01C8\u01C7\x03" +
        "\x02\x02\x02\u01C9\u01CC\x03\x02\x02\x02\u01CA\u01C8\x03\x02\x02\x02\u01CA" +
        "\u01CB\x03\x02\x02\x02\u01CB\u01CD\x03\x02\x02\x02\u01CC\u01CA\x03\x02" +
        "\x02\x02\u01CD\u01CE\x07\xD4\x02\x02\u01CE\x1F\x03\x02\x02\x02\u01CF\u01D0" +
        "\t\x03\x02\x02\u01D0!\x03\x02\x02\x02\u01D1\u01D6\x05\xBE`\x02\u01D2\u01D3" +
        "\x07\xD5\x02\x02\u01D3\u01D5\x05\xBE`\x02\u01D4\u01D2\x03\x02\x02\x02" +
        "\u01D5\u01D8\x03\x02\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D6\u01D7\x03" +
        "\x02\x02\x02\u01D7#\x03\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D9" +
        "\u01DA\x07\x9D\x02\x02\u01DA\u01DB\x05&\x14\x02\u01DB\u01DC\x07\x9E\x02" +
        "\x02\u01DC\u01E8\x03\x02\x02\x02\u01DD\u01DE\x07\x9D\x02\x02\u01DE\u01DF" +
        "\x05(\x15\x02\u01DF\u01E0\x07\x9E\x02\x02\u01E0\u01E8\x03\x02\x02\x02" +
        "\u01E1\u01E2\x07\x9D\x02\x02\u01E2\u01E3\x05&\x14\x02\u01E3\u01E4\x07" +
        "\xD5\x02\x02\u01E4\u01E5\x05(\x15\x02\u01E5\u01E6\x07\x9E\x02\x02\u01E6" +
        "\u01E8\x03\x02\x02\x02\u01E7\u01D9\x03\x02\x02\x02\u01E7\u01DD\x03\x02" +
        "\x02\x02\u01E7\u01E1\x03\x02\x02\x02\u01E8%\x03\x02\x02\x02\u01E9\u01EE" +
        "\x05*\x16\x02\u01EA\u01EB\x07\xD5\x02\x02\u01EB\u01ED\x05*\x16\x02\u01EC" +
        "\u01EA\x03\x02\x02\x02\u01ED\u01F0\x03\x02\x02\x02\u01EE\u01EC\x03\x02" +
        "\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\'\x03\x02\x02\x02\u01F0\u01EE" +
        "\x03\x02\x02\x02\u01F1\u01F6\x05,\x17\x02\u01F2\u01F3\x07\xD5\x02\x02" +
        "\u01F3\u01F5\x05,\x17\x02\u01F4\u01F2\x03\x02\x02\x02\u01F5\u01F8\x03" +
        "\x02\x02\x02\u01F6\u01F4\x03\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7" +
        ")\x03\x02\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F9\u01FA\x050\x19\x02" +
        "\u01FA\u01FB\x05\u0104\x83\x02\u01FB+\x03\x02\x02\x02\u01FC\u01FD\x05" +
        "0\x19\x02\u01FD\u01FE\x05\u0104\x83\x02\u01FE\u0201\x07\xD8\x02\x02\u01FF" +
        "\u0202\x05\xBE`\x02\u0200\u0202\x05\u010C\x87\x02\u0201\u01FF\x03\x02" +
        "\x02\x02\u0201\u0200\x03\x02\x02\x02\u0202-\x03\x02\x02\x02\u0203\u0204" +
        "\x07\x9D\x02\x02\u0204\u0209\x05\xC0a\x02\u0205\u0206\x07\xD5\x02\x02" +
        "\u0206\u0208\x05\xC0a\x02\u0207\u0205\x03\x02\x02\x02\u0208\u020B\x03" +
        "\x02\x02\x02\u0209\u0207\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A" +
        "\u020C\x03\x02\x02\x02\u020B\u0209\x03\x02\x02\x02\u020C\u020D\x07\x9E" +
        "\x02\x02\u020D/\x03\x02\x02\x02\u020E\u0210\x052\x1A\x02\u020F\u020E\x03" +
        "\x02\x02\x02\u0210\u0213\x03\x02\x02\x02\u0211\u020F\x03\x02\x02\x02\u0211" +
        "\u0212\x03\x02\x02\x02\u02121\x03\x02\x02\x02\u0213\u0211\x03\x02\x02" +
        "\x02\u0214\u0218\x07\xD1\x02\x02\u0215\u0216\x05\u0104\x83\x02\u0216\u0217" +
        "\x07\xD6\x02\x02\u0217\u0219\x03\x02\x02\x02\u0218\u0215\x03\x02\x02\x02" +
        "\u0218\u0219\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A\u021F\x05" +
        "4\x1B\x02\u021B\u021C\x07\xD5\x02\x02\u021C\u021E\x054\x1B\x02\u021D\u021B" +
        "\x03\x02\x02\x02\u021E\u0221\x03\x02\x02\x02\u021F\u021D\x03\x02\x02\x02" +
        "\u021F\u0220\x03\x02\x02\x02\u0220\u0222\x03\x02\x02\x02\u0221\u021F\x03" +
        "\x02\x02\x02\u0222\u0223\x07\xD2\x02\x02\u02233\x03\x02\x02\x02\u0224" +
        "\u0237\x05\xC6d\x02\u0225\u0226\x05\xC6d\x02\u0226\u0227\x07\xCF\x02\x02" +
        "\u0227\u0228\x056\x1C\x02\u0228\u0229\x07\xD0\x02\x02\u0229\u0237\x03" +
        "\x02\x02\x02\u022A\u022B\x05\xC6d\x02\u022B\u022C\x07\xCF\x02\x02\u022C" +
        "\u022D\x058\x1D\x02\u022D\u022E\x07\xD0\x02\x02\u022E\u0237\x03\x02\x02" +
        "\x02\u022F\u0230\x05\xC6d\x02\u0230\u0231\x07\xCF\x02\x02\u0231\u0232" +
        "\x056\x1C\x02\u0232\u0233\x07\xD5\x02\x02\u0233\u0234\x058\x1D\x02\u0234" +
        "\u0235\x07\xD0\x02\x02\u0235\u0237\x03\x02\x02\x02\u0236\u0224\x03\x02" +
        "\x02\x02\u0236\u0225\x03\x02\x02\x02\u0236\u022A\x03\x02\x02\x02\u0236" +
        "\u022F\x03\x02\x02\x02\u02375\x03\x02\x02\x02\u0238\u023D\x05\xA8U\x02" +
        "\u0239\u023A\x07\xD5\x02\x02\u023A\u023C\x05\xA8U\x02\u023B\u0239\x03" +
        "\x02\x02\x02\u023C\u023F\x03\x02\x02\x02\u023D\u023B\x03\x02\x02\x02\u023D" +
        "\u023E\x03\x02\x02\x02\u023E7\x03\x02\x02\x02\u023F\u023D\x03\x02\x02" +
        "\x02\u0240\u0245\x05:\x1E\x02\u0241\u0242\x07\xD5\x02\x02\u0242\u0244" +
        "\x05:\x1E\x02\u0243\u0241\x03\x02\x02\x02\u0244\u0247\x03\x02\x02\x02" +
        "\u0245\u0243\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u02469\x03\x02" +
        "\x02\x02\u0247\u0245\x03\x02\x02\x02\u0248\u0249\x07\xDB\x02\x02\u0249" +
        "\u024A\x07\x9F\x02\x02\u024A\u024B\x05\xA8U\x02\u024B;\x03\x02\x02\x02" +
        "\u024C\u024E\x05> \x02\u024D\u024C\x03\x02\x02\x02\u024E\u0251\x03\x02" +
        "\x02\x02\u024F\u024D\x03\x02\x02\x02\u024F\u0250\x03\x02\x02\x02\u0250" +
        "=\x03\x02\x02\x02\u0251\u024F\x03\x02\x02\x02\u0252\u0256\x05@!\x02\u0253" +
        "\u0256\x05\x1C\x0F\x02\u0254\u0256\x05\x1E\x10\x02\u0255\u0252\x03\x02" +
        "\x02\x02\u0255\u0253\x03\x02\x02\x02\u0255\u0254\x03\x02\x02\x02\u0256" +
        "?\x03\x02\x02\x02\u0257\u0258\x05\u0104\x83\x02\u0258\u0259\x07\xD6\x02" +
        "\x02\u0259\u0273\x03\x02\x02\x02\u025A\u0273\x05D#\x02\u025B\u0273\x05" +
        "F$\x02\u025C\u0273\x05P)\x02\u025D\u0273\x05R*\x02\u025E\u0273\x05T+\x02" +
        "\u025F\u0273\x05Z.\x02\u0260\u0273\x05^0\x02\u0261\u0273\x05`1\x02\u0262" +
        "\u0273\x05b2\x02\u0263\u0264\x05\xB4[\x02\u0264\u0265\x07\xD7\x02\x02" +
        "\u0265\u0273\x03\x02\x02\x02\u0266\u0273\x05\x82B\x02\u0267\u0273\x05" +
        "\x88E\x02\u0268\u0273\x05\x86D\x02\u0269\u0273\x05d3\x02\u026A\u0273\x05" +
        "f4\x02\u026B\u0273\x05h5\x02\u026C\u0273\x05j6\x02\u026D\u0273\x05p9\x02" +
        "\u026E\u0273\x05r:\x02\u026F\u0273\x05t;\x02\u0270\u0273\x05B\"\x02\u0271" +
        "\u0273\x05v<\x02\u0272\u0257\x03\x02\x02\x02\u0272\u025A\x03\x02\x02\x02" +
        "\u0272\u025B\x03\x02\x02\x02\u0272\u025C\x03\x02\x02\x02\u0272\u025D\x03" +
        "\x02\x02\x02\u0272\u025E\x03\x02\x02\x02\u0272\u025F\x03\x02\x02\x02\u0272" +
        "\u0260\x03\x02\x02\x02\u0272\u0261\x03\x02\x02\x02\u0272\u0262\x03\x02" +
        "\x02\x02\u0272\u0263\x03\x02\x02\x02\u0272\u0266\x03\x02\x02\x02\u0272" +
        "\u0267\x03\x02\x02\x02\u0272\u0268\x03\x02\x02\x02\u0272\u0269\x03\x02" +
        "\x02\x02\u0272\u026A\x03\x02\x02\x02\u0272\u026B\x03\x02\x02\x02\u0272" +
        "\u026C\x03\x02\x02\x02\u0272\u026D\x03\x02\x02\x02\u0272\u026E\x03\x02" +
        "\x02\x02\u0272\u026F\x03\x02\x02\x02\u0272\u0270\x03\x02\x02\x02\u0272" +
        "\u0271\x03\x02\x02\x02\u0273A\x03\x02\x02\x02\u0274\u0275\x07\xD7\x02" +
        "\x02\u0275C\x03\x02\x02\x02\u0276\u0277\x07\xD3\x02\x02\u0277\u0278\x05" +
        "<\x1F\x02\u0278\u0279\x07\xD4\x02\x02\u0279E\x03\x02\x02\x02\u027A\u027B" +
        "\x07U\x02\x02\u027B\u027C\x05\xA6T\x02\u027C\u0280\x05@!\x02\u027D\u027F" +
        "\x05H%\x02\u027E\u027D\x03\x02\x02\x02\u027F\u0282\x03\x02\x02\x02\u0280" +
        "\u027E\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281\u0284\x03\x02" +
        "\x02\x02\u0282\u0280\x03\x02\x02\x02\u0283\u0285\x05L\'\x02\u0284\u0283" +
        "\x03\x02\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285\u0297\x03\x02\x02\x02" +
        "\u0286\u0287\x07U\x02\x02\u0287\u0288\x05\xA6T\x02\u0288\u0289\x07\xD6" +
        "\x02\x02\u0289\u028D\x05<\x1F\x02\u028A\u028C\x05J&\x02\u028B\u028A\x03" +
        "\x02\x02\x02\u028C\u028F\x03\x02\x02\x02\u028D\u028B\x03\x02\x02\x02\u028D" +
        "\u028E\x03\x02\x02\x02\u028E\u0291\x03\x02\x02\x02\u028F\u028D\x03\x02" +
        "\x02\x02\u0290\u0292\x05N(\x02\u0291\u0290\x03\x02\x02\x02\u0291\u0292" +
        "\x03\x02\x02\x02\u0292\u0293\x03\x02\x02\x02\u0293\u0294\x07G\x02\x02" +
        "\u0294\u0295\x07\xD7\x02\x02\u0295\u0297\x03\x02\x02\x02\u0296\u027A\x03" +
        "\x02\x02\x02\u0296\u0286\x03\x02\x02\x02\u0297G\x03\x02\x02\x02\u0298" +
        "\u0299\x07B\x02\x02\u0299\u029A\x05\xA6T\x02\u029A\u029B\x05@!\x02\u029B" +
        "I\x03\x02\x02\x02\u029C\u029D\x07B\x02\x02\u029D\u029E\x05\xA6T\x02\u029E" +
        "\u029F\x07\xD6\x02\x02\u029F\u02A0\x05<\x1F\x02\u02A0K\x03\x02\x02\x02" +
        "\u02A1\u02A2\x07A\x02\x02\u02A2\u02A3\x05@!\x02\u02A3M\x03\x02\x02\x02" +
        "\u02A4\u02A5\x07A\x02\x02\u02A5\u02A6\x07\xD6\x02\x02\u02A6\u02A7\x05" +
        "<\x1F\x02\u02A7O\x03\x02\x02\x02\u02A8\u02A9\x07\x80\x02\x02\u02A9\u02B0" +
        "\x05\xA6T\x02\u02AA\u02B1\x05@!\x02\u02AB\u02AC\x07\xD6\x02\x02\u02AC" +
        "\u02AD\x05<\x1F\x02\u02AD\u02AE\x07I\x02\x02\u02AE\u02AF\x07\xD7\x02\x02" +
        "\u02AF\u02B1\x03\x02\x02\x02\u02B0\u02AA\x03\x02\x02\x02\u02B0\u02AB\x03" +
        "\x02\x02\x02\u02B1Q\x03\x02\x02\x02\u02B2\u02B3\x07=\x02\x02\u02B3\u02B4" +
        "\x05@!\x02\u02B4\u02B5\x07\x80\x02\x02\u02B5\u02B6\x05\xA6T\x02\u02B6" +
        "\u02B7\x07\xD7\x02\x02\u02B7S\x03\x02\x02\x02\u02B8\u02B9\x07P\x02\x02" +
        "\u02B9\u02BB\x07\xCF\x02\x02\u02BA\u02BC\x05V,\x02\u02BB\u02BA\x03\x02" +
        "\x02\x02\u02BB\u02BC\x03\x02\x02\x02\u02BC\u02BD\x03\x02\x02\x02\u02BD" +
        "\u02BF\x07\xD7\x02\x02\u02BE\u02C0\x05\xA4S\x02\u02BF\u02BE\x03\x02\x02" +
        "\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0\u02C1\x03\x02\x02\x02\u02C1\u02C3" +
        "\x07\xD7\x02\x02\u02C2\u02C4\x05X-\x02\u02C3\u02C2\x03\x02\x02\x02\u02C3" +
        "\u02C4\x03\x02\x02\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5\u02CC\x07\xD0" +
        "\x02\x02\u02C6\u02CD\x05@!\x02\u02C7\u02C8\x07\xD6\x02\x02\u02C8\u02C9" +
        "\x05<\x1F\x02\u02C9\u02CA\x07E\x02\x02\u02CA\u02CB\x07\xD7\x02\x02\u02CB" +
        "\u02CD\x03\x02\x02\x02\u02CC\u02C6\x03\x02\x02\x02\u02CC\u02C7\x03\x02" +
        "\x02\x02\u02CDU\x03\x02\x02\x02\u02CE\u02CF\x05\xA4S\x02\u02CFW\x03\x02" +
        "\x02\x02\u02D0\u02D1\x05\xA4S\x02\u02D1Y\x03\x02\x02\x02\u02D2\u02D3\x07" +
        "v\x02\x02\u02D3\u02EB\x05\xA6T\x02\u02D4\u02D6\x07\xD3\x02\x02\u02D5\u02D7" +
        "\x07\xD7\x02\x02\u02D6\u02D5\x03\x02\x02\x02\u02D6\u02D7\x03\x02\x02\x02" +
        "\u02D7\u02DB\x03\x02\x02\x02\u02D8\u02DA\x05\\/\x02\u02D9\u02D8\x03\x02" +
        "\x02\x02\u02DA\u02DD\x03\x02\x02\x02\u02DB\u02D9\x03\x02\x02\x02\u02DB" +
        "\u02DC\x03\x02\x02\x02\u02DC\u02DE\x03\x02\x02\x02\u02DD\u02DB\x03\x02" +
        "\x02\x02\u02DE\u02EC\x07\xD4\x02\x02\u02DF\u02E1\x07\xD6\x02\x02\u02E0" +
        "\u02E2\x07\xD7\x02\x02\u02E1\u02E0\x03\x02\x02\x02\u02E1\u02E2\x03\x02" +
        "\x02\x02\u02E2\u02E6\x03\x02\x02\x02\u02E3\u02E5\x05\\/\x02\u02E4\u02E3" +
        "\x03\x02\x02\x02\u02E5\u02E8\x03\x02\x02\x02\u02E6\u02E4\x03\x02\x02\x02" +
        "\u02E6\u02E7\x03\x02\x02\x02\u02E7\u02E9\x03\x02\x02\x02\u02E8\u02E6\x03" +
        "\x02\x02\x02\u02E9\u02EA\x07H\x02\x02\u02EA\u02EC\x07\xD7\x02\x02\u02EB" +
        "\u02D4\x03\x02\x02\x02\u02EB\u02DF\x03\x02\x02\x02\u02EC[\x03\x02\x02" +
        "\x02\u02ED\u02EE\x075\x02\x02\u02EE\u02F1\x05\xA8U\x02\u02EF\u02F1\x07" +
        "<\x02\x02\u02F0\u02ED\x03\x02\x02\x02\u02F0\u02EF\x03\x02\x02\x02\u02F1" +
        "\u02F2\x03\x02\x02\x02\u02F2\u02F4\t\x04\x02\x02\u02F3\u02F0\x03\x02\x02" +
        "\x02\u02F4\u02F5\x03\x02\x02\x02\u02F5\u02F3\x03\x02\x02\x02\u02F5\u02F6" +
        "\x03\x02\x02\x02\u02F6\u02F7\x03\x02\x02\x02\u02F7\u02F8\x05<\x1F\x02" +
        "\u02F8]\x03\x02\x02\x02\u02F9\u02FB\x073\x02\x02\u02FA\u02FC\x05\xA8U" +
        "\x02\u02FB\u02FA\x03\x02\x02\x02\u02FB\u02FC\x03\x02\x02\x02\u02FC\u02FD" +
        "\x03\x02\x02\x02\u02FD\u02FE\x07\xD7\x02\x02\u02FE_\x03\x02\x02\x02\u02FF" +
        "\u0301\x07:\x02\x02\u0300\u0302\x05\xA8U\x02\u0301\u0300\x03\x02\x02\x02" +
        "\u0301\u0302\x03\x02\x02\x02\u0302\u0303\x03\x02\x02\x02\u0303\u0304\x07" +
        "\xD7\x02\x02\u0304a\x03\x02\x02\x02\u0305\u0307\x07s\x02\x02\u0306\u0308" +
        "\x05\xA8U\x02\u0307\u0306\x03\x02\x02\x02\u0307\u0308\x03\x02\x02\x02" +
        "\u0308\u0309\x03\x02\x02\x02\u0309\u030A\x07\xD7\x02\x02\u030Ac\x03\x02" +
        "\x02\x02\u030B\u030C\x05\xA8U\x02\u030C\u030D\x07\xD7\x02\x02\u030De\x03" +
        "\x02\x02\x02\u030E\u030F\x07}\x02\x02\u030F\u0310\x07\xCF\x02\x02\u0310" +
        "\u0311\x05\xE6t\x02\u0311\u0312\x07\xD0\x02\x02\u0312\u0313\x07\xD7\x02" +
        "\x02\u0313g\x03\x02\x02\x02\u0314\u033B\x07Q\x02\x02\u0315\u0316\x07\xCF" +
        "\x02\x02\u0316\u0317\x05\xE8u\x02\u0317\u0319\x07/\x02\x02\u0318\u031A" +
        "\x07\xC1\x02\x02\u0319\u0318\x03\x02\x02\x02\u0319\u031A\x03\x02\x02\x02" +
        "\u031A\u031B\x03\x02\x02\x02\u031B\u0321\x05\xAAV\x02\u031C\u031E\x07" +
        "\x9F\x02\x02\u031D\u031F\x07\xC1\x02\x02\u031E\u031D\x03\x02\x02\x02\u031E" +
        "\u031F\x03\x02\x02\x02\u031F\u0320\x03\x02\x02\x02\u0320\u0322\x05\xE8" +
        "u\x02\u0321\u031C\x03\x02\x02\x02\u0321\u0322\x03\x02\x02\x02\u0322\u0323" +
        "\x03\x02\x02\x02\u0323\u0324\x07\xD0\x02\x02\u0324\u033C\x03\x02\x02\x02" +
        "\u0325\u0326\x07\xCF\x02\x02\u0326\u0327\x05\xA8U\x02\u0327\u0328\x07" +
        "/\x02\x02\u0328\u032E\x05\xAAV\x02\u0329\u032B\x07\x9F\x02\x02\u032A\u032C" +
        "\x07\xC1\x02\x02\u032B\u032A\x03\x02\x02\x02\u032B\u032C\x03\x02\x02\x02" +
        "\u032C\u032D\x03\x02\x02\x02\u032D\u032F\x05\xE8u\x02\u032E\u0329\x03" +
        "\x02\x02\x02\u032E\u032F\x03\x02\x02\x02\u032F\u0330\x03\x02\x02\x02\u0330" +
        "\u0331\x07\xD0\x02\x02\u0331\u033C\x03\x02\x02\x02\u0332\u0333\x07\xCF" +
        "\x02\x02\u0333\u0334\x05\xE8u\x02\u0334\u0335\x07/\x02\x02\u0335\u0336" +
        "\x07b\x02\x02\u0336\u0337\x07\xCF\x02\x02\u0337\u0338\x05\xFE\x80\x02" +
        "\u0338\u0339\x07\xD0\x02\x02\u0339\u033A\x07\xD0\x02\x02\u033A\u033C\x03" +
        "\x02\x02\x02\u033B\u0315\x03\x02\x02\x02\u033B\u0325\x03\x02\x02\x02\u033B" +
        "\u0332\x03\x02\x02\x02\u033C\u0343\x03\x02\x02\x02\u033D\u0344\x05@!\x02" +
        "\u033E\u033F\x07\xD6\x02\x02\u033F\u0340\x05<\x1F\x02\u0340\u0341\x07" +
        "F\x02\x02\u0341\u0342\x07\xD7\x02\x02\u0342\u0344\x03\x02\x02\x02\u0343" +
        "\u033D\x03\x02\x02\x02\u0343\u033E\x03\x02\x02\x02\u0344i\x03\x02\x02" +
        "\x02\u0345\u0346\x07y\x02\x02\u0346\u0356\x05D#\x02\u0347\u0349\x05l7" +
        "\x02\u0348\u0347\x03\x02\x02\x02\u0349\u034A\x03\x02\x02\x02\u034A\u0348" +
        "\x03\x02\x02\x02\u034A\u034B\x03\x02\x02\x02\u034B\u034D\x03\x02\x02\x02" +
        "\u034C\u034E\x05n8\x02\u034D\u034C\x03\x02\x02\x02\u034D\u034E\x03\x02" +
        "\x02\x02\u034E\u0357\x03\x02\x02\x02\u034F\u0351\x05l7\x02\u0350\u034F" +
        "\x03\x02\x02\x02\u0351\u0354\x03\x02\x02\x02\u0352\u0350\x03\x02\x02\x02" +
        "\u0352\u0353\x03\x02\x02\x02\u0353\u0355\x03\x02\x02\x02\u0354\u0352\x03" +
        "\x02\x02\x02\u0355\u0357\x05n8\x02\u0356\u0348\x03\x02\x02\x02\u0356\u0352" +
        "\x03\x02\x02\x02\u0357k\x03\x02\x02\x02\u0358\u0359\x076\x02\x02\u0359" +
        "\u035A\x07\xCF\x02\x02\u035A\u035F\x05\xBE`\x02\u035B\u035C\x07\xC2\x02" +
        "\x02\u035C\u035E\x05\xBE`\x02\u035D\u035B\x03\x02\x02\x02\u035E\u0361" +
        "\x03\x02\x02\x02\u035F\u035D\x03\x02\x02\x02\u035F\u0360\x03\x02\x02\x02" +
        "\u0360\u0362\x03\x02\x02\x02\u0361\u035F\x03\x02\x02\x02\u0362\u0363\x07" +
        "\xDB\x02\x02\u0363\u0364\x07\xD0\x02\x02\u0364\u0365\x05D#\x02\u0365m" +
        "\x03\x02\x02\x02\u0366\u0367\x07N\x02\x02\u0367\u0368\x05D#\x02\u0368" +
        "o\x03\x02\x02\x02\u0369\u036A\x07w\x02\x02\u036A\u036B\x05\xA8U\x02\u036B" +
        "\u036C\x07\xD7\x02\x02\u036Cq\x03\x02\x02\x02\u036D\u036E\x07T\x02\x02" +
        "\u036E\u036F\x05\u0104\x83\x02\u036F\u0370\x07\xD7\x02\x02\u0370s\x03" +
        "\x02\x02\x02\u0371\u0372\x07;\x02\x02\u0372\u0373\x07\xCF\x02\x02\u0373" +
        "\u0374\x05z>\x02\u0374\u037B\x07\xD0\x02\x02\u0375\u037C\x05@!\x02\u0376" +
        "\u0377\x07\xD6\x02\x02\u0377\u0378\x05<\x1F\x02\u0378\u0379\x07D\x02\x02" +
        "\u0379\u037A\x07\xD7\x02\x02\u037A\u037C\x03\x02\x02\x02\u037B\u0375\x03" +
        "\x02\x02\x02\u037B\u0376\x03\x02\x02\x02\u037Cu\x03\x02\x02\x02\u037D" +
        "\u037F\x05x=\x02\u037E\u037D\x03\x02\x02\x02\u037F\u0380\x03\x02\x02\x02" +
        "\u0380\u037E\x03\x02\x02\x02\u0380\u0381\x03\x02\x02\x02\u0381w\x03\x02" +
        "\x02\x02\u0382\u0385\x05\x06\x04\x02\u0383\u0385\x05\n\x06\x02\u0384\u0382" +
        "\x03\x02\x02\x02\u0384\u0383\x03\x02\x02\x02\u0385y\x03\x02\x02\x02\u0386" +
        "\u038B\x05\xA0Q\x02\u0387\u0388\x07\xD5\x02\x02\u0388\u038A\x05\xA0Q\x02" +
        "\u0389\u0387\x03\x02\x02\x02\u038A\u038D\x03\x02\x02\x02\u038B\u0389\x03" +
        "\x02\x02\x02\u038B\u038C\x03\x02\x02\x02\u038C{\x03\x02\x02\x02\u038D" +
        "\u038B\x03\x02\x02\x02\u038E\u0390\x05~@\x02\u038F\u038E\x03\x02\x02\x02" +
        "\u038F\u0390\x03\x02\x02\x02\u0390\u0395\x03\x02\x02\x02\u0391\u0392\x07" +
        "\xD5\x02\x02\u0392\u0394\x05~@\x02\u0393\u0391\x03\x02\x02\x02\u0394\u0397" +
        "\x03\x02\x02\x02\u0395\u0393\x03\x02\x02\x02\u0395\u0396\x03\x02\x02\x02" +
        "\u0396}\x03\x02\x02\x02\u0397\u0395\x03\x02\x02\x02\u0398\u039A\x050\x19" +
        "\x02\u0399\u039B\x07\xCE\x02\x02\u039A\u0399\x03\x02\x02\x02\u039A\u039B" +
        "\x03\x02\x02\x02\u039B\u039D\x03\x02\x02\x02\u039C\u039E\x05\x80A\x02" +
        "\u039D\u039C\x03\x02\x02\x02\u039D\u039E\x03\x02\x02\x02\u039E\u03A0\x03" +
        "\x02\x02\x02\u039F\u03A1\x07\xC1\x02\x02\u03A0\u039F\x03\x02\x02\x02\u03A0" +
        "\u03A1\x03\x02\x02\x02\u03A1\u03A3\x03\x02\x02\x02\u03A2\u03A4\x07\xBE" +
        "\x02\x02\u03A3\u03A2\x03\x02\x02\x02\u03A3\u03A4\x03\x02\x02\x02\u03A4" +
        "\u03A5\x03\x02\x02\x02\u03A5\u03A6\x05\x9EP\x02\u03A6\x7F\x03\x02\x02" +
        "\x02\u03A7\u03AB\x05\xBE`\x02\u03A8\u03AB\x074\x02\x02\u03A9\u03AB\x05" +
        "\u010C\x87\x02\u03AA\u03A7\x03\x02\x02\x02\u03AA\u03A8\x03\x02\x02\x02" +
        "\u03AA\u03A9\x03\x02\x02\x02\u03AB\x81\x03\x02\x02\x02\u03AC\u03AD\x07" +
        "S\x02\x02\u03AD\u03B2\x05\x84C\x02\u03AE\u03AF\x07\xD5\x02\x02\u03AF\u03B1" +
        "\x05\x84C\x02\u03B0\u03AE\x03\x02\x02\x02\u03B1\u03B4\x03\x02\x02\x02" +
        "\u03B2\u03B0\x03\x02\x02\x02\u03B2\u03B3\x03\x02\x02\x02\u03B3\u03B5\x03" +
        "\x02\x02\x02\u03B4\u03B2\x03\x02\x02\x02\u03B5\u03B6\x07\xD7\x02\x02";
    PhpParser._serializedATNSegment2 = "\u03B6\x83\x03\x02\x02\x02\u03B7\u03C0\x07\xDB\x02\x02\u03B8\u03B9\x07" +
        "\xCC\x02\x02\u03B9\u03C0\x05\xE8u\x02\u03BA\u03BB\x07\xCC\x02\x02\u03BB" +
        "\u03BC\x07\xD3\x02\x02\u03BC\u03BD\x05\xA8U\x02\u03BD\u03BE\x07\xD4\x02" +
        "\x02\u03BE\u03C0\x03\x02\x02\x02\u03BF\u03B7\x03\x02\x02\x02\u03BF\u03B8" +
        "\x03\x02\x02\x02\u03BF\u03BA\x03\x02\x02\x02\u03C0\x85\x03\x02\x02\x02" +
        "\u03C1\u03C2\x07@\x02\x02\u03C2\u03C3\x05\xA4S\x02\u03C3\u03C4\x07\xD7" +
        "\x02\x02\u03C4\x87\x03\x02\x02\x02\u03C5\u03C6\x07t\x02\x02\u03C6\u03CB" +
        "\x05\x9EP\x02\u03C7\u03C8\x07\xD5\x02\x02\u03C8\u03CA\x05\x9EP\x02\u03C9" +
        "\u03C7\x03\x02\x02\x02\u03CA\u03CD\x03\x02\x02\x02\u03CB\u03C9\x03\x02" +
        "\x02\x02\u03CB\u03CC\x03\x02\x02\x02\u03CC\u03CE\x03\x02\x02\x02\u03CD" +
        "\u03CB\x03\x02\x02\x02\u03CE\u03CF\x07\xD7\x02\x02\u03CF\x89\x03\x02\x02" +
        "\x02\u03D0\u03D1\x050\x19\x02\u03D1\u03D3\x05\x9AN\x02\u03D2\u03D4\x05" +
        "\x80A\x02\u03D3\u03D2\x03\x02\x02\x02\u03D3\u03D4\x03\x02\x02\x02\u03D4" +
        "\u03D5\x03\x02\x02\x02\u03D5\u03DA\x05\x9EP\x02\u03D6\u03D7\x07\xD5\x02" +
        "\x02\u03D7\u03D9\x05\x9EP\x02\u03D8\u03D6\x03\x02\x02\x02\u03D9\u03DC" +
        "\x03\x02\x02\x02\u03DA\u03D8\x03\x02\x02\x02\u03DA\u03DB\x03\x02\x02\x02" +
        "\u03DB\u03DD\x03\x02\x02\x02\u03DC\u03DA\x03\x02\x02\x02\u03DD\u03DE\x07" +
        "\xD7\x02\x02\u03DE\u040A\x03\x02\x02\x02\u03DF\u03E1\x050\x19\x02\u03E0" +
        "\u03E2\x05\x9CO\x02\u03E1\u03E0\x03\x02\x02\x02\u03E1\u03E2\x03\x02\x02" +
        "\x02\u03E2\u03E3\x03\x02\x02\x02\u03E3\u03E5\x079\x02\x02\u03E4\u03E6" +
        "\x05\x80A\x02\u03E5\u03E4\x03\x02\x02\x02\u03E5\u03E6\x03\x02\x02\x02" +
        "\u03E6\u03E7\x03\x02\x02\x02\u03E7\u03EC\x05\xA0Q\x02\u03E8\u03E9\x07" +
        "\xD5\x02\x02\u03E9\u03EB\x05\xA0Q\x02\u03EA\u03E8\x03\x02\x02\x02\u03EB" +
        "\u03EE\x03\x02\x02\x02\u03EC\u03EA\x03\x02\x02\x02\u03EC\u03ED\x03\x02" +
        "\x02\x02\u03ED\u03EF\x03\x02\x02\x02\u03EE\u03EC\x03\x02\x02\x02\u03EF" +
        "\u03F0\x07\xD7\x02\x02\u03F0\u040A\x03\x02\x02\x02\u03F1\u03F3\x050\x19" +
        "\x02\u03F2\u03F4\x05\x9CO\x02\u03F3\u03F2\x03\x02\x02\x02\u03F3\u03F4" +
        "\x03\x02\x02\x02\u03F4\u03F5\x03\x02\x02\x02\u03F5\u03F7\x07R\x02\x02" +
        "\u03F6\u03F8\x07\xC1\x02\x02\u03F7\u03F6\x03\x02\x02\x02\u03F7\u03F8\x03" +
        "\x02\x02\x02\u03F8\u03F9\x03\x02\x02\x02\u03F9\u03FB\x05\u0104\x83\x02" +
        "\u03FA\u03FC\x05$\x13\x02\u03FB\u03FA\x03\x02\x02\x02\u03FB\u03FC\x03" +
        "\x02\x02\x02\u03FC\u03FD\x03\x02\x02\x02\u03FD\u03FE\x07\xCF\x02\x02\u03FE" +
        "\u03FF\x05|?\x02\u03FF\u0401\x07\xD0\x02\x02\u0400\u0402\x05\x96L\x02" +
        "\u0401\u0400\x03\x02\x02\x02\u0401\u0402\x03\x02\x02\x02\u0402\u0403\x03" +
        "\x02\x02\x02\u0403\u0404\x05\x98M\x02\u0404\u040A\x03\x02\x02\x02\u0405" +
        "\u0406\x07~\x02\x02\u0406\u0407\x05\xCCg\x02\u0407\u0408\x05\x8CG\x02" +
        "\u0408\u040A\x03\x02\x02\x02\u0409\u03D0\x03\x02\x02\x02\u0409\u03DF\x03" +
        "\x02\x02\x02\u0409\u03F1\x03\x02\x02\x02\u0409\u0405\x03\x02\x02\x02\u040A" +
        "\x8B\x03\x02\x02\x02\u040B\u0415\x07\xD7\x02\x02\u040C\u0410\x07\xD3\x02" +
        "\x02\u040D\u040F\x05\x8EH\x02\u040E\u040D\x03\x02\x02\x02\u040F\u0412" +
        "\x03\x02\x02\x02\u0410\u040E\x03\x02\x02\x02\u0410\u0411\x03\x02\x02\x02" +
        "\u0411\u0413\x03\x02\x02\x02\u0412\u0410\x03\x02\x02\x02\u0413\u0415\x07" +
        "\xD4\x02\x02\u0414\u040B\x03\x02\x02\x02\u0414\u040C\x03\x02\x02\x02\u0415" +
        "\x8D\x03\x02\x02\x02\u0416\u0419\x05\x90I\x02\u0417\u0419\x05\x92J\x02" +
        "\u0418\u0416\x03\x02\x02\x02\u0418\u0417\x03\x02\x02\x02\u0419\x8F\x03" +
        "\x02\x02\x02\u041A\u041B\x05\xC6d\x02\u041B\u041C\x07\xBB\x02\x02\u041C" +
        "\u041D\x05\u0104\x83\x02\u041D\u041E\x07[\x02\x02\u041E\u041F\x05\xCC" +
        "g\x02\u041F\u0420\x07\xD7\x02\x02\u0420\x91\x03\x02\x02\x02\u0421\u0422" +
        "\x05\x94K\x02\u0422\u0428\x07/\x02\x02\u0423\u0429\x05\u0106\x84\x02\u0424" +
        "\u0426\x05\u0106\x84\x02\u0425\u0424\x03\x02\x02\x02\u0425\u0426\x03\x02" +
        "\x02\x02\u0426\u0427\x03\x02\x02\x02\u0427\u0429\x05\u0104\x83\x02\u0428" +
        "\u0423\x03\x02\x02\x02\u0428\u0425\x03\x02\x02\x02\u0429\u042A\x03\x02" +
        "\x02\x02\u042A\u042B\x07\xD7\x02\x02\u042B\x93\x03\x02\x02\x02\u042C\u042D" +
        "\x05\xC6d\x02\u042D\u042E\x07\xBB\x02\x02\u042E\u0430\x03\x02\x02\x02" +
        "\u042F\u042C\x03\x02\x02\x02\u042F\u0430\x03\x02\x02\x02\u0430\u0431\x03" +
        "\x02\x02\x02\u0431\u0432\x05\u0104\x83\x02\u0432\x95\x03\x02\x02\x02\u0433" +
        "\u0434\x07\xD6\x02\x02\u0434\u0436\x05\u0104\x83\x02\u0435\u0437\x05\xCE" +
        "h\x02\u0436\u0435\x03\x02\x02\x02\u0436\u0437\x03\x02\x02\x02\u0437\x97" +
        "\x03\x02\x02\x02\u0438\u043B\x07\xD7\x02\x02\u0439\u043B\x05D#\x02\u043A" +
        "\u0438\x03\x02\x02\x02\u043A\u0439\x03\x02\x02\x02\u043B\x99\x03\x02\x02" +
        "\x02\u043C\u043F\x05\x9CO\x02\u043D\u043F\x07\x7F\x02\x02\u043E\u043C" +
        "\x03\x02\x02\x02\u043E\u043D\x03\x02\x02\x02\u043F\x9B\x03\x02\x02\x02" +
        "\u0440\u0442\x05\u0106\x84\x02\u0441\u0440\x03\x02\x02\x02\u0442\u0443" +
        "\x03\x02\x02\x02\u0443\u0441\x03\x02\x02\x02\u0443\u0444\x03\x02\x02\x02" +
        "\u0444\x9D\x03\x02\x02\x02\u0445\u0448\x07\xDB\x02\x02\u0446\u0447\x07" +
        "\xD8\x02\x02\u0447\u0449\x05\xD2j\x02\u0448\u0446\x03\x02\x02\x02\u0448" +
        "\u0449\x03\x02\x02\x02\u0449\x9F\x03\x02\x02\x02\u044A\u044B\x05\u0104" +
        "\x83\x02\u044B\u044C\x07\xD8\x02\x02\u044C\u044D\x05\xD2j\x02\u044D\xA1" +
        "\x03\x02\x02\x02\u044E\u044F\x050\x19\x02\u044F\u0450\x079\x02\x02\u0450" +
        "\u0455\x05\xA0Q\x02\u0451\u0452\x07\xD5\x02\x02\u0452\u0454\x05\xA0Q\x02" +
        "\u0453\u0451\x03\x02\x02\x02\u0454\u0457\x03\x02\x02\x02\u0455\u0453\x03" +
        "\x02\x02\x02\u0455\u0456\x03\x02\x02\x02\u0456\u0458\x03\x02\x02\x02\u0457" +
        "\u0455\x03\x02\x02\x02\u0458\u0459\x07\xD7\x02\x02\u0459\xA3\x03\x02\x02" +
        "\x02\u045A\u045F\x05\xA8U\x02\u045B\u045C\x07\xD5\x02\x02\u045C\u045E" +
        "\x05\xA8U\x02\u045D\u045B\x03\x02\x02\x02\u045E\u0461\x03\x02\x02\x02" +
        "\u045F\u045D\x03\x02\x02\x02\u045F\u0460\x03\x02\x02\x02\u0460\xA5\x03" +
        "\x02\x02\x02\u0461\u045F\x03\x02\x02\x02\u0462\u0465\x07\xCF\x02\x02\u0463" +
        "\u0466\x05\xA8U\x02\u0464\u0466\x05\xB4[\x02\u0465\u0463\x03\x02\x02\x02" +
        "\u0465\u0464\x03\x02\x02\x02\u0466\u0467\x03\x02\x02\x02\u0467\u0468\x07" +
        "\xD0\x02\x02\u0468\xA7\x03\x02\x02\x02\u0469\u046A\bU\x01\x02\u046A\u046B" +
        "\x078\x02\x02\u046B\u04B7\x05\xA8U/\u046C\u04B7\x05\xB0Y\x02\u046D\u046E" +
        "\x05\xE0q\x02\u046E\u046F\x07\xD1\x02\x02\u046F\u0470\x05\xA8U\x02\u0470" +
        "\u0471\x07\xD2\x02\x02\u0471\u04B7\x03\x02\x02\x02\u0472\u0473\x07\xCF" +
        "\x02\x02\u0473\u0474\x05\u010E\x88\x02\u0474\u0475\x07\xD0\x02\x02\u0475" +
        "\u0476\x05\xA8U,\u0476\u04B7\x03\x02\x02\x02\u0477\u0478\t\x05\x02\x02" +
        "\u0478\u04B7\x05\xA8U+\u0479\u047A\t\x06\x02\x02\u047A\u04B7\x05\xA8U" +
        "*\u047B\u047C\t\x07\x02\x02\u047C\u04B7\x05\xE8u\x02\u047D\u047E\x05\xE8" +
        "u\x02\u047E\u047F\t\x07\x02\x02\u047F\u04B7\x03\x02\x02\x02\u0480\u0481" +
        "\x07l\x02\x02\u0481\u04B7\x05\xA8U\'\u0482\u04B7\x05\xE8u\x02\u0483\u04B7" +
        "\x05\xD8m\x02\u0484\u04B7\x05\xE2r\x02\u0485\u04B7\x07\xDC\x02\x02\u0486" +
        "\u04B7\x07\xE2\x02\x02\u0487\u04B7\x05\xA6T\x02\u0488\u04B7\x05\xACW\x02" +
        "\u0489\u04B7\x07\x81\x02\x02\u048A\u048B\x07b\x02\x02\u048B\u048C\x07" +
        "\xCF\x02\x02\u048C\u048D\x05\xFE\x80\x02\u048D\u048E\x07\xD0\x02\x02\u048E" +
        "\u048F\x07\xD8\x02\x02\u048F\u0490\x05\xA8U\x1E\u0490\u04B7\x03\x02\x02" +
        "\x02\u0491\u0492\x07a\x02\x02\u0492\u0493\x07\xCF\x02\x02\u0493\u0494" +
        "\x05\xE6t\x02\u0494\u0495\x07\xD0\x02\x02\u0495\u04B7\x03\x02\x02\x02" +
        "\u0496\u0497\x07C\x02\x02\u0497\u0498\x07\xCF\x02\x02\u0498\u0499\x05" +
        "\xE8u\x02\u0499\u049A\x07\xD0\x02\x02\u049A\u04B7\x03\x02\x02\x02\u049B" +
        "\u049C\x07J\x02\x02\u049C\u049D\x07\xCF\x02\x02\u049D\u049E\x05\xA8U\x02" +
        "\u049E\u049F\x07\xD0\x02\x02\u049F\u04B7\x03\x02\x02\x02\u04A0\u04A4\x07" +
        "K\x02\x02\u04A1\u04A2\x07\xCF\x02\x02\u04A2\u04A5\x07\xD0\x02\x02\u04A3" +
        "\u04A5\x05\xA6T\x02\u04A4\u04A1\x03\x02\x02\x02\u04A4\u04A3\x03\x02\x02" +
        "\x02\u04A4\u04A5\x03\x02\x02\x02\u04A5\u04B7\x03\x02\x02\x02\u04A6\u04A7" +
        "\t\b\x02\x02\u04A7\u04B7\x05\xA8U\x19\u04A8\u04A9\t\t\x02\x02\u04A9\u04B7" +
        "\x05\xA8U\x18\u04AA\u04B7\x05\xAEX\x02\u04AB\u04AC\x05\xAAV\x02\u04AC" +
        "\u04AD\x05\xB2Z\x02\u04AD\u04AE\x05\xA8U\x07\u04AE\u04B7\x03\x02\x02\x02" +
        "\u04AF\u04B0\x05\xAAV\x02\u04B0\u04B1\x07\xD8\x02\x02\u04B1\u04B4\x07" +
        "\xC1\x02\x02\u04B2\u04B5\x05\xE8u\x02\u04B3\u04B5\x05\xB0Y\x02\u04B4\u04B2" +
        "\x03\x02\x02\x02\u04B4\u04B3\x03\x02\x02\x02\u04B5\u04B7\x03\x02\x02\x02" +
        "\u04B6\u0469\x03\x02\x02\x02\u04B6\u046C\x03\x02\x02\x02\u04B6\u046D\x03" +
        "\x02\x02\x02\u04B6\u0472\x03\x02\x02\x02\u04B6\u0477\x03\x02\x02\x02\u04B6" +
        "\u0479\x03\x02\x02\x02\u04B6\u047B\x03\x02\x02\x02\u04B6\u047D\x03\x02" +
        "\x02\x02\u04B6\u0480\x03\x02\x02\x02\u04B6\u0482\x03\x02\x02\x02\u04B6" +
        "\u0483\x03\x02\x02\x02\u04B6\u0484\x03\x02\x02\x02\u04B6\u0485\x03\x02" +
        "\x02\x02\u04B6\u0486\x03\x02\x02\x02\u04B6\u0487\x03\x02\x02\x02\u04B6" +
        "\u0488\x03\x02\x02\x02\u04B6\u0489\x03\x02\x02\x02\u04B6\u048A\x03\x02" +
        "\x02\x02\u04B6\u0491\x03\x02\x02\x02\u04B6\u0496\x03\x02\x02\x02\u04B6" +
        "\u049B\x03\x02\x02\x02\u04B6\u04A0\x03\x02\x02\x02\u04B6\u04A6\x03\x02" +
        "\x02\x02\u04B6\u04A8\x03\x02\x02\x02\u04B6\u04AA\x03\x02\x02\x02\u04B6" +
        "\u04AB\x03\x02\x02\x02\u04B6\u04AF\x03\x02\x02\x02\u04B7\u04F4\x03\x02" +
        "\x02\x02\u04B8\u04B9\f\x16\x02\x02\u04B9\u04BA\x07\xAB\x02\x02\u04BA\u04F3" +
        "\x05\xA8U\x16\u04BB\u04BC\f\x14\x02\x02\u04BC\u04BD\t\n\x02\x02\u04BD" +
        "\u04F3\x05\xA8U\x15\u04BE\u04BF\f\x13\x02\x02\u04BF\u04C0\t\v\x02\x02" +
        "\u04C0\u04F3\x05\xA8U\x14\u04C1\u04C2\f\x12\x02\x02\u04C2\u04C3\t\f\x02" +
        "\x02\u04C3\u04F3\x05\xA8U\x13\u04C4\u04C5\f\x11\x02\x02\u04C5\u04C6\t" +
        "\r\x02\x02\u04C6\u04F3\x05\xA8U\x12\u04C7\u04C8\f\x10\x02\x02\u04C8\u04C9" +
        "\t\x0E\x02\x02\u04C9\u04F3\x05\xA8U\x11\u04CA\u04CB\f\x0F\x02\x02\u04CB" +
        "\u04CC\x07\xC1\x02\x02\u04CC\u04F3\x05\xA8U\x10\u04CD\u04CE\f\x0E\x02" +
        "\x02\u04CE\u04CF\x07\xC4\x02\x02\u04CF\u04F3\x05\xA8U\x0F\u04D0\u04D1" +
        "\f\r\x02\x02\u04D1\u04D2\x07\xC2\x02\x02\u04D2\u04F3\x05\xA8U\x0E\u04D3" +
        "\u04D4\f\f\x02\x02\u04D4\u04D5\x07\xB6\x02\x02\u04D5\u04F3\x05\xA8U\r" +
        "\u04D6\u04D7\f\v\x02\x02\u04D7\u04D8\x07\xB5\x02\x02\u04D8\u04F3\x05\xA8" +
        "U\f\u04D9\u04DA\f\n\x02\x02\u04DA\u04DC\x07\xCE\x02\x02\u04DB\u04DD\x05" +
        "\xA8U\x02\u04DC\u04DB\x03\x02\x02\x02\u04DC\u04DD\x03\x02\x02\x02\u04DD" +
        "\u04DE\x03\x02\x02\x02\u04DE\u04DF\x07\xD6\x02\x02\u04DF\u04F3\x05\xA8" +
        "U\v\u04E0\u04E1\f\t\x02\x02\u04E1\u04E2\x07\xB7\x02\x02\u04E2\u04F3\x05" +
        "\xA8U\n\u04E3\u04E4\f\b\x02\x02\u04E4\u04E5\x07\x9C\x02\x02\u04E5\u04F3" +
        "\x05\xA8U\t\u04E6\u04E7\f\x05\x02\x02\u04E7\u04E8\x07c\x02\x02\u04E8\u04F3" +
        "\x05\xA8U\x06\u04E9\u04EA\f\x04\x02\x02\u04EA\u04EB\x07e\x02\x02\u04EB" +
        "\u04F3\x05\xA8U\x05\u04EC\u04ED\f\x03\x02\x02\u04ED\u04EE\x07d\x02\x02" +
        "\u04EE\u04F3\x05\xA8U\x04\u04EF\u04F0\f\x15\x02\x02\u04F0\u04F1\x07Z\x02" +
        "\x02\u04F1\u04F3\x05\xC0a\x02\u04F2\u04B8\x03\x02\x02\x02\u04F2\u04BB" +
        "\x03\x02\x02\x02\u04F2\u04BE\x03\x02\x02\x02\u04F2\u04C1\x03\x02\x02\x02" +
        "\u04F2\u04C4\x03\x02\x02\x02\u04F2\u04C7\x03\x02\x02\x02\u04F2\u04CA\x03" +
        "\x02\x02\x02\u04F2\u04CD\x03\x02\x02\x02\u04F2\u04D0\x03\x02\x02\x02\u04F2" +
        "\u04D3\x03\x02\x02\x02\u04F2\u04D6\x03\x02\x02\x02\u04F2\u04D9\x03\x02" +
        "\x02\x02\u04F2\u04E0\x03\x02\x02\x02\u04F2\u04E3\x03\x02\x02\x02\u04F2" +
        "\u04E6\x03\x02\x02\x02\u04F2\u04E9\x03\x02\x02\x02\u04F2\u04EC\x03\x02" +
        "\x02\x02\u04F2\u04EF\x03\x02\x02\x02\u04F3\u04F6\x03\x02\x02\x02\u04F4" +
        "\u04F2\x03\x02\x02\x02\u04F4\u04F5\x03\x02\x02\x02\u04F5\xA9\x03\x02\x02" +
        "\x02\u04F6\u04F4\x03\x02\x02\x02\u04F7\u04FA\x05\xE8u\x02\u04F8\u04FA" +
        "\x05\xACW\x02\u04F9\u04F7\x03\x02\x02\x02\u04F9\u04F8\x03\x02\x02\x02" +
        "\u04FA\xAB\x03\x02\x02\x02\u04FB\u04FC\x07.\x02\x02\u04FC\u04FE\x07\xCF" +
        "\x02\x02\u04FD\u04FF\x05\xB6\\\x02\u04FE\u04FD\x03\x02\x02\x02\u04FE\u04FF" +
        "\x03\x02\x02\x02\u04FF\u0500\x03\x02\x02\x02\u0500\u0507\x07\xD0\x02\x02" +
        "\u0501\u0503\x07\xD1\x02\x02\u0502\u0504\x05\xB6\\\x02\u0503\u0502\x03" +
        "\x02\x02\x02\u0503\u0504\x03\x02\x02\x02\u0504\u0505\x03\x02\x02\x02\u0505" +
        "\u0507\x07\xD2\x02\x02\u0506\u04FB\x03\x02\x02\x02\u0506\u0501\x03\x02" +
        "\x02\x02\u0507\u050C\x03\x02\x02\x02\u0508\u0509\x07\xD1\x02\x02\u0509" +
        "\u050A\x05\xA8U\x02\u050A\u050B\x07\xD2\x02\x02\u050B\u050D\x03\x02\x02" +
        "\x02\u050C\u0508\x03\x02\x02\x02\u050C\u050D\x03\x02\x02\x02\u050D\xAD" +
        "\x03\x02\x02\x02\u050E\u0510\x07t\x02\x02\u050F\u050E\x03\x02\x02\x02" +
        "\u050F\u0510\x03\x02\x02\x02\u0510\u0511\x03\x02\x02\x02\u0511\u0513\x07" +
        "R\x02\x02\u0512\u0514\x07\xC1\x02\x02\u0513\u0512\x03\x02\x02\x02\u0513" +
        "\u0514\x03\x02\x02\x02\u0514\u0515\x03\x02\x02\x02\u0515\u0516\x07\xCF" +
        "\x02\x02\u0516\u0517\x05|?\x02\u0517\u0519\x07\xD0\x02\x02\u0518\u051A" +
        "\x05\xBA^\x02\u0519\u0518\x03\x02\x02\x02\u0519\u051A\x03\x02\x02\x02" +
        "\u051A\u051D\x03\x02\x02\x02\u051B\u051C\x07\xD6\x02\x02\u051C\u051E\x05" +
        "\x80A\x02\u051D\u051B\x03\x02\x02\x02\u051D\u051E\x03\x02\x02\x02\u051E" +
        "\u051F\x03\x02\x02\x02\u051F\u0520\x05D#\x02\u0520\u0529\x03\x02\x02\x02" +
        "\u0521\u0522\x07\x83\x02\x02\u0522\u0523\x07\xCF\x02\x02\u0523\u0524\x05" +
        "|?\x02\u0524\u0525\x07\xD0\x02\x02\u0525\u0526\x07\x9F\x02\x02\u0526\u0527" +
        "\x05\xA8U\x02\u0527\u0529\x03\x02\x02\x02\u0528\u050F\x03\x02\x02\x02" +
        "\u0528\u0521\x03\x02\x02\x02\u0529\xAF\x03\x02\x02\x02\u052A\u052B\x07" +
        "g\x02\x02\u052B\u052D\x05\xC0a\x02\u052C\u052E\x05\xCEh\x02\u052D\u052C" +
        "\x03\x02\x02\x02\u052D\u052E\x03\x02\x02\x02\u052E\xB1\x03\x02\x02\x02" +
        "\u052F\u0530\t\x0F\x02\x02\u0530\xB3\x03\x02\x02\x02\u0531\u0539\x07\x81" +
        "\x02\x02\u0532\u0535\x05\xA8U\x02\u0533\u0534\x07\x9F\x02\x02\u0534\u0536" +
        "\x05\xA8U\x02\u0535\u0533\x03\x02\x02\x02\u0535\u0536\x03\x02\x02\x02" +
        "\u0536\u053A\x03\x02\x02\x02\u0537\u0538\x07\x82\x02\x02\u0538\u053A\x05" +
        "\xA8U\x02\u0539\u0532\x03\x02\x02\x02\u0539\u0537\x03\x02\x02\x02\u053A" +
        "\xB5\x03\x02\x02\x02\u053B\u0540\x05\xB8]\x02\u053C\u053D\x07\xD5\x02" +
        "\x02\u053D\u053F\x05\xB8]\x02\u053E\u053C\x03\x02\x02\x02\u053F\u0542" +
        "\x03\x02\x02\x02\u0540\u053E\x03\x02\x02\x02\u0540\u0541\x03\x02\x02\x02" +
        "\u0541\u0544\x03\x02\x02\x02\u0542\u0540\x03\x02\x02\x02\u0543\u0545\x07" +
        "\xD5\x02\x02\u0544\u0543\x03\x02\x02\x02\u0544\u0545\x03\x02\x02\x02\u0545" +
        "\xB7\x03\x02\x02\x02\u0546\u0549\x05\xA8U\x02\u0547\u0548\x07\x9F\x02" +
        "\x02\u0548\u054A\x05\xA8U\x02\u0549\u0547\x03\x02\x02\x02\u0549\u054A" +
        "\x03\x02\x02\x02\u054A\u0553\x03\x02\x02\x02\u054B\u054C\x05\xA8U\x02" +
        "\u054C\u054D\x07\x9F\x02\x02\u054D\u054F\x03\x02\x02\x02\u054E\u054B\x03" +
        "\x02\x02\x02\u054E\u054F\x03\x02\x02\x02\u054F\u0550\x03\x02\x02\x02\u0550" +
        "\u0551\x07\xC1\x02\x02\u0551\u0553\x05\xE8u\x02\u0552\u0546\x03\x02\x02" +
        "\x02\u0552\u054E\x03\x02\x02\x02\u0553\xB9\x03\x02\x02\x02\u0554\u0555" +
        "\x07~\x02\x02\u0555\u0556\x07\xCF\x02\x02\u0556\u055B\x05\xBC_\x02\u0557" +
        "\u0558\x07\xD5\x02\x02\u0558\u055A\x05\xBC_\x02\u0559\u0557\x03\x02\x02" +
        "\x02\u055A\u055D\x03\x02\x02\x02\u055B\u0559\x03\x02\x02\x02\u055B\u055C" +
        "\x03\x02\x02\x02\u055C\u055E\x03\x02\x02\x02\u055D\u055B\x03\x02\x02\x02" +
        "\u055E\u055F\x07\xD0\x02\x02\u055F\xBB\x03\x02\x02\x02\u0560\u0562\x07" +
        "\xC1\x02\x02\u0561\u0560\x03\x02\x02\x02\u0561\u0562\x03\x02\x02\x02\u0562" +
        "\u0563\x03\x02\x02\x02\u0563\u0564\x07\xDB\x02\x02\u0564\xBD\x03\x02\x02" +
        "\x02\u0565\u0567\x05\xC6d\x02\u0566\u0568\x05.\x18\x02\u0567\u0566\x03" +
        "\x02\x02\x02\u0567\u0568\x03\x02\x02\x02\u0568\u056B\x03\x02\x02\x02\u0569" +
        "\u056B\x07t\x02\x02\u056A\u0565\x03\x02\x02\x02\u056A\u0569\x03\x02\x02" +
        "\x02\u056B\xBF\x03\x02\x02\x02\u056C\u056F\x05\xC6d\x02\u056D\u056F\x05" +
        "\xC4c\x02\u056E\u056C\x03\x02\x02\x02\u056E\u056D\x03\x02\x02\x02\u056F" +
        "\u0571\x03\x02\x02\x02\u0570\u0572\x05.\x18\x02\u0571\u0570\x03\x02\x02" +
        "\x02\u0571\u0572\x03\x02\x02\x02\u0572\u0577\x03\x02\x02\x02\u0573\u0577" +
        "\x05\u010C\x87\x02\u0574\u0577\x07t\x02\x02\u0575\u0577\x05\xC2b\x02\u0576" +
        "\u056E\x03\x02\x02\x02\u0576\u0573\x03\x02\x02\x02\u0576\u0574\x03\x02" +
        "\x02\x02\u0576\u0575\x03\x02\x02\x02\u0577\xC1\x03\x02\x02\x02\u0578\u057A" +
        "\x050\x19\x02\u0579\u057B\x07m\x02\x02\u057A\u0579\x03\x02\x02\x02\u057A" +
        "\u057B\x03\x02\x02\x02\u057B\u057D\x03\x02\x02\x02\u057C\u057E\x05\u0102" +
        "\x82\x02\u057D\u057C\x03\x02\x02\x02\u057D\u057E\x03\x02\x02\x02\u057E" +
        "\u0580\x03\x02\x02\x02\u057F\u0581\x07k\x02\x02\u0580\u057F\x03\x02\x02" +
        "\x02\u0580\u0581\x03\x02\x02\x02\u0581\u0597\x03\x02\x02\x02\u0582\u0584" +
        "\x05 \x11\x02\u0583\u0585\x05$\x13\x02\u0584\u0583\x03\x02\x02\x02\u0584" +
        "\u0585\x03\x02\x02\x02\u0585\u0588\x03\x02\x02\x02\u0586\u0587\x07L\x02" +
        "\x02\u0587\u0589\x05\xBE`\x02\u0588\u0586\x03\x02\x02\x02\u0588\u0589" +
        "\x03\x02\x02\x02\u0589\u058C\x03\x02\x02\x02\u058A\u058B\x07V\x02\x02" +
        "\u058B\u058D\x05\"\x12\x02\u058C\u058A\x03\x02\x02\x02\u058C\u058D\x03" +
        "\x02\x02\x02\u058D\u0598\x03\x02\x02\x02\u058E\u058F\x07`\x02\x02\u058F" +
        "\u0591\x05\u0104\x83\x02\u0590\u0592\x05$\x13\x02\u0591\u0590\x03\x02" +
        "\x02\x02\u0591\u0592\x03\x02\x02\x02\u0592\u0595\x03\x02\x02\x02\u0593" +
        "\u0594\x07L\x02\x02\u0594\u0596\x05\"\x12\x02\u0595\u0593\x03\x02\x02" +
        "\x02\u0595\u0596\x03\x02\x02\x02\u0596\u0598\x03\x02\x02\x02\u0597\u0582" +
        "\x03\x02\x02\x02\u0597\u058E\x03\x02\x02\x02\u0598\u0599\x03\x02\x02\x02" +
        "\u0599\u059D\x07\xD3\x02\x02\u059A\u059C\x05\x8AF\x02\u059B\u059A\x03" +
        "\x02\x02\x02\u059C\u059F\x03\x02\x02\x02\u059D\u059B\x03\x02\x02\x02\u059D" +
        "\u059E\x03\x02\x02\x02\u059E\u05A0\x03\x02\x02\x02\u059F\u059D\x03\x02" +
        "\x02\x02\u05A0\u05A1\x07\xD4\x02\x02\u05A1\xC3\x03\x02\x02\x02\u05A2\u05A7" +
        "\x05\xF4{\x02\u05A3\u05A4\x07\xBC\x02\x02\u05A4\u05A6\x05\xF6|\x02\u05A5" +
        "\u05A3\x03\x02\x02\x02\u05A6\u05A9\x03\x02\x02\x02\u05A7\u05A5\x03\x02" +
        "\x02\x02\u05A7\u05A8\x03\x02\x02\x02\u05A8\xC5\x03\x02\x02\x02\u05A9\u05A7" +
        "\x03\x02\x02\x02\u05AA\u05AC\x07f\x02\x02\u05AB\u05AA\x03\x02\x02\x02" +
        "\u05AB\u05AC\x03\x02\x02\x02\u05AC\u05AE\x03\x02\x02\x02\u05AD\u05AF\x07" +
        "\xBD\x02\x02\u05AE\u05AD\x03\x02\x02\x02\u05AE\u05AF\x03\x02\x02\x02\u05AF" +
        "\u05B0\x03\x02\x02\x02\u05B0\u05B1\x05\xC8e\x02\u05B1\xC7\x03\x02\x02" +
        "\x02\u05B2\u05C0\x05\u0104\x83\x02\u05B3\u05B8\x05\u0104\x83\x02\u05B4" +
        "\u05B5\x07\xBD\x02\x02\u05B5\u05B7\x05\u0104\x83\x02\u05B6\u05B4\x03\x02" +
        "\x02\x02\u05B7\u05BA\x03\x02\x02\x02\u05B8\u05B6\x03\x02\x02\x02\u05B8" +
        "\u05B9\x03\x02\x02\x02\u05B9\u05BD\x03\x02\x02\x02\u05BA\u05B8\x03\x02" +
        "\x02\x02\u05BB\u05BC\x07\xBD\x02\x02\u05BC\u05BE\x05\xCAf\x02\u05BD\u05BB" +
        "\x03\x02\x02\x02\u05BD\u05BE\x03\x02\x02\x02\u05BE\u05C0\x03\x02\x02\x02" +
        "\u05BF\u05B2\x03\x02\x02\x02\u05BF\u05B3\x03\x02\x02\x02\u05C0\xC9\x03" +
        "\x02\x02\x02\u05C1\u05C4\x05\u0104\x83\x02\u05C2\u05C3\x07/\x02\x02\u05C3" +
        "\u05C5\x05\u0104\x83\x02\u05C4\u05C2\x03\x02\x02\x02\u05C4\u05C5\x03\x02" +
        "\x02\x02\u05C5\u05D5\x03\x02\x02\x02\u05C6\u05C7\x07\xD3\x02\x02\u05C7" +
        "\u05CC\x05\xCAf\x02\u05C8\u05C9\x07\xD5\x02\x02\u05C9\u05CB\x05\xCAf\x02" +
        "\u05CA\u05C8\x03\x02\x02\x02\u05CB\u05CE\x03\x02\x02\x02\u05CC\u05CA\x03" +
        "\x02\x02\x02\u05CC\u05CD\x03\x02\x02\x02\u05CD\u05D0\x03\x02\x02\x02\u05CE" +
        "\u05CC\x03\x02\x02\x02\u05CF\u05D1\x07\xD5\x02\x02\u05D0\u05CF\x03\x02" +
        "\x02\x02\u05D0\u05D1\x03\x02\x02\x02\u05D1\u05D2\x03\x02\x02\x02\u05D2" +
        "\u05D3\x07\xD4\x02\x02\u05D3\u05D5\x03\x02\x02\x02\u05D4\u05C1\x03\x02" +
        "\x02\x02\u05D4\u05C6\x03\x02\x02\x02\u05D5\xCB\x03\x02\x02\x02\u05D6\u05DB" +
        "\x05\xC6d\x02\u05D7\u05D8\x07\xD5\x02\x02\u05D8\u05DA\x05\xC6d\x02\u05D9" +
        "\u05D7\x03\x02\x02\x02\u05DA\u05DD\x03\x02\x02\x02\u05DB\u05D9\x03\x02" +
        "\x02\x02\u05DB\u05DC\x03\x02\x02\x02\u05DC\xCD\x03\x02\x02\x02\u05DD\u05DB" +
        "\x03\x02\x02\x02\u05DE\u05E8\x07\xCF\x02\x02\u05DF\u05E4\x05\xD0i\x02" +
        "\u05E0\u05E1\x07\xD5\x02\x02\u05E1\u05E3\x05\xD0i\x02\u05E2\u05E0\x03" +
        "\x02\x02\x02\u05E3\u05E6\x03\x02\x02\x02\u05E4\u05E2\x03\x02\x02\x02\u05E4" +
        "\u05E5\x03\x02\x02\x02\u05E5\u05E9\x03\x02\x02\x02\u05E6\u05E4\x03\x02" +
        "\x02\x02\u05E7\u05E9\x05\xB4[\x02\u05E8\u05DF\x03\x02\x02\x02\u05E8\u05E7" +
        "\x03\x02\x02\x02\u05E8\u05E9\x03\x02\x02\x02\u05E9\u05EB\x03\x02\x02\x02" +
        "\u05EA\u05EC\x07\xD5\x02\x02\u05EB\u05EA\x03\x02\x02\x02\u05EB\u05EC\x03" +
        "\x02\x02\x02\u05EC\u05ED\x03\x02\x02\x02\u05ED\u05EE\x07\xD0\x02\x02\u05EE" +
        "\xCF\x03\x02\x02\x02\u05EF\u05F1\x07\xBE\x02\x02\u05F0\u05EF\x03\x02\x02" +
        "\x02\u05F0\u05F1\x03\x02\x02\x02\u05F1\u05F2\x03\x02\x02\x02\u05F2\u05F6" +
        "\x05\xA8U\x02\u05F3\u05F4\x07\xC1\x02\x02\u05F4\u05F6\x05\xE8u\x02\u05F5" +
        "\u05F0\x03\x02\x02\x02\u05F5\u05F3\x03\x02\x02\x02\u05F6\xD1\x03\x02\x02" +
        "\x02\u05F7\u060D\x05\xD8m\x02\u05F8\u060D\x05\xE2r\x02\u05F9\u05FA\x07" +
        ".\x02\x02\u05FA\u05FF\x07\xCF\x02\x02\u05FB\u05FD\x05\xD4k\x02\u05FC\u05FE" +
        "\x07\xD5\x02\x02\u05FD\u05FC\x03\x02\x02\x02\u05FD\u05FE\x03\x02\x02\x02" +
        "\u05FE\u0600\x03\x02\x02\x02\u05FF\u05FB\x03\x02\x02\x02\u05FF\u0600\x03" +
        "\x02\x02\x02\u0600\u0601\x03\x02\x02\x02\u0601\u060D\x07\xD0\x02\x02\u0602" +
        "\u0607\x07\xD1\x02\x02\u0603\u0605\x05\xD4k\x02\u0604\u0606\x07\xD5\x02" +
        "\x02\u0605\u0604\x03\x02\x02\x02\u0605\u0606\x03\x02\x02\x02\u0606\u0608" +
        "\x03\x02\x02\x02\u0607\u0603\x03\x02\x02\x02\u0607\u0608\x03\x02\x02\x02" +
        "\u0608\u0609\x03\x02\x02\x02\u0609\u060D\x07\xD2\x02\x02\u060A\u060B\t" +
        "\x10\x02\x02\u060B\u060D\x05\xD2j\x02\u060C\u05F7\x03\x02\x02\x02\u060C" +
        "\u05F8\x03\x02\x02\x02\u060C\u05F9\x03\x02\x02\x02\u060C\u0602\x03\x02" +
        "\x02\x02\u060C\u060A\x03\x02\x02\x02\u060D\xD3\x03\x02\x02\x02\u060E\u0613" +
        "\x05\xD6l\x02\u060F\u0610\x07\xD5\x02\x02\u0610\u0612\x05\xD6l\x02\u0611" +
        "\u060F\x03\x02\x02\x02\u0612\u0615\x03\x02\x02\x02\u0613\u0611\x03\x02" +
        "\x02\x02\u0613\u0614\x03\x02\x02\x02\u0614\xD5\x03\x02\x02\x02\u0615\u0613" +
        "\x03\x02\x02\x02\u0616\u0619\x05\xD2j\x02\u0617\u0618\x07\x9F\x02\x02" +
        "\u0618\u061A\x05\xD2j\x02\u0619\u0617\x03\x02\x02\x02\u0619\u061A\x03" +
        "\x02\x02\x02\u061A\xD7\x03\x02\x02\x02\u061B\u0621\x07h\x02\x02\u061C" +
        "\u0621\x05\xDAn\x02\u061D\u0621\x05\u0108\x85\x02\u061E\u0621\x05\xDE" +
        "p\x02\u061F\u0621\x05\xC6d\x02\u0620\u061B\x03\x02\x02\x02\u0620\u061C" +
        "\x03\x02\x02\x02\u0620\u061D\x03\x02\x02\x02\u0620\u061E\x03\x02\x02\x02" +
        "\u0620\u061F\x03\x02\x02\x02\u0621\xD9\x03\x02\x02\x02\u0622\u0627\x07" +
        "\xDF\x02\x02\u0623\u0627\x072\x02\x02\u0624\u0627\x05\xDCo\x02\u0625\u0627" +
        "\x05\xE0q\x02\u0626\u0622\x03\x02\x02\x02\u0626\u0623\x03\x02\x02\x02" +
        "\u0626\u0624\x03\x02\x02\x02\u0626\u0625\x03\x02\x02\x02\u0627\xDB\x03" +
        "\x02\x02\x02\u0628\u0629\t\x11\x02\x02\u0629\xDD\x03\x02\x02\x02\u062A" +
        "\u062B\t\x12\x02\x02\u062B\u0630\x07\xBB\x02\x02\u062C\u0631\x05\u0104" +
        "\x83\x02\u062D\u0631\x07\x88\x02\x02\u062E\u0631\x07\x84\x02\x02\u062F" +
        "\u0631\x07\x85\x02\x02\u0630\u062C\x03\x02\x02\x02\u0630\u062D\x03\x02" +
        "\x02\x02\u0630\u062E\x03\x02\x02\x02\u0630\u062F\x03\x02\x02\x02\u0631" +
        "\u063D\x03\x02\x02\x02\u0632\u0636\x05\xBE`\x02\u0633\u0636\x05\xFA~\x02" +
        "\u0634\u0636\x05\xE2r\x02\u0635\u0632\x03\x02\x02\x02\u0635\u0633\x03" +
        "\x02\x02\x02\u0635\u0634\x03\x02\x02\x02\u0636\u0637\x03\x02\x02\x02\u0637" +
        "\u063A\x07\xBB\x02\x02\u0638\u063B\x05\u0104\x83\x02\u0639\u063B\x05\xFA" +
        "~\x02\u063A\u0638\x03\x02\x02\x02\u063A\u0639\x03\x02\x02\x02\u063B\u063D" +
        "\x03\x02\x02\x02\u063C\u062A\x03\x02\x02\x02\u063C\u0635\x03\x02\x02\x02" +
        "\u063D\xDF\x03\x02\x02\x02\u063E\u063F\x07\xDC\x02\x02\u063F\xE1\x03\x02" +
        "\x02\x02\u0640\u0642\x07\xE6\x02\x02\u0641\u0643\x07\xEE\x02\x02\u0642" +
        "\u0641\x03\x02\x02\x02\u0643\u0644\x03\x02\x02\x02\u0644\u0642\x03\x02" +
        "\x02\x02\u0644\u0645\x03\x02\x02\x02\u0645\u0656\x03\x02\x02\x02\u0646" +
        "\u0648\x07\xE5\x02\x02\u0647\u0649\x07\xEE\x02\x02\u0648\u0647\x03\x02" +
        "\x02\x02\u0649\u064A\x03\x02\x02\x02\u064A\u0648\x03\x02\x02\x02\u064A" +
        "\u064B\x03\x02\x02\x02\u064B\u0656\x03\x02\x02\x02\u064C\u0656\x07\xE3" +
        "\x02\x02\u064D\u0651\x07\xE4\x02\x02\u064E\u0650\x05\xE4s\x02\u064F\u064E" +
        "\x03\x02\x02\x02\u0650\u0653\x03\x02\x02\x02\u0651\u064F\x03\x02\x02\x02" +
        "\u0651\u0652\x03\x02\x02\x02\u0652\u0654\x03\x02\x02\x02\u0653\u0651\x03" +
        "\x02\x02\x02\u0654\u0656\x07\xE4\x02\x02\u0655\u0640\x03\x02\x02\x02\u0655" +
        "\u0646\x03\x02\x02\x02\u0655\u064C\x03\x02\x02\x02\u0655\u064D\x03\x02" +
        "\x02\x02\u0656\xE3";
    PhpParser._serializedATNSegment3 = "\x03\x02\x02\x02\u0657\u065B\x07\xEA\x02\x02\u0658\u065B\x07\xE9\x02\x02" +
        "\u0659\u065B\x05\xE8u\x02\u065A\u0657\x03\x02\x02\x02\u065A\u0658\x03" +
        "\x02\x02\x02\u065A\u0659\x03\x02\x02\x02\u065B\xE5\x03\x02\x02\x02\u065C" +
        "\u0661\x05\xE8u\x02\u065D\u065E\x07\xD5\x02\x02\u065E\u0660\x05\xE8u\x02" +
        "\u065F\u065D\x03\x02\x02\x02\u0660\u0663\x03\x02\x02\x02\u0661\u065F\x03" +
        "\x02\x02\x02\u0661\u0662\x03\x02\x02\x02\u0662\xE7\x03\x02\x02\x02\u0663" +
        "\u0661\x03\x02\x02\x02\u0664\u0668\x05\xEAv\x02\u0665\u0667\x05\xECw\x02" +
        "\u0666\u0665\x03\x02\x02\x02\u0667\u066A\x03\x02\x02\x02\u0668\u0666\x03" +
        "\x02\x02\x02\u0668\u0669\x03\x02\x02\x02\u0669\xE9\x03\x02\x02\x02\u066A" +
        "\u0668\x03\x02\x02\x02\u066B\u0672\x05\xF4{\x02\u066C\u0672\x05\xEEx\x02" +
        "\u066D\u066E\x07\xCF\x02\x02\u066E\u066F\x05\xB0Y\x02\u066F\u0670\x07" +
        "\xD0\x02\x02\u0670\u0672\x03\x02\x02\x02\u0671\u066B\x03\x02\x02\x02\u0671" +
        "\u066C\x03\x02\x02\x02\u0671\u066D\x03\x02\x02\x02\u0672\xEB\x03\x02\x02" +
        "\x02\u0673\u0674\x07\xBC\x02\x02\u0674\u0676\x05\xF6|\x02\u0675\u0677" +
        "\x05\xF2z\x02\u0676\u0675\x03\x02\x02\x02\u0676\u0677\x03\x02\x02\x02" +
        "\u0677\xED\x03\x02\x02\x02\u0678\u0679\x05\xF0y\x02\u0679\u067A\x05\xF2" +
        "z\x02\u067A\xEF\x03\x02\x02\x02\u067B\u0680\x05\xC6d\x02\u067C\u0680\x05" +
        "\xDEp\x02\u067D\u0680\x05\xF4{\x02\u067E\u0680\x05\xA6T\x02\u067F\u067B" +
        "\x03\x02\x02\x02\u067F\u067C\x03\x02\x02\x02\u067F\u067D\x03\x02\x02\x02" +
        "\u067F\u067E\x03\x02\x02\x02\u0680\xF1\x03\x02\x02\x02\u0681\u0683\x05" +
        ".\x18\x02\u0682\u0681\x03\x02\x02\x02\u0682\u0683\x03\x02\x02\x02\u0683" +
        "\u0684\x03\x02\x02\x02\u0684\u0688\x05\xCEh\x02\u0685\u0687\x05\xFC\x7F" +
        "\x02\u0686\u0685\x03\x02\x02\x02\u0687\u068A\x03\x02\x02\x02\u0688\u0686" +
        "\x03\x02\x02\x02\u0688\u0689\x03\x02\x02\x02\u0689\xF3\x03\x02\x02\x02" +
        "\u068A\u0688\x03\x02\x02\x02\u068B\u068E\x05\xFA~\x02\u068C\u068D\x07" +
        "\xBB\x02\x02\u068D\u068F\x05\xFA~\x02\u068E\u068C\x03\x02\x02\x02\u068E" +
        "\u068F\x03\x02\x02\x02\u068F\u0695\x03\x02\x02\x02\u0690\u0691\x05\xBE" +
        "`\x02\u0691\u0692\x07\xBB\x02\x02\u0692\u0693\x05\xFA~\x02\u0693\u0695" +
        "\x03\x02\x02\x02\u0694\u068B\x03\x02\x02\x02\u0694\u0690\x03\x02\x02\x02" +
        "\u0695\xF5\x03\x02\x02\x02\u0696\u0699\x05\xF8}\x02\u0697\u0699\x05\xFA" +
        "~\x02\u0698\u0696\x03\x02\x02\x02\u0698\u0697\x03\x02\x02\x02\u0699\xF7" +
        "\x03\x02\x02\x02\u069A\u06A0\x05\u0104\x83\x02\u069B\u069C\x07\xD3\x02" +
        "\x02\u069C\u069D\x05\xA8U\x02\u069D\u069E\x07\xD4\x02\x02\u069E\u06A0" +
        "\x03\x02\x02\x02\u069F\u069A\x03\x02\x02\x02\u069F\u069B\x03\x02\x02\x02" +
        "\u06A0\u06A4\x03\x02\x02\x02\u06A1\u06A3\x05\xFC\x7F\x02\u06A2\u06A1\x03" +
        "\x02\x02\x02\u06A3\u06A6\x03\x02\x02\x02\u06A4\u06A2\x03\x02\x02\x02\u06A4" +
        "\u06A5\x03\x02\x02\x02\u06A5\xF9\x03\x02\x02\x02\u06A6\u06A4\x03\x02\x02" +
        "\x02\u06A7\u06A9\x07\xCC\x02\x02\u06A8\u06A7\x03\x02\x02\x02\u06A9\u06AC" +
        "\x03\x02\x02\x02\u06AA\u06A8\x03\x02\x02\x02\u06AA\u06AB\x03\x02\x02\x02" +
        "\u06AB\u06B3\x03\x02\x02\x02\u06AC\u06AA\x03\x02\x02\x02\u06AD\u06B4\x07" +
        "\xDB\x02\x02\u06AE\u06AF\x07\xCC\x02\x02\u06AF\u06B0\x07\xD3\x02\x02\u06B0" +
        "\u06B1\x05\xA8U\x02\u06B1\u06B2\x07\xD4\x02\x02\u06B2\u06B4\x03\x02\x02" +
        "\x02\u06B3\u06AD\x03\x02\x02\x02\u06B3\u06AE\x03\x02\x02\x02\u06B4\u06B8" +
        "\x03\x02\x02\x02\u06B5\u06B7\x05\xFC\x7F\x02\u06B6\u06B5\x03\x02\x02\x02" +
        "\u06B7\u06BA\x03\x02\x02\x02\u06B8\u06B6\x03\x02\x02\x02\u06B8\u06B9\x03" +
        "\x02\x02\x02\u06B9\xFB\x03\x02\x02\x02\u06BA\u06B8\x03\x02\x02\x02\u06BB" +
        "\u06BD\x07\xD1\x02\x02\u06BC\u06BE\x05\xA8U\x02\u06BD\u06BC\x03\x02\x02" +
        "\x02\u06BD\u06BE\x03\x02\x02\x02\u06BE\u06BF\x03\x02\x02\x02\u06BF\u06C5" +
        "\x07\xD2\x02\x02\u06C0\u06C1\x07\xD3\x02\x02\u06C1\u06C2\x05\xA8U\x02" +
        "\u06C2\u06C3\x07\xD4\x02\x02\u06C3\u06C5\x03\x02\x02\x02\u06C4\u06BB\x03" +
        "\x02\x02\x02\u06C4\u06C0\x03\x02\x02\x02\u06C5\xFD\x03\x02\x02\x02\u06C6" +
        "\u06C8\x05\u0100\x81\x02\u06C7\u06C6\x03\x02\x02\x02\u06C7\u06C8\x03\x02" +
        "\x02\x02\u06C8\u06CF\x03\x02\x02\x02\u06C9\u06CB\x07\xD5\x02\x02\u06CA" +
        "\u06CC\x05\u0100\x81\x02\u06CB\u06CA\x03\x02\x02\x02\u06CB\u06CC\x03\x02" +
        "\x02\x02\u06CC\u06CE\x03\x02\x02\x02\u06CD\u06C9\x03\x02\x02\x02\u06CE" +
        "\u06D1\x03\x02\x02\x02\u06CF\u06CD\x03\x02\x02\x02\u06CF\u06D0\x03\x02" +
        "\x02\x02\u06D0\xFF\x03\x02\x02\x02\u06D1\u06CF\x03\x02\x02\x02\u06D2\u06DA" +
        "\x05\xE8u\x02\u06D3\u06D4\x07b\x02\x02\u06D4\u06D5\x07\xCF\x02\x02\u06D5" +
        "\u06D6\x05\xFE\x80\x02\u06D6\u06D7\x07\xD0\x02\x02\u06D7\u06DA\x03\x02" +
        "\x02\x02\u06D8\u06DA\x05\xB8]\x02\u06D9\u06D2\x03\x02\x02\x02\u06D9\u06D3" +
        "\x03\x02\x02\x02\u06D9\u06D8\x03\x02\x02\x02\u06DA\u0101\x03\x02\x02\x02" +
        "\u06DB\u06DC\t\x13\x02\x02\u06DC\u0103\x03\x02\x02\x02\u06DD\u06DE\t\x14" +
        "\x02\x02\u06DE\u0105\x03\x02\x02\x02\u06DF\u06E0\t\x15\x02\x02\u06E0\u0107" +
        "\x03\x02\x02\x02\u06E1\u06E2\t\x16\x02\x02\u06E2\u0109\x03\x02\x02\x02" +
        "\u06E3\u06E4\t\x17\x02\x02\u06E4\u010B\x03\x02\x02\x02\u06E5\u06E6\t\x18" +
        "\x02\x02\u06E6\u010D\x03\x02\x02\x02\u06E7\u06E8\t\x19\x02\x02\u06E8\u010F" +
        "\x03\x02\x02\x02\xD7\u0111\u0116\u011E\u0123\u013D\u0141\u0146\u014B\u0151" +
        "\u015E\u0162\u0168\u016D\u0172\u0179\u017F\u0186\u018D\u0192\u0196\u019D" +
        "\u01A0\u01A6\u01A9\u01AC\u01B1\u01B5\u01B9\u01BE\u01C2\u01C4\u01CA\u01D6" +
        "\u01E7\u01EE\u01F6\u0201\u0209\u0211\u0218\u021F\u0236\u023D\u0245\u024F" +
        "\u0255\u0272\u0280\u0284\u028D\u0291\u0296\u02B0\u02BB\u02BF\u02C3\u02CC" +
        "\u02D6\u02DB\u02E1\u02E6\u02EB\u02F0\u02F5\u02FB\u0301\u0307\u0319\u031E" +
        "\u0321\u032B\u032E\u033B\u0343\u034A\u034D\u0352\u0356\u035F\u037B\u0380" +
        "\u0384\u038B\u038F\u0395\u039A\u039D\u03A0\u03A3\u03AA\u03B2\u03BF\u03CB" +
        "\u03D3\u03DA\u03E1\u03E5\u03EC\u03F3\u03F7\u03FB\u0401\u0409\u0410\u0414" +
        "\u0418\u0425\u0428\u042F\u0436\u043A\u043E\u0443\u0448\u0455\u045F\u0465" +
        "\u04A4\u04B4\u04B6\u04DC\u04F2\u04F4\u04F9\u04FE\u0503\u0506\u050C\u050F" +
        "\u0513\u0519\u051D\u0528\u052D\u0535\u0539\u0540\u0544\u0549\u054E\u0552" +
        "\u055B\u0561\u0567\u056A\u056E\u0571\u0576\u057A\u057D\u0580\u0584\u0588" +
        "\u058C\u0591\u0595\u0597\u059D\u05A7\u05AB\u05AE\u05B8\u05BD\u05BF\u05C4" +
        "\u05CC\u05D0\u05D4\u05DB\u05E4\u05E8\u05EB\u05F0\u05F5\u05FD\u05FF\u0605" +
        "\u0607\u060C\u0613\u0619\u0620\u0626\u0630\u0635\u063A\u063C\u0644\u064A" +
        "\u0651\u0655\u065A\u0661\u0668\u0671\u0676\u067F\u0682\u0688\u068E\u0694" +
        "\u0698\u069F\u06A4\u06AA\u06B3\u06B8\u06BD\u06C4\u06C7\u06CB\u06CF\u06D9";
    PhpParser._serializedATN = Utils.join([
        PhpParser._serializedATNSegment0,
        PhpParser._serializedATNSegment1,
        PhpParser._serializedATNSegment2,
        PhpParser._serializedATNSegment3,
    ], "");
    return PhpParser;
}(Parser_1.Parser));
exports.PhpParser = PhpParser;
var HtmlDocumentContext = /** @class */ (function (_super) {
    tslib_1.__extends(HtmlDocumentContext, _super);
    function HtmlDocumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HtmlDocumentContext.prototype.EOF = function () { return this.getToken(PhpParser.EOF, 0); };
    HtmlDocumentContext.prototype.Shebang = function () { return this.tryGetToken(PhpParser.Shebang, 0); };
    HtmlDocumentContext.prototype.htmlElementOrPhpBlock = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(HtmlElementOrPhpBlockContext);
        }
        else {
            return this.getRuleContext(i, HtmlElementOrPhpBlockContext);
        }
    };
    Object.defineProperty(HtmlDocumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_htmlDocument; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HtmlDocumentContext.prototype.enterRule = function (listener) {
        if (listener.enterHtmlDocument) {
            listener.enterHtmlDocument(this);
        }
    };
    // @Override
    HtmlDocumentContext.prototype.exitRule = function (listener) {
        if (listener.exitHtmlDocument) {
            listener.exitHtmlDocument(this);
        }
    };
    // @Override
    HtmlDocumentContext.prototype.accept = function (visitor) {
        if (visitor.visitHtmlDocument) {
            return visitor.visitHtmlDocument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HtmlDocumentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HtmlDocumentContext = HtmlDocumentContext;
var HtmlElementOrPhpBlockContext = /** @class */ (function (_super) {
    tslib_1.__extends(HtmlElementOrPhpBlockContext, _super);
    function HtmlElementOrPhpBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HtmlElementOrPhpBlockContext.prototype.htmlElements = function () {
        return this.tryGetRuleContext(0, HtmlElementsContext);
    };
    HtmlElementOrPhpBlockContext.prototype.phpBlock = function () {
        return this.tryGetRuleContext(0, PhpBlockContext);
    };
    HtmlElementOrPhpBlockContext.prototype.scriptTextPart = function () {
        return this.tryGetRuleContext(0, ScriptTextPartContext);
    };
    Object.defineProperty(HtmlElementOrPhpBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_htmlElementOrPhpBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HtmlElementOrPhpBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterHtmlElementOrPhpBlock) {
            listener.enterHtmlElementOrPhpBlock(this);
        }
    };
    // @Override
    HtmlElementOrPhpBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitHtmlElementOrPhpBlock) {
            listener.exitHtmlElementOrPhpBlock(this);
        }
    };
    // @Override
    HtmlElementOrPhpBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitHtmlElementOrPhpBlock) {
            return visitor.visitHtmlElementOrPhpBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HtmlElementOrPhpBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HtmlElementOrPhpBlockContext = HtmlElementOrPhpBlockContext;
var HtmlElementsContext = /** @class */ (function (_super) {
    tslib_1.__extends(HtmlElementsContext, _super);
    function HtmlElementsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HtmlElementsContext.prototype.htmlElement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(HtmlElementContext);
        }
        else {
            return this.getRuleContext(i, HtmlElementContext);
        }
    };
    Object.defineProperty(HtmlElementsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_htmlElements; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HtmlElementsContext.prototype.enterRule = function (listener) {
        if (listener.enterHtmlElements) {
            listener.enterHtmlElements(this);
        }
    };
    // @Override
    HtmlElementsContext.prototype.exitRule = function (listener) {
        if (listener.exitHtmlElements) {
            listener.exitHtmlElements(this);
        }
    };
    // @Override
    HtmlElementsContext.prototype.accept = function (visitor) {
        if (visitor.visitHtmlElements) {
            return visitor.visitHtmlElements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HtmlElementsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HtmlElementsContext = HtmlElementsContext;
var HtmlElementContext = /** @class */ (function (_super) {
    tslib_1.__extends(HtmlElementContext, _super);
    function HtmlElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HtmlElementContext.prototype.HtmlDtd = function () { return this.tryGetToken(PhpParser.HtmlDtd, 0); };
    HtmlElementContext.prototype.HtmlScriptOpen = function () { return this.tryGetToken(PhpParser.HtmlScriptOpen, 0); };
    HtmlElementContext.prototype.HtmlClose = function () { return this.tryGetToken(PhpParser.HtmlClose, 0); };
    HtmlElementContext.prototype.HtmlStyleOpen = function () { return this.tryGetToken(PhpParser.HtmlStyleOpen, 0); };
    HtmlElementContext.prototype.HtmlOpen = function () { return this.tryGetToken(PhpParser.HtmlOpen, 0); };
    HtmlElementContext.prototype.HtmlName = function () { return this.tryGetToken(PhpParser.HtmlName, 0); };
    HtmlElementContext.prototype.HtmlSlashClose = function () { return this.tryGetToken(PhpParser.HtmlSlashClose, 0); };
    HtmlElementContext.prototype.HtmlSlash = function () { return this.tryGetToken(PhpParser.HtmlSlash, 0); };
    HtmlElementContext.prototype.HtmlText = function () { return this.tryGetToken(PhpParser.HtmlText, 0); };
    HtmlElementContext.prototype.HtmlEquals = function () { return this.tryGetToken(PhpParser.HtmlEquals, 0); };
    HtmlElementContext.prototype.HtmlStartQuoteString = function () { return this.tryGetToken(PhpParser.HtmlStartQuoteString, 0); };
    HtmlElementContext.prototype.HtmlEndQuoteString = function () { return this.tryGetToken(PhpParser.HtmlEndQuoteString, 0); };
    HtmlElementContext.prototype.HtmlStartDoubleQuoteString = function () { return this.tryGetToken(PhpParser.HtmlStartDoubleQuoteString, 0); };
    HtmlElementContext.prototype.HtmlEndDoubleQuoteString = function () { return this.tryGetToken(PhpParser.HtmlEndDoubleQuoteString, 0); };
    HtmlElementContext.prototype.HtmlHex = function () { return this.tryGetToken(PhpParser.HtmlHex, 0); };
    HtmlElementContext.prototype.HtmlDecimal = function () { return this.tryGetToken(PhpParser.HtmlDecimal, 0); };
    HtmlElementContext.prototype.HtmlQuoteString = function () { return this.tryGetToken(PhpParser.HtmlQuoteString, 0); };
    HtmlElementContext.prototype.HtmlDoubleQuoteString = function () { return this.tryGetToken(PhpParser.HtmlDoubleQuoteString, 0); };
    HtmlElementContext.prototype.StyleBody = function () { return this.tryGetToken(PhpParser.StyleBody, 0); };
    HtmlElementContext.prototype.ScriptClose = function () { return this.tryGetToken(PhpParser.ScriptClose, 0); };
    HtmlElementContext.prototype.XmlStart = function () { return this.tryGetToken(PhpParser.XmlStart, 0); };
    HtmlElementContext.prototype.XmlClose = function () { return this.tryGetToken(PhpParser.XmlClose, 0); };
    HtmlElementContext.prototype.XmlText = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.XmlText);
        }
        else {
            return this.getToken(PhpParser.XmlText, i);
        }
    };
    Object.defineProperty(HtmlElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_htmlElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HtmlElementContext.prototype.enterRule = function (listener) {
        if (listener.enterHtmlElement) {
            listener.enterHtmlElement(this);
        }
    };
    // @Override
    HtmlElementContext.prototype.exitRule = function (listener) {
        if (listener.exitHtmlElement) {
            listener.exitHtmlElement(this);
        }
    };
    // @Override
    HtmlElementContext.prototype.accept = function (visitor) {
        if (visitor.visitHtmlElement) {
            return visitor.visitHtmlElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HtmlElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HtmlElementContext = HtmlElementContext;
var ScriptTextPartContext = /** @class */ (function (_super) {
    tslib_1.__extends(ScriptTextPartContext, _super);
    function ScriptTextPartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ScriptTextPartContext.prototype.ScriptText = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.ScriptText);
        }
        else {
            return this.getToken(PhpParser.ScriptText, i);
        }
    };
    Object.defineProperty(ScriptTextPartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_scriptTextPart; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ScriptTextPartContext.prototype.enterRule = function (listener) {
        if (listener.enterScriptTextPart) {
            listener.enterScriptTextPart(this);
        }
    };
    // @Override
    ScriptTextPartContext.prototype.exitRule = function (listener) {
        if (listener.exitScriptTextPart) {
            listener.exitScriptTextPart(this);
        }
    };
    // @Override
    ScriptTextPartContext.prototype.accept = function (visitor) {
        if (visitor.visitScriptTextPart) {
            return visitor.visitScriptTextPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ScriptTextPartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ScriptTextPartContext = ScriptTextPartContext;
var PhpBlockContext = /** @class */ (function (_super) {
    tslib_1.__extends(PhpBlockContext, _super);
    function PhpBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PhpBlockContext.prototype.importStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ImportStatementContext);
        }
        else {
            return this.getRuleContext(i, ImportStatementContext);
        }
    };
    PhpBlockContext.prototype.topStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TopStatementContext);
        }
        else {
            return this.getRuleContext(i, TopStatementContext);
        }
    };
    Object.defineProperty(PhpBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_phpBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PhpBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterPhpBlock) {
            listener.enterPhpBlock(this);
        }
    };
    // @Override
    PhpBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitPhpBlock) {
            listener.exitPhpBlock(this);
        }
    };
    // @Override
    PhpBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitPhpBlock) {
            return visitor.visitPhpBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PhpBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PhpBlockContext = PhpBlockContext;
var ImportStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(ImportStatementContext, _super);
    function ImportStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportStatementContext.prototype.Import = function () { return this.getToken(PhpParser.Import, 0); };
    ImportStatementContext.prototype.Namespace = function () { return this.getToken(PhpParser.Namespace, 0); };
    ImportStatementContext.prototype.namespaceNameList = function () {
        return this.getRuleContext(0, NamespaceNameListContext);
    };
    ImportStatementContext.prototype.SemiColon = function () { return this.getToken(PhpParser.SemiColon, 0); };
    Object.defineProperty(ImportStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_importStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImportStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterImportStatement) {
            listener.enterImportStatement(this);
        }
    };
    // @Override
    ImportStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitImportStatement) {
            listener.exitImportStatement(this);
        }
    };
    // @Override
    ImportStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitImportStatement) {
            return visitor.visitImportStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportStatementContext = ImportStatementContext;
var TopStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(TopStatementContext, _super);
    function TopStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TopStatementContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    TopStatementContext.prototype.useDeclaration = function () {
        return this.tryGetRuleContext(0, UseDeclarationContext);
    };
    TopStatementContext.prototype.namespaceDeclaration = function () {
        return this.tryGetRuleContext(0, NamespaceDeclarationContext);
    };
    TopStatementContext.prototype.functionDeclaration = function () {
        return this.tryGetRuleContext(0, FunctionDeclarationContext);
    };
    TopStatementContext.prototype.classDeclaration = function () {
        return this.tryGetRuleContext(0, ClassDeclarationContext);
    };
    TopStatementContext.prototype.globalConstantDeclaration = function () {
        return this.tryGetRuleContext(0, GlobalConstantDeclarationContext);
    };
    Object.defineProperty(TopStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_topStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TopStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterTopStatement) {
            listener.enterTopStatement(this);
        }
    };
    // @Override
    TopStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitTopStatement) {
            listener.exitTopStatement(this);
        }
    };
    // @Override
    TopStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitTopStatement) {
            return visitor.visitTopStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TopStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TopStatementContext = TopStatementContext;
var UseDeclarationContext = /** @class */ (function (_super) {
    tslib_1.__extends(UseDeclarationContext, _super);
    function UseDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UseDeclarationContext.prototype.Use = function () { return this.getToken(PhpParser.Use, 0); };
    UseDeclarationContext.prototype.useDeclarationContentList = function () {
        return this.getRuleContext(0, UseDeclarationContentListContext);
    };
    UseDeclarationContext.prototype.SemiColon = function () { return this.getToken(PhpParser.SemiColon, 0); };
    UseDeclarationContext.prototype.Function = function () { return this.tryGetToken(PhpParser.Function, 0); };
    UseDeclarationContext.prototype.Const = function () { return this.tryGetToken(PhpParser.Const, 0); };
    Object.defineProperty(UseDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_useDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UseDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterUseDeclaration) {
            listener.enterUseDeclaration(this);
        }
    };
    // @Override
    UseDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitUseDeclaration) {
            listener.exitUseDeclaration(this);
        }
    };
    // @Override
    UseDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitUseDeclaration) {
            return visitor.visitUseDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UseDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UseDeclarationContext = UseDeclarationContext;
var UseDeclarationContentListContext = /** @class */ (function (_super) {
    tslib_1.__extends(UseDeclarationContentListContext, _super);
    function UseDeclarationContentListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UseDeclarationContentListContext.prototype.useDeclarationContent = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(UseDeclarationContentContext);
        }
        else {
            return this.getRuleContext(i, UseDeclarationContentContext);
        }
    };
    UseDeclarationContentListContext.prototype.NamespaceSeparator = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.NamespaceSeparator);
        }
        else {
            return this.getToken(PhpParser.NamespaceSeparator, i);
        }
    };
    UseDeclarationContentListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.Comma);
        }
        else {
            return this.getToken(PhpParser.Comma, i);
        }
    };
    Object.defineProperty(UseDeclarationContentListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_useDeclarationContentList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UseDeclarationContentListContext.prototype.enterRule = function (listener) {
        if (listener.enterUseDeclarationContentList) {
            listener.enterUseDeclarationContentList(this);
        }
    };
    // @Override
    UseDeclarationContentListContext.prototype.exitRule = function (listener) {
        if (listener.exitUseDeclarationContentList) {
            listener.exitUseDeclarationContentList(this);
        }
    };
    // @Override
    UseDeclarationContentListContext.prototype.accept = function (visitor) {
        if (visitor.visitUseDeclarationContentList) {
            return visitor.visitUseDeclarationContentList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UseDeclarationContentListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UseDeclarationContentListContext = UseDeclarationContentListContext;
var UseDeclarationContentContext = /** @class */ (function (_super) {
    tslib_1.__extends(UseDeclarationContentContext, _super);
    function UseDeclarationContentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UseDeclarationContentContext.prototype.namespaceNameList = function () {
        return this.getRuleContext(0, NamespaceNameListContext);
    };
    Object.defineProperty(UseDeclarationContentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_useDeclarationContent; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UseDeclarationContentContext.prototype.enterRule = function (listener) {
        if (listener.enterUseDeclarationContent) {
            listener.enterUseDeclarationContent(this);
        }
    };
    // @Override
    UseDeclarationContentContext.prototype.exitRule = function (listener) {
        if (listener.exitUseDeclarationContent) {
            listener.exitUseDeclarationContent(this);
        }
    };
    // @Override
    UseDeclarationContentContext.prototype.accept = function (visitor) {
        if (visitor.visitUseDeclarationContent) {
            return visitor.visitUseDeclarationContent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UseDeclarationContentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UseDeclarationContentContext = UseDeclarationContentContext;
var NamespaceDeclarationContext = /** @class */ (function (_super) {
    tslib_1.__extends(NamespaceDeclarationContext, _super);
    function NamespaceDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamespaceDeclarationContext.prototype.Namespace = function () { return this.getToken(PhpParser.Namespace, 0); };
    NamespaceDeclarationContext.prototype.OpenCurlyBracket = function () { return this.tryGetToken(PhpParser.OpenCurlyBracket, 0); };
    NamespaceDeclarationContext.prototype.CloseCurlyBracket = function () { return this.tryGetToken(PhpParser.CloseCurlyBracket, 0); };
    NamespaceDeclarationContext.prototype.namespaceNameList = function () {
        return this.tryGetRuleContext(0, NamespaceNameListContext);
    };
    NamespaceDeclarationContext.prototype.SemiColon = function () { return this.tryGetToken(PhpParser.SemiColon, 0); };
    NamespaceDeclarationContext.prototype.namespaceStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NamespaceStatementContext);
        }
        else {
            return this.getRuleContext(i, NamespaceStatementContext);
        }
    };
    Object.defineProperty(NamespaceDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_namespaceDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NamespaceDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterNamespaceDeclaration) {
            listener.enterNamespaceDeclaration(this);
        }
    };
    // @Override
    NamespaceDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitNamespaceDeclaration) {
            listener.exitNamespaceDeclaration(this);
        }
    };
    // @Override
    NamespaceDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitNamespaceDeclaration) {
            return visitor.visitNamespaceDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NamespaceDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NamespaceDeclarationContext = NamespaceDeclarationContext;
var NamespaceStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(NamespaceStatementContext, _super);
    function NamespaceStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamespaceStatementContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    NamespaceStatementContext.prototype.useDeclaration = function () {
        return this.tryGetRuleContext(0, UseDeclarationContext);
    };
    NamespaceStatementContext.prototype.functionDeclaration = function () {
        return this.tryGetRuleContext(0, FunctionDeclarationContext);
    };
    NamespaceStatementContext.prototype.classDeclaration = function () {
        return this.tryGetRuleContext(0, ClassDeclarationContext);
    };
    NamespaceStatementContext.prototype.globalConstantDeclaration = function () {
        return this.tryGetRuleContext(0, GlobalConstantDeclarationContext);
    };
    Object.defineProperty(NamespaceStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_namespaceStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NamespaceStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterNamespaceStatement) {
            listener.enterNamespaceStatement(this);
        }
    };
    // @Override
    NamespaceStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitNamespaceStatement) {
            listener.exitNamespaceStatement(this);
        }
    };
    // @Override
    NamespaceStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitNamespaceStatement) {
            return visitor.visitNamespaceStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NamespaceStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NamespaceStatementContext = NamespaceStatementContext;
var FunctionDeclarationContext = /** @class */ (function (_super) {
    tslib_1.__extends(FunctionDeclarationContext, _super);
    function FunctionDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionDeclarationContext.prototype.attributes = function () {
        return this.getRuleContext(0, AttributesContext);
    };
    FunctionDeclarationContext.prototype.Function = function () { return this.getToken(PhpParser.Function, 0); };
    FunctionDeclarationContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    FunctionDeclarationContext.prototype.OpenRoundBracket = function () { return this.getToken(PhpParser.OpenRoundBracket, 0); };
    FunctionDeclarationContext.prototype.formalParameterList = function () {
        return this.getRuleContext(0, FormalParameterListContext);
    };
    FunctionDeclarationContext.prototype.CloseRoundBracket = function () { return this.getToken(PhpParser.CloseRoundBracket, 0); };
    FunctionDeclarationContext.prototype.blockStatement = function () {
        return this.getRuleContext(0, BlockStatementContext);
    };
    FunctionDeclarationContext.prototype.Ampersand = function () { return this.tryGetToken(PhpParser.Ampersand, 0); };
    FunctionDeclarationContext.prototype.typeParameterListInBrackets = function () {
        return this.tryGetRuleContext(0, TypeParameterListInBracketsContext);
    };
    FunctionDeclarationContext.prototype.Colon = function () { return this.tryGetToken(PhpParser.Colon, 0); };
    FunctionDeclarationContext.prototype.typeHint = function () {
        return this.tryGetRuleContext(0, TypeHintContext);
    };
    FunctionDeclarationContext.prototype.QuestionMark = function () { return this.tryGetToken(PhpParser.QuestionMark, 0); };
    Object.defineProperty(FunctionDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_functionDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionDeclaration) {
            listener.enterFunctionDeclaration(this);
        }
    };
    // @Override
    FunctionDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionDeclaration) {
            listener.exitFunctionDeclaration(this);
        }
    };
    // @Override
    FunctionDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionDeclaration) {
            return visitor.visitFunctionDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionDeclarationContext = FunctionDeclarationContext;
var ClassDeclarationContext = /** @class */ (function (_super) {
    tslib_1.__extends(ClassDeclarationContext, _super);
    function ClassDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassDeclarationContext.prototype.attributes = function () {
        return this.getRuleContext(0, AttributesContext);
    };
    ClassDeclarationContext.prototype.OpenCurlyBracket = function () { return this.getToken(PhpParser.OpenCurlyBracket, 0); };
    ClassDeclarationContext.prototype.CloseCurlyBracket = function () { return this.getToken(PhpParser.CloseCurlyBracket, 0); };
    ClassDeclarationContext.prototype.classEntryType = function () {
        return this.tryGetRuleContext(0, ClassEntryTypeContext);
    };
    ClassDeclarationContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    ClassDeclarationContext.prototype.Interface = function () { return this.tryGetToken(PhpParser.Interface, 0); };
    ClassDeclarationContext.prototype.Private = function () { return this.tryGetToken(PhpParser.Private, 0); };
    ClassDeclarationContext.prototype.modifier = function () {
        return this.tryGetRuleContext(0, ModifierContext);
    };
    ClassDeclarationContext.prototype.Partial = function () { return this.tryGetToken(PhpParser.Partial, 0); };
    ClassDeclarationContext.prototype.classStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassStatementContext);
        }
        else {
            return this.getRuleContext(i, ClassStatementContext);
        }
    };
    ClassDeclarationContext.prototype.typeParameterListInBrackets = function () {
        return this.tryGetRuleContext(0, TypeParameterListInBracketsContext);
    };
    ClassDeclarationContext.prototype.Extends = function () { return this.tryGetToken(PhpParser.Extends, 0); };
    ClassDeclarationContext.prototype.qualifiedStaticTypeRef = function () {
        return this.tryGetRuleContext(0, QualifiedStaticTypeRefContext);
    };
    ClassDeclarationContext.prototype.Implements = function () { return this.tryGetToken(PhpParser.Implements, 0); };
    ClassDeclarationContext.prototype.interfaceList = function () {
        return this.tryGetRuleContext(0, InterfaceListContext);
    };
    Object.defineProperty(ClassDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_classDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterClassDeclaration) {
            listener.enterClassDeclaration(this);
        }
    };
    // @Override
    ClassDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitClassDeclaration) {
            listener.exitClassDeclaration(this);
        }
    };
    // @Override
    ClassDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitClassDeclaration) {
            return visitor.visitClassDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassDeclarationContext = ClassDeclarationContext;
var ClassEntryTypeContext = /** @class */ (function (_super) {
    tslib_1.__extends(ClassEntryTypeContext, _super);
    function ClassEntryTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassEntryTypeContext.prototype.Class = function () { return this.tryGetToken(PhpParser.Class, 0); };
    ClassEntryTypeContext.prototype.Trait = function () { return this.tryGetToken(PhpParser.Trait, 0); };
    Object.defineProperty(ClassEntryTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_classEntryType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassEntryTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterClassEntryType) {
            listener.enterClassEntryType(this);
        }
    };
    // @Override
    ClassEntryTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitClassEntryType) {
            listener.exitClassEntryType(this);
        }
    };
    // @Override
    ClassEntryTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitClassEntryType) {
            return visitor.visitClassEntryType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassEntryTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassEntryTypeContext = ClassEntryTypeContext;
var InterfaceListContext = /** @class */ (function (_super) {
    tslib_1.__extends(InterfaceListContext, _super);
    function InterfaceListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InterfaceListContext.prototype.qualifiedStaticTypeRef = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(QualifiedStaticTypeRefContext);
        }
        else {
            return this.getRuleContext(i, QualifiedStaticTypeRefContext);
        }
    };
    InterfaceListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.Comma);
        }
        else {
            return this.getToken(PhpParser.Comma, i);
        }
    };
    Object.defineProperty(InterfaceListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_interfaceList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InterfaceListContext.prototype.enterRule = function (listener) {
        if (listener.enterInterfaceList) {
            listener.enterInterfaceList(this);
        }
    };
    // @Override
    InterfaceListContext.prototype.exitRule = function (listener) {
        if (listener.exitInterfaceList) {
            listener.exitInterfaceList(this);
        }
    };
    // @Override
    InterfaceListContext.prototype.accept = function (visitor) {
        if (visitor.visitInterfaceList) {
            return visitor.visitInterfaceList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InterfaceListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InterfaceListContext = InterfaceListContext;
var TypeParameterListInBracketsContext = /** @class */ (function (_super) {
    tslib_1.__extends(TypeParameterListInBracketsContext, _super);
    function TypeParameterListInBracketsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeParameterListInBracketsContext.prototype.Lgeneric = function () { return this.getToken(PhpParser.Lgeneric, 0); };
    TypeParameterListInBracketsContext.prototype.typeParameterList = function () {
        return this.tryGetRuleContext(0, TypeParameterListContext);
    };
    TypeParameterListInBracketsContext.prototype.Rgeneric = function () { return this.getToken(PhpParser.Rgeneric, 0); };
    TypeParameterListInBracketsContext.prototype.typeParameterWithDefaultsList = function () {
        return this.tryGetRuleContext(0, TypeParameterWithDefaultsListContext);
    };
    TypeParameterListInBracketsContext.prototype.Comma = function () { return this.tryGetToken(PhpParser.Comma, 0); };
    Object.defineProperty(TypeParameterListInBracketsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_typeParameterListInBrackets; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeParameterListInBracketsContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeParameterListInBrackets) {
            listener.enterTypeParameterListInBrackets(this);
        }
    };
    // @Override
    TypeParameterListInBracketsContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeParameterListInBrackets) {
            listener.exitTypeParameterListInBrackets(this);
        }
    };
    // @Override
    TypeParameterListInBracketsContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeParameterListInBrackets) {
            return visitor.visitTypeParameterListInBrackets(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeParameterListInBracketsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeParameterListInBracketsContext = TypeParameterListInBracketsContext;
var TypeParameterListContext = /** @class */ (function (_super) {
    tslib_1.__extends(TypeParameterListContext, _super);
    function TypeParameterListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeParameterListContext.prototype.typeParameterDecl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeParameterDeclContext);
        }
        else {
            return this.getRuleContext(i, TypeParameterDeclContext);
        }
    };
    TypeParameterListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.Comma);
        }
        else {
            return this.getToken(PhpParser.Comma, i);
        }
    };
    Object.defineProperty(TypeParameterListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_typeParameterList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeParameterListContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeParameterList) {
            listener.enterTypeParameterList(this);
        }
    };
    // @Override
    TypeParameterListContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeParameterList) {
            listener.exitTypeParameterList(this);
        }
    };
    // @Override
    TypeParameterListContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeParameterList) {
            return visitor.visitTypeParameterList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeParameterListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeParameterListContext = TypeParameterListContext;
var TypeParameterWithDefaultsListContext = /** @class */ (function (_super) {
    tslib_1.__extends(TypeParameterWithDefaultsListContext, _super);
    function TypeParameterWithDefaultsListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeParameterWithDefaultsListContext.prototype.typeParameterWithDefaultDecl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeParameterWithDefaultDeclContext);
        }
        else {
            return this.getRuleContext(i, TypeParameterWithDefaultDeclContext);
        }
    };
    TypeParameterWithDefaultsListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.Comma);
        }
        else {
            return this.getToken(PhpParser.Comma, i);
        }
    };
    Object.defineProperty(TypeParameterWithDefaultsListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_typeParameterWithDefaultsList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeParameterWithDefaultsListContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeParameterWithDefaultsList) {
            listener.enterTypeParameterWithDefaultsList(this);
        }
    };
    // @Override
    TypeParameterWithDefaultsListContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeParameterWithDefaultsList) {
            listener.exitTypeParameterWithDefaultsList(this);
        }
    };
    // @Override
    TypeParameterWithDefaultsListContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeParameterWithDefaultsList) {
            return visitor.visitTypeParameterWithDefaultsList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeParameterWithDefaultsListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeParameterWithDefaultsListContext = TypeParameterWithDefaultsListContext;
var TypeParameterDeclContext = /** @class */ (function (_super) {
    tslib_1.__extends(TypeParameterDeclContext, _super);
    function TypeParameterDeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeParameterDeclContext.prototype.attributes = function () {
        return this.getRuleContext(0, AttributesContext);
    };
    TypeParameterDeclContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(TypeParameterDeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_typeParameterDecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeParameterDeclContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeParameterDecl) {
            listener.enterTypeParameterDecl(this);
        }
    };
    // @Override
    TypeParameterDeclContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeParameterDecl) {
            listener.exitTypeParameterDecl(this);
        }
    };
    // @Override
    TypeParameterDeclContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeParameterDecl) {
            return visitor.visitTypeParameterDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeParameterDeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeParameterDeclContext = TypeParameterDeclContext;
var TypeParameterWithDefaultDeclContext = /** @class */ (function (_super) {
    tslib_1.__extends(TypeParameterWithDefaultDeclContext, _super);
    function TypeParameterWithDefaultDeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeParameterWithDefaultDeclContext.prototype.attributes = function () {
        return this.getRuleContext(0, AttributesContext);
    };
    TypeParameterWithDefaultDeclContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    TypeParameterWithDefaultDeclContext.prototype.Eq = function () { return this.getToken(PhpParser.Eq, 0); };
    TypeParameterWithDefaultDeclContext.prototype.qualifiedStaticTypeRef = function () {
        return this.tryGetRuleContext(0, QualifiedStaticTypeRefContext);
    };
    TypeParameterWithDefaultDeclContext.prototype.primitiveType = function () {
        return this.tryGetRuleContext(0, PrimitiveTypeContext);
    };
    Object.defineProperty(TypeParameterWithDefaultDeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_typeParameterWithDefaultDecl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeParameterWithDefaultDeclContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeParameterWithDefaultDecl) {
            listener.enterTypeParameterWithDefaultDecl(this);
        }
    };
    // @Override
    TypeParameterWithDefaultDeclContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeParameterWithDefaultDecl) {
            listener.exitTypeParameterWithDefaultDecl(this);
        }
    };
    // @Override
    TypeParameterWithDefaultDeclContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeParameterWithDefaultDecl) {
            return visitor.visitTypeParameterWithDefaultDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeParameterWithDefaultDeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeParameterWithDefaultDeclContext = TypeParameterWithDefaultDeclContext;
var GenericDynamicArgsContext = /** @class */ (function (_super) {
    tslib_1.__extends(GenericDynamicArgsContext, _super);
    function GenericDynamicArgsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GenericDynamicArgsContext.prototype.Lgeneric = function () { return this.getToken(PhpParser.Lgeneric, 0); };
    GenericDynamicArgsContext.prototype.typeRef = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeRefContext);
        }
        else {
            return this.getRuleContext(i, TypeRefContext);
        }
    };
    GenericDynamicArgsContext.prototype.Rgeneric = function () { return this.getToken(PhpParser.Rgeneric, 0); };
    GenericDynamicArgsContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.Comma);
        }
        else {
            return this.getToken(PhpParser.Comma, i);
        }
    };
    Object.defineProperty(GenericDynamicArgsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_genericDynamicArgs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GenericDynamicArgsContext.prototype.enterRule = function (listener) {
        if (listener.enterGenericDynamicArgs) {
            listener.enterGenericDynamicArgs(this);
        }
    };
    // @Override
    GenericDynamicArgsContext.prototype.exitRule = function (listener) {
        if (listener.exitGenericDynamicArgs) {
            listener.exitGenericDynamicArgs(this);
        }
    };
    // @Override
    GenericDynamicArgsContext.prototype.accept = function (visitor) {
        if (visitor.visitGenericDynamicArgs) {
            return visitor.visitGenericDynamicArgs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GenericDynamicArgsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GenericDynamicArgsContext = GenericDynamicArgsContext;
var AttributesContext = /** @class */ (function (_super) {
    tslib_1.__extends(AttributesContext, _super);
    function AttributesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttributesContext.prototype.attributesGroup = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AttributesGroupContext);
        }
        else {
            return this.getRuleContext(i, AttributesGroupContext);
        }
    };
    Object.defineProperty(AttributesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_attributes; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AttributesContext.prototype.enterRule = function (listener) {
        if (listener.enterAttributes) {
            listener.enterAttributes(this);
        }
    };
    // @Override
    AttributesContext.prototype.exitRule = function (listener) {
        if (listener.exitAttributes) {
            listener.exitAttributes(this);
        }
    };
    // @Override
    AttributesContext.prototype.accept = function (visitor) {
        if (visitor.visitAttributes) {
            return visitor.visitAttributes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AttributesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AttributesContext = AttributesContext;
var AttributesGroupContext = /** @class */ (function (_super) {
    tslib_1.__extends(AttributesGroupContext, _super);
    function AttributesGroupContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttributesGroupContext.prototype.OpenSquareBracket = function () { return this.getToken(PhpParser.OpenSquareBracket, 0); };
    AttributesGroupContext.prototype.attribute = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AttributeContext);
        }
        else {
            return this.getRuleContext(i, AttributeContext);
        }
    };
    AttributesGroupContext.prototype.CloseSquareBracket = function () { return this.getToken(PhpParser.CloseSquareBracket, 0); };
    AttributesGroupContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    AttributesGroupContext.prototype.Colon = function () { return this.tryGetToken(PhpParser.Colon, 0); };
    AttributesGroupContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.Comma);
        }
        else {
            return this.getToken(PhpParser.Comma, i);
        }
    };
    Object.defineProperty(AttributesGroupContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_attributesGroup; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AttributesGroupContext.prototype.enterRule = function (listener) {
        if (listener.enterAttributesGroup) {
            listener.enterAttributesGroup(this);
        }
    };
    // @Override
    AttributesGroupContext.prototype.exitRule = function (listener) {
        if (listener.exitAttributesGroup) {
            listener.exitAttributesGroup(this);
        }
    };
    // @Override
    AttributesGroupContext.prototype.accept = function (visitor) {
        if (visitor.visitAttributesGroup) {
            return visitor.visitAttributesGroup(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AttributesGroupContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AttributesGroupContext = AttributesGroupContext;
var AttributeContext = /** @class */ (function (_super) {
    tslib_1.__extends(AttributeContext, _super);
    function AttributeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttributeContext.prototype.qualifiedNamespaceName = function () {
        return this.getRuleContext(0, QualifiedNamespaceNameContext);
    };
    AttributeContext.prototype.OpenRoundBracket = function () { return this.tryGetToken(PhpParser.OpenRoundBracket, 0); };
    AttributeContext.prototype.attributeArgList = function () {
        return this.tryGetRuleContext(0, AttributeArgListContext);
    };
    AttributeContext.prototype.CloseRoundBracket = function () { return this.tryGetToken(PhpParser.CloseRoundBracket, 0); };
    AttributeContext.prototype.attributeNamedArgList = function () {
        return this.tryGetRuleContext(0, AttributeNamedArgListContext);
    };
    AttributeContext.prototype.Comma = function () { return this.tryGetToken(PhpParser.Comma, 0); };
    Object.defineProperty(AttributeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_attribute; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AttributeContext.prototype.enterRule = function (listener) {
        if (listener.enterAttribute) {
            listener.enterAttribute(this);
        }
    };
    // @Override
    AttributeContext.prototype.exitRule = function (listener) {
        if (listener.exitAttribute) {
            listener.exitAttribute(this);
        }
    };
    // @Override
    AttributeContext.prototype.accept = function (visitor) {
        if (visitor.visitAttribute) {
            return visitor.visitAttribute(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AttributeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AttributeContext = AttributeContext;
var AttributeArgListContext = /** @class */ (function (_super) {
    tslib_1.__extends(AttributeArgListContext, _super);
    function AttributeArgListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttributeArgListContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    AttributeArgListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.Comma);
        }
        else {
            return this.getToken(PhpParser.Comma, i);
        }
    };
    Object.defineProperty(AttributeArgListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_attributeArgList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AttributeArgListContext.prototype.enterRule = function (listener) {
        if (listener.enterAttributeArgList) {
            listener.enterAttributeArgList(this);
        }
    };
    // @Override
    AttributeArgListContext.prototype.exitRule = function (listener) {
        if (listener.exitAttributeArgList) {
            listener.exitAttributeArgList(this);
        }
    };
    // @Override
    AttributeArgListContext.prototype.accept = function (visitor) {
        if (visitor.visitAttributeArgList) {
            return visitor.visitAttributeArgList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AttributeArgListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AttributeArgListContext = AttributeArgListContext;
var AttributeNamedArgListContext = /** @class */ (function (_super) {
    tslib_1.__extends(AttributeNamedArgListContext, _super);
    function AttributeNamedArgListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttributeNamedArgListContext.prototype.attributeNamedArg = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AttributeNamedArgContext);
        }
        else {
            return this.getRuleContext(i, AttributeNamedArgContext);
        }
    };
    AttributeNamedArgListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.Comma);
        }
        else {
            return this.getToken(PhpParser.Comma, i);
        }
    };
    Object.defineProperty(AttributeNamedArgListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_attributeNamedArgList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AttributeNamedArgListContext.prototype.enterRule = function (listener) {
        if (listener.enterAttributeNamedArgList) {
            listener.enterAttributeNamedArgList(this);
        }
    };
    // @Override
    AttributeNamedArgListContext.prototype.exitRule = function (listener) {
        if (listener.exitAttributeNamedArgList) {
            listener.exitAttributeNamedArgList(this);
        }
    };
    // @Override
    AttributeNamedArgListContext.prototype.accept = function (visitor) {
        if (visitor.visitAttributeNamedArgList) {
            return visitor.visitAttributeNamedArgList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AttributeNamedArgListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AttributeNamedArgListContext = AttributeNamedArgListContext;
var AttributeNamedArgContext = /** @class */ (function (_super) {
    tslib_1.__extends(AttributeNamedArgContext, _super);
    function AttributeNamedArgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttributeNamedArgContext.prototype.VarName = function () { return this.getToken(PhpParser.VarName, 0); };
    AttributeNamedArgContext.prototype.DoubleArrow = function () { return this.getToken(PhpParser.DoubleArrow, 0); };
    AttributeNamedArgContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(AttributeNamedArgContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_attributeNamedArg; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AttributeNamedArgContext.prototype.enterRule = function (listener) {
        if (listener.enterAttributeNamedArg) {
            listener.enterAttributeNamedArg(this);
        }
    };
    // @Override
    AttributeNamedArgContext.prototype.exitRule = function (listener) {
        if (listener.exitAttributeNamedArg) {
            listener.exitAttributeNamedArg(this);
        }
    };
    // @Override
    AttributeNamedArgContext.prototype.accept = function (visitor) {
        if (visitor.visitAttributeNamedArg) {
            return visitor.visitAttributeNamedArg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AttributeNamedArgContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AttributeNamedArgContext = AttributeNamedArgContext;
var InnerStatementListContext = /** @class */ (function (_super) {
    tslib_1.__extends(InnerStatementListContext, _super);
    function InnerStatementListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InnerStatementListContext.prototype.innerStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(InnerStatementContext);
        }
        else {
            return this.getRuleContext(i, InnerStatementContext);
        }
    };
    Object.defineProperty(InnerStatementListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_innerStatementList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InnerStatementListContext.prototype.enterRule = function (listener) {
        if (listener.enterInnerStatementList) {
            listener.enterInnerStatementList(this);
        }
    };
    // @Override
    InnerStatementListContext.prototype.exitRule = function (listener) {
        if (listener.exitInnerStatementList) {
            listener.exitInnerStatementList(this);
        }
    };
    // @Override
    InnerStatementListContext.prototype.accept = function (visitor) {
        if (visitor.visitInnerStatementList) {
            return visitor.visitInnerStatementList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InnerStatementListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InnerStatementListContext = InnerStatementListContext;
var InnerStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(InnerStatementContext, _super);
    function InnerStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InnerStatementContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    InnerStatementContext.prototype.functionDeclaration = function () {
        return this.tryGetRuleContext(0, FunctionDeclarationContext);
    };
    InnerStatementContext.prototype.classDeclaration = function () {
        return this.tryGetRuleContext(0, ClassDeclarationContext);
    };
    Object.defineProperty(InnerStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_innerStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InnerStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterInnerStatement) {
            listener.enterInnerStatement(this);
        }
    };
    // @Override
    InnerStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitInnerStatement) {
            listener.exitInnerStatement(this);
        }
    };
    // @Override
    InnerStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitInnerStatement) {
            return visitor.visitInnerStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InnerStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InnerStatementContext = InnerStatementContext;
var StatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    StatementContext.prototype.Colon = function () { return this.tryGetToken(PhpParser.Colon, 0); };
    StatementContext.prototype.blockStatement = function () {
        return this.tryGetRuleContext(0, BlockStatementContext);
    };
    StatementContext.prototype.ifStatement = function () {
        return this.tryGetRuleContext(0, IfStatementContext);
    };
    StatementContext.prototype.whileStatement = function () {
        return this.tryGetRuleContext(0, WhileStatementContext);
    };
    StatementContext.prototype.doWhileStatement = function () {
        return this.tryGetRuleContext(0, DoWhileStatementContext);
    };
    StatementContext.prototype.forStatement = function () {
        return this.tryGetRuleContext(0, ForStatementContext);
    };
    StatementContext.prototype.switchStatement = function () {
        return this.tryGetRuleContext(0, SwitchStatementContext);
    };
    StatementContext.prototype.breakStatement = function () {
        return this.tryGetRuleContext(0, BreakStatementContext);
    };
    StatementContext.prototype.continueStatement = function () {
        return this.tryGetRuleContext(0, ContinueStatementContext);
    };
    StatementContext.prototype.returnStatement = function () {
        return this.tryGetRuleContext(0, ReturnStatementContext);
    };
    StatementContext.prototype.yieldExpression = function () {
        return this.tryGetRuleContext(0, YieldExpressionContext);
    };
    StatementContext.prototype.SemiColon = function () { return this.tryGetToken(PhpParser.SemiColon, 0); };
    StatementContext.prototype.globalStatement = function () {
        return this.tryGetRuleContext(0, GlobalStatementContext);
    };
    StatementContext.prototype.staticVariableStatement = function () {
        return this.tryGetRuleContext(0, StaticVariableStatementContext);
    };
    StatementContext.prototype.echoStatement = function () {
        return this.tryGetRuleContext(0, EchoStatementContext);
    };
    StatementContext.prototype.expressionStatement = function () {
        return this.tryGetRuleContext(0, ExpressionStatementContext);
    };
    StatementContext.prototype.unsetStatement = function () {
        return this.tryGetRuleContext(0, UnsetStatementContext);
    };
    StatementContext.prototype.foreachStatement = function () {
        return this.tryGetRuleContext(0, ForeachStatementContext);
    };
    StatementContext.prototype.tryCatchFinally = function () {
        return this.tryGetRuleContext(0, TryCatchFinallyContext);
    };
    StatementContext.prototype.throwStatement = function () {
        return this.tryGetRuleContext(0, ThrowStatementContext);
    };
    StatementContext.prototype.gotoStatement = function () {
        return this.tryGetRuleContext(0, GotoStatementContext);
    };
    StatementContext.prototype.declareStatement = function () {
        return this.tryGetRuleContext(0, DeclareStatementContext);
    };
    StatementContext.prototype.emptyStatement = function () {
        return this.tryGetRuleContext(0, EmptyStatementContext);
    };
    StatementContext.prototype.inlineHtmlStatement = function () {
        return this.tryGetRuleContext(0, InlineHtmlStatementContext);
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StatementContext.prototype.enterRule = function (listener) {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    };
    // @Override
    StatementContext.prototype.exitRule = function (listener) {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    };
    // @Override
    StatementContext.prototype.accept = function (visitor) {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StatementContext = StatementContext;
var EmptyStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(EmptyStatementContext, _super);
    function EmptyStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EmptyStatementContext.prototype.SemiColon = function () { return this.getToken(PhpParser.SemiColon, 0); };
    Object.defineProperty(EmptyStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_emptyStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EmptyStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterEmptyStatement) {
            listener.enterEmptyStatement(this);
        }
    };
    // @Override
    EmptyStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitEmptyStatement) {
            listener.exitEmptyStatement(this);
        }
    };
    // @Override
    EmptyStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitEmptyStatement) {
            return visitor.visitEmptyStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EmptyStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EmptyStatementContext = EmptyStatementContext;
var BlockStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(BlockStatementContext, _super);
    function BlockStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockStatementContext.prototype.OpenCurlyBracket = function () { return this.getToken(PhpParser.OpenCurlyBracket, 0); };
    BlockStatementContext.prototype.innerStatementList = function () {
        return this.getRuleContext(0, InnerStatementListContext);
    };
    BlockStatementContext.prototype.CloseCurlyBracket = function () { return this.getToken(PhpParser.CloseCurlyBracket, 0); };
    Object.defineProperty(BlockStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_blockStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BlockStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterBlockStatement) {
            listener.enterBlockStatement(this);
        }
    };
    // @Override
    BlockStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitBlockStatement) {
            listener.exitBlockStatement(this);
        }
    };
    // @Override
    BlockStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitBlockStatement) {
            return visitor.visitBlockStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlockStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockStatementContext = BlockStatementContext;
var IfStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(IfStatementContext, _super);
    function IfStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfStatementContext.prototype.If = function () { return this.getToken(PhpParser.If, 0); };
    IfStatementContext.prototype.parentheses = function () {
        return this.getRuleContext(0, ParenthesesContext);
    };
    IfStatementContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    IfStatementContext.prototype.elseIfStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ElseIfStatementContext);
        }
        else {
            return this.getRuleContext(i, ElseIfStatementContext);
        }
    };
    IfStatementContext.prototype.elseStatement = function () {
        return this.tryGetRuleContext(0, ElseStatementContext);
    };
    IfStatementContext.prototype.Colon = function () { return this.tryGetToken(PhpParser.Colon, 0); };
    IfStatementContext.prototype.innerStatementList = function () {
        return this.tryGetRuleContext(0, InnerStatementListContext);
    };
    IfStatementContext.prototype.EndIf = function () { return this.tryGetToken(PhpParser.EndIf, 0); };
    IfStatementContext.prototype.SemiColon = function () { return this.tryGetToken(PhpParser.SemiColon, 0); };
    IfStatementContext.prototype.elseIfColonStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ElseIfColonStatementContext);
        }
        else {
            return this.getRuleContext(i, ElseIfColonStatementContext);
        }
    };
    IfStatementContext.prototype.elseColonStatement = function () {
        return this.tryGetRuleContext(0, ElseColonStatementContext);
    };
    Object.defineProperty(IfStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_ifStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IfStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterIfStatement) {
            listener.enterIfStatement(this);
        }
    };
    // @Override
    IfStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitIfStatement) {
            listener.exitIfStatement(this);
        }
    };
    // @Override
    IfStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitIfStatement) {
            return visitor.visitIfStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IfStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IfStatementContext = IfStatementContext;
var ElseIfStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(ElseIfStatementContext, _super);
    function ElseIfStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElseIfStatementContext.prototype.ElseIf = function () { return this.getToken(PhpParser.ElseIf, 0); };
    ElseIfStatementContext.prototype.parentheses = function () {
        return this.getRuleContext(0, ParenthesesContext);
    };
    ElseIfStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    Object.defineProperty(ElseIfStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_elseIfStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElseIfStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterElseIfStatement) {
            listener.enterElseIfStatement(this);
        }
    };
    // @Override
    ElseIfStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitElseIfStatement) {
            listener.exitElseIfStatement(this);
        }
    };
    // @Override
    ElseIfStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitElseIfStatement) {
            return visitor.visitElseIfStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElseIfStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElseIfStatementContext = ElseIfStatementContext;
var ElseIfColonStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(ElseIfColonStatementContext, _super);
    function ElseIfColonStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElseIfColonStatementContext.prototype.ElseIf = function () { return this.getToken(PhpParser.ElseIf, 0); };
    ElseIfColonStatementContext.prototype.parentheses = function () {
        return this.getRuleContext(0, ParenthesesContext);
    };
    ElseIfColonStatementContext.prototype.Colon = function () { return this.getToken(PhpParser.Colon, 0); };
    ElseIfColonStatementContext.prototype.innerStatementList = function () {
        return this.getRuleContext(0, InnerStatementListContext);
    };
    Object.defineProperty(ElseIfColonStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_elseIfColonStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElseIfColonStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterElseIfColonStatement) {
            listener.enterElseIfColonStatement(this);
        }
    };
    // @Override
    ElseIfColonStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitElseIfColonStatement) {
            listener.exitElseIfColonStatement(this);
        }
    };
    // @Override
    ElseIfColonStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitElseIfColonStatement) {
            return visitor.visitElseIfColonStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElseIfColonStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElseIfColonStatementContext = ElseIfColonStatementContext;
var ElseStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(ElseStatementContext, _super);
    function ElseStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElseStatementContext.prototype.Else = function () { return this.getToken(PhpParser.Else, 0); };
    ElseStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    Object.defineProperty(ElseStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_elseStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElseStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterElseStatement) {
            listener.enterElseStatement(this);
        }
    };
    // @Override
    ElseStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitElseStatement) {
            listener.exitElseStatement(this);
        }
    };
    // @Override
    ElseStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitElseStatement) {
            return visitor.visitElseStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElseStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElseStatementContext = ElseStatementContext;
var ElseColonStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(ElseColonStatementContext, _super);
    function ElseColonStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElseColonStatementContext.prototype.Else = function () { return this.getToken(PhpParser.Else, 0); };
    ElseColonStatementContext.prototype.Colon = function () { return this.getToken(PhpParser.Colon, 0); };
    ElseColonStatementContext.prototype.innerStatementList = function () {
        return this.getRuleContext(0, InnerStatementListContext);
    };
    Object.defineProperty(ElseColonStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_elseColonStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElseColonStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterElseColonStatement) {
            listener.enterElseColonStatement(this);
        }
    };
    // @Override
    ElseColonStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitElseColonStatement) {
            listener.exitElseColonStatement(this);
        }
    };
    // @Override
    ElseColonStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitElseColonStatement) {
            return visitor.visitElseColonStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElseColonStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElseColonStatementContext = ElseColonStatementContext;
var WhileStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(WhileStatementContext, _super);
    function WhileStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WhileStatementContext.prototype.While = function () { return this.getToken(PhpParser.While, 0); };
    WhileStatementContext.prototype.parentheses = function () {
        return this.getRuleContext(0, ParenthesesContext);
    };
    WhileStatementContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    WhileStatementContext.prototype.Colon = function () { return this.tryGetToken(PhpParser.Colon, 0); };
    WhileStatementContext.prototype.innerStatementList = function () {
        return this.tryGetRuleContext(0, InnerStatementListContext);
    };
    WhileStatementContext.prototype.EndWhile = function () { return this.tryGetToken(PhpParser.EndWhile, 0); };
    WhileStatementContext.prototype.SemiColon = function () { return this.tryGetToken(PhpParser.SemiColon, 0); };
    Object.defineProperty(WhileStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_whileStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WhileStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterWhileStatement) {
            listener.enterWhileStatement(this);
        }
    };
    // @Override
    WhileStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitWhileStatement) {
            listener.exitWhileStatement(this);
        }
    };
    // @Override
    WhileStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitWhileStatement) {
            return visitor.visitWhileStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WhileStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WhileStatementContext = WhileStatementContext;
var DoWhileStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(DoWhileStatementContext, _super);
    function DoWhileStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DoWhileStatementContext.prototype.Do = function () { return this.getToken(PhpParser.Do, 0); };
    DoWhileStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    DoWhileStatementContext.prototype.While = function () { return this.getToken(PhpParser.While, 0); };
    DoWhileStatementContext.prototype.parentheses = function () {
        return this.getRuleContext(0, ParenthesesContext);
    };
    DoWhileStatementContext.prototype.SemiColon = function () { return this.getToken(PhpParser.SemiColon, 0); };
    Object.defineProperty(DoWhileStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_doWhileStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DoWhileStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterDoWhileStatement) {
            listener.enterDoWhileStatement(this);
        }
    };
    // @Override
    DoWhileStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitDoWhileStatement) {
            listener.exitDoWhileStatement(this);
        }
    };
    // @Override
    DoWhileStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitDoWhileStatement) {
            return visitor.visitDoWhileStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DoWhileStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DoWhileStatementContext = DoWhileStatementContext;
var ForStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(ForStatementContext, _super);
    function ForStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForStatementContext.prototype.For = function () { return this.getToken(PhpParser.For, 0); };
    ForStatementContext.prototype.OpenRoundBracket = function () { return this.getToken(PhpParser.OpenRoundBracket, 0); };
    ForStatementContext.prototype.SemiColon = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.SemiColon);
        }
        else {
            return this.getToken(PhpParser.SemiColon, i);
        }
    };
    ForStatementContext.prototype.CloseRoundBracket = function () { return this.getToken(PhpParser.CloseRoundBracket, 0); };
    ForStatementContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    ForStatementContext.prototype.Colon = function () { return this.tryGetToken(PhpParser.Colon, 0); };
    ForStatementContext.prototype.innerStatementList = function () {
        return this.tryGetRuleContext(0, InnerStatementListContext);
    };
    ForStatementContext.prototype.EndFor = function () { return this.tryGetToken(PhpParser.EndFor, 0); };
    ForStatementContext.prototype.forInit = function () {
        return this.tryGetRuleContext(0, ForInitContext);
    };
    ForStatementContext.prototype.expressionList = function () {
        return this.tryGetRuleContext(0, ExpressionListContext);
    };
    ForStatementContext.prototype.forUpdate = function () {
        return this.tryGetRuleContext(0, ForUpdateContext);
    };
    Object.defineProperty(ForStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_forStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ForStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterForStatement) {
            listener.enterForStatement(this);
        }
    };
    // @Override
    ForStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitForStatement) {
            listener.exitForStatement(this);
        }
    };
    // @Override
    ForStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitForStatement) {
            return visitor.visitForStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForStatementContext = ForStatementContext;
var ForInitContext = /** @class */ (function (_super) {
    tslib_1.__extends(ForInitContext, _super);
    function ForInitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForInitContext.prototype.expressionList = function () {
        return this.getRuleContext(0, ExpressionListContext);
    };
    Object.defineProperty(ForInitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_forInit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ForInitContext.prototype.enterRule = function (listener) {
        if (listener.enterForInit) {
            listener.enterForInit(this);
        }
    };
    // @Override
    ForInitContext.prototype.exitRule = function (listener) {
        if (listener.exitForInit) {
            listener.exitForInit(this);
        }
    };
    // @Override
    ForInitContext.prototype.accept = function (visitor) {
        if (visitor.visitForInit) {
            return visitor.visitForInit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForInitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForInitContext = ForInitContext;
var ForUpdateContext = /** @class */ (function (_super) {
    tslib_1.__extends(ForUpdateContext, _super);
    function ForUpdateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForUpdateContext.prototype.expressionList = function () {
        return this.getRuleContext(0, ExpressionListContext);
    };
    Object.defineProperty(ForUpdateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_forUpdate; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ForUpdateContext.prototype.enterRule = function (listener) {
        if (listener.enterForUpdate) {
            listener.enterForUpdate(this);
        }
    };
    // @Override
    ForUpdateContext.prototype.exitRule = function (listener) {
        if (listener.exitForUpdate) {
            listener.exitForUpdate(this);
        }
    };
    // @Override
    ForUpdateContext.prototype.accept = function (visitor) {
        if (visitor.visitForUpdate) {
            return visitor.visitForUpdate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForUpdateContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForUpdateContext = ForUpdateContext;
var SwitchStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(SwitchStatementContext, _super);
    function SwitchStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SwitchStatementContext.prototype.Switch = function () { return this.getToken(PhpParser.Switch, 0); };
    SwitchStatementContext.prototype.parentheses = function () {
        return this.getRuleContext(0, ParenthesesContext);
    };
    SwitchStatementContext.prototype.OpenCurlyBracket = function () { return this.tryGetToken(PhpParser.OpenCurlyBracket, 0); };
    SwitchStatementContext.prototype.CloseCurlyBracket = function () { return this.tryGetToken(PhpParser.CloseCurlyBracket, 0); };
    SwitchStatementContext.prototype.Colon = function () { return this.tryGetToken(PhpParser.Colon, 0); };
    SwitchStatementContext.prototype.EndSwitch = function () { return this.tryGetToken(PhpParser.EndSwitch, 0); };
    SwitchStatementContext.prototype.SemiColon = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.SemiColon);
        }
        else {
            return this.getToken(PhpParser.SemiColon, i);
        }
    };
    SwitchStatementContext.prototype.switchBlock = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SwitchBlockContext);
        }
        else {
            return this.getRuleContext(i, SwitchBlockContext);
        }
    };
    Object.defineProperty(SwitchStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_switchStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SwitchStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterSwitchStatement) {
            listener.enterSwitchStatement(this);
        }
    };
    // @Override
    SwitchStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitSwitchStatement) {
            listener.exitSwitchStatement(this);
        }
    };
    // @Override
    SwitchStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitSwitchStatement) {
            return visitor.visitSwitchStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SwitchStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SwitchStatementContext = SwitchStatementContext;
var SwitchBlockContext = /** @class */ (function (_super) {
    tslib_1.__extends(SwitchBlockContext, _super);
    function SwitchBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SwitchBlockContext.prototype.innerStatementList = function () {
        return this.getRuleContext(0, InnerStatementListContext);
    };
    SwitchBlockContext.prototype.Colon = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.Colon);
        }
        else {
            return this.getToken(PhpParser.Colon, i);
        }
    };
    SwitchBlockContext.prototype.SemiColon = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.SemiColon);
        }
        else {
            return this.getToken(PhpParser.SemiColon, i);
        }
    };
    SwitchBlockContext.prototype.Case = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.Case);
        }
        else {
            return this.getToken(PhpParser.Case, i);
        }
    };
    SwitchBlockContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    SwitchBlockContext.prototype.Default = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.Default);
        }
        else {
            return this.getToken(PhpParser.Default, i);
        }
    };
    Object.defineProperty(SwitchBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_switchBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SwitchBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterSwitchBlock) {
            listener.enterSwitchBlock(this);
        }
    };
    // @Override
    SwitchBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitSwitchBlock) {
            listener.exitSwitchBlock(this);
        }
    };
    // @Override
    SwitchBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitSwitchBlock) {
            return visitor.visitSwitchBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SwitchBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SwitchBlockContext = SwitchBlockContext;
var BreakStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(BreakStatementContext, _super);
    function BreakStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BreakStatementContext.prototype.Break = function () { return this.getToken(PhpParser.Break, 0); };
    BreakStatementContext.prototype.SemiColon = function () { return this.getToken(PhpParser.SemiColon, 0); };
    BreakStatementContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(BreakStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_breakStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BreakStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterBreakStatement) {
            listener.enterBreakStatement(this);
        }
    };
    // @Override
    BreakStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitBreakStatement) {
            listener.exitBreakStatement(this);
        }
    };
    // @Override
    BreakStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitBreakStatement) {
            return visitor.visitBreakStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BreakStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BreakStatementContext = BreakStatementContext;
var ContinueStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(ContinueStatementContext, _super);
    function ContinueStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ContinueStatementContext.prototype.Continue = function () { return this.getToken(PhpParser.Continue, 0); };
    ContinueStatementContext.prototype.SemiColon = function () { return this.getToken(PhpParser.SemiColon, 0); };
    ContinueStatementContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ContinueStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_continueStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ContinueStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterContinueStatement) {
            listener.enterContinueStatement(this);
        }
    };
    // @Override
    ContinueStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitContinueStatement) {
            listener.exitContinueStatement(this);
        }
    };
    // @Override
    ContinueStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitContinueStatement) {
            return visitor.visitContinueStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ContinueStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ContinueStatementContext = ContinueStatementContext;
var ReturnStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(ReturnStatementContext, _super);
    function ReturnStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReturnStatementContext.prototype.Return = function () { return this.getToken(PhpParser.Return, 0); };
    ReturnStatementContext.prototype.SemiColon = function () { return this.getToken(PhpParser.SemiColon, 0); };
    ReturnStatementContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ReturnStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_returnStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReturnStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterReturnStatement) {
            listener.enterReturnStatement(this);
        }
    };
    // @Override
    ReturnStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitReturnStatement) {
            listener.exitReturnStatement(this);
        }
    };
    // @Override
    ReturnStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitReturnStatement) {
            return visitor.visitReturnStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReturnStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReturnStatementContext = ReturnStatementContext;
var ExpressionStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(ExpressionStatementContext, _super);
    function ExpressionStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionStatementContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    ExpressionStatementContext.prototype.SemiColon = function () { return this.getToken(PhpParser.SemiColon, 0); };
    Object.defineProperty(ExpressionStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_expressionStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpressionStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterExpressionStatement) {
            listener.enterExpressionStatement(this);
        }
    };
    // @Override
    ExpressionStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitExpressionStatement) {
            listener.exitExpressionStatement(this);
        }
    };
    // @Override
    ExpressionStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitExpressionStatement) {
            return visitor.visitExpressionStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpressionStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionStatementContext = ExpressionStatementContext;
var UnsetStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(UnsetStatementContext, _super);
    function UnsetStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnsetStatementContext.prototype.Unset = function () { return this.getToken(PhpParser.Unset, 0); };
    UnsetStatementContext.prototype.OpenRoundBracket = function () { return this.getToken(PhpParser.OpenRoundBracket, 0); };
    UnsetStatementContext.prototype.chainList = function () {
        return this.getRuleContext(0, ChainListContext);
    };
    UnsetStatementContext.prototype.CloseRoundBracket = function () { return this.getToken(PhpParser.CloseRoundBracket, 0); };
    UnsetStatementContext.prototype.SemiColon = function () { return this.getToken(PhpParser.SemiColon, 0); };
    Object.defineProperty(UnsetStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_unsetStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnsetStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterUnsetStatement) {
            listener.enterUnsetStatement(this);
        }
    };
    // @Override
    UnsetStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitUnsetStatement) {
            listener.exitUnsetStatement(this);
        }
    };
    // @Override
    UnsetStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitUnsetStatement) {
            return visitor.visitUnsetStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnsetStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnsetStatementContext = UnsetStatementContext;
var ForeachStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(ForeachStatementContext, _super);
    function ForeachStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForeachStatementContext.prototype.Foreach = function () { return this.getToken(PhpParser.Foreach, 0); };
    ForeachStatementContext.prototype.OpenRoundBracket = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.OpenRoundBracket);
        }
        else {
            return this.getToken(PhpParser.OpenRoundBracket, i);
        }
    };
    ForeachStatementContext.prototype.chain = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ChainContext);
        }
        else {
            return this.getRuleContext(i, ChainContext);
        }
    };
    ForeachStatementContext.prototype.As = function () { return this.tryGetToken(PhpParser.As, 0); };
    ForeachStatementContext.prototype.assignable = function () {
        return this.tryGetRuleContext(0, AssignableContext);
    };
    ForeachStatementContext.prototype.CloseRoundBracket = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.CloseRoundBracket);
        }
        else {
            return this.getToken(PhpParser.CloseRoundBracket, i);
        }
    };
    ForeachStatementContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    ForeachStatementContext.prototype.List = function () { return this.tryGetToken(PhpParser.List, 0); };
    ForeachStatementContext.prototype.assignmentList = function () {
        return this.tryGetRuleContext(0, AssignmentListContext);
    };
    ForeachStatementContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    ForeachStatementContext.prototype.Colon = function () { return this.tryGetToken(PhpParser.Colon, 0); };
    ForeachStatementContext.prototype.innerStatementList = function () {
        return this.tryGetRuleContext(0, InnerStatementListContext);
    };
    ForeachStatementContext.prototype.EndForeach = function () { return this.tryGetToken(PhpParser.EndForeach, 0); };
    ForeachStatementContext.prototype.SemiColon = function () { return this.tryGetToken(PhpParser.SemiColon, 0); };
    ForeachStatementContext.prototype.Ampersand = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.Ampersand);
        }
        else {
            return this.getToken(PhpParser.Ampersand, i);
        }
    };
    ForeachStatementContext.prototype.DoubleArrow = function () { return this.tryGetToken(PhpParser.DoubleArrow, 0); };
    Object.defineProperty(ForeachStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_foreachStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ForeachStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterForeachStatement) {
            listener.enterForeachStatement(this);
        }
    };
    // @Override
    ForeachStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitForeachStatement) {
            listener.exitForeachStatement(this);
        }
    };
    // @Override
    ForeachStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitForeachStatement) {
            return visitor.visitForeachStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForeachStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForeachStatementContext = ForeachStatementContext;
var TryCatchFinallyContext = /** @class */ (function (_super) {
    tslib_1.__extends(TryCatchFinallyContext, _super);
    function TryCatchFinallyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TryCatchFinallyContext.prototype.Try = function () { return this.getToken(PhpParser.Try, 0); };
    TryCatchFinallyContext.prototype.blockStatement = function () {
        return this.getRuleContext(0, BlockStatementContext);
    };
    TryCatchFinallyContext.prototype.finallyStatement = function () {
        return this.tryGetRuleContext(0, FinallyStatementContext);
    };
    TryCatchFinallyContext.prototype.catchClause = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CatchClauseContext);
        }
        else {
            return this.getRuleContext(i, CatchClauseContext);
        }
    };
    Object.defineProperty(TryCatchFinallyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_tryCatchFinally; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TryCatchFinallyContext.prototype.enterRule = function (listener) {
        if (listener.enterTryCatchFinally) {
            listener.enterTryCatchFinally(this);
        }
    };
    // @Override
    TryCatchFinallyContext.prototype.exitRule = function (listener) {
        if (listener.exitTryCatchFinally) {
            listener.exitTryCatchFinally(this);
        }
    };
    // @Override
    TryCatchFinallyContext.prototype.accept = function (visitor) {
        if (visitor.visitTryCatchFinally) {
            return visitor.visitTryCatchFinally(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TryCatchFinallyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TryCatchFinallyContext = TryCatchFinallyContext;
var CatchClauseContext = /** @class */ (function (_super) {
    tslib_1.__extends(CatchClauseContext, _super);
    function CatchClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CatchClauseContext.prototype.Catch = function () { return this.getToken(PhpParser.Catch, 0); };
    CatchClauseContext.prototype.OpenRoundBracket = function () { return this.getToken(PhpParser.OpenRoundBracket, 0); };
    CatchClauseContext.prototype.qualifiedStaticTypeRef = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(QualifiedStaticTypeRefContext);
        }
        else {
            return this.getRuleContext(i, QualifiedStaticTypeRefContext);
        }
    };
    CatchClauseContext.prototype.VarName = function () { return this.getToken(PhpParser.VarName, 0); };
    CatchClauseContext.prototype.CloseRoundBracket = function () { return this.getToken(PhpParser.CloseRoundBracket, 0); };
    CatchClauseContext.prototype.blockStatement = function () {
        return this.getRuleContext(0, BlockStatementContext);
    };
    CatchClauseContext.prototype.Pipe = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.Pipe);
        }
        else {
            return this.getToken(PhpParser.Pipe, i);
        }
    };
    Object.defineProperty(CatchClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_catchClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CatchClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterCatchClause) {
            listener.enterCatchClause(this);
        }
    };
    // @Override
    CatchClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitCatchClause) {
            listener.exitCatchClause(this);
        }
    };
    // @Override
    CatchClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitCatchClause) {
            return visitor.visitCatchClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CatchClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CatchClauseContext = CatchClauseContext;
var FinallyStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(FinallyStatementContext, _super);
    function FinallyStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FinallyStatementContext.prototype.Finally = function () { return this.getToken(PhpParser.Finally, 0); };
    FinallyStatementContext.prototype.blockStatement = function () {
        return this.getRuleContext(0, BlockStatementContext);
    };
    Object.defineProperty(FinallyStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_finallyStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FinallyStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterFinallyStatement) {
            listener.enterFinallyStatement(this);
        }
    };
    // @Override
    FinallyStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitFinallyStatement) {
            listener.exitFinallyStatement(this);
        }
    };
    // @Override
    FinallyStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitFinallyStatement) {
            return visitor.visitFinallyStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FinallyStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FinallyStatementContext = FinallyStatementContext;
var ThrowStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(ThrowStatementContext, _super);
    function ThrowStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ThrowStatementContext.prototype.Throw = function () { return this.getToken(PhpParser.Throw, 0); };
    ThrowStatementContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    ThrowStatementContext.prototype.SemiColon = function () { return this.getToken(PhpParser.SemiColon, 0); };
    Object.defineProperty(ThrowStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_throwStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ThrowStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterThrowStatement) {
            listener.enterThrowStatement(this);
        }
    };
    // @Override
    ThrowStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitThrowStatement) {
            listener.exitThrowStatement(this);
        }
    };
    // @Override
    ThrowStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitThrowStatement) {
            return visitor.visitThrowStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ThrowStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ThrowStatementContext = ThrowStatementContext;
var GotoStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(GotoStatementContext, _super);
    function GotoStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GotoStatementContext.prototype.Goto = function () { return this.getToken(PhpParser.Goto, 0); };
    GotoStatementContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    GotoStatementContext.prototype.SemiColon = function () { return this.getToken(PhpParser.SemiColon, 0); };
    Object.defineProperty(GotoStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_gotoStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GotoStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterGotoStatement) {
            listener.enterGotoStatement(this);
        }
    };
    // @Override
    GotoStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitGotoStatement) {
            listener.exitGotoStatement(this);
        }
    };
    // @Override
    GotoStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitGotoStatement) {
            return visitor.visitGotoStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GotoStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GotoStatementContext = GotoStatementContext;
var DeclareStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(DeclareStatementContext, _super);
    function DeclareStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclareStatementContext.prototype.Declare = function () { return this.getToken(PhpParser.Declare, 0); };
    DeclareStatementContext.prototype.OpenRoundBracket = function () { return this.getToken(PhpParser.OpenRoundBracket, 0); };
    DeclareStatementContext.prototype.declareList = function () {
        return this.getRuleContext(0, DeclareListContext);
    };
    DeclareStatementContext.prototype.CloseRoundBracket = function () { return this.getToken(PhpParser.CloseRoundBracket, 0); };
    DeclareStatementContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    DeclareStatementContext.prototype.Colon = function () { return this.tryGetToken(PhpParser.Colon, 0); };
    DeclareStatementContext.prototype.innerStatementList = function () {
        return this.tryGetRuleContext(0, InnerStatementListContext);
    };
    DeclareStatementContext.prototype.EndDeclare = function () { return this.tryGetToken(PhpParser.EndDeclare, 0); };
    DeclareStatementContext.prototype.SemiColon = function () { return this.tryGetToken(PhpParser.SemiColon, 0); };
    Object.defineProperty(DeclareStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_declareStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DeclareStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterDeclareStatement) {
            listener.enterDeclareStatement(this);
        }
    };
    // @Override
    DeclareStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitDeclareStatement) {
            listener.exitDeclareStatement(this);
        }
    };
    // @Override
    DeclareStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitDeclareStatement) {
            return visitor.visitDeclareStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeclareStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeclareStatementContext = DeclareStatementContext;
var InlineHtmlStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(InlineHtmlStatementContext, _super);
    function InlineHtmlStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InlineHtmlStatementContext.prototype.inlineHtml = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(InlineHtmlContext);
        }
        else {
            return this.getRuleContext(i, InlineHtmlContext);
        }
    };
    Object.defineProperty(InlineHtmlStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_inlineHtmlStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InlineHtmlStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterInlineHtmlStatement) {
            listener.enterInlineHtmlStatement(this);
        }
    };
    // @Override
    InlineHtmlStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitInlineHtmlStatement) {
            listener.exitInlineHtmlStatement(this);
        }
    };
    // @Override
    InlineHtmlStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitInlineHtmlStatement) {
            return visitor.visitInlineHtmlStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InlineHtmlStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InlineHtmlStatementContext = InlineHtmlStatementContext;
var InlineHtmlContext = /** @class */ (function (_super) {
    tslib_1.__extends(InlineHtmlContext, _super);
    function InlineHtmlContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InlineHtmlContext.prototype.htmlElements = function () {
        return this.tryGetRuleContext(0, HtmlElementsContext);
    };
    InlineHtmlContext.prototype.scriptTextPart = function () {
        return this.tryGetRuleContext(0, ScriptTextPartContext);
    };
    Object.defineProperty(InlineHtmlContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_inlineHtml; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InlineHtmlContext.prototype.enterRule = function (listener) {
        if (listener.enterInlineHtml) {
            listener.enterInlineHtml(this);
        }
    };
    // @Override
    InlineHtmlContext.prototype.exitRule = function (listener) {
        if (listener.exitInlineHtml) {
            listener.exitInlineHtml(this);
        }
    };
    // @Override
    InlineHtmlContext.prototype.accept = function (visitor) {
        if (visitor.visitInlineHtml) {
            return visitor.visitInlineHtml(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InlineHtmlContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InlineHtmlContext = InlineHtmlContext;
var DeclareListContext = /** @class */ (function (_super) {
    tslib_1.__extends(DeclareListContext, _super);
    function DeclareListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclareListContext.prototype.identifierInititalizer = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierInititalizerContext);
        }
        else {
            return this.getRuleContext(i, IdentifierInititalizerContext);
        }
    };
    DeclareListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.Comma);
        }
        else {
            return this.getToken(PhpParser.Comma, i);
        }
    };
    Object.defineProperty(DeclareListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_declareList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DeclareListContext.prototype.enterRule = function (listener) {
        if (listener.enterDeclareList) {
            listener.enterDeclareList(this);
        }
    };
    // @Override
    DeclareListContext.prototype.exitRule = function (listener) {
        if (listener.exitDeclareList) {
            listener.exitDeclareList(this);
        }
    };
    // @Override
    DeclareListContext.prototype.accept = function (visitor) {
        if (visitor.visitDeclareList) {
            return visitor.visitDeclareList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeclareListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeclareListContext = DeclareListContext;
var FormalParameterListContext = /** @class */ (function (_super) {
    tslib_1.__extends(FormalParameterListContext, _super);
    function FormalParameterListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormalParameterListContext.prototype.formalParameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FormalParameterContext);
        }
        else {
            return this.getRuleContext(i, FormalParameterContext);
        }
    };
    FormalParameterListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.Comma);
        }
        else {
            return this.getToken(PhpParser.Comma, i);
        }
    };
    Object.defineProperty(FormalParameterListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_formalParameterList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormalParameterListContext.prototype.enterRule = function (listener) {
        if (listener.enterFormalParameterList) {
            listener.enterFormalParameterList(this);
        }
    };
    // @Override
    FormalParameterListContext.prototype.exitRule = function (listener) {
        if (listener.exitFormalParameterList) {
            listener.exitFormalParameterList(this);
        }
    };
    // @Override
    FormalParameterListContext.prototype.accept = function (visitor) {
        if (visitor.visitFormalParameterList) {
            return visitor.visitFormalParameterList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormalParameterListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormalParameterListContext = FormalParameterListContext;
var FormalParameterContext = /** @class */ (function (_super) {
    tslib_1.__extends(FormalParameterContext, _super);
    function FormalParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormalParameterContext.prototype.attributes = function () {
        return this.getRuleContext(0, AttributesContext);
    };
    FormalParameterContext.prototype.variableInitializer = function () {
        return this.getRuleContext(0, VariableInitializerContext);
    };
    FormalParameterContext.prototype.QuestionMark = function () { return this.tryGetToken(PhpParser.QuestionMark, 0); };
    FormalParameterContext.prototype.typeHint = function () {
        return this.tryGetRuleContext(0, TypeHintContext);
    };
    FormalParameterContext.prototype.Ampersand = function () { return this.tryGetToken(PhpParser.Ampersand, 0); };
    FormalParameterContext.prototype.Ellipsis = function () { return this.tryGetToken(PhpParser.Ellipsis, 0); };
    Object.defineProperty(FormalParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_formalParameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormalParameterContext.prototype.enterRule = function (listener) {
        if (listener.enterFormalParameter) {
            listener.enterFormalParameter(this);
        }
    };
    // @Override
    FormalParameterContext.prototype.exitRule = function (listener) {
        if (listener.exitFormalParameter) {
            listener.exitFormalParameter(this);
        }
    };
    // @Override
    FormalParameterContext.prototype.accept = function (visitor) {
        if (visitor.visitFormalParameter) {
            return visitor.visitFormalParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormalParameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormalParameterContext = FormalParameterContext;
var TypeHintContext = /** @class */ (function (_super) {
    tslib_1.__extends(TypeHintContext, _super);
    function TypeHintContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeHintContext.prototype.qualifiedStaticTypeRef = function () {
        return this.tryGetRuleContext(0, QualifiedStaticTypeRefContext);
    };
    TypeHintContext.prototype.Callable = function () { return this.tryGetToken(PhpParser.Callable, 0); };
    TypeHintContext.prototype.primitiveType = function () {
        return this.tryGetRuleContext(0, PrimitiveTypeContext);
    };
    Object.defineProperty(TypeHintContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_typeHint; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeHintContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeHint) {
            listener.enterTypeHint(this);
        }
    };
    // @Override
    TypeHintContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeHint) {
            listener.exitTypeHint(this);
        }
    };
    // @Override
    TypeHintContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeHint) {
            return visitor.visitTypeHint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeHintContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeHintContext = TypeHintContext;
var GlobalStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(GlobalStatementContext, _super);
    function GlobalStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GlobalStatementContext.prototype.Global = function () { return this.getToken(PhpParser.Global, 0); };
    GlobalStatementContext.prototype.globalVar = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(GlobalVarContext);
        }
        else {
            return this.getRuleContext(i, GlobalVarContext);
        }
    };
    GlobalStatementContext.prototype.SemiColon = function () { return this.getToken(PhpParser.SemiColon, 0); };
    GlobalStatementContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.Comma);
        }
        else {
            return this.getToken(PhpParser.Comma, i);
        }
    };
    Object.defineProperty(GlobalStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_globalStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GlobalStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterGlobalStatement) {
            listener.enterGlobalStatement(this);
        }
    };
    // @Override
    GlobalStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitGlobalStatement) {
            listener.exitGlobalStatement(this);
        }
    };
    // @Override
    GlobalStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitGlobalStatement) {
            return visitor.visitGlobalStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GlobalStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GlobalStatementContext = GlobalStatementContext;
var GlobalVarContext = /** @class */ (function (_super) {
    tslib_1.__extends(GlobalVarContext, _super);
    function GlobalVarContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GlobalVarContext.prototype.VarName = function () { return this.tryGetToken(PhpParser.VarName, 0); };
    GlobalVarContext.prototype.Dollar = function () { return this.tryGetToken(PhpParser.Dollar, 0); };
    GlobalVarContext.prototype.chain = function () {
        return this.tryGetRuleContext(0, ChainContext);
    };
    GlobalVarContext.prototype.OpenCurlyBracket = function () { return this.tryGetToken(PhpParser.OpenCurlyBracket, 0); };
    GlobalVarContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    GlobalVarContext.prototype.CloseCurlyBracket = function () { return this.tryGetToken(PhpParser.CloseCurlyBracket, 0); };
    Object.defineProperty(GlobalVarContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_globalVar; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GlobalVarContext.prototype.enterRule = function (listener) {
        if (listener.enterGlobalVar) {
            listener.enterGlobalVar(this);
        }
    };
    // @Override
    GlobalVarContext.prototype.exitRule = function (listener) {
        if (listener.exitGlobalVar) {
            listener.exitGlobalVar(this);
        }
    };
    // @Override
    GlobalVarContext.prototype.accept = function (visitor) {
        if (visitor.visitGlobalVar) {
            return visitor.visitGlobalVar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GlobalVarContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GlobalVarContext = GlobalVarContext;
var EchoStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(EchoStatementContext, _super);
    function EchoStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EchoStatementContext.prototype.Echo = function () { return this.getToken(PhpParser.Echo, 0); };
    EchoStatementContext.prototype.expressionList = function () {
        return this.getRuleContext(0, ExpressionListContext);
    };
    EchoStatementContext.prototype.SemiColon = function () { return this.getToken(PhpParser.SemiColon, 0); };
    Object.defineProperty(EchoStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_echoStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EchoStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterEchoStatement) {
            listener.enterEchoStatement(this);
        }
    };
    // @Override
    EchoStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitEchoStatement) {
            listener.exitEchoStatement(this);
        }
    };
    // @Override
    EchoStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitEchoStatement) {
            return visitor.visitEchoStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EchoStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EchoStatementContext = EchoStatementContext;
var StaticVariableStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(StaticVariableStatementContext, _super);
    function StaticVariableStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StaticVariableStatementContext.prototype.Static = function () { return this.getToken(PhpParser.Static, 0); };
    StaticVariableStatementContext.prototype.variableInitializer = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableInitializerContext);
        }
        else {
            return this.getRuleContext(i, VariableInitializerContext);
        }
    };
    StaticVariableStatementContext.prototype.SemiColon = function () { return this.getToken(PhpParser.SemiColon, 0); };
    StaticVariableStatementContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.Comma);
        }
        else {
            return this.getToken(PhpParser.Comma, i);
        }
    };
    Object.defineProperty(StaticVariableStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_staticVariableStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StaticVariableStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterStaticVariableStatement) {
            listener.enterStaticVariableStatement(this);
        }
    };
    // @Override
    StaticVariableStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitStaticVariableStatement) {
            listener.exitStaticVariableStatement(this);
        }
    };
    // @Override
    StaticVariableStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitStaticVariableStatement) {
            return visitor.visitStaticVariableStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StaticVariableStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StaticVariableStatementContext = StaticVariableStatementContext;
var ClassStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(ClassStatementContext, _super);
    function ClassStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassStatementContext.prototype.attributes = function () {
        return this.tryGetRuleContext(0, AttributesContext);
    };
    ClassStatementContext.prototype.propertyModifiers = function () {
        return this.tryGetRuleContext(0, PropertyModifiersContext);
    };
    ClassStatementContext.prototype.variableInitializer = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableInitializerContext);
        }
        else {
            return this.getRuleContext(i, VariableInitializerContext);
        }
    };
    ClassStatementContext.prototype.SemiColon = function () { return this.tryGetToken(PhpParser.SemiColon, 0); };
    ClassStatementContext.prototype.typeHint = function () {
        return this.tryGetRuleContext(0, TypeHintContext);
    };
    ClassStatementContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.Comma);
        }
        else {
            return this.getToken(PhpParser.Comma, i);
        }
    };
    ClassStatementContext.prototype.Const = function () { return this.tryGetToken(PhpParser.Const, 0); };
    ClassStatementContext.prototype.identifierInititalizer = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierInititalizerContext);
        }
        else {
            return this.getRuleContext(i, IdentifierInititalizerContext);
        }
    };
    ClassStatementContext.prototype.memberModifiers = function () {
        return this.tryGetRuleContext(0, MemberModifiersContext);
    };
    ClassStatementContext.prototype.Function = function () { return this.tryGetToken(PhpParser.Function, 0); };
    ClassStatementContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    ClassStatementContext.prototype.OpenRoundBracket = function () { return this.tryGetToken(PhpParser.OpenRoundBracket, 0); };
    ClassStatementContext.prototype.formalParameterList = function () {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    };
    ClassStatementContext.prototype.CloseRoundBracket = function () { return this.tryGetToken(PhpParser.CloseRoundBracket, 0); };
    ClassStatementContext.prototype.methodBody = function () {
        return this.tryGetRuleContext(0, MethodBodyContext);
    };
    ClassStatementContext.prototype.Ampersand = function () { return this.tryGetToken(PhpParser.Ampersand, 0); };
    ClassStatementContext.prototype.typeParameterListInBrackets = function () {
        return this.tryGetRuleContext(0, TypeParameterListInBracketsContext);
    };
    ClassStatementContext.prototype.baseCtorCall = function () {
        return this.tryGetRuleContext(0, BaseCtorCallContext);
    };
    ClassStatementContext.prototype.Use = function () { return this.tryGetToken(PhpParser.Use, 0); };
    ClassStatementContext.prototype.qualifiedNamespaceNameList = function () {
        return this.tryGetRuleContext(0, QualifiedNamespaceNameListContext);
    };
    ClassStatementContext.prototype.traitAdaptations = function () {
        return this.tryGetRuleContext(0, TraitAdaptationsContext);
    };
    Object.defineProperty(ClassStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_classStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterClassStatement) {
            listener.enterClassStatement(this);
        }
    };
    // @Override
    ClassStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitClassStatement) {
            listener.exitClassStatement(this);
        }
    };
    // @Override
    ClassStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitClassStatement) {
            return visitor.visitClassStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassStatementContext = ClassStatementContext;
var TraitAdaptationsContext = /** @class */ (function (_super) {
    tslib_1.__extends(TraitAdaptationsContext, _super);
    function TraitAdaptationsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TraitAdaptationsContext.prototype.SemiColon = function () { return this.tryGetToken(PhpParser.SemiColon, 0); };
    TraitAdaptationsContext.prototype.OpenCurlyBracket = function () { return this.tryGetToken(PhpParser.OpenCurlyBracket, 0); };
    TraitAdaptationsContext.prototype.CloseCurlyBracket = function () { return this.tryGetToken(PhpParser.CloseCurlyBracket, 0); };
    TraitAdaptationsContext.prototype.traitAdaptationStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TraitAdaptationStatementContext);
        }
        else {
            return this.getRuleContext(i, TraitAdaptationStatementContext);
        }
    };
    Object.defineProperty(TraitAdaptationsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_traitAdaptations; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TraitAdaptationsContext.prototype.enterRule = function (listener) {
        if (listener.enterTraitAdaptations) {
            listener.enterTraitAdaptations(this);
        }
    };
    // @Override
    TraitAdaptationsContext.prototype.exitRule = function (listener) {
        if (listener.exitTraitAdaptations) {
            listener.exitTraitAdaptations(this);
        }
    };
    // @Override
    TraitAdaptationsContext.prototype.accept = function (visitor) {
        if (visitor.visitTraitAdaptations) {
            return visitor.visitTraitAdaptations(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TraitAdaptationsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TraitAdaptationsContext = TraitAdaptationsContext;
var TraitAdaptationStatementContext = /** @class */ (function (_super) {
    tslib_1.__extends(TraitAdaptationStatementContext, _super);
    function TraitAdaptationStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TraitAdaptationStatementContext.prototype.traitPrecedence = function () {
        return this.tryGetRuleContext(0, TraitPrecedenceContext);
    };
    TraitAdaptationStatementContext.prototype.traitAlias = function () {
        return this.tryGetRuleContext(0, TraitAliasContext);
    };
    Object.defineProperty(TraitAdaptationStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_traitAdaptationStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TraitAdaptationStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterTraitAdaptationStatement) {
            listener.enterTraitAdaptationStatement(this);
        }
    };
    // @Override
    TraitAdaptationStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitTraitAdaptationStatement) {
            listener.exitTraitAdaptationStatement(this);
        }
    };
    // @Override
    TraitAdaptationStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitTraitAdaptationStatement) {
            return visitor.visitTraitAdaptationStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TraitAdaptationStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TraitAdaptationStatementContext = TraitAdaptationStatementContext;
var TraitPrecedenceContext = /** @class */ (function (_super) {
    tslib_1.__extends(TraitPrecedenceContext, _super);
    function TraitPrecedenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TraitPrecedenceContext.prototype.qualifiedNamespaceName = function () {
        return this.getRuleContext(0, QualifiedNamespaceNameContext);
    };
    TraitPrecedenceContext.prototype.DoubleColon = function () { return this.getToken(PhpParser.DoubleColon, 0); };
    TraitPrecedenceContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    TraitPrecedenceContext.prototype.InsteadOf = function () { return this.getToken(PhpParser.InsteadOf, 0); };
    TraitPrecedenceContext.prototype.qualifiedNamespaceNameList = function () {
        return this.getRuleContext(0, QualifiedNamespaceNameListContext);
    };
    TraitPrecedenceContext.prototype.SemiColon = function () { return this.getToken(PhpParser.SemiColon, 0); };
    Object.defineProperty(TraitPrecedenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_traitPrecedence; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TraitPrecedenceContext.prototype.enterRule = function (listener) {
        if (listener.enterTraitPrecedence) {
            listener.enterTraitPrecedence(this);
        }
    };
    // @Override
    TraitPrecedenceContext.prototype.exitRule = function (listener) {
        if (listener.exitTraitPrecedence) {
            listener.exitTraitPrecedence(this);
        }
    };
    // @Override
    TraitPrecedenceContext.prototype.accept = function (visitor) {
        if (visitor.visitTraitPrecedence) {
            return visitor.visitTraitPrecedence(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TraitPrecedenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TraitPrecedenceContext = TraitPrecedenceContext;
var TraitAliasContext = /** @class */ (function (_super) {
    tslib_1.__extends(TraitAliasContext, _super);
    function TraitAliasContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TraitAliasContext.prototype.traitMethodReference = function () {
        return this.getRuleContext(0, TraitMethodReferenceContext);
    };
    TraitAliasContext.prototype.As = function () { return this.getToken(PhpParser.As, 0); };
    TraitAliasContext.prototype.SemiColon = function () { return this.getToken(PhpParser.SemiColon, 0); };
    TraitAliasContext.prototype.memberModifier = function () {
        return this.tryGetRuleContext(0, MemberModifierContext);
    };
    TraitAliasContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(TraitAliasContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_traitAlias; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TraitAliasContext.prototype.enterRule = function (listener) {
        if (listener.enterTraitAlias) {
            listener.enterTraitAlias(this);
        }
    };
    // @Override
    TraitAliasContext.prototype.exitRule = function (listener) {
        if (listener.exitTraitAlias) {
            listener.exitTraitAlias(this);
        }
    };
    // @Override
    TraitAliasContext.prototype.accept = function (visitor) {
        if (visitor.visitTraitAlias) {
            return visitor.visitTraitAlias(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TraitAliasContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TraitAliasContext = TraitAliasContext;
var TraitMethodReferenceContext = /** @class */ (function (_super) {
    tslib_1.__extends(TraitMethodReferenceContext, _super);
    function TraitMethodReferenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TraitMethodReferenceContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    TraitMethodReferenceContext.prototype.qualifiedNamespaceName = function () {
        return this.tryGetRuleContext(0, QualifiedNamespaceNameContext);
    };
    TraitMethodReferenceContext.prototype.DoubleColon = function () { return this.tryGetToken(PhpParser.DoubleColon, 0); };
    Object.defineProperty(TraitMethodReferenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_traitMethodReference; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TraitMethodReferenceContext.prototype.enterRule = function (listener) {
        if (listener.enterTraitMethodReference) {
            listener.enterTraitMethodReference(this);
        }
    };
    // @Override
    TraitMethodReferenceContext.prototype.exitRule = function (listener) {
        if (listener.exitTraitMethodReference) {
            listener.exitTraitMethodReference(this);
        }
    };
    // @Override
    TraitMethodReferenceContext.prototype.accept = function (visitor) {
        if (visitor.visitTraitMethodReference) {
            return visitor.visitTraitMethodReference(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TraitMethodReferenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TraitMethodReferenceContext = TraitMethodReferenceContext;
var BaseCtorCallContext = /** @class */ (function (_super) {
    tslib_1.__extends(BaseCtorCallContext, _super);
    function BaseCtorCallContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BaseCtorCallContext.prototype.Colon = function () { return this.getToken(PhpParser.Colon, 0); };
    BaseCtorCallContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    BaseCtorCallContext.prototype.arguments = function () {
        return this.tryGetRuleContext(0, ArgumentsContext);
    };
    Object.defineProperty(BaseCtorCallContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_baseCtorCall; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BaseCtorCallContext.prototype.enterRule = function (listener) {
        if (listener.enterBaseCtorCall) {
            listener.enterBaseCtorCall(this);
        }
    };
    // @Override
    BaseCtorCallContext.prototype.exitRule = function (listener) {
        if (listener.exitBaseCtorCall) {
            listener.exitBaseCtorCall(this);
        }
    };
    // @Override
    BaseCtorCallContext.prototype.accept = function (visitor) {
        if (visitor.visitBaseCtorCall) {
            return visitor.visitBaseCtorCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BaseCtorCallContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BaseCtorCallContext = BaseCtorCallContext;
var MethodBodyContext = /** @class */ (function (_super) {
    tslib_1.__extends(MethodBodyContext, _super);
    function MethodBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MethodBodyContext.prototype.SemiColon = function () { return this.tryGetToken(PhpParser.SemiColon, 0); };
    MethodBodyContext.prototype.blockStatement = function () {
        return this.tryGetRuleContext(0, BlockStatementContext);
    };
    Object.defineProperty(MethodBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_methodBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MethodBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterMethodBody) {
            listener.enterMethodBody(this);
        }
    };
    // @Override
    MethodBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitMethodBody) {
            listener.exitMethodBody(this);
        }
    };
    // @Override
    MethodBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitMethodBody) {
            return visitor.visitMethodBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MethodBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MethodBodyContext = MethodBodyContext;
var PropertyModifiersContext = /** @class */ (function (_super) {
    tslib_1.__extends(PropertyModifiersContext, _super);
    function PropertyModifiersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PropertyModifiersContext.prototype.memberModifiers = function () {
        return this.tryGetRuleContext(0, MemberModifiersContext);
    };
    PropertyModifiersContext.prototype.Var = function () { return this.tryGetToken(PhpParser.Var, 0); };
    Object.defineProperty(PropertyModifiersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_propertyModifiers; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PropertyModifiersContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertyModifiers) {
            listener.enterPropertyModifiers(this);
        }
    };
    // @Override
    PropertyModifiersContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertyModifiers) {
            listener.exitPropertyModifiers(this);
        }
    };
    // @Override
    PropertyModifiersContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertyModifiers) {
            return visitor.visitPropertyModifiers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertyModifiersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropertyModifiersContext = PropertyModifiersContext;
var MemberModifiersContext = /** @class */ (function (_super) {
    tslib_1.__extends(MemberModifiersContext, _super);
    function MemberModifiersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MemberModifiersContext.prototype.memberModifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MemberModifierContext);
        }
        else {
            return this.getRuleContext(i, MemberModifierContext);
        }
    };
    Object.defineProperty(MemberModifiersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_memberModifiers; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MemberModifiersContext.prototype.enterRule = function (listener) {
        if (listener.enterMemberModifiers) {
            listener.enterMemberModifiers(this);
        }
    };
    // @Override
    MemberModifiersContext.prototype.exitRule = function (listener) {
        if (listener.exitMemberModifiers) {
            listener.exitMemberModifiers(this);
        }
    };
    // @Override
    MemberModifiersContext.prototype.accept = function (visitor) {
        if (visitor.visitMemberModifiers) {
            return visitor.visitMemberModifiers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MemberModifiersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MemberModifiersContext = MemberModifiersContext;
var VariableInitializerContext = /** @class */ (function (_super) {
    tslib_1.__extends(VariableInitializerContext, _super);
    function VariableInitializerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableInitializerContext.prototype.VarName = function () { return this.getToken(PhpParser.VarName, 0); };
    VariableInitializerContext.prototype.Eq = function () { return this.tryGetToken(PhpParser.Eq, 0); };
    VariableInitializerContext.prototype.constantInititalizer = function () {
        return this.tryGetRuleContext(0, ConstantInititalizerContext);
    };
    Object.defineProperty(VariableInitializerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_variableInitializer; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableInitializerContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableInitializer) {
            listener.enterVariableInitializer(this);
        }
    };
    // @Override
    VariableInitializerContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableInitializer) {
            listener.exitVariableInitializer(this);
        }
    };
    // @Override
    VariableInitializerContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableInitializer) {
            return visitor.visitVariableInitializer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableInitializerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableInitializerContext = VariableInitializerContext;
var IdentifierInititalizerContext = /** @class */ (function (_super) {
    tslib_1.__extends(IdentifierInititalizerContext, _super);
    function IdentifierInititalizerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierInititalizerContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    IdentifierInititalizerContext.prototype.Eq = function () { return this.getToken(PhpParser.Eq, 0); };
    IdentifierInititalizerContext.prototype.constantInititalizer = function () {
        return this.getRuleContext(0, ConstantInititalizerContext);
    };
    Object.defineProperty(IdentifierInititalizerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_identifierInititalizer; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdentifierInititalizerContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentifierInititalizer) {
            listener.enterIdentifierInititalizer(this);
        }
    };
    // @Override
    IdentifierInititalizerContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentifierInititalizer) {
            listener.exitIdentifierInititalizer(this);
        }
    };
    // @Override
    IdentifierInititalizerContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentifierInititalizer) {
            return visitor.visitIdentifierInititalizer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentifierInititalizerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdentifierInititalizerContext = IdentifierInititalizerContext;
var GlobalConstantDeclarationContext = /** @class */ (function (_super) {
    tslib_1.__extends(GlobalConstantDeclarationContext, _super);
    function GlobalConstantDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GlobalConstantDeclarationContext.prototype.attributes = function () {
        return this.getRuleContext(0, AttributesContext);
    };
    GlobalConstantDeclarationContext.prototype.Const = function () { return this.getToken(PhpParser.Const, 0); };
    GlobalConstantDeclarationContext.prototype.identifierInititalizer = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierInititalizerContext);
        }
        else {
            return this.getRuleContext(i, IdentifierInititalizerContext);
        }
    };
    GlobalConstantDeclarationContext.prototype.SemiColon = function () { return this.getToken(PhpParser.SemiColon, 0); };
    GlobalConstantDeclarationContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.Comma);
        }
        else {
            return this.getToken(PhpParser.Comma, i);
        }
    };
    Object.defineProperty(GlobalConstantDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_globalConstantDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GlobalConstantDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterGlobalConstantDeclaration) {
            listener.enterGlobalConstantDeclaration(this);
        }
    };
    // @Override
    GlobalConstantDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitGlobalConstantDeclaration) {
            listener.exitGlobalConstantDeclaration(this);
        }
    };
    // @Override
    GlobalConstantDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitGlobalConstantDeclaration) {
            return visitor.visitGlobalConstantDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GlobalConstantDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GlobalConstantDeclarationContext = GlobalConstantDeclarationContext;
var ExpressionListContext = /** @class */ (function (_super) {
    tslib_1.__extends(ExpressionListContext, _super);
    function ExpressionListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionListContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    ExpressionListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.Comma);
        }
        else {
            return this.getToken(PhpParser.Comma, i);
        }
    };
    Object.defineProperty(ExpressionListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_expressionList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpressionListContext.prototype.enterRule = function (listener) {
        if (listener.enterExpressionList) {
            listener.enterExpressionList(this);
        }
    };
    // @Override
    ExpressionListContext.prototype.exitRule = function (listener) {
        if (listener.exitExpressionList) {
            listener.exitExpressionList(this);
        }
    };
    // @Override
    ExpressionListContext.prototype.accept = function (visitor) {
        if (visitor.visitExpressionList) {
            return visitor.visitExpressionList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpressionListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionListContext = ExpressionListContext;
var ParenthesesContext = /** @class */ (function (_super) {
    tslib_1.__extends(ParenthesesContext, _super);
    function ParenthesesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParenthesesContext.prototype.OpenRoundBracket = function () { return this.getToken(PhpParser.OpenRoundBracket, 0); };
    ParenthesesContext.prototype.CloseRoundBracket = function () { return this.getToken(PhpParser.CloseRoundBracket, 0); };
    ParenthesesContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    ParenthesesContext.prototype.yieldExpression = function () {
        return this.tryGetRuleContext(0, YieldExpressionContext);
    };
    Object.defineProperty(ParenthesesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_parentheses; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParenthesesContext.prototype.enterRule = function (listener) {
        if (listener.enterParentheses) {
            listener.enterParentheses(this);
        }
    };
    // @Override
    ParenthesesContext.prototype.exitRule = function (listener) {
        if (listener.exitParentheses) {
            listener.exitParentheses(this);
        }
    };
    // @Override
    ParenthesesContext.prototype.accept = function (visitor) {
        if (visitor.visitParentheses) {
            return visitor.visitParentheses(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParenthesesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParenthesesContext = ParenthesesContext;
var ExpressionContext = /** @class */ (function (_super) {
    tslib_1.__extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_expression; },
        enumerable: true,
        configurable: true
    });
    ExpressionContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return ExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionContext = ExpressionContext;
var CloneExpressionContext = /** @class */ (function (_super) {
    tslib_1.__extends(CloneExpressionContext, _super);
    function CloneExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    CloneExpressionContext.prototype.Clone = function () { return this.getToken(PhpParser.Clone, 0); };
    CloneExpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    // @Override
    CloneExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterCloneExpression) {
            listener.enterCloneExpression(this);
        }
    };
    // @Override
    CloneExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitCloneExpression) {
            listener.exitCloneExpression(this);
        }
    };
    // @Override
    CloneExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitCloneExpression) {
            return visitor.visitCloneExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CloneExpressionContext;
}(ExpressionContext));
exports.CloneExpressionContext = CloneExpressionContext;
var NewExpressionContext = /** @class */ (function (_super) {
    tslib_1.__extends(NewExpressionContext, _super);
    function NewExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    NewExpressionContext.prototype.newExpr = function () {
        return this.getRuleContext(0, NewExprContext);
    };
    // @Override
    NewExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterNewExpression) {
            listener.enterNewExpression(this);
        }
    };
    // @Override
    NewExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitNewExpression) {
            listener.exitNewExpression(this);
        }
    };
    // @Override
    NewExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitNewExpression) {
            return visitor.visitNewExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NewExpressionContext;
}(ExpressionContext));
exports.NewExpressionContext = NewExpressionContext;
var IndexerExpressionContext = /** @class */ (function (_super) {
    tslib_1.__extends(IndexerExpressionContext, _super);
    function IndexerExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    IndexerExpressionContext.prototype.stringConstant = function () {
        return this.getRuleContext(0, StringConstantContext);
    };
    IndexerExpressionContext.prototype.OpenSquareBracket = function () { return this.getToken(PhpParser.OpenSquareBracket, 0); };
    IndexerExpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    IndexerExpressionContext.prototype.CloseSquareBracket = function () { return this.getToken(PhpParser.CloseSquareBracket, 0); };
    // @Override
    IndexerExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterIndexerExpression) {
            listener.enterIndexerExpression(this);
        }
    };
    // @Override
    IndexerExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitIndexerExpression) {
            listener.exitIndexerExpression(this);
        }
    };
    // @Override
    IndexerExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitIndexerExpression) {
            return visitor.visitIndexerExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IndexerExpressionContext;
}(ExpressionContext));
exports.IndexerExpressionContext = IndexerExpressionContext;
var CastExpressionContext = /** @class */ (function (_super) {
    tslib_1.__extends(CastExpressionContext, _super);
    function CastExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    CastExpressionContext.prototype.OpenRoundBracket = function () { return this.getToken(PhpParser.OpenRoundBracket, 0); };
    CastExpressionContext.prototype.castOperation = function () {
        return this.getRuleContext(0, CastOperationContext);
    };
    CastExpressionContext.prototype.CloseRoundBracket = function () { return this.getToken(PhpParser.CloseRoundBracket, 0); };
    CastExpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    // @Override
    CastExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterCastExpression) {
            listener.enterCastExpression(this);
        }
    };
    // @Override
    CastExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitCastExpression) {
            listener.exitCastExpression(this);
        }
    };
    // @Override
    CastExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitCastExpression) {
            return visitor.visitCastExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CastExpressionContext;
}(ExpressionContext));
exports.CastExpressionContext = CastExpressionContext;
var UnaryOperatorExpressionContext = /** @class */ (function (_super) {
    tslib_1.__extends(UnaryOperatorExpressionContext, _super);
    function UnaryOperatorExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    UnaryOperatorExpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    UnaryOperatorExpressionContext.prototype.Tilde = function () { return this.tryGetToken(PhpParser.Tilde, 0); };
    UnaryOperatorExpressionContext.prototype.SuppressWarnings = function () { return this.tryGetToken(PhpParser.SuppressWarnings, 0); };
    UnaryOperatorExpressionContext.prototype.Bang = function () { return this.tryGetToken(PhpParser.Bang, 0); };
    UnaryOperatorExpressionContext.prototype.Plus = function () { return this.tryGetToken(PhpParser.Plus, 0); };
    UnaryOperatorExpressionContext.prototype.Minus = function () { return this.tryGetToken(PhpParser.Minus, 0); };
    // @Override
    UnaryOperatorExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterUnaryOperatorExpression) {
            listener.enterUnaryOperatorExpression(this);
        }
    };
    // @Override
    UnaryOperatorExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitUnaryOperatorExpression) {
            listener.exitUnaryOperatorExpression(this);
        }
    };
    // @Override
    UnaryOperatorExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitUnaryOperatorExpression) {
            return visitor.visitUnaryOperatorExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnaryOperatorExpressionContext;
}(ExpressionContext));
exports.UnaryOperatorExpressionContext = UnaryOperatorExpressionContext;
var PrefixIncDecExpressionContext = /** @class */ (function (_super) {
    tslib_1.__extends(PrefixIncDecExpressionContext, _super);
    function PrefixIncDecExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PrefixIncDecExpressionContext.prototype.chain = function () {
        return this.getRuleContext(0, ChainContext);
    };
    PrefixIncDecExpressionContext.prototype.Inc = function () { return this.tryGetToken(PhpParser.Inc, 0); };
    PrefixIncDecExpressionContext.prototype.Dec = function () { return this.tryGetToken(PhpParser.Dec, 0); };
    // @Override
    PrefixIncDecExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPrefixIncDecExpression) {
            listener.enterPrefixIncDecExpression(this);
        }
    };
    // @Override
    PrefixIncDecExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPrefixIncDecExpression) {
            listener.exitPrefixIncDecExpression(this);
        }
    };
    // @Override
    PrefixIncDecExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPrefixIncDecExpression) {
            return visitor.visitPrefixIncDecExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrefixIncDecExpressionContext;
}(ExpressionContext));
exports.PrefixIncDecExpressionContext = PrefixIncDecExpressionContext;
var PostfixIncDecExpressionContext = /** @class */ (function (_super) {
    tslib_1.__extends(PostfixIncDecExpressionContext, _super);
    function PostfixIncDecExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PostfixIncDecExpressionContext.prototype.chain = function () {
        return this.getRuleContext(0, ChainContext);
    };
    PostfixIncDecExpressionContext.prototype.Inc = function () { return this.tryGetToken(PhpParser.Inc, 0); };
    PostfixIncDecExpressionContext.prototype.Dec = function () { return this.tryGetToken(PhpParser.Dec, 0); };
    // @Override
    PostfixIncDecExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPostfixIncDecExpression) {
            listener.enterPostfixIncDecExpression(this);
        }
    };
    // @Override
    PostfixIncDecExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPostfixIncDecExpression) {
            listener.exitPostfixIncDecExpression(this);
        }
    };
    // @Override
    PostfixIncDecExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPostfixIncDecExpression) {
            return visitor.visitPostfixIncDecExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PostfixIncDecExpressionContext;
}(ExpressionContext));
exports.PostfixIncDecExpressionContext = PostfixIncDecExpressionContext;
var PrintExpressionContext = /** @class */ (function (_super) {
    tslib_1.__extends(PrintExpressionContext, _super);
    function PrintExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PrintExpressionContext.prototype.Print = function () { return this.getToken(PhpParser.Print, 0); };
    PrintExpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    // @Override
    PrintExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPrintExpression) {
            listener.enterPrintExpression(this);
        }
    };
    // @Override
    PrintExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPrintExpression) {
            listener.exitPrintExpression(this);
        }
    };
    // @Override
    PrintExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPrintExpression) {
            return visitor.visitPrintExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrintExpressionContext;
}(ExpressionContext));
exports.PrintExpressionContext = PrintExpressionContext;
var ChainExpressionContext = /** @class */ (function (_super) {
    tslib_1.__extends(ChainExpressionContext, _super);
    function ChainExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ChainExpressionContext.prototype.chain = function () {
        return this.getRuleContext(0, ChainContext);
    };
    // @Override
    ChainExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterChainExpression) {
            listener.enterChainExpression(this);
        }
    };
    // @Override
    ChainExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitChainExpression) {
            listener.exitChainExpression(this);
        }
    };
    // @Override
    ChainExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitChainExpression) {
            return visitor.visitChainExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ChainExpressionContext;
}(ExpressionContext));
exports.ChainExpressionContext = ChainExpressionContext;
var ScalarExpressionContext = /** @class */ (function (_super) {
    tslib_1.__extends(ScalarExpressionContext, _super);
    function ScalarExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ScalarExpressionContext.prototype.constant = function () {
        return this.tryGetRuleContext(0, ConstantContext);
    };
    ScalarExpressionContext.prototype.string = function () {
        return this.tryGetRuleContext(0, StringContext);
    };
    ScalarExpressionContext.prototype.Label = function () { return this.tryGetToken(PhpParser.Label, 0); };
    // @Override
    ScalarExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterScalarExpression) {
            listener.enterScalarExpression(this);
        }
    };
    // @Override
    ScalarExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitScalarExpression) {
            listener.exitScalarExpression(this);
        }
    };
    // @Override
    ScalarExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitScalarExpression) {
            return visitor.visitScalarExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ScalarExpressionContext;
}(ExpressionContext));
exports.ScalarExpressionContext = ScalarExpressionContext;
var BackQuoteStringExpressionContext = /** @class */ (function (_super) {
    tslib_1.__extends(BackQuoteStringExpressionContext, _super);
    function BackQuoteStringExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BackQuoteStringExpressionContext.prototype.BackQuoteString = function () { return this.getToken(PhpParser.BackQuoteString, 0); };
    // @Override
    BackQuoteStringExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterBackQuoteStringExpression) {
            listener.enterBackQuoteStringExpression(this);
        }
    };
    // @Override
    BackQuoteStringExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitBackQuoteStringExpression) {
            listener.exitBackQuoteStringExpression(this);
        }
    };
    // @Override
    BackQuoteStringExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitBackQuoteStringExpression) {
            return visitor.visitBackQuoteStringExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BackQuoteStringExpressionContext;
}(ExpressionContext));
exports.BackQuoteStringExpressionContext = BackQuoteStringExpressionContext;
var ParenthesisExpressionContext = /** @class */ (function (_super) {
    tslib_1.__extends(ParenthesisExpressionContext, _super);
    function ParenthesisExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ParenthesisExpressionContext.prototype.parentheses = function () {
        return this.getRuleContext(0, ParenthesesContext);
    };
    // @Override
    ParenthesisExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterParenthesisExpression) {
            listener.enterParenthesisExpression(this);
        }
    };
    // @Override
    ParenthesisExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitParenthesisExpression) {
            listener.exitParenthesisExpression(this);
        }
    };
    // @Override
    ParenthesisExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitParenthesisExpression) {
            return visitor.visitParenthesisExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParenthesisExpressionContext;
}(ExpressionContext));
exports.ParenthesisExpressionContext = ParenthesisExpressionContext;
var ArrayCreationExpressionContext = /** @class */ (function (_super) {
    tslib_1.__extends(ArrayCreationExpressionContext, _super);
    function ArrayCreationExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ArrayCreationExpressionContext.prototype.arrayCreation = function () {
        return this.getRuleContext(0, ArrayCreationContext);
    };
    // @Override
    ArrayCreationExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayCreationExpression) {
            listener.enterArrayCreationExpression(this);
        }
    };
    // @Override
    ArrayCreationExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayCreationExpression) {
            listener.exitArrayCreationExpression(this);
        }
    };
    // @Override
    ArrayCreationExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayCreationExpression) {
            return visitor.visitArrayCreationExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayCreationExpressionContext;
}(ExpressionContext));
exports.ArrayCreationExpressionContext = ArrayCreationExpressionContext;
var SpecialWordExpressionContext = /** @class */ (function (_super) {
    tslib_1.__extends(SpecialWordExpressionContext, _super);
    function SpecialWordExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    SpecialWordExpressionContext.prototype.Yield = function () { return this.tryGetToken(PhpParser.Yield, 0); };
    SpecialWordExpressionContext.prototype.List = function () { return this.tryGetToken(PhpParser.List, 0); };
    SpecialWordExpressionContext.prototype.OpenRoundBracket = function () { return this.tryGetToken(PhpParser.OpenRoundBracket, 0); };
    SpecialWordExpressionContext.prototype.assignmentList = function () {
        return this.tryGetRuleContext(0, AssignmentListContext);
    };
    SpecialWordExpressionContext.prototype.CloseRoundBracket = function () { return this.tryGetToken(PhpParser.CloseRoundBracket, 0); };
    SpecialWordExpressionContext.prototype.Eq = function () { return this.tryGetToken(PhpParser.Eq, 0); };
    SpecialWordExpressionContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    SpecialWordExpressionContext.prototype.IsSet = function () { return this.tryGetToken(PhpParser.IsSet, 0); };
    SpecialWordExpressionContext.prototype.chainList = function () {
        return this.tryGetRuleContext(0, ChainListContext);
    };
    SpecialWordExpressionContext.prototype.Empty = function () { return this.tryGetToken(PhpParser.Empty, 0); };
    SpecialWordExpressionContext.prototype.chain = function () {
        return this.tryGetRuleContext(0, ChainContext);
    };
    SpecialWordExpressionContext.prototype.Eval = function () { return this.tryGetToken(PhpParser.Eval, 0); };
    SpecialWordExpressionContext.prototype.Exit = function () { return this.tryGetToken(PhpParser.Exit, 0); };
    SpecialWordExpressionContext.prototype.parentheses = function () {
        return this.tryGetRuleContext(0, ParenthesesContext);
    };
    SpecialWordExpressionContext.prototype.Include = function () { return this.tryGetToken(PhpParser.Include, 0); };
    SpecialWordExpressionContext.prototype.IncludeOnce = function () { return this.tryGetToken(PhpParser.IncludeOnce, 0); };
    SpecialWordExpressionContext.prototype.Require = function () { return this.tryGetToken(PhpParser.Require, 0); };
    SpecialWordExpressionContext.prototype.RequireOnce = function () { return this.tryGetToken(PhpParser.RequireOnce, 0); };
    // @Override
    SpecialWordExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterSpecialWordExpression) {
            listener.enterSpecialWordExpression(this);
        }
    };
    // @Override
    SpecialWordExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitSpecialWordExpression) {
            listener.exitSpecialWordExpression(this);
        }
    };
    // @Override
    SpecialWordExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitSpecialWordExpression) {
            return visitor.visitSpecialWordExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SpecialWordExpressionContext;
}(ExpressionContext));
exports.SpecialWordExpressionContext = SpecialWordExpressionContext;
var LambdaFunctionExpressionContext = /** @class */ (function (_super) {
    tslib_1.__extends(LambdaFunctionExpressionContext, _super);
    function LambdaFunctionExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    LambdaFunctionExpressionContext.prototype.lambdaFunctionExpr = function () {
        return this.getRuleContext(0, LambdaFunctionExprContext);
    };
    // @Override
    LambdaFunctionExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterLambdaFunctionExpression) {
            listener.enterLambdaFunctionExpression(this);
        }
    };
    // @Override
    LambdaFunctionExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitLambdaFunctionExpression) {
            listener.exitLambdaFunctionExpression(this);
        }
    };
    // @Override
    LambdaFunctionExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitLambdaFunctionExpression) {
            return visitor.visitLambdaFunctionExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LambdaFunctionExpressionContext;
}(ExpressionContext));
exports.LambdaFunctionExpressionContext = LambdaFunctionExpressionContext;
var ArithmeticExpressionContext = /** @class */ (function (_super) {
    tslib_1.__extends(ArithmeticExpressionContext, _super);
    function ArithmeticExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ArithmeticExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    ArithmeticExpressionContext.prototype.Pow = function () { return this.tryGetToken(PhpParser.Pow, 0); };
    ArithmeticExpressionContext.prototype.Asterisk = function () { return this.tryGetToken(PhpParser.Asterisk, 0); };
    ArithmeticExpressionContext.prototype.Divide = function () { return this.tryGetToken(PhpParser.Divide, 0); };
    ArithmeticExpressionContext.prototype.Percent = function () { return this.tryGetToken(PhpParser.Percent, 0); };
    ArithmeticExpressionContext.prototype.Plus = function () { return this.tryGetToken(PhpParser.Plus, 0); };
    ArithmeticExpressionContext.prototype.Minus = function () { return this.tryGetToken(PhpParser.Minus, 0); };
    ArithmeticExpressionContext.prototype.Dot = function () { return this.tryGetToken(PhpParser.Dot, 0); };
    // @Override
    ArithmeticExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterArithmeticExpression) {
            listener.enterArithmeticExpression(this);
        }
    };
    // @Override
    ArithmeticExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitArithmeticExpression) {
            listener.exitArithmeticExpression(this);
        }
    };
    // @Override
    ArithmeticExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitArithmeticExpression) {
            return visitor.visitArithmeticExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArithmeticExpressionContext;
}(ExpressionContext));
exports.ArithmeticExpressionContext = ArithmeticExpressionContext;
var InstanceOfExpressionContext = /** @class */ (function (_super) {
    tslib_1.__extends(InstanceOfExpressionContext, _super);
    function InstanceOfExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    InstanceOfExpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    InstanceOfExpressionContext.prototype.InstanceOf = function () { return this.getToken(PhpParser.InstanceOf, 0); };
    InstanceOfExpressionContext.prototype.typeRef = function () {
        return this.getRuleContext(0, TypeRefContext);
    };
    // @Override
    InstanceOfExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterInstanceOfExpression) {
            listener.enterInstanceOfExpression(this);
        }
    };
    // @Override
    InstanceOfExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitInstanceOfExpression) {
            listener.exitInstanceOfExpression(this);
        }
    };
    // @Override
    InstanceOfExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitInstanceOfExpression) {
            return visitor.visitInstanceOfExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InstanceOfExpressionContext;
}(ExpressionContext));
exports.InstanceOfExpressionContext = InstanceOfExpressionContext;
var ComparisonExpressionContext = /** @class */ (function (_super) {
    tslib_1.__extends(ComparisonExpressionContext, _super);
    function ComparisonExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ComparisonExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    ComparisonExpressionContext.prototype.ShiftLeft = function () { return this.tryGetToken(PhpParser.ShiftLeft, 0); };
    ComparisonExpressionContext.prototype.ShiftRight = function () { return this.tryGetToken(PhpParser.ShiftRight, 0); };
    ComparisonExpressionContext.prototype.Less = function () { return this.tryGetToken(PhpParser.Less, 0); };
    ComparisonExpressionContext.prototype.IsSmallerOrEqual = function () { return this.tryGetToken(PhpParser.IsSmallerOrEqual, 0); };
    ComparisonExpressionContext.prototype.Greater = function () { return this.tryGetToken(PhpParser.Greater, 0); };
    ComparisonExpressionContext.prototype.IsGreaterOrEqual = function () { return this.tryGetToken(PhpParser.IsGreaterOrEqual, 0); };
    ComparisonExpressionContext.prototype.IsIdentical = function () { return this.tryGetToken(PhpParser.IsIdentical, 0); };
    ComparisonExpressionContext.prototype.IsNoidentical = function () { return this.tryGetToken(PhpParser.IsNoidentical, 0); };
    ComparisonExpressionContext.prototype.IsEqual = function () { return this.tryGetToken(PhpParser.IsEqual, 0); };
    ComparisonExpressionContext.prototype.IsNotEq = function () { return this.tryGetToken(PhpParser.IsNotEq, 0); };
    // @Override
    ComparisonExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterComparisonExpression) {
            listener.enterComparisonExpression(this);
        }
    };
    // @Override
    ComparisonExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitComparisonExpression) {
            listener.exitComparisonExpression(this);
        }
    };
    // @Override
    ComparisonExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitComparisonExpression) {
            return visitor.visitComparisonExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ComparisonExpressionContext;
}(ExpressionContext));
exports.ComparisonExpressionContext = ComparisonExpressionContext;
var BitwiseExpressionContext = /** @class */ (function (_super) {
    tslib_1.__extends(BitwiseExpressionContext, _super);
    function BitwiseExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BitwiseExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    BitwiseExpressionContext.prototype.Ampersand = function () { return this.tryGetToken(PhpParser.Ampersand, 0); };
    BitwiseExpressionContext.prototype.Caret = function () { return this.tryGetToken(PhpParser.Caret, 0); };
    BitwiseExpressionContext.prototype.Pipe = function () { return this.tryGetToken(PhpParser.Pipe, 0); };
    BitwiseExpressionContext.prototype.BooleanAnd = function () { return this.tryGetToken(PhpParser.BooleanAnd, 0); };
    BitwiseExpressionContext.prototype.BooleanOr = function () { return this.tryGetToken(PhpParser.BooleanOr, 0); };
    // @Override
    BitwiseExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterBitwiseExpression) {
            listener.enterBitwiseExpression(this);
        }
    };
    // @Override
    BitwiseExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitBitwiseExpression) {
            listener.exitBitwiseExpression(this);
        }
    };
    // @Override
    BitwiseExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitBitwiseExpression) {
            return visitor.visitBitwiseExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BitwiseExpressionContext;
}(ExpressionContext));
exports.BitwiseExpressionContext = BitwiseExpressionContext;
var ConditionalExpressionContext = /** @class */ (function (_super) {
    tslib_1.__extends(ConditionalExpressionContext, _super);
    function ConditionalExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ConditionalExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    ConditionalExpressionContext.prototype.Colon = function () { return this.getToken(PhpParser.Colon, 0); };
    ConditionalExpressionContext.prototype.QuestionMark = function () { return this.getToken(PhpParser.QuestionMark, 0); };
    // @Override
    ConditionalExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterConditionalExpression) {
            listener.enterConditionalExpression(this);
        }
    };
    // @Override
    ConditionalExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitConditionalExpression) {
            listener.exitConditionalExpression(this);
        }
    };
    // @Override
    ConditionalExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitConditionalExpression) {
            return visitor.visitConditionalExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConditionalExpressionContext;
}(ExpressionContext));
exports.ConditionalExpressionContext = ConditionalExpressionContext;
var NullCoalescingExpressionContext = /** @class */ (function (_super) {
    tslib_1.__extends(NullCoalescingExpressionContext, _super);
    function NullCoalescingExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    NullCoalescingExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    NullCoalescingExpressionContext.prototype.NullCoalescing = function () { return this.getToken(PhpParser.NullCoalescing, 0); };
    // @Override
    NullCoalescingExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterNullCoalescingExpression) {
            listener.enterNullCoalescingExpression(this);
        }
    };
    // @Override
    NullCoalescingExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitNullCoalescingExpression) {
            listener.exitNullCoalescingExpression(this);
        }
    };
    // @Override
    NullCoalescingExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitNullCoalescingExpression) {
            return visitor.visitNullCoalescingExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NullCoalescingExpressionContext;
}(ExpressionContext));
exports.NullCoalescingExpressionContext = NullCoalescingExpressionContext;
var SpaceshipExpressionContext = /** @class */ (function (_super) {
    tslib_1.__extends(SpaceshipExpressionContext, _super);
    function SpaceshipExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    SpaceshipExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    SpaceshipExpressionContext.prototype.Spaceship = function () { return this.getToken(PhpParser.Spaceship, 0); };
    // @Override
    SpaceshipExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterSpaceshipExpression) {
            listener.enterSpaceshipExpression(this);
        }
    };
    // @Override
    SpaceshipExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitSpaceshipExpression) {
            listener.exitSpaceshipExpression(this);
        }
    };
    // @Override
    SpaceshipExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitSpaceshipExpression) {
            return visitor.visitSpaceshipExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SpaceshipExpressionContext;
}(ExpressionContext));
exports.SpaceshipExpressionContext = SpaceshipExpressionContext;
var AssignmentExpressionContext = /** @class */ (function (_super) {
    tslib_1.__extends(AssignmentExpressionContext, _super);
    function AssignmentExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    AssignmentExpressionContext.prototype.assignable = function () {
        return this.getRuleContext(0, AssignableContext);
    };
    AssignmentExpressionContext.prototype.assignmentOperator = function () {
        return this.tryGetRuleContext(0, AssignmentOperatorContext);
    };
    AssignmentExpressionContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    AssignmentExpressionContext.prototype.Eq = function () { return this.tryGetToken(PhpParser.Eq, 0); };
    AssignmentExpressionContext.prototype.Ampersand = function () { return this.tryGetToken(PhpParser.Ampersand, 0); };
    AssignmentExpressionContext.prototype.chain = function () {
        return this.tryGetRuleContext(0, ChainContext);
    };
    AssignmentExpressionContext.prototype.newExpr = function () {
        return this.tryGetRuleContext(0, NewExprContext);
    };
    // @Override
    AssignmentExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignmentExpression) {
            listener.enterAssignmentExpression(this);
        }
    };
    // @Override
    AssignmentExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignmentExpression) {
            listener.exitAssignmentExpression(this);
        }
    };
    // @Override
    AssignmentExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignmentExpression) {
            return visitor.visitAssignmentExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignmentExpressionContext;
}(ExpressionContext));
exports.AssignmentExpressionContext = AssignmentExpressionContext;
var LogicalExpressionContext = /** @class */ (function (_super) {
    tslib_1.__extends(LogicalExpressionContext, _super);
    function LogicalExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    LogicalExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    LogicalExpressionContext.prototype.LogicalAnd = function () { return this.tryGetToken(PhpParser.LogicalAnd, 0); };
    LogicalExpressionContext.prototype.LogicalXor = function () { return this.tryGetToken(PhpParser.LogicalXor, 0); };
    LogicalExpressionContext.prototype.LogicalOr = function () { return this.tryGetToken(PhpParser.LogicalOr, 0); };
    // @Override
    LogicalExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterLogicalExpression) {
            listener.enterLogicalExpression(this);
        }
    };
    // @Override
    LogicalExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitLogicalExpression) {
            listener.exitLogicalExpression(this);
        }
    };
    // @Override
    LogicalExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitLogicalExpression) {
            return visitor.visitLogicalExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LogicalExpressionContext;
}(ExpressionContext));
exports.LogicalExpressionContext = LogicalExpressionContext;
var AssignableContext = /** @class */ (function (_super) {
    tslib_1.__extends(AssignableContext, _super);
    function AssignableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignableContext.prototype.chain = function () {
        return this.tryGetRuleContext(0, ChainContext);
    };
    AssignableContext.prototype.arrayCreation = function () {
        return this.tryGetRuleContext(0, ArrayCreationContext);
    };
    Object.defineProperty(AssignableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_assignable; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignableContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignable) {
            listener.enterAssignable(this);
        }
    };
    // @Override
    AssignableContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignable) {
            listener.exitAssignable(this);
        }
    };
    // @Override
    AssignableContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignable) {
            return visitor.visitAssignable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignableContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignableContext = AssignableContext;
var ArrayCreationContext = /** @class */ (function (_super) {
    tslib_1.__extends(ArrayCreationContext, _super);
    function ArrayCreationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayCreationContext.prototype.Array = function () { return this.tryGetToken(PhpParser.Array, 0); };
    ArrayCreationContext.prototype.OpenRoundBracket = function () { return this.tryGetToken(PhpParser.OpenRoundBracket, 0); };
    ArrayCreationContext.prototype.CloseRoundBracket = function () { return this.tryGetToken(PhpParser.CloseRoundBracket, 0); };
    ArrayCreationContext.prototype.OpenSquareBracket = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.OpenSquareBracket);
        }
        else {
            return this.getToken(PhpParser.OpenSquareBracket, i);
        }
    };
    ArrayCreationContext.prototype.CloseSquareBracket = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.CloseSquareBracket);
        }
        else {
            return this.getToken(PhpParser.CloseSquareBracket, i);
        }
    };
    ArrayCreationContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    ArrayCreationContext.prototype.arrayItemList = function () {
        return this.tryGetRuleContext(0, ArrayItemListContext);
    };
    Object.defineProperty(ArrayCreationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_arrayCreation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrayCreationContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayCreation) {
            listener.enterArrayCreation(this);
        }
    };
    // @Override
    ArrayCreationContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayCreation) {
            listener.exitArrayCreation(this);
        }
    };
    // @Override
    ArrayCreationContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayCreation) {
            return visitor.visitArrayCreation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayCreationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrayCreationContext = ArrayCreationContext;
var LambdaFunctionExprContext = /** @class */ (function (_super) {
    tslib_1.__extends(LambdaFunctionExprContext, _super);
    function LambdaFunctionExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LambdaFunctionExprContext.prototype.Function = function () { return this.tryGetToken(PhpParser.Function, 0); };
    LambdaFunctionExprContext.prototype.OpenRoundBracket = function () { return this.getToken(PhpParser.OpenRoundBracket, 0); };
    LambdaFunctionExprContext.prototype.formalParameterList = function () {
        return this.getRuleContext(0, FormalParameterListContext);
    };
    LambdaFunctionExprContext.prototype.CloseRoundBracket = function () { return this.getToken(PhpParser.CloseRoundBracket, 0); };
    LambdaFunctionExprContext.prototype.blockStatement = function () {
        return this.tryGetRuleContext(0, BlockStatementContext);
    };
    LambdaFunctionExprContext.prototype.Static = function () { return this.tryGetToken(PhpParser.Static, 0); };
    LambdaFunctionExprContext.prototype.Ampersand = function () { return this.tryGetToken(PhpParser.Ampersand, 0); };
    LambdaFunctionExprContext.prototype.lambdaFunctionUseVars = function () {
        return this.tryGetRuleContext(0, LambdaFunctionUseVarsContext);
    };
    LambdaFunctionExprContext.prototype.Colon = function () { return this.tryGetToken(PhpParser.Colon, 0); };
    LambdaFunctionExprContext.prototype.typeHint = function () {
        return this.tryGetRuleContext(0, TypeHintContext);
    };
    LambdaFunctionExprContext.prototype.LambdaFn = function () { return this.tryGetToken(PhpParser.LambdaFn, 0); };
    LambdaFunctionExprContext.prototype.DoubleArrow = function () { return this.tryGetToken(PhpParser.DoubleArrow, 0); };
    LambdaFunctionExprContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(LambdaFunctionExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_lambdaFunctionExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LambdaFunctionExprContext.prototype.enterRule = function (listener) {
        if (listener.enterLambdaFunctionExpr) {
            listener.enterLambdaFunctionExpr(this);
        }
    };
    // @Override
    LambdaFunctionExprContext.prototype.exitRule = function (listener) {
        if (listener.exitLambdaFunctionExpr) {
            listener.exitLambdaFunctionExpr(this);
        }
    };
    // @Override
    LambdaFunctionExprContext.prototype.accept = function (visitor) {
        if (visitor.visitLambdaFunctionExpr) {
            return visitor.visitLambdaFunctionExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LambdaFunctionExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LambdaFunctionExprContext = LambdaFunctionExprContext;
var NewExprContext = /** @class */ (function (_super) {
    tslib_1.__extends(NewExprContext, _super);
    function NewExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NewExprContext.prototype.New = function () { return this.getToken(PhpParser.New, 0); };
    NewExprContext.prototype.typeRef = function () {
        return this.getRuleContext(0, TypeRefContext);
    };
    NewExprContext.prototype.arguments = function () {
        return this.tryGetRuleContext(0, ArgumentsContext);
    };
    Object.defineProperty(NewExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_newExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NewExprContext.prototype.enterRule = function (listener) {
        if (listener.enterNewExpr) {
            listener.enterNewExpr(this);
        }
    };
    // @Override
    NewExprContext.prototype.exitRule = function (listener) {
        if (listener.exitNewExpr) {
            listener.exitNewExpr(this);
        }
    };
    // @Override
    NewExprContext.prototype.accept = function (visitor) {
        if (visitor.visitNewExpr) {
            return visitor.visitNewExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NewExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NewExprContext = NewExprContext;
var AssignmentOperatorContext = /** @class */ (function (_super) {
    tslib_1.__extends(AssignmentOperatorContext, _super);
    function AssignmentOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentOperatorContext.prototype.Eq = function () { return this.tryGetToken(PhpParser.Eq, 0); };
    AssignmentOperatorContext.prototype.PlusEqual = function () { return this.tryGetToken(PhpParser.PlusEqual, 0); };
    AssignmentOperatorContext.prototype.MinusEqual = function () { return this.tryGetToken(PhpParser.MinusEqual, 0); };
    AssignmentOperatorContext.prototype.MulEqual = function () { return this.tryGetToken(PhpParser.MulEqual, 0); };
    AssignmentOperatorContext.prototype.PowEqual = function () { return this.tryGetToken(PhpParser.PowEqual, 0); };
    AssignmentOperatorContext.prototype.DivEqual = function () { return this.tryGetToken(PhpParser.DivEqual, 0); };
    AssignmentOperatorContext.prototype.Concaequal = function () { return this.tryGetToken(PhpParser.Concaequal, 0); };
    AssignmentOperatorContext.prototype.ModEqual = function () { return this.tryGetToken(PhpParser.ModEqual, 0); };
    AssignmentOperatorContext.prototype.AndEqual = function () { return this.tryGetToken(PhpParser.AndEqual, 0); };
    AssignmentOperatorContext.prototype.OrEqual = function () { return this.tryGetToken(PhpParser.OrEqual, 0); };
    AssignmentOperatorContext.prototype.XorEqual = function () { return this.tryGetToken(PhpParser.XorEqual, 0); };
    AssignmentOperatorContext.prototype.ShiftLeftEqual = function () { return this.tryGetToken(PhpParser.ShiftLeftEqual, 0); };
    AssignmentOperatorContext.prototype.ShiftRightEqual = function () { return this.tryGetToken(PhpParser.ShiftRightEqual, 0); };
    AssignmentOperatorContext.prototype.NullCoalescingEqual = function () { return this.tryGetToken(PhpParser.NullCoalescingEqual, 0); };
    Object.defineProperty(AssignmentOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_assignmentOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignmentOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignmentOperator) {
            listener.enterAssignmentOperator(this);
        }
    };
    // @Override
    AssignmentOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignmentOperator) {
            listener.exitAssignmentOperator(this);
        }
    };
    // @Override
    AssignmentOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignmentOperator) {
            return visitor.visitAssignmentOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignmentOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignmentOperatorContext = AssignmentOperatorContext;
var YieldExpressionContext = /** @class */ (function (_super) {
    tslib_1.__extends(YieldExpressionContext, _super);
    function YieldExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    YieldExpressionContext.prototype.Yield = function () { return this.getToken(PhpParser.Yield, 0); };
    YieldExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    YieldExpressionContext.prototype.From = function () { return this.tryGetToken(PhpParser.From, 0); };
    YieldExpressionContext.prototype.DoubleArrow = function () { return this.tryGetToken(PhpParser.DoubleArrow, 0); };
    Object.defineProperty(YieldExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_yieldExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    YieldExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterYieldExpression) {
            listener.enterYieldExpression(this);
        }
    };
    // @Override
    YieldExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitYieldExpression) {
            listener.exitYieldExpression(this);
        }
    };
    // @Override
    YieldExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitYieldExpression) {
            return visitor.visitYieldExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return YieldExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.YieldExpressionContext = YieldExpressionContext;
var ArrayItemListContext = /** @class */ (function (_super) {
    tslib_1.__extends(ArrayItemListContext, _super);
    function ArrayItemListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayItemListContext.prototype.arrayItem = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ArrayItemContext);
        }
        else {
            return this.getRuleContext(i, ArrayItemContext);
        }
    };
    ArrayItemListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.Comma);
        }
        else {
            return this.getToken(PhpParser.Comma, i);
        }
    };
    Object.defineProperty(ArrayItemListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_arrayItemList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrayItemListContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayItemList) {
            listener.enterArrayItemList(this);
        }
    };
    // @Override
    ArrayItemListContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayItemList) {
            listener.exitArrayItemList(this);
        }
    };
    // @Override
    ArrayItemListContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayItemList) {
            return visitor.visitArrayItemList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayItemListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrayItemListContext = ArrayItemListContext;
var ArrayItemContext = /** @class */ (function (_super) {
    tslib_1.__extends(ArrayItemContext, _super);
    function ArrayItemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayItemContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    ArrayItemContext.prototype.DoubleArrow = function () { return this.tryGetToken(PhpParser.DoubleArrow, 0); };
    ArrayItemContext.prototype.Ampersand = function () { return this.tryGetToken(PhpParser.Ampersand, 0); };
    ArrayItemContext.prototype.chain = function () {
        return this.tryGetRuleContext(0, ChainContext);
    };
    Object.defineProperty(ArrayItemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_arrayItem; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrayItemContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayItem) {
            listener.enterArrayItem(this);
        }
    };
    // @Override
    ArrayItemContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayItem) {
            listener.exitArrayItem(this);
        }
    };
    // @Override
    ArrayItemContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayItem) {
            return visitor.visitArrayItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayItemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrayItemContext = ArrayItemContext;
var LambdaFunctionUseVarsContext = /** @class */ (function (_super) {
    tslib_1.__extends(LambdaFunctionUseVarsContext, _super);
    function LambdaFunctionUseVarsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LambdaFunctionUseVarsContext.prototype.Use = function () { return this.getToken(PhpParser.Use, 0); };
    LambdaFunctionUseVarsContext.prototype.OpenRoundBracket = function () { return this.getToken(PhpParser.OpenRoundBracket, 0); };
    LambdaFunctionUseVarsContext.prototype.lambdaFunctionUseVar = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LambdaFunctionUseVarContext);
        }
        else {
            return this.getRuleContext(i, LambdaFunctionUseVarContext);
        }
    };
    LambdaFunctionUseVarsContext.prototype.CloseRoundBracket = function () { return this.getToken(PhpParser.CloseRoundBracket, 0); };
    LambdaFunctionUseVarsContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.Comma);
        }
        else {
            return this.getToken(PhpParser.Comma, i);
        }
    };
    Object.defineProperty(LambdaFunctionUseVarsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_lambdaFunctionUseVars; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LambdaFunctionUseVarsContext.prototype.enterRule = function (listener) {
        if (listener.enterLambdaFunctionUseVars) {
            listener.enterLambdaFunctionUseVars(this);
        }
    };
    // @Override
    LambdaFunctionUseVarsContext.prototype.exitRule = function (listener) {
        if (listener.exitLambdaFunctionUseVars) {
            listener.exitLambdaFunctionUseVars(this);
        }
    };
    // @Override
    LambdaFunctionUseVarsContext.prototype.accept = function (visitor) {
        if (visitor.visitLambdaFunctionUseVars) {
            return visitor.visitLambdaFunctionUseVars(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LambdaFunctionUseVarsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LambdaFunctionUseVarsContext = LambdaFunctionUseVarsContext;
var LambdaFunctionUseVarContext = /** @class */ (function (_super) {
    tslib_1.__extends(LambdaFunctionUseVarContext, _super);
    function LambdaFunctionUseVarContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LambdaFunctionUseVarContext.prototype.VarName = function () { return this.getToken(PhpParser.VarName, 0); };
    LambdaFunctionUseVarContext.prototype.Ampersand = function () { return this.tryGetToken(PhpParser.Ampersand, 0); };
    Object.defineProperty(LambdaFunctionUseVarContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_lambdaFunctionUseVar; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LambdaFunctionUseVarContext.prototype.enterRule = function (listener) {
        if (listener.enterLambdaFunctionUseVar) {
            listener.enterLambdaFunctionUseVar(this);
        }
    };
    // @Override
    LambdaFunctionUseVarContext.prototype.exitRule = function (listener) {
        if (listener.exitLambdaFunctionUseVar) {
            listener.exitLambdaFunctionUseVar(this);
        }
    };
    // @Override
    LambdaFunctionUseVarContext.prototype.accept = function (visitor) {
        if (visitor.visitLambdaFunctionUseVar) {
            return visitor.visitLambdaFunctionUseVar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LambdaFunctionUseVarContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LambdaFunctionUseVarContext = LambdaFunctionUseVarContext;
var QualifiedStaticTypeRefContext = /** @class */ (function (_super) {
    tslib_1.__extends(QualifiedStaticTypeRefContext, _super);
    function QualifiedStaticTypeRefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QualifiedStaticTypeRefContext.prototype.qualifiedNamespaceName = function () {
        return this.tryGetRuleContext(0, QualifiedNamespaceNameContext);
    };
    QualifiedStaticTypeRefContext.prototype.genericDynamicArgs = function () {
        return this.tryGetRuleContext(0, GenericDynamicArgsContext);
    };
    QualifiedStaticTypeRefContext.prototype.Static = function () { return this.tryGetToken(PhpParser.Static, 0); };
    Object.defineProperty(QualifiedStaticTypeRefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_qualifiedStaticTypeRef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QualifiedStaticTypeRefContext.prototype.enterRule = function (listener) {
        if (listener.enterQualifiedStaticTypeRef) {
            listener.enterQualifiedStaticTypeRef(this);
        }
    };
    // @Override
    QualifiedStaticTypeRefContext.prototype.exitRule = function (listener) {
        if (listener.exitQualifiedStaticTypeRef) {
            listener.exitQualifiedStaticTypeRef(this);
        }
    };
    // @Override
    QualifiedStaticTypeRefContext.prototype.accept = function (visitor) {
        if (visitor.visitQualifiedStaticTypeRef) {
            return visitor.visitQualifiedStaticTypeRef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QualifiedStaticTypeRefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QualifiedStaticTypeRefContext = QualifiedStaticTypeRefContext;
var TypeRefContext = /** @class */ (function (_super) {
    tslib_1.__extends(TypeRefContext, _super);
    function TypeRefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeRefContext.prototype.qualifiedNamespaceName = function () {
        return this.tryGetRuleContext(0, QualifiedNamespaceNameContext);
    };
    TypeRefContext.prototype.indirectTypeRef = function () {
        return this.tryGetRuleContext(0, IndirectTypeRefContext);
    };
    TypeRefContext.prototype.genericDynamicArgs = function () {
        return this.tryGetRuleContext(0, GenericDynamicArgsContext);
    };
    TypeRefContext.prototype.primitiveType = function () {
        return this.tryGetRuleContext(0, PrimitiveTypeContext);
    };
    TypeRefContext.prototype.Static = function () { return this.tryGetToken(PhpParser.Static, 0); };
    TypeRefContext.prototype.anoymousClass = function () {
        return this.tryGetRuleContext(0, AnoymousClassContext);
    };
    Object.defineProperty(TypeRefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_typeRef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeRefContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeRef) {
            listener.enterTypeRef(this);
        }
    };
    // @Override
    TypeRefContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeRef) {
            listener.exitTypeRef(this);
        }
    };
    // @Override
    TypeRefContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeRef) {
            return visitor.visitTypeRef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeRefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeRefContext = TypeRefContext;
var AnoymousClassContext = /** @class */ (function (_super) {
    tslib_1.__extends(AnoymousClassContext, _super);
    function AnoymousClassContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AnoymousClassContext.prototype.attributes = function () {
        return this.getRuleContext(0, AttributesContext);
    };
    AnoymousClassContext.prototype.OpenCurlyBracket = function () { return this.getToken(PhpParser.OpenCurlyBracket, 0); };
    AnoymousClassContext.prototype.CloseCurlyBracket = function () { return this.getToken(PhpParser.CloseCurlyBracket, 0); };
    AnoymousClassContext.prototype.classEntryType = function () {
        return this.tryGetRuleContext(0, ClassEntryTypeContext);
    };
    AnoymousClassContext.prototype.Interface = function () { return this.tryGetToken(PhpParser.Interface, 0); };
    AnoymousClassContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    AnoymousClassContext.prototype.Private = function () { return this.tryGetToken(PhpParser.Private, 0); };
    AnoymousClassContext.prototype.modifier = function () {
        return this.tryGetRuleContext(0, ModifierContext);
    };
    AnoymousClassContext.prototype.Partial = function () { return this.tryGetToken(PhpParser.Partial, 0); };
    AnoymousClassContext.prototype.classStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassStatementContext);
        }
        else {
            return this.getRuleContext(i, ClassStatementContext);
        }
    };
    AnoymousClassContext.prototype.typeParameterListInBrackets = function () {
        return this.tryGetRuleContext(0, TypeParameterListInBracketsContext);
    };
    AnoymousClassContext.prototype.Extends = function () { return this.tryGetToken(PhpParser.Extends, 0); };
    AnoymousClassContext.prototype.qualifiedStaticTypeRef = function () {
        return this.tryGetRuleContext(0, QualifiedStaticTypeRefContext);
    };
    AnoymousClassContext.prototype.Implements = function () { return this.tryGetToken(PhpParser.Implements, 0); };
    AnoymousClassContext.prototype.interfaceList = function () {
        return this.tryGetRuleContext(0, InterfaceListContext);
    };
    Object.defineProperty(AnoymousClassContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_anoymousClass; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AnoymousClassContext.prototype.enterRule = function (listener) {
        if (listener.enterAnoymousClass) {
            listener.enterAnoymousClass(this);
        }
    };
    // @Override
    AnoymousClassContext.prototype.exitRule = function (listener) {
        if (listener.exitAnoymousClass) {
            listener.exitAnoymousClass(this);
        }
    };
    // @Override
    AnoymousClassContext.prototype.accept = function (visitor) {
        if (visitor.visitAnoymousClass) {
            return visitor.visitAnoymousClass(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AnoymousClassContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AnoymousClassContext = AnoymousClassContext;
var IndirectTypeRefContext = /** @class */ (function (_super) {
    tslib_1.__extends(IndirectTypeRefContext, _super);
    function IndirectTypeRefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IndirectTypeRefContext.prototype.chainBase = function () {
        return this.getRuleContext(0, ChainBaseContext);
    };
    IndirectTypeRefContext.prototype.ObjectOperator = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.ObjectOperator);
        }
        else {
            return this.getToken(PhpParser.ObjectOperator, i);
        }
    };
    IndirectTypeRefContext.prototype.keyedFieldName = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(KeyedFieldNameContext);
        }
        else {
            return this.getRuleContext(i, KeyedFieldNameContext);
        }
    };
    Object.defineProperty(IndirectTypeRefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_indirectTypeRef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IndirectTypeRefContext.prototype.enterRule = function (listener) {
        if (listener.enterIndirectTypeRef) {
            listener.enterIndirectTypeRef(this);
        }
    };
    // @Override
    IndirectTypeRefContext.prototype.exitRule = function (listener) {
        if (listener.exitIndirectTypeRef) {
            listener.exitIndirectTypeRef(this);
        }
    };
    // @Override
    IndirectTypeRefContext.prototype.accept = function (visitor) {
        if (visitor.visitIndirectTypeRef) {
            return visitor.visitIndirectTypeRef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IndirectTypeRefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IndirectTypeRefContext = IndirectTypeRefContext;
var QualifiedNamespaceNameContext = /** @class */ (function (_super) {
    tslib_1.__extends(QualifiedNamespaceNameContext, _super);
    function QualifiedNamespaceNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QualifiedNamespaceNameContext.prototype.namespaceNameList = function () {
        return this.getRuleContext(0, NamespaceNameListContext);
    };
    QualifiedNamespaceNameContext.prototype.Namespace = function () { return this.tryGetToken(PhpParser.Namespace, 0); };
    QualifiedNamespaceNameContext.prototype.NamespaceSeparator = function () { return this.tryGetToken(PhpParser.NamespaceSeparator, 0); };
    Object.defineProperty(QualifiedNamespaceNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_qualifiedNamespaceName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QualifiedNamespaceNameContext.prototype.enterRule = function (listener) {
        if (listener.enterQualifiedNamespaceName) {
            listener.enterQualifiedNamespaceName(this);
        }
    };
    // @Override
    QualifiedNamespaceNameContext.prototype.exitRule = function (listener) {
        if (listener.exitQualifiedNamespaceName) {
            listener.exitQualifiedNamespaceName(this);
        }
    };
    // @Override
    QualifiedNamespaceNameContext.prototype.accept = function (visitor) {
        if (visitor.visitQualifiedNamespaceName) {
            return visitor.visitQualifiedNamespaceName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QualifiedNamespaceNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QualifiedNamespaceNameContext = QualifiedNamespaceNameContext;
var NamespaceNameListContext = /** @class */ (function (_super) {
    tslib_1.__extends(NamespaceNameListContext, _super);
    function NamespaceNameListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamespaceNameListContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    NamespaceNameListContext.prototype.NamespaceSeparator = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.NamespaceSeparator);
        }
        else {
            return this.getToken(PhpParser.NamespaceSeparator, i);
        }
    };
    NamespaceNameListContext.prototype.namespaceNameTail = function () {
        return this.tryGetRuleContext(0, NamespaceNameTailContext);
    };
    Object.defineProperty(NamespaceNameListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_namespaceNameList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NamespaceNameListContext.prototype.enterRule = function (listener) {
        if (listener.enterNamespaceNameList) {
            listener.enterNamespaceNameList(this);
        }
    };
    // @Override
    NamespaceNameListContext.prototype.exitRule = function (listener) {
        if (listener.exitNamespaceNameList) {
            listener.exitNamespaceNameList(this);
        }
    };
    // @Override
    NamespaceNameListContext.prototype.accept = function (visitor) {
        if (visitor.visitNamespaceNameList) {
            return visitor.visitNamespaceNameList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NamespaceNameListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NamespaceNameListContext = NamespaceNameListContext;
var NamespaceNameTailContext = /** @class */ (function (_super) {
    tslib_1.__extends(NamespaceNameTailContext, _super);
    function NamespaceNameTailContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamespaceNameTailContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    NamespaceNameTailContext.prototype.As = function () { return this.tryGetToken(PhpParser.As, 0); };
    NamespaceNameTailContext.prototype.OpenCurlyBracket = function () { return this.tryGetToken(PhpParser.OpenCurlyBracket, 0); };
    NamespaceNameTailContext.prototype.namespaceNameTail = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NamespaceNameTailContext);
        }
        else {
            return this.getRuleContext(i, NamespaceNameTailContext);
        }
    };
    NamespaceNameTailContext.prototype.CloseCurlyBracket = function () { return this.tryGetToken(PhpParser.CloseCurlyBracket, 0); };
    NamespaceNameTailContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.Comma);
        }
        else {
            return this.getToken(PhpParser.Comma, i);
        }
    };
    Object.defineProperty(NamespaceNameTailContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_namespaceNameTail; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NamespaceNameTailContext.prototype.enterRule = function (listener) {
        if (listener.enterNamespaceNameTail) {
            listener.enterNamespaceNameTail(this);
        }
    };
    // @Override
    NamespaceNameTailContext.prototype.exitRule = function (listener) {
        if (listener.exitNamespaceNameTail) {
            listener.exitNamespaceNameTail(this);
        }
    };
    // @Override
    NamespaceNameTailContext.prototype.accept = function (visitor) {
        if (visitor.visitNamespaceNameTail) {
            return visitor.visitNamespaceNameTail(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NamespaceNameTailContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NamespaceNameTailContext = NamespaceNameTailContext;
var QualifiedNamespaceNameListContext = /** @class */ (function (_super) {
    tslib_1.__extends(QualifiedNamespaceNameListContext, _super);
    function QualifiedNamespaceNameListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QualifiedNamespaceNameListContext.prototype.qualifiedNamespaceName = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(QualifiedNamespaceNameContext);
        }
        else {
            return this.getRuleContext(i, QualifiedNamespaceNameContext);
        }
    };
    QualifiedNamespaceNameListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.Comma);
        }
        else {
            return this.getToken(PhpParser.Comma, i);
        }
    };
    Object.defineProperty(QualifiedNamespaceNameListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_qualifiedNamespaceNameList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QualifiedNamespaceNameListContext.prototype.enterRule = function (listener) {
        if (listener.enterQualifiedNamespaceNameList) {
            listener.enterQualifiedNamespaceNameList(this);
        }
    };
    // @Override
    QualifiedNamespaceNameListContext.prototype.exitRule = function (listener) {
        if (listener.exitQualifiedNamespaceNameList) {
            listener.exitQualifiedNamespaceNameList(this);
        }
    };
    // @Override
    QualifiedNamespaceNameListContext.prototype.accept = function (visitor) {
        if (visitor.visitQualifiedNamespaceNameList) {
            return visitor.visitQualifiedNamespaceNameList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QualifiedNamespaceNameListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QualifiedNamespaceNameListContext = QualifiedNamespaceNameListContext;
var ArgumentsContext = /** @class */ (function (_super) {
    tslib_1.__extends(ArgumentsContext, _super);
    function ArgumentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentsContext.prototype.OpenRoundBracket = function () { return this.getToken(PhpParser.OpenRoundBracket, 0); };
    ArgumentsContext.prototype.CloseRoundBracket = function () { return this.getToken(PhpParser.CloseRoundBracket, 0); };
    ArgumentsContext.prototype.actualArgument = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ActualArgumentContext);
        }
        else {
            return this.getRuleContext(i, ActualArgumentContext);
        }
    };
    ArgumentsContext.prototype.yieldExpression = function () {
        return this.tryGetRuleContext(0, YieldExpressionContext);
    };
    ArgumentsContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.Comma);
        }
        else {
            return this.getToken(PhpParser.Comma, i);
        }
    };
    Object.defineProperty(ArgumentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_arguments; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArgumentsContext.prototype.enterRule = function (listener) {
        if (listener.enterArguments) {
            listener.enterArguments(this);
        }
    };
    // @Override
    ArgumentsContext.prototype.exitRule = function (listener) {
        if (listener.exitArguments) {
            listener.exitArguments(this);
        }
    };
    // @Override
    ArgumentsContext.prototype.accept = function (visitor) {
        if (visitor.visitArguments) {
            return visitor.visitArguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgumentsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArgumentsContext = ArgumentsContext;
var ActualArgumentContext = /** @class */ (function (_super) {
    tslib_1.__extends(ActualArgumentContext, _super);
    function ActualArgumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ActualArgumentContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    ActualArgumentContext.prototype.Ellipsis = function () { return this.tryGetToken(PhpParser.Ellipsis, 0); };
    ActualArgumentContext.prototype.Ampersand = function () { return this.tryGetToken(PhpParser.Ampersand, 0); };
    ActualArgumentContext.prototype.chain = function () {
        return this.tryGetRuleContext(0, ChainContext);
    };
    Object.defineProperty(ActualArgumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_actualArgument; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ActualArgumentContext.prototype.enterRule = function (listener) {
        if (listener.enterActualArgument) {
            listener.enterActualArgument(this);
        }
    };
    // @Override
    ActualArgumentContext.prototype.exitRule = function (listener) {
        if (listener.exitActualArgument) {
            listener.exitActualArgument(this);
        }
    };
    // @Override
    ActualArgumentContext.prototype.accept = function (visitor) {
        if (visitor.visitActualArgument) {
            return visitor.visitActualArgument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ActualArgumentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ActualArgumentContext = ActualArgumentContext;
var ConstantInititalizerContext = /** @class */ (function (_super) {
    tslib_1.__extends(ConstantInititalizerContext, _super);
    function ConstantInititalizerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstantInititalizerContext.prototype.constant = function () {
        return this.tryGetRuleContext(0, ConstantContext);
    };
    ConstantInititalizerContext.prototype.string = function () {
        return this.tryGetRuleContext(0, StringContext);
    };
    ConstantInititalizerContext.prototype.Array = function () { return this.tryGetToken(PhpParser.Array, 0); };
    ConstantInititalizerContext.prototype.OpenRoundBracket = function () { return this.tryGetToken(PhpParser.OpenRoundBracket, 0); };
    ConstantInititalizerContext.prototype.CloseRoundBracket = function () { return this.tryGetToken(PhpParser.CloseRoundBracket, 0); };
    ConstantInititalizerContext.prototype.constantArrayItemList = function () {
        return this.tryGetRuleContext(0, ConstantArrayItemListContext);
    };
    ConstantInititalizerContext.prototype.Comma = function () { return this.tryGetToken(PhpParser.Comma, 0); };
    ConstantInititalizerContext.prototype.OpenSquareBracket = function () { return this.tryGetToken(PhpParser.OpenSquareBracket, 0); };
    ConstantInititalizerContext.prototype.CloseSquareBracket = function () { return this.tryGetToken(PhpParser.CloseSquareBracket, 0); };
    ConstantInititalizerContext.prototype.constantInititalizer = function () {
        return this.tryGetRuleContext(0, ConstantInititalizerContext);
    };
    ConstantInititalizerContext.prototype.Plus = function () { return this.tryGetToken(PhpParser.Plus, 0); };
    ConstantInititalizerContext.prototype.Minus = function () { return this.tryGetToken(PhpParser.Minus, 0); };
    Object.defineProperty(ConstantInititalizerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_constantInititalizer; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstantInititalizerContext.prototype.enterRule = function (listener) {
        if (listener.enterConstantInititalizer) {
            listener.enterConstantInititalizer(this);
        }
    };
    // @Override
    ConstantInititalizerContext.prototype.exitRule = function (listener) {
        if (listener.exitConstantInititalizer) {
            listener.exitConstantInititalizer(this);
        }
    };
    // @Override
    ConstantInititalizerContext.prototype.accept = function (visitor) {
        if (visitor.visitConstantInititalizer) {
            return visitor.visitConstantInititalizer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstantInititalizerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstantInititalizerContext = ConstantInititalizerContext;
var ConstantArrayItemListContext = /** @class */ (function (_super) {
    tslib_1.__extends(ConstantArrayItemListContext, _super);
    function ConstantArrayItemListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstantArrayItemListContext.prototype.constantArrayItem = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstantArrayItemContext);
        }
        else {
            return this.getRuleContext(i, ConstantArrayItemContext);
        }
    };
    ConstantArrayItemListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.Comma);
        }
        else {
            return this.getToken(PhpParser.Comma, i);
        }
    };
    Object.defineProperty(ConstantArrayItemListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_constantArrayItemList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstantArrayItemListContext.prototype.enterRule = function (listener) {
        if (listener.enterConstantArrayItemList) {
            listener.enterConstantArrayItemList(this);
        }
    };
    // @Override
    ConstantArrayItemListContext.prototype.exitRule = function (listener) {
        if (listener.exitConstantArrayItemList) {
            listener.exitConstantArrayItemList(this);
        }
    };
    // @Override
    ConstantArrayItemListContext.prototype.accept = function (visitor) {
        if (visitor.visitConstantArrayItemList) {
            return visitor.visitConstantArrayItemList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstantArrayItemListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstantArrayItemListContext = ConstantArrayItemListContext;
var ConstantArrayItemContext = /** @class */ (function (_super) {
    tslib_1.__extends(ConstantArrayItemContext, _super);
    function ConstantArrayItemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstantArrayItemContext.prototype.constantInititalizer = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstantInititalizerContext);
        }
        else {
            return this.getRuleContext(i, ConstantInititalizerContext);
        }
    };
    ConstantArrayItemContext.prototype.DoubleArrow = function () { return this.tryGetToken(PhpParser.DoubleArrow, 0); };
    Object.defineProperty(ConstantArrayItemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_constantArrayItem; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstantArrayItemContext.prototype.enterRule = function (listener) {
        if (listener.enterConstantArrayItem) {
            listener.enterConstantArrayItem(this);
        }
    };
    // @Override
    ConstantArrayItemContext.prototype.exitRule = function (listener) {
        if (listener.exitConstantArrayItem) {
            listener.exitConstantArrayItem(this);
        }
    };
    // @Override
    ConstantArrayItemContext.prototype.accept = function (visitor) {
        if (visitor.visitConstantArrayItem) {
            return visitor.visitConstantArrayItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstantArrayItemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstantArrayItemContext = ConstantArrayItemContext;
var ConstantContext = /** @class */ (function (_super) {
    tslib_1.__extends(ConstantContext, _super);
    function ConstantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstantContext.prototype.Null = function () { return this.tryGetToken(PhpParser.Null, 0); };
    ConstantContext.prototype.literalConstant = function () {
        return this.tryGetRuleContext(0, LiteralConstantContext);
    };
    ConstantContext.prototype.magicConstant = function () {
        return this.tryGetRuleContext(0, MagicConstantContext);
    };
    ConstantContext.prototype.classConstant = function () {
        return this.tryGetRuleContext(0, ClassConstantContext);
    };
    ConstantContext.prototype.qualifiedNamespaceName = function () {
        return this.tryGetRuleContext(0, QualifiedNamespaceNameContext);
    };
    Object.defineProperty(ConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_constant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstantContext.prototype.enterRule = function (listener) {
        if (listener.enterConstant) {
            listener.enterConstant(this);
        }
    };
    // @Override
    ConstantContext.prototype.exitRule = function (listener) {
        if (listener.exitConstant) {
            listener.exitConstant(this);
        }
    };
    // @Override
    ConstantContext.prototype.accept = function (visitor) {
        if (visitor.visitConstant) {
            return visitor.visitConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstantContext = ConstantContext;
var LiteralConstantContext = /** @class */ (function (_super) {
    tslib_1.__extends(LiteralConstantContext, _super);
    function LiteralConstantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LiteralConstantContext.prototype.Real = function () { return this.tryGetToken(PhpParser.Real, 0); };
    LiteralConstantContext.prototype.BooleanConstant = function () { return this.tryGetToken(PhpParser.BooleanConstant, 0); };
    LiteralConstantContext.prototype.numericConstant = function () {
        return this.tryGetRuleContext(0, NumericConstantContext);
    };
    LiteralConstantContext.prototype.stringConstant = function () {
        return this.tryGetRuleContext(0, StringConstantContext);
    };
    Object.defineProperty(LiteralConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_literalConstant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LiteralConstantContext.prototype.enterRule = function (listener) {
        if (listener.enterLiteralConstant) {
            listener.enterLiteralConstant(this);
        }
    };
    // @Override
    LiteralConstantContext.prototype.exitRule = function (listener) {
        if (listener.exitLiteralConstant) {
            listener.exitLiteralConstant(this);
        }
    };
    // @Override
    LiteralConstantContext.prototype.accept = function (visitor) {
        if (visitor.visitLiteralConstant) {
            return visitor.visitLiteralConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LiteralConstantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LiteralConstantContext = LiteralConstantContext;
var NumericConstantContext = /** @class */ (function (_super) {
    tslib_1.__extends(NumericConstantContext, _super);
    function NumericConstantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumericConstantContext.prototype.Octal = function () { return this.tryGetToken(PhpParser.Octal, 0); };
    NumericConstantContext.prototype.Decimal = function () { return this.tryGetToken(PhpParser.Decimal, 0); };
    NumericConstantContext.prototype.Hex = function () { return this.tryGetToken(PhpParser.Hex, 0); };
    NumericConstantContext.prototype.Binary = function () { return this.tryGetToken(PhpParser.Binary, 0); };
    Object.defineProperty(NumericConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_numericConstant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NumericConstantContext.prototype.enterRule = function (listener) {
        if (listener.enterNumericConstant) {
            listener.enterNumericConstant(this);
        }
    };
    // @Override
    NumericConstantContext.prototype.exitRule = function (listener) {
        if (listener.exitNumericConstant) {
            listener.exitNumericConstant(this);
        }
    };
    // @Override
    NumericConstantContext.prototype.accept = function (visitor) {
        if (visitor.visitNumericConstant) {
            return visitor.visitNumericConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumericConstantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NumericConstantContext = NumericConstantContext;
var ClassConstantContext = /** @class */ (function (_super) {
    tslib_1.__extends(ClassConstantContext, _super);
    function ClassConstantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassConstantContext.prototype.DoubleColon = function () { return this.getToken(PhpParser.DoubleColon, 0); };
    ClassConstantContext.prototype.Class = function () { return this.tryGetToken(PhpParser.Class, 0); };
    ClassConstantContext.prototype.Parent_ = function () { return this.tryGetToken(PhpParser.Parent_, 0); };
    ClassConstantContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    ClassConstantContext.prototype.Constructor = function () { return this.tryGetToken(PhpParser.Constructor, 0); };
    ClassConstantContext.prototype.Get = function () { return this.tryGetToken(PhpParser.Get, 0); };
    ClassConstantContext.prototype.Set = function () { return this.tryGetToken(PhpParser.Set, 0); };
    ClassConstantContext.prototype.qualifiedStaticTypeRef = function () {
        return this.tryGetRuleContext(0, QualifiedStaticTypeRefContext);
    };
    ClassConstantContext.prototype.keyedVariable = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(KeyedVariableContext);
        }
        else {
            return this.getRuleContext(i, KeyedVariableContext);
        }
    };
    ClassConstantContext.prototype.string = function () {
        return this.tryGetRuleContext(0, StringContext);
    };
    Object.defineProperty(ClassConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_classConstant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassConstantContext.prototype.enterRule = function (listener) {
        if (listener.enterClassConstant) {
            listener.enterClassConstant(this);
        }
    };
    // @Override
    ClassConstantContext.prototype.exitRule = function (listener) {
        if (listener.exitClassConstant) {
            listener.exitClassConstant(this);
        }
    };
    // @Override
    ClassConstantContext.prototype.accept = function (visitor) {
        if (visitor.visitClassConstant) {
            return visitor.visitClassConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassConstantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassConstantContext = ClassConstantContext;
var StringConstantContext = /** @class */ (function (_super) {
    tslib_1.__extends(StringConstantContext, _super);
    function StringConstantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringConstantContext.prototype.Label = function () { return this.getToken(PhpParser.Label, 0); };
    Object.defineProperty(StringConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_stringConstant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StringConstantContext.prototype.enterRule = function (listener) {
        if (listener.enterStringConstant) {
            listener.enterStringConstant(this);
        }
    };
    // @Override
    StringConstantContext.prototype.exitRule = function (listener) {
        if (listener.exitStringConstant) {
            listener.exitStringConstant(this);
        }
    };
    // @Override
    StringConstantContext.prototype.accept = function (visitor) {
        if (visitor.visitStringConstant) {
            return visitor.visitStringConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StringConstantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StringConstantContext = StringConstantContext;
var StringContext = /** @class */ (function (_super) {
    tslib_1.__extends(StringContext, _super);
    function StringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringContext.prototype.StartHereDoc = function () { return this.tryGetToken(PhpParser.StartHereDoc, 0); };
    StringContext.prototype.HereDocText = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.HereDocText);
        }
        else {
            return this.getToken(PhpParser.HereDocText, i);
        }
    };
    StringContext.prototype.StartNowDoc = function () { return this.tryGetToken(PhpParser.StartNowDoc, 0); };
    StringContext.prototype.SingleQuoteString = function () { return this.tryGetToken(PhpParser.SingleQuoteString, 0); };
    StringContext.prototype.DoubleQuote = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.DoubleQuote);
        }
        else {
            return this.getToken(PhpParser.DoubleQuote, i);
        }
    };
    StringContext.prototype.interpolatedStringPart = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(InterpolatedStringPartContext);
        }
        else {
            return this.getRuleContext(i, InterpolatedStringPartContext);
        }
    };
    Object.defineProperty(StringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_string; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StringContext.prototype.enterRule = function (listener) {
        if (listener.enterString) {
            listener.enterString(this);
        }
    };
    // @Override
    StringContext.prototype.exitRule = function (listener) {
        if (listener.exitString) {
            listener.exitString(this);
        }
    };
    // @Override
    StringContext.prototype.accept = function (visitor) {
        if (visitor.visitString) {
            return visitor.visitString(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StringContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StringContext = StringContext;
var InterpolatedStringPartContext = /** @class */ (function (_super) {
    tslib_1.__extends(InterpolatedStringPartContext, _super);
    function InterpolatedStringPartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InterpolatedStringPartContext.prototype.StringPart = function () { return this.tryGetToken(PhpParser.StringPart, 0); };
    InterpolatedStringPartContext.prototype.UnicodeEscape = function () { return this.tryGetToken(PhpParser.UnicodeEscape, 0); };
    InterpolatedStringPartContext.prototype.chain = function () {
        return this.tryGetRuleContext(0, ChainContext);
    };
    Object.defineProperty(InterpolatedStringPartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_interpolatedStringPart; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InterpolatedStringPartContext.prototype.enterRule = function (listener) {
        if (listener.enterInterpolatedStringPart) {
            listener.enterInterpolatedStringPart(this);
        }
    };
    // @Override
    InterpolatedStringPartContext.prototype.exitRule = function (listener) {
        if (listener.exitInterpolatedStringPart) {
            listener.exitInterpolatedStringPart(this);
        }
    };
    // @Override
    InterpolatedStringPartContext.prototype.accept = function (visitor) {
        if (visitor.visitInterpolatedStringPart) {
            return visitor.visitInterpolatedStringPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InterpolatedStringPartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InterpolatedStringPartContext = InterpolatedStringPartContext;
var ChainListContext = /** @class */ (function (_super) {
    tslib_1.__extends(ChainListContext, _super);
    function ChainListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ChainListContext.prototype.chain = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ChainContext);
        }
        else {
            return this.getRuleContext(i, ChainContext);
        }
    };
    ChainListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.Comma);
        }
        else {
            return this.getToken(PhpParser.Comma, i);
        }
    };
    Object.defineProperty(ChainListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_chainList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ChainListContext.prototype.enterRule = function (listener) {
        if (listener.enterChainList) {
            listener.enterChainList(this);
        }
    };
    // @Override
    ChainListContext.prototype.exitRule = function (listener) {
        if (listener.exitChainList) {
            listener.exitChainList(this);
        }
    };
    // @Override
    ChainListContext.prototype.accept = function (visitor) {
        if (visitor.visitChainList) {
            return visitor.visitChainList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ChainListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ChainListContext = ChainListContext;
var ChainContext = /** @class */ (function (_super) {
    tslib_1.__extends(ChainContext, _super);
    function ChainContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ChainContext.prototype.chainOrigin = function () {
        return this.getRuleContext(0, ChainOriginContext);
    };
    ChainContext.prototype.memberAccess = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MemberAccessContext);
        }
        else {
            return this.getRuleContext(i, MemberAccessContext);
        }
    };
    Object.defineProperty(ChainContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_chain; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ChainContext.prototype.enterRule = function (listener) {
        if (listener.enterChain) {
            listener.enterChain(this);
        }
    };
    // @Override
    ChainContext.prototype.exitRule = function (listener) {
        if (listener.exitChain) {
            listener.exitChain(this);
        }
    };
    // @Override
    ChainContext.prototype.accept = function (visitor) {
        if (visitor.visitChain) {
            return visitor.visitChain(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ChainContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ChainContext = ChainContext;
var ChainOriginContext = /** @class */ (function (_super) {
    tslib_1.__extends(ChainOriginContext, _super);
    function ChainOriginContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ChainOriginContext.prototype.chainBase = function () {
        return this.tryGetRuleContext(0, ChainBaseContext);
    };
    ChainOriginContext.prototype.functionCall = function () {
        return this.tryGetRuleContext(0, FunctionCallContext);
    };
    ChainOriginContext.prototype.OpenRoundBracket = function () { return this.tryGetToken(PhpParser.OpenRoundBracket, 0); };
    ChainOriginContext.prototype.newExpr = function () {
        return this.tryGetRuleContext(0, NewExprContext);
    };
    ChainOriginContext.prototype.CloseRoundBracket = function () { return this.tryGetToken(PhpParser.CloseRoundBracket, 0); };
    Object.defineProperty(ChainOriginContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_chainOrigin; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ChainOriginContext.prototype.enterRule = function (listener) {
        if (listener.enterChainOrigin) {
            listener.enterChainOrigin(this);
        }
    };
    // @Override
    ChainOriginContext.prototype.exitRule = function (listener) {
        if (listener.exitChainOrigin) {
            listener.exitChainOrigin(this);
        }
    };
    // @Override
    ChainOriginContext.prototype.accept = function (visitor) {
        if (visitor.visitChainOrigin) {
            return visitor.visitChainOrigin(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ChainOriginContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ChainOriginContext = ChainOriginContext;
var MemberAccessContext = /** @class */ (function (_super) {
    tslib_1.__extends(MemberAccessContext, _super);
    function MemberAccessContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MemberAccessContext.prototype.ObjectOperator = function () { return this.getToken(PhpParser.ObjectOperator, 0); };
    MemberAccessContext.prototype.keyedFieldName = function () {
        return this.getRuleContext(0, KeyedFieldNameContext);
    };
    MemberAccessContext.prototype.actualArguments = function () {
        return this.tryGetRuleContext(0, ActualArgumentsContext);
    };
    Object.defineProperty(MemberAccessContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_memberAccess; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MemberAccessContext.prototype.enterRule = function (listener) {
        if (listener.enterMemberAccess) {
            listener.enterMemberAccess(this);
        }
    };
    // @Override
    MemberAccessContext.prototype.exitRule = function (listener) {
        if (listener.exitMemberAccess) {
            listener.exitMemberAccess(this);
        }
    };
    // @Override
    MemberAccessContext.prototype.accept = function (visitor) {
        if (visitor.visitMemberAccess) {
            return visitor.visitMemberAccess(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MemberAccessContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MemberAccessContext = MemberAccessContext;
var FunctionCallContext = /** @class */ (function (_super) {
    tslib_1.__extends(FunctionCallContext, _super);
    function FunctionCallContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionCallContext.prototype.functionCallName = function () {
        return this.getRuleContext(0, FunctionCallNameContext);
    };
    FunctionCallContext.prototype.actualArguments = function () {
        return this.getRuleContext(0, ActualArgumentsContext);
    };
    Object.defineProperty(FunctionCallContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_functionCall; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionCallContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionCall) {
            listener.enterFunctionCall(this);
        }
    };
    // @Override
    FunctionCallContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionCall) {
            listener.exitFunctionCall(this);
        }
    };
    // @Override
    FunctionCallContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionCall) {
            return visitor.visitFunctionCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionCallContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionCallContext = FunctionCallContext;
var FunctionCallNameContext = /** @class */ (function (_super) {
    tslib_1.__extends(FunctionCallNameContext, _super);
    function FunctionCallNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionCallNameContext.prototype.qualifiedNamespaceName = function () {
        return this.tryGetRuleContext(0, QualifiedNamespaceNameContext);
    };
    FunctionCallNameContext.prototype.classConstant = function () {
        return this.tryGetRuleContext(0, ClassConstantContext);
    };
    FunctionCallNameContext.prototype.chainBase = function () {
        return this.tryGetRuleContext(0, ChainBaseContext);
    };
    FunctionCallNameContext.prototype.parentheses = function () {
        return this.tryGetRuleContext(0, ParenthesesContext);
    };
    Object.defineProperty(FunctionCallNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_functionCallName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionCallNameContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionCallName) {
            listener.enterFunctionCallName(this);
        }
    };
    // @Override
    FunctionCallNameContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionCallName) {
            listener.exitFunctionCallName(this);
        }
    };
    // @Override
    FunctionCallNameContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionCallName) {
            return visitor.visitFunctionCallName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionCallNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionCallNameContext = FunctionCallNameContext;
var ActualArgumentsContext = /** @class */ (function (_super) {
    tslib_1.__extends(ActualArgumentsContext, _super);
    function ActualArgumentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ActualArgumentsContext.prototype.arguments = function () {
        return this.getRuleContext(0, ArgumentsContext);
    };
    ActualArgumentsContext.prototype.genericDynamicArgs = function () {
        return this.tryGetRuleContext(0, GenericDynamicArgsContext);
    };
    ActualArgumentsContext.prototype.squareCurlyExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SquareCurlyExpressionContext);
        }
        else {
            return this.getRuleContext(i, SquareCurlyExpressionContext);
        }
    };
    Object.defineProperty(ActualArgumentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_actualArguments; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ActualArgumentsContext.prototype.enterRule = function (listener) {
        if (listener.enterActualArguments) {
            listener.enterActualArguments(this);
        }
    };
    // @Override
    ActualArgumentsContext.prototype.exitRule = function (listener) {
        if (listener.exitActualArguments) {
            listener.exitActualArguments(this);
        }
    };
    // @Override
    ActualArgumentsContext.prototype.accept = function (visitor) {
        if (visitor.visitActualArguments) {
            return visitor.visitActualArguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ActualArgumentsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ActualArgumentsContext = ActualArgumentsContext;
var ChainBaseContext = /** @class */ (function (_super) {
    tslib_1.__extends(ChainBaseContext, _super);
    function ChainBaseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ChainBaseContext.prototype.keyedVariable = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(KeyedVariableContext);
        }
        else {
            return this.getRuleContext(i, KeyedVariableContext);
        }
    };
    ChainBaseContext.prototype.DoubleColon = function () { return this.tryGetToken(PhpParser.DoubleColon, 0); };
    ChainBaseContext.prototype.qualifiedStaticTypeRef = function () {
        return this.tryGetRuleContext(0, QualifiedStaticTypeRefContext);
    };
    Object.defineProperty(ChainBaseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_chainBase; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ChainBaseContext.prototype.enterRule = function (listener) {
        if (listener.enterChainBase) {
            listener.enterChainBase(this);
        }
    };
    // @Override
    ChainBaseContext.prototype.exitRule = function (listener) {
        if (listener.exitChainBase) {
            listener.exitChainBase(this);
        }
    };
    // @Override
    ChainBaseContext.prototype.accept = function (visitor) {
        if (visitor.visitChainBase) {
            return visitor.visitChainBase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ChainBaseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ChainBaseContext = ChainBaseContext;
var KeyedFieldNameContext = /** @class */ (function (_super) {
    tslib_1.__extends(KeyedFieldNameContext, _super);
    function KeyedFieldNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeyedFieldNameContext.prototype.keyedSimpleFieldName = function () {
        return this.tryGetRuleContext(0, KeyedSimpleFieldNameContext);
    };
    KeyedFieldNameContext.prototype.keyedVariable = function () {
        return this.tryGetRuleContext(0, KeyedVariableContext);
    };
    Object.defineProperty(KeyedFieldNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_keyedFieldName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KeyedFieldNameContext.prototype.enterRule = function (listener) {
        if (listener.enterKeyedFieldName) {
            listener.enterKeyedFieldName(this);
        }
    };
    // @Override
    KeyedFieldNameContext.prototype.exitRule = function (listener) {
        if (listener.exitKeyedFieldName) {
            listener.exitKeyedFieldName(this);
        }
    };
    // @Override
    KeyedFieldNameContext.prototype.accept = function (visitor) {
        if (visitor.visitKeyedFieldName) {
            return visitor.visitKeyedFieldName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KeyedFieldNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KeyedFieldNameContext = KeyedFieldNameContext;
var KeyedSimpleFieldNameContext = /** @class */ (function (_super) {
    tslib_1.__extends(KeyedSimpleFieldNameContext, _super);
    function KeyedSimpleFieldNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeyedSimpleFieldNameContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    KeyedSimpleFieldNameContext.prototype.OpenCurlyBracket = function () { return this.tryGetToken(PhpParser.OpenCurlyBracket, 0); };
    KeyedSimpleFieldNameContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    KeyedSimpleFieldNameContext.prototype.CloseCurlyBracket = function () { return this.tryGetToken(PhpParser.CloseCurlyBracket, 0); };
    KeyedSimpleFieldNameContext.prototype.squareCurlyExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SquareCurlyExpressionContext);
        }
        else {
            return this.getRuleContext(i, SquareCurlyExpressionContext);
        }
    };
    Object.defineProperty(KeyedSimpleFieldNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_keyedSimpleFieldName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KeyedSimpleFieldNameContext.prototype.enterRule = function (listener) {
        if (listener.enterKeyedSimpleFieldName) {
            listener.enterKeyedSimpleFieldName(this);
        }
    };
    // @Override
    KeyedSimpleFieldNameContext.prototype.exitRule = function (listener) {
        if (listener.exitKeyedSimpleFieldName) {
            listener.exitKeyedSimpleFieldName(this);
        }
    };
    // @Override
    KeyedSimpleFieldNameContext.prototype.accept = function (visitor) {
        if (visitor.visitKeyedSimpleFieldName) {
            return visitor.visitKeyedSimpleFieldName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KeyedSimpleFieldNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KeyedSimpleFieldNameContext = KeyedSimpleFieldNameContext;
var KeyedVariableContext = /** @class */ (function (_super) {
    tslib_1.__extends(KeyedVariableContext, _super);
    function KeyedVariableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeyedVariableContext.prototype.VarName = function () { return this.tryGetToken(PhpParser.VarName, 0); };
    KeyedVariableContext.prototype.Dollar = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.Dollar);
        }
        else {
            return this.getToken(PhpParser.Dollar, i);
        }
    };
    KeyedVariableContext.prototype.OpenCurlyBracket = function () { return this.tryGetToken(PhpParser.OpenCurlyBracket, 0); };
    KeyedVariableContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    KeyedVariableContext.prototype.CloseCurlyBracket = function () { return this.tryGetToken(PhpParser.CloseCurlyBracket, 0); };
    KeyedVariableContext.prototype.squareCurlyExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SquareCurlyExpressionContext);
        }
        else {
            return this.getRuleContext(i, SquareCurlyExpressionContext);
        }
    };
    Object.defineProperty(KeyedVariableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_keyedVariable; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KeyedVariableContext.prototype.enterRule = function (listener) {
        if (listener.enterKeyedVariable) {
            listener.enterKeyedVariable(this);
        }
    };
    // @Override
    KeyedVariableContext.prototype.exitRule = function (listener) {
        if (listener.exitKeyedVariable) {
            listener.exitKeyedVariable(this);
        }
    };
    // @Override
    KeyedVariableContext.prototype.accept = function (visitor) {
        if (visitor.visitKeyedVariable) {
            return visitor.visitKeyedVariable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KeyedVariableContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KeyedVariableContext = KeyedVariableContext;
var SquareCurlyExpressionContext = /** @class */ (function (_super) {
    tslib_1.__extends(SquareCurlyExpressionContext, _super);
    function SquareCurlyExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SquareCurlyExpressionContext.prototype.OpenSquareBracket = function () { return this.tryGetToken(PhpParser.OpenSquareBracket, 0); };
    SquareCurlyExpressionContext.prototype.CloseSquareBracket = function () { return this.tryGetToken(PhpParser.CloseSquareBracket, 0); };
    SquareCurlyExpressionContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    SquareCurlyExpressionContext.prototype.OpenCurlyBracket = function () { return this.tryGetToken(PhpParser.OpenCurlyBracket, 0); };
    SquareCurlyExpressionContext.prototype.CloseCurlyBracket = function () { return this.tryGetToken(PhpParser.CloseCurlyBracket, 0); };
    Object.defineProperty(SquareCurlyExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_squareCurlyExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SquareCurlyExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterSquareCurlyExpression) {
            listener.enterSquareCurlyExpression(this);
        }
    };
    // @Override
    SquareCurlyExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitSquareCurlyExpression) {
            listener.exitSquareCurlyExpression(this);
        }
    };
    // @Override
    SquareCurlyExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitSquareCurlyExpression) {
            return visitor.visitSquareCurlyExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SquareCurlyExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SquareCurlyExpressionContext = SquareCurlyExpressionContext;
var AssignmentListContext = /** @class */ (function (_super) {
    tslib_1.__extends(AssignmentListContext, _super);
    function AssignmentListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentListContext.prototype.assignmentListElement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AssignmentListElementContext);
        }
        else {
            return this.getRuleContext(i, AssignmentListElementContext);
        }
    };
    AssignmentListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(PhpParser.Comma);
        }
        else {
            return this.getToken(PhpParser.Comma, i);
        }
    };
    Object.defineProperty(AssignmentListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_assignmentList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignmentListContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignmentList) {
            listener.enterAssignmentList(this);
        }
    };
    // @Override
    AssignmentListContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignmentList) {
            listener.exitAssignmentList(this);
        }
    };
    // @Override
    AssignmentListContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignmentList) {
            return visitor.visitAssignmentList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignmentListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignmentListContext = AssignmentListContext;
var AssignmentListElementContext = /** @class */ (function (_super) {
    tslib_1.__extends(AssignmentListElementContext, _super);
    function AssignmentListElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentListElementContext.prototype.chain = function () {
        return this.tryGetRuleContext(0, ChainContext);
    };
    AssignmentListElementContext.prototype.List = function () { return this.tryGetToken(PhpParser.List, 0); };
    AssignmentListElementContext.prototype.OpenRoundBracket = function () { return this.tryGetToken(PhpParser.OpenRoundBracket, 0); };
    AssignmentListElementContext.prototype.assignmentList = function () {
        return this.tryGetRuleContext(0, AssignmentListContext);
    };
    AssignmentListElementContext.prototype.CloseRoundBracket = function () { return this.tryGetToken(PhpParser.CloseRoundBracket, 0); };
    AssignmentListElementContext.prototype.arrayItem = function () {
        return this.tryGetRuleContext(0, ArrayItemContext);
    };
    Object.defineProperty(AssignmentListElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_assignmentListElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignmentListElementContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignmentListElement) {
            listener.enterAssignmentListElement(this);
        }
    };
    // @Override
    AssignmentListElementContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignmentListElement) {
            listener.exitAssignmentListElement(this);
        }
    };
    // @Override
    AssignmentListElementContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignmentListElement) {
            return visitor.visitAssignmentListElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignmentListElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignmentListElementContext = AssignmentListElementContext;
var ModifierContext = /** @class */ (function (_super) {
    tslib_1.__extends(ModifierContext, _super);
    function ModifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ModifierContext.prototype.Abstract = function () { return this.tryGetToken(PhpParser.Abstract, 0); };
    ModifierContext.prototype.Final = function () { return this.tryGetToken(PhpParser.Final, 0); };
    Object.defineProperty(ModifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_modifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ModifierContext.prototype.enterRule = function (listener) {
        if (listener.enterModifier) {
            listener.enterModifier(this);
        }
    };
    // @Override
    ModifierContext.prototype.exitRule = function (listener) {
        if (listener.exitModifier) {
            listener.exitModifier(this);
        }
    };
    // @Override
    ModifierContext.prototype.accept = function (visitor) {
        if (visitor.visitModifier) {
            return visitor.visitModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ModifierContext = ModifierContext;
var IdentifierContext = /** @class */ (function (_super) {
    tslib_1.__extends(IdentifierContext, _super);
    function IdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierContext.prototype.Label = function () { return this.tryGetToken(PhpParser.Label, 0); };
    IdentifierContext.prototype.Abstract = function () { return this.tryGetToken(PhpParser.Abstract, 0); };
    IdentifierContext.prototype.Array = function () { return this.tryGetToken(PhpParser.Array, 0); };
    IdentifierContext.prototype.As = function () { return this.tryGetToken(PhpParser.As, 0); };
    IdentifierContext.prototype.BinaryCast = function () { return this.tryGetToken(PhpParser.BinaryCast, 0); };
    IdentifierContext.prototype.BoolType = function () { return this.tryGetToken(PhpParser.BoolType, 0); };
    IdentifierContext.prototype.BooleanConstant = function () { return this.tryGetToken(PhpParser.BooleanConstant, 0); };
    IdentifierContext.prototype.Break = function () { return this.tryGetToken(PhpParser.Break, 0); };
    IdentifierContext.prototype.Callable = function () { return this.tryGetToken(PhpParser.Callable, 0); };
    IdentifierContext.prototype.Case = function () { return this.tryGetToken(PhpParser.Case, 0); };
    IdentifierContext.prototype.Catch = function () { return this.tryGetToken(PhpParser.Catch, 0); };
    IdentifierContext.prototype.Class = function () { return this.tryGetToken(PhpParser.Class, 0); };
    IdentifierContext.prototype.Clone = function () { return this.tryGetToken(PhpParser.Clone, 0); };
    IdentifierContext.prototype.Const = function () { return this.tryGetToken(PhpParser.Const, 0); };
    IdentifierContext.prototype.Continue = function () { return this.tryGetToken(PhpParser.Continue, 0); };
    IdentifierContext.prototype.Declare = function () { return this.tryGetToken(PhpParser.Declare, 0); };
    IdentifierContext.prototype.Default = function () { return this.tryGetToken(PhpParser.Default, 0); };
    IdentifierContext.prototype.Do = function () { return this.tryGetToken(PhpParser.Do, 0); };
    IdentifierContext.prototype.DoubleCast = function () { return this.tryGetToken(PhpParser.DoubleCast, 0); };
    IdentifierContext.prototype.DoubleType = function () { return this.tryGetToken(PhpParser.DoubleType, 0); };
    IdentifierContext.prototype.Echo = function () { return this.tryGetToken(PhpParser.Echo, 0); };
    IdentifierContext.prototype.Else = function () { return this.tryGetToken(PhpParser.Else, 0); };
    IdentifierContext.prototype.ElseIf = function () { return this.tryGetToken(PhpParser.ElseIf, 0); };
    IdentifierContext.prototype.Empty = function () { return this.tryGetToken(PhpParser.Empty, 0); };
    IdentifierContext.prototype.EndDeclare = function () { return this.tryGetToken(PhpParser.EndDeclare, 0); };
    IdentifierContext.prototype.EndFor = function () { return this.tryGetToken(PhpParser.EndFor, 0); };
    IdentifierContext.prototype.EndForeach = function () { return this.tryGetToken(PhpParser.EndForeach, 0); };
    IdentifierContext.prototype.EndIf = function () { return this.tryGetToken(PhpParser.EndIf, 0); };
    IdentifierContext.prototype.EndSwitch = function () { return this.tryGetToken(PhpParser.EndSwitch, 0); };
    IdentifierContext.prototype.EndWhile = function () { return this.tryGetToken(PhpParser.EndWhile, 0); };
    IdentifierContext.prototype.Eval = function () { return this.tryGetToken(PhpParser.Eval, 0); };
    IdentifierContext.prototype.Exit = function () { return this.tryGetToken(PhpParser.Exit, 0); };
    IdentifierContext.prototype.Extends = function () { return this.tryGetToken(PhpParser.Extends, 0); };
    IdentifierContext.prototype.Final = function () { return this.tryGetToken(PhpParser.Final, 0); };
    IdentifierContext.prototype.Finally = function () { return this.tryGetToken(PhpParser.Finally, 0); };
    IdentifierContext.prototype.FloatCast = function () { return this.tryGetToken(PhpParser.FloatCast, 0); };
    IdentifierContext.prototype.For = function () { return this.tryGetToken(PhpParser.For, 0); };
    IdentifierContext.prototype.Foreach = function () { return this.tryGetToken(PhpParser.Foreach, 0); };
    IdentifierContext.prototype.Function = function () { return this.tryGetToken(PhpParser.Function, 0); };
    IdentifierContext.prototype.Global = function () { return this.tryGetToken(PhpParser.Global, 0); };
    IdentifierContext.prototype.Goto = function () { return this.tryGetToken(PhpParser.Goto, 0); };
    IdentifierContext.prototype.If = function () { return this.tryGetToken(PhpParser.If, 0); };
    IdentifierContext.prototype.Implements = function () { return this.tryGetToken(PhpParser.Implements, 0); };
    IdentifierContext.prototype.Import = function () { return this.tryGetToken(PhpParser.Import, 0); };
    IdentifierContext.prototype.Include = function () { return this.tryGetToken(PhpParser.Include, 0); };
    IdentifierContext.prototype.IncludeOnce = function () { return this.tryGetToken(PhpParser.IncludeOnce, 0); };
    IdentifierContext.prototype.InstanceOf = function () { return this.tryGetToken(PhpParser.InstanceOf, 0); };
    IdentifierContext.prototype.InsteadOf = function () { return this.tryGetToken(PhpParser.InsteadOf, 0); };
    IdentifierContext.prototype.Int16Cast = function () { return this.tryGetToken(PhpParser.Int16Cast, 0); };
    IdentifierContext.prototype.Int64Type = function () { return this.tryGetToken(PhpParser.Int64Type, 0); };
    IdentifierContext.prototype.Int8Cast = function () { return this.tryGetToken(PhpParser.Int8Cast, 0); };
    IdentifierContext.prototype.Interface = function () { return this.tryGetToken(PhpParser.Interface, 0); };
    IdentifierContext.prototype.IntType = function () { return this.tryGetToken(PhpParser.IntType, 0); };
    IdentifierContext.prototype.IsSet = function () { return this.tryGetToken(PhpParser.IsSet, 0); };
    IdentifierContext.prototype.List = function () { return this.tryGetToken(PhpParser.List, 0); };
    IdentifierContext.prototype.LogicalAnd = function () { return this.tryGetToken(PhpParser.LogicalAnd, 0); };
    IdentifierContext.prototype.LogicalOr = function () { return this.tryGetToken(PhpParser.LogicalOr, 0); };
    IdentifierContext.prototype.LogicalXor = function () { return this.tryGetToken(PhpParser.LogicalXor, 0); };
    IdentifierContext.prototype.Namespace = function () { return this.tryGetToken(PhpParser.Namespace, 0); };
    IdentifierContext.prototype.New = function () { return this.tryGetToken(PhpParser.New, 0); };
    IdentifierContext.prototype.Null = function () { return this.tryGetToken(PhpParser.Null, 0); };
    IdentifierContext.prototype.ObjectType = function () { return this.tryGetToken(PhpParser.ObjectType, 0); };
    IdentifierContext.prototype.Parent_ = function () { return this.tryGetToken(PhpParser.Parent_, 0); };
    IdentifierContext.prototype.Partial = function () { return this.tryGetToken(PhpParser.Partial, 0); };
    IdentifierContext.prototype.Print = function () { return this.tryGetToken(PhpParser.Print, 0); };
    IdentifierContext.prototype.Private = function () { return this.tryGetToken(PhpParser.Private, 0); };
    IdentifierContext.prototype.Protected = function () { return this.tryGetToken(PhpParser.Protected, 0); };
    IdentifierContext.prototype.Public = function () { return this.tryGetToken(PhpParser.Public, 0); };
    IdentifierContext.prototype.Require = function () { return this.tryGetToken(PhpParser.Require, 0); };
    IdentifierContext.prototype.RequireOnce = function () { return this.tryGetToken(PhpParser.RequireOnce, 0); };
    IdentifierContext.prototype.Resource = function () { return this.tryGetToken(PhpParser.Resource, 0); };
    IdentifierContext.prototype.Return = function () { return this.tryGetToken(PhpParser.Return, 0); };
    IdentifierContext.prototype.Static = function () { return this.tryGetToken(PhpParser.Static, 0); };
    IdentifierContext.prototype.StringType = function () { return this.tryGetToken(PhpParser.StringType, 0); };
    IdentifierContext.prototype.Switch = function () { return this.tryGetToken(PhpParser.Switch, 0); };
    IdentifierContext.prototype.Throw = function () { return this.tryGetToken(PhpParser.Throw, 0); };
    IdentifierContext.prototype.Trait = function () { return this.tryGetToken(PhpParser.Trait, 0); };
    IdentifierContext.prototype.Try = function () { return this.tryGetToken(PhpParser.Try, 0); };
    IdentifierContext.prototype.Typeof = function () { return this.tryGetToken(PhpParser.Typeof, 0); };
    IdentifierContext.prototype.UintCast = function () { return this.tryGetToken(PhpParser.UintCast, 0); };
    IdentifierContext.prototype.UnicodeCast = function () { return this.tryGetToken(PhpParser.UnicodeCast, 0); };
    IdentifierContext.prototype.Unset = function () { return this.tryGetToken(PhpParser.Unset, 0); };
    IdentifierContext.prototype.Use = function () { return this.tryGetToken(PhpParser.Use, 0); };
    IdentifierContext.prototype.Var = function () { return this.tryGetToken(PhpParser.Var, 0); };
    IdentifierContext.prototype.While = function () { return this.tryGetToken(PhpParser.While, 0); };
    IdentifierContext.prototype.Yield = function () { return this.tryGetToken(PhpParser.Yield, 0); };
    IdentifierContext.prototype.From = function () { return this.tryGetToken(PhpParser.From, 0); };
    IdentifierContext.prototype.Get = function () { return this.tryGetToken(PhpParser.Get, 0); };
    IdentifierContext.prototype.Set = function () { return this.tryGetToken(PhpParser.Set, 0); };
    IdentifierContext.prototype.Call = function () { return this.tryGetToken(PhpParser.Call, 0); };
    IdentifierContext.prototype.CallStatic = function () { return this.tryGetToken(PhpParser.CallStatic, 0); };
    IdentifierContext.prototype.Constructor = function () { return this.tryGetToken(PhpParser.Constructor, 0); };
    IdentifierContext.prototype.Destruct = function () { return this.tryGetToken(PhpParser.Destruct, 0); };
    IdentifierContext.prototype.Wakeup = function () { return this.tryGetToken(PhpParser.Wakeup, 0); };
    IdentifierContext.prototype.Sleep = function () { return this.tryGetToken(PhpParser.Sleep, 0); };
    IdentifierContext.prototype.Autoload = function () { return this.tryGetToken(PhpParser.Autoload, 0); };
    IdentifierContext.prototype.IsSet__ = function () { return this.tryGetToken(PhpParser.IsSet__, 0); };
    IdentifierContext.prototype.Unset__ = function () { return this.tryGetToken(PhpParser.Unset__, 0); };
    IdentifierContext.prototype.ToString__ = function () { return this.tryGetToken(PhpParser.ToString__, 0); };
    IdentifierContext.prototype.Invoke = function () { return this.tryGetToken(PhpParser.Invoke, 0); };
    IdentifierContext.prototype.SetState = function () { return this.tryGetToken(PhpParser.SetState, 0); };
    IdentifierContext.prototype.Clone__ = function () { return this.tryGetToken(PhpParser.Clone__, 0); };
    IdentifierContext.prototype.DebugInfo = function () { return this.tryGetToken(PhpParser.DebugInfo, 0); };
    IdentifierContext.prototype.Namespace__ = function () { return this.tryGetToken(PhpParser.Namespace__, 0); };
    IdentifierContext.prototype.Class__ = function () { return this.tryGetToken(PhpParser.Class__, 0); };
    IdentifierContext.prototype.Traic__ = function () { return this.tryGetToken(PhpParser.Traic__, 0); };
    IdentifierContext.prototype.Function__ = function () { return this.tryGetToken(PhpParser.Function__, 0); };
    IdentifierContext.prototype.Method__ = function () { return this.tryGetToken(PhpParser.Method__, 0); };
    IdentifierContext.prototype.Line__ = function () { return this.tryGetToken(PhpParser.Line__, 0); };
    IdentifierContext.prototype.File__ = function () { return this.tryGetToken(PhpParser.File__, 0); };
    IdentifierContext.prototype.Dir__ = function () { return this.tryGetToken(PhpParser.Dir__, 0); };
    Object.defineProperty(IdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_identifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdentifierContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentifier) {
            listener.enterIdentifier(this);
        }
    };
    // @Override
    IdentifierContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentifier) {
            listener.exitIdentifier(this);
        }
    };
    // @Override
    IdentifierContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdentifierContext = IdentifierContext;
var MemberModifierContext = /** @class */ (function (_super) {
    tslib_1.__extends(MemberModifierContext, _super);
    function MemberModifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MemberModifierContext.prototype.Public = function () { return this.tryGetToken(PhpParser.Public, 0); };
    MemberModifierContext.prototype.Protected = function () { return this.tryGetToken(PhpParser.Protected, 0); };
    MemberModifierContext.prototype.Private = function () { return this.tryGetToken(PhpParser.Private, 0); };
    MemberModifierContext.prototype.Static = function () { return this.tryGetToken(PhpParser.Static, 0); };
    MemberModifierContext.prototype.Abstract = function () { return this.tryGetToken(PhpParser.Abstract, 0); };
    MemberModifierContext.prototype.Final = function () { return this.tryGetToken(PhpParser.Final, 0); };
    Object.defineProperty(MemberModifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_memberModifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MemberModifierContext.prototype.enterRule = function (listener) {
        if (listener.enterMemberModifier) {
            listener.enterMemberModifier(this);
        }
    };
    // @Override
    MemberModifierContext.prototype.exitRule = function (listener) {
        if (listener.exitMemberModifier) {
            listener.exitMemberModifier(this);
        }
    };
    // @Override
    MemberModifierContext.prototype.accept = function (visitor) {
        if (visitor.visitMemberModifier) {
            return visitor.visitMemberModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MemberModifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MemberModifierContext = MemberModifierContext;
var MagicConstantContext = /** @class */ (function (_super) {
    tslib_1.__extends(MagicConstantContext, _super);
    function MagicConstantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MagicConstantContext.prototype.Namespace__ = function () { return this.tryGetToken(PhpParser.Namespace__, 0); };
    MagicConstantContext.prototype.Class__ = function () { return this.tryGetToken(PhpParser.Class__, 0); };
    MagicConstantContext.prototype.Traic__ = function () { return this.tryGetToken(PhpParser.Traic__, 0); };
    MagicConstantContext.prototype.Function__ = function () { return this.tryGetToken(PhpParser.Function__, 0); };
    MagicConstantContext.prototype.Method__ = function () { return this.tryGetToken(PhpParser.Method__, 0); };
    MagicConstantContext.prototype.Line__ = function () { return this.tryGetToken(PhpParser.Line__, 0); };
    MagicConstantContext.prototype.File__ = function () { return this.tryGetToken(PhpParser.File__, 0); };
    MagicConstantContext.prototype.Dir__ = function () { return this.tryGetToken(PhpParser.Dir__, 0); };
    Object.defineProperty(MagicConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_magicConstant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MagicConstantContext.prototype.enterRule = function (listener) {
        if (listener.enterMagicConstant) {
            listener.enterMagicConstant(this);
        }
    };
    // @Override
    MagicConstantContext.prototype.exitRule = function (listener) {
        if (listener.exitMagicConstant) {
            listener.exitMagicConstant(this);
        }
    };
    // @Override
    MagicConstantContext.prototype.accept = function (visitor) {
        if (visitor.visitMagicConstant) {
            return visitor.visitMagicConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MagicConstantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MagicConstantContext = MagicConstantContext;
var MagicMethodContext = /** @class */ (function (_super) {
    tslib_1.__extends(MagicMethodContext, _super);
    function MagicMethodContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MagicMethodContext.prototype.Get = function () { return this.tryGetToken(PhpParser.Get, 0); };
    MagicMethodContext.prototype.Set = function () { return this.tryGetToken(PhpParser.Set, 0); };
    MagicMethodContext.prototype.Call = function () { return this.tryGetToken(PhpParser.Call, 0); };
    MagicMethodContext.prototype.CallStatic = function () { return this.tryGetToken(PhpParser.CallStatic, 0); };
    MagicMethodContext.prototype.Constructor = function () { return this.tryGetToken(PhpParser.Constructor, 0); };
    MagicMethodContext.prototype.Destruct = function () { return this.tryGetToken(PhpParser.Destruct, 0); };
    MagicMethodContext.prototype.Wakeup = function () { return this.tryGetToken(PhpParser.Wakeup, 0); };
    MagicMethodContext.prototype.Sleep = function () { return this.tryGetToken(PhpParser.Sleep, 0); };
    MagicMethodContext.prototype.Autoload = function () { return this.tryGetToken(PhpParser.Autoload, 0); };
    MagicMethodContext.prototype.IsSet__ = function () { return this.tryGetToken(PhpParser.IsSet__, 0); };
    MagicMethodContext.prototype.Unset__ = function () { return this.tryGetToken(PhpParser.Unset__, 0); };
    MagicMethodContext.prototype.ToString__ = function () { return this.tryGetToken(PhpParser.ToString__, 0); };
    MagicMethodContext.prototype.Invoke = function () { return this.tryGetToken(PhpParser.Invoke, 0); };
    MagicMethodContext.prototype.SetState = function () { return this.tryGetToken(PhpParser.SetState, 0); };
    MagicMethodContext.prototype.Clone__ = function () { return this.tryGetToken(PhpParser.Clone__, 0); };
    MagicMethodContext.prototype.DebugInfo = function () { return this.tryGetToken(PhpParser.DebugInfo, 0); };
    Object.defineProperty(MagicMethodContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_magicMethod; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MagicMethodContext.prototype.enterRule = function (listener) {
        if (listener.enterMagicMethod) {
            listener.enterMagicMethod(this);
        }
    };
    // @Override
    MagicMethodContext.prototype.exitRule = function (listener) {
        if (listener.exitMagicMethod) {
            listener.exitMagicMethod(this);
        }
    };
    // @Override
    MagicMethodContext.prototype.accept = function (visitor) {
        if (visitor.visitMagicMethod) {
            return visitor.visitMagicMethod(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MagicMethodContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MagicMethodContext = MagicMethodContext;
var PrimitiveTypeContext = /** @class */ (function (_super) {
    tslib_1.__extends(PrimitiveTypeContext, _super);
    function PrimitiveTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrimitiveTypeContext.prototype.BoolType = function () { return this.tryGetToken(PhpParser.BoolType, 0); };
    PrimitiveTypeContext.prototype.IntType = function () { return this.tryGetToken(PhpParser.IntType, 0); };
    PrimitiveTypeContext.prototype.Int64Type = function () { return this.tryGetToken(PhpParser.Int64Type, 0); };
    PrimitiveTypeContext.prototype.DoubleType = function () { return this.tryGetToken(PhpParser.DoubleType, 0); };
    PrimitiveTypeContext.prototype.StringType = function () { return this.tryGetToken(PhpParser.StringType, 0); };
    PrimitiveTypeContext.prototype.Resource = function () { return this.tryGetToken(PhpParser.Resource, 0); };
    PrimitiveTypeContext.prototype.ObjectType = function () { return this.tryGetToken(PhpParser.ObjectType, 0); };
    PrimitiveTypeContext.prototype.Array = function () { return this.tryGetToken(PhpParser.Array, 0); };
    Object.defineProperty(PrimitiveTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_primitiveType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrimitiveTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterPrimitiveType) {
            listener.enterPrimitiveType(this);
        }
    };
    // @Override
    PrimitiveTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitPrimitiveType) {
            listener.exitPrimitiveType(this);
        }
    };
    // @Override
    PrimitiveTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitPrimitiveType) {
            return visitor.visitPrimitiveType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrimitiveTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrimitiveTypeContext = PrimitiveTypeContext;
var CastOperationContext = /** @class */ (function (_super) {
    tslib_1.__extends(CastOperationContext, _super);
    function CastOperationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CastOperationContext.prototype.BoolType = function () { return this.tryGetToken(PhpParser.BoolType, 0); };
    CastOperationContext.prototype.Int8Cast = function () { return this.tryGetToken(PhpParser.Int8Cast, 0); };
    CastOperationContext.prototype.Int16Cast = function () { return this.tryGetToken(PhpParser.Int16Cast, 0); };
    CastOperationContext.prototype.IntType = function () { return this.tryGetToken(PhpParser.IntType, 0); };
    CastOperationContext.prototype.Int64Type = function () { return this.tryGetToken(PhpParser.Int64Type, 0); };
    CastOperationContext.prototype.UintCast = function () { return this.tryGetToken(PhpParser.UintCast, 0); };
    CastOperationContext.prototype.DoubleCast = function () { return this.tryGetToken(PhpParser.DoubleCast, 0); };
    CastOperationContext.prototype.DoubleType = function () { return this.tryGetToken(PhpParser.DoubleType, 0); };
    CastOperationContext.prototype.FloatCast = function () { return this.tryGetToken(PhpParser.FloatCast, 0); };
    CastOperationContext.prototype.StringType = function () { return this.tryGetToken(PhpParser.StringType, 0); };
    CastOperationContext.prototype.BinaryCast = function () { return this.tryGetToken(PhpParser.BinaryCast, 0); };
    CastOperationContext.prototype.UnicodeCast = function () { return this.tryGetToken(PhpParser.UnicodeCast, 0); };
    CastOperationContext.prototype.Array = function () { return this.tryGetToken(PhpParser.Array, 0); };
    CastOperationContext.prototype.ObjectType = function () { return this.tryGetToken(PhpParser.ObjectType, 0); };
    CastOperationContext.prototype.Resource = function () { return this.tryGetToken(PhpParser.Resource, 0); };
    CastOperationContext.prototype.Unset = function () { return this.tryGetToken(PhpParser.Unset, 0); };
    Object.defineProperty(CastOperationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PhpParser.RULE_castOperation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CastOperationContext.prototype.enterRule = function (listener) {
        if (listener.enterCastOperation) {
            listener.enterCastOperation(this);
        }
    };
    // @Override
    CastOperationContext.prototype.exitRule = function (listener) {
        if (listener.exitCastOperation) {
            listener.exitCastOperation(this);
        }
    };
    // @Override
    CastOperationContext.prototype.accept = function (visitor) {
        if (visitor.visitCastOperation) {
            return visitor.visitCastOperation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CastOperationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CastOperationContext = CastOperationContext;
//# sourceMappingURL=PhpParser.js.map