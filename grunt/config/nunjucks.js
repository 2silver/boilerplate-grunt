module.exports = {
  options: {
    // data: <%= data %>,
    // paths: 'templates',
    // banner: '<%= config.banner %>',
  },

  dist: {
    files: [
      {
        expand: true,
        cwd: '<%= config.src %>/',
        src: ['**/*.html'],
        dest: '<%= config.dist %>/',
      },
    ],
  },
};
