module.exports = {
  options: {
    livereload: true,
  },
  scripts: {
    files: ['<%= config.src %>/js/**/*.js'],
    tasks: ['eslint'],
    options: {
      spawn: false,
    },
  },
  css: {
    files: ['<%= config.src %>/css/**/*.scss'],
    tasks: ['sass', 'postcss'],
    options: {
      spawn: false,
    },
  },
  html: {
    files: ['<%= config.src %>/html/**/*.{html,njk}'],
    tasks: ['nunjucks'],
    options: {
      spawn: false,
    },
  },
};
