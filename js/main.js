const canvas = document.getElementById('canvas');
const left = 'a';
const up = 'w';
const right = 'd';
const down = 's';
const ctx = canvas.getContext('2d');
let currentDirection = new Vector(-1,0)
let gameSize = 800;
let backgroundColor = "black";
canvas.width = canvas.height = gameSize;//set width canvas - set height canvas.
ctx.fillStyle = backgroundColor;


ctx.fillRect(0, 0, gameSize, gameSize)
let snakeColor = 'white';
let snakeUnit = 30


let point = new Point()
point.spawn()
let player1 = new Snake(point);
player1.draw();
let timeId = setInterval(function () {
    player1.move()
}, 200)

document.onkeydown = function (e) {
    // console.log(e.key)
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
