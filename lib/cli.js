#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var chalk_1 = tslib_1.__importDefault(require("chalk"));
var ora_1 = tslib_1.__importDefault(require("ora"));
var commander_1 = require("commander");
var version_1 = require("./version");
var commitizen_1 = tslib_1.__importDefault(require("./init/commitizen"));
var commitlint_1 = tslib_1.__importDefault(require("./init/commitlint"));
var husky_1 = tslib_1.__importDefault(require("./init/husky"));
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
var spinner = (0, ora_1.default)({ text: chalk_1.default.blackBright("cz-relax init..."), spinner: "dots" });
spinner.start();
commander_1.program.version(version_1.VERSION);
commander_1.program
    .option("--force", "For commitizen while a previous adapter and husky is already configured. Use --force to override")
    .addOption(new commander_1.Option("-c, --config <type>", "need to set a profile type").choices(["zh", "en"]).default("zh"));
commander_1.program.addHelpText("after", "\n\nExample call:\n  $ cz-relax init\n  $ cz-relax init --cinfig zh\n  $ cz-relax init --cinfig en\n");
commander_1.program.parse(process.argv);
var command = commander_1.program.args[0];
var options = commander_1.program.opts();
var initOptions = Object.assign(defaultInitOptions, options);
if (command === "init") {
    try {
        console.log(chalk_1.default.cyan("1.）commitizen init..."));
        (0, commitizen_1.default)(process.cwd(), "cz-git", initOptions);
        console.log(chalk_1.default.cyan("2.）commitlint init..."));
        (0, commitlint_1.default)(options);
        console.log(chalk_1.default.cyan("3.husky init..."));
        (0, husky_1.default)(initOptions);
        // TODO 考虑是不否增加一个预检，判断有没有安装所有的依赖包
        spinner.succeed(chalk_1.default.greenBright("The cz-relax has been inited!"));
    }
    catch (e) {
        spinner.fail(chalk_1.default.red("Error: ".concat(e)));
    }
}
else {
    spinner.fail(chalk_1.default.red("Error: You must provide 'init' as command, example: cz-relax init"));
    process.exit(0);
}
