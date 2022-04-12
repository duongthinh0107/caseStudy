class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    draw(ctx){
        ctx .fillStyle = 'green';
        ctx.fillRect(this.x,this.y,10,10)
    }
    clear(ctx){
        ctx.clearRect(this.x,this.y,10,10)
        ctx.fillStyle = backgroundColor;
    }
    getRandomNumber (){
        let randomNumber = Math.floor(Math.random() * gameSize);
        randomNumber -= randomNumber % snakeUnit;
        return randomNumber;
    }
    spawn (ctx){
        this.clear(ctx);
        this.x = this.getRandomNumber();
        this.y = this.getRandomNumber();
        this.draw(ctx);
        console.log(this.x)
        console.log(this.y)

    }
}