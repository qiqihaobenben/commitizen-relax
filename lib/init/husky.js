"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path_1 = tslib_1.__importDefault(require("path"));
var fs_extra_1 = tslib_1.__importDefault(require("fs-extra"));
var child_process_1 = require("child_process");
function init(options) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var huskyDirPath, isInstalledHusky, isForce;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    huskyDirPath = path_1.default.join(process.cwd(), ".husky");
                    isInstalledHusky = fs_extra_1.default.existsSync(huskyDirPath);
                    isForce = options.force;
                    if (!(!isInstalledHusky || isForce)) return [3 /*break*/, 2];
                    return [4 /*yield*/, (0, child_process_1.exec)("npx husky-init && npm install")];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    updateHooks(huskyDirPath, isForce);
                    return [2 /*return*/];
            }
        });
    });
}
function updateHooks(rootDir, isForce) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var prepareCommitMsgPath, commitMsgPath;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    prepareCommitMsgPath = path_1.default.join(rootDir, "prepare-commit-msg");
                    commitMsgPath = path_1.default.join(rootDir, "commit-msg");
                    if (fs_extra_1.default.existsSync(prepareCommitMsgPath)) {
                        if (isForce) {
                            console.log("using --force，the .husky/prepare-commit-msg will override.");
                            fs_extra_1.default.removeSync(prepareCommitMsgPath);
                        }
                    }
                    else {
                        console.log("The file already exists: .husky/prepare-commit-msg, husky is append, not override.If you want to override hooks file, please use Use --force to override.");
                    }
                    if (fs_extra_1.default.existsSync(commitMsgPath)) {
                        if (isForce) {
                            console.log("using --force，the .husky/commit-msg will override.");
                            fs_extra_1.default.removeSync(commitMsgPath);
                        }
                    }
                    else {
                        console.log("The file already exists: .husky/commit-msg, husky is append , not override.If you want to override hooks file, please use Use --force to override.");
                    }
                    // TODO 添加一些导语
                    return [4 /*yield*/, (0, child_process_1.exec)("npx husky add .husky/prepare-commit-msg 'exec < /dev/tty && npx cz --hook || true'")];
                case 1:
                    // TODO 添加一些导语
                    _a.sent();
                    return [4 /*yield*/, (0, child_process_1.exec)("npx husky add .husky/commit-msg 'npx --no -- commitlint --edit \"$1\"'")];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = init;
