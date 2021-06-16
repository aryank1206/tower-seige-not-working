const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var score;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var score=0






function setup() {
  
 
  
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground();
  stand1=new Stand(380,300,270,10);
  stand2=new Stand(700,200,200,10);
 
  
  
  b1= new Block(280,275,30,40)
  b2= new Block(310,275,30,40)
  b3= new Block(340,275,30,40)
  b4= new Block(370,275,30,40)
  b5= new Block(400,275,30,40)

  b6= new Block(430,275,30,40)
  b7= new Block(460,275,30,40)
  b8= new Block(490,275,30,40)

  b9= new Block(310,235,30,40)
  b10= new Block(340,235,30,40)
  b11= new Block(370,235,30,40)
  b12= new Block(400,235,30,40)
  b13= new Block(430,235,30,40)
  b14= new Block(460,235,30,40)

  b15= new Block(340,195,30,40)
  b16= new Block(370,195,30,40)
  b17= new Block(400,195,30,40)
  b18= new Block(430,195,30,40)

  b19= new Block(370,155,30,40)
  b20= new Block(400,155,30,40)

  b21= new Block(385,115,30,40)



  bs1=new Block(640,175,30,40)
  bs2=new Block(670,175,30,40)
  bs3=new Block(700,175,30,40)
  bs4=new Block(730,175,30,40)
  bs5=new Block(760,175,30,40)

  bs6=new Block(670,135,30,40)
  bs7=new Block(700,135,30,40)
  bs8=new Block(730,135,30,40)

  bs9=new Block(700,95,30,40)



  ball=Bodies.circle(50,200,20)
  World.add(world,ball)

  slingShot=new SlingShot(this.ball,{x:200,y:200})
}

function draw() {
  
  background(255,255,255); 
  Engine.update(engine);
  
  strokeWeight(2);
  stroke("white")
  textSize(13);
  fill("red");
  text("Score:"+score,width-300,50);


  stand1.display();
  stand2.display();
  b1.display();
  b1.score();
  b2.display();
  b1.score();
  b3.display();
  b1.score();
  b4.display();
  b1.score();
  b5.display();
  b1.score();
  b6.display();
  b1.score();
  b7.display();
  b1.score();
  b8.display();
  b1.score();
  b9.display();
  b1.score();
  b10.display();
  b1.score();
  b11.display();
  b1.score();
  b12.display();
  b1.score();
  b13.display();
  b1.score();
  b14.display();
  b1.score();
  b15.display();
  b1.score();
  b16.display();
  b1.score();
  b17.display();
  b1.score();
  b18.display();
  b1.score();
  b19.display();
  b1.score();
  b20.display();
  b1.score();
  b21.display();
  b1.score();

  bs1.display();
  bs1.score();
  bs2.display();
  bs1.score();
  bs3.display();
  bs1.score();
  bs4.display();
  bs1.score();
  bs5.display();
  bs1.score();
  bs6.display();
  bs1.score();
  bs7.display();
  bs1.score();
  bs8.display();
  bs1.score();
  bs9.display();
  bs1.score();
  drawSprites();

  ellipse(ball.position.x,ball.position.y,20)
  slingShot.display();
}


function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
  
}

function keyPressed(){
  if(keyCode==32){
    slingShot.attach(this.ball)
  }
}