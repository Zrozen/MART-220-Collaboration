class animationImages
{
    constructor(path,x,y)
    {
        this.path = path;
        this.x = x;
        this.y = y;
        this.speed = 5;
    }

    drawAnimation()
    {
        image(this.path,this.x,this.y)
    }

    //duck movement update
    updatePosition(duckyX,duckyY)
    {
        this.x = duckyX;
        this.y = duckyY;
    }


    
}
