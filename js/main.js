//set key move
const left = 'a';
const up = 'w';
const right = 'd';
const down = 's';
//----------------------------------------------------------
//set canvas
const canvas = document.createElement('canvas');
canvas.setAttribute('id','canvas');
document.getElementById('container').appendChild(canvas);
const ctx = canvas.getContext('2d');
let currentDirection = new Vector(-1,0)
let gameSize = 900;
let backgroundColor = '#181825';
let count = 0;
canvas.width = canvas.height = 1000;//set width canvas - set height canvas.
ctx.fillStyle = 'red'
ctx.fillRect(0, 0, 1000, 100)
ctx.font = "30px Verdana";
ctx.fillStyle = backgroundColor
ctx.fillText(`score:${count}`,5,50)
ctx.fillStyle = backgroundColor;
ctx.fillRect(0, 100, 1000, gameSize)
let snakeColor = 'white';
let snakeUnit = 20;
let point = new Point()
let player1 = new Snake(point);
point.spawn()
player1.draw();

let timeId = setInterval(function () {
        player1.move()
}, 50)
document.onkeydown = function (e) {
    switch (e.key) {
        case left:
            if (currentDirection.x === 1) break;
            player1.speed = new Vector(-1, 0);
            currentDirection = new Vector(-1, 0);
            break;
        case right:
            if (currentDirection.x === -1) break;
            player1.speed = new Vector(1, 0);
            currentDirection = new Vector(1, 0);
            break;
        case up:
            if (currentDirection.y === 1) break;
            player1.speed = new Vector(0, -1);
            currentDirection = new Vector(0, -1);
            break;
        case down:
            if (currentDirection.y === -1) break;
            player1.speed = new Vector(0, 1);
            currentDirection = new Vector(0, 1);
            break;
    }
}
