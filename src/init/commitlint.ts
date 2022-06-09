import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import { exec } from "child_process";
import { CommanderOptions } from "../types";

async function installCommitlint(repoPath: string, options: CommanderOptions) {
  const packageName = "@commitlint/cli @commitlint/config-conventional";
  const installCommand = options.yarn ? `yarn add --dev  ${packageName}` : `npm install -save-dev ${packageName}`;
  await exec(installCommand, { cwd: repoPath });
}

async function init(repoPath: string, options: CommanderOptions) {
  const configFilePath = path.join(__dirname, `../config/commitlint.${options.language}.js`);
  const newConfigFilePath = path.join(process.cwd(), ".commitlintrc.js");
  try {
    await installCommitlint(repoPath, options);
    await fs.copy(configFilePath, newConfigFilePath);
  } catch (e) {
    console.log(chalk.red(e));
    process.exit(0);
  }
}

export default init;
