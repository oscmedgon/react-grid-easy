var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR =path.resolve(__dirname, 'demo')

module.exports = {
    mode: 'production',
    entry: './demo/index.jsx',
    output: {
        path: APP_DIR,
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: APP_DIR,
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
    },
    resolve: {
        modules: [APP_DIR, 'node_modules'],
        extensions: ['.js', '.json', '.jsx', '.css'],
    },
    target: 'web',
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        hot: true,
        historyApiFallback: true,
        open: true
    },
    plugins: [
      new HtmlWebpackPlugin({
          title: 'React Lightweight Grid demo',
          template: path.join(__dirname, 'demo', 'index.html'),
          filename: 'index.html',
      })
    ]
};