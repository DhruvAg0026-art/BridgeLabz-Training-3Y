"use strict";

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.getDetails = function () {
  return `${this.brand} ${this.model}`;
};

const firstCar = new Car("Toyota", "Corolla");
const secondCar = new Car("Honda", "Civic");

console.log("First car:", firstCar.getDetails());
console.log("Second car:", secondCar.getDetails());
console.log(
  "Both cars share getDetails:",
  firstCar.getDetails === secondCar.getDetails
);
