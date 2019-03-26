const gulp = require('gulp');
const path = require('path');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browsersync = require('browser-sync').create();
const del = require('del');

var paths = {
  app: 'dist/',
  css: 'dist/css/',
  images: 'dist/images/',
  scss: './*.scss',
  html: 'dist/*.html',
  srcImages: [
    'src/images/*.jpg',
    'src/images/*.png',
    'src/images/*.jpeg',
    'src/images/*.gif'
  ]
};

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: './dist/'
    },
    port: 3000
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Clean assets
function clean() {
  return del([paths.css, paths.images]);
}

// Watch files
function watchFiles(done) {
  gulp.watch(['./src', paths.html, './*.scss'], () => {
    gulp.src(paths.srcImages).pipe(gulp.dest(paths.images));

    return gulp
      .src(paths.scss)
      .pipe(plumber())
      .pipe(
        sass({
          includePaths: ['node_modules']
        }).on('error', sass.logError)
      )
      .pipe(gulp.dest(paths.css))
      .pipe(browserSyncReload(done));
  });
}

gulp.task('default', () => {
  gulp
    .src(paths.scss)
    .pipe(plumber())
    .pipe(
      sass({
        // includePaths: ['node_modules']
      }).on('error', sass.logError)
    )
    .pipe(gulp.dest(paths.css))
    .pipe(
      autoprefixer({
        browsers: ['last 3 versions'],
        cascade: false
      })
    )
    .pipe(gulp.dest(paths.css))
    .pipe(cleanCSS({ debug: true }))
    .pipe(gulp.dest(paths.css));

  return gulp.src(paths.srcImages).pipe(gulp.dest(paths.images));
});

const watch = gulp.parallel(watchFiles, browserSync);

exports.clean = clean;
exports.watch = watch;
