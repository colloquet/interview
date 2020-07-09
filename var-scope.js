var a = 10;

function f() {
  var b = 20;
  console.log(b + this.a);
}

function f1() {
  var a = -6;
  console.log(a + this.a);
  f.call(this);
}

f1.call({ a: 150 });

// console output?
// 144
// 170