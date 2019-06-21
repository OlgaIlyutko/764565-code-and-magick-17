'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  
  window.util = {
    isEscEvent: function (evt, action) {
      evt.keyCode === ESC_KEYCODE && action();
    },
    isEnterEvent: function (evt, action) {
      evt.keyCode === ENTER_KEYCODE && action();
    }
  };
})();