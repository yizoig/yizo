const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { title, version } = require("./package.json");
const path = require("path");
module.exports = {
    entry: {
        index: [
            './src/index.js'
        ],
    },
    mode: 'development',
    devServer: {
        port: 3333,
        host: '0.0.0.0',
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(png|jpg|jpeg)?$/,
                use: {
                    loader: 'file-loader',
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: title + '-' + version,
            template: path.join(__dirname, './index.html')
        }),
        // new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: [
            '.js',
            '.json',
            '.less'
        ]
    }
} 
