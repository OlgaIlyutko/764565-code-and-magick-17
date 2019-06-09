'use strict';
var setupWindow = document.querySelector('.setup');
setupWindow.classList.remove('hidden');


var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = document.querySelector('.setup-similar-list');


var coatsColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
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

setupWindow.querySelector('.setup-similar').classList.remove('hidden');
