// function sum(a, b, c, d, e) {
//   return a + b + c + d + e;
// }

// function curry(fn) {
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn.apply(this, args);
//     } else {
//       return function (...args2) {
//         return curried.apply(this, [...args, ...args2]);
//       };
//     }
//   };
// }

// function sum1(...args) {
//   return args.reduce((total, item) => total + item, 0);
// }

// function currying(fn, ...args) {
//   if (args.length >= fn.length) {
//     return fn(...args);
//   }

//   return function (...args2) {
//     return currying(fn, ...args, ...args2);
//   };
// }

// const curriedSum = curry(sum);

// console.log(curriedSum(1, 2, 3, 4, 5));
// console.log(curriedSum(1)(2)(3)(4)(5));
// console.log(curriedSum(1, 2)(3)(4)(5));
// console.log(curriedSum(1, 2, 3)(4)(5));
// console.log(curriedSum(1, 2, 3)(4, 5));

// console.log(curriedSum1(1)(2));

function sum(...args) {
  return function(...args1) {
    if (!args1.length) {
      return args.reduce((total, item) => total + item, 0);
    }
    return sum(...args, ...args1);
  }
}

console.log(sum(1, 2, 3)());
console.log(sum(1)(2)(3)());
console.log(sum(1)(2)(3)(4)(5)());