const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const sass = require('sass');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Vérification des fichiers critiques
const checkRequiredFiles = () => {
  const requiredFiles = [
    { path: 'src/index.js', error: 'Le fichier index.js est manquant dans src/' },
    { path: 'public/index.html', error: 'Le fichier index.html est manquant dans public/' },
  ];

  requiredFiles.forEach(({ path: filePath, error }) => {
    if (!fs.existsSync(path.resolve(__dirname, filePath))) {
      console.error(`ERREUR: ${error}`);
      process.exit(1);
    }
  });
};
checkRequiredFiles();

module.exports = (env, argv) => {
  const mode = argv.mode || 'development';
  const isProduction = mode === 'production';
  const isDevelopment = mode === 'development';

  const alias = {
    '@': path.resolve(__dirname, 'src'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@mui/material': path.resolve(__dirname, 'node_modules/@mui/material'),
    '@mui/icons-material': path.resolve(__dirname, 'node_modules/@mui/icons-material'),
  };

  return {
    target: isProduction ? ['web', 'es5'] : 'web',
    mode: mode,
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: isProduction ? 'static/js/[name].[contenthash:8].js' : 'static/js/[name].js',
      chunkFilename: isProduction ? 'static/js/[name].[contenthash:8].chunk.js' : 'static/js/[name].chunk.js',
      publicPath: '/', // ✅ Important !
      clean: true,
      assetModuleFilename: 'static/media/[name].[hash][ext]',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.mjs'],
      alias,
      modules: ['node_modules'],
      fallback: {
        path: require.resolve('path-browserify'),
        os: require.resolve('os-browserify/browser'),
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer/'),
        process: require.resolve('process/browser'),
        vm: false,
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              configFile: path.resolve(__dirname, 'babel.config.json'),
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
          ],
        },
        {
          test: /\.(scss|sass)$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: sass,
                sassOptions: {
                  includePaths: [path.resolve(__dirname, 'src/styles')],
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf)$/i,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        favicon: path.resolve(__dirname, 'public/favicon.ico'),
        minify: isProduction,
      }),
      isDevelopment && new webpack.HotModuleReplacementPlugin(),
      isDevelopment && new (require('@pmmmwh/react-refresh-webpack-plugin'))(),
      isProduction && new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:8].css',
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      new Dotenv(),
    ].filter(Boolean),
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
        publicPath: '/',
      },
      hot: true,
      historyApiFallback: true,
      port: 3000,
      open: true,
    },
    optimization: {
      minimize: isProduction,
      minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    },
    stats: {
      errorDetails: true,
    },
    performance: {
      hints: false,
    },
  };
};
