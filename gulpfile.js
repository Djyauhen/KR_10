'use strict'
const gulp = require('gulp');
const less = require('gulp-less');
const min = require('gulp-cssmin');
const suff = require('gulp-rename');


function defaultTask() {
        return gulp.src('./src/css/*.less')
            .pipe(less())
            .pipe(min())
            .pipe(suff({suffix: '.min'}))
            .pipe(gulp.dest('./dist/css'));
}

exports.default = defaultTask;

exports.watch = function() {
        gulp.watch('./src/css/*.less', gulp.series(defaultTask));
};