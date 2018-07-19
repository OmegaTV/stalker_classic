var gulp = require('gulp'),
        sassGlob = require('gulp-sass-glob'),
        sass = require('gulp-sass'),
        uglify = require('gulp-uglify'),
        minifyCSS = require('gulp-clean-css'),
        autoprefixer = require('gulp-autoprefixer'),
        rename = require('gulp-rename'),
        version = require('gulp-version-number'),
        concat = require('gulp-concat'),
        chug = require('gulp-chug'),
        replace = require('gulp-regex-replace'),
        svg2png = require('gulp-svg2png');

var gulp_js_modules = [
    'src/config/config.js',
    'node_modules/webplayer.common.hls.tv/src/md5.js',
    'node_modules/webplayer.common.hls.tv/src/localization.js',
    'node_modules/webplayer.desktop.hls.tv/web/js/script.min.js',
    'node_modules/webplayer.common.hls.tv/src/factory.js',
    'node_modules/webplayer.common.hls.tv/src/classStalker.js',
    'node_modules/webplayer.common.hls.tv/src/auth.js',
    'node_modules/webplayer.common.hls.tv/src/config.js',
    'src/js/*.js'
];

var gulp_js_dest = "dest/js";
var gulp_css_dest = "dest/css";
var gulp_images_dest = "dest/images/";
var gulp_fonts_dest = "dest/fonts/";

gulp.task('build:dev', function () {
    gulp.src('node_modules/webplayer.desktop.hls.tv/gulpfile.js')
            .pipe(chug({
                tasks: ['webos']
            }, function () {
                gulp.start('build:dev:webos');
            }));
});

gulp.task('build:prod', function () {
    gulp.src('node_modules/webplayer.desktop.hls.tv/gulpfile.js')
            .pipe(chug({
                tasks: ['webos']
            }, function () {
                gulp.start('build:prod:webos');
            }));
});

gulp.task('build:dev:webos', function () {
    gulp.start(['sass', 'css', 'images', 'fonts', 'js-common', 'js-dev', 'version']);
});

gulp.task('build:prod:webos', function () {
    gulp.start(['sass', 'css', 'images', 'fonts', 'js-common', 'js', 'version']);
});

gulp.task('sass', function () {
    return gulp
            .src('src/sass/style.scss')
            .pipe(sassGlob())
            .pipe(sass())
            .pipe(autoprefixer('last 2 versions'))
            .pipe(gulp.dest(gulp_css_dest));
});

gulp.task('css', ['sass'], function () {
    return gulp
            .src([
                'node_modules/webplayer.desktop.hls.tv/web/css/style.css',
                gulp_css_dest + '/style.css'
            ])
            .pipe(concat('style.css'))
            .pipe(minifyCSS({compatibility: 'ie8'}))
            .pipe(gulp.dest(gulp_css_dest));
});

// ---------------------------------------------------------- common js handling
gulp.task('js-common', function () {
    return gulp.
            src(gulp_js_modules)
            .pipe(concat('script.js'))
            .pipe(gulp.dest(gulp_js_dest));
});

// ----------------------------------------- dev js handling (without uglifying)
gulp.task('js-dev', ['js-common'], function () {
    return gulp.
            src(gulp_js_dest + '/script.js')
            .pipe(rename('script.min.js'))
            .pipe(gulp.dest(gulp_js_dest));
});

// ------------------------------------------------------------ prod js handling
gulp.task('js', ['js-common'], function () {
    return gulp.
            src(gulp_js_dest + '/script.js')
            .pipe(rename('script.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest(gulp_js_dest));
});

// ------------------------------- replacing project-images to proper directory
gulp.task('images', function () {
    return gulp.
        src(['node_modules/webplayer.desktop.hls.tv/web/images/**/*'])
        .pipe(gulp.dest(gulp_images_dest));
});

gulp.task('svgToPng', function () {
    return gulp.
    src(['dest/images/**/*.svg'])
        .pipe(svg2png())
        .pipe(gulp.dest('olo'));
});


// ------------------------------- replacing fonts to proper directory
gulp.task('fonts', function () {
    return gulp.
    src(['node_modules/webplayer.desktop.hls.tv/web/fonts/*.*'])
        .pipe(gulp.dest(gulp_fonts_dest));
});

gulp.task('version', function () {
    return gulp.
            src(['node_modules/webplayer.desktop.hls.tv/web/*.html'])
            //.pipe(replace({regex:'svg', replace:'png'}))
            .pipe(version(versionConfig))
            .pipe(gulp.dest('dest'));
});

// ------------------------------------------------ js, css, image cache version

gulp.task('watcher', function () {
    gulp.watch(["src/sass/*.scss"], ['sass', 'css', 'version']);
    gulp.watch(gulp_js_modules, ['js-common', 'js-dev', 'version']);
});

var versionConfig = {
    'value': '%MDS%',
    'append': {
        'key': 'v',
        'to': ['css', 'js', 'image']
    }
};

gulp.task('default', ['build:dev']);
gulp.task('watch', ['watcher']);
