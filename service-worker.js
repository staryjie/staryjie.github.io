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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "17e05b4f28d22aa49e2327c8beb749b6"
  },
  {
    "url": "assets/css/0.styles.c986e881.css",
    "revision": "a42f4bd6b90ab87430d2b9ff5d1dc994"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.2e0a1352.js",
    "revision": "570d03621dbcdda99ebdf125fc5015a3"
  },
  {
    "url": "assets/js/10.4e913a6c.js",
    "revision": "60465b8d106ac65ed15c59a0708a61d8"
  },
  {
    "url": "assets/js/11.33ffef17.js",
    "revision": "a3dd8a45b681f5d557a06dd5de6f347c"
  },
  {
    "url": "assets/js/12.56728a12.js",
    "revision": "47dfc4d2e77dd7f732ccfca477290a92"
  },
  {
    "url": "assets/js/13.8ef930ca.js",
    "revision": "0ab2a411bf4dd444b9fd3c353d96d46b"
  },
  {
    "url": "assets/js/14.f4ee1855.js",
    "revision": "75da973c77e18988fb1acf969bd1006f"
  },
  {
    "url": "assets/js/15.201085a9.js",
    "revision": "f5ff5b015518fcaf580e17b0be0beda6"
  },
  {
    "url": "assets/js/16.1016697a.js",
    "revision": "3b84055f888e4137f2b5b0165ed66762"
  },
  {
    "url": "assets/js/17.3a38d145.js",
    "revision": "0ab5917f1768891448007dcc9b439ef5"
  },
  {
    "url": "assets/js/18.d1c3af0d.js",
    "revision": "3732e46296fe1f1abcdd5926ad918588"
  },
  {
    "url": "assets/js/19.b658fb39.js",
    "revision": "65c58fc80044bc20147a343567c68da2"
  },
  {
    "url": "assets/js/20.69db32f9.js",
    "revision": "e981dd05391c08b52aa39b46d6f1a106"
  },
  {
    "url": "assets/js/21.e8fc8e0e.js",
    "revision": "1b57cf5c74dfd437ac26899ce7e2a8ed"
  },
  {
    "url": "assets/js/22.ef9c1ada.js",
    "revision": "cb95d685efe2cac32162a87c62746062"
  },
  {
    "url": "assets/js/23.d2b73042.js",
    "revision": "239b2d66cdae265ee1f44f3de011a0f2"
  },
  {
    "url": "assets/js/24.566f4d48.js",
    "revision": "679a01e0f6399c5911e89f05d92b3213"
  },
  {
    "url": "assets/js/25.e09ddf46.js",
    "revision": "3f0da40c27000b967cd0fafa17c7eb72"
  },
  {
    "url": "assets/js/26.e17524f0.js",
    "revision": "43ddff813be39a7d0379442a33862135"
  },
  {
    "url": "assets/js/27.d2b2ed3e.js",
    "revision": "df467e5c7e1df6613d347b2cba238e2f"
  },
  {
    "url": "assets/js/28.313b2b0d.js",
    "revision": "811f02b9af0731728ce4742d91bc2bc4"
  },
  {
    "url": "assets/js/29.85bfe845.js",
    "revision": "edaa8e47cf68c95908c44a28f8d8fc2f"
  },
  {
    "url": "assets/js/30.0e0a2769.js",
    "revision": "84985a750f31e16a07b25538c0336876"
  },
  {
    "url": "assets/js/31.71ee984c.js",
    "revision": "2ded43ee3a73e9c0e32522319b4dd83e"
  },
  {
    "url": "assets/js/4.71650b81.js",
    "revision": "eeb14fcd5685c8564657ed7d75e0b128"
  },
  {
    "url": "assets/js/5.49b56b2e.js",
    "revision": "33e31954822b776ad64fd79f362c4b19"
  },
  {
    "url": "assets/js/6.204f1d4a.js",
    "revision": "32dae607f4d3f77dd7435f6c77393aa4"
  },
  {
    "url": "assets/js/7.edf336a6.js",
    "revision": "d5800c4c70c6248f5e1256152ff8b6d1"
  },
  {
    "url": "assets/js/8.bf849d55.js",
    "revision": "d8c9053515704897d78be6d2a90f9dd0"
  },
  {
    "url": "assets/js/9.b1f12dc7.js",
    "revision": "d772521744c4c2893abda8b0ec7cd336"
  },
  {
    "url": "assets/js/app.d3fe0630.js",
    "revision": "31cd20d7e3dc0a52e7fa8c41974b4277"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.dc37c295.js",
    "revision": "0c6265c8830b7caebde220d87f48faa7"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/Golang/index.html",
    "revision": "ea9a48dee5a31af342cdd71fb22c46f3"
  },
  {
    "url": "categories/index.html",
    "revision": "a3e7dd3833d70a0cd3229f929855434d"
  },
  {
    "url": "categories/Kubernetes/index.html",
    "revision": "d29e39cf5f14b3aa0f092aa4512f1199"
  },
  {
    "url": "categories/VsCode/index.html",
    "revision": "c89d2eebbcd0526f26c954fe061cefd9"
  },
  {
    "url": "categories/情感/index.html",
    "revision": "3e58392f96f50cb5ae2d152beddf01c0"
  },
  {
    "url": "categories/日常生活/index.html",
    "revision": "c14aa0cd8233124ee6dc68da0ed9d83f"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "daily/宠物/pet.html",
    "revision": "278dde1a6084896af9c3be638a328f16"
  },
  {
    "url": "daily/情感/say_sorry.html",
    "revision": "51e596b3eaef2027d88f25b1cb8d2d20"
  },
  {
    "url": "daily/旅行/travel.html",
    "revision": "25bb603cb93fa5eaa519d632348d8bd0"
  },
  {
    "url": "daily/游戏/game.html",
    "revision": "ec5f0d7a15f31dd3886f778fa89eb847"
  },
  {
    "url": "daily/烹饪/cooking.html",
    "revision": "d0dc94f39009da6b40810afb21a8fbca"
  },
  {
    "url": "golang/基础/first_go.html",
    "revision": "ca088870857b356967c282fc563bed48"
  },
  {
    "url": "golang/基础/identify_keywords.html",
    "revision": "6891b9559965857467570c320b0b6447"
  },
  {
    "url": "golang/基础/install_golang.html",
    "revision": "8b5d62ad0583a24b7e8caa35ac501e86"
  },
  {
    "url": "golang/基础/introduce_golang.html",
    "revision": "9c48b1e0593ddf06c3c2ecbcb3fcb0e6"
  },
  {
    "url": "golang/基础/operator_express.html",
    "revision": "e8c48417b5696e93c9334ddae33f66f8"
  },
  {
    "url": "guide/index.html",
    "revision": "d8cf0057356efe8afa98105627bf07e9"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5-1.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/5.jpg",
    "revision": "4da076e5a7f1087adba12f4ce1c2abf9"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "img/sidebar_300_200.png",
    "revision": "7f0c5fa58fde8685780e7df2e41a3c2e"
  },
  {
    "url": "index.html",
    "revision": "70e15bfc89ab0dc822dc5759d06c38b7"
  },
  {
    "url": "js/custom.js",
    "revision": "ac8037c7e3d152b6d037de6868c00313"
  },
  {
    "url": "k8s/helm/introduce_helm.html",
    "revision": "5965622fa30396a53f1bbb739af38d0c"
  },
  {
    "url": "k8s/ingress/introduce_ingress.html",
    "revision": "8ae3bdf7f0a2daa992c4bf38f5774adb"
  },
  {
    "url": "k8s/istio/introduce_istio.html",
    "revision": "eddff1a86d600c4a61a11ace4b7de713"
  },
  {
    "url": "k8s/kubernetes/introduce_k8s.html",
    "revision": "373b1b5487b95a0a5a2a2079962e9afb"
  },
  {
    "url": "k8s/面试题/interview_question.html",
    "revision": "03902b85dded7a6dd63ca26e05531536"
  },
  {
    "url": "monitor/prometheus/introduce_prometheus.html",
    "revision": "c9466f945a4b75414e8156fc40e625e4"
  },
  {
    "url": "monitor/zabbix/introduce_zabbix.html",
    "revision": "1718f0bcef5cf9f08cc958f601fce850"
  },
  {
    "url": "tag/index.html",
    "revision": "3f987422f09b3295a4b0789ffcf0d718"
  },
  {
    "url": "tags/Game/index.html",
    "revision": "5a12fba57ae62423bc2e5172ef2fc163"
  },
  {
    "url": "tags/Go/index.html",
    "revision": "194459b6aa436f8b58576c463e9e038f"
  },
  {
    "url": "tags/Golang/index.html",
    "revision": "81acbefae8b69f7cb184a689e4654f61"
  },
  {
    "url": "tags/k8s/index.html",
    "revision": "e1ce5eff9b197785b1f9f57414223f45"
  },
  {
    "url": "tags/Kubernetes/index.html",
    "revision": "465152d7a839699053feae90ca12b5c0"
  },
  {
    "url": "tags/VsCode/index.html",
    "revision": "ecf6a72ab075845bb615cf9118d8de4c"
  },
  {
    "url": "tags/情感/index.html",
    "revision": "e651c7f67e3ddad6ab0327dbc22c8af6"
  },
  {
    "url": "tags/日常生活/index.html",
    "revision": "1a4d6938adcabc1e20b33e1ca45b9e05"
  },
  {
    "url": "tags/游戏/index.html",
    "revision": "7c53f8f956f7709d5c3c262e83cff2fd"
  },
  {
    "url": "tags/烹饪/index.html",
    "revision": "ff431c3d383f1a25042960d00c9099d0"
  },
  {
    "url": "timeline/index.html",
    "revision": "93bf32abce8ee07f7dfe97946561a480"
  },
  {
    "url": "tools/VsCode/kubernetes_linter.html",
    "revision": "3f52e65eb709cc29cdc8944a9eb3f557"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  }
].concat(self.__precacheManifest || []);
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
