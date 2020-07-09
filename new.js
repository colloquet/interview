// the purpose of 'new' operator is to return an object with the constructor's prototype
// and assign properties to the object

// if constructor returns a valid object or method, the new function will return that
// by default it returns 'this' in constructor

// we usually put common methods in prototype instead of creating a new one for each instance
// because all instance point to the same prototype reference and thus it is more memory efficient

function myNew(func, ...args) {
  // create the context (this) to return, obj.__proto__ === func.prototype
  const obj = Object.create(func.prototype);

  // run constructor and assign properties etc
  const result = func.apply(obj, args);

  // if func returns a valid object or function, return this
  if (result && (typeof result === 'object' || typeof result === 'function')) {
    return result;
  }

  // default return 'this'
  return obj;
}

// the purpose of Object.create is to create an empty object with the passed in prototype
// Object.create() can also be written as:
function objCreate(prototype) {
  function F() {};
  F.prototype = prototype;
  return new F();
}
