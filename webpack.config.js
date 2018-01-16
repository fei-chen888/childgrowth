const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const jsPublicPath = ''
const imagePublicPath = ''
const fontPublicPath = ''
module.exports = {
	entry: {
		'vendor': ['polyfill', 'vue','common','config','vue-router','mint-ui'],
		'app': './src/components/app/app.js'
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "static/js/[name]_[chunkhash].js",
		chunkFilename:'[name]_[chunkhash].js',
		publicPath:jsPublicPath
	},
	resolve: {
		alias: {
			'common$': path.resolve(__dirname, "./src/lib/common.js"),
			'config$': path.resolve(__dirname, "./src/lib/config.js"),
			'vue$': "vue/dist/vue.common.js",
			'polyfill$': path.resolve(__dirname, "./src/lib/polyfill.js")
		}
	},
	module: {
		loaders: [{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},

			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [{
						loader: 'css-loader'
					}]
				})
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [{
							loader: 'css-loader',
							options: {
								minimize: true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								minimize: true
							}
						}
					]
				})
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.(png|jpg|jpge)$/,
				loader: 'url-loader?limit=8192',
				query: {
					name: 'static/images/[name].[ext]',
					publicPath: imagePublicPath
				}
			},
			{
				test: /\.(woff|svg|eot|ttf)\??.*$/,
				loader: 'url-loader?limit=10008192',
				query: {
					name: 'static/font/[name].[ext]',
					publicPath: fontPublicPath
				}
			}
		]
	},
	devServer: {
		historyApiFallback: true,
		inline: true,
		port: 8888
	},
	plugins: [
		new CleanWebpackPlugin(
			['dist/*'], {
				root: __dirname,
				verbose: false,
				dry: false
			}
		),
		new ExtractTextPlugin("static/css/style.min.css"),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor'],
		}),/*
	    new webpack.optimize.UglifyJsPlugin({
		    compress: {
		        warnings: false
		    }
			}),*/
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
			chunks: ['vendor', 'app']
		})
	]

};