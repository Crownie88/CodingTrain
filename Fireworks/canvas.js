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

function rgba(r, g, b, a){
	if (r == undefined){ r = 0;}
	if (g == undefined){ g = 0;}
	if (b == undefined){ b = 0;}
	if (a == undefined){ a = 1;}
	return "rgba("+r+","+g+","+b+","+a+")";
}

function HSVtoRGB(h, s, v) {
	var r, g, b, i, f, p, q, t;
	if (arguments.length === 1) {
		s = h.s, v = h.v, h = h.h;
	}
	i = Math.floor(h * 6);
	f = h * 6 - i;
	p = v * (1 - s);
	q = v * (1 - f * s);
	t = v * (1 - (1 - f) * s);
	switch (i % 6) {
		case 0: r = v, g = t, b = p; break;
		case 1: r = q, g = v, b = p; break;
		case 2: r = p, g = v, b = t; break;
		case 3: r = p, g = q, b = v; break;
		case 4: r = t, g = p, b = v; break;
		case 5: r = v, g = p, b = q; break;
	}
	return {
		r: Math.round(r * 255),
		g: Math.round(g * 255),
		b: Math.round(b * 255)
	};
}

function Background(R,G,B){
	var canvas = doGetCanvas();
	var ctx = doGetContext(canvas);
	ctx.fillStyle = rgb(R,G,B);
	ctx.fillRect(0,0,canvas.width, canvas.height);
}

function OpacBG(R,G,B,A){
	var canvas = doGetCanvas();
	var ctx = doGetContext(canvas);
	ctx.fillStyle = rgba(R,G,B,A)
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

function drawOpacCircle(x,y,rad, R,G,B,A){
	var c = doGetCanvas();
	var ctx = doGetContext(c);
	ctx.beginPath();
	ctx.arc(x, y, rad/2, 0, 2 * Math.PI);
	ctx.fillStyle = rgba(R,G,B,A);
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