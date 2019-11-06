const { join } = require('path');
// 忽略require
['.css', '.scss', '.less', '.png', '.jpg', '.gif', '.ttf'].forEach(e => {
    require.extensions[e] = function() {
        return false;
    };
});

require('./common');

const appPath = join(global.cwd, 'server/app');

const app = require(appPath).default;
const port = process.env.port || 8000;
app.listen(port, function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log('listening on port %s', port);
    }
});
