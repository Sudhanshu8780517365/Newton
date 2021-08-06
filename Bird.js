class Bird  {
  constructor(x,y,r){
    this.body=Bodies.circle(x,y,r)
      this.x=x
    this.y=y
    this.r=r
    World.add(world,this.body)
 
  }

  display() {
 fill("purple")
    circle(this.body.position.x,this.body.position.y,this.r)
  
  }
}
