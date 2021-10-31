const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const del = require("del");

var paths = {
  app: "dist/",
  css: "dist/css/",
  images: "dist/images/",
};

// Clean assets
function clean() {
  return del(["./dist"]);
}

// Copy HTML
function copyIndex() {
  return gulp.src(["./public/*.html"]).pipe(gulp.dest(paths.app));
}

function copyImages() {
  return gulp
    .src("public/images/**/*.{gif,jpg,png,svg}")
    .pipe(gulp.dest(paths.images));
}

gulp.task("default", () => {
  copyImages();

  return gulp
    .src(["./public/*.scss"])
    .pipe(plumber())
    .pipe(
      sass({
        includePaths: ["node_modules"],
      }).on("error", sass.logError)
    )
    .pipe(gulp.dest(paths.css))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest(paths.css))
    .pipe(cleanCSS({ debug: true }))
    .pipe(gulp.dest(paths.css))
    .pipe(copyIndex());
});

exports.clean = clean;
exports.copyIndex = copyIndex;
exports.copyImages = copyImages;
