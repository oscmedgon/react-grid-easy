const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "demo/index.html"),
    filename: "./index.html"
});
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, "demo/index.jsx"),
    output: {
        publicPath: '/',
        path: path.join(__dirname, "demo/dist"),
        filename: 'bundle.[hash].js'
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
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx"]
    }
};