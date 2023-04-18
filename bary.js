function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
  }
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

function draw()
{
    var l=6*windowWidth/10;
    var A={
        x:windowWidth/2,
        y:windowHeight-l*Math.sqrt(3)/2
    };
    var B={
        x:2*windowWidth/10,
        y:windowHeight-windowHeight/10
    };
   
    var C={
        x:windowWidth-2*windowWidth/10,
        y:windowHeight-windowHeight/10
    };
    background('#6942EF');
    fill ('#6942EF');
    stroke(0,0,0,210);
    strokeWeight(5);
    triangle(A.x,A.y,B.x,B.y,C.x,C.y);
   
    bary(A.x,A.y,B.x,B.y,C.x,C.y,1);
  
}

function bary(xA,yA,xB,yB,xC,yC,nr)
{
    console.log(MAX,nr);
    if(MAX==0)
    return;
    let xG=(xA+xB+xC)/3;
    let yG=(yA+yB+yC)/3;

    let xAB=(xA+xB)/2;
    let yAB=(yA+yB)/2;

    let xAC=(xA+xC)/2;
    let yAC=(yA+yC)/2;

    let xBC=(xB+xC)/2;
    let yBC=(yB+yC)/2;
   
    if(nr==MAX)
    {
        stroke(0,0,0,210);
        strokeWeight(5);
        line(xA,yA,xBC,yBC);
        line(xB,yB,xAC,yAC);
        line(xC,yC,xAB,yAB);
        return;
    }
    

    bary(xA,yA,xG,yG,xAC,yAC,nr+1);
    bary(xG,yG,xC,yC,xAC,yAC, nr+1);
    bary(xG,yG,xBC,yBC,xC,yC,nr+1);
    bary(xG,yG,xB,yB,xBC,yBC,nr+1);
    bary(xG,yG,xB,yB,xAB,yAB,nr+1);
    bary(xG,yG,xA,yA,xAB,yAB,nr+1);

    
}
let MAX = 0;
function mousePressed() {
  if (mouseX < width / 2 && MAX > 0) MAX--;
  if (mouseX > width / 2 && MAX < 5) MAX++;
  loop();
}