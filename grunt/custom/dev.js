module.exports = function(grunt) {
  grunt.registerTask('dev', [
    // 'htmlmin',
    'stylelint',
    'eslint',
    'concurrent',
    'connect',
    'watch',
  ]);
};
