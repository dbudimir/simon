const colors = ['red', 'blue', 'yellow', 'green'];

const compSteps = [];
let currentUserStep = 0;

const gameSquare = document.querySelector('.game-box');
const submit = document.querySelector('#start-game');

let initial;
let mode = 'normal';

function startTimer() {
    initial = setTimeout(function() {
        alert('Too slow');
    }, 5000);
}

// Ads the first color to the routine when the user clicks start.
submit.addEventListener('click', e => {
    e.preventDefault();
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
    // Clear and reset the timer
    clearTimeout(initial);
    startTimer();
    // Incrament current user step by 1
    currentUserStep += 1;
    if (currentGameColor !== userSquare.id) {
        clearTimeout(initial);
        document.querySelector('.game-over').setAttribute('style', 'display:block;');
    } else if (currentUserStep === compSteps.length) {
        document.querySelector('.calc-score').innerHTML = compSteps.length;
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
            const currentSquare = document.querySelector(`#${color}`);
            currentSquare.setAttribute('class', 'flash square');
            if (mode === 'cat') {
                currentSquare.setAttribute(
                    'style',
                    `background: url(${catBuffer[index]}); background-size: cover; background-position: center;`
                );
            }
            // debugger;
            setTimeout(function() {
                currentSquare.setAttribute('class', 'square');
                if (mode === 'cat') {
                    currentSquare.removeAttribute('style', `background: url(${catBuffer[index]})`);
                }
            }, 1000);
            clearTimeout(initial);
            startTimer();
        }, 1250 * index);
    });
    currentUserStep = 0;
};

const reload = document.querySelector('#start-over');
reload.addEventListener('click', e => {
    location.reload();
});

// //////////////////////////////////////////////////////////////////////////////////////////

const url = 'https://api.thecatapi.com/v1/images/search';
const catBuffer = [];

const catMode = document.querySelector('#cat-mode');
catMode.addEventListener('click', () => {
    mode = 'cat';
    getData(url);
    document.querySelector('#random-cat').setAttribute('src', `${catBuffer[1]}`);
    document.querySelector('#cat-at-bat').setAttribute('src', `${catBuffer[2]}`);
    draw();
    setTimeout(function() {
        compShow();
    }, 2000);
});

const getData = function(myUrl) {
    fetch(myUrl, {
        headers: {
            'x-api-key': '599c1be4-1756-47c1-b525-4d7ef4cc541f',
        },
    })
        .then(res => res.json())
        .then(data => {
            catBuffer.push(data[0].url);
        })
        .catch(err => {
            alert('error');
            console.log('something went wrong...', err);
        });
};

window.onload = function prepCats() {
    for (let i = 0; i < 4; i++) {
        getData(url);
    }
};
