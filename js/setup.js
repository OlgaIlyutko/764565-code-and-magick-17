'use strict';
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = document.querySelector('.setup-similar-list');


var coatsColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var fireballsColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var heroes = [];

var randomHeroData = function (heroData) {
  return Math.floor(Math.random() * (heroData.length - 1));
};

for (var j = 0; j < 4; j++) {
  heroes[j] = {name: names[randomHeroData(names)] + ' ' + surnames[randomHeroData(surnames)],
    coatColor: coatsColor[randomHeroData(coatsColor)],
    eyesColor: eyesesColor[randomHeroData(eyesesColor)]};
}

var heroesView = function (hero) {
  hero = similarWizardTemplate.cloneNode(true);
  hero.querySelector('.setup-similar-label').textContent = heroes[i].name;
  hero.querySelector('.wizard-coat').style.fill = heroes[i].coatColor;
  hero.querySelector('.wizard-eyes').style.fill = heroes[i].eyesColor;
  return hero;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < heroes.length; i++) {
  fragment.appendChild(heroesView(heroes[i]));
}
similarListElement.appendChild(fragment);

setup.querySelector('.setup-similar').classList.remove('hidden');

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
  var newCoatsColor = coatsColor[randomHeroData(coatsColor)];
  mainWizardCoatImg.style.fill = newCoatsColor;
  mainWizardCoatInput.value = newCoatsColor;
});

mainWizardEyesImg.addEventListener('click', function () {
  var newEyesesColor = eyesesColor[randomHeroData(eyesesColor)];
  mainWizardEyesImg.style.fill = newEyesesColor;
  mainWizardEyesInput.value = newEyesesColor;
});

mainWizardFireballImg.addEventListener('click', function () {
  var newFireballsColor = fireballsColor[randomHeroData(fireballsColor)];
  mainWizardFireballImg.style.background = newFireballsColor;
  mainWizardFireballInput.value = newFireballsColor;
});
