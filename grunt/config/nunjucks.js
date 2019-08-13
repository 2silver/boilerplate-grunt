module.exports = {
  options: {
    data: '<%= config %>',
    paths: ['<%= config.src %>/html'],
    banner: '<%= config.banner %>',
    autoescape: true,
    cache: false,
  },
  render: {
    files: [
      {
        expand: true,
        cwd: '<%= config.src %>/html',
        src: ['**/*.html'],
        dest: '<%= config.dist %>/',
        ext: '.html',
      },
    ],
  },
};
