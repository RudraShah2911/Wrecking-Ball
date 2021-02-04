const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, ground1, ground2, slingShot
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;
var ball 

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground (600,390,1200,20)
    //ground1 = new Ground (390,265,200,20)
    //ground2 = new Ground (800,200,200,20)

    box1 = new Box (330,235,30,40)
    box2 = new Box (360,235,30,40)
    box3 = new Box (390,235,30,40)
    box4 = new Box (420,235,30,40)
    box5 = new Box (450,235,30,40)
    box6 = new Box (360,195,30,40)
    box7 = new Box (390,195,30,40)
    box8 = new Box (420,195,30,40)
    box9 = new Box (390,155,30,40)

    box10 = new Box (330,275,30,40)
    box11 = new Box (360,275,30,40)
    box12 = new Box (390,275,30,40)
    box13 = new Box (420,275,30,40)
    box14 = new Box (450,275,30,40)
    box15 = new Box (330,115,30,40)
    box16 = new Box (450,150,30,40)
    box17 = new Box (330,85,30,40)
    box18 = new Box (360,85,30,40)
    box19 = new Box (420,85,30,40)
    box20 = new Box (450,85,30,40)

    ball = new Ball (200,350,20)

    slingShot = new Slingshot (ball.body, {x : 250, y : 150})

}

function draw(){
    background("white")
    Engine.update(engine)

    ground.display();
    //ground1.display();
    //ground2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    ball.display();

    slingShot.display();


}

function mouseDragged(){
    Matter.Body.setPosition (ball.body, {x : mouseX, y : mouseY})
}

/*function mouseReleased(){
    slingShot.fly()
}
function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(ball.body);
    }
}*/