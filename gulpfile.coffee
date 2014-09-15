gulp            = require 'gulp'
clean           = require 'gulp-clean'
deploy          = require 'gulp-gh-pages'

config =
  paths:
    dist: '/build'

ghpages =
  push: true

gulp.task 'clean', ->
  gulp.src([BUILD_DIR], { read: false })
    .pipe clean()

gulp.task 'gh', () ->
  gulp.src config.paths.dist
    .pipe deploy(ghpages)
