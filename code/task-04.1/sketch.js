function setup () {
  createCanvas(400, 400);
  noLoop();
}

function draw () {
  // background(150);
  noFill();
  stroke(0);
  strokeWeight(2);

beginShape();
vertex(30, 180);
vertex(50, 30);
vertex(70, 30);
vertex(100, 90);
vertex(145, 27);
vertex(165, 29);
vertex(170, 178);
endShape(CLOSE);

beginShape();
vertex(230, 180);
vertex(320, 30);
vertex(380, 176);
endShape(CLOSE);

beginShape();
vertex(30, 370);
vertex(80, 302);
vertex(32, 232);
vertex(170, 230);
vertex(120, 299);
vertex(170, 370);
endShape(CLOSE);

textSize(120);
noFill();
text(':^)', 240, 332);

//save("sketch.svg");
//print("saved svg");
noLoop();

}
