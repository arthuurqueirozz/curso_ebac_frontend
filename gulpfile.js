const sass = require('gulp-sass')(require('sass'))
const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate')


function compileSass() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputstyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}

function jsCompressor() {
    return gulp.src('./src/scripts/*js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'))
}

exports.default = () => {
    gulp.watch('./src/styles/*.scss', {ignoreInitia: false}, gulp.series(compileSass))
    gulp.watch('./src/scripts/*js', {ignoreInitia: false}, gulp.series(jsCompressor))
}