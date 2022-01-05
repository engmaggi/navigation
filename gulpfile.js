/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require('gulp');

const browserSyncCreator = require('browser-sync');

let browserSync;

gulp.task('init-browser', () => {
  if (browserSync) {
    return;
  }
  browserSync = browserSyncCreator.create();
  browserSync.init({
    port: 5151,
    proxy: 'https://onshape-corp-dev.cphostaccess.com',
    serveStatic: [
        {
        route: '/en/index.html',
        dir: './index.html',
        },
        {
            route: '/en/includes/header.html',
            dir: './global_assets/header.html',
        },
        {
            route: '/header_mobile.html',
            dir: './global_assets/header_mobile.html',
        },
        {
            route: '/global-assets/css/main.css',
            dir: './global_assets/main.css',
        },
        {
            route: '/global-assets/js/main.min.js',
            dir: './global_assets/main.min.js',
        },
        {
          route: '/global-assets/img/pic.png',
          dir: './global_assets/img/pic.png',
        },
        {
          route: '/global-assets/img/Video.png',
          dir: './global_assets/img/Video.png',
        },
        {
          route: '/global-assets/img/User-Folder.png',
          dir: './global_assets/img/User-Folder.png',
        },
        {
          route: '/global-assets/img/Ticket.png',
          dir: './global_assets/img/Ticket.png',
        },
        {
          route: '/global-assets/img/Open-Book.png',
          dir: './global_assets/img/Open-Book.png',
        },
        {
          route: '/global-assets/img/Maintenance.png',
          dir: './global_assets/img/Maintenance.png',
        },
        {
          route: '/global-assets/img/Light-On.png',
          dir: './global_assets/img/Light-On.png',
        },
        {
          route: '/global-assets/img/Screen-Shot-2021-12-03-at-12.28-1.png',
          dir: './global_assets/img/Screen-Shot-2021-12-03-at-12.28-1.png',
        },
        {
          route: '/global_assets/img/Education.png',
          dir: './global_assets/img/Education.png',
        },
    ],
  });
});

gulp.task('browser-refresh', (done) => {
  browserSync.reload();
  done();
});


gulp.task('watch-refresh', () => {
  gulp.watch(['./global_assets/*.html', './global_assets/*.js', './global_assets/*.css'], gulp.series(['browser-refresh']));
});

gulp.task('default', gulp.parallel(['watch-refresh', 'init-browser']));
