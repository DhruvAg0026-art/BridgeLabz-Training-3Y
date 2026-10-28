"use strict";

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

console.log("=== Employee Bonus Calculator ===");

for (const employee of employees) {
  try {
    if (employee === null || typeof employee !== "object") {
      throw new TypeError("Employee entry must be an object");
    }
    if (!("name" in employee) || !("salary" in employee) || !("years" in employee)) {
      throw new TypeError("Employee is missing name, salary, or years");
    }

    const salary = Number(employee.salary);
    const years = Number(employee.years);
    if (!Number.isFinite(salary) || !Number.isFinite(years)) {
      throw new TypeError("Salary and years must convert to finite numbers");
    }

    const bonusRate = years > 3 ? 0.1 : 0.05;
    const bonus = salary * bonusRate;
    console.log(
      `${employee.name}: salary=$${salary.toFixed(2)}, years=${years}, ` +
      `bonus rate=${(bonusRate * 100).toFixed(0)}%, bonus=$${bonus.toFixed(2)}`
    );
  } catch (error) {
    console.log(`Employee record error: ${error.name}: ${error.message}`);
  }
}

// Strict mode prevents accidental assignments such as `bonusTotal = bonus`
// from creating an implicit global variable.
