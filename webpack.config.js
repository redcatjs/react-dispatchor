module.exports = {
  entry: {
    'eventDispatcher': ['./src/eventDispatcher.js']
  },
  output: {
    filename: 'dist/[name].js',
    library: "react-dispatchor",
		libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.(js)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: [

          ],
          presets: [

          ],
          cacheDirectory: true,
          babelrc: true
        }
      }
    ],
  },
  externals: {
    'react': {
      commonjs: 'react',
      commonjs2: 'react',
    },
    'dispatchor': {
      commonjs: 'dispatchor',
      commonjs2: 'dispatchor',
    },
    'react-router-redux': {
      commonjs: 'react-router-redux',
      commonjs2: 'react-router-redux',
    },
  },
  devtool: 'source-map'
}
