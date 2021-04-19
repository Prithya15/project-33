const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImg;

function preload() {
  backgroundImg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
  
  //createSprite(400, 200, 50, 50);

  snow1=new Snow(random(0,800),random(0,250),5)
  snow2=new Snow(random(0,800),random(0,250),5)
  snow3=new Snow(random(0,800),random(0,250),5)
  snow4=new Snow(random(0,800),random(0,250),5)
  snow5=new Snow(random(0,800),random(0,250),5)
  snow6=new Snow(random(0,800),random(0,250),5)
  snow7=new Snow(random(0,800),random(0,250),5)
  snow8=new Snow(random(0,800),random(0,250),5)
  snow9=new Snow(random(0,800),random(0,250),5)
  snow10=new Snow1(random(0,800),random(0,250),5)
  snow11=new Snow1(random(0,800),random(0,250),5)
  snow12=new Snow1(random(0,800),random(0,250),5)
  snow13=new Snow1(random(0,800),random(0,250),5)
  snow14=new Snow1(random(0,800),random(0,250),5)
  snow15=new Snow1(random(0,800),random(0,250),5)
  snow16=new Snow1(random(0,800),random(0,250),5)
  snow17=new Snow1(random(0,800),random(0,250),5)
  snow18=new Snow1(random(0,800),random(0,250),5)
  snow19=new Snow1(random(0,800),random(0,250),5)
  snow20=new Snow1(random(0,800),random(0,250),5)
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine)

snow1.display()
snow2.display()
snow3.display()
snow4.display()
snow5.display()
snow6.display()
snow7.display()
snow8.display()
snow9.display()
snow10.display()
snow11.display()
snow12.display()
snow13.display()
snow14.display()
snow15.display()
snow16.display()
snow17.display()
snow18.display()
snow19.display()
snow20.display()


  drawSprites();
}