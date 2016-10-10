module.exports = {
	entry: './src/App.js',
	output: {
		path: __dirname,
		filename: 'app.js'
	},
	module: {
		loaders: [
		{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
		}, 
		{
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
          }

		]
	},
	


};