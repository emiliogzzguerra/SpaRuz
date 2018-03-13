var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

var config = {
    materialDesignIconsDir: './node_modules/material-design-icons',
    alomDir: './dependencies/alom',
    bootstrapDir: './node_modules/bootstrap',
    assetsDir: './assets',
};

//Setup for customization
gulp.task('sass', function() {
    return gulp.src([config.assetsDir + '/scss/*.scss'] )
    .pipe(sass({
        includePaths: [config.bootstrapDir + '/scss'],
    }))
    .pipe(gulp.dest(config.assetsDir + '/css'));
});

// Move css files to our directory
gulp.task('fonts', function() {
    return gulp.src(config.materialDesignIconsDir + '/iconfont/MaterialIcons-Regular*')
        .pipe(gulp.dest(config.assetsDir + '/fonts/MaterialDesignIcons'))
        .pipe(browserSync.stream());
});

// Move the javascript files into our /src/js folder
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js'])
        .pipe(gulp.dest("assets/js"))
        .pipe(browserSync.stream());
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
})

// Static Server + watching scss/html files
gulp.task('serve', ['browserSync','sass'], function() {
    gulp.watch('./assets/scss/*.scss', ['sass']);
    gulp.watch('./assets/scss/*.scss', browserSync.reload);

    // Reloads the browser whenever HTML or JS files change
    gulp.watch('./*.html', browserSync.reload);
    gulp.watch('./assets/js/**/*.js', browserSync.reload);

});

gulp.task('default', ['sass','js','fonts','serve']);
