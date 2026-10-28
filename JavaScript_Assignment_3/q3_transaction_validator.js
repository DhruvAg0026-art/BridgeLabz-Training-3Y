"use strict";

class TransactionValidationError extends Error {
  constructor(category, message) {
    super(message);
    this.name = "TransactionValidationError";
    this.category = category;
  }
}

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];
const validTransactions = [];
const invalidTransactions = [];

for (let index = 0; index < transactions.length; index += 1) {
  const transaction = transactions[index];

  try {
    if (transaction === null) {
      throw new TransactionValidationError("null-entry", "Transaction entry is null");
    }
    if (
      transaction.id === undefined ||
      transaction.id === null ||
      transaction.amount === undefined ||
      transaction.amount === null
    ) {
      throw new TransactionValidationError("missing-field", "Transaction must include id and amount");
    }
    if (typeof transaction.amount !== "number" || !Number.isFinite(transaction.amount)) {
      throw new TransactionValidationError("invalid-amount", "Amount must be a finite number");
    }
    if (transaction.amount < 0) {
      throw new TransactionValidationError("negative-amount", "Amount cannot be negative");
    }

    // Set a VS Code breakpoint here to inspect index and transaction.
    debugger;
    validTransactions.push(transaction);
    console.log(`Transaction ${transaction.id} accepted.`);
  } catch (error) {
    const category = error instanceof TransactionValidationError ? error.category : "unexpected-error";
    invalidTransactions.push({ index, transaction, category, message: error.message });
    console.log(`Transaction at index ${index} rejected [${category}]: ${error.message}`);
  }
}

console.log("\n=== Transaction Report ===");
console.log(`Successful: ${validTransactions.length}`);
console.log(`Failed: ${invalidTransactions.length}`);
console.log("Valid transactions:", validTransactions);
console.log("Invalid transactions:", invalidTransactions);
