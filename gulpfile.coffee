gulp            = require 'gulp'
clean           = require 'gulp-clean'
deploy          = require 'gulp-gh-pages'
mm              = require 'gulp-middleman'

config =
  paths:
    dist: 'build/**/*'
  mm:
    useBundler: true

ghpages =
  push: true

gulp.task 'clean', ->
  gulp.src([BUILD_DIR], { read: false })
    .pipe clean()

gulp.task 'build', ->
  mm.build(config.mm)

gulp.task 'gh', ['build'], () ->
  gulp.src config.paths.dist
    .pipe deploy(ghpages)

gulp.task 'default', ->
  mm.server(config.mm)
