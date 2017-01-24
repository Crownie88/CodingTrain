function removeFromArray(arr,element){
	for (var i = arr.length; i >= 0; i--){
		if (arr[i] == element){
			arr.splice(i,1);
		}
	}
}

var cols = 100;
var rows = 100;
var Width = 800;
var Height = 800;
var grid = new Array(cols);

var openSet = [];
var closedSet = [];
var start;
var end;
var w,h;
var mypath = [];
var isDone = false;
var noSolution = false;

function setup(){
	SetCanvas(Width, Height);
	clearCanvas();
	Background(255,255,255);
	
	w = Width / cols;
	h = Height / rows;
	// Init 2d array
	isDone = false;
	noSolution = false;
	openSet = [];
	closedSet = [];
	mypath = [];
	grid = new Array(cols);

	for (var i=0; i < cols; i++){
		grid[i] = new Array(rows);
		for (var j=0; j<rows; j++){
			//Fill 2d array
			grid[i][j] = new Spot(i,j,w,h);
		}
	}

	start = grid[0][0];
	end = grid[cols-1][rows-1];
	start.wall = false;
	end.wall = false;
	openSet.push(start);

	for (var i=0; i<cols; i++){
		for (var j=0; j<rows; j++){
			grid[i][j].addNeighbors(grid);
		}
	}
	draw();
	// console.log(grid);
}

function showPath(){
	drawPath(mypath);
	// for (var i=0; i<mypath.length; i++){
	// 	var pt = mypath[i];
	// 	drawCircle(pt.i*pt.width, pt.j*pt.height, pt.width, 255,0,0);
	// 	// mypath[i].show(0,0,255);
	// }
}

function draw(){
	if (openSet.length > 0){
		clearCanvas();
		var winner = 0;
		for (var i = 0; i < openSet.length; i++){
			if (openSet[i].f < openSet[winner].f){
				winner = i;
			}
		}

		var current = openSet[winner];

		if (openSet[winner] === end){
			isDone = true;
			console.log("DONE!");
			// Background(0);
		}
		
		removeFromArray(openSet, current);
		closedSet.push(current);

		var neighbors = current.neighbors;
		for (var i=0; i<neighbors.length; i++){
			var neighbor = neighbors[i];

			if (!closedSet.includes(neighbor) && !neighbor.wall){
				var tempG = current.g+1;

				var newPath = false;
				if (openSet.includes(neighbor)){
					if (tempG < neighbor.g){
						neighbor.g = tempG;
						newPath = true;
					}
				}else{
					neighbor.g = tempG;
					newPath = true;
					openSet.push(neighbor);
				}
				if (newPath){
					neighbor.h = heuristic(neighbor, end);
					neighbor.f = neighbor.g + neighbor.h;
					neighbor.previous = current;
				}
			}
		}
	}else{
		noSolution = true;
		isDone = true;
	}

	for (var i=0; i<cols; i++){
		for (var j=0; j<rows; j++){
			if (grid[i][j].wall){
			 grid[i][j].show(255,255,0);
			}
		}
	}

	for (var i=0; i<closedSet.length; i++){
		closedSet[i].show(255,0,0);
	}

	for (var i=0; i<openSet.length; i++){
		openSet[i].show(0,255,0);
	}

	if (!noSolution){
		mypath = [];
		var temp = current;
		mypath.push(temp); 
		while (temp.previous){
			mypath.push(temp.previous);
			temp = temp.previous;
		}
		// setTimeout(setup, 2000);
	}
	showPath();	
	if (!isDone){
		// draw();
		setTimeout(draw, 10);
	}else{
		setTimeout(setup, 2000);
	}
}