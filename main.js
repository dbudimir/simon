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
    setTimeout(function() {
        compShow();
    }, 1000);
});

// Ads the users input to an array when they click a certain color.
gameSquare.addEventListener('click', e => {
    e.preventDefault();
    const userSquare = event.target;
    console.log(`Comp steps: ${compSteps}`);
    console.log(`User selection: ${userSteps}`);
    if (userSteps.length === compSteps.length) {
        userSteps.push(userSquare.id);
        draw();
        setTimeout(function() {
            compShow();
        }, 1000);
    }
});

// This function will loop through the existing function and draw a new card.

const compShow = function() {
    compSteps.forEach(function(color, index) {
        setTimeout(function() {
            document.querySelector(`#${color}`).setAttribute('class', 'square flash');
            setTimeout(function() {
                document.querySelector(`#${color}`).setAttribute('class', 'square');
            }, 1000);
        }, 1500 * index);
    });
};
