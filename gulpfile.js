const path = require("path");

const { series, src, dest, parallel, watch } = require("gulp");
const webpack = require("webpack");
const del = require("del");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const cleanCSS = require("gulp-clean-css");
const browserSync = require("browser-sync").create();
// Importação básica do gulp-imagemin
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp").default;
const rename = require("gulp-rename");
// Removido gulp-sharp devido a problemas de compilação

const webpackConfig = require("./webpack.config.js");

const paths = {
  scripts: {
    src: "src/ts/index.tsx",
    watch: "src/ts/**/*.{ts,tsx}",
  },
  styles: {
    src: "src/scss/main.scss",
    watch: "src/**/*.scss",
  },
  img: {
    src: "src/img/**/*",
  },
  html: {
    src: "src/index.html",
  },
  dest: "dist",
  temp: ".tmp",
};

function clean() {
  return del([paths.dest, paths.temp]);
}

//Serve a pasta dist para sincronizar o navegador com o servidor
function server() {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });
}

function styles() {
  return src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass({
      quietDeps: true,
      silenceDeprecations: ['legacy-js-api']
    }).on('error', sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cleanCSS({
      level: 2,
      compatibility: 'ie8'
    }))
    .pipe(sourcemaps.write())
    .pipe(dest(paths.dest))
    .pipe(browserSync.stream());
}

function scripts() {
  return new Promise((resolve) =>
    webpack(webpackConfig(paths), (err, stats) => {
      if (err) console.log("Webpack", err);

      console.log(
        stats.toString({
          all: false,
          modules: true,
          maxModules: 0,
          errors: true,
          warnings: true,
          moduleTrace: true,
          errorDetails: true,
          colors: true,
          chunks: true,
        })
      );

      resolve();
    })
  );
}

function html() {
  return src(paths.html.src).pipe(browserSync.stream()).pipe(dest(paths.dest));
}

// Configurações otimizadas para e-commerce
const ecommerceConfig = {
  jpg: { quality: 85, progressive: true }, // Produtos precisam de qualidade
  png: { optimizationLevel: 7 }, // Logos e ícones
  webp: { quality: 80, lossless: false } // Balance qualidade/tamanho
};

function img() {
  return src(paths.img.src)
    .pipe(imagemin([
      // Otimização para PNG (nível 7 para e-commerce)
      imagemin.optipng({ optimizationLevel: 7 }),
      // Otimização para JPG (qualidade 85% para produtos)
      imagemin.mozjpeg({ quality: 85, progressive: true }),
      // Otimização para GIF
      imagemin.gifsicle({ interlaced: true }),
      // Otimização para SVG
      imagemin.svgo({
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'cleanupIDs', active: false }
        ]
      })
    ]))
    .pipe(dest(paths.dest + "/img"));
}

// Função para gerar versões WebP (CRÍTICO para e-commerce)
function imgWebP() {
  return src(paths.img.src)
    .pipe(imagemin([
      imagemin.optipng({ optimizationLevel: 7 }),
      imagemin.mozjpeg({ quality: 85, progressive: true }),
      imagemin.gifsicle({ interlaced: true }),
      imagemin.svgo({
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'cleanupIDs', active: false }
        ]
      })
    ]))
    .pipe(webp({ quality: 80 }))
    .pipe(rename(function (path) {
      // Mantém o nome original mas com extensão .webp
      path.extname = '.webp';
    }))
    .pipe(dest(paths.dest + "/img"));
}

// Função para gerar versões WebP de alta qualidade (IDEAL para e-commerce)
function imgWebPHighQuality() {
  return src(paths.img.src)
    .pipe(imagemin([
      imagemin.optipng({ optimizationLevel: 7 }),
      imagemin.mozjpeg({ quality: 90, progressive: true }), // Qualidade alta para produtos
      imagemin.gifsicle({ interlaced: true }),
      imagemin.svgo({
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'cleanupIDs', active: false }
        ]
      })
    ]))
    .pipe(webp({ quality: 85 })) // Qualidade alta para WebP
    .pipe(rename(function (path) {
      // Mantém o nome original mas com extensão .webp
      path.extname = '.webp';
    }))
    .pipe(dest(paths.dest + "/img"));
}

// Build de desenvolvimento (WebP otimizado)
const build = series(clean, parallel(styles, scripts, html, imgWebP));

// Build de produção (WebP de alta qualidade)
const buildProd = series(clean, parallel(styles, scripts, html, imgWebPHighQuality));
const dev = () => {
  watch(paths.scripts.watch, { ignoreInitial: false }, scripts).on(
    "change",
    browserSync.reload
  );
  watch(paths.styles.watch, { ignoreInitial: false }, styles);
  watch(paths.img.src, { ignoreInitial: false }, imgWebP); // Apenas WebP em dev
  watch(paths.html.src, { ignoreInitial: false }, html).on(
    "change",
    browserSync.reload
  );
  server();
};

exports.build = build; // Build de desenvolvimento
exports.buildProd = buildProd; // Build de produção
exports.server = server;
exports.styles = styles;
exports.scripts = scripts;
exports.img = img;
exports.imgWebP = imgWebP;
exports.imgWebPHighQuality = imgWebPHighQuality;
exports.default = dev;
