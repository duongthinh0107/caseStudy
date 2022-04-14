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
    draw(){
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x,this.y,snakeUnit,snakeUnit)
    }
    spawn (){
        this.x = this.getRandomNumber(1000);
        this.y = this.getRandomNumber(900)+100;
        //console.log("vi tri point moi",this.x)
        //console.log("vi tri point moi",this.y)


        this.draw();
    }
}