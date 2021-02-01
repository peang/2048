module.exports = class Number {
    value = '*';
    coordinateX = null;
    coordinateY = null;

    constructor(value, x, y) {
        this.value = value;
        this.coordinateX = x;
        this.coordinateY = y;
    }

    async slideUp(numbers, goal) {
        let isFinished = false;

        if (this.value !== '*') {
            let y = this.coordinateY;
            let x = this.coordinateX;
            let value = this.value;
            if (x !== 0) {
                while (x !== 0) {
                    if (numbers[x - 1][y].value === '*') {
                        numbers[x - 1][y].value = value;
                        numbers[x][y].value = '*';
                    } else if (numbers[x - 1][y].value === value) {
                        const newValue = value * 2;
                        numbers[x - 1][y].value = newValue;
                        if (parseInt(newValue) === parseInt(goal)) {
                            isFinished = true;
                        }

                        numbers[x][y].value = '*';
                    } else {
                        break;
                    }
                    x -= 1;
                }
            }
        }


        return [
            numbers,
            isFinished
        ];
    }

    async slideDown(numbers, max, goal) {
        let isFinished = false;

        if (this.value !== '*') {
            let y = this.coordinateY;
            let x = this.coordinateX;
            let value = this.value;
            if (x !== max - 1) {
                while (x !== max - 1) {
                    if (numbers[x + 1][y].value === '*') {
                        numbers[x + 1][y].value = value;
                        numbers[x][y].value = '*';
                    } else if (numbers[x + 1][y].value === value) {
                        const newValue = value * 2;
                        numbers[x + 1][y].value = newValue;
                        if (parseInt(newValue) === parseInt(goal)) {
                            isFinished = true;
                        }

                        numbers[x][y].value = '*';
                    } else {
                        break;
                    }
                    x += 1;
                }
            }
        }

        return [numbers, isFinished];
    }

    async slideLeft(numbers, goal) {
        let isFinished = false;

        if (this.value !== '*') {
            let y = this.coordinateY;
            let x = this.coordinateX;
            let value = this.value;
            if (y !== 0) {
                while (y !== 0) {
                    if (numbers[x][y - 1].value === '*') {
                        numbers[x][y - 1].value = value;
                        numbers[x][y].value = '*';
                    } else if (numbers[x][y - 1].value === value) {
                        const newValue = value * 2;
                        numbers[x][y - 1].value = newValue;
                        if (parseInt(newValue) === parseInt(goal)) {
                            isFinished = true;
                        }

                        numbers[x][y].value = '*';
                    } else {
                        break;
                    }
                    y -= 1;
                }
            }
        }

        return [numbers, isFinished];
    }

    async slideRight(numbers, max, goal) {
        let isFinished = false;

        if (this.value !== '*') {
            let y = this.coordinateY;
            let x = this.coordinateX;
            let value = this.value;
            if (y !== max - 1) {
                while (y !== max - 1) {
                    if (numbers[x][y + 1].value === '*') {
                        numbers[x][y + 1].value = value;
                        numbers[x][y].value = '*';
                    } else if (numbers[x][y + 1].value === value) {
                        const newValue = value * 2;
                        numbers[x][y + 1].value = newValue;
                        if (parseInt(newValue) === parseInt(goal)) {
                            isFinished = true;
                        }
                        numbers[x][y].value = '*';
                    } else {
                        break;
                    }
                    y += 1;
                }
            }
        }

        return [numbers, isFinished];
    }
};