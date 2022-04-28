#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var commitizen_1 = require("commitizen");
var chalk_1 = tslib_1.__importDefault(require("chalk"));
var commander_1 = require("commander");
var version_1 = require("./version");
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
commander_1.program.version(version_1.VERSION);
commander_1.program
    .option("--no-force")
    .option("--force", "For commitizen while a previous adapter is already configured. Use --force to override")
    .addOption(new commander_1.Option("-c, --config <type>", "need to set a profile type").choices(["zh", "en"]).default("zh"));
commander_1.program.addHelpText("after", "\n\nExample call:\n  $ cz-relax init\n  $ cz-relax init --cinfig zh\n  $ cz-relax init --cinfig en\n");
commander_1.program.parse(process.argv);
var command = commander_1.program.args[0];
var options = commander_1.program.opts();
var initOptions = Object.assign(defaultInitOptions, options);
if (command === "init") {
    console.log(chalk_1.default.blueBright("Initialize using the npm package cz-git"));
    try {
        (0, commitizen_1.init)(process.cwd(), "cz-git", initOptions);
        (0, commitlint_1.default)(options);
        (0, husky_1.default)();
    }
    catch (e) {
        console.error("Error: ".concat(e));
    }
}
else {
    // console.log(chalk.red.bold("Error: You must provide 'init' as command, example: cz-relax init"));
    throw new Error(chalk_1.default.red.bold("Error: You must provide 'init' as command, example: cz-relax init"));
}
