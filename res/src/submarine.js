/**
    A class to represent the player on the screen
    @original_author <a href="mailto:matthewcasperson@gmail.com">Matthew Casperson</a>
    @class
*/

var submarine_image = new Image();
submarine_image.src = "../res/img/submarine.gif";

function Submarine()
{
    /** The speed that the player moves at
        @type Number
     */
    this.speed = 75;
    /** True if the player is moving left, false otherwise
        @type Boolean
     */
    this.left = false;
    /** True if the player is moving right, false otherwise
        @type Boolean
     */
    this.right = false;
    /** True if the player is moving up, false otherwise
        @type Boolean
     */
    this.up = false;
    /** True if the player is moving down, false otherwise
        @type Boolean
     */
    this.down = false;

    /**
        Initialises this object
    */
    this.startupSubmarine = function()
    {
        this.startupAnimatedGameObject(submarine_image, 0, 0, 1, 1, 30);
        return this;
    }

    /**
        Called when a key is pressed
        @param event Event Object
    */
    this.keyDown = function(event)
    {
        //console.log('submarine keydown!');
        // left
        if (event.keyCode == 37)
            this.left = true;
        // right
        if (event.keyCode == 39)
            this.right = true;
        // up
        if (event.keyCode == 38)
            this.up = true;
        // down
        if (event.keyCode == 40)
            this.down = true;
        console.log(this.getAnchor());
    }

    /**
        Called when a key is pressed
        @param event Event Object
    */
    this.keyUp = function(event)
    {
        //console.log('submarine keyup!');
        // left
        if (event.keyCode == 37)
            this.left = false;
        // right
        if (event.keyCode == 39)
            this.right = false;
         // up
        if (event.keyCode == 38)
            this.up = false;
        // down
        if (event.keyCode == 40)
            this.down = false;
    }

    /**
        Updates the object
        @param dt The time since the last frame in seconds
        @param context The drawing context
        @param xScroll The global scrolling value of the x axis
        @param yScroll The global scrolling value of the y axis
    */
	this.update = function (/**Number*/ dt, /**CanvasRenderingContext2D*/context, /**Number*/ xScroll, /**Number*/ yScroll)
    {
        //console.log('update sub');
        if (this.left)
            this.x -= this.speed * dt;
        if (this.right)
            this.x += this.speed * dt;
        if (this.up)
            this.y -= this.speed * dt;
        if (this.down)
            this.y += this.speed * dt;

        // keep the player bound on the screen
        if (this.x > context.canvas.width - this.frameWidth)
            this.x = context.canvas.width - this.frameWidth;
        if (this.x < 0)
            this.x = 0;
        if (this.y > context.canvas.height - this.image.height)
            this.y = context.canvas.height - this.image.height;
        if (this.y < 0)
            this.y = 0;
    }
    
    //make constructor
}

Submarine.prototype = new AnimatedGameObject;
