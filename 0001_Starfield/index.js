//Size of canvas
var Width = 800;
var Height = 800;

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

var stars = [];
var starCount = 800;

//Setting initial data
function setup(){
	SetCanvas(Width, Height);
	clearCanvas();
	for (var i = 0; i < starCount; i++){
		stars.push(new Star());
	}
	draw();
	Background(0, 0, 0);
}

function draw(){
	Background(0, 0, 0);
	for (var i = stars.length-1; i >= 0; i--){
		stars[i].update();
		stars[i].show();
		if (stars[i].done()){
			stars.splice(i, 1);
		}
	}
	setTimeout(draw, 10);
}