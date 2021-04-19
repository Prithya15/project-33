class Snow{
      constructor(x,y,diameter){
            var options={
                restitution:0.5,
                friction:0.1,
                density:2
            }
            this.body=Bodies.circle(x,y,diameter,options)
            this.diameter=diameter
            this.x=x
            this.y=y
            this.image=loadImage("a.png")
            World.add(world,this.body)
        }
        display(){
            push()
            translate(this.body.position.x,this.body.position.y)
            rotate(this.body.angle)
            imageMode(CENTER)
            fill("white")
            strokeWeight(2)
            stroke("white")
            image(this.image,0,0,this.width,this.height)
            scale
            pop()
    
            if(this.body.position.y>700){
                Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,200)})
            }
        }
        
    }