/* eslint-disable function-paren-newline */
const paths = require('./paths')
const { css } = require('./webpack.loaders')
const { Config } = require('webpack-config')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')

const externals = [
  {
    module: 'react',
    entry: '//shadow.elemecdn.com/npm/react@16.2.0/umd/react.development.js',
    global: 'React',
  },
  {
    module: 'react-dom',
    entry: '//shadow.elemecdn.com/npm/react-dom@16.2.0/umd/react-dom.development.js',
    global: 'ReactDOM',
  },
]

module.exports = new Config()
  // .extend(path.resolve(paths.appBuild, 'webpack.config.base.js'))
  .extend({
    './build/webpack.config.base.js': conf => {
      conf.entry.app.unshift(
        require.resolve('react-dev-utils/webpackHotDevClient'),
      )
      return conf
    },
  })
  .merge({
    mode: 'development',
    devtool: 'source-map',
    output: {
      publicPath: '/',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: paths.appHtml,
        filename: 'index.html',
      }),
      new HtmlWebpackExternalsPlugin({ externals }),
      new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
      rules: [
        ...css.getDevLoaders(),
      ],
    },
  })
