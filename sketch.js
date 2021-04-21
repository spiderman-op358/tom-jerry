var bg;
var jerrystand,jerrymove,jerrystop;
var tomstand,tommove,tomstop;
var jerry;
var tom;






function preload() {
    //load the images here
    bg=loadImage("images/garden.png");
    jerrystand=loadAnimation("images/mouse1.png");
    jerrymove=loadAnimation("images/mouse2.png","images/mouse3.png");
    jerrystop=loadAnimation("images/mouse4.png");

    tomstand=loadAnimation("images/cat1.png");
    tommove=loadAnimation("images/cat2.png","images/cat3.png");
    tomstop=loadAnimation("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    jerry=createSprite(200,600,10,10);
    jerry.addAnimation("jerrystand",jerrystand);
    jerry.scale=0.15;

    tom=createSprite(870,600,10,10);
    tom.addAnimation("tomstand",tomstand);
    tom.scale=0.2;


}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
    tom.velocityX=0;
    tom.addAnimation("tomstop",tomstop);
    tom.x=300;
    tom.changeAnimation("tomstop");

    jerry.addAnimation("jerrystop",jerrystop);
    jerry.scale=0.15;
    jerry.changeAnimation("jerrystop");


    }
    


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      tom.velocityX=-5;
      tom.addAnimation("tommove",tommove);
      tom.changeAnimation("tommove");

      jerry.addAnimation("jerrymove",jerrymove);
      jerry.changeAnimation("jerrymove");



  }


}
