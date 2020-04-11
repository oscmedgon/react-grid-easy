const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, "src/index.js"),
    output: {
        path: path.resolve('lib'),
        library: 'reactEasyGrid',
        libraryTarget: 'umd',
        filename: process.env.NODE_ENV === 'production' ? 'index.min.js' : 'index.js',
        globalObject: 'this'
    },
    target: 'web',
        externals: {
            react: {
                root: 'React',
                commonjs: 'react',
                commonjs2: 'react',
                amd: 'react',
            },
        },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
};
