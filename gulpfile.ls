require! {
	\gulp
	\gulp-load-plugins
}

plugins = gulpLoadPlugins()


gulp.task \ls ->
	return gulp.src \src/*.ls
	.pipe plugins.livescript {bare: true} 
	.on \error, plugins.util.log
	.pipe gulp.dest \./public/
	.pipe plugins.jshint()
	.pipe plugins.uglify preserveComments: 'some'
	.pipe plugins.rename extname: '.min.js'
	.pipe gulp.dest './public/'

gulp.task \watch ->
	gulp.watch \src/*.ls, ['ls']