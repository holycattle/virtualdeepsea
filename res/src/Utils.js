/**
    Removes a number of objects from the array
    @param from The first object to remove
    @param to (Optional) The last object to remove
*/
Array.prototype.remove = function(/**Number*/ from, /**Number*/ to)
{
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

/**
    Removes a specific object from the array
    @param object The object to remove
*/
Array.prototype.removeObject = function(object)
{
    for (var i = 0; i < this.length; ++i)
    {
        if (this[i] === object)
        {
            this.remove(i);
            break;
        }
    }
}

/*distance formula*/
function getDistance(xA, yA, xB, yB) {
    x = Math.pow(xA - xB, 2);
    y = Math.pow(yA - yB, 2);
    return Math.pow(x + y, 1/2);
}

function getDistanceBetweenPoints(p1, p2) {
    x = Math.pow(p1[0] - p2[0], 2);
    y = Math.pow(p1[1] - p2[1], 2);
    return Math.pow(x + y, 1/2);
}

//check if collision == true
function collision(objA, objB) {
    objA_center = objA.getAnchor();
    objB_center = objB.getAnchor();
    x_axis = objA.image.width/2 + objB.image.width/2;
    y_axis = objA.image.height/2 + objB.image.height/2;
    if(x_axis <= getDistance(objA_center[0], 0, objB_center[0], 0) || y_axis <= getDistance(0, objA_center[1], 0, objB_center[1])) {
        return false;
    } else return true;
}