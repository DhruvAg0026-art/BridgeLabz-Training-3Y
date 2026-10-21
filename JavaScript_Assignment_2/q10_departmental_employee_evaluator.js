// Each department is paired with its performance score.
const departments = [
  ["HR", 72],
  ["Finance", 88],
  ["Tech", 95],
  ["Support", 63],
];

// Assign a performance label to every department using nested conditions.
for (const [departmentName, score] of departments) {
  let evaluation;

  if (score >= 90) {
    evaluation = "Excellent";
  } else if (score >= 75) {
    evaluation = "Good";
  } else if (score >= 60) {
    evaluation = "Average";
  } else {
    evaluation = "Needs Improvement";
  }

  console.log(`${departmentName} (${score}): ${evaluation}`);
}
