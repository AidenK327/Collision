var rectangleM, rectangleF

function setup() {
  createCanvas(400,400);

  rectangleM = createSprite(200,200,50,20);
    rectangleM.shapeColor = "red";
  rectangleF = createSprite(100,200,20,50);
    rectangleF.shapeColor = "blue";
}

function draw() {
  background(0);  

rectangleM.x = World.mouseX;
rectangleM.y = World.mouseY;

console.log(rectangleM.x-rectangleF.x);

if (rectangleM.x-rectangleF.x < (rectangleM.width+rectangleF.width)/2 &&
 rectangleF.x-rectangleM.x < (rectangleM.width+rectangleF.width)/2 && rectangleM.y-rectangleF.y < (rectangleM.height+rectangleF.height)/2 &&
 rectangleF.y-rectangleM.y < (rectangleM.height+rectangleF.height)/2) {
rectangleM.shapeColor = "green";
}
else {
rectangleM.shapeColor = "red";

}

  drawSprites();
}