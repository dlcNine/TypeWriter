# TypeWriter
Small js library to expressively render text. This project is currently under development.

## Goal
Create a class with a simple and chainable API which renders text to the specified target.
```
const tw = new TypeWriter('#target');

tw.write('the quick brown fox').newLine()
    .write('jumps over the').wait(2000).write('lazy dog.').newLine()
    .clear()
    .write('the quick brown fox jumps...');
```

## API
```
.write(text, options) // string, object
    - Render the text one character at a time to the specified target.

.writeWords(text, options) // string, object
    - Render the text word by word to the specified target. Internally, words are split by a single space, ' '.

.writeAll(text, options) // string, object
    - Renders the entire string at once to the specified target.

    - The optional options object may look like the following:

        {
            speed: 200,    // number (milliseconds)
            class: 'angry' // string
        }

        - speed defaults to typewriter speed

        - To include more than one class, just separate each sequential class name with a space

.wait(milliseconds) // number
    - Waits n milliseconds before executing the next method.

.newLine()
    - Starts a new line.

.erase(amount, options) // number, object
    - Removes the specified amount of characters from the target element. The optional speed argument defaults to the typewriter speed.

        - The optional options object may look like the following:

            {
                speed: 200, // number (milliseconds)
                spaces: false // boolean
            }

            - speed defaults to the typewriter speed

            - spaces defaults to true, therefore erase will erase the next character if it's a space on the same interval that it erases a non space character. If you do not want spaces to be erased on the same interval that a character is erased, set the spaces property to false.

.eraseWords(amount, speed) // number, number
    - Removes the specified amount of word from the target element. The optional speed argument defaults to the typewriter speed. When a word is removed, any single spaces wrapping that word are removed as well.

.eraseAll()
    - Removes all content from the specified target.

.callBack(cb, args) // function, array
    - Pass in your own function definition to be executed. args is an optional array of arguments which will be spread and passed to your passed in function.

.setSpeed(speed) // number
    - Set the default speed (milliseconds).
```
Note that this may change, as it is under development.

