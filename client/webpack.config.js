const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPackManifest = require('webpack-pwa-manifest');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');


// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    //Adding the plugins for the manifest and service worker
    //Adding the CSS loader
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Budget Tracker',
      }),
      //Generating the Service Worker
      new GenerateSW(),
      //Generating the Manifest,
      new WebpackPackManifest({
        name: 'Budget Tracker',
        short_name: 'Budget Tracker',
        description: 'An application that allows you to track your budget even offline!'
      }),
      new MiniCssExtractPlugin(),
      
    ],

    module: {
      //This is creating the different rules for when the file is created.
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          test: /\.js$/i,
          exclude: /(node_modules)|bower_components/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            }
          }
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader'
            }
          ]
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        
      ],
    },
  };
};
