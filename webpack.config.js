const path                  = require('path');
const webpack               = require('webpack');
const HtmlWebpackPlugin     = require('html-webpack-plugin');
const CleanWebpackPlugin    = require('clean-webpack-plugin');
const ExtractTextPlugin     = require("extract-text-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
	entry: ['babel-polyfill','./js/index.js'],
	devServer: {
		contentBase   : './dist',
		hot           : true,
		compress      : true,
		port          : 9000,
		clientLogLevel: "none",
		quiet         : true
	},
	module: {
		loaders: [
			{
				test  : /\.html$/,
				loader: 'html-loader'
			}, {
				test  : /\.js$/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({template: './index.html'}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new FaviconsWebpackPlugin('./my-logo.jpeg')
	],
	output: {
		filename: 'index.js',
		path    : path.resolve(__dirname, 'dist')
	}
};
