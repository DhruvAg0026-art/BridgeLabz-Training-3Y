"use strict";

console.log("Start");

setTimeout(() => {
  console.log("setTimeout callback (macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise callback (microtask)");
});

console.log("Synchronous log");
console.log("End");

// Synchronous code runs first. After the call stack empties, JavaScript drains
// the microtask queue (Promise.then) before it runs the timer macrotask.
