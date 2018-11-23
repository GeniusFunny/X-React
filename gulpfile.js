const gulpfile = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

gulpfile.task("default", () => {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulpfile.dest('dist'))
})
