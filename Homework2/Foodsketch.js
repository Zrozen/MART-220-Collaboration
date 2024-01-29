function setup () 
{
    createCanvas(600,600);
}

function draw () 
{
    //thankyou color pallete generator on P5js Website !!!
    background('#c3fdfe');

    strokeWeight(2);

    //cake plate
    fill('orange');
    ellipse(250,300,250,50);
    ellipse(250,250,350,100);

    //cake base
    fill('pink');
    rect(100,200,300,50);
    rect(100,100,300,50);

    //cake frosting
    fill('white');
    rect(100,150,300,50);
    triangle(100,100,405,100,150,50);


    //cake strawberries
    fill('green');
    triangle(200,60,175,50,200,15);
    triangle(200,60,170,50,175,15);
    triangle(200,60,165,50,150,25);
    triangle(200,60,150,50,140,40);
    fill('red')
    ellipse(200,60,75,50);


   
}