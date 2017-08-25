const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;
const ProvidePlugin = webpack.ProvidePlugin;

const node_modules_path = __dirname + '/node_modules/';
// console.log(process.env.NODE_ENV);

module.exports = {
	entry: {
		bundle: './src/main.jsx'
	},//入口文件
	resolve: {
		extensions: ['.js', '.jsx']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),//输出文件目录（__dirname指的是当前目录）
		filename: './[name].js',//打包后文件名对应entry中的key名:e.g. bundle
		publicPath: 'http://localhost:9999/',
	},
	module: {
		rules: [
			{
				test: path.join(node_modules_path, 'jquery'),
				use: [
					'expose-loader?jQuery',
					'expose-loader?$'
				]
			},
			{
				test: /\.js[x]?$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'react']
					}
				},
				exclude: /node_modules/,//黑名单
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							browsers: ["last 2 version"]
						}
					},
					'less-loader'
				],
				include: path.resolve(__dirname, 'src')//白名单
			},
			{
				test: /\.(png|jpg|woff|woff2)$/,
				use: 'url-loader',
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'default-title',
			template: 'src/index.html',
			inject: 'body',
			hash: true
		}),
	],
	devtool: 'cheap-module-eval-source-map',//生成sourcemap文件,便于调试
	devServer: {
		historyApiFallback: true,
		stats: 'minimal'
	}
}