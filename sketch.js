var ball
var paddle
var wall
var chair
function setup() {
  createCanvas(800,400);
ball=createSprite(500, 200, 100, 50);
ball.shapeColor="blue";
 paddle=createSprite(100,200,50,100);
 paddle.shapeColor="yellow";
wall= createSprite(300,400,75,50);
wall.shapeColor="green";
chair= createSprite(300,0,50,75);
chair.shapeColor="pink";
wall.velocityY=-2;
chair.velocityY=2;
}

function draw() {
  background("lightblue");  
  paddle.x=mouseX;
  paddle.y=mouseY;

  if(isTouching(ball, paddle)){
    console.log("ball is touching paddle");
  }
    else{
      console.log("ball is not touching paddle");
    }
  bounceOff(wall, chair);
  
  drawSprites();
}
