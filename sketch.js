var mario;
var background;
var obstacle;
var stars;
var ground,invisibleGround;
var gameState=PLAY;

function preload() {
    backgroundImg = loadImage("sprites/background.png");
    marioImg = loadImage("sprites/Mario.png");
    obstacleImg = loadImage("sprites/obstacle.png");
    starsImg = loadImage("sprites/Stars.jpeg");
}

function setup(){
    var canvas = createCanvas(600,200);

    background=createSprite(1200,55,10,10);
    background.addImage(backgroundImg);
    background.scale=0.6;
    background.x=background.width/2;
   
    mario = createSprite(30,110,10,10);
    mario.addImage(marioImg);
    mario.scale=0.05;

    //ground = createSprite(200,180,400,20);
    //ground.x = ground.width/2;

    //invisibleGround = createSprite(200,190,400,10);
    //invisibleGround.visible = false;

}

function draw(){

    background.velocityX=-2;
    if(background.x<0){
        background.x=background.width/2;
    }

    drawSprites();
}


