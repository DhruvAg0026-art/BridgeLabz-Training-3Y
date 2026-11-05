"use strict";

function Person(name) {
  this.name = name;
}

Person.prototype.introduce = function () {
  console.log(`Person: ${this.name}`);
};

function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function () {
  console.log(`Department: ${this.department}`);
};

function Professor(name, department, subject) {
  Faculty.call(this, name, department);
  this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showSubject = function () {
  console.log(`Subject: ${this.subject}`);
};

const professor = new Professor("Dr. Sharma", "Computer Science", "JavaScript");

professor.introduce();
professor.showDepartment();
professor.showSubject();
