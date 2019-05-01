var path = require('path');
module.exports = {
    mode: 'production',
    entry: './demo/index.jx',
    output: {
      path: path.resolve(__dirname, 'demo'),
      filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|build)/,
                loader: 'babel-loader'
                },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader' // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            minimize: true
                        } // translates CSS into CommonJS
                    }
                ]
            }
        ]
      }
};