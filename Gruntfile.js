module.exports = function (grunt) {
	
	grunt.initConfig({
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
		}
	});
	
	grunt.registerTask('default',['dist', 'minifica']);	
	grunt.registerTask('dist',['clean', 'copy']);
	grunt.registerTask('minifica',['useminPrepare', 'ngAnnotate','concat', 'uglify', 'cssmin', 'usemin']);
	
	grunt.loadNpmTasks('grunt-contrib-copy');	
	grunt.loadNpmTasks('grunt-contrib-clean');	
	grunt.loadNpmTasks('grunt-contrib-concat');	
	grunt.loadNpmTasks('grunt-contrib-uglify');	
	grunt.loadNpmTasks('grunt-contrib-cssmin');	
	grunt.loadNpmTasks('grunt-usemin');	
	grunt.loadNpmTasks('grunt-ng-annotate');
};