function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, [...args, ...args2]);
      };
    }
  };
}

const curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3, 4, 5));
console.log(curriedSum(1)(2)(3)(4)(5));
console.log(curriedSum(1, 2)(3)(4)(5));
console.log(curriedSum(1, 2, 3)(4)(5));
console.log(curriedSum(1, 2, 3)(4, 5));
