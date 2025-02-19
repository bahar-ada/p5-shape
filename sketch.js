let shape;

function setup() {
  createCanvas(600, 600);

  shape = createGraphics(400, 400);  

  shape.beginShape();
  shape.fill(137, 168, 178)
  shape.vertex(0, 0);
  shape.vertex(0, 150);
  shape.vertex(150, 150);
  shape.vertex(150, 50);

  shape.beginContour(); //ایجاد حفره در شکل
  shape.vertex(100, 50);
  shape.vertex(100, 100);
  shape.vertex(50, 100);
  shape.vertex(50, 50);
  shape.endContour();

  shape.endShape(CLOSE);
}

function draw() {
  background(220);
  image(shape, 50, 50);
  image(shape, mouseX, mouseY);
}
