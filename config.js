/* global module */

let config = {
  'notGetBlocks': [
    'blocks-demo.html',
  ],
  'ignoredBlocks': [
    'no-js',
  ],
  'alwaysAddBlocks': [
    // 'sprite-svg',
    // 'sprite-png',
    // 'object-fit-polyfill',
  ],
  'addStyleBefore': [
    'src/scss/default.scss',
    'src/scss/variables.scss',
    'src/scss/mixins.scss',
    'src/scss/font.scss',
    'node_modules/nouislider/distribute/nouislider.css'
    

    
    // 'somePackage/dist/somePackage.css', // для 'node_modules/somePackage/dist/somePackage.css',
  ],
  'addStyleAfter': [
    // 'src/scss/print.scss',
  ],
  'addJsBefore': [
    // 'somePackage/dist/somePackage.js', // для 'node_modules/somePackage/dist/somePackage.js',
    // '../../node_modules/jquery/dist/jquery.min.js',
    // './utils/pickmeup.js'
  ],
  'addJsAfter': [
    './script.js',
  ],
  'addAssets': {
    'src/img/*.*': 'img/',
    'src/img/users/*.*': 'img/users/',
    'src/img/rooms/*.*': 'img/rooms/',
    'src/fonts/*.*': 'fonts/',
    // 'src/favicon/*.{png,ico,svg,xml,webmanifest}': 'img/favicon',
    // 'node_modules/somePackage/images/*.{png,svg,jpg,jpeg}': 'img/',
  },
  'dir': {
    'src': 'src/',
    'build': 'build/',
    'blocks': 'src/blocks/'
  }
};

module.exports = config;
