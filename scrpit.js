score = 0;
cross = true;

audio = new Audio('/music/music.mp3')
audiogo = new Audio('/music/game over.mp3');
setTimeout(() => {
    audio.play()

}, 1000);
document.onkeyup = function (e) {
    console.log("key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        mario = document.querySelector('.mario');
        mario.classList.add('animatemario')
        setTimeout(() => {
            mario.classList.remove('animatemario')

        }, (700));
    }
    if (e.keyCode == 39) {
        mario = document.querySelector('.mario');
        marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left = marioX + 122 + "px";

    }
    if (e.keyCode == 37) {
        mario = document.querySelector('.mario');
        marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left = (marioX - 122) + "px";
    }
}
setInterval(() => {
    mario = document.querySelector('.mario')
    gameOver = document.querySelector('.gameOver');
    enemy = document.querySelector('.enemy');

    mx = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
    my = parseInt(window.getComputedStyle(mario, null).getPropertyValue('bottom'));

    ex = parseInt(window.getComputedStyle(enemy, null).getPropertyValue('left'));
    ey = parseInt(window.getComputedStyle(enemy, null).getPropertyValue('bottom'));

    offsetX = Math.abs(mx - ex);
    offsetY = Math.abs(my - ey);
    console.log(offsetX, offsetY);
    if (offsetX < 93 && offsetY < 52) {
        gameOver.innerHTML = "Game Over"
        enemy.classList.remove("enemyAni")
        audiogo.play();
        setTimeout(() => {
            audio.pause();

        }, 500);
        setTimeout(() => {
            audiogo.pause();

        }, 7000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(enemy, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            enemy.style.animationDuration = newDur + 's';

        }, 500);

    }


}, 10);
function updateScore(score) {
    scoreCount.innerHTML = "Your Score: " + score

}