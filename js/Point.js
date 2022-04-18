class Point {

    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    getRandomNumber (a){
        let randomNumber = Math.floor(Math.random() * a);
        randomNumber -= randomNumber % snakeUnit;
        return randomNumber;
    }
    clear(){
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(this.x,this.y,snakeUnit,snakeUnit)
    }
    getRandomColor() {
        return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
    }
    draw(){
        this.color = this.getRandomColor();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,snakeUnit,snakeUnit)
    }
    spawn (){
        this.x = this.getRandomNumber(gameSize);
        this.y = this.getRandomNumber(gameSize);
        this.draw();
    }
}