const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const MiniExtractCssPlugin = require("mini-css-extract-plugin");

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  target: "web",
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    clean: true,
    assetModuleFilename: "images/[name][ext][query]",
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  devServer: {
    hot: true,
    open: {
      app: {
        name: "google-chrome",
      },
    },
    port: "8000",
    compress: true,
    liveReload: true,
    static: ["./public"],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "tsconfig.json"),
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        // Automatically determines if the asset is inline or resource
        type: "asset",
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniExtractCssPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),
    }),
    new HtmlWebpackPlugin({
      title: "Title",
      template: path.join(__dirname, "public", "index.html"),
    }),

    new MiniExtractCssPlugin(),
    process.env.NODE_ENV === "production" && new BundleAnalyzerPlugin(),
    process.env.NODE_ENV === "development" && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
};
