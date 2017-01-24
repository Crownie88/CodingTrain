function heuristic(a,b){
	var x = Math.abs(a.i-b.i), y = Math.abs(a.j-b.j);
	return Math.hypot(a.i-b.i, a.j-b.j);
}

function Spot(i,j,width, height){
	this.i = i;
	this.j = j;
	this.f = 0;
	this.g = 0;
	this.h = 0;
	this.width = width;
	this.height = height;
	this.neighbors = [];
	this.previous = undefined;
	this.wall = (Math.random(1) < 0.4);

	this.show = function(R,G,B){
		if (this.wall){
			drawCircle(this.i*this.width, this.j*this.height, this.width, 0,0,0);
		}else{
			// drawCircle(this.i*this.width, this.j*this.height, this.width, R,G,B);
		}
		
	}

	this.addNeighbors = function(grid){
		var i = this.i;
		var j = this.j;
		var CanLeft = i > 0, CanRight = i < cols-1, CanUp = j > 0, CanDown = j < rows-1;
		if (CanRight){
			this.neighbors.push(grid[i+1][j]);
		}
		if (CanLeft){
			this.neighbors.push(grid[i-1][j]);
		}
		if (CanDown){
			this.neighbors.push(grid[i][j+1]);
		}
		if (CanUp){
			this.neighbors.push(grid[i][j-1]);
		}
		if (CanRight && CanUp){
			this.neighbors.push(grid[i+1][j-1]);
		}
		if (CanLeft && CanUp){
			this.neighbors.push(grid[i-1][j-1]);
		}
		if (CanRight && CanDown){
			this.neighbors.push(grid[i+1][j+1]);
		}
		if (CanLeft && CanDown){
			this.neighbors.push(grid[i-1][j+1]);
		}
	}
}