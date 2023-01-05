function setup()
{
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	noStroke();
}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
  }
function draw()
{
	background("#0e0e30");
	fill(255);
	paint(windowWidth/2,windowHeight/2,243,0);
	noLoop();
}
function paint(cx,cy,len,it)
{
	if(it==MAX)
	{
		rect(cx,cy,len*3,len*3);
		return;
	}
	paint(cx,cy-len,len/3,it+1);
	paint(cx,cy+len,len/3,it+1);
	paint(cx-len,cy,len/3,it+1);
	paint(cx+len,cy,len/3,it+1);
	paint(cx,cy,len/3,it+1);
}
let MAX=0;
function mousePressed()
{
	if(mouseX<width/2 && MAX>0)MAX--;
	if(mouseX>width/2 && MAX<5)MAX++;
	loop();
}