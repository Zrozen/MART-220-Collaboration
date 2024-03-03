//speed of light //1024 divided by 2 is 512
let lightFollower;


//images
let bg; 
let vlad;
let y= 0;

//font
let myFont;

//timer
let timer = 10
let state= true
let startTime;

function preload() 
{
    bg = loadImage('Assets/Vlad_Images/Church10241024.png');
    vlad = loadImage('Assets/Vlad_Images/Vlad Size 9696.png');
    endScreen = loadImage('Assets/Vlad_Images/Ending Screen 600-450.jpg');
    myFont = loadFont('Assets/Font/Font_Honk/Honk-Regular-VariableFont_MORF,SHLN.ttf');
}

function setup ()
{
    createCanvas(1024,1024);

    setInterval(doSomething, 1000) 

 lightFollower = 
    {
     x: width / 2,
      y: height / 2,
       speed: 0.02
    }

    startTime = millis();

    
    textFont(myFont);
}

function doSomething() 
{
    console.log("increase speed");
  
    // flip a boolean variable 
    // to the opposite state
    
}

function draw()
{
    //background + Vlad
    image(bg,0,0);
    image(vlad,mouseX,mouseY);

    //timer event
    let ellapsedTime = millis() - startTime;
    if (ellapsedTime > 10000)
    {
        lightFollower.speed = 0.1;
    }
   

    //light Ball
    let dx = mouseX - lightFollower.x;
    let dy = mouseY - lightFollower.y;

    lightFollower.x += dx * lightFollower.speed;
    lightFollower.y += dy * lightFollower.speed;
    

    //LightFollower
    fill('#d5a504');
    ellipse(lightFollower.x,lightFollower.y,60,60); 

    //timer display
    square()
    textAlign(CENTER, CENTER);
    textSize(25);
    text('Light Speed Increased in:', 150,50);
    textSize(75);
    text(timer, 325, 50);
    if (frameCount % 60 == 0 && timer > 0) 
    { 
        timer --;
    }

    //title
    textSize(50);
    text('Runaway Vlad!',850,50);
    textSize(25);
    text('Keep Vlad out of the light!',850,100);
    text('Created by: Lila Freese',850,1000);

    //end screen
    let d= dist(mouseX,mouseY,lightFollower.x,lightFollower.y);

    if(d < 10)
    {
    image(endScreen,200,200);
    fill ('gray');
    rect(200,500,600,200);
    fill('white');
    textSize(50);
    text('Oh Darn!',500,550);
    text('You got dusted',500,600);
    }
    
    

}
