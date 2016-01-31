var gulp = require('gulp')
var connect = require('gulp-connect')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var taskListing = require('gulp-task-listing');

// Add a task to render the output
gulp.task('help', taskListing);

gulp.task('serve', function () {
    connect.server({
        root: 'public',
        port: 4000
    })
})


gulp.task('browserify', function() {
    // Grabs the app.js file
    return browserify('./app/main.js')
        // bundles it and creates a file called main.js
        .bundle()
        .pipe(source('main.js'))
        // saves it the public/js/ directory
        .pipe(gulp.dest('./public/js/'));
})

gulp.task('copy-static', function() {
    gulp.src('./static/**/*')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('./public'));
});

gulp.task('watch', function() {
  gulp.watch('app/**/*.js', ['browserify'])
  gulp.watch('static/**/*', ['copy-static'])
})

gulp.task('default', ['serve', 'watch'])
