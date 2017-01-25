function DoMap(val, minStart, maxStart, minEnd, maxEnd){
	//Determine difference between min~max of start
	var maxStartRange = maxStart - minStart;
	//Determine difference between min~max of end
	var maxEndRange = maxEnd - maxStart;
	var result = maxEndRange * (val / maxStartRange);
	return result;
}
function Star(){
	//Subtract half of the screen to get everything based around the center
	this.x = Math.floor((Math.random() * Width) + 1) - Width/2;
	this.y = Math.floor((Math.random() * Height) + 1) - Height/2;
	this.z = Math.floor((Math.random() * Width) + 1);
	this.pz = this.z;
	this.size = [8,7,6,5,4,3,2,1,0];

	this.update = function(){
		this.z = this.z -5;
		if (this.z < 1){
			this.z = Width;
			this.x = Math.floor((Math.random() * Width) + 1) - Width/2;
			this.y = Math.floor((Math.random() * Height) + 1) - Height/2;
		}
		this.pz = this.z;
	}
	this.show = function(){
		var sx = DoMap((this.x / this.z), 0, 1, 0, Width)+(Width/2);
		var sy = DoMap((this.y / this.z), 0, 1, 0, Height)+(Height/2);
		var r = Math.abs(Math.floor(8 * (this.z / Width))-8);
		drawCircle(sx, sy, r, 255, 255, 255);		
	}

	this.done = function(){
		return false;
	}
}