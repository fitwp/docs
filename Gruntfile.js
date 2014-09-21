module.exports = function ( grunt )
{
	'use strict';

	// Load all Grunt tasks
	require( 'load-grunt-tasks' )( grunt );

	// Grunt configuration
	grunt.initConfig( {

		// Optimize images
		imagemin       : {
			all: {
				files: [{
					expand: true,
					src   : ['**/*.jpg', '**/*.png']
				}]
			}
		}
	} );


	// Register tasks
	grunt.registerTask( 'default', [
		'imagemin'
	] );
};
