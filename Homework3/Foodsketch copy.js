
var CAKEbase1X= 100
var CAKEbase1Y= 200
var CAKEbase2X= 100
var CAKEbase2Y= 100

var Frost1X=100
var Frost1Y=150
var Frost2X=100
var Frost2Y=100

var movement= 1

let valueCake= 'pink';
let valueFrosting= 'white';
let valueBackground= '#c3fdfe'

function setup () 
{
    createCanvas(600,600);
    movement = floor(random() * 10) + 1;
}


function draw () 
{
    //thankyou color pallete generator on P5js Website !!!
    background(valueBackground);
   

    strokeWeight(2);

    //cake plate
    fill('orange');
    ellipse(250,300,250,50);
    ellipse(250,250,350,100);

    //cake base
    fill(valueCake);

    rect(CAKEbase1X,CAKEbase1Y,300,50);
    
    if(CAKEbase1X <= 125)
    {
        movement*=-1;
    }
    if(CAKEbase1X >= 75)
    {
        movement*=-1;
    }
    CAKEbase1X += movement

    rect(CAKEbase2X,CAKEbase2Y,300,50);

    if(CAKEbase2X <= 125)
    {
        movement*=-1;
    }
    if(CAKEbase2X >= 75)
    {
        movement*=-1;
    }
    CAKEbase2X += movement



    //cake frosting
    fill(valueFrosting);
    rect(Frost1X,Frost1Y,300,50);
    if(Frost1X <= 125)
    {
        movement*=-1;
    }
    if(Frost1X >= 75)
    {
        movement*=-1
    }
    Frost1X += movement

    triangle(Frost2X,Frost2Y,405,100,150,50);
    if(Frost2X <= 125)
    {
        movement*=-1;
    }
    if(Frost2X >= 75)
    {
        movement*=-1
    }
    Frost2X += movement


 
    //cake strawberries
    fill('green');
    triangle(200,60,175,50,200,15);
    triangle(200,60,170,50,175,15);
    triangle(200,60,165,50,150,25);
    triangle(200,60,150,50,140,40);
    fill('red')
    ellipse(200,60,75,50);

    //name
    text('By: Lila Freese',500,575)
    //instructions
    text('Press the letter C on your keyboard to change the cake flavor to chocolate!', 100,400)
    text('To change the cake back to strawberry, press any other key!',100,450)
    //title
    text('Cake Flavors!',25,50)
   
}


function keyTyped()
{
    if (key === 'c')
    {
        valueCake = '#4e1d1d';
        valueFrosting = '#7d0808';
    }
    else
    {
        valueCake = 'pink'
        valueFrosting = 'white'
    }
    
}


