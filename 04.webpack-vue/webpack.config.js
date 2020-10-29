const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                strictMath: true,
              },
            }
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|gpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当图片小于 8KB 的时候，会编译成base64字符串的形式
              //当图片大于 8KB 的时候，需要使用file-loader模块
              limit: 8192,
              name: 'img/[name].[hash:8].[ext]'
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ],
  },
  resolve: {
    alias: {'vue$': 'vue/dist/vue.esm.js'},
    extensions: ['.js', '.css', '.vue']
  },
  plugins: [
    new webpack.BannerPlugin("最终版权归h'mm所有")
  ]
}

