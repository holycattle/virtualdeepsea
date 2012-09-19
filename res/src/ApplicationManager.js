/**
    The ApplicationManager is used to manage the application itself.
    @author <a href="mailto:matthewcasperson@gmail.com">Matthew Casperson</a>
    @class
*/
function ApplicationManager()
{
    /**
        Initialises this object
        @return A reference to the initialised object
    */
    this.startupApplicationManager = function()
    {
		this.submarine = new Submarine().startupVisualGameObject(img_src, 0, 0, 1);
    }; //z = 1 because this is not in the background
}
