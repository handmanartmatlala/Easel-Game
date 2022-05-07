let canvas;
let blot;
var blotImg;
let paintbrush;

function preload(){
  canvas = loadImage('canvas.jpg');
  blotImg = loadImage('blot.png');
  paintbrush = loadImage('paintbrush.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}
function draw() {
  background(50);
    image(canvas, 0, 0, 0);
  
  
  
  textSize(20);
   textAlign(RIGHT, TOP);
  text("(decorate your canvas) sprite count: " + allSprites.length,
    width-10, 10);
  
    drawSprites();
  blotImg.resize(512, 512);
  image(paintbrush, mouseX, mouseY);


}

function mousePressed() {
  
  blot = createSprite(width/2, height/2,
    random(10, 50), random(10, 50));
  blot.addImage(blotImg);
  blot.velocity.y = random(3);
  blot.velocity.x = random(-3, 3);
  blot.position.x = mouseX;
  blot.position.y = mouseY;
  blot.friction = 0.1;
  blot.life = 520;
  

}