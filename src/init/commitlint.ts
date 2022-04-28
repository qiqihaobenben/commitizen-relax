import fs from "fs-extra";
import path from "path";
import { CommanderOptions } from "../cli";

function init(options: CommanderOptions) {
  console.log(options);
  const configFilePath = path.join(__dirname, `../config/commitlint.${options.config}.js`);
  const newConfigFilePath = path.join(process.cwd(), ".commitlintrc.js");
  try {
    fs.copySync(configFilePath, newConfigFilePath);
  } catch (e) {
    console.error(`Error: ${e}`);
  }
}

export default init;
