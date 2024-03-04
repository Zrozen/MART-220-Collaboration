//ducky idle animation
var myAnimation = [];
var animations = [];
var i = 0;
var j = 0;

var idlePaths = [];

//ducky movement/animation vars
var duckyX = 400;
var duckyY = 400;

//tub stuff
var tubObject;

//bubbles
var myBubbles = [];

//bubble movement
var bubbleSpeedX= 5
var bubbleSpeedY= 5


//timer
let timer = 20
let state= true
let startTime;



//preload images
function preload()
{
    idlePaths = loadStrings("Assets/Ducky Images/idle.txt");

    //background image
    backgroundTile = loadImage('Assets/Ducky Images/BathroomTile.jpg');

    // duck animation images
    duckyFront = loadImage('Assets/Ducky Images/Ducky9696.png');
    duckySideLeft = loadImage('Assets/Ducky Images/DuckySideLeft.png');
    duckySideRight = loadImage('Assets/Ducky Images/DuckySideRight.png');
    
    // font

    duckyFonts = loadFont('Assets/Ducky Font/Copyduck.otf');
}

function setup()
{
    createCanvas(800,600);

    //bubbles
    for(var b = 0; b < 20; b++)
    {
        myBubbles[b] = new bubbleShape(random(50,750),random(600,300),random(10,50), random(255), random(255),random(255));   
    }

    //bubbles random movement
 

    //duck shapes
    for(var i = 0; i < idlePaths.length; i++)
    {   
    myAnimation = new animationImages(idlePaths[i],duckyX,duckyY);
    animations[i] = myAnimation;
    }
    //duck shapes
    //myAnimation = new animationImages(duckyFront,duckyX,duckyY);
    //animations[0] = myAnimation;
    //myAnimation = new animationImages(duckySideLeft,duckyX,duckyY);
    //animations[1] = myAnimation;
   // myAnimation = new animationImages(duckyFront,duckyX,duckyY);
   // animations[2] = myAnimation;
   // myAnimation = new animationImages(duckySideRight,duckyX,duckyY);
    //animations[3] = myAnimation;
   // myAnimation = new animationImages(duckyFront,duckyX,duckyY);
    //animations[4] = myAnimation;
    //myAnimation = new animationImages(duckySideLeft);
    
   
   
   
    //how often animations shift
    setInterval(incrementIdleIndex,1000);
    

    //tub shapes
    tubObjectWater = new tubShape(0,300,800,700,'#5cceff');
    tubObjectLeftSide = new tubShape(0,300,50,400,'white');
    tubObjectRightSide = new tubShape(750,300,50,600,'white');

}



function draw()
{
   //background 
   background(0);
   image (backgroundTile,0,0);

   //tub shapes
   tubObjectWater.display();
   tubObjectLeftSide.display();
   tubObjectRightSide.display();

   //facet shapes
   fill('grey');
   rect(400,200,25,50);
   fill('#c0c0c0');
   rect(400,150,25,70);
   //facet handles
   fill('grey');
   rect(325,150,25,50);
   fill('#c0c0c0');
   rect(300,165,50,25);
   fill('grey');
   rect(475,150,25,50);
   fill('#c0c0c0');
   rect(475,165,50,25);


   //intro-title
  
   textFont(duckyFonts);
   //textSize(75);
  // fill('blue');
   //text('Bubble Ducky!', 90,100);
   //textSize(75);
   //fill('white');
   //text('Bubble Ducky!',100,100);

   
  
    //bubbles  RANDOM MOVEMENT
    

    
    //bubbles  EATING/DRAWING
    fill('white');
    for (var b = 0; b < myBubbles.length; b++) 
    {
        var bubble = myBubbles[b];

        if (dist(duckyX, duckyY, bubble.x, bubble.y) > 50)  

       {
          bubble.draw(); //draw bubble if not touching
       }
    }

    //bubble movement
    for (var b = 0; b < myBubbles.length; b++) 
    {
        myBubbles[b].updatePositionRandomly();
        myBubbles[b].draw();
    }
    
    
   

    //duck shapes
    animations[i].drawAnimation();


    //timer
    square()
    textAlign(CENTER, CENTER);
    textSize(25);
    text('Eat all the bubbles', 400,50);
    text('before the time runs out!',400,100);
    
    ellipse(650,75,100);

    textSize(75);
    fill('blue');
    text(timer, 650, 75);
    if (frameCount % 60 == 0 && timer > 0) 
    { 
        timer --;
    }

    //bubble counter
    fill('white');
    rect(25,25,150,200);
    fill('blue');
    textSize(25);
    text('bubble',90,50);
    text('counter:',90,75);

  
}



//how often animation runs
function incrementIdleIndex()
{
    i++;
    if (i >= animations.length)
    {
        i = 0;
    }
}

//move ducky with arrow keys
function keyPressed()
{
    if(keyCode === UP_ARROW)
    {
        duckyY -= 10;
    }
    else if(keyCode === DOWN_ARROW)
    {
        duckyY +=  10;
    }
    if(keyCode === LEFT_ARROW)
    {
        duckyX -= 10;
    }
    else if(keyCode === RIGHT_ARROW)
    {
        duckyX += 10;
    }

    for(var j = 0; j < animations.length; j++)
    {
        animations[j].updatePosition(duckyX, duckyY);
    }
}


