"use strict";

const user = {
  name: "Dhruv",
  showName: () => {
    // Arrow functions inherit `this` from the surrounding scope, not `user`.
    console.log("Arrow function this.name:", this?.name);
  }
};

user.showName();

user.showName = function () {
  // A normal method call sets `this` to the object before the dot.
  console.log("Normal function this.name:", this.name);
};

user.showName();

console.log(
  "The arrow's `this` is lexical, so it does not refer to the `user` object. " +
  "The normal function gets `this` from the call `user.showName()`."
);
