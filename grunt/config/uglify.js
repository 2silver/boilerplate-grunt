module.exports = {
      options: {
        sourceMap: true,
        banner: '<%= config.banner %>'
      },

    dist: {
        files: [{
            expand: true,
            cwd: '<%= config.src %>/js',
            src: ['**/*.js'],
            dest: '<%= config.dist %>/js',
        }]
    }
}
