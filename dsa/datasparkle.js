(function() {
  'use strict';
  window.addEventListener('load', function() {
    new Header({
      source: 'test.txt',
      container: document.getElementById('header'),
      opacityRange: [0.1, 0.2],
      gridSize: 10,
      size: 500,
      baseColor: '#00b2a9',
      color: '#000',
      blendingMode: 'hard-light',
      fadeInDuration: 1000
    });
  });

  var util = {};

  util.get = function(url, done) {
    var Factories = [
      function () {return new XMLHttpRequest();},
      function () {return new ActiveXObject("Msxml2.XMLHTTP");},
      function () {return new ActiveXObject("Msxml3.XMLHTTP");},
      function () {return new ActiveXObject("Microsoft.XMLHTTP");}
    ];
    var req;

    for (var i = 0, len = Factories.length; i < len; i ++) {
      try {
        req = Factories[i]();
        break;
      } catch(e) {}
    }

    req.open('GET', url, true);
    req.onreadystatechange = function () {
      if (req.readyState == 4) {
        done(req.status == 200 ? null : req.status, req.responseText || null);
      }
    };
    req.send();
  };

  util.scale = function(domain, range) {
    return function(n) {
      return Math.max(range[0], Math.min(range[1], (range[0] * domain[1] + n * range[1] - n * range[0] - range[1] * domain[0]) / (domain[1] - domain[0])));
    };
  };

  util.parseRgb = function(str) {
    var parts = str.match(/(([0-9a-z]{2})([0-9a-z]{2})([0-9a-z]{2}))|(([0-9a-z])([0-9a-z])([0-9a-z]))/);

    return {
      r: parts[2] ? parseInt(parts[2], 16) : parseInt(parts[6] + parts[6], 16),
      g: parts[3] ? parseInt(parts[3], 16) : parseInt(parts[7] + parts[7], 16),
      b: parts[4] ? parseInt(parts[4], 16) : parseInt(parts[8] + parts[8], 16)
    };
  };

  function Header(options) {
    this.offset = 0;
    this.data = '';
    this.container = options.container;
    this.opacityRange = options.opacityRange || [0.1, 0.3];
    this.gridSize = options.gridSize || 10;
    this.size = options.size || 500;
    this.baseColor = options.baseColor || '#00b2a9';
    this.color = util.parseRgb(options.color || '#fff');
    this.fadeInDuration = options.fadeInDuration || 1000;
    this.blendingMode = options.blendingMode || 'screen';

    util.get(options.source, this.init.bind(this));
  }

  Header.prototype.init = function(error, data) {
    var self = this
      , start = Date.now()
      , rangeMinScale = util.scale([0, this.fadeInDuration], [0, this.opacityRange[0]])
      , rangeMaxScale = util.scale([0, this.fadeInDuration], [0, this.opacityRange[1]]);

    this.data = data;

    (function render() {
      var elapse = Date.now() - start;

      self.offset = 0;
      self.opacityScale = util.scale([0, 255], [rangeMinScale(elapse), rangeMaxScale(elapse)]);
      self.render();

      if (elapse < self.fadeInDuration) {
        window.requestAnimationFrame(render);
      }
    })();
  };

  Header.prototype.render = function() {
    var canvas = document.createElement('canvas')
      , ctx = canvas.getContext('2d');

    ctx.fillStyle = this.baseColor;
    ctx.fillRect(0, 0, this.size, this.size);
    ctx.globalCompositeOperation = this.blendingMode;

    for (var x = 0; x < this.size; x += this.gridSize) {
      for (var y = 0; y < this.size; y += this.gridSize) {
        ctx.fillStyle = 'rgba(' + this.color.r + ',' + this.color.g + ',' + this.color.b + ',' + this.getOpacity() + ')';
        ctx.fillRect(x + 0.05, y + 0.05, this.gridSize - 0.1, this.gridSize - 0.1);
      }
    }

    this.container.style.backgroundImage = 'url(' + canvas.toDataURL('image/png') + ')';
  };

  Header.prototype.getOpacity = function() {
    this.offset = this.offset < this.data.length ? this.offset + 1 : 0;
    return this.opacityScale(this.data.charCodeAt(this.offset));
  };
})();

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

// MIT license

(function() {
    'use strict';
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());