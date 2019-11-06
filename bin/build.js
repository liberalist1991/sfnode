#!/usr/bin/env node

var optimist = require('optimist').usage(
    'sfnode ' + require('../package.json').version
);

require('./config-optimist')(optimist);
var options = require('./convert-argv')(optimist, optimist.argv);

function processOptions(options) {
    global.cwd = process.cwd();
    switch (options.run) {
        case 'dev:client':
            global.NODE_ENV = 'development';
            global.START_MODE = 'dev:server';
            require('../run/dev-client.js');
            break;
        case 'dev:server':
            global.NODE_ENV = 'development';
            global.START_MODE = 'dev:server';
            require('../run/dev-server.js');
            break;
        case 'dev':
            global.NODE_ENV = 'development';
            global.START_MODE = 'dev:server';
            require('../run/dev-client.js');
            require('../run/dev-server.js');
            break;
        case 'build:client':
            require('../run/build-client.js');
            break;
        case 'build:server':
            require('../run/build-server.js');
            break;
        case 'build':
            require('../run/build-client.js');
            require('../run/build-server.js');
            break;
        case 'start':
            require('../run/start.js');
            break;
    }
}

processOptions(options);
