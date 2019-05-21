class Step {
    constructor(color) {
        this.color = color;
    }
}

class Order {
    constructor() {
        this.steps = [];
        const color = ['red', 'blue', 'yellow', 'green'];

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < color.length; j++) {
                const step = new Step(color[j]);
                this.steps.push(step);
            }
        }
    }
}

const routine = new Order().steps;
const compSteps = [];

function draw() {
    const randomIndex = Math.floor(Math.random() * routine.length);
    compSteps.push(routine[randomIndex]);
}
