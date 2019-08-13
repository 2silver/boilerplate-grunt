module.exports = {
  options: {
    plugins: [
      {
        removeViewBox: false,
      },
      {
        removeUselessStrokeAndFill: false,
      },
      {
        removeAttrs: {
          attrs: ['xmlns'],
        },
      },
    ],
  },
  dist: {
    files: [
      {
        expand: true,
        cwd: '<%= config.src %>/',
        src: ['**/*.svg'],
        dest: '<%= config.dist %>/',
      },
    ],
  },
};
