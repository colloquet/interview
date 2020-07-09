let a = Object.assign({}, { x: 1, y: 2, z: 3 });

let b = Object.assign({}, a);

console.log('a is', a);
console.log('b is', b);
console.log('a and b have same map:', %HaveSameMap(a, b));

// node --allow-natives-syntax v8-map.js