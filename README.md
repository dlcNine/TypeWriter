# TypeWriter
Small js library to expressively render text. This project is currently under development.

## Goal
Create a class with a simple and chainable API which renders text to the specified target. I'm aiming to make it work like this:

```
const tw = new TypeWriter('#target');

tw.write('the quick brown fox').newLine()
    .write('jumps over the').wait(2000).write('lazy dog.').newLine()
    .clear()
    .write('the quick brown fox jumps...');
```

## API
The methods I have in mind are:

```
.write(string)
    // renders the string one character at a time to the specified target
.wait(milliseconds)
    // wait n amount of milliseconds before executing the next method
.newLine()
    // start a new line
.clear()
    // remove all the content from the specified target
```

Note that this may change, as it is under development.

