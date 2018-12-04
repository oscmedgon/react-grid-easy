var path = require('path');
module.exports = {
  entry: ['./src/index.js', './src/components.scss'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.scss$/,
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
            },
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: false
                }
            }
        ]
    }
    ]
  },
  externals: {
    'react': 'commonjs react' 
  }
};