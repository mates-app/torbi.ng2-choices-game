/**
 * Created by josecullen on 04/09/16.
 */

var gulp = require('gulp')

gulp.task('copy:assets', [], function() {
    return gulp.src([
        'src/**/*',
        'index.html',
        'styles.css',
        '!src/**/*.ts',
        '!src/**/*.js',
        '!src/**/*.map',

    ], { base : './src' })
        .pipe(gulp.dest('lib'))
});