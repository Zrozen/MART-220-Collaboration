//ducky idle animation
var myAnimation = [];
var animations = [];
var i = 0; //ducky animation var
var j = 0; //ducky UPDATE animation var
 //collision detection


var idlePaths = [];

//loofahs
var pinkLoofah;
var greenLoofah;
var purpleLoofah;
var myLoofahs =[];

//ducky movement/animation vars
var duckyX = 400;
var duckyY = 400;

//tub stuff
var tubObject;

//bubbles
var myBubbles = [];
let collisionCount = 0;

//bubble movement
var bubbleSpeedX= 5
var bubbleSpeedY= 5


//timer
let timer = 20
let state= true
let startTime;

//sounds

var bubbleSound;
var backgroundSound;
var chompSound;



//preload images
function preload()
{
    idlePaths = loadStrings("Assets/Ducky Images/idle.txt");

    //background image
    backgroundTile = loadImage('Assets/Ducky Images/BathroomTile.jpg');

    // duck animation images
    duckyFront = loadImage('Assets/Ducky Images/Ducky9696.png');
    duckySideLeft = loadImage('Assets/Ducky Images/DuckySideLeft.png');
    duckySideRight = loadImage('Assets/Ducky Images/DuckySideRight.png')
    
    // loofah images
    loofahPink = loadImage('Assets/Ducky Images/Loofahs/loofah pink.png');
    loofahGreen = loadImage('Assets/Ducky Images/Loofahs/loofah green.png');
    loofahPurple = loadImage('Assets/Ducky Images/Loofahs/loofah purple.png')
    
    // font
    duckyFonts = loadFont('Assets/Ducky Font/Copyduck.otf');

    // sounds
    squeakSound = loadSound('Assets/Ducky Sounds/Squeak.wav');
    backgroundSound = loadSound('Assets/Ducky Sounds/Background Music.wav');
    chompSound = loadSound('Assets/Ducky Sounds/Chomp.wav');
}

function setup()
{
    createCanvas(800,600);

    //bubbles
    for(var b = 0; b < 75; b++)
    {
        myBubbles[b] = new bubbleShape(random(50,750),random(600,300),random(10,50), random(255), random(255),random(255));   
    }

    //loofahs
    for(var l = 0; l < 5; l++)
    {
        myLoofahs[l]= new loofahShape(loofahPink, random(width), random(height), 96);
        
    }
    //pinkLoofah = new loofahShape(loofahPink,300,300);
    //greenLoofah = new loofahShape(loofahGreen,400,400);
    //purpleLoofah = new loofahShape(loofahPurple,200,200);
   

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

 //sounds
 function mousePressed()
 {
     //backgroundSound.loop();

     if(backgroundSound.isPlaying())
     {
        backgroundSound.pause();
     }
     else
     {
        backgroundSound.play();
     }
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
   
    //loofah shapes
    for(var l = 0; l < myLoofahs.length; l++)
    {
        myLoofahs[l].updatePositionRandomly();
        myLoofahs[l].drawImage();
    }

    //loofah eating
    for (var l = 0; l < myLoofahs.length; l++) 
    {
        var loofah = myLoofahs[l];

        if(duckyX < loofah.x + loofah.diameter &&
            duckyX + 96 > loofah.x &&
            duckyY < loofah.y + loofah.diameter &&
            duckyY + 96 > loofah.y)
            {
                myLoofahs.splice(l,1);
                collisionCount--;
                
                squeakSound.play();
            }
    }

   
   
    //bubble movement
    fill('white');
    for (var b = 0; b < myBubbles.length; b++) 
    {
        myBubbles[b].updatePositionRandomly();
        myBubbles[b].draw();
    }

    //bubble check collision



    for (var b = 0; b < myBubbles.length; b++) {
        var bubble = myBubbles[b];

        if (duckyX < bubble.x + bubble.diameter &&
            duckyX + animations[i].x > bubble.x &&
            duckyY < bubble.y + bubble.diameter &&
            duckyY + animations[i].y > bubble.y) {
            collisionCount++;
            myBubbles.splice(b,1);

            chompSound.play();
        }
    }

    //console.log("Collision count: " + collisionCount);

   

    
   

    //duck shapes
    animations[i].updatePosition(duckyX, duckyY);
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
    textSize(75);
    text(collisionCount,90,150);

    
  
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


