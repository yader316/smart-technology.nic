const gulp = require('gulp'),
      pug = require('gulp-pug'),
      pugPages = require('gulp-pug'),
      sass = require('gulp-sass'),
      uglify = require('gulp-uglify'),
      pump = require('pump'),
      imagemin = require('gulp-imagemin'),
      pngcrush = require('imagemin-pngcrush'),
      autoprefixer = require('gulp-autoprefixer');

//Tarea para compilar archivos index Pug a html
gulp.task('pug', () => 
  gulp.src('./dev/*.pug')
    .pipe(pug({
      pretty:true
    }))
  .pipe(gulp.dest('./'))
  // .pipe(notify("Tarea Pug pages terminado!")) //Mensaje gracias al plugin `gulp-notify`
);
//Tarea para compilar archivos index Pug a html
// gulp.task('pugPages', () => 
// gulp.src('./dev/pages/*.pug')
//   .pipe(pug({
//     pretty:true
//   }))
//   .pipe(gulp.dest('./public/pages'))
//   .pipe(notify("Tarea Pug index.html terminado!")) //Mensaje gracias al plugin `gulp-notify`
// );

//Tarea para compilar archivos sass a css
gulp.task('sass', () => {
 return gulp.src('./dev/sass/**/*.scss') //Ruta de la carpeta sass apuntando a los archivos `.scss`
  .pipe(sass().on('error', sass.logError)) //Compila los archivos `.scss` y muestra posibles errores
  .pipe(sass({
    outputStyle:'expanded',
    sourceComments: true
  }))
  .pipe(autoprefixer({
    versions: ['last 2 browsers']
  }))
  .pipe(gulp.dest('./public/css'))//Carpeta donde se guardaran los archivos `.css` compilado
  // .pipe(notify("Tarea sass terminada!")); //Mensaje gracias al plugin `gulp-notify`
});

//Tarea para comprimir archivos js
gulp.task('compress-js', (cb) => {
  pump([
   gulp.src('./dev/js/*.js'), //Ruta de la carpeta apuntando a los archivos `.js`
   uglify(), //Comprime los archivos `.js`
   gulp.dest('./public/js')//Carpeta donde se guardara el archivo `.js` comprimido
    ],
     cb
   );
 });

//Tarea para comprimir imágenes
 gulp.task('images', () => {
  gulp.src('./dev/img/**/*.{png,jpg,jpeg,gif,svg}')//Ruta a la carpeta images a puntando a las imágenes 
   .pipe(imagemin({
     progressive: true,
     svgoPlugins: [{removeViewBox: false}],
     use: [pngcrush()]
   }))
   .pipe(gulp.dest('./public/img')) //Carpeta donde se guardaran las imágenes comprimidas
  //  .pipe(notify("La tarea images a culminado!"));//Mensaje gracias a `gulp-notify`
 });

//Vuelve a ejecutar la tarea cuando se modifica algún archivo 
gulp.task('default', () => {
  gulp.watch('./dev/**/*.pug',gulp.series('pug'));
  // gulp.watch('./dev/pages/**/*.pug',gulp.series('pugPages'));
  gulp.watch('./dev/sass/**/*', gulp.series('sass'));
  gulp.watch('./dev/js/**/*',  gulp.series('compress-js'));
  gulp.watch('./dev/img/**/*', gulp.series('images'));
});


