const path = require('path');

module.exports = {
  entry: './src/pages/_app.tsx',
  plugins: [
    'babel-plugin-styled-components',
    {
      ssr: true,
      displayName: true,
      preprocess: false,
    },
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

export {};
