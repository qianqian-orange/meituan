const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

function getEntryFile() {
  const entryDirs = fs.readdirSync(path.join(__dirname, './src/pages'))
  return entryDirs.reduce((entryFiles, dir) => {
    const stat = fs.statSync(path.join(__dirname, './src/pages', dir))
    if (stat.isDirectory() && fs.existsSync(path.join(__dirname, './src/pages', dir, 'index.js'))) {
      entryFiles[dir] = path.join(__dirname, './src/pages', dir, 'index.js')
    }
    return entryFiles
  }, {})
}

function htmlWebpackPlugins(entryFiles) {
  return Object.keys(entryFiles).reduce((result, filename) => {
    if (fs.existsSync(path.join(__dirname, './src/pages', filename, 'index.html'))) {
      result.push(new HtmlWebpackPlugin({
        template: path.join(__dirname, './src/pages', filename, 'index.html'),
        filename: `${filename}.html`,
        chunks: [filename] // 指定注入的js脚本
      }))
    }
    return result
  }, [])
}

// const entryFiles = getEntryFile()

module.exports = {
  mode: 'development',
  entry: {
    index: path.join(__dirname, 'src/index.js')
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist'),
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        use: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]-[local]-[hash:base64:5]'
              }
            }
          },
          'sass-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      filename: 'index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  devServer: {
    host: '0.0.0.0',
    hot: true,
    port: 3000,
    historyApiFallback: {
      index: '/public/index.html'
    }
    // contentBase: path.join(__dirname, 'dist'),
    // publicPath: '/public/'
  }
}
