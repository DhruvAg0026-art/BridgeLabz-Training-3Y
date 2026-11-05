"use strict";

Object.defineProperty(Array.prototype, "myMap", {
  configurable: true,
  writable: true,
  enumerable: false,
  value: function (callback, thisArg) {
    if (this == null) {
      throw new TypeError("myMap called on null or undefined");
    }
    if (typeof callback !== "function") {
      throw new TypeError("myMap callback must be a function");
    }

    const source = Object(this);
    const result = new Array(source.length);

    for (let index = 0; index < source.length; index += 1) {
      // Match map(): skip empty slots, while preserving their positions.
      if (index in source) {
        result[index] = callback.call(
          thisArg,
          source[index],
          index,
          source
        );
      }
    }

    return result;
  }
});

const numbers = [1, 2, 3];
const doubledNumbers = numbers.myMap((number) => number * 2);

console.log("Original array:", numbers);
console.log("Mapped array:", doubledNumbers);
