const fs = require('fs')
const path = require('path')

const runSequence = require('run-sequence')
const del = require('del')

const gulp = require('gulp')
const sass = require('gulp-sass')
const livereload = require('gulp-livereload')

const theo = require('theo')


////////////////////////////////////////////////////////////////////
// Paths
////////////////////////////////////////////////////////////////////

const paths = {
  designTokens: './design-tokens',
  generated: './.generated',
  output: './.www/'
}

////////////////////////////////////////////////////////////////////
// Tasks - Clean    
////////////////////////////////////////////////////////////////////

gulp.task('clean', () => del([paths.generated, paths.output]))

////////////////////////////////////////////////////////////////////
// Tasks - Design Tokens > DEFAULT
////////////////////////////////////////////////////////////////////

gulp.task('design-tokens', ['styleguide'], () =>
  gulp.src('./design-tokens/app.json')
    .pipe(theo.plugins.transform('web'))
    .pipe(theo.plugins.format('scss'))
    .pipe(gulp.dest(paths.generated))
)

gulp.task('styleguide', () =>
  gulp.src('./design-tokens/app.json')
    .pipe(theo.plugins.transform('web'))
    .pipe(theo.plugins.format('html'))
    .pipe(gulp.dest(paths.generated))
    .pipe(livereload())
)

////////////////////////////////////////////////////////////////////
// Tasks - Site >> DEFAULT
////////////////////////////////////////////////////////////////////

gulp.task('styles', ['design-tokens'], () =>
  gulp.src('src/styles/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(paths.output))
    .pipe(livereload())
)

gulp.task('png', ['design-tokens'], () =>
  gulp.src('src/imgs/../*.png')
    .pipe(sass())
    .pipe(gulp.dest(paths.output))
    .pipe(livereload())
)

gulp.task('jpg', ['design-tokens'], () =>
  gulp.src('src/imgs/../*.png')
    .pipe(sass())
    .pipe(gulp.dest(paths.output))
    .pipe(livereload())
)

// Pubicação de todas os HTMLs da pasta SRC
gulp.task('html', ['design-tokens'], () =>
  gulp.src('src/*.html') 
    .pipe(gulp.dest(paths.output))
    .pipe(livereload())
)



////////////////////////////////////////////////////////////////////
// Tasks - Watch
////////////////////////////////////////////////////////////////////

gulp.task('watch', () => {
  livereload.listen({
    port: 35729
  })
  gulp.watch('design-tokens/base/**/*.json', ['styles'])
  gulp.watch('src/**/*.scss', ['styles'])
  gulp.watch('src/**/*.html', ['html'])
  gulp.watch('src/**/*.png', ['png'])
  gulp.watch('src/**/*.jpg', ['jpg'])
})

gulp.task('dev', ['default'], () => {
  require('./server')
  gulp.start('watch')
})

gulp.task('default', (done) =>
  runSequence('clean', ['styleguide', 'styles', 'html', 'jpg', 'png'], done)
)