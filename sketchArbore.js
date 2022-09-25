
       function setup() {
        createCanvas(1650, 900);
        angleMode(DEGREES);
      }

      function draw() {
        background(30);
        stroke(255);
        strokeWeight(11);
        line(800, 760, 800, 560);
        paint(800, 560, 80, 229.5, 10, 15, 1);
        noLoop();
      }

      function paint(x, y, len, color, weight, angle, it) {
        if (it > MAX) return;
        translate(+x, +y);

        rotate(-angle);
        stroke(color);
        strokeWeight(weight);
        line(0, 0, 0, -len);
        paint(0, -len, len * 0.8, color * 0.9, weight - 1, angle * 1.1, it + 1);

        rotate(+2 * angle);
        stroke(color);
        strokeWeight(weight);
        line(0, 0, 0, -len);
        paint(0, -len, len * 0.8, color * 0.9, weight - 1, angle * 1.1, it + 1);

        rotate(-angle);
        translate(-x, -y);
      }

      let MAX = 0;
      function mousePressed() {
        if (mouseX < width / 2 && MAX > 0) MAX--;
        if (mouseX > width / 2 && MAX < 10) MAX++;
        loop();
      }



