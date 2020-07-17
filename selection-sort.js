function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let smallest = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[smallest]) {
        smallest = j;
      }
    }
    if (smallest !== i) {
      swap(array, i, smallest);
    }
  }
  return array;
}

// const array = [15, 12, 3, 2, 7];
// console.log(selectionSort(array));

module.exports = selectionSort;
