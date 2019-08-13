module.exports = function(grunt) {
  grunt.registerTask('dev', ['concurrent', 'eslint', 'nunjucks', 'connect', 'watch']);
};
