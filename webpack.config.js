const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
	require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const MiniExtractCssPlugin = require("mini-css-extract-plugin");

module.exports = {
	target: "web",
	mode: process.env.NODE_ENV,
	entry: path.resolve(__dirname, "src", "index.js"),
	output: {
		clean: true,
		assetModuleFilename: "[name][ext]",
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
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
		],
		rules: [
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					MiniExtractCssPlugin.loader,
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
		new BundleAnalyzerPlugin(),
		new MiniExtractCssPlugin(),
	],
};
