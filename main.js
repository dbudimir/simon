const colors = ['red', 'blue', 'yellow', 'green'];

const compSteps = [];
const userSteps = [];
const gameSquare = document.querySelector('.game-box');
// const blue = document.querySelector('#blue');
// const yellow = document.querySelector('#yellow');
// const green = document.querySelector('#green');
const submit = document.querySelector('#start-game');

function draw() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    compSteps.push(colors[randomIndex]);
    console.log(compSteps);
}

// Ads the first color to the routine when the user clicks start.
submit.addEventListener('click', e => {
    e.preventDefault();
    console.log('The game has started.');
    draw();
});

// Ads the users input to an array when they click a certain color.
gameSquare.addEventListener('click', e => {
    e.preventDefault();
    const userSquare = event.target;
    userSteps.push(userSquare.id);
    console.log(userSteps);
});

// This function will loop through the existing function and draw a new card.

let score = 0; //  set your counter to 1

function compShow() {
    //  create a loop function
    setTimeout(function() {
        //  call a 3s setTimeout when the loop is called
        console.log(compSteps[score]); //  your code here
        score++; //  increment the counter
        if (score < compSteps.length) {
            //  if the counter < 10, call the loop function
            compShow(); //  ..  again which will trigger another
        } //  ..  setTimeout()
    }, 2000);
}
