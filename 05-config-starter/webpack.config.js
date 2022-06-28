const path = require("path");

/**
 * Webpack config file
 * module loaders load right to left
 * ie css loaders  postcss-loader => css-loader => style-loader
 */

module.exports = {
  // start point for app / webpack bundling
  entry: "./src/index.js",
  // where to output bundle
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  // configure module loaders
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
};
