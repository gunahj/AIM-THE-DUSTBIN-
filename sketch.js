
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground
var lground
var rground
var bk_1
var bk_2
var dustbin,dustbin2
var btn1
var ground2
var logo1,logo2,logo3,logo4
var restart,restart1

function preload()
{
	bk_1= loadImage("bk_1.jpg");
	dustbin2=loadImage("dustbin.png");
    logo1=loadImage("logo1.png");
	logo2=loadImage("logo2.png");
	
	

}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	

	bk_2=createSprite(200,200,0,500)
	bk_2.addImage("bk",bk_1);

	ground =new Ground(200,290,400,7);

	ground2=createSprite(200,290,400,7);
	ground2.visible=false;

	
	dustbin=createSprite(340,260,10,10)
	dustbin.addImage("dust",dustbin2);
	dustbin.scale=0.1

	button3 = createImg('push.png');
	button3.position(300,150);
	button3.size(50,50);
	button3.mouseClicked(btn);

	restart = createImg('restart.png');
	restart.position(300,70);
	restart.size(50,50);
	restart.mouseClicked(reastart);

	logo3=createSprite(200,290,200,200);
	logo3.addImage("3",logo1);
	logo3.visible=false;



	logo4=createSprite(200,290,200,200);
	logo4.addImage("3",logo2);
	logo4.visible=false;



	var ball_options = {
		isStatic:true,
		restitution:0.3,
		friction:0.01,
		density:1.2,
	  }

	//Create the Bodies Here.
  ball = Bodies.circle(200,40,20,ball_options);
  World.add(world,ball);
  stroke("white");
  fill("white");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("WHITE");
  ground.show();

  
  

  if (dustbin.position.x >= width - 70 ) {
    dustbin.velocityX = -6;
  }

  if (dustbin.position.x <= 20 ) {
    dustbin.velocityX = 6;
  
  }

  if(collide(ball,dustbin)==true)
  {
	logo4.visible=true;
  }

  if(collide(ball,ground2)==true)
  {
    logo3.visible=true;
  }


  
   
  

  drawSprites();
  ellipse(ball.position.x,ball.position.y,25);
  keypressed();
}

function keypressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:5,y:2},{x:2,y:1})
	}
}

function btn()
{
	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0.01,
		density:1.2,
	  }

	  ball = Bodies.circle(200,40,20,ball_options);
	  World.add(world,ball);
	  stroke("white");
	  fill("white");
}

function collide(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
              World.remove(engine.world,ball);
               ball = null;
               return true; 
            }
            else{
              return false;
            }
         }
}

function reastart(){
	location.reload();
}



