function deepClone(obj) {
  if (typeof obj !== 'object') return obj;

  const clone = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const element = obj[key];
      clone[key] = deepClone(element);
    }
  }

  return clone;
}

const a = {
  name: 'colloque',
  age: 30,
  test: {
    a: 1,
    b: 2,
    c: [1, 2, 3],
  },
}

const b = deepClone(a);

console.log(b);