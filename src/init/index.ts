import chalk from "chalk";

import commitizenInit from "./commitizen";
import commitlintInit from "./commitlint";
import huskyInit from "./husky";

import { CommanderOptions, InitOptions } from "../types";

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

export default async function init(options: CommanderOptions) {
  const initOptions = Object.assign(defaultInitOptions, options);
  const adapterNamName = initOptions.adapter;

  console.log(chalk.cyan(`1.) commitizen init...`));
  commitizenInit(process.cwd(), adapterNamName, initOptions);

  console.log(chalk.cyan("2.) commitlint init..."));
  await commitlintInit(options);

  console.log(chalk.cyan("3.) husky init..."));
  await huskyInit(initOptions);
}
