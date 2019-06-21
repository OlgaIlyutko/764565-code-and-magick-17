'use strict';

(function () {
  
  var COATS_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var FIREBALLS_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  
  var randomHeroData = function (heroData) {
    return Math.floor(Math.random() * (heroData.length - 1));
  };
  
  window.getRandomName = function () {
    return NAMES[randomHeroData(NAMES)] + ' ' + SURNAMES[randomHeroData(SURNAMES)]
  }
   
  window.getRandomCoat = function () {
    return COATS_COLOR[randomHeroData(COATS_COLOR)]
  }
  
  window.getRandomEyes = function () {
    return EYES_COLOR[randomHeroData(EYES_COLOR)]
  }
    
  window.getRandomFireball = function () {
    return FIREBALLS_COLOR[randomHeroData(NAMES)]
  }
  
  window.setColorHeroes = function (element, inputElement, color) {
    inputElement.value = color;    
    if (element.tagName.toLowerCase() === 'div') {
      element.style.backgroundColor = color;
    } else {
      element.style.fill = color;
    }  
  }  
})();
