//produce vals
var apples;
var golden_apples;
var golden_apple_cost;
var apple_farm;
var golden_apple_farm;
var jelly_beans;
var halloween;

//game objects
var dentist;
var cursor;
var BG;
var apple_effect;

var golden_apple;

//game properties
var health;
var damage;
var coins;
var create_apple_particle;
var clicks;
var health_reduction;

//animation variables
var apple_cursor_img;;
var candy_img;
var apple_img;
var cursor_img;
var dentist_img;
var golden_apple_img;
var golden_apple_selected_img;
var shop_background_img;

//random scafold objects
var dentist_line1;
var dentist_line2;
var dentist_line3;
var dentist_line4;
var dentist_line5;

var shop_box1;
var shop_box2;
var shop_line1;
var shop_line2;
var shop_line3;
var shop_line4;

function preload(){
  
     apple_cursor_img = loadImage('media/apple_cursor.png');
     candy_img = loadImage('media/candy.png');
     apple_img = loadImage('media/aplle.png');
     cursor_img = loadImage('media/cursor.png');
     dentist_img = loadImage('media/dentist.png');
     golden_apple_img = loadImage('media/golden_apple.png');
     golden_apple_selected_img = loadImage('media/golden_apple_selected.png');
     shop_background_img = loadImage('media/shop_background.png');
     gold_coin_img = loadImage('media/gold_coin.png');
}

function setup(){
//cheat prevension
console.log("are you cheating or bug fixing ?");

//produce vals
    apples = 0;
    golden_apples = 0;
    golden_apple_cost = 100;
    apple_farm = 0;
    golden_apple_farm = 0;
    jelly_beans = 0;
    halloween = 0;

//coins initial value
coins = 0;

//fading apples
create_apple_particle = true;
apple_effect = createSprite(Math.round(200,200,20,20));

//cursor setup
  cursor = createSprite(200,200,20,20);
  cursor.addImage(apple_cursor_img);
  cursor.scale = 0.1;
  cursor.depth = 2;


// dentist setup
  dentist = createSprite(75,200,20,20);
  dentist.addImage("dentist_img", dentist_img);
  dentist.scale = 0.1;
  
  health = 1000000;
  damage = 1;

  //dentist borders

    dentist_line1 = createSprite(150,200,2,400);
    dentist_line1.shapeColor = "#6c2b0c";
    dentist_line1.depth = 1;
    
    dentist_line2 = createSprite(75,300,150,2);
    dentist_line2.shapeColor = "#6c2b0c";
    dentist_line2.depth = 1;
    
    dentist_line3 = createSprite(1,200,2,400);
    dentist_line3.shapeColor = "#6c2b0c";
    dentist_line3.depth = 1;
    
    dentist_line4 = createSprite(75,399,150,2);
    dentist_line4.shapeColor = "#6c2b0c";
    dentist_line4.depth = 1;
        
    dentist_line5 = createSprite(75,1,150,2);
    dentist_line5.shapeColor = "#6c2b0c";
    dentist_line5.depth = 1;
    
    dentist.depth = 1;
    
    
  //shop setup
     shop_box1 = createSprite(275,375,250,50);
     shop_box1.depth = 1;
     
     shop_box2 = createSprite(275,25,250,50);
     shop_box2.depth = 1;
     
     
     shop_line1 = createSprite(275,350,250,2);
     shop_line1.shapeColor = "#6c2b0c";
     shop_line1.depth = 1;
     
     shop_line2 = createSprite(275,398,250,2);
     shop_line2.shapeColor = "#6c2b0c";
     shop_line2.depth = 1;
     
     shop_line3 = createSprite(275,50,250,2);
     shop_line3.shapeColor = "#6c2b0c";
     shop_line3.depth = 1;
     
     shop_line4 = createSprite(275,2,250,2);
     shop_line4.shapeColor = "#6c2b0c";
     shop_line4.depth = 1;
  
    //shop back ground
     BG = createSprite(300,200,300,400);
     BG.addImage("shop_background_img", shop_background_img);
     BG.scale = 0.5;
     BG.depth = 1;

    clicks = 0;
    health_reduction = 1000;

}

function draw(){
background("white");

//cursor
  cursor.x = World.mouseX;
  cursor.y = World.mouseY;

//dentist function 
  //health bar 
    textSize(20);
    textFont("Times New Roman");
    text("Health: "+health,10,60);
    
  //damage
    textSize(20);
    textFont("Times New Roman");
    text("Damage: "+damage,37,340);
    
  //coins
    textSize(20);
    textFont("Times New Roman");
    text("Coins: "+coins,37,370);
      
    //shop
    
      //golden apple shop
        golden_apple = createSprite(220,100,20,20);
        golden_apple.addImage("media/golden_apple.png",golden_apple_img);
        golden_apple.scale = 2;
        golden_apple.setCollider("circle",-20,-10,15);
        
        //when apple is sellected
          if(mouseIsOver(golden_apple)){
            golden_apple.addImage("media/golden_apple_selected.png",golden_apple_selected_img);
          
          }
          else{
            golden_apple.addImage("media/golden_apple_img.png", golden_apple_img);
          }

        //cost of golden apple 
          //if (mouseClicked()&&mouseIsOver(golden_apple)){}
          //display
            //text(golden_apple_cost,200,350)
          
          
            
//cps calculator

    
drawSprites();
}

//function mouseClicked(){
  //properties 

      //dentist.scale = 0.12;
    //health = health -damage;
    //coins ++;
    //clicks++;
  
  //doctor scale 
    setInterval(dentistScaleReset, 250)
    
      apple_effect = createSprite(Math.round(random(10,150)),Math.round(random(290,20)),20,20);
      apple_effect.addImage("media/gold_coin.png",gold_coin_img);
      apple_effect.scale = 0.5;
      apple_effect.alpha = 1;
      create_apple_particle = false;

      apple_effect.alpha = apple_effect.alpha - 0.03;
      apple_effect.velocityY = 2;
      if(apple_effect.alpha <= 0.5){
        apple_effect.destroy();
        create_apple_particle = true;
       }
      
  //doctor health reduction
    setInterval(reduce_doctor_health,health_reduction)
    

function dentistScaleReset(){
  dentist.scale = 0.1;
}

function reduce_doctor_health(){
  health = health - 1;
}


    
    

        