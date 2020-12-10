const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const MouseConstraint = Matter.MouseConstraint;

const Mouse = Matter.Mouse;
var balloon,ball,bg,bg_img;
var obs=[];
var mConstraint,canvas;

function preload(){
  bg_img =  loadImage("images/bg.png");

}
function setup() {
  canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);


  engine=Engine.create();
  world=engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);


 balloon =new Balloon(300, 550);
  ball = new Ball(300,450,10);
  bg = createSprite(0,0)
  bg.addImage("background",bg_img);
  for(var i=0;i<10;i++)
  {
    obs[i]=new Obstacle(i*40,50,10,10);
 
  }  

}

function draw() {
  background(0); 
  Engine.update(engine); 
  bgLoop();
  drawSprites();
  ball.display();
  balloon.display();
  for(var x=0;x<obs.length;x++)
  {
  obs[x].display();
  }
}

function bgLoop()
{
  bg.velocityY=2;
  if(bg.y<0){
    bg.y =bg.height/2;
  }
}
function collision()
{
  for(var q=0;q<obs.length;q++)
  {
    if(ball.isTouching(obs[q]))
    {
      console.log("collided");
    }
  }
}