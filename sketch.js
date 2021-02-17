var rect1;
var num=0;

function preload(){
  bgImage=loadImage("images/road.jpg");
  carImg1 = loadImage("images/car1.png");
  carImg2 = loadImage("images/car2.png");
  carImg3 = loadImage("images/car3.png");
  carImg4 = loadImage("images/car4.png");

  rightcarImg1 = loadImage("images/rightcar1.png");
  rightcarImg2 = loadImage("images/rightcar2.png");
  rightcarImg3 = loadImage("images/rightcar3.png");
  rightcarImg4 = loadImage("images/rightcar4.png");

  topcarImg1 = loadImage("images/topcar1.png");
  topcarImg2 = loadImage("images/topcar2.png");
  topcarImg3 = loadImage("images/topcar3.png");
  topcarImg4 = loadImage("images/topcar4.png");

  bottomcarImg1 = loadImage("images/bottomcar1.png");
  bottomcarImg2 = loadImage("images/bottomcar2.png");
  bottomcarImg3 = loadImage("images/bottomcar3.png");
  bottomcarImg4 = loadImage("images/bottomcar4.png");

  ambImage = loadImage("images/amb.png");
 
}




function setup() {
  createCanvas(displayWidth-10,displayHeight-120);
  rect1=new TrafficLight(500,30,40,0);
  rect2=new TrafficLight(985,170,40,90); 
  rect3=new TrafficLight(850,610,40,180);
  rect4=new TrafficLight(365,470,40,270); 
  invLine=createSprite(500,displayHeight/2-70,700,300);

  invLine.visible=false;
  //invLine1=createSprite(900,displayHeight/2-70,20,300);
  leftGroup=new Group();
  rightGroup=new Group();
  topGroup=new Group();
  bottomGroup=new Group();
  ambGroup=new Group();

}

function draw() {
  background(bgImage);

  if(frameCount%100===0){
   
    if(num>4){
      num=0;
    }
    signal(num++);
   
  }
  for(var i=0;i<ambGroup.length;i++){
    if(ambGroup.get(i).isTouching(invLine)){
      num=2;
    } 
    else{
      num=1;
    }
   }
 rect1.display();
 rect2.display();
 rect3.display();
 rect4.display();
 
  spawnFromLeft();
  spawnFromRight();
  spawnFromTop();
  spawnFromBottom();
  spawnAmbulance();
  drawSprites();
}

function signal(){
  
  switch(num){
    case 1:
      setTimeout(function(){
        rect1.color="green";
        rect2.color="red";
        rect3.color="red";
        rect4.color="red";
      },6000)
      
      bottomGroup.setVelocityYEach(-10);
     
      
      break;

    case 2:
      setTimeout(function(){
        rect1.color="red";
        rect2.color="green";
        rect3.color="red";
        rect4.color="red";
      },6000);
      leftGroup.setVelocityXEach(10)
      break;

    case 3:
      setTimeout(function(){
        rect1.color="red";
        rect2.color="red";
        rect3.color="green";
        rect4.color="red";
      },6000);
     
      topGroup.setVelocityYEach(10)
     
      break;
      
    case 4:
      setTimeout(function(){
        rect1.color="red";
        rect2.color="red";
        rect3.color="red";
        rect4.color="green";
      },6000);
      rightGroup.setVelocityXEach(-10)
      
      break;

  }
 
}
function spawnAmbulance(){
  if(frameCount%499===0){
    amb=createSprite(0,275,20,20);
    amb.addImage(ambImage);
    amb.velocityX=10;
    amb.scale=0.7;
    ambGroup.add(amb);
    
    
  }
}
function spawnFromLeft(){
  if(frameCount%100===0){
    spawnAmbulance()
    leftcar=createSprite(0,275,20,20);
    leftcar.velocityX=0;
    var num=Math.round(random(1,4))
    switch(num){
      case 1:leftcar.addImage(carImg1);
      break;
      case 2:leftcar.addImage(carImg2);
      break;
      case 3:leftcar.addImage(carImg3);
      break;
      case 4:leftcar.addImage(carImg4);
      break;
    }
    leftGroup.add(leftcar);
  }
}


function spawnFromRight(){
  if(frameCount%100===0){
    rightcar=createSprite(1300,350,20,20);
    rightcar.velocityX=0;
    var num=Math.round(random(1,4))
    switch(num){
      case 1:rightcar.addImage(rightcarImg1);
      break;
      case 2:rightcar.addImage(rightcarImg2);
      break;
      case 3:rightcar.addImage(rightcarImg3);
      break;
      case 4:rightcar.addImage(rightcarImg4);
      break;
    }
    rightGroup.add(rightcar);
   
  }
}


function spawnFromTop(){
  if(frameCount%100===0){
    topcar=createSprite(720,0,20,20);
    topcar.velocityY=0;
    var num=Math.round(random(1,4))
    switch(num){
      case 1:topcar.addImage(topcarImg1);
      break;
      case 2:topcar.addImage(topcarImg2);
      break;
      case 3:topcar.addImage(topcarImg3);
      break;
      case 4:topcar.addImage(topcarImg4);
      break;
    }
   topGroup.add(topcar);
  }
}


function spawnFromBottom(){
  if(frameCount%100===0){
    bottomcar=createSprite(650,600,20,20);
    bottomcar.velocityY=0;
    var num=Math.round(random(1,4))
    switch(num){
      case 1:bottomcar.addImage(bottomcarImg1);
      break;
      case 2:bottomcar.addImage(bottomcarImg2);
      break;
      case 3:bottomcar.addImage(bottomcarImg3);
      break;
      case 4:bottomcar.addImage(bottomcarImg4);
      break;
    }
    bottomGroup.add(bottomcar);
  }
}
