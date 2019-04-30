'use strict';

const gulp = require('gulp');

const sass = require('gulp-sass');
const babel = require('gulp-babel');
const server = require('gulp-webserver');
sass.compiler = require('node-sass');

const babelConfig = require('./babelConfig');
const browserify = require('gulp-browserify');

// ONE TIME TASKS
// SASS TRANSPILE
gulp.task('sass', function () {
    return gulp.src('./sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

// BABEL LIBRARY TRANSPILE
gulp.task('dist', () =>
    gulp.src('lib/**/*.js*')
        .pipe(babel(babelConfig))
        .pipe(gulp.dest('dist'))
);

// BABEL DEMO TRANSPILE
gulp.task('demo', function() {
    // Single entry point to browserify
    gulp.src('src/js/index.jsx')
        .pipe(browserify({
            insertGlobals : true,
            debug : true
        }))
        .pipe(gulp.dest('./demo'))
});

// WATCH TASKS
// SASS TRANSPILE
gulp.task('sass:watch', () => {
    gulp.series(['sass']);
    gulp.watch('./sass/**/*.scss', gulp.series(['sass']));
});

// BABEL LIBRARY TRANSPILE
gulp.task('dist:watch', () => {
    gulp.series(['dist']);
    gulp.watch('./lib/**/*.js', gulp.series(['dist']));
    gulp.watch('./lib/**/*.jsx', gulp.series(['dist']));
});

// BABEL DEMO TRANSPILE
gulp.task('demo:watch', () => {
    gulp.series(['demo']);
    gulp.watch('./demo/index.jsx', gulp.series(['demo']));
});

// DEMO DEV SERVER
gulp.task('server', () => {
    gulp.src('demo')	// <-- your app folder
        .pipe(server({
            livereload: true,
            open: true,
            port: 3000	// set a port to avoid conflicts with other local apps
        }));
});