function setup() {
  createCanvas(1650, 900);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(70);
  fill(0);
  rect(width / 2, height / 2, 729, 729);
  fill(255);
  paint(width / 2, height / 2, 243, 1);
  noLoop();
}

function paint(cx, cy, len, it) {
  if (it > MAX) return;

  rect(cx, cy, len, len);

  paint(cx - len, cy - len, len / 3, it + 1);
  paint(cx      , cy - len, len / 3, it + 1);
  paint(cx + len, cy - len, len / 3, it + 1);

  paint(cx - len, cy      , len / 3, it + 1);
  paint(cx + len, cy      , len / 3, it + 1);

  paint(cx - len, cy + len, len / 3, it + 1);
  paint(cx      , cy + len, len / 3, it + 1);
  paint(cx + len, cy + len, len / 3, it + 1);
}

let MAX = 0;
function mousePressed() {
  if (mouseX < width / 2 && MAX > 0) MAX--;
  if (mouseX > width / 2 && MAX < 6 ) MAX++;
  loop();
}