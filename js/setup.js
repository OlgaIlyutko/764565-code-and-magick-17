'use strict';

var setup = document.querySelector('.setup');
var HEROES_COUNT = 4;

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = document.querySelector('.setup-similar-list');


var COATS_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var FIREBALLS_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var heroes = [];

var randomHeroData = function (heroData) {
  return Math.floor(Math.random() * (heroData.length - 1));
};

for (var j = 0; j < HEROES_COUNT; j++) {
  heroes[j] = {
    name: NAMES[randomHeroData(NAMES)] + ' ' + SURNAMES[randomHeroData(SURNAMES)],
    coatColor: COATS_COLOR[randomHeroData(COATS_COLOR)],
    eyesColor: EYES_COLOR[randomHeroData(EYES_COLOR)]
  };
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
