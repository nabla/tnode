#!/usr/bin/env node
const fs = require("fs");
const Module = require("module");
const { resolve } = require("path");

const transform = require("../transform");

Module._extensions[".ts"] = (mod, filename) => {
  mod._compile(
    transform(fs.readFileSync(filename, { encoding: "utf-8" })),
    filename
  );
};

process.argv.splice(1, 1);
process.argv[1] = resolve(process.argv[1]);
Module.runMain();
