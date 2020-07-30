// recursion
const fib = (function () {
  const cache = {};

  return function recursion(n) {
    if (n <= 1) return n;
    if (n in cache) return cache[n];

    const result = recursion(n - 1) + recursion(n - 2);
    cache[n] = result;
    return result;
  };
})();

// iterative
function fibIterative(n) {
  let a = 1;
  let b = 1;

  for (let index = 3; index <= n; index++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// console.log(fibIterative(3)); // 2
// console.log(fibIterative(7)); // 13
// console.log(fibIterative(77)); // 5527939700884757

// console.log(fib(3)); // 2
// console.log(fib(7)); // 13
// console.log(fib(77)); // 5527939700884757

console.time('recursion');
for (let index = 0; index < 1; index++) {
  fib(77);
}
console.timeEnd('recursion');

console.time('iterative');
for (let index = 0; index < 1; index++) {
  fibIterative(77);
}
console.timeEnd('iterative');
