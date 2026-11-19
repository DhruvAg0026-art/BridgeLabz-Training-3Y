// Q4. Employee Inheritance (Runtime Polymorphism)

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    return `${this.name} is working in the ${this.department} department.`;
  }
}

class Manager extends Employee {
  constructor(name, department) {
    super(name, department);
  }

  // Method overriding
  work() {
    return `${this.name} is managing the ${this.department} team and planning projects.`;
  }
}

const emp = new Employee("Ravi", "IT");
const mgr = new Manager("Neha", "IT");

console.log(emp.work());
console.log(mgr.work());

// Runtime polymorphism: same call work(), behaviour object ke type par depend karta hai
const staff = [emp, mgr, new Employee("Karan", "HR"), new Manager("Sita", "Finance")];
console.log("\n--- Runtime Polymorphism ---");
staff.forEach((person) => console.log(person.work()));
