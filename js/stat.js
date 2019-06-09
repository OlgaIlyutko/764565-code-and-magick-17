var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var xCloud = 100;
var yCloud = 10;
var shadow = 10;

var columnsDist = 50;
var columnWidth = 40;
var maxColumnX = 140;
var maxColumnY = 90;
var maxColumnHeight = 150;
var columnsResultHeight = [];


window.renderCloud = function (ctx, xCloud, yCloud, CLOUD_WIDTH, CLOUD_HEIGHT, cloudColor) {
ctx.fillStyle = cloudColor;
  ctx.fillRect(xCloud, yCloud, CLOUD_WIDTH, CLOUD_HEIGHT); 
};

window.renderWinMessage = function (ctx, xText, yText, winMessage) {
  ctx.fillStyle = '#000000';
  ctx.font = ('16px PT Mono');
  ctx.textBaseline = 'hanging';
  ctx.fillText(winMessage, xText, yText); 
};

window.renderStatistics = function (ctx, names, times) {
  
  renderCloud(ctx, xCloud + shadow, yCloud + shadow, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, xCloud, yCloud, CLOUD_WIDTH, CLOUD_HEIGHT, '#ffffff'); 
  renderWinMessage(ctx, 120, 30, 'Ура вы победили!');
  renderWinMessage(ctx, 120, 50, 'Список результатов:');


  var maxColumnPoint = Math.round(times[0]);
  for (var i = 1; i < times.length; i++) {
      if (Math.round(times[i]) > maxColumnPoint) {
      maxColumnPoint = Math.round(times[i]); }
  }
   
  for (var j = 0; j < times.length; j++) {
    columnsResultHeight[j] = Math.round(times[j]) * maxColumnHeight / maxColumnPoint;
       
    ctx.fillStyle = '#000000';
    ctx.font = ('16px PT Mono');
    ctx.textBaseline = 'hanging';    
    
    ctx.fillText(Math.round(times[j]), maxColumnX + (columnsDist + columnWidth)*j, maxColumnHeight - columnsResultHeight[j] + maxColumnY - 20);
    
    ctx.fillStyle = 'rgba(0, 0, 255,'+ Math.random() +')';
    if (names[j] == 'Вы') {
      ctx.fillStyle = 'red';
    } 
    
    ctx.fillRect (maxColumnX + (columnsDist + columnWidth)*j, maxColumnHeight - columnsResultHeight[j] + maxColumnY, columnWidth, columnsResultHeight[j]);
    
    ctx.fillStyle = '#000000';
    ctx.fillText(names[j], maxColumnX + (columnsDist + columnWidth)*j, 250);
  }
};