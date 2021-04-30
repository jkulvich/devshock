import ts from 'gulp-typescript'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import eslint from 'gulp-eslint'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import minify from 'gulp-minify'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import serve from 'gulp-serve'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ip from 'ip'
import del from 'del'
import gulp from 'gulp'

const tsProject = ts.createProject('tsconfig.json')
const dirOut = './dist'
const dirSrc = './src/**/*.ts'
const dirPublic = './public/*'
const serveHostname = ip.address()
const servePort = 8080

gulp.task('compile-ts', () =>
    gulp
        .src(dirSrc)
        .pipe(tsProject())
        .pipe(minify({
            ext: {
                src: '.js',
                min: '.min.js'
            }
        }))
        .pipe(gulp.dest(dirOut))
)

gulp.task('move-public', () =>
    gulp
        .src(dirPublic)
        .pipe(gulp.dest(dirOut))
)

gulp.task('clean', () =>
    del([dirOut])
)

gulp.task('lint', () =>
    gulp
        .src(dirSrc)
        .pipe(eslint())
        .pipe(eslint.format())

)

gulp.task('build', gulp
    .series(
        gulp.task('clean'),
        gulp.parallel(
            gulp.task('compile-ts'),
            gulp.task('move-public')
        )
    )
)

gulp.task('serve', gulp
    .series(
        gulp.task('build'),
        serve({
            root: [dirOut],
            port: servePort,
            hostname: serveHostname
        })
    )
)
