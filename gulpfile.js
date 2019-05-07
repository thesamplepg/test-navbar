const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const sassCompiler = (callback) => {
    return gulp.src('./sass/*.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(autoprefixer())
        .pipe(gulp.dest('./css'));
}

const watch = (done) => {
    gulp.watch('./sass/*.scss', sassCompiler);
}

const defaultTask = (callback) => {

    watch();

    callback();

}

exports.default = defaultTask;