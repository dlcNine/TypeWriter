function TypeWriter(target) {
    this.el = document.querySelector(target);
    this.speed = 100; // ms
    this.q = [];
    this.isQRunning = false;
}

TypeWriter.prototype.runQ = function() {
    if (!this.isQRunning && this.q.length) {
        console.log('running q');
        this.isQRunning = true;
        const self = this;

        const intervalId = setInterval(function(){
            self.el.innerHTML += self.q.shift();
            console.log(self.q);

            if (!self.q.length) {
                console.log('nothing left in q. stopping q. clearing interval.');
                clearInterval(intervalId);
                self.isQRunning = false;
            }
                
        }, this.speed);
    }
    else {
        console.log('either q is running or nothing in it. not running it again.');
    }
        
};

TypeWriter.prototype.write = function(string) {
    const split = string.split('');

    // if q is running
        // wait until it is not running to
        // push new elements into the q
        // so new options can be passed in (such as speed)

    for (let index = 0; index < split.length; index++) {
        this.q.push(split[index]);
    }

    this.runQ();

    return this;
};























