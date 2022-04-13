class Snake {
    constructor(point) {
        this.body = [
            new Vector(snakeUnit*15,snakeUnit*3),
            new Vector(snakeUnit*16,snakeUnit*3),
            new Vector(snakeUnit*17,snakeUnit*3)
        ]
        this.speed = new Vector(-1,0)
        this.point = point;
    }

    draw(){
        ctx.fillStyle = 'red'
        ctx.fillRect(this.body[0].x,this.body[0].y,snakeUnit,snakeUnit)
        // ctx.fillStyle= snakeColor;
        for (let i = 1; i < this.body.length ; i++) {
            ctx.fillRect(this.body[i].x,this.body[i].y,snakeUnit,snakeUnit)
        }
    }
    clear(){
        ctx.fillStyle = backgroundColor
        ctx.fillRect(this.body[0].x,this.body[0].y,snakeUnit,snakeUnit)
        // ctx.fillStyle= snakeColor;
        for (let i = 1; i < this.body.length ; i++) {
            ctx.fillRect(this.body[i].x,this.body[i].y,snakeUnit,snakeUnit)
        }
        // ctx.fillStyle = backgroundColor;
        // ctx.fillRect(this.body[0].x,this.body[0].y,snakeUnit,snakeUnit)
        // ctx.fillStyle= backgroundColor;
        // for (let i = 1; i < this.body.length ; i++) {
        //     ctx.fillRect(this.body[i].x,this.body[i].y,snakeUnit,snakeUnit)
        // }
    }

    move(){
        this.clear();

        let nextX = this.body[0].x + this.speed.x * snakeUnit;
        let nextY = this.body[0].y + this.speed.y * snakeUnit;


        // neu ma x , y cua snake == x,y cua point
        //1. remove point
        //2. tao ra 1 cai point moi o vi tri random
        if (nextX === this.point.x && nextY === this.point.y){
            ctx.fillStyle = backgroundColor;
            let point2 = new Point()
            point2.spawn();
            this.point = point2

            this.body.push(new Vector() )

        }
        for (let i = this.body.length - 1; i >= 1 ; i--) {
            this.body[i].x = this.body[i-1].x;
            this.body[i].y = this.body[i-1].y;
        }
        this.body[0].x += this.speed.x * snakeUnit;
        this.body[0].y += this.speed.y * snakeUnit;
        for (let i = 1; i < this.body.length; i++) {
            if (nextX===this.body[i].x && nextY === this.body[i].y){
                clearInterval(timeId)
                ctx.fillStyle = backgroundColor
                ctx.fillRect(this.point.x,this.point.y,snakeUnit,snakeUnit);
                ctx.fillStyle = 'red'
                ctx.font = '100px Comic Sans MS'
                ctx.textAlign = 'center'
                ctx.fillText('lose',400,400)
                return;
            }


        }

        this.draw();
    }
}
