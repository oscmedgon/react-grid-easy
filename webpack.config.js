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
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
};
