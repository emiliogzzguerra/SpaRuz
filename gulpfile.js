var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

var config = {
    bootstrapDir: './node_modules/bootstrap',
    assetsDir: './assets',
};

//Setup for customization
gulp.task('sass', function() {
    return gulp.src(config.assetsDir + '/scss/landing-page.scss')
    .pipe(sass({
        includePaths: [config.bootstrapDir + '/scss'],
    }))
    .pipe(gulp.dest(config.assetsDir + '/css'));
});

// Move the javascript files into our /src/js folder
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js'])
        .pipe(gulp.dest("assets/js"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"  
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'assets/scss/*.scss'], ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default', ['sass','js', 'serve']);