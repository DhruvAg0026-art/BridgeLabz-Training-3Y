"use strict";

function Person(name) {
  this.name = name;
}

Person.prototype.showName = function () {
  console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
  Person.call(this, name);
  this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
  console.log(`Branch: ${this.branch}`);
};

const student = new Student("Dhruv", "Computer Science");

student.showName();
student.showBranch();
console.log(
  "Student inherits Person's prototype:",
  Person.prototype.isPrototypeOf(student)
);
