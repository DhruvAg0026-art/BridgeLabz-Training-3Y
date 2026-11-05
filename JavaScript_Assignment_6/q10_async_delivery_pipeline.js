"use strict";

function runDeliveryStep(stepName, successMessage) {
  const delay = 1000 + Math.floor(Math.random() * 1001);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error(`${stepName} failed`));
        return;
      }

      console.log(successMessage);
      resolve();
    }, delay);
  });
}

async function runPipeline() {
  console.log("Start Pipeline");

  // Each await waits for one Promise to settle before starting the next step.
  // The timer callbacks run asynchronously, allowing other JavaScript work to
  // continue while this function is suspended; the event loop resumes it when
  // the current step resolves.
  await runDeliveryStep("takeOrder", "Step 1: Order taken");
  await runDeliveryStep("prepare", "Step 2: Food prepared");
  await runDeliveryStep("pack", "Step 3: Package ready");
  await runDeliveryStep("dispatch", "Step 4: Out for delivery");
  await runDeliveryStep("deliver", "Delivery completed!");
}

runPipeline().catch((error) => {
  console.error(`${error.message}. Pipeline failed!`);
});
