
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render  = Matter.Render;

var paperobjectimg , paperobject;
var bin1,bin2,bin3, bin, binimage;

function preload(){
 binimage = loadImage("dustbin.png");
 paperobjectimg = loadImage("paper.png");
}
function setup() {
	createCanvas(800, 700);

	

	bin2 = createSprite(495,605,10,250);
	bin2.shapeColor = "grey";

	bin3 = createSprite(345,605,10,250);
	bin3.shapeColor = "grey";

	engine = Engine.create();
	world = engine.world;

	paperobject = new Paper ( 200, 100, 20 );
	dustbin1 = new Bin(425,655,150,15  );
	

	dustbin2 = new Bin( 495,625,15,70 );
	ground1 = new Ground (125, 200, 250);
	ground2 = new Ground(350, 650, 700);

	//var render= create.Render();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  paperobject.display();

  ground1.display();

  ground2.display();

  keypressed();
  

  imageMode(CENTER);
  image (paperobjectimg , paperobject.body.position.x,paperobject.body.position.y,30,30);
  

  imageMode (CENTER);
  image (binimage,420,570,150,170);
  
  drawSprites();
 
}
function keypressed(){
	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:1,y:2});

	}
}
	




