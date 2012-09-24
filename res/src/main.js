var FPS = 30;
var SECONDS_BETWEEN_FRAMES = 1/FPS;
var g_GameObjectManager = null;
var g_image = new Image();
//g_image.src = "path/to/image";

window.onload = init;

function init() {
	app = new GameObjectManager().startupGameObjectManager();
}