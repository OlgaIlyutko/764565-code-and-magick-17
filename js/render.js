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


  var renderHeroes = function (heroes) {
    var takeNumber = heroes.length > HEROES_COUNT ? HEROES_COUNT : heroes.length;
    similarListElement.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarListElement.appendChild(heroesView(heroes[i]));
    }

    setup.querySelector('.setup-similar').classList.remove('hidden');
  };

  var mainWizardCoatImg = setup.querySelector('.setup-wizard .wizard-coat');
  var mainWizardEyesImg = setup.querySelector('.setup-wizard .wizard-eyes');
  var mainWizardFireballImg = setup.querySelector('.setup-fireball-wrap');

  var mainWizardCoatInput = setup.querySelector('[name=coat-color]');
  var mainWizardEyesInput = setup.querySelector('[name=eyes-color]');
  var mainWizardFireballInput = setup.querySelector('[name=fireball-color]');

  var heroes = [];
  var colorCoat = mainWizardCoatInput.value;
  var colorEyes = mainWizardEyesInput.value;

  mainWizardCoatImg.addEventListener('click', function () {
    var newColorCoat = window.randomDataHeroes.getCoat();
    window.randomDataHeroes.setColorHeroes(mainWizardCoatImg, mainWizardCoatInput, newColorCoat);
    colorCoat = newColorCoat;
    window.debounce(updateHeroes);
  });


  mainWizardEyesImg.addEventListener('click', function () {
    var newColorEyes = window.randomDataHeroes.getEyes();
    window.randomDataHeroes.setColorHeroes(mainWizardEyesImg, mainWizardEyesInput, newColorEyes);
    colorEyes = newColorEyes;
    window.debounce(updateHeroes);
  });

  mainWizardFireballImg.addEventListener('click', function () {
    var newColorFireball = window.randomDataHeroes.getFireball();
    window.randomDataHeroes.setColorHeroes(mainWizardFireballImg, mainWizardFireballInput, newColorFireball);
  });

  var getRank = function (hero) {
    var rank = 0;
    if (hero.colorCoat === colorCoat) {
      rank += 2;
    }
    if (hero.colorEyes === colorEyes) {
      rank += 1;
    }
    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateHeroes = function () {
    renderHeroes(heroes.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));

  };

  var onLoad = function (data) {
    heroes = data;
    updateHeroes(heroes);
  };

  var onError = function (message) {
    console.log(message);
  };

  var onSave = function () {
    setup.classList.add('hidden');
  };

  var form = setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), onSave, onError);
    evt.preventDefault();
  });

  window.backend.load(onLoad, onError);

})();
