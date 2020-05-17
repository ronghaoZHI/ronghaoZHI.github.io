/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bcf0c3210340fdfabe6e4119570284d6"
  },
  {
    "url": "about/index.html",
    "revision": "bf0923e25857847eaf946ec55aefda2e"
  },
  {
    "url": "article/2018-11.html",
    "revision": "8aa4c2059ac0dfecb45a6c5e22debe26"
  },
  {
    "url": "article/2018-12-04.html",
    "revision": "054e89d2a7f454414baf91a883b59f7e"
  },
  {
    "url": "article/2018-12-12.html",
    "revision": "6d138c393a127f971693bc341e4d2ec3"
  },
  {
    "url": "article/2018-12.html",
    "revision": "43c87947fd7af684d4ba0e66a5c1a30f"
  },
  {
    "url": "article/DOME.html",
    "revision": "8f6883f60e4b17b36d5255f0f74500d5"
  },
  {
    "url": "article/index.html",
    "revision": "b7c2107bbc5dea83a9835c64606e2925"
  },
  {
    "url": "assets/css/0.styles.2ce76bed.css",
    "revision": "1cb9ce6fd772d72c74009db3dffbf1ae"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.92dee6d6.js",
    "revision": "8bd3d1b3c8863b6b8714e873f4c40103"
  },
  {
    "url": "assets/js/11.a3398939.js",
    "revision": "d83fc2017adb71d6c696a41b4da0027d"
  },
  {
    "url": "assets/js/12.6bda2001.js",
    "revision": "8796d4e3346a01268e7d5df1f38c7346"
  },
  {
    "url": "assets/js/13.66a60d8f.js",
    "revision": "0c7f2dd26bac0c70625d5692fb462294"
  },
  {
    "url": "assets/js/14.8b4b29a7.js",
    "revision": "589e10ace675e461121939f1da1225b2"
  },
  {
    "url": "assets/js/15.ded6ac35.js",
    "revision": "7921fb95cfbc5e1c3101903b035438b3"
  },
  {
    "url": "assets/js/16.749336eb.js",
    "revision": "ad84e5146b18f192468355bc010af9a4"
  },
  {
    "url": "assets/js/2.054f0a9e.js",
    "revision": "f73b07d2895710492989a7835844d5a4"
  },
  {
    "url": "assets/js/3.9ebb8673.js",
    "revision": "452a8148bc514eab4d7547b2a281b5ee"
  },
  {
    "url": "assets/js/4.bcc826b4.js",
    "revision": "8b81fc5c187c7e5cb8b24ddba8398ab9"
  },
  {
    "url": "assets/js/5.8ede6b42.js",
    "revision": "79fc95d20c0648083007be53a24ffd0d"
  },
  {
    "url": "assets/js/6.22646ccf.js",
    "revision": "df20207a57fd5a99ce77d8e39668b808"
  },
  {
    "url": "assets/js/7.16e75097.js",
    "revision": "190486959741ff6bda4c52cb4fb2a027"
  },
  {
    "url": "assets/js/8.3b583c10.js",
    "revision": "896df0719a1a59110ae8067482cf05a0"
  },
  {
    "url": "assets/js/9.936eacaf.js",
    "revision": "7393b3a57a1f239fa3bd353f3f342539"
  },
  {
    "url": "assets/js/app.e43a488d.js",
    "revision": "937c5b7a8572d3f7018a1e71ff1d5d9b"
  },
  {
    "url": "img/github.png",
    "revision": "715b8c65da6d0c8f112626ad3746437f"
  },
  {
    "url": "img/gmail.png",
    "revision": "e7d64b7c9e1baace2a45c7721c182bc8"
  },
  {
    "url": "img/heart.jpg",
    "revision": "11e858c66398a27db7392e1cc3498743"
  },
  {
    "url": "img/p1.jpeg",
    "revision": "de5f92772d81dd1d7e50008055d8609f"
  },
  {
    "url": "img/p2.jpeg",
    "revision": "e708867a0a6a06b91973e1c141e4bb39"
  },
  {
    "url": "img/p3.jpeg",
    "revision": "c1a587f01ab4dbd3eb86feeb6d27fba5"
  },
  {
    "url": "img/p4.jpeg",
    "revision": "967accb0eb626272f3a9779ba3aac918"
  },
  {
    "url": "img/wxQR.png",
    "revision": "35ade85a59f3c11e6b7effffdb76d173"
  },
  {
    "url": "index.html",
    "revision": "985afc4a4d0551914d584dc6bba897c3"
  },
  {
    "url": "logo.png",
    "revision": "9becb4dce50dcf9e4b4afee8bbc8ad50"
  },
  {
    "url": "myLove/index.html",
    "revision": "617114e7c366473338f3bccad97b252b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
