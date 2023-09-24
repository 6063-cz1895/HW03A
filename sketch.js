let distance = 100; //set the distance between dots as distance
let bigDistance = 2 * distance; //because it is one big dots followed by one small dots... so the distance between big dots is double the distance between small dots
let smallDiameter = 10;
let bigDiameter = 35;
function setup() {
  createCanvas(windowWidth, windowHeight); 
}

function draw() {
  background(255, 255, 0);
  //small dots
  fill(0);
  strokeWeight(0);
  for (let xpos = 0; xpos <= width; xpos += distance) { //first, draw all dots as small circles which are "distance" apart from each other
    for (let ypos = 0; ypos <= height; ypos += distance) { 
      ellipse(xpos, ypos, smallDiameter, smallDiameter);
    }
  }
  //big dots group1
  for (let xpos = 0; xpos <= width; xpos += bigDistance) { //then, start to draw big dots. Because big dots appear above every other small dots, so the distance between big dots is double the distance of small dots
    for (let ypos = 0; ypos <= height; ypos += bigDistance) { //for the first group, start at point (0, 0)
      ellipse(xpos, ypos, bigDiameter, bigDiameter);
    }
  }
  //big dots group2
  for (let xpos = distance; xpos <= width; xpos += bigDistance) { //for the second group, start at point (distance, distance)
    for (let ypos = distance; ypos <= height; ypos += bigDistance) {
      ellipse(xpos, ypos, bigDiameter, bigDiameter);
    }
  }
}