let mix = require('laravel-mix');

mix.js('src/vue-signing.vue', 'dist');
mix.js('demo/app.js', 'demo/app.build.js');
