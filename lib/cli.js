#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var chalk_1 = tslib_1.__importDefault(require("chalk"));
var ora_1 = tslib_1.__importDefault(require("ora"));
var commander_1 = require("commander");
var version_1 = require("./version");
var init_1 = tslib_1.__importDefault(require("./init"));
var defaultInitOptions = {
    save: false,
    saveDev: true,
    saveExact: false,
    force: false,
    // for --yarn use
    yarn: false,
    dev: true,
    exact: false,
};
commander_1.program.version(version_1.VERSION);
commander_1.program
    .option("-f, --force", "For commitizen while a previous adapter and husky is already configured. Use --force to override")
    .addOption(new commander_1.Option("-l, --language <type>", "need to set a profile type").choices(["zh", "en"]).default("en"))
    .addOption(new commander_1.Option("-a, --adapter <npmName>", "need to set a adapter npm name").default("cz-git"));
commander_1.program.addHelpText("after", "\n\nExample call:\n  $ cz-relax init\n  $ cz-relax init --force\n  $ cz-relax init --language zh\n  $ cz-relax init --language en --force\n  $ cz-relax init --language zh --force --adapter cz-conventional-changelog\n");
commander_1.program.parse(process.argv);
var command = commander_1.program.args[0];
var options = commander_1.program.opts();
(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var spinner, e_1;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                spinner = (0, ora_1.default)({ text: chalk_1.default.black.bgWhite("cz-relax init... \n"), spinner: "dots" });
                if (!(command === "init")) return [3 /*break*/, 5];
                console.log("Initialization will take some time. Please wait.");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, init_1.default)(options)];
            case 2:
                _a.sent();
                spinner.succeed(chalk_1.default.green("The cz-relax has been inited!"));
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                spinner.fail(chalk_1.default.red("Error: ".concat(e_1)));
                return [3 /*break*/, 4];
            case 4: return [3 /*break*/, 6];
            case 5:
                spinner.fail(chalk_1.default.red("Error: You must provide 'init' as command, example: cz-relax init"));
                process.exit(0);
                _a.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}); })();
