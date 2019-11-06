const { join } = require('path');
const getIp = require('./build/localIP');

// 忽略require
['.css', '.scss', '.less', '.png', '.jpg', '.gif', '.ttf'].forEach(e => {
    require.extensions[e] = function() {
        return false;
    };
});

require('./common');

const appPath = join(global.cwd, 'server/app');

const app = require(appPath).default;
const port = global.config.server.port;
app.listen(port, function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log('Serve on http://%s:%s', getIp(), port);
    }
});
