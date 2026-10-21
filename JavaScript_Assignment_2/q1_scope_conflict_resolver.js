// This variable is declared in the global scope.
let bonus = 5000;

function calculateSalary(isPermanent) {
  // These variables are local to this function call.
  const salary = 40000;
  let totalSalary = salary;

  if (isPermanent) {
    totalSalary += bonus;
  }

  console.log(`Permanent employee: ${isPermanent}`);
  console.log(`Total salary: ${totalSalary}`);
}

// Changing the local isPermanent value changes the calculation, not global bonus.
calculateSalary(true);
calculateSalary(false);
console.log(`Global bonus remains: ${bonus}`);
