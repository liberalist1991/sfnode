const webpack = require('webpack');
const prodConf = require('./build/webpack.client.prod');

webpack(prodConf, (err, stats) => {
    console.log(err || stats.toString({
        chunks: false,
        colors: true
    }));
});
