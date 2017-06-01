var path = require('path');

module.exports = {
	entry: './js/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './')
	},
	devtool: "inline-source-map",
	devServer: {
		contentBase: path.join(__dirname, "./"),
		compress: true,
		port: 9000,
		watchContentBase: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env'],
						plugins: ['transform-runtime']
					}
				}
			}
		]
	}
};
