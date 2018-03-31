var path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
    filename: './style.css'
});

const config = require('./App/src/config-dev.json');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        "./index.js"
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'Public')
    },
    context: path.resolve(__dirname, 'App/src'),
    devServer: {
        contentBase: path.resolve(__dirname, 'Public/assets'),
        open: true,
        compress: true,
        hot: true,
        historyApiFallback: true
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        extractPlugin,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            config: JSON.stringify(config)
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            include: /src/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['env', 'stage-0', 'react']
                }
            }
        }, {
            test: /\.html$/,
            use: ['html-loader']
        }, {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                'file-loader',
            {
                loader: 'image-webpack-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './assets/',
                }
            }]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: ['file-loader']
        }, {
            test: /\.scss$/,
            include: /src/,
            exclude: /node_modules/,
            use: extractPlugin.extract({
                use: ["css-loader", "sass-loader", "postcss-loader"],
                fallback: 'style-loader'
            })
        }]
    }
}