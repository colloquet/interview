function strictEquals(a, b) {
  if (Object.is(a, NaN) && Object.is(b, NaN)) {
    return false;
  }
  if (Object.is(a, -0) && Object.is(b, 0)) {
    return true;
  }
  if (Object.is(a, 0) && Object.is(b, -0)) {
    return true;
  }
  return Object.is(a, b);
}

console.log(strictEquals(NaN, NaN));
console.log(strictEquals(-0, 0));
console.log(strictEquals(0, -0));
console.log(strictEquals('a', 'a'));
console.log(strictEquals('a', 'b'));