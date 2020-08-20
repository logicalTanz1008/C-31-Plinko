function setup() {
  createCanvas(480,800);
  ground = new Ground(790,height,500,20);
}

function draw() {
  background(255,255,255); 
  
  
  
  drawSprites();

  ground.display();
}