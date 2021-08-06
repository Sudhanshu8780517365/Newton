
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var gnd

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    gnd= new Ground(400,200,200,20)
    ball=new Bird(200,200,25)
    rope1=new Rope(ball.body,gnd.body,-20,12)
    ball2=new Bird(200,250,25)
	 rope2=new Rope(ball2.body,gnd.body,-10,0)
   ball3=new Bird(200,250,25)
	 rope3=new Rope(ball3.body,gnd.body,0,0)
 ball4=new Bird(200,250,25)
	 rope4=new Rope(ball4.body,gnd.body,10,0)

  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine)
  
 
  rope1.display()
  rope2.display() 
   rope3.display()
  rope4.display() 
  ball.display()
   ball2.display()
   ball3.display()
   ball4.display()
  
 
  gnd.display()
}
function keyPressed(){
 Body.applyForce(ball.body,ball.body.position,{x:50,y:-50})
}




