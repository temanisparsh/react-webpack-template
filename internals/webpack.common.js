const webpack = require('webpack');
const config = require('config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonPaths = require('./paths');

const webpackConfig = {
	entry: {
		app: `${commonPaths.appEntry}/index.js`,
	},
	output: {
		path: commonPaths.outputPath,
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			API_URL: JSON.stringify(config.API_URL),
		}),
		new HtmlWebpackPlugin({
			template: 'public/index.html',
		}),
	],
	resolve: {
		modules: ['node_modules', 'src'],
		extensions: ['.js', '.jsx', '.react.js'],
	},
	target: 'web',
};
module.exports = webpackConfig;
