"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidNumbers = [];
const parsedValues = [];

for (let index = 0; index < apiData.length; index += 1) {
  const value = apiData[index];
  const numberValue = Number(value);
  const booleanValue = Boolean(value);
  const stringValue = String(value);
  const isWhitespaceOnly = typeof value === "string" && value.trim() === "";
  const isValidNumber = Number.isFinite(numberValue) && !isWhitespaceOnly;

  const report = {
    index,
    original: value,
    number: numberValue,
    boolean: booleanValue,
    string: stringValue,
    validNumber: isValidNumber
  };
  parsedValues.push(report);

  if (isValidNumber) {
    validNumbers.push(numberValue);
  } else {
    // Whitespace converts to zero in JavaScript, but this input is intentionally
    // treated as invalid API data per the assignment.
    invalidNumbers.push({ value, reason: Number.isNaN(numberValue) ? "Number conversion produced NaN" : "Whitespace-only input" });
  }
}

console.log("=== Dynamic Data Parser ===");
for (const item of parsedValues) {
  const status = item.validNumber ? "VALID" : "INVALID";
  console.log(
    `[${status}] index=${item.index}, original=${String(item.original)}, ` +
    `Number=${item.number}, Boolean=${item.boolean}, String="${item.string}"`
  );
}

console.log("\nValid numeric data:", validNumbers);
console.log("Invalid numeric data:");
for (const item of invalidNumbers) {
  console.log(`  value=${String(item.value)}, reason=${item.reason}`);
}
