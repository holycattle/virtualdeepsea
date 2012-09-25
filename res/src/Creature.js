function Creature() {
    this.url = null; //url to page containing info
    
    this.startupCreature = function(image, x, y, z, url) {
        this.startupVisualGameObject(image, x, y, z);
        this.url = url;
        return this;
    }
}

Creature.prototype = new VisualGameObject;