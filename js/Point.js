class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    clear(){
        ctx.clearRect(this.x,this.y,snakeUnit,snakeUnit)
        canvas.style.backgroundColor = backgroundColor;
    }
    getRandomNumber (){
        let randomNumber = Math.floor(Math.random() * gameSize);
        randomNumber -= randomNumber % snakeUnit;
        return randomNumber;
    }
    draw(){
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x,this.y,snakeUnit,snakeUnit)
    }
    spawn (){
        this.clear();
        this.x = this.getRandomNumber();
        this.y = this.getRandomNumber();
        this.draw();
    }
}