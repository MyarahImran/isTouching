var fixedRect, movingRect;
var gameobject1, gameobject2, gameobject3, gameobject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameobject1 = createSprite(100,100,50,50);
  gameobject1.shapeColor = "green";
  gameobject2 = createSprite(200,100,50,50);
  gameobject2.shapeColor = "green"; 
  gameobject3 = createSprite(300,100,50,50);
  gameobject3.shapeColor = "green";
  gameobject4 = createSprite(400,100,50,50);
  gameobject4.shapeColor = "green";

}

function draw() {
  background(0,0,0); 

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, gameobject2)){
    movingRect.shapeColor = "red";
    gameobject2.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "green";
    gameobject2.shapeColor = "green";
  }

  drawSprites();
}



function bounceOff(){

}