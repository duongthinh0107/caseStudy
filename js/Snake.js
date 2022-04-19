class Snake {
    constructor(point, isWall) {
        this.body = [
            new SnakeBody(snakeUnit * 3
                , snakeUnit * 5)
        ]
        this.speed = new SnakeBody(1, 0)
        this.point = point;
        this.head = this.body[0];
        this.isWall = isWall;

    }

    draw() {
        ctx.fillStyle = snakeColor;
        ctx.fillRect(this.head.x, this.head.y, snakeUnit, snakeUnit)
        for (let i = 1; i < this.body.length; i++) {
            ctx.fillRect(this.body[i].x, this.body[i].y, snakeUnit, snakeUnit)
        }
        //drawGrid------------------------------------------------------
        ctx.lineWidth = 1.1;
        ctx.strokeStyle = "#232332";
        ctx.shadowBlur = 0;
        for (let i = 0; i < 100; i++) {
            let f = snakeUnit * i;
            ctx.beginPath();
            ctx.moveTo(f, 0);
            ctx.lineTo(f, 1000);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(0, f);
            ctx.lineTo(1000, f);
            ctx.stroke();
            ctx.closePath();
        }
    }

    clear() {
        //ve lai mau den
        ctx.fillStyle = backgroundColor
        for (let i = 0; i < this.body.length; i++) {
            ctx.fillRect(this.body[i].x, this.body[i].y, snakeUnit, snakeUnit)
        }
    }

    wall() {
        if (this.head.x < 0) {
            this.head.x = gameSize - snakeUnit;
        }
        if (this.head.x > gameSize - snakeUnit) {
            this.head.x = 0;
        }
        if (this.head.y < 0) {
            this.head.y = gameSize - snakeUnit;
        }
        if (this.head.y > gameSize - snakeUnit) {
            this.head.y = 0;
        }
    }

    move() {
        this.clear();
        let nextX = this.head.x + this.speed.x * snakeUnit;
        console.log(nextX);
        let nextY = this.head.y + this.speed.y * snakeUnit;
        console.log(nextY);

        // neu ma x , y cua snake == x,y cua point
        //1. remove point
        //2. tao ra 1 cai point moi o vi tri random

        //collision---------------------------------------
        if (nextX === this.point.x && nextY === this.point.y) {
            let point2 = new Point()
            point2.spawn();
            this.point = point2
            this.body.push(new SnakeBody())
            count++;
            let ui = document.getElementById('ui');
            ui.innerHTML = `Score:${count}`;
        }
        //------------------------------------------------
        for (let i = this.body.length - 1; i >= 1; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        //set vi tri moi cho head-------------------------
        this.body[0].x += this.speed.x * snakeUnit;
        this.body[0].y += this.speed.y * snakeUnit;

        //collision-------------------------------------------------






        //---------------------------------------------------
        // this.wall();
        // this.wall2()

        this.draw();
        if (this.isWall) {
            this.checkWall(nextX,nextY)
        } else {
            this.wall()

        }

    }
    checkWall(x,y){
        if (x  < 0 || x > gameSize || y < 0 || y > gameSize ){
            clearInterval(timeId)
            this.clear();
            ctx.fillStyle = backgroundColor
            ctx.fillRect(this.point.x, this.point.y, snakeUnit, snakeUnit);
            ctx.fillStyle = 'white'
            ctx.font = '100px Comic Sans MS'
            ctx.textAlign = 'center'
            ctx.fillText('Lose', 380, 400)
            document.getElementById('replay').hidden = false;
            ctx.fillText(`Score:${count}`, 400, 500)
            return;
        }
    }

}
