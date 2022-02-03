const { transformSync } = require("esbuild");

module.exports = (src, sourcefile) => {
  const { code, warnings } = transformSync(src, {
    loader: "ts",
    target: "node16",
    format: "cjs",
    sourcemap: "inline",
    sourcefile,
  });
  for (const warning of warnings) console.log(warning.location, warning.text);
  return code;
};
