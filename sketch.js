const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var ground;
var pig1
var bird

function setup(){
    var canvas = createCanvas(900,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(500,370,80,80);
    box2 = new Box(700, 370,80, 80); 
    box3 = new Box(700, 100,80,80);
    box4 = new Box(500, 100, 80, 80);
    box5 = new Box(600,60, 80, 80);
    ground = new Ground(400,590,1000,10);
    pig1 = new Pig(600, 100);
    pig2 = new Pig(600,300);
    bird = new Bird(100, 370);
    log1 = new Log(600, 150, 290, PI/2);
    log2 = new Log(600, 80, 290, PI/2);
    log3 = new Log(660, 40, 100, PI/-7);
    log4 = new Log(580, 40, 100, PI/7);
    }

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    bird.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
}