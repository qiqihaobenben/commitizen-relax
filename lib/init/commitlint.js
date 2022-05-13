"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_extra_1 = tslib_1.__importDefault(require("fs-extra"));
var path_1 = tslib_1.__importDefault(require("path"));
var chalk_1 = tslib_1.__importDefault(require("chalk"));
function init(options) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var configFilePath, newConfigFilePath, e_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    configFilePath = path_1.default.join(__dirname, "../config/commitlint.".concat(options.language, ".js"));
                    newConfigFilePath = path_1.default.join(process.cwd(), ".commitlintrc.js");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fs_extra_1.default.copy(configFilePath, newConfigFilePath)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.log(chalk_1.default.red(e_1));
                    process.exit(0);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.default = init;
