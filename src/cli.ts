#!/usr/bin/env node

import { init } from "commitizen";
import chalk from "chalk";
import { program, Option } from "commander";
import { VERSION } from "./version";
import { init as commitlintInit } from "./init/commitlint";

export interface CommanderOptions {
  force: boolean;
  config: "zh" | "en";
}

const defaultInitOptions = {
  save: false,
  saveDev: true,
  saveExact: false,
  force: false,

  // for --yarn use
  yarn: false,
  dev: true,
  exact: false,
};

program.version(VERSION);
program
  .option("--force", "For commitizen while a previous adapter is already configured. Use --force to override")
  .addOption(new Option("-c, --config <type>", "need to set a profile type").choices(["zh", "en"]).default("zh"));
program.addHelpText(
  "after",
  `

Example call:
  $ cz-relax init
  $ cz-relax init --force
`,
);

program.parse(process.argv);

const [command] = program.args;
const options: CommanderOptions = program.opts();
console.log(options);

const initOptions = Object.assign(defaultInitOptions, options);
if (command === "init") {
  console.log(chalk.blueBright(`Initialize using the npm package cz-git`));
  try {
    commitlintInit(options);
    init(process.cwd(), "cz-git", initOptions);
  } catch (e) {
    console.error(`Error: ${e}`);
  }
} else {
  console.log(chalk.red.bold("Error: You must provide 'init' as command, example: cz-relax init"));
}
