
module.exports = {
  options: {
    map: false,
    processors: [require('autoprefixer')()],
    banner: '<%= config.banner %>',
  },
  dist: {
    files: [
      {
        expand: true,
        cwd: '<%= config.tmp %>/css',
        src: ['*.css'],
        dest: '<%= config.dist %>/css',
      },
    ],
  },
};
