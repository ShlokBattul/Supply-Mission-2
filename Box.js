class Box {

    constructor () {

    var options = {
        isStatic : false
        }

        this.body = Bodies.rectangle(650,550,20,20, options);
        World.add (world,this.body)
    }

    display () {
        push ();
        var  pos = this.body.position;
        rectMode (CENTER)
        rect(pos.x,pos.y,150,20)
        pop ();
        }
    }


