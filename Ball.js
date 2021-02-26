class Ball {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution:1,
          friction:0.3,
          density:0.8
      }
      this.body = Bodies.circle(x,y,25,options);
      this.r= 25;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      ellipseMode(RADIUS);
      fill("purple");
      ellipse(0,0, this.r, this.r);
      pop();
    }
  };