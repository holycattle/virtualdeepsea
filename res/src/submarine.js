function Player() {
	this.image = new Image();
	this.speed = 50;
	this.left = false;
	this.right = false;
	this.up = false;
	this.down = false;
	
	this.keyDown = function(event) {
		if(event.keyCode == 37)
			this.left = true;
		if(event.keyCode == 39)
			this.right = true;
		if(event.keyCode == 38)
			this.up = true;
		if(event.keyCode == 40)
			this.down = true;
	}
}