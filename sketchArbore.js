
       function setup() {
        createCanvas(windowWidth, windowHeight);
        angleMode(DEGREES);
      }
      function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
      }
      function draw() {
        background("#0e0e30");
        stroke("#6942EF");
        strokeWeight(11);
        line(windowWidth/2, 2*windowHeight/5+50, windowWidth/2, 3*windowHeight/4+50);
        paint(windowWidth/2, 2*windowHeight/5+50, 80, 1, 10, 15, 1);
        noLoop();
      }
      //let col=["#6B1D90","#692095","#68249A", "#6627A0","#652AA5", "#632EAA", "#6131AF","#6034B4","#5E37BA","#5B3EC4"];
      let col=["#6942EF","#5F49F1","#5451F2", "#4A58F4","#3F60F5", "#3567F7", "#2A6EF9","#1F76FA","#157DFC","#0B85FD","#008CFF"];
      let MAX = 0;
      function paint(x, y, len, index, weight, angle, it) {
        if (it >=MAX) return;
        translate(+x, +y);

        rotate(-angle);
        stroke(col[index]);
        strokeWeight(weight);
        line(0, 0, 0, -len);
        paint(0, -len, len * 0.8, index +1, weight - 1, angle * 1.1, it + 1);

        rotate(+2 * angle);
        stroke(col[index]);
        strokeWeight(weight);
        line(0, 0, 0, -len);
        paint(0, -len, len * 0.8, index+1, weight - 1, angle * 1.1, it + 1);

        rotate(-angle);
        translate(-x, -y);
      }

    
      function mousePressed() {
        if (mouseX < windowWidth / 2 && MAX > 0) MAX--;
        if (mouseX > windowWidth / 2 && MAX < 10) MAX++;
        loop();
      }



