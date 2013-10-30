(function() {
  'use strict';

  window.addEventListener('load', function() {
    var button = document.getElementsByClassName('navbar-toggle')[0]
      , menu = document.getElementsByClassName('navbar-collapse')[0]
      , buttonBaseClassName = button.className + ' '
      , menuBaseClassName = menu.className + ' '
      , closed = true
      , ivl;

    button.className = buttonBaseClassName + 'collapsed';
    menu.style.height = '1px';

    button.addEventListener('click', function() {
      closed = !closed;
      if (ivl) {
        clearInterval(ivl);
      }

      button.className = buttonBaseClassName + (closed ? 'collapsed' : '');
      menu.className = menuBaseClassName + 'collapsing in';

      setTimeout(function() {
        menu.style.height = closed ? '1px' : '176px';
      }, 10);

      ivl = setTimeout(function() {
        ivl = false;
        menu.className = menuBaseClassName + (closed ? 'collapse' : 'in');
      }, 350);
    });
  });
})();