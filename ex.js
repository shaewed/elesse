// Using HTML5 canvas
var gradient = ctx.createLinearGradient(x0, y0, x1, y1);
gradient.addColorStop(0, "red");
gradient.addColorStop(1, "white");
ctx.fillStyle = gradient;
ctx.fillRect(x, y, width, height);

// Using OpenGL
// Set up and use a shader to create a gradient effect
