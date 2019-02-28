class Queue {
    constructor() {
        this.q = [];
    }

    push(element) {
        this.q.push(element);
    }

    pushSpread(...elements) {
        this.q.push(...elements);
    }

    shift() {
        return this.q.shift();
    }

    getLength() {
        return this.q.length;
    }
}

class TypeWriter {
    constructor(target) {
        this.el = document.querySelector(target);
        this.speed = 100; // ms
        this.charQ = new Queue();
        this.methodQ = new Queue();
    }

    runCharQ(options = {}) {
        const intervalId = setInterval(() => {
            this.el.innerHTML += this.charQ.shift();

            if (!this.charQ.getLength()) {
                clearInterval(intervalId);
                this.methodQ.isRunning = false;
                this.runNextMethod();
            }

        }, options.speed || this.speed);
    }

    runNextMethod() {
        if (!this.methodQ.isRunning && this.methodQ.getLength()) {
            this.methodQ.isRunning = true;
            this.methodQ.shift()();
        }
    }

    write(string, options) {
        this.methodQ.push(() => {
            this.charQ.pushSpread(...string);
            this.runCharQ(options);
        });
  
        this.runNextMethod();
        return this;
    }

    wait() {
        this.methodQ.push('wait');
        console.log(this.methodQ);
        return this;

    }

    newLine() {
        this.methodQ.push('newLine');
        console.log(this.methodQ);
        return this;
    }

    clear() {
        this.methodQ.push('clear');
        console.log(this.methodQ);
        return this;
    }
}





















