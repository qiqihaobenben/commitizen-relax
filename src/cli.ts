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

const spinner = ora({ text: chalk.black.bgWhite("cz-relax init... \n"), spinner: "dots" });
spinner.start();

program.version(VERSION);
program
  .option(
    "-f, --force",
    "For commitizen while a previous adapter and husky is already configured. Use --force to override",
  )
  .addOption(new Option("-l, --language <type>", "need to set a profile type").choices(["zh", "en"]).default("en"))
  .addOption(new Option("-a, --adapter <npmName>", "need to set a adapter npm name").default("cz-git"));
program.addHelpText(
  "after",
  `

Example call:
  $ cz-relax init
  $ cz-relax init --force
  $ cz-relax init --language zh
  $ cz-relax init --language en --force
  $ cz-relax init --language zh --force --adapter cz-conventional-changelog
`,
);

program.parse(process.argv);

const [command] = program.args;
const options: CommanderOptions = program.opts();
const initOptions = Object.assign(defaultInitOptions, options);
const adapterNamName = initOptions.adapter;

if (command === "init") {
  try {
    console.log(chalk.cyan(`1.) commitizen init...`));
    commitizenInit(process.cwd(), adapterNamName, initOptions);

    console.log(chalk.cyan("2.) commitlint init..."));
    commitlintInit(options);

    console.log(chalk.cyan("3.) husky init..."));
    huskyInit(initOptions);
    // TODO 考虑是不否增加一个预检，判断有没有安装所有的依赖包
    spinner.succeed(chalk.green("The cz-relax has been inited!"));
  } catch (e) {
    spinner.fail(chalk.red(`Error: ${e}`));
  }
} else {
  spinner.fail(chalk.red("Error: You must provide 'init' as command, example: cz-relax init"));
  process.exit(0);
}
