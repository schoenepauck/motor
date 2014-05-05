function Node (context, options)
{
  this.pos = new Vec2();
  this.pos.x = options.x || random(context.width);
  this.pos.y = options.y || random(context.height);
  this.velocity = new Vec2();
  // Start with some random velocity
  /*
  var dir = random(TWO_PI);
  this.velocity.x = sin(dir) * 1;
  this.velocity.y = cos(dir) * 1;
  */
  this.color = options.color || "#ffffff";
  this.size = options.size || 4;
}


Node.prototype.applyForce = function (force)
{
  this.velocity.add(force);
  
  // add some jitter
  var jitter = new Vec2(random(1), random(1));
  jitter.mult(0.04);
  this.velocity.add(jitter)
};


Node.prototype.update = function ()
{
  var speedSquared = this.velocity.lengthSquared();
  if (speedSquared > 0.0)
  {
    if (speedSquared < MIN_SPEED_SQUARED)
      this.velocity.zero();
    else
    {
      this.velocity.mult(FRICTION);
      this.pos.add(this.velocity);
    }
  }
  
  if (this.pos.x < this.size)
  {
    this.pos.x = this.size;
    this.velocity.x *= -1;
    this.velocity.mult(BOUNCE_FRICTION);
  }
  else if (this.pos.x > sketch.width - this.size)
  {
    this.pos.x = sketch.width - this.size;
    this.velocity.x *= -1;
    this.velocity.mult(BOUNCE_FRICTION);
  }
  if (this.pos.y < this.size)
  {
    this.pos.y = this.size;
    this.velocity.y *= -1;
    this.velocity.mult(BOUNCE_FRICTION);
  }
  else if (this.pos.y > sketch.height - this.size)
  {
    this.pos.y = sketch.height - this.size;
    this.velocity.y *= -1;
    this.velocity.mult(BOUNCE_FRICTION);
  }
};


Node.prototype.draw = function (context)
{
  context.beginPath();
  context.fillStyle = this.color;
  context.arc(this.pos.x, this.pos.y, this.size, 0, TWO_PI);
  context.fill();
};

