const sass = require('sass');

module.exports = {
  dist: {
    options: {
      implementation: sass,
      sourcemap: 'auto',
      style: 'expanded',
    },
    files: [
      {
        expand: true,
        cwd: '<%= config.src %>/styles',
        src: ['*.{scss,sass}'],
        dest: '<%= config.tmp %>/css',
        ext: '.css',
      },
    ],
  },
};
