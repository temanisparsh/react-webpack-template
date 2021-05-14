const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
	mode: 'production',
	output: {
		filename: 'static/[name].[fullhash].js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'postcss-loader',
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'styles/styles.[fullhash].css',
		}),
	],
};
module.exports = config;
