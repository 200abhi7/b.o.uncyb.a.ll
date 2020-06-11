
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function setup() {
createCanvas(700,700);
engine = Engine.create();
world = engine.world;
ground = new Ground(width/2,700,2000,10)
dustbin1 = new Dustbin(400,695,200,20)
dustbin2 = new Dustbin(310,645,20,100)
dustbin3 = new Dustbin(490,645,20,100)

ball = new PaperBall(50,695,25);
//ball.collide = "ground"

//createEdgeSprites();
//ball.bounceOff = edges;

Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
 dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground.display();
  ball.display();
 drawSprites();
  

}	
function keyPressed(){
  if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.pos,{x:  30,y:-30});
	}
    
}  




