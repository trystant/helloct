import gulp from 'gulp';
import babel from 'gulp-babel';
import shell from 'gulp-shell';
import run from 'run-sequence';


gulp.task('build', shell.task([
  'babel src -d dist'
]));

gulp.task('start', shell.task([
  'node dist/index.js'
]))

gulp.task('default', () => {
  run('build', 'start');
})
