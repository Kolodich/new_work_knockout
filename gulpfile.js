const gulp = require('gulp');
const gulpEsbuild = require('gulp-esbuild');
const browserSync = require('browser-sync');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const debounce = require('lodash/debounce');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');

function copyPage() {
	return gulp.src('./src/index.html')
		.pipe(gulp.dest('./dist'));
}

function buildStyle() {
	return gulp.src('./src/style/index.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss('./'))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./dist/style'))
}

function buildScript() {
	return gulp.src('./src/script/index.js')
		.pipe(gulpEsbuild({
			outfile: 'index.js',
			bundle: true,
			sourcemap: true,
		}))
		.pipe(gulp.dest('./dist/script'))
}

function copyImages() {
	return gulp.src('./src/images/**/*')
		.pipe(gulp.dest('./dist/images'))
}

function watch(done) {
	gulp.watch('./src/index.html', copyPage);
	gulp.watch('./src/style/**/*.scss', buildStyle);
	gulp.watch('./src/script/**/*.js', buildScript);
	gulp.watch('./src/iamges/*', copyImages);
	const debouncedReload = debounce(browserSync.reload, 300);
	gulp.watch(`dist/**/*.{html,css,js}`).on('change', debouncedReload);
	done();
}

function runServer(done) {
	browserSync.init({
		server: {
			baseDir: 'dist',
		}
	});
	done();
}

function clearDist() {
	return del('dist', { force: true });
}

exports.build = gulp.series(
	clearDist,
	gulp.parallel(copyPage, buildStyle, buildScript, copyImages),
);

exports.serve = gulp.series(
	clearDist,
	exports.build,
	gulp.parallel(watch, runServer)
);
