const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
const CssWebpackPlugin = require('mini-css-extract-plugin');
const Babel = require('babel-loader');
const Workbox = require('workbox-webpack-plugin');
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
      CssWebpackPlugin.loader(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        chunks: ['main']
      }),
      //Generating the Service Worker
      GenerateSW({
        swDest: 'sw.js',      
      }),
      //Generating the Manifest,
      
      
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
