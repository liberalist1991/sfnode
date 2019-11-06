const webpackMerge = require('webpack-merge');
const webpackBaseConf = require('./webpack.server.base');
// const config = require('../config/build').server;
const config = require('../config').server;

module.exports = webpackMerge(webpackBaseConf, {
    output: {
        publicPath: config.publicPath
    },
    mode: 'production',
});
