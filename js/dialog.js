'use strict';
(function () {

  var COATS_COLOR; 
  var EYES_COLOR;
  var NAMES;
  var SURNAMES;
  var FIREBALLS_COLOR;
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var userNameInput = setup.querySelector('.setup-user-name');

  var onPopupEscPress = function (evt) {
    if (userNameInput === document.activeElement) {
      return evt;
    } else {
      window.util.isEscEvent(evt, closePopup);
    }
  };


  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };


  var closePopup = function () {
    setup.style = '';
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });




  var icon = setup.querySelector('.upload');

  icon.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;
      var deltaCoords = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };
      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };
      setup.style.left = (setup.offsetLeft - deltaCoords.x) + 'px';
      setup.style.top = (setup.offsetTop - deltaCoords.y) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      if (dragged) {
        var onClickPreventDefault = function (evt) {
          evt.preventDefault();
          icon.removeEventListener('click', onClickPreventDefault);
        };
        icon.addEventListener('click', onClickPreventDefault);
      }
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
