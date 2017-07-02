let mix = require('laravel-mix');

mix.webpackConfig({
  output: {
    library: 'vue-signing',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
});

mix.js('src/vue-signing.vue', 'dist');
mix.js('demo/app.js', 'demo/app.build.js');
