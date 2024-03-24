var ghost1X = 100;
var ghost2Y = 300;
var ghost3X = 400;

var speed = 1;
var speedG3 =1;

var myAnimation;
var walkPaths = []
var idlePaths = []

function preload()
{
    background= loadImage('Assets/backgrounds/background.png');

    //animation strings
    walkPaths = loadStrings("Assets/Walking Animation/walkLeft.txt");
    idlePaths = loadStrings("Assets/Walking Animation/idle.txt");
    //idle = loadImage('Assets/Walking Animation/Main Character Front:idle.png');

    //cassettes
    greenCass= loadImage('Assets/Boom Box/greenTape.png');
    blueCass= loadImage('Assets/Boom Box/blueTape.png');
    redCass= loadImage('Assets/Boom Box/redTape.png');

    //ghosts
    ghost1= loadImage('Assets/Ghosts/Ghost Small 2.png');
    ghost2= loadImage('Assets/Ghosts/Ghost Tall.png');
    ghost3= loadImage('Assets/Ghosts/Ghost Small.png');


}

console.log("Walk paths:", walkPaths);
console.log("Idle paths:", idlePaths);

function setup()
{
    createCanvas(800,800);

    //myAnimation = new animationImage(walkLeftPaths,400,400);
   // myAnimation = new animationImage(400,400,150,150);
    
    //myAnimation.setAnimation('walk', walkPaths);
    //myAnimation.setAnimation('idle',idlePaths);
}

function draw()
{
    //background
    image(background,0,0);

    //cassettes
    image(greenCass,400,325);
    image(blueCass,700,400);
    image(redCass,250,500);

    //ghosts
    image(ghost1,ghost1X,500);
    //lil guy by boombox movement
    ghost1X +=speed;

    if(ghost1X >= 250)
    {
        speed *= -1;
    }
    else if(ghost1X <= 10)
    {
        speed *=-1;
    }
    
    //tall dude by tree
    image(ghost2,550,ghost2Y);

    ghost2Y += speed;

    if(ghost2Y >= 800)
    {
        speed *= -1;
    }
    else if(ghost2Y <= 10)
    {
        speed *= -1;
    }
    
    //chill lil guy on tomb
    image(ghost3,ghost3X,380);
    
    ghost3X += speedG3;

    if(ghost3X >= 450)
    {
        speedG3 *= -1;
    }
    else if(ghost3X <= 300)
    {
        speedG3 *= -1;
    }

    //main character
    
    //if (kb.pressing('d')) 
    //{
        //myAnimation.updatePosition('forward');
        //myAnimation.drawAnimation('walk');
    //}
    //else if (kb.pressing('a')) 
    //{
       // myAnimation.updatePosition('reverse');
       // myAnimation.drawAnimation('walk');
    //}
    //else 
    //{
       // myAnimation.drawAnimation('idle');
    //}

    
    

}


