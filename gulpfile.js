const sass = require('gulp-sass')(require('sass'))
const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')

function compileSass() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputstyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}


exports.default = () => {
    gulp.watch('./src/styles/*.scss', {ignoreInitia: false}, gulp.series(compileSass))
}