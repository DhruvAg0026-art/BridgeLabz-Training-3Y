// Sample current salary and yearly increment rate.
const currentSalary = 60000;
const annualIncrementRate = 5;
let projectedSalary = currentSalary;
const salaryProjection = [];

for (let year = 1; year <= 5; year += 1) {
  projectedSalary *= 1 + annualIncrementRate / 100;
  projectedSalary = Math.round(projectedSalary);
  salaryProjection.push({
    year,
    salary: projectedSalary,
  });
}

console.table(salaryProjection);
