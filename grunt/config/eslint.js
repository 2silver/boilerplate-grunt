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
        cwd: '<%= config.src %>/scripts',
        src: ['*.js'],
        dest: '<%= config.dist %>/scripts',
      },
    ],
  },
};
