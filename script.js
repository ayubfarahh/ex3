let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

const player = document.querySelector('#player');

function keyUp(event) {
    if (event.key === 'ArrowUp') {
        upPressed = false;
    } else if (event.key === 'ArrowDown') {
        downPressed = false;
    } else if (event.key === 'ArrowLeft') {
        leftPressed = false;
    } else if (event.key === 'ArrowRight') {
        rightPressed = false;
    }
}

function keyDown(event) {
    if (event.key === 'ArrowUp') {
        upPressed = true;
    } else if (event.key === 'ArrowDown') {
        downPressed = true;
    } else if (event.key === 'ArrowLeft') {
        leftPressed = true;
    } else if (event.key === 'ArrowRight') {
        rightPressed = true;
    }
}

function move() {
    const position = player.getBoundingClientRect();

    if (downPressed == true) {
        player.style.top = position.top + 1 + 'px';
    }

    if (leftPressed == true) {
        player.style.left = position.left - 1 + 'px';
    }

    if (upPressed == true) {
        player.style.top = position.top - 1 + 'px';
    }

    if (rightPressed == true) {
        player.style.left = position.left + 1 + 'px';
    }
}

setInterval(move, 5);

document.addEventListener('keyup', keyUp);
document.addEventListener('keydown', keyDown);