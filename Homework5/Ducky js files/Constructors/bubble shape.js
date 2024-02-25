class bubbleShape
{
    constructor(x,y,diameter)
    {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
    }

    draw()
    {
        ellipse(this.x, this.y, this.diameter);
    }

}