function doGetCanvas(){
	return document.getElementById("mycanvas");
}
function doGetContext(canvas){
	if (canvas.getContext){
		return canvas.getContext("2d");
	}else{
		console.log("trouble");
	}
}

function SetCanvas(width, height){
	var canvas = doGetCanvas();
	canvas.width = width;
	canvas.height = height;
}

function clearCanvas(){
	var canvas = doGetCanvas();
	var ctx = doGetContext(canvas);
	ctx.clearRect(0,0,canvas.width, canvas.height);
}

function rgb(r, g, b){
	if (r == undefined){ r = 0;}
	if (g == undefined){ g = 0;}
	if (b == undefined){ b = 0;}
	return "rgb("+r+","+g+","+b+")";
}

function Background(R,G,B){
	var canvas = doGetCanvas();
	var ctx = doGetContext(canvas);
	ctx.fillStyle = rgb(R,G,B);
	ctx.fillRect(0,0,canvas.width, canvas.height);
}

function SetStroke(R,G,B){
	var canvas = doGetCanvas();
	var ctx = doGetContext(canvas);
	ctx.strokeStyle = rgb(R,G,B);
}

function drawCircle(x,y,rad, R,G,B){
	var c = doGetCanvas();
	var ctx = doGetContext(c);
	ctx.beginPath();
	ctx.arc(x, y, rad/2, 0, 2 * Math.PI);
	ctx.fillStyle = rgb(R,G,B);
	ctx.fill();
}

function drawPath(mypath){
	var c = doGetCanvas();
	var ctx = doGetContext(c);
	ctx.beginPath();
	ctx.strokeStyle = rgb(255,0,200);
	ctx.lineCap="round";
	ctx.lineWidth=5;
	// ctx.moveTo(0,0);
	for (var i = 0; i < mypath.length; i++){
		var pt = mypath[i];
		ctx.lineTo(pt.i*pt.width, pt.j*pt.height);
		prev = mypath[i];
	}
	ctx.stroke();
	
}