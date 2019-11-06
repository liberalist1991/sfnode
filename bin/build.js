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
            require('../run/dev-client');
            break;
        case 'dev:server':
            global.NODE_ENV = 'development';
            global.START_MODE = 'dev:server';
            require('../run/dev-server');
            break;
        case 'dev':
            global.NODE_ENV = 'development';
            global.START_MODE = 'dev:server';
            require('../run/dev-client');
            require('../run/dev-server');
            break;
        case 'build:client':
            require('../run/build-client');
            break;
        case 'build:server':
            require('../run/build-server');
            break;
        case 'build':
            require('../run/build-client');
            require('../run/build-server');
            break;
        case 'start':
            require('../run/start');
            break;
    }
}

processOptions(options);
