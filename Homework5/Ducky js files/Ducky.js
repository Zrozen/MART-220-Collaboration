//ducky idle animation
var myAnimation;
var animations = [];
var i = 0;
//ducky movement/animation vars
var duckyX = 100;
var duckyY = 100;

//tub stuff
var tubObject;
//bubbles
var myBubbles = [];


//preload images
function preload()
{
    
    backgroundTile = loadImage('Assets/Ducky Images/BathroomTile.jpg');
    duckyFront = loadImage('Assets/Ducky Images/Ducky9696.png');
    duckySideLeft = loadImage('Assets/Ducky Images/DuckySideLeft.png');
    duckySideRight = loadImage('Assets/Ducky Images/DuckySideRight.png');
    
}

function setup()
{
    createCanvas(800,600);

    //bubbles
    for(var i = 0; i < 200; i++)
    {
        myBubbles[i] = new bubbleShape(random(50,750),random(600,300),random(10,50), random(255), random(255),random(255)); 
    }

    //duck shapes
    myAnimation = new animationImages(duckyFront,duckyX,duckyY);
    animations[0] = myAnimation;
    myAnimation = new animationImages(duckySideLeft,duckyX,duckyY);
    animations[1] = myAnimation;
    myAnimation = new animationImages(duckyFront,duckyX,duckyY);
    animations[2] = myAnimation;
    myAnimation = new animationImages(duckySideRight,duckyX,duckyY);
    animations[3] = myAnimation;
    myAnimation = new animationImages(duckyFront,duckyX,duckyY);
    animations[4] = myAnimation;
    myAnimation = new animationImages(duckySideLeft);

   
   

    setInterval(incrementIdleIndex,10000);
    

    //tub shapes
    tubObjectWater = new tubShape(0,300,800,700,'#5cceff');
    tubObjectLeftSide = new tubShape(0,300,50,400,'white');
    tubObjectRightSide = new tubShape(750,300,50,600,'white');

}



function draw()
{
   background(0);
   image (backgroundTile,0,0);

   //tub shapes
   tubObjectWater.display();
   tubObjectLeftSide.display();
   tubObjectRightSide.display();

   //bubbles
   for(var i = 0; i < myBubbles.length; i++)
    {
        myBubbles[i].draw();
    }
   

    //duck shapes

   for(var i = 0; i <animations.length; i++)
   {
    animations[i].drawAnimation();
   }
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