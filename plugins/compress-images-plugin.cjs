const { compress } = require('./compress-images.cjs');

/**
 * @param {*} context
 * @param {*} options
 * @returns {import('@docusaurus/types/src/plugin.d.ts').Plugin}
 */
function compressImagesPlugin(context, options) {
  return {
    name: 'compress-plugin',

    async postBuild() {
      return compress(['build/**/*.jpeg', 'build/**/*.png']);
    },
  };
}

module.exports = compressImagesPlugin;
