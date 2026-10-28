"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  "{invalid}",
  '{"user":"Mina","age":"22"}'
];
const cleanData = [];
const auditErrors = [];
const under18Users = [];

for (let index = 0; index < rawData.length; index += 1) {
  const lineNumber = index + 1;
  try {
    // Place a VS Code breakpoint here to follow each line into parsing/validation.
    debugger;
    const parsed = JSON.parse(rawData[index]);

    if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("JSON value must be an object");
    }
    if (!Object.prototype.hasOwnProperty.call(parsed, "user")) {
      throw new Error('Missing required key "user"');
    }
    if (!Object.prototype.hasOwnProperty.call(parsed, "age")) {
      throw new Error('Missing required key "age"');
    }

    const age = Number(parsed.age);
    if (!Number.isFinite(age)) {
      throw new Error('Key "age" must contain a numeric value');
    }

    const cleanEntry = { ...parsed, age };
    cleanData.push(cleanEntry);
    if (age < 18) {
      under18Users.push(cleanEntry);
    }
  } catch (error) {
    auditErrors.push({ lineNumber, message: error.message });
    console.log(`Line ${lineNumber}: ${error.name}: ${error.message}`);
  }
}

console.log("\n=== JSON Audit Report ===");
console.log("Clean entries:", cleanData);
console.log("Under-18 users:", under18Users);
console.log(`Valid entries: ${cleanData.length}`);
console.log(`Invalid entries: ${auditErrors.length}`);
console.log("Errors:", auditErrors);
