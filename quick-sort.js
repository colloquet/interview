function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function partition(array, left, right) {
  const pivot = array[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }

    while (array[j] > pivot) {
      j--;
    }

    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }

  return i;
}

function quicksort(array, left = 0, right = array.length - 1) {
  if (array.length > 1) {
    const index = partition(array, left, right);
    if (left < index - 1) {
      quicksort(array, left, index - 1);
    }
    if (index < right) {
      quicksort(array, index, right);
    }
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

module.exports = {
  quicksort,
  simpleQuicksort,
};

// console.log(simpleQuicksort(array));
