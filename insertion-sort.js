function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (array[j] > array[j - 1]) break;
      if (array[j] < array[j - 1]) {
        swap(array, j, j - 1);
      }
    }
  }

  return array;
}

module.exports = insertionSort;

// Summary:
// First pointer (i) starts from the left, the second pointer (j) starts from i and go towards left.
// If value at j is larger than value at j - 1, then we break because the left side is guarantee sorted.
// If value at j is smaller than value at j - 1, then we swap them and continue going towards left
