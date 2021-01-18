const path = require('path');
const plugins = require('./config/plugins');

module.exports = {
  lintOnSave: false,
  outputDir: "./htdocs_before_deploy",
  filenameHashing: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

  configureWebpack: {
    plugins: [plugins.CopyToAppPlugin],
  },

  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].hash = true;
      return args;
    });
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        // modify the options...
        options.postcss = {
          config: {
            path: path.resolve('./'),
          },
        };
        return options;
      });
  },
};
