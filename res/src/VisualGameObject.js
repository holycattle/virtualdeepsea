/**
    The base class for all elements that appear in the game.
    @author <a href="mailto:matthewcasperson@gmail.com">Matthew Casperson</a>
    @class
*/
function VisualGameObject()
{
    /**
        The image that will be displayed by this object
        @type Image
    */
    this.image = null;
    this.url = null;
    
    /**
        Draws this element to the back buffer
        @param dt Time in seconds since the last frame
    */
    this.draw = function(/**Number*/ dt, /**CanvasRenderingContext2D*/ context, /**Number*/ xScroll, /**Number*/ yScroll)
    {
        context.drawImage(this.image, this.x - xScroll, this.y - yScroll);
    }
    
    /**
        Initialises this object
        @param image The image to be displayed
    */
    this.startupVisualGameObject = function(/**Image*/ image, /**Number*/ x, /**Number*/ y, /**Number*/ z)
    {
        this.startupGameObject(x, y, z);
        this.image = image;
        return this;
    }
    
    this.startupURLVisualGameObject = function(/**Image*/ image, /**Number*/ x, /**Number*/ y, /**Number*/ z, url)
    {
        this.startupGameObject(x, y, z);
        this.image = image;
        this.url = url;
        return this;
    }
    
    /**
        Clean this object up
    */
    this.shutdownVisualGameObject = function()
    {
        this.shutdownGameObject();
    }
    
    //get the center of the image
    this.getAnchor = function() {
        return [this.x + this.image.width/2, this.y + this.image.height/2];
    }
}
VisualGameObject.prototype = new GameObject;
