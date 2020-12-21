/* COPYRIGHT Skull Free Online Games 2020. ALL RIGHTS RESERVED. 
   Head onto our website for support, contact details, jobs, and more. ENJOY !!*/




//declaring variables
var dog1,dog2,GBackground,Jump_Block,Snake,jumpSound,blockHitSound,snakeCollideSound,gamePlaySound,r1,r2,r3,r4;

//declaring variables for images
var i1,i2,i3,i4,i5;

function preload()
{
//loading all the images
    i1 = loadImage("doggyno1.png");
    i2 = loadImage("doggyno2.png");
    i3 = loadImage("mygameback.png");
    i4 = loadImage("jumponzis.png");
    i5 = loadImage("snakey.png");

 //loading all the sounds
    jumpSound = loadSound("jump.wav");
    blockHitSound = loadSound("collided.wav");
    snakeCollideSound = loadSound("preview.mp3");
    gamePlaySound = loadSound("GameplaySound.mp3");
}

function setup(){
  
  //creating the game canvas (600x600 px)
  createCanvas(600,600);

  //creating the first dog sprite and assigning it behaviour
  dog1 = createSprite(100,580,10,10);
  dog1.addImage(i1);
  dog1.scale = 0.17;
  //dog1.velocityX = 6;

 //creating the sprite for the game background and assigning it behaviour 
  GBackground = createSprite(300,300,600,600);
  GBackground.addImage(i3);
  GBackground.scale = 1;
  GBackground.velocityX = -6;
  GBackground.x = GBackground.width /2;

  /*  dog2 = createSprite(100,40,10,10);
  dog2.addImage(i2);
  dog2.velocityX = 6; */
  
  //creating the sprite for the block and assigning it behaviour
  Jump_Block = createSprite(r2,r3,10,10);
  Jump_Block.addImage(i4);
  Jump_Block.scale = 0.5;
  Jump_Block.velocityX = -6;
  Jump_Block.velocityY = r4;
  Jump_Block.lifetime = 110;
  
  //creating the sprite for the snake and giving it behaviour
  Snake = createSprite(600,520,10,10);
  Snake.addImage(i5);
  Snake.scale = 0.29;
  //Snake.velocityX = -6;
  //Snake.lifetime = 109;

}

function draw(){

  //writing the if condition to create an infinitely scrolling background
  if(GBackground.x < 150) {
      GBackground.x = GBackground.width/2;
  }


drawSprites();
  

}


























































































































