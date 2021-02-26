class Chain{
    constructor(bodyA, bodyB,xoffset){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:xoffset,y:0}
            
        }
        this.chain = Constraint.create(options);
        this.xoffset=xoffset;
        World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        stroke("white")
        line(pointA.x, pointA.y, pointB.x+this.xoffset, pointB.y);
    }
    
}