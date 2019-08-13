module.exports = {
  options: {
    livereload: true,
  },
  scripts: {
    files: ['<%= config.src %>/{js,scripts}/**/*.js'],
    tasks: ['eslint'],
    options: {
      spawn: false,
    },
  },
  css: {
    files: ['<%= config.src %>/{css,styles}/**/*.scss'],
    tasks: ['sass', 'postcss'],
    options: {
      spawn: false,
    },
  },
};
