module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            app: {
                src: 'client/scripts/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            }
        },
        copy: {
            html: {
                expand: true,
                cwd: 'client/views',
                src: '*.html',
                dest: 'server/public/assets/views'
              },
            css: {
                expand: true,
                cwd: 'client/styles',
                src: '*.css',
                dest: 'server/public/assets/styles'
              },
            angular: {
                expand: true,
                cwd: 'node_modules',
                src: [
                  'angular/angular.min.js',
                  'angular/angular.min.js.map'
                ],
                dest: 'server/public/vendors'
              }
            }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};
