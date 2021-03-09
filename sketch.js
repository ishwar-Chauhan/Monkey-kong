var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivalTime=0;


function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
}



function setup() {
  createCanvas(600, 500);
  monkey = createSprite(70, 410, 10, 10);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.128;

  ground = createSprite(300, 459, 1200, 20);
  ground.velocityX = -2;
  ground.debug=false;
  
  
  FoodGroup = new Group();
  obstaceGroup = new Group();
  
}


function draw() {
  background("white")

  monkey.collide(ground)

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  
  if (keyDown("space")&& monkey.y >= 250){
    monkey.velocityY=-7;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  var select_item = Math.round(random(1,2));

  food();
  obstacle();
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival time: "+ survivalTime, 230,50);
  
  drawSprites();
}


function food(){
   if (frameCount % 80 === 0) {
  banana = createSprite(600,Math.round(random(210,420)) ,30,230)
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX = -10;
  banana.lifetime =600;
  FoodGroup.add(banana);
   }
}

function obstacle(){
   if (frameCount % 300 === 0) {
  rock = createSprite(600,415,30,200)
  rock.addImage(obstaceImage);
  rock.scale=0.18;
  rock.velocityX = -2;
  rock.lifetime = 300;
  obstaceGroup.add(rock);
   }
  
}
