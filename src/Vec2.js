function Vec2 (x, y)
{
  this.x = x || 0.0;
  this.y = y || 0.0;
  this.oldX = 0.0;
  this.oldY = 0.0;
  this.savedLengthSquared = 0.0;
  this.savedLength = 0.0;
}


Vec2.prototype.clone = function ()
{
  return new Vec2(this.x, this.y);
}


Vec2.prototype.lengthSquared = function ()
{
  if ((this.oldX != this.x) || (this.oldY != this.y))
  {
    this.oldX = this.x;
    this.oldY = this.y;
    this.savedLengthSquared = this.x * this.x + this.y * this.y;
    this.savedLength = Math.sqrt(this.savedLengthSquared);
  }
  return this.savedLengthSquared;
};


Vec2.prototype.length = function ()
{
  if ((this.oldX != this.x) || (this.oldY != this.y))
  {
    this.oldX = this.x;
    this.oldY = this.y;
    this.savedLengthSquared = this.x * this.x + this.y * this.y;
    this.savedLength = Math.sqrt(this.savedLengthSquared);
  }
  return this.savedLength;
};


Vec2.prototype.zero = function ()
{
  this.x = this.y = 0.0;
};


Vec2.prototype.add = function (v)
{
  this.x += v.x;
  this.y += v.y;
};


Vec2.prototype.sub = function (v)
{
  this.x -= v.x;
  this.y -= v.y;
}

Vec2.prototype.mult = function (s)
{
  this.x *= s;
  this.y *= s;
};

Vec2.prototype.normalize = function ()
{
  var l = this.length();
  if (l != 0)
  {
    this.x /= l;
    this.y /= l;
  }
}
