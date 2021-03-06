const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
	const isDevelopment = argv.mode !== 'production'
	return {
		mode: argv.mode,

		entry: './src/components/Main/index.jsx',

		output: {
			filename: '[name].[chunkhash].js',
			path: path.resolve(__dirname, 'dist')
		},

		plugins: [
			new webpack.ProgressPlugin(),
			new HtmlWebpackPlugin(),
			new MiniCssExtractPlugin({
				filename: isDevelopment ? '[name].css' : '[name].[hash].css',
				chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
			})
		],

		module: {
			rules: [
				{
					test: /.(js|jsx)$/,
					include: [path.resolve(__dirname, 'src')],
					loader: 'babel-loader',

					options: {
						plugins: [
							['@babel/plugin-syntax-dynamic-import'],
							['@babel/plugin-proposal-class-properties'],
							["@babel/plugin-transform-react-jsx"]
						],

						presets: [
							[
								'@babel/preset-env',
								{
									modules: false
								}
							]
						]
					}
				},
				{
					test: /\.css$/i,
					use: ['style-loader', 'css-loader'],
				},
				{
					test: /\.module\.s(a|c)ss$/,
					loader: [
						isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								modules: true,
								sourceMap: isDevelopment
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: isDevelopment
							}
						}
					]
				},
				{
					test: /\.s(a|c)ss$/,
					exclude: /\.module.(s(a|c)ss)$/,
					loader: [
						isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
						'css-loader',
						{
							loader: 'sass-loader',
							options: {
								sourceMap: isDevelopment
							}
						}
					]
				}
			]
		},
		devtool: isDevelopment ? "inline-sourcemap" : false,
		devServer: {
			compress: true,
			open: true,
			port: 5000
		},
		resolve: {
			extensions: ['.js', '.jsx', '.css', '.sass']
		}
	}
};
