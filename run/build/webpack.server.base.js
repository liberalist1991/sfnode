const { resolve, getEntries, getAlias } = require('./utils');
// const config = require('../config/build').server;
const config = require('../config').server;
const path = require('path');

module.exports = {
    entry: getEntries('ssr'),
    output: {
        path: config.path,
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    target: 'node',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js(x)?$/,
                loader: 'babel-loader?cacheDirectory',
                exclude: /node_modules/,
                options: require('../../babel.config')
            },
            {
                test: /\.(svg|eot|woff2?|ttf|otf)$/,
                loader: 'url-loader',
                options: {
                    limit: 4096,
                    name: 'fonts/[name].[hash:8].[ext]',
                },
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                loader: 'url-loader',
                options: {
                    limit: 4096,
                    name: 'images/[name].[hash:8].[ext]',
                },
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'isomorphic-style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
    resolveLoader: {
        modules: [
            resolve('node_modules'),
            path.resolve(__dirname, '../../node_modules')
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js'],
        modules: [
            resolve('node_modules'),
            path.resolve(__dirname, '../../node_modules')
        ],
        alias: getAlias(),
    },
};
