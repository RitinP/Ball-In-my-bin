
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var right;
var ball2;
var wall
var wall2
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    isStatic: false,
    restitution: 0.95,
    friction:0,
    density: 0.08
    

 


  }


   
   var ground_options ={
     isStatic: true
    
     
   };
  
//var ball2_options = {
//restitution: 0.95

//}

  ground = Bodies.rectangle(200,360,500,18,ground_options);
  World.add(world,ground);

    //wall = Bodies.rectangle(300,300,300,20, ground_options)
  wall = Bodies.rectangle(300,300,1,20, ground_options)
  World.add(world,wall)

  wall2 = Bodies.rectangle(380,300,1,20, ground_options)
  World.add(world,wall2)


  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(100);
  Engine.update(engine);


 //ground.display();
  
  ellipse(ball.position.x,ball.position.y,20);
 
  rect(ground.position.x,ground.position.y,400,20);

  rect(wall.position.x, wall.position.y, 5, 100)

  rect(wall2.position.x, wall.position.y, 5, 100)

  keyPressed();
 
}
function keyPressed()
{

  if (keyCode === UP_ARROW){
    Hforce()
    Vforce()

   }
}


function Hforce(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.05, y:0})

}


function Vforce(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:0.03})
}

