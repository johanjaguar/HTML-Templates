const gulp = require('gulp'),
	pug = require('gulp-pug');

gulp.task('pug', () => 
	gulp.src('index.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest(''))
);