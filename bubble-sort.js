function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let swapped = false;
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        swapped = true;
      }
    }

    if (!swapped) break;
  }
  return array;
}

// const array = [15, 12, 3, 2, 7];
// console.log(bubbleSort(array));

module.exports = bubbleSort;
