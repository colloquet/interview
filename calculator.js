const str = '34-24134-341324+324123';

function calculate(input) {
  const array = str.split(/(-|\+)/g);
  
  while (array.length > 1) {
    let result = 0;
    let left = array.shift();
    let operator = array.shift();
    let right = array.shift();
  
    result = Number(left) + (right * (operator === '-' ? -1 : 1));
    array.unshift(result);
  }

  return array[0];
}

console.log(calculate(str));
console.log(eval(str));
