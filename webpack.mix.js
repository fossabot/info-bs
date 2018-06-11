const mix = require('laravel-mix');
const LiveReloadPlugin = require('webpack-livereload-plugin');

mix.setPublicPath('dist')
  .js('src/js/main.js', 'dist/js')
  .sass('src/sass/main.scss', 'dist/css')
  .sourceMaps()
  .version();

mix.webpackConfig({
  plugins: [
    new LiveReloadPlugin()
  ]
});
