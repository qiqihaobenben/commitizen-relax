#!/usr/bin/env node
import chalk from "chalk";
import ora from "ora";
import { program, Option } from "commander";
import { VERSION } from "./version";
import commitizenInit from "./init/commitizen";
import commitlintInit from "./init/commitlint";
import huskyInit from "./init/husky";

import { CommanderOptions, InitOptions } from "./types";

const defaultInitOptions: InitOptions = {
  save: false,
  saveDev: true,
  saveExact: false,
  force: false,

  // for --yarn use
  yarn: false,
  dev: true,
  exact: false,
};

const spinner = ora({ text: chalk.blackBright("cz-relax init..."), spinner: "dots" });
spinner.start();

program.version(VERSION);
program
  .option("--force", "For commitizen while a previous adapter and husky is already configured. Use --force to override")
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
  try {
    console.log(chalk.cyan("1.）commitizen init..."));
    commitizenInit(process.cwd(), "cz-git", initOptions);

    console.log(chalk.cyan("2.）commitlint init..."));
    commitlintInit(options);

    console.log(chalk.cyan("3.husky init..."));
    huskyInit(initOptions);
    // TODO 考虑是不否增加一个预检，判断有没有安装所有的依赖包
    spinner.succeed(chalk.greenBright("The cz-relax has been inited!"));
  } catch (e) {
    spinner.fail(chalk.red(`Error: ${e}`));
  }
} else {
  spinner.fail(chalk.red("Error: You must provide 'init' as command, example: cz-relax init"));
  process.exit(0);
}
