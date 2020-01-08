const path = require('path');

let config = {
  // mode: process.env.NODE_ENV || 'production',
  entry: './electron/main.ts',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'electron.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'config/electron.tsconfig.json',
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  node: {
    __dirname: false,
  },
  target: 'electron-main',
};

module.exports = (env, argv) => {
  config.mode = argv.mode || 'production';
  return config;
};
