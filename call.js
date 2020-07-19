var test = {
  name: 'test',
};

var test1 = {
  name: 'test1',
  fn: function () {
    console.log(this.name);
  },
};

// 實現 call
// test1.fn.myCall(test); // 'test'

// Method 1
// Since test1.fn inherit Function, we can add myCall to Function's prototype
Function.prototype.myCall = function (context, ...args) {
  // make sure the key does not conflict with any existing keys
  const key = Symbol.for('myCall');

  // assign 'this'(current function) to context so that when call the function, context becomes 'this'
  context[key] = this;
  context[key](...args);

  // clean up afterwards
  delete context[key];
};

// Method 2
// Since test1.fn inherit Function which inherit Object, we can add myCall to Object's prototype
test1.__proto__.myCall = function (context, ...args) {
  const key = Symbol.for('myCall');
  context[key] = this;
  context[key](...args);
  delete context[key];
};

// Method 3
// Add 'myCall' directly to test1.fn, this way wo don't pollute Function or Object's prototype
test1.fn.myCall = function (context, ...args) {
  const key = Symbol.for('myCall');
  context[key] = this;
  context[key](...args);
  delete context[key];
};

test1.fn.myCall(test);
