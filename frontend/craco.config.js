const { when, whenDev } = require('@craco/craco');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Configuration pour axios
      webpackConfig.resolve.fallback = {
        ...(webpackConfig.resolve.fallback || {}),
        process: require.resolve('process/browser'),
      };

      // Configuration pour l'optimisation des images en production seulement
      if (env === 'production') {
        webpackConfig.optimization.minimizer = [
          ...(webpackConfig.optimization.minimizer || []),
          new ImageMinimizerPlugin({
            minimizer: {
              implementation: ImageMinimizerPlugin.imageminMinify,
              options: {
                plugins: [
                  ['jpegtran', { progressive: true }],
                  ['optipng', { optimizationLevel: 5 }],
                  [
                    'svgo',
                    {
                      plugins: [
                        {
                          name: 'preset-default',
                          params: {
                            overrides: {
                              removeViewBox: false,
                              addAttributesToSVGElement: {
                                params: {
                                  attributes: [
                                    { xmlns: 'http://www.w3.org/2000/svg' },
                                  ],
                                },
                              },
                            },
                          },
                        },
                      ],
                    },
                  ],
                ],
              },
            },
          }),
        ];
      }

      return webpackConfig;
    },
  },
};
module.exports = {
    style: {
      sass: {
        loaderOptions: {
          additionalData: `@import "~@/styles/variables.scss";`,
        },
      },
    },
  };