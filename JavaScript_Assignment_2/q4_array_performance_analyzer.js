// Generate eight random integer scores from 30 through 100.
const scores = Array.from(
  { length: 8 },
  () => Math.floor(Math.random() * 71) + 30,
);

// Analyze the scores with the requested Math and array methods.
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);
const totalScore = scores.reduce((total, score) => total + score, 0);
const averageScore = totalScore / scores.length;
const passingScores = scores.filter((score) => score >= 50);
const scoreReport = scores.map((score, index) => ({
  student: index + 1,
  score,
  result: score >= 50 ? "Pass" : "Fail",
}));

console.table(scoreReport);
console.log(`Highest score: ${highestScore}`);
console.log(`Lowest score: ${lowestScore}`);
console.log(`Average score: ${averageScore.toFixed(2)}`);
console.log(`Students passed: ${passingScores.length}`);
