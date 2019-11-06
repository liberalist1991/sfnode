const path = require('path');
function resolve(p) {
    return path.resolve(__dirname, 'node_modules', p)
}
module.exports = {
    'presets': [
        resolve('@babel/preset-react'),
        [
            resolve('@babel/preset-env')
        ]
    ],
    'plugins': [
        resolve('react-hot-loader/babel'),
        [resolve('@babel/plugin-transform-runtime'), {
            'absoluteRuntime': resolve('@babel/runtime')
        }],
        resolve('@babel/plugin-proposal-optional-chaining'),
        [
            resolve('@babel/plugin-proposal-decorators'),
            {
                'legacy': true
            }
        ],
        [
            resolve('@babel/plugin-proposal-class-properties'),
            {
                'loose': true
            }
        ]
    ]
};
