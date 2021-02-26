
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

roof= new Roof(400,100,300,10);
ball1= new Ball(300,300);
ball2= new Ball(350,300);
ball3= new Ball(400,300);
ball4= new Ball(450,300);
ball5= new Ball(500,300);
chain1= new Chain(ball1.body,roof.body,-100);
chain2= new Chain(ball2.body,roof.body,-50);
chain3= new Chain(ball3.body,roof.body,0);
chain4= new Chain(ball4.body,roof.body,50);
chain5= new Chain(ball5.body,roof.body,100);
	
  
}


function draw() {
	Engine.update(engine);
	background(0);
	
	roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  chain1.display();
  chain2.display();
  
  chain3.display();
  
  chain4.display();
  chain5.display();
  
  
  
 
 
}
function keyPressed(){
	if(keyCode=== UP_ARROW){
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-50});
	}
}



