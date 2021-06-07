if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"57dbb8f69fa581f79edaee5f876e3d2b","url":"404.html"},{"revision":"460e2171184a144d1b778416a9389f37","url":"c3dbf9379de3f7b9fe4a.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"57dbb8f69fa581f79edaee5f876e3d2b","url":"index.html"},{"revision":"ee193d41615fb8cf1732f6191cb78d96","url":"static/css/22.f5f9d973.chunk.css"},{"revision":"a08e0e1487a14e7708ce72c85b416db4","url":"static/css/23.a4ed9fa0.chunk.css"},{"revision":"b4acc576db35f4c578621e6c7e7ef982","url":"static/css/5.1432c553.chunk.css"},{"revision":"93c5ab856ecdfead17fbfde50ae8cc13","url":"static/js/0.bd3d2871.chunk.js"},{"revision":"8d1d465956655afe9a775445b4396797","url":"static/js/1.690a81b0.chunk.js"},{"revision":"3e1c06e336858fee5eb81fe45271d4d1","url":"static/js/10.481ae2d4.chunk.js"},{"revision":"14f9fc8878545ec671b12c3544dca658","url":"static/js/13.e7b8bd71.chunk.js"},{"revision":"06c04ca15c89d7787e812cbb22014a63","url":"static/js/14.8ddea0d4.chunk.js"},{"revision":"62aeda814408b3cd9ba3bf8c7d2d1ba0","url":"static/js/15.ef8c99d4.chunk.js"},{"revision":"82ab6feb448d73405e42faad0713fb78","url":"static/js/16.13b2ee05.chunk.js"},{"revision":"98a85e76b7841a347ed655ec6deb09eb","url":"static/js/17.73a8dad1.chunk.js"},{"revision":"6c3d9f32965f0b691ba1b24f8fddb99c","url":"static/js/18.5354ea1f.chunk.js"},{"revision":"55cd3f21be50581df6537f2f339d7055","url":"static/js/19.79c2ade7.chunk.js"},{"revision":"513107c7b071e188f47af0d07e4d8704","url":"static/js/2.a66bf5a9.chunk.js"},{"revision":"82ff1459d0a71e1e8478daf965231398","url":"static/js/20.8ae72d3f.chunk.js"},{"revision":"7e4b7fc1da3ae4b74a5023050a96afc8","url":"static/js/21.abda16c5.chunk.js"},{"revision":"7561b706b2bd60c4015987dbea0a0cd6","url":"static/js/22.340f52db.chunk.js"},{"revision":"ed48a0410b8e2893d08a812926713c85","url":"static/js/23.1faaf5b0.chunk.js"},{"revision":"4d53694416772051836a8b7ee592a272","url":"static/js/24.63ad727f.chunk.js"},{"revision":"1be4ccc655192a4190203ac13f24c2c8","url":"static/js/25.fb84809f.chunk.js"},{"revision":"4ed45ee2898e308fbef9eb4882a5e998","url":"static/js/26.7a73f0c4.chunk.js"},{"revision":"14e895394cc42ec7bdfc08cf60a19210","url":"static/js/27.1b77f6a7.chunk.js"},{"revision":"5dcd366bc302d93e7258e279e330e340","url":"static/js/28.62c0ca08.chunk.js"},{"revision":"9cd1f7af8c5ce246fa22a6a81e0febfb","url":"static/js/29.c184c73c.chunk.js"},{"revision":"0768ac07ce9b937c2432151dee3dc162","url":"static/js/3.3b17ff7a.chunk.js"},{"revision":"03ae9040edb42e9f4e046e71c9693fe5","url":"static/js/30.5aec324c.chunk.js"},{"revision":"f716c8ff85efe9bbd8d5ea5f3c763f4d","url":"static/js/31.9d770852.chunk.js"},{"revision":"75f6378a6cbaf3e50c33c9115d71a520","url":"static/js/32.50a0763b.chunk.js"},{"revision":"c4ffdcbd2df67c735d5e63f1198d7952","url":"static/js/33.f4c8aa41.chunk.js"},{"revision":"06e2b0db84dbccbf058c0c0faaeb2938","url":"static/js/34.f86ef7dc.chunk.js"},{"revision":"80451ed6607e392b6c6a6d434469346e","url":"static/js/35.fc40cfd4.chunk.js"},{"revision":"463672d595466d5e590fc33274b9f26c","url":"static/js/36.21973f7e.chunk.js"},{"revision":"b218afbe71a1a0ec49f45487b20b2a95","url":"static/js/37.5e8b76f1.chunk.js"},{"revision":"08b814ee2ce1659821bce56a9635b3ed","url":"static/js/38.992d119e.chunk.js"},{"revision":"d246c13cb87852bf8d8d3146bdebf8b7","url":"static/js/39.80732dca.chunk.js"},{"revision":"bb08b83c80c404d16257fc90b4127a7d","url":"static/js/4.dbcf25f5.chunk.js"},{"revision":"d69b592057eb41cd8904482017d72002","url":"static/js/40.2a1ffa94.chunk.js"},{"revision":"98c5777c38976b94c8960e3f98eff416","url":"static/js/41.060de6b0.chunk.js"},{"revision":"5de4309e3caacdcf5724a79de77ffdd0","url":"static/js/42.8e130625.chunk.js"},{"revision":"7b142526f798f273369fdeb30688bdce","url":"static/js/43.48405c6e.chunk.js"},{"revision":"0e4e1df6a5d224fecd4db00cc07d77f2","url":"static/js/44.4d33c6a7.chunk.js"},{"revision":"31404673205c009a80c2eb5d888ab733","url":"static/js/45.e2afc39d.chunk.js"},{"revision":"fda2efcbfcd77b2e1b0a0ed6f088c265","url":"static/js/46.4c1facbe.chunk.js"},{"revision":"1053b1616e2278bfae378d1c902f111d","url":"static/js/5.0b2957dc.chunk.js"},{"revision":"9cd12dbc75d6e9f30a70f5d1e207c963","url":"static/js/6.4ac82e24.chunk.js"},{"revision":"6912c01f3c1ede99cb23191420cb7e0e","url":"static/js/7.f9ed9b02.chunk.js"},{"revision":"d7533edd265f70d21a30ed3b14ab6ebc","url":"static/js/8.1ce9b621.chunk.js"},{"revision":"6b84b53b7a9c9397d655060cf872ff41","url":"static/js/9.99fe3708.chunk.js"},{"revision":"30f684ca6f0714bce2b8f73159752fd5","url":"static/js/main.6d78f83c.chunk.js"},{"revision":"d1c1b4be0c65848923db93100e7f7e28","url":"static/js/runtime-main.f5a0f285.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
