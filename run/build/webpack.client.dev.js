const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackBaseConf = require('./webpack.client.base');
// const config = require('../config/build').client.development;
const config = require('../config').client.development;
const webpackConf = {
    output: {
        path: config.path,
        publicPath: config.publicPath,
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js',
    },
    mode: 'development',
    devtool: '#eval-source-map',
    watch: true,
    devServer: {
        host: '0.0.0.0',
        disableHostCheck: true,
        port: config.port,
        contentBase: config.path,
        inline: true,
        historyApiFallback: true,
        hot: true,
        watchContentBase: true,
        watchOptions: {
            ignored: /node_modules/
        },
        overlay: {
            error: true,
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
        },
        proxy: {
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
module.exports = webpackMerge(webpackBaseConf, webpackConf);
