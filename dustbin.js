class dustbin
{

    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.dustbinWidth = 200 ;
        this.dustbinHeight = 100 ;
        this.wallThickness = 20 ;
        this.angle = 0 ;

        this.bottomBody = bodies.rectangle(this.x ,this.y,this.dustbinWidth,this.wallThickness);
        this.leftWallBody = bodies.rectangle(this.x - this.dustbinWidth /2,this.y - this.dustbinHeight/2);
        Matter .Body.setAngle( this.leftWallBody , this.angle);

        this.rightWallBody = bodies.rectangle(this.x + this .dustbinWidth/2 , this.y - this.dustbinHeight/2);
        Matter.Body.setAngle(this.rightWallBody,-1* this.angle);
        World.add(world, this.bottomBody);
        World.add(world,this.leftWallBody);
        World.add(world,this.rightWallBody);
    }
        display () {
            var posBottom   = this.bottomBody.position ;
            var posLeft = this.leftWallBody.position ;
            var posRight = this.rightWallBody.position ;

            push() 
            translate (posBottom.x ,posBottom.y)
            rectMode(CENTER);
            stroke (255) ;
            angleMode (RADIANS);
             fill (255);
             rect(0,0,this,this.dustbinWidth,this.wallThickness);
          pop ();
        }



} 
    

     