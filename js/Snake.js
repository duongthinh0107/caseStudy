class Snake {
    constructor() {
        this.body = [
            new Vector(snakeUnit*15,snakeUnit*3),
            new Vector(snakeUnit*16,snakeUnit*3),
            new Vector(snakeUnit*17,snakeUnit*3)
        ]
        this.speed = new Vector(-1,0)
    }
    draw(){
        ctx.fillStyle = 'red'
        ctx.fillRect(this.body[0].x,this.body[0].y,snakeUnit,snakeUnit)
        ctx.fillStyle= snakeColor;
        for (let i = 1; i < this.body.length ; i++) {
            ctx.fillRect(this.body[i].x,this.body[i].y,snakeUnit,snakeUnit)
        }
    }
    clear(){
        // ctx.fillStyle = backgroundColor;
        ctx.clearRect(0,0,canvas.width,canvas.height)
        ctx.fillStyle= backgroundColor;
        // for (let i = 1; i < this.body.length ; i++) {
        //     ctx.fillRect(this.body[i].x,this.body[i].y,snakeUnit,snakeUnit)
        // }
    }

    move(){
        this.clear();
        for (let i = this.body.length - 1; i >= 1 ; i--) {
            this.body[i].x = this.body[i-1].x;
            console.log(this.body[i].x)
            this.body[i].y = this.body[i-1].y;
        }
        this.body[0].x += this.speed.x * snakeUnit;
        this.body[0].y += this.speed.y * snakeUnit;
        this.draw();
    }
}
