/**
    The ApplicationManager is used to manage the application itself.
    @author <a href="mailto:matthewcasperson@gmail.com">Matthew Casperson</a>
    @class
*/

background_img = new Image();
background_img.src = "../res/img/deepsea.bmp";

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
        return this;
    }; //z = 1 because this is not in the background
}
