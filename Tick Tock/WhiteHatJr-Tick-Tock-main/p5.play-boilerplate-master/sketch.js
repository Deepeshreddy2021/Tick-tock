var hr;
var mn;
var sc;
//var DEGREES;
 var line;

function setup() {
  createCanvas(400,400);
  //createSprite(200, 200, 50, 50);
  hr = hour();
  mn = minute();
  sc = second();
}

function draw() {
  background(0,0,0);
  
  scAngle = map(sc, 0, 60, 0, 360);

  //Draw the second hand
  push();
  translate(0, 0);
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);  
  angleMode(DEGREES);  
  line(200, 200, 100, 0);
  pop();
  

  drawSprites();
}