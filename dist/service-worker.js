/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

'use strict';



var PrecacheConfig = [["app.js","4cfce44b80f79cb6e2b783156a5a2472"],["app.min.js","72695f551abe24439a812a89114d3de2"],["config.json","6876b26baaf6836a23faffe2393d7f5c"],["data.json","351eb6472a74d0d0e7f13b54ab14a5cd"],["directive/menu/menu.html","86ff3d9bea941dc7083b27b05d13eb3a"],["fonts/Roboto-Black.woff","4c3b6229efe63a13dbb4c3c32e292e61"],["fonts/Roboto-BlackItalic.woff","3a99796b2d8592471fcf278df4334d5d"],["fonts/Roboto-Bold.woff","ad140ff02a7091257e2b31619106194e"],["fonts/Roboto-BoldItalic.woff","a7dce23c0dd99a4afa5cdb4925f0358a"],["fonts/Roboto-Light.woff","37fbbbad5577a95bdf058307c717c882"],["fonts/Roboto-LightItalic.woff","c7b4e746cf8ecbf412fc944146154d24"],["fonts/Roboto-Medium.woff","303ded6436dcf7ea75157e2aeff876ce"],["fonts/Roboto-MediumItalic.woff","da059a7386fea889c55cce11253df175"],["fonts/Roboto-Regular.woff","081b11ebaca8ad30fd092e01451015dc"],["fonts/Roboto-RegularItalic.woff","8add1ba317c27e39b7781c95fa174671"],["fonts/Roboto-Thin.woff","90d3804f0231704c15ccc5861245e8ce"],["fonts/Roboto-ThinItalic.woff","588293290e86dad97fcf33ed1719c083"],["img/circle.png","4f4755613f6eb5b87e7461621277ac0d"],["img/circle_300.png","bd00cff682da4698ea811c1eef1d9046"],["img/flickr/6902260636_14b12901ab_o.jpg","6ec0889f262fafa8bb17c4307903d253"],["img/flickr/7898420436_b9a376f2bd_o.jpg","57dec090fd4a12a59024e761fbc5c2c0"],["img/flickr/9223220544_f3be78b7a5_o.jpg","081947e7e544bb4ef34f672391ce7e9c"],["img/flickr/data.json~","92bb4b9429f87b57c303d365ddfdd8eb"],["img/flickr/data.txt~","d41d8cd98f00b204e9800998ecf8427e"],["img/icons/HTML5_Logo.png","30498ce1de190d6af67860cab29adcc0"],["img/icons/HTML5_Tech_Classes/HTML5_3D_effects.png","47899baf42e23be1948755108a72b485"],["img/icons/HTML5_Tech_Classes/HTML5_Connectivity_128.png","4bdcc4b452b7b34cd005b13faf00d9c3"],["img/icons/HTML5_Tech_Classes/HTML5_Device_Access_128.png","fec52ada56821d19c3d30cf5570653a4"],["img/icons/HTML5_Tech_Classes/HTML5_Multimedia_128.png","6e67b57df0dfba28093dd9f879eff8b8"],["img/icons/HTML5_Tech_Classes/HTML5_Offline_Storage_128.png","1b6598bc8a4583cac712362f8fda2501"],["img/icons/HTML5_Tech_Classes/HTML5_Performance_128.png","9637a964361f35dc5bf86cdfcebe8c3e"],["img/icons/HTML5_Tech_Classes/HTML5_Semantics_128.png","22520330d8b616492e8118fbd9bf05de"],["img/icons/HTML5_Tech_Classes/HTML5_Styling_128.png","c5cc0ce71e14f270ccb889b7a3179a81"],["img/icons/Iphone.png","52b105a28698ab8e145a60929ef04e24"],["img/icons/Iphone.svg","ed96efbe111059082a627bab23e38a86"],["img/icons/Octocats/Octocat/Octocat.jpg","255f1a6036074d939a105abc30802ff4"],["img/icons/Octocats/Octocat/Octocat.png","1d603fd45df2166acd8ba7149c0eb113"],["img/icons/Octocats/Octocat/Octocat_600.jpg","75996fa711853b85e4bc89edc925ff45"],["img/icons/arrow_board.png","ba3184b94bcb551aee9629f27c5e3aee"],["img/icons/arrow_board.svg","b05cf796ed1a006deb9e359e6066c52e"],["img/icons/flask.png","acb58a4602e5c93b6bfa9ae4451e8350"],["img/icons/flask.svg","5312b4e1e6c58396bc15f9ef1e936ebd"],["img/icons/gameboy.png","aaf2fa4159fbd47b0916887206a16625"],["img/icons/glyphicons/glyphicons_071_book.png","0682d04a7cd08e24d2f32be427f7f601"],["img/icons/glyphicons/glyphicons_118_embed_close.png","7a65785510a914ce1e38ad58085c2046"],["img/icons/glyphicons/glyphicons_268_keyboard_wireless.png","46826fdb16f94dc4b3c0a531605712ca"],["img/icons/glyphicons/glyphicons_294_coffe_cup.png","0bbefbbfd0f4e6c6e838331baa0d8575"],["img/icons/glyphicons/glyphicons_321_gamepad.png","095c9da21f5d992bb1617b45536efce3"],["img/icons/mug.png","7c76ebe6ffdbc293cc1759a8db89420f"],["img/icons/news.png","6872d600e6de59efdcbd9d4dc7ba1a7c"],["img/icons/open_envelope.png","b9a86c6f0525189d171c30fcbb424756"],["img/icons/open_envelope.svg","5eed7ae2035e0e6541b8e04e20b04039"],["img/icons/rocket.png","31c500ad5e892bca7177bb68264bb1f8"],["img/icons/rocket.svg","48e7549b9e9ee96944727df56e06c69a"],["img/icons/type.png","123b47893fae7185d1a9e95d42a0794c"],["img/icons/ultrabook.png","f2ebfe39d1782ac8eaa9e73ce8fa588d"],["img/main/1.jpg","cc920eed65975153f4a4f773d48ef6e5"],["img/main/2.jpg","fec253e7824ba3f62858d4966c19eff1"],["img/main/3.jpg","f86ab6e5b623a38bfe016b21511ca9e0"],["img/main/4.jpg","46bc8916cb09c728f591f1b4db36d726"],["img/main/5.jpg","e0348cee90562a85c9180b910e71adb3"],["img/screens/gastos.jpg","1ee9b466b5641a2d8b6f4d9cb8845a21"],["img/screens/js-sublime.jpg","5303fd90f71d3ef26de6d3dc6d13bdff"],["img/screens/linux.jpg","162ebda809aa3ddeae8620603dc04a75"],["img/screens/mysql.jpg","429649f99d72a3b16a508f9d5dd04d36"],["img/screens/php-sublime.jpg","31f1c0dacf220a37cbc6aa15d4c10761"],["img/websites/dental1.png","29629b145d8e85791544396c52f2eec3"],["img/websites/dental2.png","78d5278dc5a8deb367473836f48b1f3d"],["img/websites/dental3.png","dd90fdd7f391ae52942a85ee77c63cf3"],["img/websites/hesa1.png","e11d0668132955137b4786a8ef05efc9"],["img/websites/hesa2.png","fe9ad7276b2875344986bbc2039221d7"],["img/websites/hesa3.png","5325d5e4c3367d4d79e12090a6ae4f37"],["index.html","23eb643fad3526c62ea00fa60b04666f"],["partial/about/about.html","44479f1951fed6efb9072f2de913688c"],["partial/home/home.html","63ed536cbe0856dc15b02d61fd5dba59"],["partial/projects/projects.html","7673a1e214860fd7fc923a5b2608dcc7"]];
var CacheNamePrefix = 'sw-precache-v1-victorhqc-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var populateCurrentCacheNames = function (precacheConfig, cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl, ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  var now = Date.now();

  event.waitUntil(
    caches.keys().then(function(allCacheNames) {
      return Promise.all(
        Object.keys(CurrentCacheNamesToAbsoluteUrl).filter(function(cacheName) {
          return allCacheNames.indexOf(cacheName) == -1;
        }).map(function(cacheName) {
          var url = new URL(CurrentCacheNamesToAbsoluteUrl[cacheName]);
          // Put in a cache-busting parameter to ensure we're caching a fresh response.
          if (url.search) {
            url.search += '&';
          }
          url.search += 'sw-precache=' + now;
          var urlWithCacheBusting = url.toString();

          console.log('Adding URL "%s" to cache named "%s"', urlWithCacheBusting, cacheName);
          return caches.open(cacheName).then(function(cache) {
            var request = new Request(urlWithCacheBusting, {credentials: 'same-origin'});
            return fetch(request.clone()).then(function(response) {
              if (response.status == 200) {
                return cache.put(request, response);
              } else {
                console.error('Request for %s returned a response with status %d, so not attempting to cache it.',
                  urlWithCacheBusting, response.status);
                // Get rid of the empty cache if we can't add a successful response to it.
                return caches.delete(cacheName);
              }
            });
          });
        })
      ).then(function() {
        return Promise.all(
          allCacheNames.filter(function(cacheName) {
            return cacheName.indexOf(CacheNamePrefix) == 0 &&
                   !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            console.log('Deleting out-of-date cache "%s"', cacheName);
            return caches.delete(cacheName);
          })
        )
      });
    }).then(function() {
      if (typeof self.skipWaiting == 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim == 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command == 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method == 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    if (cacheName) {
      event.respondWith(
        // We can't call cache.match(event.request) since the entry in the cache will contain the
        // cache-busting parameter. Instead, rely on the fact that each cache should only have one
        // entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              return response || fetch(event.request).catch(function(e) {
                console.error('Fetch for "%s" failed: %O', urlWithoutIgnoredParameters, e);
              });
            });
          });
        }).catch(function(e) {
          console.error('Couldn\'t serve response for "%s" from cache: %O', urlWithoutIgnoredParameters, e);
          return fetch(event.request);
        })
      );
    }
  }
});

