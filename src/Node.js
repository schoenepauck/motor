function NodePhysics (options)
{
	this.friction = options.friction || 0.9;
	this.bounceFriction = options.bouceFriction || 0.75;
	this.minSpeed = options.minSpeed || 0.1;
	this.maxSpeed = options.maxSpeed || 80.0;
	this.minSpeedSquared = this.minSpeed * this.minSpeed;
	this.maxSpeedSquared = this.maxSpeed * this.maxSpeed;
}	


function Node (context, options)
{
  this.pos = new Vec2();
  this.pos.x = options.x || 0.0;
  this.pos.y = options.y || 0.0;
  this.velocity = new Vec2();
  // Start with some random velocity
  /*
  var dir = random(TWO_PI);
  this.velocity.x = sin(dir) * 1;
  this.velocity.y = cos(dir) * 1;
  */
  this.color = options.color || "#ffffff";
  this.size = options.size || 4;
  this.physics = options.physics || new NodePhysics();
}


Node.prototype.applyForce = function (force)
{
  this.velocity.add(force);
  
  // add some jitter
  var jitter = new Vec2(random(1), random(1));
  jitter.mult(0.04);
  this.velocity.add(jitter)
};


Node.prototype.update = function (context)
{
  var speedSquared = this.velocity.lengthSquared();
  if (speedSquared > 0.0)
  {
    if (speedSquared < this.physics.minSpeedSquared)
      this.velocity.zero();
    else
    {
      this.velocity.mult(this.physics.friction);
      this.pos.add(this.velocity);
    }
  }
  
  // Bounce off context edges
  if (this.pos.x < this.size)
  {
    this.pos.x = this.size;
    this.velocity.x *= -1;
    this.velocity.mult(this.physics.bounceFriction);
  }
  else if (this.pos.x > context.width - this.size)
  {
    this.pos.x = context.width - this.size;
    this.velocity.x *= -1;
    this.velocity.mult(this.physics.bounceFriction);
  }
  if (this.pos.y < this.size)
  {
    this.pos.y = this.size;
    this.velocity.y *= -1;
    this.velocity.mult(this.physics.bounceFriction);
  }
  else if (this.pos.y > context.height - this.size)
  {
    this.pos.y = context.height - this.size;
    this.velocity.y *= -1;
    this.velocity.mult(this.physics.bounceFriction);
  }
};


Node.prototype.draw = function (context)
{
  context.beginPath();
  context.fillStyle = this.color;
  context.arc(this.pos.x, this.pos.y, this.size, 0, TWO_PI);
  context.fill();
};

