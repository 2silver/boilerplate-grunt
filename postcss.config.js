'use strict';

module.exports = ctx => ({
  map: ctx.options.map,
  parser: ctx.options.parser,
  plugins: [
    require('autoprefixer')({
      cascade: false,
    }),
    require('postcss-normalize-charset'),
  ],
});
