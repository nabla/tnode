const { transformSync } = require("esbuild");

module.exports = (src) => {
  const { code, warnings } = transformSync(src, {
    loader: "ts",
    target: "node16",
    format: "cjs",
    sourcemap: false,
  });
  for (const warning of warnings) console.log(warning.location, warning.text);
  return code;
};
