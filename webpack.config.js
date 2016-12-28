var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	fielname: 'index.html',
	inject: 'body'
})


module.exports = {
	entry: [
		'./app/index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: 'index_bundle.js'
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node-modules/, loader: "babel-loader"}
		]
	},
	plugins: [HtmlWebpackPluginConfig]
}