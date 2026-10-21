// Sample marks for five subjects; replace these values to evaluate another student.
const marks = [88, 76, 91, 82, 79];
const minimumPassingMark = 35;
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;
const hasFailingSubject = marks.some((mark) => mark < minimumPassingMark);

let result;

if (hasFailingSubject || percentage < 50) {
  result = "Detained";
} else if (percentage >= 85) {
  result = "Promoted with Distinction";
} else if (percentage >= 50 && percentage < 85) {
  result = "Promoted";
} else {
  result = "Detained";
}

console.log(`Average marks: ${average.toFixed(2)}`);
console.log(`Overall percentage: ${percentage.toFixed(2)}%`);
console.log(result);
