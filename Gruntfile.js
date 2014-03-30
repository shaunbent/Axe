/**
 * This GruntFile should give us everything we need to get a project up and running,
 * but also run some optimisations for production.
 *
 * The structure of this file is orginally based on the work Jonathan Christopher
 * (http://bit.ly/X6BFVE) but has since been developed in a different direction by
 * myself whilst I was at Forepoint (http://www.forepoint.co.uk) and then by Mr Adam
 * Bulmer (http://www.twitter.com/mintuz).
 *
 * To run the grunt in production mode use the following command: `grunt --mode=prod`
 * or to create the icons run the following command: `grunt --mode=icons`
 */
module.exports = function( grunt ) {

    var mode = grunt.option( 'mode' ) || 'dev';

    // load tasks
    grunt.loadNpmTasks( 'grunt-contrib-sass' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-concat' );
    grunt.loadNpmTasks( 'grunt-bowercopy' );

    if ( mode == 'prod' ) {

        grunt.log.subhead( 'Running Grunt in `Production` mode' );

        grunt.loadNpmTasks( 'grunt-svgmin' );
        grunt.loadNpmTasks( 'grunt-contrib-uglify' );
        grunt.loadNpmTasks( 'grunt-contrib-imagemin' );

    } else if( mode == 'icons' ) {

        grunt.log.subhead( 'Running Grunt in `Icon` mode' );

        grunt.loadNpmTasks( 'grunt-webfont' );

    } else {

        grunt.log.subhead( 'Running Grunt in `Development` mode' );

    }

    grunt.initConfig({

        // bower process
        bowercopy: {
            options: {
                runBower: true,
                clean: true
            },
            // Javascript
            libs: {
                options: {
                    destPrefix: 'assets/js/vendor'
                },
                files: {
                    'jquery.js': 'jquery/jquery.js',
                    'modernizr.js': 'modernizr/modernizr.js'
                },
            }
        },

        // compile sass
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'assets/css/main.css': 'assets/sass/main.scss',
                    'assets/css/main-old-ie.css': 'assets/sass/main-old-ie.scss'
                }
            },
            prod: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'assets/css/main.css': 'assets/sass/main.scss',
                    'assets/css/main-old-ie.css': 'assets/sass/main-old-ie.scss'
                }
            }
        },

        // concatenation and minification all in one
        uglify: {
            dist: {
                files: {
                    'assets/js/main.js': [ 'assets/js/main.js' ]
                }
            },
        },

        // concatenation
        concat: {
            options: {
                separator: ''
            },
            dist: {
                src: [
                    'assets/js/plugins.js',
                    'assets/js/functions/*.js',
                    'assets/js/main.dev.js'
                ],
                dest: 'assets/js/main.js'
            }
        },

        // build icon font
        webfont: {
            icons: {
                src: 'assets/icons/*.svg',
                dest: 'assets/css/fonts',
                destCss: 'assets/sass/objects/',
                options: {
                    font: 'icons',
                    hashes: false,
                    htmlDemo: false,
                    stylesheet: 'scss',
                    styles: 'font,icon',
                    template: 'assets/icons/icon-template.css',
                    relativeFontPath: 'fonts/'
                }
            }
        },

        // Imagemin
        imagemin: {
            files: {
                expand: true,
                cwd: 'assets/img/',
                src: [ '**/*.{png,gif,jpg}' ],
                dest: 'assets/img/'
            }
        },

        // SVG Min
        svgmin: {
            options: {
                plugins: [{
                    removeViewBox: false
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'assets/img/',
                    src: [ '**/*.svg' ],
                    dest: 'assets/img/'
                }]
            }
        },

        // watch our project for changes
        watch: {
            compass: {
                files: [
                    'assets/sass/*.scss',
                    'assets/sass/**/*.scss'
                ],
                tasks: [ 'compass' ]
            },
            js: {
                files: [
                    'assets/js/plugins.js',
                    'assets/js/classes/*.js',
                    'assets/js/main.dev.js'
                ],
                tasks: ['concat']
            }
        }

    });

    // a task to manage bower and move files to where want them
    grunt.registerTask( 'bower', [ 'bowercopy' ] );

    // register default task when `grunt` command is run
    grunt.registerTask( 'default', function() {

        // some tasks we only want to run in production mode
        if ( mode == 'prod' ) {

            grunt.task.run([
                'sass:prod',
                'concat',
                'uglify',
                'imagemin',
                'svgmin'
            ]);

        } else if( mode == 'icons' ) {

            grunt.task.run([
                'webfont'
            ]);

        } else {

            grunt.task.run([
                'sass:dist',
                'concat',
                'watch'
            ]);

        }

    });

};
