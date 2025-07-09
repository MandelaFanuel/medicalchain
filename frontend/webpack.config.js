const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const sass = require('sass');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const checkRequiredFiles = () => {
  const requiredFiles = [
    { path: 'src/index.js', error: 'Le fichier index.js est manquant dans src/' },
    { path: 'public/index.html', error: 'Le fichier index.html est manquant dans public/' },
    { path: 'src/assets/logo/logo14.png', error: 'Le fichier logo14.png est manquant dans src/assets/logo/' },
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
  const isProduction = argv.mode === 'production';
  const isDevelopment = !isProduction;

  return {
    target: isProduction ? ['web', 'es5'] : 'web',
    mode: isProduction ? 'production' : 'development',
    entry: { main: path.resolve(__dirname, './src/index.js') },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: isProduction 
        ? 'static/js/[name].[contenthash:8].js'
        : 'static/js/[name].js',
      chunkFilename: isProduction
        ? 'static/js/[name].[contenthash:8].chunk.js'
        : 'static/js/[name].chunk.js',
      publicPath: '/',
      clean: true,
      assetModuleFilename: 'static/media/[name].[hash][ext]',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        'process': 'process/browser.js',
      },
      fallback: {
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        url: require.resolve('url/'),
        assert: require.resolve('assert'),
        zlib: require.resolve('browserify-zlib'),
        stream: require.resolve('stream-browserify'),
        path: require.resolve('path-browserify'),
        os: require.resolve('os-browserify/browser'),
        crypto: require.resolve('crypto-browserify'),
        util: require.resolve('util/'),
        buffer: require.resolve('buffer/'),
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
              presets: [
                ['@babel/preset-env', { targets: "defaults", useBuiltIns: 'usage', corejs: 3 }],
                '@babel/preset-react'
              ],
              plugins: [
                isDevelopment && 'react-refresh/babel',
                '@babel/plugin-transform-runtime',
              ].filter(Boolean),
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  auto: true,
                  localIdentName: isProduction ? '[hash:base64]' : '[path][name]__[local]',
                },
              },
            },
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
                sassOptions: { includePaths: [path.resolve(__dirname, 'src/styles')] },
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg|ico|woff2?|eot|ttf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'static/media/[name].[hash][ext]'
          }
        },
      ],
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser.js',
        Buffer: ['buffer', 'Buffer'],
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        favicon: path.resolve(__dirname, 'src/assets/logo/logo14.png'),
        minify: isProduction && {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }),
      new FaviconsWebpackPlugin({
        logo: path.resolve(__dirname, 'src/assets/logo/logo14.png'),
        prefix: 'static/media/favicons/',
        cache: true,
        inject: true,
        favicons: {
          appName: 'MedicalChain',
          appDescription: 'Votre application médicale blockchain',
          developerName: 'Fanuel Mandela',
          background: '#fff',
          theme_color: '#114680',
          icons: {
            favicons: true,
            appleIcon: true,
            android: true,
            windows: false,
            yandex: false,
            coast: false,
          },
        },
      }),
      isDevelopment && new ReactRefreshWebpackPlugin(),
      isProduction && new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:8].css',
        chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
      }),
      isProduction && new CompressionPlugin({
        filename: '[path][base].gz',
        algorithm: 'gzip',
        test: /\.(js|css|html|svg|json)$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
      isProduction && new CompressionPlugin({
        filename: '[path][base].br',
        algorithm: 'brotliCompress',
        compressionOptions: { level: 11 },
        test: /\.(js|css|html|svg|json)$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
      isProduction && new ImageMinimizerPlugin({
        exclude: /favicons/,
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['imagemin-mozjpeg', { quality: 80 }],
              ['imagemin-pngquant', { quality: [0.6, 0.9], speed: 4 }],
              ['imagemin-gifsicle', { interlaced: true }],
              ['imagemin-svgo', {
                plugins: [
                  { name: 'removeViewBox', active: false },
                  { name: 'cleanupIDs', active: false },
                ]
              }],
            ],
          },
        },
        generator: [
          {
            preset: 'webp',
            implementation: ImageMinimizerPlugin.imageminGenerate,
            options: {
              plugins: [['imagemin-webp', { quality: 80 }]],
            },
          },
        ],
      }),
      new Dotenv({
        path: path.resolve(__dirname, `.env.${isProduction ? 'production' : 'development'}`),
        systemvars: true,
      }),
      new WebpackManifestPlugin({
        fileName: 'asset-manifest.json',
        publicPath: '/',
        generate: (seed, files) => {
          const manifestFiles = files.reduce((manifest, file) => {
            manifest[file.name] = file.path;
            return manifest;
          }, seed);
          return { files: manifestFiles };
        },
      }),
    ].filter(Boolean),
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
        publicPath: '/',
      },
      proxy: [{
        context: ['/api'],
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      }],
      hot: true,
      historyApiFallback: true,
      port: 3000,
      open: true,
      client: {
        overlay: { errors: true, warnings: false },
      },
      devMiddleware: {
        writeToDisk: true,
      },
    },
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            ecma: 2015,
            compress: { warnings: false, comparisons: false, inline: 2 },
            output: { comments: false, ascii_only: true },
          },
        }),
        new CssMinimizerPlugin(),
      ],
      splitChunks: {
        chunks: 'all',
        maxSize: 244 * 1024,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const name = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              return `vendor.${name.replace('@', '')}`;
            },
          },
        },
      },
      runtimeChunk: 'single',
    },
    stats: {
      errorDetails: true,
      children: false,
      modules: false,
    },
    performance: {
      hints: isProduction ? 'warning' : false,
      maxAssetSize: 244 * 1024,
      maxEntrypointSize: 244 * 1024,
    },
  };
};
