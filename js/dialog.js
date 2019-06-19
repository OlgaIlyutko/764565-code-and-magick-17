'use strict';
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if (userNameInput === document.activeElement) {
    return evt;
  } else {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
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
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var mainWizardCoatImg = setup.querySelector('.setup-wizard .wizard-coat');
var mainWizardEyesImg = setup.querySelector('.setup-wizard .wizard-eyes');
var mainWizardFireballImg = setup.querySelector('.setup-fireball-wrap');

var mainWizardCoatInput = setup.querySelector('[name=coat-color]');
var mainWizardEyesInput = setup.querySelector('[name=eyes-color]');
var mainWizardFireballInput = setup.querySelector('[name=fireball-color]');

mainWizardCoatImg.addEventListener('click', function () {
  var newCoatsColor = COATS_COLOR[randomHeroData(COATS_COLOR)];
  mainWizardCoatImg.style.fill = newCoatsColor;
  mainWizardCoatInput.value = newCoatsColor;
});

mainWizardEyesImg.addEventListener('click', function () {
  var newEyesColor = EYES_COLOR[randomHeroData(EYES_COLOR)];
  mainWizardEyesImg.style.fill = newEyesColor;
  mainWizardEyesInput.value = newEyesColor;
});

mainWizardFireballImg.addEventListener('click', function () {
  var newFireballsColor = FIREBALLS_COLOR[randomHeroData(FIREBALLS_COLOR)];
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
