class Queue {
    constructor() {
        this.q = [];
        this.isRunning = false;
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

    runCharQ() {
        if (!this.charQ.isRunning && this.charQ.getLength()) {
            this.charQ.isRunning = true;
            console.log('starting charQ');

            const intervalId = setInterval(() => {
                console.log(this.charQ.q);
                this.el.innerHTML += this.charQ.shift();

                if (!this.charQ.getLength()) {
                    this.charQ.isRunning = false;
                    clearInterval(intervalId);
                    console.log('emptied charQ. clearing interval');
                }
            }, this.speed);
        }
        else {
            console.log('charQ already running or empty');
        }
    }

    write(string, options = null) {
        // if (!this.charQ.isRunning) {
            this.charQ.pushSpread(...string);
            this.runCharQ();
        // }
        // else {
            // push something into methodQ?
        // }

        return this;
    }
}






















