function Particle(x,y){
	this.pos = new vector(x,y);
	
	this.acc = new vector(0,0);

	this.applyForce = function(force){
		this.acc.add(force);
	}

	this.done = function(){
		return this.lifespan < 0;
	}

	this.update = function(){
		if (!this.firework){
			this.vel.mult(0.9);
			this.lifespan -=4;
		}
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}

	this.show = function(){
		drawCircle(this.pos.x, this.pos.y, 4, this.color.r, this.color.g, this.color.b);
	}

	this.showExplosion = function(){
		drawOpacCircle(this.pos.x, this.pos.y, 3, this.color.r, this.color.g, this.color.b, this.lifespan/255);
	}
}