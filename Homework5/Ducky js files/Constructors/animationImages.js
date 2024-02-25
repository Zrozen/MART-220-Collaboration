class animationImages
{
    constructor(fileName,x,y)
    {
        this.fileName = fileName;
        this.x = x;
        this.y = y;
        this.speed = 5;
    }

    drawAnimation()
    {
        image(this.fileName,this.x,this.y)
    }

    //duck movement code
    keyPressed()
    {
        if (keyCode === UP_ARROW)
        {
            y = y - 10;
        }
        else if (keyCode === DOWN_ARROW)
        {
            y = y + 10;
        }
        if (keyCode === LEFT_ARROW) 
        {
            x = x - 5;
        } 
        else if (keyCode === RIGHT_ARROW) 
        {
            x = x + 5;
        }
    }
}