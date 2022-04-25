#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
commander_1.program.parse();
console.log(commander_1.program.args);
var _a = commander_1.program.args, command = _a[0], _b = _a[1], adapterNpmName = _b === void 0 ? "cz-git" : _b;
if (command === "init") {
    console.log(process.cwd());
}
