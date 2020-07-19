function getName(middleName, lastName) {
  return `${this.name} ${middleName} ${lastName}`;
}

const a = {
  name: 'a',
};

function myBind(fn, context, ...args) {
  const call = Symbol.for('myCall');
  return function (...args1) {
    context[call] = fn;
    const result = context[call](...args, ...args1);
    delete context[call];
    return result;
  };
}

// const aGetName = myBind(getName, a);
const aGetName = getName.bind(a);

console.log(aGetName('last'));
