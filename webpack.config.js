const path = require("path");

module.exports = {
  mode: "development",
  //for options page
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },

  watch: true,
};
