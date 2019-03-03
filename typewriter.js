const TypeWriter = (function() {
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

        peek() {
            return this.q[0];
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
            this.intervalId = undefined;
            this.methodQ = new Queue();
        }

        runCharQ(options = {}) {
            let target;

            if (options.class) {
                this.el.innerHTML += `<span class="${options.class}"></span>`;
                target = this.el.lastElementChild;
            }
            else {
                target = this.el;
            }

            this.intervalId = setInterval(() => {
                target.innerHTML += this.charQ.shift();

                if (this.charQ.peek() === ' ')
                    target.innerHTML += this.charQ.shift();

                if (!this.charQ.getLength()) {
                    clearInterval(this.intervalId);
                    this.intervalId = undefined;
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

        write(text, options) {
            if (String(text)) {
                this.methodQ.push(() => {
                    this.charQ.pushSpread(...String(text));
                    this.runCharQ(options);
                });
            }
      
            this.runNextMethod();
            return this;
        }

        writeWords(text, options) {
            if (String(text)) {
                this.methodQ.push(() => {
                    const words = String(text).split(' ').map((current, index, array) => {
                        if (index === array.length - 1)
                            return current;
                        else
                            return `${current} `;
                    });

                    this.charQ.pushSpread(...words);
                    this.runCharQ(options);
                });
            }

            this.runNextMethod();
            return this;
        }

        writeAll(text, options) {
            if (String(text)) {
                this.methodQ.push(() => {
                    this.charQ.push(String(text));
                    this.runCharQ(options);
                });
            }

            this.runNextMethod();
            return this;
        }

        wait(milliseconds) {
            this.methodQ.push(() => {
                setTimeout(() => {
                    this.methodQ.isRunning = false;
                    this.runNextMethod();
                }, Math.floor(Math.abs(milliseconds)));
            });

            this.runNextMethod();
            return this;
        }

        newLine() {
            this.methodQ.push(() => {
                this.el.innerHTML += '<br/>';
                this.methodQ.isRunning = false;
                this.runNextMethod();
            });

            this.runNextMethod();
            return this;
        }

        erase(amount, options = {}) {
            this.methodQ.push(() => {
                amount = Math.floor(Math.abs(amount));

                if (options.spaces === undefined)
                    options.spaces = true;

                this.intervalId = setInterval(() => {
                    if (this.el.lastChild && amount) {
                        if (!this.el.lastChild.textContent.length) {
                            this.el.lastChild.remove();
                        }

                        if (this.el.lastChild) {
                            if (this.el.lastChild.textContent.length) {
                                this.el.lastChild.textContent = this.el.lastChild.textContent.slice(0, -1);
                                amount--;
                            }

                            if (options.spaces && amount && this.el.lastChild.textContent.length && this.el.lastChild.textContent[this.el.lastChild.textContent.length - 1] === ' ') {
                                this.el.lastChild.textContent = this.el.lastChild.textContent.slice(0, -1);
                                amount--;
                            }
                        }
                    }
                    else {
                        clearInterval(this.intervalId);
                        this.intervalId = undefined;
                        this.methodQ.isRunning = false;
                        this.runNextMethod();
                    }
                }, options.speed || this.speed);
            });

            this.runNextMethod();
            return this;
        }

        eraseAll() {
            this.methodQ.push(() => {
                this.el.innerHTML = '';
                this.methodQ.isRunning = false;
                this.runNextMethod();
            });

            this.runNextMethod();
            return this;
        }

        callBack(cb, args) {
            this.methodQ.push(() => {
                if (args)
                    cb(...args);
                else
                    cb();

                this.methodQ.isRunning = false;
                this.runNextMethod();
            });

            this.runNextMethod();
            return this;
        }

        setSpeed(speed) {
            this.methodQ.push(() => {
                this.speed = Math.floor(Math.abs(speed));
                this.methodQ.isRunning = false;
                this.runNextMethod();
            });

            this.runNextMethod();
            return this;
        }
    }

    return TypeWriter;
})();























