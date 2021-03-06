module.exports = function (grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy:{
			project:{
				expand: true,
				cwd: '.',
				src: ['**', '!Gruntfile.js', '!package.json', '!bower.json'],
				dest: 'wwwroot'
			}
		},
		clean:{
			dist:{
				src: 'wwwroot'
			}
		},
		
		usemin:{
			html: 'wwwroot/public/index.html'
		},
		
		useminPrepare:{
			options:{
				root: 'wwwroot/public',	
				dest: 'wwwroot/public'	
			},
			html: 'public/index.html'
		}, 
		ngAnnotate:{
			scripts:{
				expand: true,
				src: ['wwwroot/public/js/**/*.js']
			}
		},
		protractor: {
			options: {
				configFile: "./config/protractor.js", // Default config file 
				keepAlive: true, // If false, the grunt process stops when the test fails. 
				noColor: false, // If true, protractor will not use colors in its output. 
				debug: false,
				args: {
					// Arguments passed to the command 
				}
			},
			degug: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too. 
				options: {
					configFile: "config/protractor.js", // Target-specific config file 
					debug: false,
					keepAlive: true,
					args: {} // Target-specific arguments 
				}
			},
		},
		protractor_webdriver: {
			options: {
				path: './node_modules/protractor/bin/webdriver-manager',
				command: 'custom-webdriver-manager start --standalone',
				keepAlive: true,
			}
		},
	    jshint: {
	      all: ['public/js/**/*.js'],
	      options: grunt.file.readJSON('.jshintrc')
	    },
	    karma: {
		  unit: {
		    configFile: 'karma.conf.js',
		    port: 9999,
		    singleRun: true,
		    browsers: ['PhantomJS'],
		    logLevel: 'ERROR'
		  }
		},
		express:{
			test: {
		      options: {
		        script: 'server.js',
		        port: 3000,
		        node_env: 'test',
		        background: true,
		      }
		    },
		}
	});
	
	grunt.registerTask('default',['dist', 'minifica']);	
	grunt.registerTask('dist',['clean', 'copy']);
	grunt.registerTask('minifica',['useminPrepare', 'ngAnnotate','concat', 'uglify', 'cssmin', 'usemin']);
	grunt.registerTask('e2e', ['karma', 'protractor_webdriver','express:test','protractor']);
	grunt.registerTask('jenkins', ['e2e']);

	grunt.loadNpmTasks('grunt-contrib-copy');	
	grunt.loadNpmTasks('grunt-contrib-clean');	
	grunt.loadNpmTasks('grunt-contrib-concat');	
	grunt.loadNpmTasks('grunt-contrib-uglify');	
	grunt.loadNpmTasks('grunt-contrib-cssmin');	
	grunt.loadNpmTasks('grunt-usemin');	
	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-protractor-runner');
	grunt.loadNpmTasks('grunt-protractor-webdriver');
	grunt.loadNpmTasks('grunt-express-server');

	grunt.loadNpmTasks('grunt-testem');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-karma');
};