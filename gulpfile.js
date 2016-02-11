var gulp = require('gulp');  
var mainBowerFiles = require('main-bower-files');
var uglify = require('gulp-uglify');
var mincss = require('gulp-cssmin');
var concat = require('gulp-concat');
var ignore = require('gulp-ignore');
var rimraf = require('rimraf');

var lib = 'lib'; 
var content = 'content';

/* LIMPIO LA CARPETA DE DESTINO */
gulp.task('clean',function(done){
	rimraf(lib, done);
});
/* MINIFICO TODOS LOS PAQUETES */
gulp.task('minifyJs', ['clean'], function () {  
    return gulp.src(mainBowerFiles())
        .pipe(ignore.exclude([ "**/*.css" ]))
      .pipe(uglify())
      .pipe(gulp.dest(lib+'/js'));
});

/* MINIFICO JS PARTICULARES CREADOS POR MI */
gulp.task('minifyJsContent', ['minifyJs'], function () {  
    return gulp.src(content+'/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest(lib+'/js'));
});

/* MINIFICO CSS PARTICULARES CREADOS POR MI */
gulp.task('minifyCssContent', ['minifyJsContent'], function () {  
    return gulp.src([content+'/css/site.css',content+'/css/TimeCircles.css'])
        .pipe(concat('front.css'))
      .pipe(mincss())
      .pipe(gulp.dest(lib+'/css/bundle/'));
});

/* BUNDLE PARA FRONT */
gulp.task('bundleFront', ['minifyCssContent'], function () {  
    return gulp.src([lib+'/js/layzr.js',lib+'/js/material.min.js',lib+'/js/layout.js',lib+'/js/TimeCircles.js'])
      .pipe(concat('front.js'))
      .pipe(gulp.dest(lib+'/js/bundle/'));
});

gulp.task('default', ['bundleFront'], function () {  
    return;
});