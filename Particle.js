/*class Particle{
    constructor(x,y){
     
     this.y=y;   
     this.x=x;   
     
     this.body=Bodies.circle(x,y,10);
     this.color=color(random(0,255),random(0,255),random(0,255));

     World.add(world,this.body);

     }    

 display(){
   var pos =this.body.position;
    push();
    rectMode(CENTER);
    fill("white");
    ellipse(pos.x, pos.y,10);
    fill(this.color,this.color,this.color);
    pop();
     }

}*/
class Particle {
  constructor(x, y,r) {
      
      this.x=x;
      this.y=y;
      this.r=r;

      this.body = Bodies.circle(x, y, r);       
      this.color=color(random(0, 255), random(0, 255), random(0, 255));
      World.add(world, this.body);

  }
  display() {

      var pos = this.body.position;
      
      push();
      translate(pos.x, pos.y);
      fill(this.color)
      ellipseMode(RADIUS);
      ellipse(0, 0,this.r,this.r);
      pop();
  }

}