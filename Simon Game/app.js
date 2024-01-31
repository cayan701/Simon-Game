let gameSeq = [];
let userSeq = [];

let started = false;

let level= 0;

let h2 = document.querySelector('h2');

let btns = ['yellow', 'red', 'purple', 'green'];

document.addEventListener('keypress', function() { //starting the game
    if(started === false) {
        console.log('Game started!');
        started = true;
    }

    levelUp();
});

function gameFlash(btn) {
    btn.classList.add('flash');
    setTimeout(function() {
        btn.classList.remove('flash');
    }, 250);
}

function userFlash(btn) {
    btn.classList.add('userFlash');
    setTimeout(function() {
        btn.classList.remove('userFlash');
    }, 250);
}

function levelUp() {
    level++;
    h2.innterText = `Level: ${level}`;


    //random color choose
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    // after the color is genrated, we are pushing the randBtn into gameSeq array...
    gameSeq.push(randBtn);
    console.log(gameSeq);

    gameFlash(randBtn);
}

function checkAns(idx) {
    //console.log('Curr level:', level); //checking the levels
    
    //checking the values of of both gameSeq & userSeq...
    
    if(gameSeq[idx] === userSeq[idx]) {
        if(gameSeq.length == userSeq.length) {
            setTimeout(levelUp(), 1000);
        }
    } else {
        h2.innterText = `Game Over!: Try again by pressing any key.${level}`;
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getArrtibute('id');
    //console.log(userColor);

    //pushing the user color to userSeq...
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelector('.btn');

for(btn of allBtns) {
    btn.addEventListener('click', btnPress);
}