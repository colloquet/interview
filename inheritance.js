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

Student.prototype = Object.create(Person.prototype);
Object.defineProperty(Student.prototype, 'constructor', {
  value: Student,
  enumerable: false,
  writable: true,
});

Student.prototype.getId = function () {
  return this.id;
};

const colloque = new Student('colloque', 1);
console.log(colloque.getName());
console.log(Function instanceof Object);

// Why is it necessary to set the prototype constructor?
// https://stackoverflow.com/questions/8453887/why-is-it-necessary-to-set-the-prototype-constructor