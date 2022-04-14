class Score {
    constructor() {
        this.x = 50;
        this.y = 50;
        this.count = 0;
    }
    clear(){
        ctx.clearRect(this.x,this.y,gameSize,gameSize)
    }
    draw(){
        // let snake = new Snake()
        this.clear()
        ctx.fillStyle = 'red';
        ctx.font = "30px Verdana";
        ctx.fillText(`Score:${this.count}`,this.x,this.y)
        console.log(this.count)

    }
    spawn(){
        this.clear()
        this.draw()

    }
}