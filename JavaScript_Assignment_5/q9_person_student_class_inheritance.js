"use strict";

// Prototype-based version, as in Question 5.
function Person(name) {
  this.name = name;
}

Person.prototype.showName = function () {
  return `Name: ${this.name}`;
};

function Student(name, branch) {
  Person.call(this, name);
  this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
  return `Branch: ${this.branch}`;
};

// ES6 class version: extends links prototypes, and super() initializes Person.
class PersonClass {
  constructor(name) {
    this.name = name;
  }

  showName() {
    return `Name: ${this.name}`;
  }
}

class StudentClass extends PersonClass {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }

  showBranch() {
    return `Branch: ${this.branch}`;
  }
}

const prototypeStudent = new Student("Dhruv", "Computer Science");
const classStudent = new StudentClass("Dhruv", "Computer Science");

console.log("Prototype version:", prototypeStudent.showName());
console.log("Prototype version:", prototypeStudent.showBranch());
console.log("Class version:", classStudent.showName());
console.log("Class version:", classStudent.showBranch());
