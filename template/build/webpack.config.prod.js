const path = require('path')
const paths = require('./paths')
const webpack = require('webpack')
const { css } = require('./webpack.loaders')
const { Config } = require('webpack-config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin')

const externals = [
  {
    module: 'react',
    entry: '//shadow.elemecdn.com/npm/react@16.2.0/umd/react.production.min.js',
    global: 'React',
  },
  {
    module: 'react-dom',
    entry: '//shadow.elemecdn.com/npm/react-dom@16.2.0/umd/react-dom.production.min.js',
    global: 'ReactDOM',
  },
]

module.exports = new Config()
  .extend(path.resolve(paths.appBuild, 'webpack.config.base.js'))
  .merge({
    mode: 'production',
    optimization: {
      splitChunks: {
        chunks: 'all',
        minChunks: 1,
        name: true,
      },
      runtimeChunk: 'single',
      // runtimeChunk: true,
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: false,
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
      // concatenateModules: true,
      // namedModules: true,
      // minimize: false,
      // minimizer: [
      //   new UglifyJSPlugin({
      //     uglifyOptions: {
      //       beautify: false,
      //       compress: true,
      //       comments: false,
      //       mangle: false,
      //       toplevel: false,
      //       keep_classnames: true, // <-- doesn't exist, I guess. It's in harmony branch
      //       keep_fnames: true,
      //     },
      //   }),
      // ], // internal uglify-js by default
    },
    output: {
      path: paths.appDist,
      filename: 'static/js/[name].[chunkhash:8].js',
      chunkFilename: 'static/js/[name].[chunkhash:8].js',
    },
    module: {
      rules: [
        ...css.getExtractCSSLoaders(),
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash].css',
        chunkFilename: 'static/css/[name].[contenthash].css',
      }),
      new HtmlWebpackPlugin({
        template: paths.appHtml,
        filename: 'index.html',
      }),
      new ManifestPlugin({}),
      new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime~.+[.]js/]),
      new HtmlWebpackExternalsPlugin({ externals }),
      new webpack.HashedModuleIdsPlugin(),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: 'report.html',
        openAnalyzer: false,
      }),
    ],
  })
