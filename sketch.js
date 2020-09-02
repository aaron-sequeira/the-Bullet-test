//variables have been created 
var bullet,wall;
var speed,weight;
var thickness;
var guardrail,guardrail2;




function setup() {
  createCanvas(1600,400);
 
  //values for variables 
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  
  //sprites have been created 
  bullet = createSprite(50,200,100,10);
  bullet.velocityX = speed;
  bullet.shapeColor="white"
  wall = createSprite(1500,200,20,height/2);
  wall.shapeColor = color(80,80,80);
  
  guardrail = createSprite(800,300,1600,20);
  guardrail.shapeColor = "yellow"
  
  guardrail2 = createSprite(800,100,1600,20);
  guardrail2.shapeColor = "yellow"

}



function draw() {
  background("black");  
  
  if (hascollided(bullet,wall)) {
    
    bullet.velocityX = 0;
    var damage =0.5 * weight * speed * speed/
    (thickness *thickness * thickness);
} 
 
if(damage>10){
      bullet.shapeColor = color(255,0,0);
  }
  
 if (damage < 10) {
  bullet.shapeColor = color(0,255,0);
}
 

 drawSprites();
} 
  
 function hascollided(bullet,wall){

bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;
if (bulletRightEdge>=wallLeftEdge) {
  
        return true
}

    return false; 
 }
