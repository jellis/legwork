'use strict';

var gulp = require('gulp'),
    util = require('gulp-util'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

var config = {
    css_output: 'public/css',
    production: !!util.env.production
};

// Default task
gulp.task('default', ['sass', 'js-compile', 'js']);

// Watch files
gulp.watch('source/js/**/*.js', ['js-compile', 'js']);

// Build the css files
gulp.task('sass', function(){
    return gulp.src('source/scss/app.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }), 'app.css')
        .pipe(gulp.dest('public/css'));
});

// All files that need to be compressed into "app.js"
gulp.task('js-compile', function(){
    return gulp.src([
        'source/js/jquery.js',
        'source/js/seaessess.js',
        'source/js/seaessess.modal.js'
    ])
    .pipe(concat('app.js'))
    .pipe(config.production ? uglify() : util.noop())
    .pipe(gulp.dest('public/js'));
});

// Standalone js files that aren't always needed
gulp.task('js', function(){
    return gulp.src([
        'source/js/jquery.placeholder.js'
    ])
    .pipe(config.production ? uglify() : util.noop())
    .pipe(gulp.dest('public/js'));
});