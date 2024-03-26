var ghost1X = 100;
var ghost2Y = 300;
var ghost3X = 400;
//var ghost1;
var speed = 1;
var speedG3 =1;

//cassette vars
var cassetteXgreen = 400;
var cassetteYgreen = 325;

var cassetteXred = 250;
var cassetteYred = 500;

var cassetteXblue = 700;
var cassetteYblue = 400;

var cassette;

var g = 0;

var myCassettesGreen = []

//gravestones
var grave1;
var grave2;
var grave3;
var grave4;

var t = 0; //grave 1
var c = 0; //grave 2
var y = 0; //grave 3
var p = 0; //grave 4
var q = 0; //grave 5
var w = 0; //grave 6

var myGraves1 = []
//var graveImage;
var myGraves2 = []
var myGraves3 = []
var myGraves4 = []
var myGraves5 = []
var myGraves6 = []
//animations
var myAnimation;
var myWalkAnimation;
var walkPaths = []
var idlePaths = []

//temp MC vars
//var mainSpriteX = 400;
//var mainSpriteY = 400;

function preload()
{
    background= loadImage('Assets/backgrounds/background.png');

    //animation strings
    walkPaths = loadStrings("Assets/Walking Animation/walkLeft.txt");
    idlePaths = loadStrings("Assets/Walking Animation/idle.txt");
    
    //temp stationary character
    //mainSprite = loadImage("Assets/Walking Animation/Main Character Front:idle.png");

    //cassettes
    greenCass= loadImage('Assets/Boom Box/greenTape.png');
    blueCass= loadImage('Assets/Boom Box/blueTape.png');
    redCass= loadImage('Assets/Boom Box/redTape.png');

    //ghosts
    ghost1= loadImage('Assets/Ghosts/Ghost Small 2.png');
    ghost2= loadImage('Assets/Ghosts/Ghost Tall.png');
    ghost3= loadImage('Assets/Ghosts/Ghost Small.png');

    //graves
    grave1= loadImage('Assets/Headstones/classic headstone.png');
    grave2= loadImage('Assets/Headstones/cross headstone.png');
    grave3= loadImage('Assets/Headstones/Crypt.png');
    grave4= loadImage('Assets/Headstones/Three Panel Headstone.png')
    grave5= loadImage('Assets/Headstones/headstone small cross.png');
    grave6= loadImage('Assets/Headstones/headstone small cross.png');


}

console.log("Walk paths:", walkPaths);
console.log("Idle paths:", idlePaths);

function setup()
{
    createCanvas(800,800);

    myAnimation = new animationImage(400,400,125,219);
    myAnimation.loadAnimation('idle', idlePaths);
    myAnimation.loadAnimation('walk', walkPaths);

    //ghost1 = createSprite(ghost1X,500,75,84);


    //myAnimation.setAnimation('walk', walkPaths);
    //myAnimation.setAnimation('idle',idlePaths);

    myCassettesGreen[g] = new cassetteShapes(greenCass,400,325,40);

    myGraves1[t] = new graveShapes(grave1,675,475,100);//classic 
    //graveImage = createSprite(675,475,100,'static');
    //graveImage.img = 'Assets/Headstones/classic headstone.png';
    //graveImage.diameter = 100;

    myGraves2[c] = new graveShapes(grave2,350,1500,100);//cross
    myGraves3[y] = new graveShapes(grave3,300,425,200);//crypt
    myGraves4[p] = new graveShapes(grave4,675,265,100);//three panel
    myGraves5[q] = new graveShapes(grave5,250,230,100);//small top cross
    myGraves6[w] = new graveShapes(grave6,450,230,100);//small top cross 2
}

function draw()
{
    //background
    image(background,0,0);

    //cassettes
    //image(greenCass,cassetteXgreen,cassetteYgreen);
    //image(blueCass,cassetteXblue,cassetteYblue);
    //image(redCass,cassetteXred,cassetteYred);

    //graves
    myGraves1[t].drawImage();
    // graves
    //for (var i = 0; i < myGraves1.length; i++) {
        //myGraves1[i].drawImage();
    //}
    myGraves2[c].drawImage();
    myGraves3[y].drawImage();
    myGraves4[p].drawImage();
    myGraves5[q].drawImage();
    myGraves6[w].drawImage();

    
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

    if(kb.pressing('d'))
    {
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('walk');    
       
    }
    else if(kb.pressing('a'))
    {
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('walk');        
    }
    


    

     //temp main character
     //image(mainSprite,mainSpriteX,mainSpriteY);

     
    

    
    

}




