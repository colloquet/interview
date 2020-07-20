// recursive
function binarySearchRecursive(
  array,
  target,
  left = 0,
  right = array.length - 1,
) {
  if (left > right) return -1;

  const middleIndex = Math.floor((left + right) / 2);

  if (array[middleIndex] === target) {
    return middleIndex;
  } else if (target < array[middleIndex]) {
    return binarySearchRecursive(array, target, left, middleIndex - 1);
  } else {
    return binarySearchRecursive(array, target, middleIndex + 1, right);
  }
}

// iterative
function binarySearchIterative(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middleIndex = Math.floor((left + right) / 2);
    if (array[middleIndex] === target) {
      return middleIndex;
    }

    if (target < array[middleIndex]) {
      right = middleIndex - 1;
    } else {
      left = middleIndex + 1;
    }
  }

  return -1;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearchIterative(array, 1));
console.log(binarySearchIterative(array, 10));
console.log(binarySearchIterative(array, 8));
