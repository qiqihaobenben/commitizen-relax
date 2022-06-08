#!/usr/bin/env node
import chalk from "chalk";
import ora from "ora";
import { program, Option } from "commander";
import { VERSION } from "./version";
import init from "./init";

import { CommanderOptions } from "./types";

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

(async () => {
  const spinner = ora({ text: chalk.black.bgWhite("cz-relax init... \n"), spinner: "dots" });
  if (command === "init") {
    console.log("Initialization will take some time. Please wait.");

    try {
      await init(options);
      spinner.succeed(chalk.green("The cz-relax has been inited!"));
    } catch (e) {
      spinner.fail(chalk.red(`Error: ${e}`));
    }
  } else {
    spinner.fail(chalk.red("Error: You must provide 'init' as command, example: cz-relax init"));
    process.exit(0);
  }
})();
