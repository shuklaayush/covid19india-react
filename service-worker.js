if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"9fbcaa08d6c77b0a5c4e3a839815b64f","url":"404.html"},{"revision":"9ec9216728dbf5a2c2a2b69256419662","url":"8ae050b0e0e914e9c1ae.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"9fbcaa08d6c77b0a5c4e3a839815b64f","url":"index.html"},{"revision":"23bb7e9a6554c054412e52e1c298e458","url":"static/css/23.f5f9d973.chunk.css"},{"revision":"bc2800cfb4d0415f77a5876cf2d4e882","url":"static/css/24.f19422e5.chunk.css"},{"revision":"1f0d9eb00969b4b1bf75af316734e22f","url":"static/js/0.3ed53e4e.chunk.js"},{"revision":"9d516827bff85afd6e36e964eb455cc3","url":"static/js/1.0b15f6a4.chunk.js"},{"revision":"e9240a489dc05336b5913827c85b8748","url":"static/js/10.675adb7c.chunk.js"},{"revision":"dd336d2b10c1d77f25905fe838457e32","url":"static/js/11.7636d3db.chunk.js"},{"revision":"29ee3936777405309bde8575f7516de0","url":"static/js/14.7d30ef6e.chunk.js"},{"revision":"08bf67fa9f18414b3814c91c4fcaf45d","url":"static/js/15.8056c555.chunk.js"},{"revision":"3fed11c03d1708e881c46a6bac560bb3","url":"static/js/16.ad18c64f.chunk.js"},{"revision":"727ff64eca8ffb40281baf7b2a9ad359","url":"static/js/17.d77b2bba.chunk.js"},{"revision":"4beea09471123d9e61e23147c648a54e","url":"static/js/18.f663460d.chunk.js"},{"revision":"0cee0a6bdc9668dcc47fe792c5bf69ba","url":"static/js/19.3c3dbfa0.chunk.js"},{"revision":"4f0947f8fa2ed87478cb9f1174b68250","url":"static/js/2.d251dd06.chunk.js"},{"revision":"8af649d85af4204be7e946dfe40e4766","url":"static/js/20.7e937b21.chunk.js"},{"revision":"10403f05731e348af926969985972de0","url":"static/js/21.3c3f5737.chunk.js"},{"revision":"bc6d4554fac557ddfef2ec984ea22b1b","url":"static/js/22.b1984cff.chunk.js"},{"revision":"09aaba601016d8e2b2944b43ff9771e1","url":"static/js/23.915c1e17.chunk.js"},{"revision":"844ebf7bc912ef7bb3175ef3911687cd","url":"static/js/24.37ec92be.chunk.js"},{"revision":"a00c9ba2c2f7a27810f6f722a73a3dbb","url":"static/js/25.95d4b57e.chunk.js"},{"revision":"6472b65a8d58afc43aea7c2cb4163b07","url":"static/js/26.5e875b3e.chunk.js"},{"revision":"8cfe298613aafefc9b94026a16aec6eb","url":"static/js/27.cdf87f31.chunk.js"},{"revision":"54b8943ddb2ebe111526e39cba34bf2f","url":"static/js/28.45286baf.chunk.js"},{"revision":"8deb7bd6945dafb71ed883de7732880f","url":"static/js/29.0de822ae.chunk.js"},{"revision":"7d9e5d4e7adc3478c19a9d8b6ac7bc00","url":"static/js/3.73d4f7aa.chunk.js"},{"revision":"6c0b275293a1f8e573c1b39ff69f633c","url":"static/js/30.83c98a2c.chunk.js"},{"revision":"d414c9f8d3dbb234439d6601d057ea41","url":"static/js/31.a32f7d91.chunk.js"},{"revision":"5fcdbf5898b2c9194f073905f6f79340","url":"static/js/32.3dc9c370.chunk.js"},{"revision":"ae3b979d53220341e5c65c56ec5b199d","url":"static/js/33.5c75f106.chunk.js"},{"revision":"a87cdac63f6ea80a99b10104cd31febe","url":"static/js/34.5ab2663b.chunk.js"},{"revision":"ad3aef87f903dfcbb44c7033674a3b12","url":"static/js/35.eb3c3f54.chunk.js"},{"revision":"6722fd146ea4ec85111a5bf0374b8796","url":"static/js/36.48727c52.chunk.js"},{"revision":"1ec1f0a9c756c6f6baa38b7375e6b30f","url":"static/js/37.70ef80d0.chunk.js"},{"revision":"92ec8a208d820e89cf2f5ff0469bcdd0","url":"static/js/38.87f40128.chunk.js"},{"revision":"03c9cc6b72bf02e58f744bf28414d742","url":"static/js/39.e22734b7.chunk.js"},{"revision":"edf709429178f237590330e54e066c3a","url":"static/js/4.e8a2d69a.chunk.js"},{"revision":"ba51cb70c82d638a8e2ccf5929cb56c3","url":"static/js/40.4d978f8b.chunk.js"},{"revision":"866e110a39ab961609b981afc971edc5","url":"static/js/41.4054e078.chunk.js"},{"revision":"2b7aed4e8d96e8f9c7f2b68647f48727","url":"static/js/42.bb5ed995.chunk.js"},{"revision":"b4deed4017f16f250c3e4b6a6941ee4e","url":"static/js/5.9037e3d3.chunk.js"},{"revision":"dded0ce37702bd2c9a841c27d2a5dbfb","url":"static/js/6.f2bb8004.chunk.js"},{"revision":"432fbd108de148bd3b612dee3a390698","url":"static/js/7.58af9924.chunk.js"},{"revision":"56f8151f66e5e50dde79383e5e659345","url":"static/js/8.4fe81e4d.chunk.js"},{"revision":"758274617bbfb80950e42553f638a691","url":"static/js/9.cc0452e7.chunk.js"},{"revision":"69fabd3f3657344abfdbae467723c28b","url":"static/js/main.1331a4b2.chunk.js"},{"revision":"96a4194d5d9ccfd23f0360ab32027338","url":"static/js/runtime-main.66292de8.js"}]);

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
