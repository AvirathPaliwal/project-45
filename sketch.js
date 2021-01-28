START = 1
PLAY = 2
END = 0

var bg, bg_img;
var bike, bike_img;

var house, house_img;

var man, man_wait, man_running;

var ib;

var boy, girl, boy_img, girl_img;

var women, women_running, women_wait;

var choose, choose_img;

var story, story_img;

var names, name_img;

var viresGroup, maskGroup,sanitizerGroup;

var gameState = START

var Sound, jumpSound;

var virus, virus_img, virus2_img, virus3_img;
var heart, heart2, heart3, heart_img, heart2_img, heart3_img;
var heartCount = 3,score = 0,maskCount = 0,sanitizerCount=0;
var pause, pause_img
var funny1, funny1_img;
var mask, mask_img,mask2,mask2_img,sanitizer,sanitizer_img,sanitizer2,sanitizer2_img;

function preload() {
  bg_img = loadImage("backgroud/sunrise.jpg");
  man_wait = loadAnimation("wait.png");
  man_running = loadAnimation("run/run1.png", "run/run2.png", "run/run3.png", "run/run4.png", "run/run5.png", "run/run6.png", "run/run7.png",
"run/run8.png");
  house_img = loadImage("backgroud/background3.png");
  bike_img = loadAnimation("bike/bike1.png", "bike/bike2.png", "bike/bike3.png", "bike/bike4.png", "bike/bike5.png", "bike/bike6.png",
    "bike/bike7.png", "bike/bike8.png", "bike/bike9.png", "bike/bike10.png");
  boy_img = loadImage("boy.png");
  girl_img = loadImage("girl.png");
  women_wait = loadAnimation("girl/wait.png");
  women_running = loadAnimation("girl/girl1.png", "girl/girl2.png", "girl/girl3.png", "girl/girl4.png", "girl/girl5.png", "girl/girl6.png",
"girl/girl7.png", "girl/girl8.png", 
"girl/girl9.png");
  choose_img = loadImage("choose.png");
  story_img = loadImage("storyline.png");
  name_img = loadImage("name.png");
  // Sound=loadSound("sound/backgroundsound.mp4");  
  jumpSound = loadSound("sound/jumpsound.m4a");

  virus_img = loadImage("viress/covid-19.png");
  virus2_img = loadImage("viress/vires.png");
  virus3_img = loadImage("viress/vires2.png");
  heart_img = loadImage("heart.png");
  pause_img = loadImage("pause.png");
  funny1_img = loadImage("funny/abayega .png");
  mask_img = loadImage("protect/mask.png");
  mask2_img = loadImage("protect/mask2.png");
  sanitizer_img = loadImage("protect/santizer.png");
  sanitizer2_img = loadImage("protect/sanitizer2.png");
}

function setup() {
  createCanvas(1300, 700);

  // background
  bg = createSprite(700, 300, 10, 10);
  bg.addImage("backgrounds", bg_img);
  bg.visible = false;
  bg.scale = 3.2
  // house
  house = createSprite(350, 500, 10, 10);
  house.addImage("h", house_img)
  house.visible = false;
  house.scale = 2
  house.lifetime = 2010
  // man
  man = createSprite(100, 600, 10, 10);
  man.addAnimation("wait", man_wait);
  man.visible = false
  man.addAnimation("run", man_running);
  // ib 
  ib = createSprite(700, 680, 1400, 5);
  ib.visible = false;
  ib.shapeColor = "red"
  // women
  women = createSprite(100, 615, 10, 10);
  women.addAnimation("wait2", women_wait);
  women.visible = false;
  women.addAnimation("run2", women_running);

  choose = createSprite(650, 250, 10, 10);
  choose.addImage("c", choose_img);
  choose.scale = 0.6

  story = createSprite(700, 500, 10, 10);
  story.addImage("storytime", story_img);
  story.scale = 0.7

  names = createSprite(650, 70, 10, 10);
  names.addImage("name", name_img);
  names.scale = 0.6
  heart = createSprite(469, 34, 10, 10);
  heart.scale = 0.09;
  heart.visible = false;
  mask2 = createSprite(661,33,10,10);
  mask2.addImage("mask2",mask2_img);
  mask2.visible=false;
  mask2.scale=0.2
  sanitizer2 = createSprite(829,33,10,10);
  sanitizer2.addImage("sanitizer2",sanitizer2_img);
  sanitizer2.visible=false;
  sanitizer2.scale=0.10


  funny1 = createSprite(1100, 500, 10, 10);
  funny1.addImage("f1", funny1_img);
  funny1.scale = 0.09
  swanpboy()
  swanpgirl()



  virusGroup = createGroup();
  maskGroup = createGroup();
  sanitizerGroup = createGroup();

}

function draw() {
  //Sound.play();
  background(0);
  drawSprites();
  textSize(20);
  fill("black");
  text("DISTACE   :  " + score, 1000, 45);
  heart.addImage("h", heart_img);

  textSize(20);
  fill("black")
  text("  : " + heartCount, 485, 36);
  text(mouseX + "," + mouseY, mouseX, mouseY)
  //score += 1

  textSize(20);
  fill("black");
  text(" :" + maskCount, 679, 43);

  textSize(20);
  fill("black");
  text(" :" + sanitizerCount,837,43);
  if (gameState === START) {

    if (mousePressedOver(boy)) {
      man.visible = true;
      bg.visible = true;
      house.visible = true;
      bg.velocityX = -6;
      boy.visible = false;
      girl.visible = false;
      choose.visible = false;
      story.visible = false;
      names.visible = false;
      heart.visible = true;
      funny1.visible = false;
      sanitizer2.visible=true
      mask2.visible=true;
      gameState = PLAY;
    }

    if (mousePressedOver(girl)) {
      women.visible = true;
      bg.visible = true;
      house.visible = true;
      bg.velocityX = -6;
      mask2.visible=true;
      sanitizer2.visible=true;
      boy.visible = false;
      girl.visible = false;
      choose.visible = false;
      story.visible = false;
      names.visible = false;
      heart.visible = true;
      funny1.visible = false;
      gameState = PLAY;
    }

  }

  if (gameState === PLAY) {
    seanpbike();
    swapmask();
    swapsanitizer();
    score = score + Math.round(getFrameRate()/60);
    if (keyDown("space")) {
      jumpSound.play();
      man.velocityY = -10
      women.velocityY = -10
    }
    man.velocityY += 0.5;
    women.velocityY += 0.5;

    swapvirus()
    if (keyDown(UP_ARROW)) {
      man.changeAnimation("run", man_running);
      women.changeAnimation("run2", women_running);
      house.velocityX = -3

    }

    for (var i = 0; i < virusGroup.length; i++) {
      if (virusGroup.get(i).isTouching(man) && virusGroup.isTouching(women)) {
        virusGroup.get(i).destroy();
        heartCount -= 1;
        maskCount -= 1;
        sanitizerCount-=1;
      }
    }
    //if (maskCount === 0 && virusGroup.isTouching(man)) {

    //}

    for (var d = 0; d < maskGroup.length; d++) {
      if (maskGroup.get(d).isTouching(man) && maskGroup.isTouching(women)) {
        maskGroup.get(d).destroy();
        maskCount += 1
      }
    }
    for(var j = 0; j <sanitizerGroup.length; j++){
       if(sanitizerGroup.get(j).isTouching(man) && sanitizerGroup.isTouching(women)){
          sanitizerGroup.get(j).destroy();
          sanitizerCount+=1

       }
    }







  }

  if (heartCount === 0) {
    gameState = END;
  }




  if (gameState === END) {

  }

  if (bg.x < 0) {
    bg.x = bg.width / 2;
  }

  man.collide(ib);
  women.collide(ib);

}

function swanpboy() {
  boy = createSprite(200, 200, 10, 10);
  boy.addImage("b", boy_img);
}

function seanpbike() {
  if (frameCount % 1300 === 0) {
    bike = createSprite(0, 450, 20, 20);
    bike.addAnimation("b", bike_img);
    bike.scale = 2
    bike.velocityX = 6
    bike.lifetime = 500;
  }
}

function swanpgirl() {
  girl = createSprite(1100, 200, 10, 10);
  girl.addImage("girl", girl_img);
  girl.scale = 0.5
}

function swapvirus() {
  if (frameCount % 200 === 0) {
    virus = createSprite(1300, 600, 10, 10);
    virus.y = Math.round(random(350,600));
    virus.velocityX = -(6+3*score/100);
    virus.scale = 0.2;
    var v = Math.round(random(1, 3))
    switch (v) {
      case 1:
        virus.addImage("b", virus_img);
        break;
      case 2:
        virus.addImage("b2", virus2_img);
        break;
      case 3:
        virus.addImage("b3", virus3_img);
        break;
      default:
        break;

    }
    virus.lifetime = 500;
    virusGroup.add(virus);
  }

}



function swapmask() {
  if (frameCount % 1200 === 0) {
    mask = createSprite(1350, 500, 10, 10);
    mask.y = Math.round(random(100, 500));
    mask.addImage("mask", mask_img);
    mask.scale = 0.09;
    mask.velocityX = -6;
    //time = distance/speed   
    mask.lifetime = 500;
    maskGroup.add(mask);
  }
}

function swapsanitizer(){
    if(frameCount%1100 === 0){
       sanitizer = createSprite(1350,500,10,10);
       sanitizer.y = Math.round(random(200,400));
       sanitizer.addImage("sanitizer",sanitizer_img);
       sanitizer.scale=0.20;
       sanitizer.velocityX = -6;
       sanitizer.lifetime = 500;
       sanitizerGroup.add(sanitizer);
    }

}

