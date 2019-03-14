const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass');

const buildSass = () => {
    return (
        src(['./src/scss/*.scss'])
        .pipe(sass())
        .pipe(dest('./src/css/'))
    );
};

const watchSass = () => {
    watch('./src/scss/*.scss', buildSass);
};

exports.default = series(buildSass, watchSass);