const fps = 30;

var x = 0, y = 0;
var xVel = 1, yVel = 1;

var imgBg = new Image();
imgBg.src = "../res/img/deepsea.bmp";
var imgSub = new Image();
imgSub.src = "../res/img/submarine.gif";

var canvas = null, context = null;

window.onload = init;

function init() {
	canvas = document.getElementById('backgroundCanvas');
	canvas.width = window.innerWidth/2 - 50;
	canvas.height = window.innerHeight - 20;
	context = canvas.getContext('2d');
	drawBackground();
	loadSubmarine();
	//setInterval(draw, 1000/fps);
}

function drawBackground() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.drawImage(imgBg, x, y);
}

function loadSubmarine() {
	context.drawImage(imgSub, x, y);
}