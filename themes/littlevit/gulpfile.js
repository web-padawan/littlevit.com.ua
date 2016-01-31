'use strict';

var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    cssGlobbing   = require('gulp-css-globbing'),
    spritesmith   = require('gulp.spritesmith'),
    postcss       = require('gulp-postcss'),
    autoprefixer  = require('autoprefixer'),
    browserSync   = require('browser-sync'),
    plumber       = require('gulp-plumber'),
    path          = require('path');

gulp.task('sprites', function() {
    var spriteData =
        gulp.src('images/front/sprites/*.*')
          .pipe(spritesmith({
              imgName: 'sprites.png',
              cssName: '_sprites.scss',
              cssFormat: 'scss',
              algorithm: 'binary-tree',
              cssTemplate: 'scss.template.mustache',
              cssVarMap: function(sprite) {
                sprite.name = 's-' + sprite.name
              }
          }));

    spriteData.img.pipe(gulp.dest('images/front'));
    spriteData.css.pipe(gulp.dest('sass/layouts/front/helpers/'));
});

gulp.task('styles', function() {
  return gulp.src('sass/**/*.scss')
    .pipe(cssGlobbing({
      extensions: ['.scss']
    }))
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: ['./sass', 'node_modules/susy/sass', 'node_modules/breakpoint-sass/stylesheets']
    }))
    .pipe(postcss([ autoprefixer({ browsers: ['IE >= 9'] }) ]))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('reload', function() {
  browserSync.reload();
});

gulp.task('browser-sync', ['styles'], function(){
  var files = [
    'css/**/*.css',
    'images/**/*',
    'templates/*.tpl.php',
    'layouts/**/.tpl.php'
  ];
  return browserSync.init(files, {
    proxy: "http://littlevit.com.ua.local",
    open: false,
    injectChanges: true
  });
});

gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['styles']);
  gulp.watch(['css/**/*.css', 'images/*', 'layouts/**/*.tpl.php'], ['reload']);
});

gulp.task('default', ['browser-sync', 'watch']);
