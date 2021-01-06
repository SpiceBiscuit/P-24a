class Ground{
    //creates a new Box object
    constructor(a,b,c,d) {
        var options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(a,b,c,d, options);
        this.width = c;
        this.height = d;
        World.add(world, this.body);
    }

    display(){
        rectMode(CENTER);
        stroke("#9F5BDE");
        strokeWeight(4);
        fill(100,0,102);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}