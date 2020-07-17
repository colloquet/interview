function flattenRecursive(array) {
  if (!Array.isArray(array)) return array;

  let original = array.slice();
  let result = [];
  for (let index = 0; index < original.length; index++) {
    const element = original[index];
    result = result.concat(flattenRecursive(element));
  }
  return result;
}

function flatten(array) {
  let original = array.slice();
  let result = [];

  while (original.length) {
    const first = original.shift();
    if (Array.isArray(first)) {
      // if element is an array, prepend to original array while flatten it
      original = [...first, ...original];
    } else {
      // if element is not an array, push to result
      result = [...result, first];
    }
  }

  return result;
}

console.log(flatten([1, 2, [3, 4, [5, 6]], [7, 8]]))