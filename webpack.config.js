const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main/index.tsx",
  output: {path: path.join(__dirname, "build"), filename: "index.bundle.js"},
  mode: process.env.NODE_ENV  || "development",
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
    extensions: [".ts",".tsx", ".js", ".json"],
  },
  devServer:  { static: path.join(__dirname, "src") },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(svg|webp|png|jpg|jpeg|gif|mp3)$/,
        use: ["file-loader"],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    })
  ]
}