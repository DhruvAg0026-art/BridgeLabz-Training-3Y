// Q7. Banking Application (Private fields)

class BankAccount {
  #balance;

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Deposit amount must be a positive number");
    }
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Withdrawal amount must be a positive number");
    }
    if (amount > this.#balance) {
      throw new Error(`Insufficient balance. Available: Rs.${this.#balance}, Requested: Rs.${amount}`);
    }
    this.#balance -= amount;
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
console.log("Initial balance:", account.getBalance());

// Valid deposits
account.deposit(500);
console.log("After depositing 500:", account.getBalance());
account.deposit(250);
console.log("After depositing 250:", account.getBalance());

// Valid withdrawal
account.withdraw(300);
console.log("After withdrawing 300:", account.getBalance());

// Invalid withdrawals handled with try/catch
try {
  account.withdraw(5000);
} catch (error) {
  console.log("Error:", error.message);
}

try {
  account.deposit(-100);
} catch (error) {
  console.log("Error:", error.message);
}

// Private field direct access nahi ho sakta
console.log("Direct access to balance:", account.balance); // undefined
