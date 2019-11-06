const path = require('path')
const config = require(process.cwd() + '/build.js');
const resolve = dir => path.resolve(process.cwd(), dir);
global.config = extend({
    server: {
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

function extend(target, cloneObj) {
    function type(obj) {
        return Object.prototype.toString.call(obj).slice(8, -1);
    }
    var copy;
    for (var i in cloneObj) {
        copy = cloneObj[i];
        if (target === copy) {
            continue;
        }
        if (type(copy) === "Array") {
            target[i] = extend(target[i] || [], copy);
        } else if (type(copy) === "Object") {
            target[i] = extend(target[i] || {}, copy);
        } else {
            target[i] = copy;
        }
    }
    return target;
}