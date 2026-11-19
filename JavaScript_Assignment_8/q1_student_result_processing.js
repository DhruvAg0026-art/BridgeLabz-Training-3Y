// Q1. Student Result Processing (reduce + Classes)

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  // Average using reduce()
  calculateAverage() {
    if (this.marks.length === 0) return 0;
    const total = this.marks.reduce((sum, mark) => sum + mark, 0);
    return total / this.marks.length;
  }

  // Grade based on average: A / B / C / F
  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 80) return "A";
    if (avg >= 60) return "B";
    if (avg >= 40) return "C";
    return "F";
  }
}

// Testing with 3 students
const students = [
  new Student("Rahul", [85, 90, 78, 92, 88]),
  new Student("Priya", [65, 70, 58, 72, 66]),
  new Student("Amit", [30, 25, 40, 35, 28]),
];

students.forEach((s) => {
  console.log(
    `${s.name} -> Average: ${s.calculateAverage().toFixed(2)}, Grade: ${s.getGrade()}`
  );
});
