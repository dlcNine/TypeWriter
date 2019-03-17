const summary = new TypeWriter('#summary');
summary.wait(500).write('A small JS library to expressively render tetx.').wait(250).erase(5).write('text.');

const writeExample = new TypeWriter('#writeExample');

document.querySelector('#triggerWriteExample').addEventListener('click', function(){
    if (!writeExample.methodQ.isRunning) {
        writeExample.eraseAll().write('The quick brown fox jumps over the lazy dog.');
        writeExample.eraseAll().write('The quick brown fox jumps over the lazy dog.', {speed: 150, class: 'text-underline'});
    }
});

const writeWordsExample = new TypeWriter('#writeWordsExample');

document.querySelector('#triggerWriteWordsExample').addEventListener('click', function(){
    if (!writeWordsExample.methodQ.isRunning) {
        writeWordsExample.eraseAll().writeWords('The quick brown fox jumps over the lazy dog.');
        writeWordsExample.eraseAll().writeWords('The quick brown fox jumps over the lazy dog.', {speed: 300, class: 'text-underline'});
    }
});

const writeAllExample = new TypeWriter('#writeAllExample');

document.querySelector('#triggerWriteAllExample').addEventListener('click', function(){
    if (!writeAllExample.methodQ.isRunning) {
        writeAllExample.eraseAll().writeAll('The quick brown fox jumps over the lazy dog.').wait(1000);
        writeAllExample.eraseAll().writeAll('The quick brown fox jumps over the lazy dog.', {speed: 300, class: 'text-underline'});
    }
});

const eraseExample = new TypeWriter('#eraseExample');

document.querySelector('#triggerEraseExample').addEventListener('click', function(){
    if (!eraseExample.methodQ.isRunning) {
        eraseExample.eraseAll().write('The quick brown').write(' fox jumps over', {class: 'text-underline'}).write(' the lazy dog.').erase(35).wait(1000);
        eraseExample.eraseAll().wait(500).write('The quick brown').write(' fox jumps over', {class: 'text-underline'}).write(' the lazy dog.').erase(35, 150);
    }
});

const eraseWordsExample = new TypeWriter('#eraseWordsExample');

document.querySelector('#triggerEraseWordsExample').addEventListener('click', function(){
    if (!eraseWordsExample.methodQ.isRunning) {
        eraseWordsExample.eraseAll().write('The quick brown').write(' fox jumps over', {class: 'text-underline'}).write(' the lazy dog.').eraseWords(7).wait(500);
        eraseWordsExample.eraseAll().wait(500).write('The quick brown').write(' fox jumps over', {class: 'text-underline'}).write(' the lazy dog.').eraseWords(7, 500);
    }
});

const eraseAllExample = new TypeWriter('#eraseAllExample');

document.querySelector('#triggerEraseAllExample').addEventListener('click', function(){
    if (!eraseAllExample.methodQ.isRunning) {
        eraseAllExample.write(' The quick brown fox jumps over the lazy dog.').wait(500).eraseAll();
    }
});

const waitExample = new TypeWriter('#waitExample');

document.querySelector('#triggerWaitExample').addEventListener('click', function(){
    if (!waitExample.methodQ.isRunning) {
        waitExample.eraseAll().write('The quick brown fox ').wait(1000).write('jumps over the lazy dog.');
    }
});

const newLineExample = new TypeWriter('#newLineExample');

document.querySelector('#triggerNewLineExample').addEventListener('click', function(){
    if (!newLineExample.methodQ.isRunning) {
        newLineExample.eraseAll().write('The quick brown fox ').newLine().write('jumps over the lazy dog.');
    }
});

const setSpeedExample = new TypeWriter('#setSpeedExample');

document.querySelector('#triggerSetSpeedExample').addEventListener('click', function(){
    if (!setSpeedExample.methodQ.isRunning) {
        setSpeedExample.eraseAll().write('The quick brown fox ').setSpeed(200).write('jumps over the lazy dog.').setSpeed(50);
    }
});














