// 实现instance_of
function A() {} 
var a = new A()
function B() {}


function instance_of(obj, func) {
  const funcProto = func.prototype;
  let objProto = obj.__proto__;

  while (true) {
    if (objProto === null) {
      return false;
    }
    if (objProto === funcProto) {
      return true;
    }
    objProto = objProto.__proto__;
  }
}

console.log(instance_of(a, A)); // true
console.log(instance_of(A, Object)); // true
console.log(instance_of(a, B)); // false

// Note:
// instanceof does NOT check if a function's constructor appears in the __proto__ chain
// it checks if function's prototype is referenced in the __proto__ chain