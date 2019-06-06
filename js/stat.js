var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var x = 100;
var y = 10;
var shadow = 10;
var names = ['Оля', 'Илья', 'Чили', 'ХЗ'];

window.renderCloud = function (ctx, x, y, CLOUD_WIDTH, CLOUD_HEIGHT, cloudColor) {
	console.log('3');
  ctx.fillStyle = cloudColor;
  ctx.fillRect (x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

window.renderWinMessage = function (ctx, winMessage, xText, yText) {
  ctx.fillStyle = '#000000';
  ctx.font = ('16px PT Mono');
  ctx.textBaseline = 'hanging';
  ctx.fillText(winMessage, xText, yText);
}

function inRad(num) {
	//я ведь говорил, что функция принимает угол в радианах?
	return num * Math.PI / 180;
}


window.renderStatistics = function(ctx) {
  console.log('1');
  renderCloud(ctx, x + shadow, y + shadow, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)' );
  renderCloud(ctx, x, y, CLOUD_WIDTH, CLOUD_HEIGHT, '#ffffff'); 
  renderWinMessage(ctx, 'Ура вы победили!', 120 , 30);
  renderWinMessage(ctx, 'Список результатов:', 120, 50);
	
  var delta = 0;
  for (var i=0; i < names.length; i++) {
	delta += 100;
  	ctx.fillStyle = '#000000';
  	ctx.font = ('16px PT Mono');
	ctx.textBaseline = 'hanging';
	ctx.fillText(names[i], 40 + delta, 220);
  }
	
 // ctx.translate(50, 500);
  ctx.rotate(-0.3);
  ctx.fillStyle = 'red';	
  ctx.fillRect (100, 100, 100, 40);
}


