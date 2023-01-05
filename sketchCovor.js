function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  background("#0e0e30");
  fill(0);
  rect(windowWidth / 2, windowHeight / 2, 729, 729);
  paint(windowWidth / 2, windowHeight / 2, 243, 1, 229.5);
  noLoop();
}

function paint(cx, cy, len, it,color) {
  if (it > MAX) return;
  fill(color);
  rect(cx, cy, len, len);

  paint(cx - len, cy - len, len / 3, it + 1, color*0.9);
  paint(cx      , cy - len, len / 3, it + 1, color*0.9);
  paint(cx + len, cy - len, len / 3, it + 1, color*0.9);

  paint(cx - len, cy      , len / 3, it + 1, color*0.9);
  paint(cx + len, cy      , len / 3, it + 1, color*0.9);

  paint(cx - len, cy + len, len / 3, it + 1, color*0.9);
  paint(cx      , cy + len, len / 3, it + 1, color*0.9);
  paint(cx + len, cy + len, len / 3, it + 1, color*0.9);
}

let MAX = 0;
function mousePressed() {
  if (mouseX < width / 2 && MAX > 0) MAX--;
  if (mouseX > width / 2 && MAX < 6 ) MAX++;
  loop();
}