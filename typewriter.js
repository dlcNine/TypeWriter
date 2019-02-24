class TypeWriter {
    constructor(target) {
        this.el = document.querySelector(target);
        this.speed = 100; // ms
        this.q = [];
        this.isQRunning = false;
    }

    runQ() {
        if (!this.isQRunning && this.q.length) {
            console.log('running q');
            this.isQRunning = true;

            const intervalId = setInterval(() => {
                this.el.innerHTML += this.q.shift();
                console.log(this.q);

                if (!this.q.length) {
                    console.log('nothing left in q. stopping q. clearing interval.');
                    clearInterval(intervalId);
                    this.isQRunning = false;
                }

            }, this.speed);
        }
        else {
            console.log('either q is running or nothing in it. not running it again.');
        }
    }

    write(string) {
        const characters = string.split('');

        // if q is running
            // wait until it is not running to
            // push new elements into the q
            // so new options can be passed in (such as speed)

        for (let index = 0; index < characters.length; index++) {
            this.q.push(characters[index]);
        }

        this.runQ();

        return this;
    }
}






















