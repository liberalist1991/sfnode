const { join } = require('path');
require('./common');

const appPath = join(global.cwd, 'server/app');

const app = require(appPath).default;
const port = global.config.server.port;

app.listen(port, function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log('listening on port %s', port);
    }
});
