const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
    return {
        context: __dirname,
		mode: argv.mode,
		entry: "./src/js/app.js",
        devtool: argv.mode === "development" ? "inline-sourcemap" : false,
		devServer: {
			contentBase: path.join(__dirname, '/Public'),
            compress: true,
			hot: true,
            open: true,
			port: 5100
		},
        module: {
            rules: [
				{
					test: /\.jsx?$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: "babel-loader"
					}
				},
				{
					test: /\.html$/,
					use: [
						{
							loader: "html-loader"
						}
					]
				},
				{
					test: /\.scss$/,
					use: [{
						loader: "style-loader"
					}, {
						loader: "css-loader"
					}, {
						loader: "sass-loader"
					}]
				},
                {
                    test: /\.css$/,
                    use:[
                        { loader: "style-loader" },
                        { loader: "css-loader" }
                    ]
                },
				{
                	test: /\.(gif|png|jpe?g|svg)$/i,
                	use: [
                    	'file-loader',
                    	{
                        	loader: 'image-webpack-loader',
                        	options: {
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65',
                                speed: 4
                            },
                            bypassOnDebug: true,
                        	},
                    	},
                	]
            	}]
        	},
        output: {
            path: __dirname,
            filename: "Public/bundle.js"
        },
		plugins: [
			new HtmlWebPackPlugin({
				template: "./src/index.html",
				filename: "./Public/index.html"
			})
		]

    };
};
