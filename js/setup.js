'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var HEROES_COUNT = 4;

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarListElement = document.querySelector('.setup-similar-list');

  var heroesView = function (hero) {
    var heroElement = similarWizardTemplate.cloneNode(true);
    heroElement.querySelector('.setup-similar-label').textContent = hero.name;
    heroElement.querySelector('.wizard-coat').style.fill = hero.colorCoat;
    heroElement.querySelector('.wizard-eyes').style.fill = hero.colorEyes;
    return heroElement;
  };

  var onLoad = function (heroes) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < HEROES_COUNT; i++) {
      fragment.appendChild(heroesView(heroes[i]));
    }
    similarListElement.appendChild(fragment);
    setup.querySelector('.setup-similar').classList.remove('hidden');
  };

   
  var onError = function (message) {
    console.error(message);
  };
  
  var onSave = function (response) {
    setup.classList.add('hidden');
  };
  
  var form = setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
     window.backend.save(new FormData(form), onSave, onError);
  evt.preventDefault();
  });
  
  window.backend.load(onLoad, onError);
  
})();