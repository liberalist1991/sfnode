const { resolve } = require('path');
const moduleAlias = require('module-alias')
const { getAlias } = require('./build/utils');
const babelConfig = require('../babel.config');

require('@babel/register')(Object.assign({
    only: [ global.cwd, resolve(global.cwd, 'node_modules/sfapp')],
    ignore: [ new RegExp("^" + resolve(global.cwd, 'node_modules/(?!(_)?sfapp)+'), "i")]
}, babelConfig));

// 配置module别名
moduleAlias.addAliases(getAlias());
