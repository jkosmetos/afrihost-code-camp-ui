var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var del         = require('del');
var autoprefixer = require('gulp-autoprefixer');

// Define all of the paths I'll be using
var paths = {
    input: {
        scripts: [

            // Vendors TODO this needs to be automated somehow, specifying them like this is bad
            "bower_components/angular/angular.js",
            "bower_components/localforage/dist/localforage.js",
            "bower_components/angular-localforage/dist/angular-localForage.js",
            "bower_components/angular-ui-router/release/angular-ui-router.js",
            "bower_components/moment/moment.js",
            "bower_components/angular-moment/angular-moment.js",
            "bower_components/lodash/lodash.js",

            // App
            "source/js/**/*.js"
        ],
        styles: [
            "source/scss/*.scss"
        ],
        templates: [
            "source/**/*.html"
        ],
        fonts: [
            "source/fonts/*"
        ],
        images: [
            "source/images/**/*"
        ]
    },
    output: {
        scripts: "www/js",
        styles: "www/css",
        templates: "www/",
        fonts: "www/fonts",
        images: "www/images"
    }
};

// Static Server + watching scss/html files
gulp.task('serve', ['clean', 'styles', 'scripts', 'fonts', 'images', 'templates', 'watch'], function() {

    browserSync.init({
        server: "./www"
    });

});

// Compile sass into CSS & auto-inject into browsers
gulp.task('styles', function() {
    return gulp.src(paths.input.styles)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest(paths.output.styles))
        .pipe(browserSync.stream());
});

// Concatenate all your JS & auto-inject into browsers
gulp.task('scripts', function() {
    return gulp.src(paths.input.scripts)
        .pipe(concat('all.js'))
        .pipe(gulp.dest(paths.output.scripts))
        .pipe(browserSync.stream());
});

// Templates
gulp.task('templates', function() {
    return gulp.src(paths.input.templates)
        .pipe(gulp.dest(paths.output.templates))
});

// Images
gulp.task('images', function() {
    return gulp.src(paths.input.images)
        .pipe(gulp.dest(paths.output.images))
});

// Copying fonts
gulp.task('fonts', function() {
    return gulp.src(paths.input.fonts)
        .pipe(gulp.dest(paths.output.fonts))
});

// Clean up the root dir
gulp.task('clean', function() {
    return del(['www/**/*', '!www']);
});

// Add your watchers to detect changes and run the appropriate actions
gulp.task('watch', function() {

    gulp.watch("source/scss/*.scss", ['styles']);

    gulp.watch("source/js/**/*.js", ['scripts']);

    gulp.watch("source/**/*.html", ['templates']);

    gulp.watch("source/**/*.html").on('change', browserSync.reload);

});


gulp.task('default', ['serve']);