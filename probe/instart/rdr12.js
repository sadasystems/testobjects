/* Copyright 2011 Cedexis Inc. */

(function() {
    var s = new Date();
    if ('object' === typeof window.radar) {
        window.radar.stoppedAt = s;
    }
})();
