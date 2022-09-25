function setup()
{
	createCanvas(1650,900,WEBGL);
	noStroke();
}
function draw()
{
	background(30);
	rotateX(frameCount * 0.01);
  	rotateY(frameCount * 0.01);
  	lights();
	fill(255);
	paint(81,0);
	
}
function paint(len,it)
{
	if(it==MAX){
		box(len*3);
		return
	}
	for (let x = -len; x <= +len; x += len) {
  		for (let y = -len; y <= +len; y += len) {
    		for (let z = -len; z <= +len; z += len) {
			    if (x === 0 && y === 0 && z === 0) continue;
				if (x === 0 && y === 0 && z !== 0) continue;
				if (x === 0 && y !== 0 && z === 0) continue;
				if (x !== 0 && y === 0 && z === 0) continue;
			    translate(+x, +y, +z);
		      	paint(len / 3, it + 1);
		     	translate(-x, -y, -z);
      }
 	 }
	}	
}
let MAX = 0;
function mousePressed() {
  if (mouseX < width / 2 && MAX > 0) MAX--;
  if (mouseX > width / 2 && MAX < 3) MAX++;
  loop();
}