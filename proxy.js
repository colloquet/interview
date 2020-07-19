var person = {
  name: ' 张三 ',
};

var proxy = new Proxy(person, {
  get: function (target, property) {
    if (property in target) {
      return target[property];
    } else {
      return 'unknown property';
    }
  },
});

console.log(proxy.name); // " 张三 "
console.log(proxy.age); //  抛出一个错误
