/**
    The ApplicationManager is used to manage the application itself.
    @author <a href="mailto:matthewcasperson@gmail.com">Matthew Casperson</a>
    @class
*/

background_img = new Image();
background_img.src = "../res/img/deepsea.bmp";

vampire_squid = new Image();
vampire_squid.src = "../res/img/vampiresquid.gif";

function ApplicationManager()
{
    /**
        Initialises this object
        @return A reference to the initialised object
    */
    this.startupApplicationManager = function()
    {

        this.background = new VisualGameObject().startupVisualGameObject(background_img, 0, 0, 0);
		this.submarine = new Submarine().startupSubmarine();
        this.vampiresquid = new Creature().startupCreature(vampire_squid, 200, 50, 1, 'wikitemplate.html');
        console.log(this.vampiresquid.url);
        
        return this;
    }; //z = 1 because this is not in the background
}
