// get the dependencies
var gulp         = require('gulp');
var connect     = require('gulp-connect'); 
var jetpack      = require('fs-jetpack'); 
var usemin       = require('gulp-usemin'); 
var uglify       = require('gulp-uglify');

var projectDir = jetpack; 
var srcDir     = projectDir.cwd('./app'); 
var destDir    = projectDir.cwd('./build');

gulp.task('clean', function (callback) { 
    return destDir.dirAsync('.', { empty: true }); 
});

gulp.task('copy', ['clean'], function () { 
    return projectDir.copyAsync('app', destDir.path(), { 
        overwrite: true, matching: [ 
            '*.html', 
            '*.css', 
       ] 
    }); 
});

gulp.task('build', ['copy'], function () { 
    return gulp.src('./app/index.html') 
        .pipe(usemin({ 
            js: [uglify()] 
        })) 
        .pipe(gulp.dest('build/')); 
}); 

gulp.task('webserver', function() {
    connect.server({
        livereload: true,
        port: 8088,
        root: './'
    });
});
 
gulp.task('default', ['webserver']);
