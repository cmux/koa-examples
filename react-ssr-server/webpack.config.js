const path = require('path')

module.exports = {
    mode: "production",
    target: "async-node",
    node: {
        __dirname: true
    },
    entry: path.resolve(__dirname, './server/index.js'),
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /.(js|jsx|mjs)$/,
                type: 'javascript/auto',
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    resolve: {
        modules: [
            '__modules',
            'node_modules'
        ],
        extensions: [
            '.js', '.jsx', '.mjs'
        ]
    }
}
