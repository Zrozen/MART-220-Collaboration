let x = 200; // Initial x-coordinate of the ball
let y = 200; // Initial y-coordinate of the ball
let xSpeed = 3; // Initial speed of the ball in the x-direction
let ySpeed = 2; // Initial speed of the ball in the y-direction
let diameter = 50; // Diameter of the ball

function setup() {
  createCanvas(400, 400); // Create a canvas of 400x400 pixels
}

function draw() {
  background(220); // Set the background color
  
  // Draw the ball
  fill(0, 150, 255); // Set the fill color (RGB)
  ellipse(x, y, diameter, diameter); // Draw the ball
  
  // Update the ball's position
  x = x + xSpeed;
  y = y + ySpeed;
  
  // Bounce off the walls
  if (x <= 0 || x >= width) {
    xSpeed = -xSpeed;
  }
  
  if (y <= 0 || y >= height) {
    ySpeed = -ySpeed;
  }
}
