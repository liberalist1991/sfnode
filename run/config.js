const path = require('path')
const extend = require('./build/extend')
const config = require(process.cwd() + '/build.js');
const resolve = dir => path.resolve(process.cwd(), dir);

global.config = extend({
    server: {
        port: 8080,
        public: resolve('public'),
        path: resolve('public/server')
    },
    client: {
        development: {
            path: resolve('public'),
            publicPath: '/',
            port: '9000'
        },
        production: {
            path: resolve('public/client'),
            publicPath: '/public/client/',
        }
    }
}, config)

module.exports = global.config
