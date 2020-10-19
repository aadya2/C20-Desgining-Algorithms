var fRect, mRect;

function setup() {
  createCanvas(800,400);
  fRect = createSprite(200, 200, 50, 80);
  mRect = createSprite(400, 200, 80, 30);

  fRect.shapeColor = "green";
  mRect.shapeColor = "green";

  fRect.debug = true;
  mRect.debug = true;
}

function draw() {
  background(0);  
  
  mRect.x = World.mouseX;
  mRect.y = World.mouseY;

  isTouching();
  drawSprites();
}

function isTouching(){
  
  if(mRect.x - fRect.x < mRect.width/2 + fRect.width/2 
    && fRect.x - mRect.x < mRect.width/2 + fRect.width/2 
    && mRect.y - fRect.y < mRect.height/2 + fRect.height/2 
    && fRect.y - mRect.y < mRect.height/2 + fRect.height/2 ){
      fRect.shapeColor = "red";
    mRect.shapeColor = "red";
  }
else {
  fRect.shapeColor = "green";
  mRect.shapeColor = "green";
}

}
