var webpack = require('webpack');

module.exports = {
	// Entry point of application
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx'
	],
	externals: {
		// Set of KV pairs: Module, Variable name
		jquery: 'jQuery'
	},
	plugins: [new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' })],
	output: {
		// Output of bundled file
		path: __dirname, // Node gives us current dir with __dirname
		filename: './public/bundle.js'
	},
	resolve: {
		// Where should this happen?
		root: __dirname,
		// Define alias for require's --> require('Greeter')
		alias: {
			Main: 'app/components/Main.jsx',
			Nav: 'app/components/Nav.jsx',
			Weather: 'app/components/Weather.jsx',
			About: 'app/components/About.jsx',
			Examples: 'app/components/Examples.jsx',
			WeatherForm: 'app/components/WeatherForm.jsx',
			WeatherMessage: 'app/components/WeatherMessage.jsx',
			openWeatherMap: 'app/api/openWeatherMap.jsx',
			auth: 'app/api/auth.jsx',
			ErrorModal: 'app/components/ErrorModal.jsx'
		},
		// List of file extensions we should be able to process
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				// Initializes loader to parse babel
				loader: 'babel-loader',
				query: {
					// Take files to parse through react, then run through es2015
					presets: ['react', 'es2015']
				},
				// Regex to specify which files to get
				test: /\.jsx?$/,
				// Specify which folders to exclude
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devtool: 'inline-source-map'
};
