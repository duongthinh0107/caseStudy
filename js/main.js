//create canvas and draw gameSize
const canvas = document.createElement('canvas');
canvas.setAttribute('id', 'canvas');
document.getElementById('game-play').appendChild(canvas);
document.getElementById('replay').hidden = true;
document.getElementById('ui').hidden = true;

const ctx = canvas.getContext('2d');
let gameSize = 800;
let snakeUnit = 20;
let count = 0;
let timeId;
let snakeColor = 'white';
let backgroundColor = '#181825';//#181825
canvas.width = canvas.height = gameSize;//set width canvas - set height canvas.
function startGame (){
    document.getElementById('start').hidden = true;
    document.getElementById('canvas').style.backgroundColor = '#181825'
    document.getElementById('ui').hidden = false;

//set key move
    const left = 'a';
    const up = 'w';
    const right = 'd';
    const down = 's';

//----------------------------------------------------------
let snakeIndex = new SnakeBody(-1, 0)
let point = new Point()
let player1 = new Snake(point);
point.spawn()
player1.draw();
let reset = document.getElementById('replay');
reset.addEventListener('click', clear);
function clear() {
    count = 0;
    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, gameSize, gameSize)
    // player1.clear()
    player1 = new Snake(point)
    // player1.drawGrid()
    player1.draw()
    document.getElementById('replay').hidden = true;
    point.clear();
    point.spawn();
    clearInterval(timeId)
    timeId = setInterval(function () {
        player1.move()
    }, 150)
}
timeId = setInterval(function () {
    player1.move()
}, 100)
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
}
//---------------------------------------------------

//----------------------------------------------
// const max_fireworks = 5,
//     max_sparks = 50;
// // let canvas = document.getElementById('myCanvas');
// // let context = canvas.getContext('2d');
// let fireworks = [];
//
// for (let i = 0; i < max_fireworks; i++) {
//     let firework = {
//         sparks: []
//     };
//     for (let n = 0; n < max_sparks; n++) {
//         let spark = {
//             vx: Math.random() * 5 + .5,
//             vy: Math.random() * 5 + .5,
//             weight: Math.random() * .3 + .03,
//             red: Math.floor(Math.random() * 2),
//             green: Math.floor(Math.random() * 2),
//             blue: Math.floor(Math.random() * 2)
//         };
//         if (Math.random() > .5) spark.vx = -spark.vx;
//         if (Math.random() > .5) spark.vy = -spark.vy;
//         firework.sparks.push(spark);
//     }
//     fireworks.push(firework);
//     resetFirework(firework);
// }
// window.requestAnimationFrame(explode);
// //------------------------------------------------
// // function resetFirework(firework) {
// //     firework.x = Math.floor(Math.random() * canvas.width);
// //     firework.y = canvas.height;
// //     firework.age = 0;
// //     firework.phase = 'fly';
// // }
// //---------------------------------------------------
// // function explode() {
// //     context.clearRect(0, 0, canvas.width, canvas.height);
// //     fireworks.forEach((firework,index) => {
// //         if (firework.phase === 'explode') {
// //             firework.sparks.forEach((spark) => {
// //                 for (let i = 0; i < 10; i++) {
// //                     let trailAge = firework.age + i;
// //                     let x = firework.x + spark.vx * trailAge;
// //                     let y = firework.y + spark.vy * trailAge + spark.weight * trailAge * spark.weight * trailAge;
// //                     let fade = i * 20 - firework.age * 2;
// //                     let r = Math.floor(spark.red * fade);
// //                     let g = Math.floor(spark.green * fade);
// //                     let b = Math.floor(spark.blue * fade);
// //                     ctx.beginPath();
// //                     ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',1)';
// //                     ctx.rect(x, y, 4, 4);
// //                     ctx.fill();
// //                 }
// //             });
// //             firework.age++;
// //             if (firework.age > 100 && Math.random() < .05) {
// //                 resetFirework(firework);
// //             }
// //         } else {
// //             firework.y = firework.y - 10;
// //             for (let spark = 0; spark < 15; spark++) {
// //                 ctx.beginPath();
// //                 ctx.fillStyle = 'rgba(' + index * 50 + ',' + spark * 17 + ',0,1)';
// //                 ctx.rect(firework.x + Math.random() * spark - spark / 2, firework.y + spark * 4, 4, 4);
// //                 ctx.fill();
// //             }
// //             if (Math.random() < .001 || firework.y < 200) firework.phase = 'explode';
// //         }
// //     });
// //     window.requestAnimationFrame(explode);
// // }

