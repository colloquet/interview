function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let i = start - 1;

  for (let j = start; j < end - 1; j++) {
    if (array[j] <= pivot) {
      i++;
      swap(array, i, j);
    }
  }

  swap(array, i + 1, end - 1);
  return i + 1;
}

function quicksort(array, start = 0, end = array.length) {
  if (start < end - 1) {
    const middle = partition(array, start, end);
    quicksort(array, start, middle);
    quicksort(array, middle + 1, end);
  }

  return array;
}

const array = [15, 12, 3, 2, 7];
// partition(array, 0, array.length);
// console.log(quicksort(array));

function simpleQuicksort(array) {
  if (array.length < 2) return array;

  const left = [];
  const right = [];
  const pivotIndex = Math.floor(array.length / 2);
  const pivot = array.splice(pivotIndex, 1)[0];

  array.forEach((item) => {
    if (item < pivot) {
      left.push(item);
    } else {
      right.push(item);
    }
  });

  return [...simpleQuicksort(left), pivot, ...simpleQuicksort(right)];
}

// console.log(simpleQuicksort(array));
