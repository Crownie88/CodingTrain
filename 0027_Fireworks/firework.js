function Color(){
	this.r = Math.round(Random(10,250));
	this.g = Math.round(Random(10,250));
	this.b = Math.round(Random(10,250));
}
function Firework(){

	//Creating a random RGB color for the fireworks
	this.color = new Color();
	this.firework = new Particle((Math.random(1) * 580)+10,Height, this.color, true);
	this.exploded = false;
	this.particles = [];

	this.update = function(){
		if (!this.exploded){
			this.firework.applyForce(gravity);
			this.firework.update();

			if (this.firework.vel.y >= 0){
				this.exploded = true;
				this.explode();
			}
		}
		for (var i = this.particles.length-1; i >= 0; i--){
			this.particles[i].applyForce(gravity);
			this.particles[i].update();
			if (this.particles[i].done()){
				this.particles.splice(i,1);
			}
		}
	}

	this.done = function(){
		return this.exploded && (this.particles.length === 0);
	}

	this.explode = function(){
		for (var i = 0; i < 100; i++){
			var p = new Particle(this.firework.pos.x, this.firework.pos.y, this.color, false);
			this.particles.push(p);
		}
	}

	this.show = function(){
		if (!this.exploded){
			this.firework.show();
		}
		for (var i = 0; i < this.particles.length; i++){
			this.particles[i].showExplosion();
		}
	}
}