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
    
    if(downPressed == true) {
        let position = player.getBoundingClientRect()
        let newBottom = position.bottom + 1;
    
        let btmL = document.elementFromPoint(position.left, newBottom);
        let btmR = document.elementFromPoint(position.right, newBottom);
    
        if (btmL.classList.contains('solid') == false && btmR.classList.contains('solid') == false) {
             player.style.top = position.top + 1 + 'px';
        }
        
        playerMouth.classList = 'down';

        
    }
    
    if(upPressed == true) {
        let position = player.getBoundingClientRect()
        let newTop = position.top - 1;
    
        let topL = document.elementFromPoint(position.left, newTop);
        let topR = document.elementFromPoint(position.right, newTop);
    
        if (topL.classList.contains('solid') == false && topR.classList.contains('solid') == false) {
             player.style.top = position.top - 1 + 'px';
        }
        
        playerMouth.classList = 'up';
    }

    if (leftPressed == true) {
        player.style.left = position.left - 1 + 'px';
    }

    if (rightPressed == true) {
        player.style.left = position.left + 1 + 'px';
    }

}
function pointCheck() {
    const position = player.getBoundingClientRect();
    const points = document.querySelectorAll('.point');

    for (let i = 0; i < points.length; i++) {
        let pos = points[i].getBoundingClientRect();
        if (
            position.right > pos.left &&
            position.left < pos.right &&
            position.bottom > pos.top &&
            position.top < pos.bottom
        ) {
            points[i].classList.remove('point')
        }
    }
}

setInterval(move, 5);

document.addEventListener('keyup', keyUp);
document.addEventListener('keydown', keyDown);