"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.simpleLogin = void 0;
var register_1 = require("./lib-source/register");
var get_user_1 = require("./lib-source/get-user");
var create_token_1 = require("./lib-source/create-token");
var check_token_1 = require("./lib-source/check-token");
var delete_user_1 = require("./lib-source/delete-user");
var SimpleLogin = /** @class */ (function () {
    function SimpleLogin() {
        var _this = this;
        this.register = function (_a) {
            var email = _a.email, password = _a.password, domain = _a.domain, domainkey = _a.domainkey;
            return __awaiter(_this, void 0, void 0, function () {
                var postUserRequest;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, (0, register_1.loginFunction)(email, password, domain, domainkey)];
                        case 1:
                            postUserRequest = _b.sent();
                            return [2 /*return*/, postUserRequest];
                    }
                });
            });
        };
        this.getUser = function (_a) {
            var email = _a.email, domain = _a.domain, domainkey = _a.domainkey;
            return __awaiter(_this, void 0, void 0, function () {
                var getUserRequest;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, (0, get_user_1.getUserFunction)(email, domain, domainkey)];
                        case 1:
                            getUserRequest = _b.sent();
                            return [2 /*return*/, getUserRequest];
                    }
                });
            });
        };
        this.createToken = function (email) { return __awaiter(_this, void 0, void 0, function () {
            var createTokenRequest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, create_token_1.createTokenFunction)(email)];
                    case 1:
                        createTokenRequest = _a.sent();
                        return [2 /*return*/, createTokenRequest];
                }
            });
        }); };
        this.checkToken = function (token) { return __awaiter(_this, void 0, void 0, function () {
            var checkTokenRequest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, check_token_1.checkTokenFunction)(token)];
                    case 1:
                        checkTokenRequest = _a.sent();
                        return [2 /*return*/, checkTokenRequest];
                }
            });
        }); };
        this.deleteUser = function (_a) {
            var email = _a.email, domain = _a.domain, domainkey = _a.domainkey;
            return __awaiter(_this, void 0, void 0, function () {
                var deleteUserRequest;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, (0, delete_user_1.deleteUserFunction)(email, domain, domainkey)];
                        case 1:
                            deleteUserRequest = _b.sent();
                            return [2 /*return*/, deleteUserRequest];
                    }
                });
            });
        };
    }
    return SimpleLogin;
}());
exports.simpleLogin = new SimpleLogin();
//# sourceMappingURL=index.js.map