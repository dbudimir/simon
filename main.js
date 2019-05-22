const colors = ['red', 'blue', 'yellow', 'green'];

const compSteps = [];
let currentUserStep = 0;

const gameSquare = document.querySelector('.game-box');
const submit = document.querySelector('#start-game');

let initial;

function startTimer() {
    initial = setTimeout(function() {
        alert('Too slow');
    }, 5000);
}

// Ads the first color to the routine when the user clicks start.
submit.addEventListener('click', e => {
    e.preventDefault();
    console.log('The game has started.');
    draw();
    setTimeout(function() {
        compShow();
    }, 2000);
});

// Draws a random color and adds it to compSteps array.
function draw() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    compSteps.push(colors[randomIndex]);
    console.log(compSteps);
}

// On click compare the current game color with compSepts at the index of current user step.
gameSquare.addEventListener('click', e => {
    e.preventDefault();
    const userSquare = e.target;
    const currentGameColor = compSteps[currentUserStep];
    // Flash the selected square.
    userSquare.setAttribute('class', 'square flash');
    setTimeout(function() {
        userSquare.setAttribute('class', 'square');
    }, 500);
    console.log(`User clicked on ${userSquare.id}`);
    console.log(`Current game color ${currentGameColor}`);
    console.log(`User step ${currentUserStep}`);
    // Clear and reset the timer
    clearTimeout(initial);
    startTimer();
    // Incrament current user step by 1
    currentUserStep += 1;
    // debugger;
    if (currentGameColor !== userSquare.id) {
        clearTimeout(initial);
        document.querySelector('.game-over').setAttribute('style', 'display:block;');
    } else if (currentUserStep === compSteps.length) {
        document.querySelector('.score').innerHTML = compSteps.length;
        clearTimeout(initial);
        draw();
        setTimeout(function() {
            compShow();
        }, 2000);
    }
});

const compShow = function() {
    compSteps.forEach(function(color, index) {
        setTimeout(function() {
            document.querySelector(`#${color}`).setAttribute('class', 'square flash');
            setTimeout(function() {
                document.querySelector(`#${color}`).setAttribute('class', 'square');
            }, 1000);
            clearTimeout(initial);
            startTimer();
        }, 1250 * index);
    });
    currentUserStep = 0;
};
