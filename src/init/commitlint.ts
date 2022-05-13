import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import { CommanderOptions } from "../types";

async function init(options: CommanderOptions) {
  const configFilePath = path.join(__dirname, `../config/commitlint.${options.language}.js`);
  const newConfigFilePath = path.join(process.cwd(), ".commitlintrc.js");
  try {
    await fs.copy(configFilePath, newConfigFilePath);
  } catch (e) {
    console.log(chalk.red(e));
    process.exit(0);
  }
}

export default init;
