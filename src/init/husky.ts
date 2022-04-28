import path from "path";
import fs from "fs-extra";
import { execSync } from "child_process";
function init() {
  const huskyDirPath = path.join(process.cwd(), ".husky");
  const isInstalledHusky = fs.existsSync(huskyDirPath);
  if (!isInstalledHusky) {
    execSync("npx husky-init && npm install");
  }
  updateHooks(huskyDirPath);
}

function updateHooks(rootDir: string) {
  const prepareCommitMsgPath = path.join(rootDir, "prepare-commit-msg");
  const commitMsgPath = path.join(rootDir, "commit-msg");
  if (fs.existsSync(prepareCommitMsgPath)) {
    fs.removeSync(prepareCommitMsgPath);
  }
  if (fs.existsSync(commitMsgPath)) {
    fs.removeSync(commitMsgPath);
  }
  execSync("npx husky add .husky/prepare-commit-msg 'exec < /dev/tty && npx cz --hook || true'");
  execSync("npx husky add .husky/commit-msg 'npx --no -- commitlint --edit \"$1\"'");
}

export default init;
