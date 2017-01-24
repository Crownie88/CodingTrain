var fireworks = [];
var gravity;

//Size of canvas
var Width = 800;
var Height = 600;

//Random range
function Random(a,b){
	if (b === undefined){
		b = a;
		a = 0;
	}
	if (a > b){
		var t = a;
		a = b;
		b = t;
	}
	return (Math.random() * (b - a) + a)
}

//Setting initial data
function setup(){
	SetCanvas(Width, Height);
	clearCanvas();
	gravity = new vector(0,0.2);
	draw();
	Background(0,0,0);
}

function draw(){
	OpacBG(0,0,0,25/255);
	if (Math.random(1) < 0.09){
		fireworks.push(new Firework());
	}
	
	for (var i = fireworks.length-1; i >= 0; i--){
		fireworks[i].update();
		fireworks[i].show();
		if (fireworks[i].done()){
			fireworks.splice(i,1);
		}
	}
	// draw();
	setTimeout(draw, 10);
}