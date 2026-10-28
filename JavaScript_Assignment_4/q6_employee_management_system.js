"use strict";

class Employee {
  constructor(id, name, department, salary) {
    if (!Number.isFinite(salary) || salary < 0) {
      throw new TypeError("Salary must be a non-negative number");
    }
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    if (!Number.isFinite(percent) || percent < 0) {
      throw new RangeError("Bonus percentage must be non-negative");
    }
    this.salary *= 1 + percent / 100;
    return this.salary;
  }
}

const employees = [
  new Employee(1, "Ava", "Engineering", 7200),
  new Employee(2, "Noah", "Sales", 6100),
  new Employee(3, "Mia", "Design", 6500),
  new Employee(4, "Liam", "Support", 5400),
  new Employee(5, "Zoe", "Finance", 6800)
];

employees[0].applyBonus(5);

console.log("=== Annual Employee Salaries ===");
for (const employee of employees) {
  console.log(
    `${employee.name} (${employee.department}): $${employee.getAnnualSalary().toFixed(2)} per year`
  );
}

const totalAnnualPayout = employees.reduce(
  (total, employee) => total + employee.getAnnualSalary(),
  0
);
console.log(`Total annual company payout: $${totalAnnualPayout.toFixed(2)}`);
