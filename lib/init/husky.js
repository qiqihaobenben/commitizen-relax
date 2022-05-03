"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path_1 = tslib_1.__importDefault(require("path"));
var fs_extra_1 = tslib_1.__importDefault(require("fs-extra"));
var chalk_1 = tslib_1.__importDefault(require("chalk"));
var child_process_1 = require("child_process");
function init(options) {
    var huskyDirPath = path_1.default.join(process.cwd(), ".husky");
    var isInstalledHusky = fs_extra_1.default.existsSync(huskyDirPath);
    var isForce = options.force;
    if (!isInstalledHusky) {
        (0, child_process_1.execSync)("npx husky-init && npm install");
    }
    updateHooks(huskyDirPath, isForce);
}
function updateHooks(rootDir, isForce) {
    var prepareCommitMsgPath = path_1.default.join(rootDir, "prepare-commit-msg");
    var commitMsgPath = path_1.default.join(rootDir, "commit-msg");
    if (fs_extra_1.default.existsSync(prepareCommitMsgPath)) {
        if (isForce) {
            fs_extra_1.default.removeSync(prepareCommitMsgPath);
        }
        else {
            console.log(chalk_1.default.yellowBright("\n        The file already exists: .husky/prepare-commit-msg, husky is append, not override.\n        If you want to override hooks file, please use Use --force to override.\n        "));
        }
    }
    if (fs_extra_1.default.existsSync(commitMsgPath)) {
        if (isForce) {
            fs_extra_1.default.removeSync(commitMsgPath);
        }
        else {
            console.log(chalk_1.default.yellowBright("\n          The file already exists: .husky/commit-msg, husky is append , not override.\n          If you want to override hooks file, please use Use --force to override.\n          "));
        }
    }
    // TODO 添加一些导语
    (0, child_process_1.execSync)("npx husky add .husky/prepare-commit-msg 'exec < /dev/tty && npx cz --hook || true'");
    (0, child_process_1.execSync)("npx husky add .husky/commit-msg 'npx commitlint --edit \"$1\"'");
}
exports.default = init;
