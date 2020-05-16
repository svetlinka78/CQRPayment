const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
//const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },

  //target: "node", // in order to ignore built-in modules like path, fs, etc.
  // externals: [nodeExternals()], // in order to ignore all modules in node_modules folder

  //target: 'web',
  //externals: ["fs"],

  // node: {
  //   fs: "empty",
  // },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        //use: ["style-loader", "css-loader"],
        use: [
          MiniCssExtractPlugin.loader, // instead of style-loader
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      //template: path.resolve(__dirname, "public/index.htmlst"),
      template: "./src/index.html",
      filename: "./index.html",
      //favicon: "./public/favicon.ico"
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: "http://localhost:5000",
    }),
  },

  // devServer: {
  //   proxy: {
  //     //"/api": "http://127.0.0.1:5000",
  //     "*": "http://localhost:5000",
  //     secure: false,
  //     changeOrigin: true,
  //   },
  //   historyApiFallback: true,
  //   watchOptions: { aggregateTimeout: 1300, poll: 2000 },
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  //     "Access-Control-Allow-Headers":
  //       "X-Requested-With, content-type, Authorization",
  //   },
  //},
};
