let sketchWidth = 600;
let sketchHight = 900;

function setup() {
  createCanvas(sketchWidth, sketchHight, SVG);
}

function draw() {
  noLoop();
  background(200);
  noFill();
  stroke(0);
  strokeWeight(1);
  
  beginShape();
  vertex(100, sketchHight - 20);
  curveVertex(20, sketchHight - 20);
  curveVertex(random(10, 50), sketchHight / 2 + random(0, 100));
  curveVertex(20, 120);
  curveVertex(random(140, 170), random(30, 70));
  curveVertex(sketchWidth / 2, random(40, 70));
  curveVertex(sketchWidth - random(140, 170), random(30, 70));
  curveVertex(sketchWidth - 20, 120);
  curveVertex(sketchWidth - random(10, 50), sketchHight / 2 + random(0, 100));
  curveVertex(sketchWidth - 20, sketchHight - 20);
  curveVertex(sketchWidth - 100, sketchHight - 60);
  endShape();

  rect(90, 150, sketchWidth - 180, sketchHight - 150);

  line(sketchWidth - 20, sketchHight - 20, 20, sketchHight - 20);

//save("Speaker.svg");
//print("saved svg");
noLoop();
}