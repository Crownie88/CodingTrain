function vector(x,y){
	this.x = x;
	this.y = y;

	this.add = function(vect){
		this.x = this.x + vect.x;
		this.y = this.y + vect.y;
	}

	this.mult = function(n){
		this.x *= n;
		this.y *= n;
	}
}

function Random2D(){
	var xVel = Math.random(1);//Random X-Velocity
	var yVel = Math.random(1);//Random Y-Velocity
	if (Math.random() < 0.5){ //50% chance to have a negative X-Velocity
		xVel = xVel*-1;
	}
	if (Math.random() < 0.5){ //50% chance to have a negative Y-Velocity
		yVel = yVel*-1;
	}
	return new vector(xVel, yVel);
}
