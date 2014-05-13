/**
 * A 2D Vector class with a basic set of vector math methods.
 */
function Vec2 (x, y)
{
	this.x = x || 0.0;
	this.y = y || 0.0;
	this.oldX = 0.0;
	this.oldY = 0.0;
	this.cachedLengthSquared = 0.0;
	this.cachedLength = 0.0;
}



/**
 * create and return a copy of the vector.
 */
Vec2.prototype.clone = function ()
{
	return new Vec2(this.x, this.y);
}


/**
 * Get the squared length (magnitude) of the vector.
 * The squared length of the vector is cached; unless the x and/or y
 * values have changed, the cached length is returned.
 */
Vec2.prototype.lengthSquared = function ()
{
	if ((this.oldX != this.x) || (this.oldY != this.y))
	{
		this.oldX = this.x;
		this.oldY = this.y;
		this.cachedLengthSquared = this.x * this.x + this.y * this.y;
		this.cachedLength = Math.sqrt(this.cachedLengthSquared);
	}
	return this.cachedLengthSquared;
};


/**
 * Get the length (magnitude) of the vector.
 * The length of the vector is cached; unless the x and/or y
 * values have changed, the cached length is returned.
 */
Vec2.prototype.length = function ()
{
	if ((this.oldX != this.x) || (this.oldY != this.y))
	{
		this.oldX = this.x;
		this.oldY = this.y;
		this.cachedLengthSquared = this.x * this.x + this.y * this.y;
		this.cachedLength = Math.sqrt(this.cachedLengthSquared);
	}
	return this.cachedLength;
};


/**
 *  Return the direction (rotation) in radians
 */
Vex2.prototype.dir = function ()
{
	return Math.atan2(this.y, this.x);
}


/**
 * Set vector to zero (x=0, y=0)
 */
Vec2.prototype.zero = function ()
{
	this.x = this.y = 0.0;
};


/**
 * Add another vector
 */
Vec2.prototype.add = function (vector)
{
	this.x += vector.x;
	this.y += vector.y;
};


/**
 * Subtract another vector
 */
Vec2.prototype.sub = function (vector)
{
	this.x -= vector.x;
	this.y -= vector.y;
};


/**
 * Multiply vector with a scalar value
 */
Vec2.prototype.mult = function (scalar)
{
	this.x *= scalar;
	this.y *= scalar;
};


/**
 * Calculate and return the dot product with the supplied vector
 */
Vec2.prototype.dot = function (vector)
{
	return this.x * vector.x + this.y * vector.mY;
}


/**
 * Normalize vector (set length to 1 without changing direction)
 */
Vec2.prototype.normalize = function ()
{
	var l = this.length();
	if (l != 0)
	{
		this.x /= l;
		this.y /= l;
	}
};


/**
 * Rotate vector by angle (in radians)
 */
Vec2.prototype.rotate = function (angle)
{
	var s = Math.sin(angle);
	var c = Math.cos(angle);
	var xTemp = this.x * c - this.y * s;
	this.y = this.x * s + this.y * c;
	this.x = xTemp;
}
