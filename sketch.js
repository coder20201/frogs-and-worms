var player,score = 0,wormGroup,bg;
function preload(){

  frogimg = loadImage("images/frog.png");
  wormimg = loadImage("images/worm.png");
  swampimg = loadImage("images/swampImg.png");
}

function setup() {
  createCanvas(600,600);
  bg = createSprite(300,300)
  bg.scale = 2.5;
  bg.addImage(swampimg)
  player=createSprite(40,550,30,30);
  player.scale = 0.5;
  player.addImage(frogimg)
  wormGroup=new Group();
 
}

function draw() {
  background("black");
  stroke("red");
  noFill();
  
  player.x=mouseX;
  player.y=mouseY;

  
  generateWorms();
  for(var i = 0;i<(wormGroup).length;i++){
    var temp = (wormGroup).get(i);
    if(player.isTouching(temp)){
      score++;
      temp.destroy();
      temp = null;
    }
  }





  drawSprites();
  textSize(20);
  text("worm destroyed:"+ score,350,50)
  


  

  
}
function generateWorms(){
  if(frameCount%30===0){
    
    var worm =createSprite(random(550,0),random(550,0),40,5);
    worm.scale=random(0.1,0.5);
    worm.addImage(wormimg);
    worm.velocityX=random(-15,15);
    worm.velocityY=random(-15,10);
  
    wormGroup.add(worm);
    
  }


}

