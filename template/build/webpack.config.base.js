const paths = require('./paths')
const tsImportPluginFactory = require('ts-import-plugin')

module.exports = {
  entry: {
    app: [
      paths.appIndexJs,
    ],
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: paths.appDist,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    modules: [
      paths.appSrc,
      'node_modules',
    ],
    alias: {
      '@': paths.appSrc,
      components: paths.appComponents,
      styles: paths.appStyles,
      pages: paths.appPages,
      lib: paths.appLib,
      services: paths.appServices,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        include: /rxjs/,
        enforce: 'pre',
      },
      {
        test: /\.(js|jsx|mjs|ts|tsx)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: paths.appSrc,
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: false,
          getCustomTransformers: () => ({
            before: [tsImportPluginFactory({
              libraryName: 'antd',
              libraryDirectory: 'es',
              style: true,
            })],
          }),
          compilerOptions: {
            module: 'ESNext',
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx|mjs)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: paths.appSrc,
      },
      {
        test: /\.(js|jsx|mjs)$/,
        include: paths.appSrc,
        use: {
          loader: require.resolve('babel-loader'),
        },
      },
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'static/assets/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
}
