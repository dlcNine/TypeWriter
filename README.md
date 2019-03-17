# TypeWriter
Small js library to expressively render text. [Check out the docs](https://dlcnine.github.io/TypeWriter/)

## Usage
```
const tw = new TypeWriter('#target');

tw.write('the quick brown ').newLine()
.writeWords('fox jumps over', { class: 'angry'}).writeAll(' the lazy dog').wait(3000).eraseAll();
```

## API
```
.write(text, options) // string, object
    - Render the text one character at a time to the specified target. The options object is optional.

.writeWords(text, options) // string, object
    - Render the text word by word to the specified target. Internally, words are split by a single space, ' '. The options object is optional.

.writeAll(text, options) // string, object
    - Renders the entire string at once to the specified target. The options object is optional.

    - The optional options object may look like the following:

        {
            speed: 200,    // number (milliseconds)
            class: 'angry' // string
        }

        - speed defaults to typewriter speed

        - To include more than one class, just separate each sequential class name with a space

.erase(amount, speed) // number, number
    - Removes the specified amount of characters from the target element. The optional speed argument defaults to the typewriter speed.

.eraseWords(amount, speed) // number, number
    - Removes the specified amount of words from the target element. The optional speed argument defaults to the typewriter speed. Before and after each word is removed, the end is trimmed.

.eraseAll()
    - Removes all content from the specified target.

.wait(milliseconds) // number
    - Waits n milliseconds before executing the next method.

.newLine()
    - Starts a new line.

.callBack(cb, args) // function, array
    - Pass in your own function definition to be executed. args is an optional array of arguments which will be spread and passed to your passed in function.

.setSpeed(speed) // number
    - Set the default speed (milliseconds).
```

