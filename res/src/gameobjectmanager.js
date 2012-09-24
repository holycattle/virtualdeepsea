function GameObjectManager() {
	this.gameObjects = new Array();
	this.lastFrame = new Date().getTime();
	this.xScroll = 0;
	this.yScroll = 0;
	this.applicationManager = null; //type HTMLCanvasElement
	this.canvas = null;
	this.context2D = null;
	this.backBuffer = null;
	this.backBufferContext2D = null;
	
	this.startupGameObjectManager = function() {
		g_GameObjectManager = this;
		
		this.canvas = document.getElementById('backgroundCanvas'); //whatever the name of the canvas is
        //this.canvas.width = this.canvas.style.width = window.innerWidth;
        //this.canvas.height = this.canvas.style.height = window.innerHeight - 35;
        
        document.onkeydown = function(event){g_GameObjectManager.keyDown(event);}
        document.onkeyup = function(event){g_GameObjectManager.keyUp(event);}
        
        
		this.context2D = this.canvas.getContext('2d');
        
        this.context2D.canvas.height = window.innerHeight - 35;
        this.context2D.canvas.width  = window.innerWidth;
        
        this.info_iframe = document.getElementById('infoIframe');
        this.info_iframe.height = this.context2D.canvas.height;
        this.info_iframe.width = this.context2D.canvas.width / 2 - 35;
        
        console.log(this.context2D);
		this.backBuffer = document.createElement('canvas'); //name of the canvas
		this.backBuffer.width = this.canvas.width;
		this.backBuffer.height = this.canvas.height;
		this.backBufferContext2D = this.backBuffer.getContext('2d');
		this.applicationManager = new ApplicationManager().startupApplicationManager();
		setInterval(function(){g_GameObjectManager.draw();}, SECONDS_BETWEEN_FRAMES);
        
		return this;
	}
	
	this.draw = function() {
		// calculate the time since the last frame
		var thisFrame = new Date().getTime();
		var dt = (thisFrame - this.lastFrame)/1000;
		this.lastFrame = thisFrame;
		
		// clear the drawing contexts
		this.backBufferContext2D.clearRect(0, 0, this.backBuffer.width, this.backBuffer.height);
		this.context2D.clearRect(0, 0, this.canvas.width, this.canvas.height);
        //console.log(this.gameObjects);
        
		for(x in this.gameObjects) {
            //console.log(this.gameObjects[1]);
			if(this.gameObjects[x].draw) {
                //console.log('draw sub!');
                //alert();
                if(this.gameObjects[x].update)
                    this.gameObjects[x].update(dt, this.backBufferContext2D, this.xScroll, this.yScroll);
			}
		}
		
		for(x in this.gameObjects) {
			if(this.gameObjects[x].draw) {
				this.gameObjects[x].draw(dt, this.backBufferContext2D, this.xScroll, this.yScroll);
			}
			
		}
		
        var x_axis = 0, y_axis = 0;
        var player = null;
        //check for collision
		for(x in this.gameObjects) {
			if(this.gameObjects[x] instanceof Creature) {
                //console.log('found a Creature at ' + [this.gameObjects[x].x, this.gameObjects[x].y]);
				if(collision(this.applicationManager.submarine, this.gameObjects[x])) {
                    
                }
			}
			
		}
            //if collide == true
                //load Creature.src into iframe
        
		//copy the back buffer to the displayed canvas
		this.context2D.drawImage(this.backBuffer, 0, 0);
	}
	
	this.addGameObject = function(gameObject) {
		this.gameObjects.push(gameObject);
		this.gameObjects.sort(function(a, b) {return a.zOrder - b.zOrder;});
	}
	
	this.removeGameObject = function(gameObject) {
		this.gameObjects.removeObject(gameObject);
	}
	
    this.keyDown = function(event) {
        //console.log(event);
        for (x in this.gameObjects) {
            if (this.gameObjects[x].keyDown) {
                this.gameObjects[x].keyDown(event);
            }
        }
    }

    this.keyUp = function(event) {
        //console.log(event);
        for (x in this.gameObjects) {
            
            if (this.gameObjects[x].keyUp) {
                
                this.gameObjects[x].keyUp(event);
            }
        }
    }
	
}
