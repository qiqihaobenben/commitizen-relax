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
  const repoPath = process.cwd();

  console.log(chalk.cyan(`1.) commitizen init...`));
  commitizenInit(repoPath, adapterNamName, initOptions);

  console.log(chalk.cyan("2.) commitlint init..."));
  await commitlintInit(repoPath, options);

  console.log(chalk.cyan("3.) husky init..."));
  huskyInit(repoPath, initOptions);
}
