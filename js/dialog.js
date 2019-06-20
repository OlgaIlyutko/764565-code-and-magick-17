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

var mainWizardCoatImg = setup.querySelector('.setup-wizard .wizard-coat');
var mainWizardEyesImg = setup.querySelector('.setup-wizard .wizard-eyes');
var mainWizardFireballImg = setup.querySelector('.setup-fireball-wrap');

var mainWizardCoatInput = setup.querySelector('[name=coat-color]');
var mainWizardEyesInput = setup.querySelector('[name=eyes-color]');
var mainWizardFireballInput = setup.querySelector('[name=fireball-color]');

mainWizardCoatImg.addEventListener('click', function () {
  var newCoatsColor = window.randomDataHeroes(COATS_COLOR);
  mainWizardCoatImg.style.fill = newCoatsColor;
  mainWizardCoatInput.value = newCoatsColor;
});

mainWizardEyesImg.addEventListener('click', function () {
  var newEyesColor = window.randomDataHeroes(EYES_COLOR);
  mainWizardEyesImg.style.fill = newEyesColor;
  mainWizardEyesInput.value = newEyesColor;
});

mainWizardFireballImg.addEventListener('click', function () {
  var newFireballsColor = window.randomDataHeroes(FIREBALLS_COLOR);
  mainWizardFireballImg.style.background = newFireballsColor;
  mainWizardFireballInput.value = newFireballsColor;
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
