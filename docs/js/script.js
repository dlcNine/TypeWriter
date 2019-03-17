const summary = new TypeWriter('#summary');
summary.wait(500).write('A small JS library to expressively render tetx.').wait(250).erase(5).write('text.');

const writeExample = new TypeWriter('#writeExample');

document.querySelector('#triggerWriteExample').addEventListener('click', function(){
    if (!writeExample.methodQ.getLength()) {
        writeExample.eraseAll().write('the quick brown fox jumps over the lazy dog.');
        writeExample.eraseAll().write('the quick brown fox jumps over the lazy dog.', {speed: 150, class: 'text-underline'});
    }
});

const writeWordsExample = new TypeWriter('#writeWordsExample');

document.querySelector('#triggerWriteWordsExample').addEventListener('click', function(){
    if (!writeWordsExample.methodQ.getLength()) {
        writeWordsExample.eraseAll().writeWords('the quick brown fox jumps over the lazy dog.');
        writeWordsExample.eraseAll().writeWords('the quick brown fox jumps over the lazy dog.', {speed: 300, class: 'text-underline'});
    }
});
