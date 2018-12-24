const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('serve', function(cb) {

    browserSync.init({
        server: "."
        // or
        // proxy: 'yourserver.dev'
    });

    gulp.watch("style/*.css").on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("src/app/*.html").on('change', browserSync.reload);
    gulp.watch("src/app/*.js").on('change', browserSync.reload);

    gulp.watch("fcc-product-landing/style/*.css").on('change', browserSync.reload);
    gulp.watch("fcc-product-landing/*.html").on('change', browserSync.reload);

    gulp.watch("fcc-technical-documentation/*.css").on('change', browserSync.reload);
    gulp.watch("fcc-technical-documentation/*.html").on('change', browserSync.reload);
	
    gulp.watch("datastructures/*.css").on('change', browserSync.reload);
    gulp.watch("datastructures/*.html").on('change', browserSync.reload);

    gulp.watch("algorithms/*.css").on('change', browserSync.reload);
    gulp.watch("algorithms/*.html").on('change', browserSync.reload);
	cb();
});

gulp.task('default',function(cb){
	cb();
});

gulp.task('default', gulp.series('serve'));
