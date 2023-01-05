let INF = 10;
let MAX = 100;

function setup() {
  let canvas=createCanvas(windowWidth/3, windowHeight/2);
  canvas.position(windowWidth/3,windowHeight/7)
  pixelDensity(1);
  cursor(HAND);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
let cx = 0, cy = 0;
let len = 5;

function draw() {
  loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const a0 = map(x, 0, width, cx - len, cx + len);
      const b0 = map(y, 0, height, cy - len, cy + len);

      let i = 0;
      for (let a = 0, b = 0; i < MAX; i++) {
        const aNow = a * a - b * b + a0;
        const bNow = 2 * a * b + b0;
        a = aNow;
        b = bNow;
        if (a * a + b * b >= INF * INF) break;
      }

      const pixel = (x + y *width) *4;
      if (i === MAX) {
        pixels[pixel] = 0;
        pixels[pixel + 1] = 0;
        pixels[pixel + 2] = 0;
      }
      else {
        const rgb = getRGB(floor(map(i, 0, MAX, 0, 1535)));
        pixels[pixel] = rgb[0];
        pixels[pixel + 1] = rgb[1];
        pixels[pixel + 2] = rgb[2];
      }
      pixels[pixel + 3] = 255;
    }
  }
  updatePixels();
  noLoop();
}

function getRGB(x) {
  if (floor(x / 256) === 0) return [255, x % 256, 0];
  if (floor(x / 256) === 1) return [255 - x % 256, 255, 0];
  if (floor(x / 256) === 2) return [0, 255, x % 256];
  if (floor(x / 256) === 3) return [0, 255 - x % 256, 255];
  if (floor(x / 256) === 4) return [x % 256, 0, 255];
  if (floor(x / 256) === 5) return [255, 0, 255 - x % 256];
}

function mousePressed() {
  cx = map(mouseX, 0, width, cx - len, cx + len);
  cy = map(mouseY, 0, height, cy - len, cy + len);
  len /= 2;
  MAX = ceil(MAX * 1.123);
  INF *= 1.123;
  loop();
}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    INF = 10;
    MAX = 100;
    cx = cy = 0;
    len = 5;
    loop();
  }
} 