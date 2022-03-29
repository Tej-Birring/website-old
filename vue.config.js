module.exports = {
  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: 'page-'
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/assets/css/_vars.scss";
          @import "~@/assets/css/global-utilities.scss";
        `
      }
    }
  }
};
