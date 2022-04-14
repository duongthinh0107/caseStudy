class Snake {
    constructor(point) {
        this.body = [
            new Vector(snakeUnit*30,snakeUnit*20),
            new Vector(snakeUnit*31,snakeUnit*20),
            new Vector(snakeUnit*32,snakeUnit*20)
        ]
        this.speed = new Vector(-1,0)
        this.point = point;
        this.head = this.body[0];
        // this.count = 0;

    }

    draw(){
        ctx.fillStyle = 'red'
        ctx.fillRect(this.body[0].x,this.body[0].y,snakeUnit,snakeUnit)
        console.log('d',this.body[0].x);
        console.log('snakeUnit',snakeUnit);


        // ctx.fillStyle= snakeColor;
        for (let i = 1; i < this.body.length ; i++) {
            ctx.fillRect(this.body[i].x,this.body[i].y,snakeUnit,snakeUnit)
        }
    }
    drawGrid(){
        ctx.lineWidth = 1.1;
        ctx.strokeStyle = "#232332";
        ctx.shadowBlur = 0;
        for (let i = 0; i < 100; i++) {
            let f = (400/snakeUnit) * i;
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
    clear(){
        //ve lai mau den
        ctx.fillStyle = backgroundColor
        // ctx.fillRect(this.body[0].x,this.body[0].y,snakeUnit,snakeUnit)
        // ctx.fillStyle= snakeColor;
        for (let i = 0; i < this.body.length ; i++) {
            ctx.fillRect(this.body[i].x,this.body[i].y,snakeUnit,snakeUnit)
        }
        // ctx.fillStyle = backgroundColor;
        // ctx.fillRect(this.body[0].x,this.body[0].y,snakeUnit,snakeUnit)
        // ctx.fillStyle= backgroundColor;
        // for (let i = 1; i < this.body.length ; i++) {
        //     ctx.fillRect(this.body[i].x,this.body[i].y,snakeUnit,snakeUnit)
        // }
    }
    handleBound(){

        if (this.head.x < 0 ){
            this.head.x = 1000 - snakeUnit;

        }
        if (this.head.x > 1000 - snakeUnit){
            this.head.x = 0;

        }
        if (this.head.y < 100){
            this.head.y = 1000 - snakeUnit;
            //console.log(this.head.y);


        }
        if(this.head.y > 1000 - snakeUnit){
            this.head.y = 100;

        }
    }


    move(){
        this.clear();
        let nextX = this.body[0].x + this.speed.x * snakeUnit;
        let nextY = this.body[0].y + this.speed.y * snakeUnit;
        // neu ma x , y cua snake == x,y cua point
        //1. remove point
        //2. tao ra 1 cai point moi o vi tri random

        //va chanem
        if (nextX === this.point.x && nextY === this.point.y){
            // ctx.fillStyle = backgroundColor;
            let point2 = new Point()
            //console.log("va cham",point2.x)
            point2.spawn();
            this.point = point2
            this.body.push(new Vector() )
            count++;
            ctx.fillStyle = 'red'
            ctx.fillRect(0, 0, 1000, 100)
            ctx.font = "30px Verdana";
            ctx.fillStyle = backgroundColor
            ctx.fillText(`score:${count}`,5,50,100)
            // requestAnimationFrame(this.move)
            // score.count++;
            // score.draw()
            // point2.spawn();


            // this.speed += new Vector(1,1);
        }
        //
        for (let i = this.body.length - 1; i >= 1 ; i--) {
            this.body[i].x = this.body[i-1].x;
            this.body[i].y = this.body[i-1].y;
        }
        //set vi tri moi cho head
        this.body[0].x += this.speed.x * snakeUnit;
        this.body[0].y += this.speed.y * snakeUnit;

        for (let i = 1; i < this.body.length; i++) {
            if (nextX === this.body[i].x && nextY === this.body[i].y ){
                clearInterval(timeId)
                ctx.fillStyle = backgroundColor
                ctx.fillRect(this.point.x,this.point.y,snakeUnit,snakeUnit);
                ctx.fillStyle = 'red'
                ctx.font = '100px Comic Sans MS'
                ctx.textAlign = 'center'
                ctx.fillText('lose',400,400)
                ctx.fillStyle = 'red'
                ctx.fillRect(0, 0, 1000, 100)
                ctx.fillStyle = 'red';
                ctx.font = '100px Comic Sans MS'

                ctx.fillText(`score:${count}`,500,500)
                return;
            }


        }
        
        //console.log("head",this.head);
        this.handleBound();
        this.draw();
        this.drawGrid()
    }
}
