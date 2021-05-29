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
    "revision": "c82c65cf80508112b89f84ddae148b64"
  },
  {
    "url": "about/index.html",
    "revision": "54d88c841e945167b5f180ecb63a7560"
  },
  {
    "url": "article/2018-11.html",
    "revision": "9545129ffa1e94a39170268559c26a11"
  },
  {
    "url": "article/2018-12-04.html",
    "revision": "96c911bf5c774817d7b383d1c57f1562"
  },
  {
    "url": "article/2018-12-12.html",
    "revision": "4e4ecdc772ff3bc12c7c4d4481b12f93"
  },
  {
    "url": "article/2018-12.html",
    "revision": "7baee1f0d9fbbf88eb86d6c3c91abeab"
  },
  {
    "url": "article/DOME.html",
    "revision": "a4dae07940951b8137317f2b80c7dbe6"
  },
  {
    "url": "article/index.html",
    "revision": "7ff27e4f41a453a9330f3b86344c5926"
  },
  {
    "url": "assets/css/0.styles.bed5c7ac.css",
    "revision": "344b55068bfd561ff5ffb51b11e88f48"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.637a0146.js",
    "revision": "7ef373d6ec93bc2f7a2f3018e4b306e8"
  },
  {
    "url": "assets/js/10.455faaf1.js",
    "revision": "9657334471e7bba2ff7abafb5e5a74de"
  },
  {
    "url": "assets/js/11.56ac4116.js",
    "revision": "13f0e5b99288bc519f1df9c4781345ea"
  },
  {
    "url": "assets/js/12.7d41fdbe.js",
    "revision": "6df20ded00da732cb4f532f9f5ebc364"
  },
  {
    "url": "assets/js/13.2f0f41ef.js",
    "revision": "0e8c692c48899f5b4afa71cb9151a256"
  },
  {
    "url": "assets/js/14.56e43344.js",
    "revision": "ec8e2b8afa710c9764634db2f6378704"
  },
  {
    "url": "assets/js/15.050545d0.js",
    "revision": "e60938f8b3f752d00923e2d32ca429e6"
  },
  {
    "url": "assets/js/16.224269a6.js",
    "revision": "9c4da58588da41357c7b3faadcccfd6c"
  },
  {
    "url": "assets/js/17.bb220c86.js",
    "revision": "e5bc0f94015ef9d9699500c9e39d0cc2"
  },
  {
    "url": "assets/js/18.d4e17f15.js",
    "revision": "06eb15197c0ca518c9541e7622e4e7d4"
  },
  {
    "url": "assets/js/19.ec68a558.js",
    "revision": "f32e5e2d8c323c64aae9794dc067d928"
  },
  {
    "url": "assets/js/2.2b9de9f7.js",
    "revision": "9a57f4e5eff34285694576d3655e7b81"
  },
  {
    "url": "assets/js/20.68351d5a.js",
    "revision": "676724e81c1574c1494eca9a7d388c65"
  },
  {
    "url": "assets/js/4.9d390a5a.js",
    "revision": "a1078162893b197fb1b4b380e0d928ea"
  },
  {
    "url": "assets/js/5.7e4683a9.js",
    "revision": "f5bd591221d94b5bdea79925d39235a1"
  },
  {
    "url": "assets/js/6.20717ae2.js",
    "revision": "77581733778461820a0720c17ff8444f"
  },
  {
    "url": "assets/js/7.ebbc1056.js",
    "revision": "765a3a1277a6a04580e2b5039563f8a6"
  },
  {
    "url": "assets/js/8.728c7886.js",
    "revision": "16511371f0e684172aa9fdc9d1374978"
  },
  {
    "url": "assets/js/9.77251d8f.js",
    "revision": "c849eee5578dca792650be147e5488fe"
  },
  {
    "url": "assets/js/app.04639768.js",
    "revision": "8f67ebed44a39aacf52f0f27d76f5e72"
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
    "revision": "5a9d0a0438ceec986d4cfc7c0b0a1f2c"
  },
  {
    "url": "logo.png",
    "revision": "9becb4dce50dcf9e4b4afee8bbc8ad50"
  },
  {
    "url": "model/index.html",
    "revision": "06317fef86d30b39e7bd48cf3540e541"
  },
  {
    "url": "myLove/index.html",
    "revision": "32af53311a11c329bcfee5c75dd7b3f8"
  },
  {
    "url": "three/libs/ammo.wasm.js",
    "revision": "402cebaf486f22ff9ca4ee8b9de71945"
  },
  {
    "url": "three/libs/basis/basis_transcoder.js",
    "revision": "b642cb54b8ff83aa13690ad209e4ecf4"
  },
  {
    "url": "three/libs/basis/msc_basis_transcoder.js",
    "revision": "c20be82fc6db4b112c2562ec1bcfc81f"
  },
  {
    "url": "three/libs/chevrotain.min.js",
    "revision": "baeb10f946d4bb6797931c981e4478e7"
  },
  {
    "url": "three/libs/dat.gui.min.js",
    "revision": "eb33b41684315d14000bf06296338f37"
  },
  {
    "url": "three/libs/deflate.min.js",
    "revision": "95523c6d6f7893307119685874bc683b"
  },
  {
    "url": "three/libs/draco/draco_decoder.js",
    "revision": "36602bd60bdaba29f063474bf6fe5f39"
  },
  {
    "url": "three/libs/draco/draco_encoder.js",
    "revision": "19ec7d67f4a209ec8b5fa0a7e0055226"
  },
  {
    "url": "three/libs/draco/draco_wasm_wrapper.js",
    "revision": "92166c0fa3f566b2ba676c4a2e2488d7"
  },
  {
    "url": "three/libs/draco/gltf/draco_decoder.js",
    "revision": "cd3e53d09acfffb1ce5d6074aac3d74b"
  },
  {
    "url": "three/libs/draco/gltf/draco_encoder.js",
    "revision": "b3c687f18f58015e032d5d4b5c5c33e8"
  },
  {
    "url": "three/libs/draco/gltf/draco_wasm_wrapper.js",
    "revision": "76d5f06fb95f804621f8d04f798cf118"
  },
  {
    "url": "three/libs/inflate.min.js",
    "revision": "f204ccce4a5ef2a58ffd2c0955382700"
  },
  {
    "url": "three/libs/jszip.min.js",
    "revision": "a778df39333432bb8c5ad0f81d02d296"
  },
  {
    "url": "three/libs/lottie_canvas.js",
    "revision": "ae8cd89b27bbdea8d0d0b1859e8b7939"
  },
  {
    "url": "three/libs/meshopt_decoder.js",
    "revision": "64807abadb730f6c6d3ac6c4f306df5e"
  },
  {
    "url": "three/libs/opentype.min.js",
    "revision": "4683d0e745608d5ec880f1c80c1201c1"
  },
  {
    "url": "three/libs/stats.min.js",
    "revision": "a18d9a11cbd79f312087c3bcc39ee310"
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
