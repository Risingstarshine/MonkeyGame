var PLAY = 1;
var monkey , monkey_running;
var banana, bananaGroup, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground; 
var score = 0;
var survivalTime = 0;
var gameState = PLAY;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  //monkeyImage = loadImage("")
}



function setup() {
  
  monkey = createSprite(120, 350, 50, 50);
  monkey.addAnimation("Running", monkey_running);
  monkey.scale = 0.2;

  ground = createSprite(250, 420, 500, 20);
  ground.velocityX = -2;
 
 bananaGroup = new Group();
 obstacleGroup = new Group();


 score = 0;

}


function draw() {

 createCanvas(550, 480) 
  background(255);


  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+ score, 500, 50)
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survivalTime: "+ survivalTime, 100, 50)
  

  
if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8

    monkey.collide(ground);
  
  banana();
  obstacle();
  
  drawSprites();

}

function banana() {
  if ( frameCount % 80 === 0){
    var banana = createSprite(540, 250, 50, 20);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3
  
    banana.lifetime = 200;
  
    bananaGroup.add(banana);
  
  }
  
}


function obstacle() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(435,396,40,40);
    obstacle.y = Math.round(random(370, 372));
    obstacle.velocityX = -3
    obstacle.collide(ground);
    
    obstacle.addImage(obstacleImage);
    
    obstacle.scale = 0.2;
    obstacle.lifetime = 200;
    
    obstacleGroup.add(obstacle);
  }
  
}

