const Number = require('./Number');

module.exports = class Core {
    dimension = 0;
    goal = 0;
    numbers = [];

    isFinished = false;

    constructor(dimension, goal) {
        this.dimension = dimension;
        this.goal = goal;
    }

    async init() {
        await this.generateNumbers();
        const startNumber = await this.generateRandomProbabilities();
        // for (let i = 0; i <= this.dimension; i++) {
        await this.generateTwo(startNumber);
        // }
        // await this.generateRandom(startNumber);

        return this.numbers;
    }

    async generateNumbers() {
        for (let i = 0; i < this.dimension; i++) {
            this.numbers[i] = [];
            for (let j = 0; j < this.dimension; j++) {
                this.numbers[i][j] = new Number('*', i, j);
            }
        }
    }

    async render(numbers) {
        console.clear();
        for (let i = 0; i < this.dimension; i++) {
            for (let j = 0; j < this.dimension; j++) {
                if (j != this.dimension - 1) {
                    process.stdout.write(`${numbers[i][j].value}  `);
                } else {
                    process.stdout.write(`${numbers[i][j].value}\n`);
                }
            }
        }
    }

    async generateRandom(value) {
        let i, j;
        do {
            i = Math.floor(Math.random() * (this.dimension));
            j = Math.floor(Math.random() * (this.dimension));
        } while (this.numbers[i][j].value !== '*');

        if (value) {
            this.numbers[i][j].value = value;
        } else {
            this.numbers[i][j].value = '2';
        }
    }

    async generateTwo() {
        for (let i = 0; i <= this.dimension - 1; i++) {
            this.numbers[0][i].value = '2';
        }
    }

    async generateRandomProbabilities() {
        const data = [2, 2, 2, 2, 2, 2, 2, 2, 2, 4];
        const selected = Math.floor(Math.random() * data.length);

        return data[selected];
    }

    async done() {
        console.log(`Anda telah berhasil mencapai ${this.goal}`);
        process.exit(0);
    }

    async fail() {
        console.log(`Anda telah berhasil mencapai ${this.goal}`);
        process.exit(0);
    }

    async slideUp(numbers) {
        for (let i = 0; i < this.dimension; i++) {
            for (let j = 0; j < this.dimension; j++) {
                let result = await numbers[i][j].slideUp(numbers, this.goal);
                numbers = result[0];
                if (this.isFinished === false) {
                    this.isFinished = result[1];
                }
            }
        }

        if (this.isFinished) {
            this.done();
        }
    }

    async slideDown(numbers) {
        for (let i = this.dimension - 1; i >= 0; i--) {
            for (let j = this.dimension - 1; j >= 0; j--) {
                let result = await numbers[i][j].slideDown(numbers, this.dimension, this.goal);
                numbers = result[0];
                if (this.isFinished === false) {
                    this.isFinished = result[1];
                }
            }
        }

        if (this.isFinished) {
            this.done();
        }
    }

    async slideLeft(numbers) {
        for (let i = 0; i < this.dimension; i++) {
            for (let j = 0; j < this.dimension; j++) {
                let result = await numbers[i][j].slideLeft(numbers, this.goal);
                numbers = result[0];
                if (this.isFinished === false) {
                    this.isFinished = result[1];
                }
            }
        }

        if (this.isFinished) {
            this.done();
        }
    }

    async slideRight(numbers) {
        for (let i = this.dimension - 1; i >= 0; i--) {
            for (let j = this.dimension - 1; j >= 0; j--) {
                let result = await numbers[i][j].slideRight(numbers, this.dimension, this.goal);
                numbers = result[0];
                if (this.isFinished === false) {
                    this.isFinished = result[1];
                }
            }
        }

        if (this.isFinished) {
            this.done();
        }
    }
}