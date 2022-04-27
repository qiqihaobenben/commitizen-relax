import fs from "fs";
import path from "path";
import { CommanderOptions } from "../cli";

function init(options: CommanderOptions) {
  console.log(options);
  const configFilePath = path.join(__dirname, `../config/commitlint.${options.config}.js`);
  const newConfigFilePath = path.join(process.cwd(), ".commitlintrc.js");
  try {
    const content = fs.readFileSync(configFilePath);
    fs.writeFileSync(newConfigFilePath, content);
  } catch (e) {
    console.error(`Error: ${e}`);
  }
}

export { init };
