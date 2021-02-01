const readline = require('readline');
const stdin = process.openStdin();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const Core = require('./Core');
let numbers = [];

async function questionDimension() {
    return new Promise((resolve, reject) => {
        rl.question('Dimensi : ', (answer) => {
            resolve(answer);
        });
    })
}

async function questionGoal() {
    return new Promise((resolve, reject) => {
        rl.question('Goal : ', (answer) => {
            
            resolve(answer);
        });
    })
}

const main = async () => {
    const dimension = await questionDimension()
    const goal = await questionGoal()

    const core = new Core(dimension, goal);

    numbers = await core.init();
    await core.render(numbers);
    stdin.on('keypress', async (chunk, key) => {
        if (key.name === 'w') {
            await core.slideUp(numbers).then(async () => {
                await core.generateRandom();
                for (i= 0;i)
                await core.render(numbers);
            });
        } else if (key.name === 's') {
            await core.slideDown(numbers).then(async () => {
                await core.generateRandom();
                await core.render(numbers);
            });
        } else if (key.name === 'd') {
            await core.slideRight(numbers).then(async () => {
                await core.generateRandom();
                await core.render(numbers);
            });
        } else if (key.name === 'a') {
            await core.slideLeft(numbers).then(async () => {
                await core.generateRandom();
                await core.render(numbers);
            });
        } else if (key && key.ctrl && key.name == 'c') process.exit();
    });
}

main()



