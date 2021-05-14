const webpack = require('webpack');

const port = process.env.PORT || 3000;

const config = {
	mode: 'development',
	output: {
		filename: '[name].[fullhash].js',
	},
	resolve: {
		alias: {
			'react-dom': '@hot-loader/react-dom',
		},
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	devServer: {
		host: 'localhost',
		port,
		historyApiFallback: true,
		hot: true,
		open: true,
	},
};
module.exports = config;
