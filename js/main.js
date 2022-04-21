//create canvas and draw gameSize-----------------------
const canvas = document.createElement('canvas');
canvas.setAttribute('id', 'canvas');
document.getElementById('game-play').appendChild(canvas);
const ctx = canvas.getContext('2d');
const gameSize = 800;
canvas.width = canvas.height = gameSize;//set width canvas - set height canvas.
//set key move----------------------------------------------
let gameMode = false;
let left = 'a';
let up = 'w';
let right = 'd';
let down = 's';

//hidden score and reset-btn-----------------------------
document.getElementById('replay').hidden = true;
document.getElementById('ui').hidden = true;
const snakeUnit = 20;
let count = 0;
let timeId;
const snakeColor = 'white';
const backgroundColor = '#181825';
let rs = document.getElementById('replay');
rs.addEventListener('click', reset);
let snakeIndex = new SnakeBody(-1, 0)
//event start game-----------------------------------------

let point = new Point()

let player1 = new Snake(point, false);

function startGame() {
    document.getElementById('canvas').style.backgroundColor = '#181825'
    document.getElementById('ui').hidden = false;
    document.getElementById('button').hidden = true;
    point.spawn()
    player1.isWall = true;
    player1.draw();
    timeId = setInterval(function () {
        player1.move()
    }, 120)
}

let noWall = document.getElementById('no-wall');
noWall.addEventListener('click', click1)

function click1() {
    document.getElementById('canvas').style.backgroundColor = '#181825'
    document.getElementById('ui').hidden = false;
    document.getElementById('button').hidden = true;
    point.spawn()
    player1.isWall = false;
    player1.draw();
    timeId = setInterval(function () {
        player1.move()
    }, 120)
}

function reset() {
    count = 0;
    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, gameSize, gameSize)
    player1 = new Snake(point, gameMode)
    player1.draw()
    document.getElementById('replay').hidden = true;
    point.clear();
    point.spawn();
    clearInterval(timeId)
    timeId = setInterval(function () {
        player1.move()
    }, 150)
}

document.onkeydown = function (e) {
    switch (e.key) {
        case left:
            if (snakeIndex.x === 1) break;
            player1.speed = new SnakeBody(-1, 0);
            snakeIndex = new SnakeBody(-1, 0);
            break;
        case right:
            if (snakeIndex.x === -1) break;
            player1.speed = new SnakeBody(1, 0);
            snakeIndex = new SnakeBody(1, 0);
            break;
        case up:
            if (snakeIndex.y === 1) break;
            player1.speed = new SnakeBody(0, -1);
            snakeIndex = new SnakeBody(0, -1);
            break;
        case down:
            if (snakeIndex.y === -1) break;
            player1.speed = new SnakeBody(0, 1);
            snakeIndex = new SnakeBody(0, 1);
            break;
    }
}


let x = 5;
let b1 = true;
let b2 = false;
if ((x == 4) && !b2)
    console.log("1 ");
console.log("2 ");
if ((b2 == true) && b1)
    console.log("3 ");

