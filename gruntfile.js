'use strict';
const path = require('path');

const sass = require('node-sass');

module.exports = function(grunt) {
    // Project configuration.
    // Load grunt tasks automatically, when needed
    require('jit-grunt')(grunt, {
        buildcontrol: 'grunt-build-control'
    });

    grunt.initConfig({
        clean: {
            lib: ['lib/**/*'],
            build: ['build/**/*']
        },
        copy: {
            demo: {
                files: {
                    'build/index.html': ['demo/index.html'],
                    'build/all.css': ['lib/all.css'],
                    'build/horizontal.css': ['lib/horizontal.css'],
                    'build/standard.css': ['lib/standard.css'],
                }
            },
            deploy: {
                src: 'CNAME',
                dest: 'build/'
            }
        },
        browserify: {
            options: {
                alias: {
                    'diffex': './lib/index.js'
                }
            },
            demo: {
                files: {
                    'build/index.js': ['demo/index.js']
                },
                options: {
                    watch: true,
                    transform: ['babelify']
                }
            }
        },
        buildcontrol: {
            options: {
                dir: 'build',
                commit: true,
                push: true,
                connectCommits: false,
                message: 'Built live demo from commit %sourceCommit%'
            },
            demo: {
                options: {
                    // Update the remote to point to your github repo
                    remote: 'git@github.com:oscmedgon/react-easy-grid.git',
                    branch: 'gh-pages',
                }
            }
        },
        sass: {
            options: {
                implementation: sass,
                sourceMap: true,
                outputStyle: 'compressed'
            },
            dist: {
                files: {
                    'lib/all.css': 'sass/all.scss',
                    'lib/standard.css': 'sass/standard.scss',
                    'lib/horizontal.css': 'sass/horizontal.scss',
                }
            }
        },
        connect: {
            dev: {
                options: {
                    base: 'build',
                    hostname: 'localhost',
                    port: 3000,
                    livereload: true
                }
            }
        },
        watch: {
            dev: {
                files: ['build/*'],
                options: {
                    livereload: true
                }
            },
            source: {
                files: ['demo/*'],
                tasks: ['build']
            }
        }
    });

    grunt.registerTask('build', ['clean:build', 'copy:demo', 'browserify']);
    grunt.registerTask('serve', ['build', 'connect', 'watch']);
    grunt.registerTask('deploy', ['build', 'copy:deploy', 'buildcontrol']);
    grunt.registerTask('dist', ['clean:lib', 'sass']);
    grunt.registerTask('default', ['dist']);
};
