"use strict";

const moduleNames = ["Profile", "Posts", "Messages"];
const failedModuleIndex = Math.floor(Math.random() * moduleNames.length);

function loadModule(moduleName, delay, shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error(`${moduleName} failed to load`));
        return;
      }

      resolve(`${moduleName} Loaded`);
    }, delay);
  });
}

function loadProfile() {
  return loadModule("Profile", 2000, failedModuleIndex === 0);
}

function loadPosts() {
  return loadModule("Posts", 1500, failedModuleIndex === 1);
}

function loadMessages() {
  return loadModule("Messages", 1000, failedModuleIndex === 2);
}

const startTime = Date.now();
const modulePromises = [loadProfile(), loadPosts(), loadMessages()];

Promise.allSettled(modulePromises).then((results) => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`${moduleNames[index]} succeeded: ${result.value}`);
    } else {
      console.error(`${moduleNames[index]} failed: ${result.reason.message}`);
    }
  });

  console.log(`Total time taken: ${Date.now() - startTime} ms`);
});
