const package = require('./package.json')
const path = require('path');
const ip = require('ip');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'devshock.js'
    },
    devServer: {
        hot: true,
        https: true,
        host: ip.address(),
        port: 8080
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: package.name,
            ver: package.version,
            desc: package.description,
            page: package.homepage,
            author: package.author
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
                type: 'asset',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
