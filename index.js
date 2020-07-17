const insertionSort = require('./insertion-sort');
const bubbleSort = require('./bubble-sort');
const selectionSort = require('./selection-sort');
const mergeSort = require('./merge-sort');
const { quicksort, simpleQuicksort } = require('./quick-sort');

const randomNumbers = [...Array(1000)].map(() => Math.round(Math.random() * 100));

function benchmark(name, sortFn) {
  console.time(name);
  for (let index = 0; index < 1000; index++) {
    sortFn([...randomNumbers]);
  }
  console.timeEnd(name);
}

// benchmark('INSERTION', insertionSort);
// benchmark('BUBBLE', bubbleSort);
// benchmark('SELECTION', selectionSort);
benchmark('QUICK', quicksort);
// benchmark('SIMPLE_QUICK', simpleQuicksort);
benchmark('MERGE', mergeSort);

console.time('NATIVE');
for (let index = 0; index < 1000; index++) {
  [...randomNumbers].sort((a, b) => a - b);
}
console.timeEnd('NATIVE');