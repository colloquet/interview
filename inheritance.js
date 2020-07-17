function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

function Student(name, id) {
  Person.call(this, name);

  this.id = id;
}

function inherit(subClass, superClass) {
  // inherit prototype methods and properties
  subClass.prototype = Object.create(superClass.prototype);

  // inherit static methods
  subClass.__proto__ = superClass;
  // Object.setPrototypeOf(subClass, superClass); <-- this also works

  // set constructor and set it to non-enumerable
  Object.defineProperty(subClass.prototype, 'constructor', {
    value: subClass,
    enumerable: false,
    writable: true,
  });
}

inherit(Student, Person);

Student.prototype.getId = function () {
  return this.id;
};

const colloque = new Student('colloque', 1);
console.log(colloque.getName());
console.log(colloque.getId());

// Why is it necessary to set the prototype constructor?
// https://stackoverflow.com/questions/8453887/why-is-it-necessary-to-set-the-prototype-constructor
