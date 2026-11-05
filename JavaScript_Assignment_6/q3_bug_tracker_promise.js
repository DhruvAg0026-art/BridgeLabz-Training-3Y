"use strict";

function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const requestFailed = Math.random() < 0.3;

      if (requestFailed) {
        reject(new Error("Bug tracker API request failed."));
        return;
      }

      resolve(["UI glitch", "API timeout", "Login failure"]);
    }, 1000);
  });
}

getBugs()
  .then((bugs) => {
    console.log("Bugs retrieved successfully:");
    console.table(bugs.map((bug, index) => ({ number: index + 1, bug })));
  })
  .catch((error) => {
    console.error("Unable to retrieve bugs:", error.message);
  });
