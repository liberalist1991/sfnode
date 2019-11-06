const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
require('./common');

const devConf = require('./build/webpack.client.dev');
devConf.output.publicPath = 'http://' + devConf.devServer.host + ':' + devConf.devServer.port + '/';
new webpackDevServer(webpack(devConf), devConf.devServer)
    .listen(devConf.devServer.port, devConf.devServer.host);
