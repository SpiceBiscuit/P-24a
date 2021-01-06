
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var bin1, bin2, bin3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200, 250, 20);
	
	bin1 = new Bin(600, 650,  150,10);
	bin2 = new Bin(525, 600,  10,100);
	bin3 = new Bin(675, 600,  10,100);

	ground = new Ground(width/2, 660,  width,10);



	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();

  bin1.display();
  bin2.display();
  bin3.display();

  ground.display();
}

function Keypressed() {
	if (keycode === UP_ARROW){
       Matter.Body.applyForce(paperObject.body, paperObject.position,{x:85,y:-85})		
	}
}

