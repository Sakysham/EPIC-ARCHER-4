const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

var playerArrows = [];
var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  playerArcher = new PlayerArcher(
    340,
    playerBase.body.position.y - 180,
    120,
    120
  );

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );

  
 


}

function draw() {
  background("blue");

  Engine.update(engine);

  textAlign("center");
  textSize(50);
  text("EPIC ARCHERY STAGE 4", width / 2, 100);

  computerArcher.display()
  playerBase.display();
  playerArcher.display();
  computer.display();
  player.display();
  computerBase.display();

  



 for (var i = 0; i < playerArrows.length; i++) {
  showArrows(i, playerArrows);
}

}

function keyPressed() {

  if(keyCode === 32){
    var posX = playerArcher.body.position.x;
    var posY = playerArcher.body.position.y;
    var angle = playerArcher.body.angle+PI/2;

    var arrow = new PlayerArrow(posX, posY, 100, 10);

    arrow.trajectory = [];
    Matter.Body.setAngle(arrow.body, angle);
    playerArrows.push(arrow);

  }
}

function keyReleased () {

  if(keyCode === 32){
    if (playerArrows.length) {
      var angle = playerArcher.body.angle+PI/2;
      playerArrows[playerArrows.length - 1].shoot(angle);
    }
  }

}
function showArrows(index, arrows) {
  arrows[index].display();
}
