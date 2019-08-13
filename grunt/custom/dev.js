module.exports = function(grunt) {
  grunt.registerTask('dev', ['concurrent', 'connect', 'watch']);
};
