'use strict';

(function () {
var setup = document.querySelector('.setup');
var HEROES_COUNT = 4;
var COATS_COLOR; 
var EYES_COLOR;
var NAMES;
var SURNAMES;
var FIREBALLS_COLOR;
  
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = document.querySelector('.setup-similar-list');


var heroes = [];


for (var j = 0; j < HEROES_COUNT; j++) {
  heroes[j] = {
    name: window.randomDataHeroes(NAMES) + ' ' + window.randomDataHeroes(SURNAMES),
    coatColor: window.randomDataHeroes(COATS_COLOR),
    eyesColor: window.randomDataHeroes(EYES_COLOR)
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
})();
