module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
    copy: {
      html: {
        expand: true,
        cwd: 'client/views',
        src: '*.html',
        dest: 'server/public/assets/views'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['copy', 'uglify']);
};
