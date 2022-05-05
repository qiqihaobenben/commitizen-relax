import path from "path";
import fs from "fs-extra";
import chalk from "chalk";
import { execSync } from "child_process";

import { CommanderOptions } from "../types";

function init(options: CommanderOptions) {
  const huskyDirPath = path.join(process.cwd(), ".husky");
  const isInstalledHusky = fs.existsSync(huskyDirPath);
  const isForce = options.force;
  if (!isInstalledHusky) {
    execSync("npx husky-init && npm install");
  }
  updateHooks(huskyDirPath, isForce);
}

function updateHooks(rootDir: string, isForce: boolean) {
  const prepareCommitMsgPath = path.join(rootDir, "prepare-commit-msg");
  const commitMsgPath = path.join(rootDir, "commit-msg");

  if (fs.existsSync(prepareCommitMsgPath)) {
    if (isForce) {
      console.log(chalk.yellow(`using --force，the .husky/prepare-commit-msg will override.`));
      fs.removeSync(prepareCommitMsgPath);
    } else {
      console.log(
        chalk.yellow(
          `The file already exists: .husky/prepare-commit-msg, husky is append, not override.If you want to override hooks file, please use Use --force to override.`,
        ),
      );
    }
  }
  if (fs.existsSync(commitMsgPath)) {
    if (isForce) {
      console.log(chalk.yellow(`using --force，the .husky/commit-msg will override.`));
      fs.removeSync(commitMsgPath);
    } else {
      console.log(
        chalk.yellow(
          `he file already exists: .husky/commit-msg, husky is append , not override.If you want to override hooks file, please use Use --force to override.`,
        ),
      );
    }
  }

  // TODO 添加一些导语
  execSync("npx husky add .husky/prepare-commit-msg 'exec < /dev/tty && npx cz --hook || true'");
  execSync("npx husky add .husky/commit-msg 'npx commitlint --edit \"$1\"'");
}

export default init;
