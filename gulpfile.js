var gulp = require('gulp');
var gulpLiveScript = require('gulp-livescript');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var uglify  = require('gulp-uglify');
var tinylr = require('tiny-lr');
var lr = tinylr();
var gulpLivereload = require('gulp-livereload');
var gulp = require('duo-gulp');
var duo = Duo(root).entry(entry);

gulp.task('ls', function() {
  return gulp.src('src/*.ls')
    .pipe(gulpLiveScript({
        bare: true
      })
      .on('error', gutil.log))
    .pipe(gulp.dest('./public/'));
});


gulp.task("watch", function() {
lr.listen(35729, function(err) {
  if (err) {
    return gulpUtil.log(err);
  }
});
gulp.src('src/*.ls')
  .pipe(watch('src/*.ls', function(files) {
    files.pipe(gulpLiveScript({
        bare: true
      })
      .on('error', gutil.log))
    // .pipe(uglify())
    .pipe(gulp.dest('./public/'));
  }))
});
