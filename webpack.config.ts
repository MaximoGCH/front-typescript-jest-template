import * as webpack from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';
import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
	entry: {
		app: path.join(__dirname, 'src', 'App.ts'),
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	output: {
		filename: 'App.js',
		path: path.join(__dirname, 'dist'),
	},
	module: {
		rules: [{ test: /\.tsx?$/, use: 'ts-loader' }],
	},
	devServer: {
		port: 9000,
		static: path.resolve(__dirname, 'dist'),
		host: 'localhost',
		hot: true,
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [{ from: 'src/assets', to: 'assets' }],
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
		}),
	],
};

export default config;
