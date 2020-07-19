const arrayWithDuplicates = [1, 2, 3, 1, 2, 4, 5, 23, 3];
const collectionWithDuplicates = arrayWithDuplicates.map((num) => ({
  id: num,
  num,
}));

function unique(array) {
  return [...new Set(array)];
}

function unique1(array) {
  return array.filter((el, index, arr) => {
    return arr.indexOf(el) === index;
  });
}

function unique2(array) {
  const map = {};
  return array.filter((el) => {
    const occurred = el in map;
    map[el] = true;
    return !occurred;
  });
}

function uniqueBy(array, key) {
  const map = {};
  return array.filter((el) => {
    const occurred = el[key] in map;
    map[el[key]] = true;
    return !occurred;
  });
}

console.log(uniqueBy(collectionWithDuplicates, 'id'));
