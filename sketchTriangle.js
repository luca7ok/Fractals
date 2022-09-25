function setup() {
  createCanvas(1650, 900);
  noStroke();
}

function draw() {
  background(70);
  fill(0);
  triangle(800, 7, 288, 893, 1312, 893);
  fill(255);
  paint(800, 7, 288, 893, 1312, 893,1);
  noLoop();
}

function paint(x1, y1, x2, y2, x3, y3, it) {
  if (it > MAX) return;
  const xMid1 = (x1 + x2) / 2, yMid1 = (y1 + y2) / 2;
  const xMid2 = (x2 + x3) / 2, yMid2 = (y2 + y3) / 2;
  const xMid3 = (x3 + x1) / 2, yMid3 = (y3 + y1) / 2;
  triangle(xMid1, yMid1, xMid2, yMid2, xMid3, yMid3);
  paint(x1, y1, xMid1, yMid1, xMid3, yMid3, it + 1);
  paint(xMid1, yMid1, x2, y2, xMid2, yMid2, it + 1);
  paint(xMid3, yMid3, xMid2, yMid2, x3, y3, it + 1);
}

let MAX = 0;
function mousePressed() {
  if (mouseX < width / 2 && MAX > 0) MAX--;
  if (mouseX > width / 2 && MAX < 10) MAX++;
  loop();
}