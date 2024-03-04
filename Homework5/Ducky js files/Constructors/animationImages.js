class animationImages
{
    constructor(path,x,y)
    {
        this.path = path;
        this.myImage = loadImage(this.path);
        this.x = x;
        this.y = y;
        this.speed = 5;
    }

    drawAnimation()
    {
        image(this.myImage,this.x,this.y)
    }

    //duck movement update
    updatePosition(duckyX,duckyY)
    {
        this.x = duckyX;
        this.y = duckyY;
    }


    
}
