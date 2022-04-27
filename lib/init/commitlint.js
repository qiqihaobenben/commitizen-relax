"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
function init(options) {
    console.log(options);
    var configFilePath = path_1.default.join(__dirname, "../config/commitlint.".concat(options.config, ".js"));
    var newConfigFilePath = path_1.default.join(process.cwd(), ".commitlintrc.js");
    try {
        var content = fs_1.default.readFileSync(configFilePath);
        fs_1.default.writeFileSync(newConfigFilePath, content);
    }
    catch (e) {
        console.error("Error: ".concat(e));
    }
}
exports.init = init;
