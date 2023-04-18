function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
let col=["#6942EF","#5F49F1","#5451F2", "#4A58F4","#3F60F5", "#3567F7", "#2A6EF9","#1F76FA","#157DFC","#0B85FD","#008CFF"];
function draw() {
  background("#0e0e30");
  fill(0);
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
  triangle(A.x, A.y, B.x, B.y, C.x, C.y);
  paint(A.x, A.y, B.x, B.y, C.x,C.y, 1, 229.5);
  noLoop();
}

function paint(x1, y1, x2, y2, x3, y3, it, index) {
  if (it > MAX) return;
  const xMid1 = (x1 + x2) / 2, yMid1 = (y1 + y2) / 2;
  const xMid2 = (x2 + x3) / 2, yMid2 = (y2 + y3) / 2;
  const xMid3 = (x3 + x1) / 2, yMid3 = (y3 + y1) / 2;
  fill(index);
  triangle(xMid1, yMid1, xMid2, yMid2, xMid3, yMid3);
  paint(x1, y1, xMid1, yMid1, xMid3, yMid3, it + 1, index *0.9);
  paint(xMid1, yMid1, x2, y2, xMid2, yMid2, it + 1, index *0.9);
  paint(xMid3, yMid3, xMid2, yMid2, x3, y3, it + 1, index *0.9);
}

let MAX = 0;
function mousePressed() {
  if (mouseX < width / 2 && MAX > 0) MAX--;
  if (mouseX > width / 2 && MAX < 10) MAX++;
  loop();
}