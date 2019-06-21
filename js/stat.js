'use strict';
(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var X_CLOUD = 100;
  var Y_CLOUD = 10;
  var SHADOW = 10;

  var COLUMN_DIST = 50;
  var COLUMN_WIDTH = 40;
  var MAX_COLUMN_X = 140;
  var MAX_COLUMN_Y = 90;
  var MAX_COLUMN_HEIGHT = 150;
  var columnsResultHeight = [];


  var renderCloud = function (ctx, x, y, cloudWidth, cloudHeight, cloudColor) {
    ctx.fillStyle = cloudColor;
    ctx.fillRect(x, y, cloudWidth, cloudHeight);
  };

  var renderWinMessage = function (ctx, xText, yText, winMessage) {
    ctx.fillStyle = '#000000';
    ctx.font = ('16px PT Mono');
    ctx.textBaseline = 'hanging';
    ctx.fillText(winMessage, xText, yText);
  };

  window.renderStatistics = function (ctx, names, times) {

    renderCloud(ctx, X_CLOUD + SHADOW, Y_CLOUD + SHADOW, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, X_CLOUD, Y_CLOUD, CLOUD_WIDTH, CLOUD_HEIGHT, '#ffffff');
    renderWinMessage(ctx, 120, 30, 'Ура вы победили!');
    renderWinMessage(ctx, 120, 50, 'Список результатов:');


    var maxColumnPoint = Math.round(times[0]);
    for (var i = 1; i < times.length; i++) {
      if (Math.round(times[i]) > maxColumnPoint) {
        maxColumnPoint = Math.round(times[i]);
      }
    }

    for (var j = 0; j < times.length; j++) {
      columnsResultHeight[j] = Math.round(times[j]) * MAX_COLUMN_HEIGHT / maxColumnPoint;

      ctx.fillStyle = '#000000';
      ctx.font = ('16px PT Mono');
      ctx.textBaseline = 'hanging';
      ctx.fillText(Math.round(times[j]), MAX_COLUMN_X + (COLUMN_DIST + COLUMN_WIDTH) * j, MAX_COLUMN_HEIGHT - columnsResultHeight[j] + MAX_COLUMN_Y - 20);

      ctx.fillStyle = 'rgba(0, 0, 255,' + Math.random() + ')';
      if (names[j] === 'Вы') {
        ctx.fillStyle = 'red';
      }

      ctx.fillRect(MAX_COLUMN_X + (COLUMN_DIST + COLUMN_WIDTH) * j, MAX_COLUMN_HEIGHT - columnsResultHeight[j] + MAX_COLUMN_Y, COLUMN_WIDTH, columnsResultHeight[j]);

      ctx.fillStyle = '#000000';
      ctx.fillText(names[j], MAX_COLUMN_X + (COLUMN_DIST + COLUMN_WIDTH) * j, 250);
    }
  };
})();
