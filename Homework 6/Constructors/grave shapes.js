class graveShapes

{
    constructor(img,x,y,diameter)
    {
        this.myImage = img;
        this.x = x;
        this.y = y;
        this.diameter = diameter;
    }

    drawImage()
    {
        image(this.myImage,this.x,this.y,this.diameter)
    }
}