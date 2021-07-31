class stone{
    constructor(x, y, r){
        var Option ={
            isStatic:false,
            restitution:0.2,
            density:1,
            frictionAir:0.1
        }
        this.r = 80;
        this.body = Bodies.circle(x, y, r, Option);
        World.add(world, this.body); 
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        stroke("pink");
        strokeWeight(12)
        fill("red")
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.r, this.r);
        pop(); 
    }
}