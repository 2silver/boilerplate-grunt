module.exports = {
  options: {
    configFile: '.eslintrc',
    // format: 'node_modules/eslint-json',
    // reporterOutput: '',
  },
  dist: {
    files: [
      {
        expand: true,
        cwd: '<%= config.src %>/js',
        src: ['*.js'],
        dest: '<%= config.dist %>/js',
      },
    ],
  },
};
