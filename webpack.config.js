var webpack = require("webpack");
const path = require('path');

module.exports = env => {
	return{
		entry: './src/index.js',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'app.bundle.js'
		},
		module:{
			rules:[
				{
					enforce:'pre',
					test:/\.js$/,
					exclude: /node_modules/,
					loader:'eslint-loader'
				},
				{
					enforce:'pre',
					test:/\.js$/,
					exclude: /node_modules/,
					loader:'babel-loader',
					query:{
						presets: ['es2015']
					}
				}
			]
		},
		plugins: [
		  //new webpack.optimize.UglifyJsPlugin({minimize: true})
		]
	}
}