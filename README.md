# TypeWriter
A small JS library to expressively render text.

## Installation
```
<script src="https://cdn.jsdelivr.net/gh/dlcnine/TypeWriter@1.0.0/dist/typewriter.min.js"></script>
```

## Usage
```
const tw = new TypeWriter('#target');

tw.write('the quick brown ').newLine()
.writeWords('fox jumps over', { class: 'angry'}).writeAll(' the lazy dog').wait(3000).eraseAll();
```

## Docs
Check out the [TypeWriter documentation page](https://dlcnine.github.io/TypeWriter/) for deatils on its API.
