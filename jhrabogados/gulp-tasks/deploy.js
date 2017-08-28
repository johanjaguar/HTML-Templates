var ftp = require( 'vinyl-ftp' );
var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require('gulp-notify');

gulp.task('deploy-dev', function() {
  var conn = ftp.create( {
    host:     'ftp.jhrcorp.co',
    user:     'jhrcorpco',
    password: 'danach3387CEET&',
    parallel: 3,
    log:      gutil.log,
    secure:   true
  } );

  /* list all files you wish to ftp in the glob variable */
  var globs = [
    '**/*',
    '*',
    '!node_modules/**' // if you wish to exclude directories, start the item with an !
  ];

  return gulp.src( globs, { base: '.', buffer: false } )
    .pipe( conn.newer( 'server_directory/' ) ) // only upload newer files
    .pipe( conn.dest( 'server_directory/' ) )
    .pipe(notify("Dev site updated!"));

});
//gulp.watch(['*', '**/*'], 
//  ['deploy-dev']
//);