"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_extra_1 = tslib_1.__importDefault(require("fs-extra"));
var path_1 = tslib_1.__importDefault(require("path"));
function init(options) {
    console.log(options);
    var configFilePath = path_1.default.join(__dirname, "../config/commitlint.".concat(options.config, ".js"));
    var newConfigFilePath = path_1.default.join(process.cwd(), ".commitlintrc.js");
    try {
        fs_extra_1.default.copySync(configFilePath, newConfigFilePath);
    }
    catch (e) {
        console.error("Error: ".concat(e));
    }
}
exports.default = init;
