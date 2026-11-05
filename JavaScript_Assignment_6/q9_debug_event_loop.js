"use strict";

// Predicted output:
// Script start
// Script end
// Promise callback
// Timeout callback
console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);
Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

// The Promise callback is a microtask, and the timer callback is a macrotask.
// After synchronous code finishes, JavaScript drains queued microtasks before
// moving on to macrotasks, even when the timer delay is zero.
