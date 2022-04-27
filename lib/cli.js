#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commitizen_1 = require("commitizen");
var chalk_1 = __importDefault(require("chalk"));
var commander_1 = require("commander");
var version_1 = require("./version");
var commitlint_1 = require("./init/commitlint");
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
    .option("--force", "For commitizen while a previous adapter is already configured. Use --force to override")
    .addOption(new commander_1.Option("-c, --config <type>", "need to set a profile type").choices(["zh", "en"]).default("zh"));
commander_1.program.addHelpText("after", "\n\nExample call:\n  $ cz-relax init\n  $ cz-relax init --force\n");
commander_1.program.parse(process.argv);
var command = commander_1.program.args[0];
var options = commander_1.program.opts();
console.log(options);
var initOptions = Object.assign(defaultInitOptions, options);
if (command === "init") {
    console.log(chalk_1.default.blueBright("Initialize using the npm package cz-git"));
    try {
        (0, commitlint_1.init)(options);
        (0, commitizen_1.init)(process.cwd(), "cz-git", initOptions);
    }
    catch (e) {
        console.error("Error: ".concat(e));
    }
}
else {
    console.log(chalk_1.default.red.bold("Error: You must provide 'init' as command, example: cz-relax init"));
}
