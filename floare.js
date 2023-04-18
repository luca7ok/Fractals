function setup(){
    createCanvas(windowWidth, windowHeight);
    smooth();
    ellipseMode(RADIUS);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);    
}
function drawCircleX1(x , y,r ,nr)
 {
    ellipse(x, y, r);
    if(nr>3)
    {
        drawCircleX1(x - r/2, y, r/2, nr-1);
        drawCircleX1(x + r/2, y, r/2, nr-1);

    }
 }
 function drawCircleX2(x,y,r,nr)
 {
    ellipse(x,y,r);
    if(nr>3)
    {
        drawCircleX2(x, y + r/2, r/2, nr-1);
        drawCircleX2(x, y - r/2, r/2, nr-1);
    }
 }
 function drawCircleY(x , y,r ,nr)
 {
    ellipse(x, y, r);
    if(nr>3)
    {
        drawCircleY(x - r/2, y, r/2, nr-1);
        drawCircleY(x + r/2, y, r/2, nr-1);
        drawCircleY(x, y - r/2, r/2, nr-1);
        drawCircleY(x, y + r/2, r/2, nr-1);

    }
 }



function draw(){

    background("#0e0e30");
    var nr = int(map(mouseX, 0,windowWidth, 0, 10)); 
    var nr2 = int(map(mouseY,0,windowHeight,0,10));

    drawCircleX1(windowWidth/2,windowHeight/2,windowHeight/2,nr);
    drawCircleX2(windowWidth/2,windowHeight/2,windowHeight/2,nr);
    fill(42,110,249,80);
}



