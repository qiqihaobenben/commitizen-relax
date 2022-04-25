#!/usr/bin/env node

import { init } from "commitizen";
import { program } from "commander";

program.parse();

console.log(program.args);
const [command, adapterNpmName = "cz-git"] = program.args;
if (command === "init") {
  console.log(process.cwd());
}
