#!/usr/bin/env node
const fs = require("fs");
const Module = require("module");
const { resolve } = require("path");

const transform = require("./transform");

if (process.setSourceMapsEnabled) {
  process.setSourceMapsEnabled(true);
} else {
  console.warn("Use node >= 16.6 to get source maps support");
}

Module._extensions[".ts"] = (mod, filename) => {
  mod._compile(
    transform(fs.readFileSync(filename, { encoding: "utf-8" }), filename),
    filename
  );
};

process.argv.splice(1, 1);
process.argv[1] = resolve(process.argv[1]);
Module.runMain();
