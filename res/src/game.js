var canvas = document.getElementById('gameCanvas');
var width = canvas.width, height = canvas.height;
var context = canvas.getContext('2d');

function loadBackground(src) {
	var bg = new Image();
	bg.onload = function() {
		context.drawImage(this, 0, 0);
	}
	bg.src = src;
}

function clear() {
	context.fillStyle = '#d0e7f9';
	context.beginPath(); //begin drawing
	//canvas_context.rect(0, 0, width, height);
	loadBackground('../res/img/deepsea.bmp');
	context.closePath(); //end drawing
	context.fill();
}

clear();