"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path_1 = tslib_1.__importDefault(require("path"));
var fs_extra_1 = tslib_1.__importDefault(require("fs-extra"));
var child_process_1 = require("child_process");
function init() {
    var huskyDirPath = path_1.default.join(process.cwd(), ".husky");
    var isInstalledHusky = fs_extra_1.default.existsSync(huskyDirPath);
    if (!isInstalledHusky) {
        (0, child_process_1.execSync)("npx husky-init && npm install");
    }
    updateHooks(huskyDirPath);
}
function updateHooks(rootDir) {
    var prepareCommitMsgPath = path_1.default.join(rootDir, "prepare-commit-msg");
    var commitMsgPath = path_1.default.join(rootDir, "commit-msg");
    if (fs_extra_1.default.existsSync(prepareCommitMsgPath)) {
        fs_extra_1.default.removeSync(prepareCommitMsgPath);
    }
    if (fs_extra_1.default.existsSync(commitMsgPath)) {
        fs_extra_1.default.removeSync(commitMsgPath);
    }
    (0, child_process_1.execSync)("npx husky add .husky/prepare-commit-msg 'exec < /dev/tty && npx cz --hook || true'");
    (0, child_process_1.execSync)("npx husky add .husky/commit-msg 'npx --no -- commitlint --edit \"$1\"'");
}
exports.default = init;
