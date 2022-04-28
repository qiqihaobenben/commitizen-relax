#!/usr/bin/env node
import { init as commitizenInit } from "commitizen";
import chalk from "chalk";
import { program, Option } from "commander";
import { VERSION } from "./version";
import commitlintInit from "./init/commitlint";
import huskyInit from "./init/husky";

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
  .option("--no-force")
  .option("--force", "For commitizen while a previous adapter is already configured. Use --force to override")
  .addOption(new Option("-c, --config <type>", "need to set a profile type").choices(["zh", "en"]).default("zh"));
program.addHelpText(
  "after",
  `

Example call:
  $ cz-relax init
  $ cz-relax init --cinfig zh
  $ cz-relax init --cinfig en
`,
);

program.parse(process.argv);

const [command] = program.args;
const options: CommanderOptions = program.opts();

const initOptions = Object.assign(defaultInitOptions, options);
if (command === "init") {
  console.log(chalk.blueBright(`Initialize using the npm package cz-git`));
  try {
    commitizenInit(process.cwd(), "cz-git", initOptions);
    commitlintInit(options);
    huskyInit();
  } catch (e) {
    console.error(`Error: ${e}`);
  }
} else {
  // console.log(chalk.red.bold("Error: You must provide 'init' as command, example: cz-relax init"));
  throw new Error(chalk.red.bold("Error: You must provide 'init' as command, example: cz-relax init"));
}
