const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground, wall1, wall2;

var jointLink1;
var Stone;

var stones = [];

var inv;

var stone1; 

var bridge, jointLink;

var bg;

var z1Img;

var zombie;

var breakButton;

function preload(){
 z1Img = loadImage("lib/zombie.png");
 bg = loadImage("lib/background.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  

  ground = new base(200,400,100000,20);

  zombie = createSprite(0, height - 110);
  zombie.addImage(z1Img);
  zombie.scale = 0.1;
  zombie.velocityX = 10;

  breakButton = createImg("lib/axe.png");
  breakButton.position(width - 150, height/2 - 50);
  breakButton.size(50, 50);
  //breakButton.class("breakButton");
  breakButton.mouseClicked(handleMousePress);

  wall1 = new base(40, 350, 200, 200);
  wall2 = new base(700, 150, 300, 200);
  wall3 = new base(0, 150, 300, 200);

  inv = new invBase(350, 180, 1000, 20);

  bridge = new Bridge(27, {x:width - 120, y:300});
  

  Matter.Composite.add(bridge.body ,wall2);
  jointLink = new link(bridge, wall2);

  Matter.Composite.add(bridge.body ,wall1);
  jointLink = new link(bridge, wall1);

 // Matter.Composite.add(bridge.body ,stone);
  //jointLink = new link(bridge, stone);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background(51);

  image(bg, 0, 0, width, height);
  
  
  bridge.show ();
  showStone();
  //ground.display();
  //wall1.display();
  //wall2.display();
  //wall3.display();

  drawSprites();









































  //inv.display();
  Engine.update(engine);

}



function showStone(){
  if(stones.length < 8){
    var x = random(300, 350);
    var y = random(50, 100);
    Stone = new stone(x, y, 25);
    stones.push(Stone);
  }

  for(var i = 0; i < stones.length; i++){
    stones[i].display();
  }
}

function handleMousePress(){
  jointLink.detach();
  inv.disapear();
  setTimeout(()=>{
    bridge.break();
  },1500)
}
