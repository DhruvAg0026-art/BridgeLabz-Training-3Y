"use strict";

function waitForStep(stepName) {
  const delay = 1000 + Math.floor(Math.random() * 1001);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error(`${stepName} failed.`));
        return;
      }

      console.log(`${stepName} complete.`);
      resolve();
    }, delay);
  });
}

waitForStep("Boiling water")
  .then(() => waitForStep("Brewing coffee"))
  .then(() => waitForStep("Pouring coffee into a cup"))
  .then(() => console.log("Coffee ready for the team!"))
  .catch((error) => console.error("Coffee process failed:", error.message));
