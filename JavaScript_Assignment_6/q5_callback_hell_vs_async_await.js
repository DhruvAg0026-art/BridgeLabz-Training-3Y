"use strict";

function runCallbackPipeline() {
  console.log("Starting nested-callback pipeline:");

  setTimeout(() => {
    console.log("Design complete");
    setTimeout(() => {
      console.log("Build complete");
      setTimeout(() => {
        console.log("Test complete");
        setTimeout(() => {
          console.log("Deploy complete");
          setTimeout(() => {
            console.log("Celebrate!");
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

function runStage(stageName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${stageName} complete`);
      resolve();
    }, 1000);
  });
}

async function runAsyncAwaitPipeline() {
  console.log("Starting async/await pipeline:");
  await runStage("Design");
  await runStage("Build");
  await runStage("Test");
  await runStage("Deploy");
  await runStage("Celebrate");
}

// The nested version is intentionally callback-heavy to show callback hell.
// async/await keeps the same sequential behavior in a readable, top-to-bottom
// flow; each await pauses this function without blocking the JavaScript thread.
runCallbackPipeline();
runAsyncAwaitPipeline().catch((error) => {
  console.error("Async/await pipeline failed:", error.message);
});
