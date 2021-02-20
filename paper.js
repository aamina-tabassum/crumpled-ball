class Paper {
    constructor (x,y,radius){

        var options = {
            isStatic : true
        }
    
        this.paper = Matter.Bodies.circle(x,y,radius,options)
        Matter.World.add(world,this.paper)

        this.radius = radius

     

    }
    display(){
        ellipseMode()
        ellipse(this.paper.position.x,this.paper.position.y,this.radius,this.radius)
        if(keyDown("space")){
            isStatic : false
        }
       // this.paper2 = loadImage("paper.png")
    }
}