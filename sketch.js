let angleX = 0;
let angleY = 0;

function setup() {
  createCanvas(600, 600, WEBGL); // Set up a 3D canvas
}

function draw() {
  background(0); // Set the background to black
  
  // Apply rotations
  rotateX(angleX);
  rotateY(angleY);
  
  // Draw the sphere
  noStroke(); // Optional: no stroke for smooth shading
  fill(255); // White color for the sphere
  sphere(150); // Radius of 150
  
  // Update the rotation angles
  angleX += 0.01; // Rotate around the X-axis
  angleY += 0.01; // Rotate around the Y-axis
}