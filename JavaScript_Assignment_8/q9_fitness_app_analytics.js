// Q9. Fitness App Analytics

class FitnessAnalytics {
  constructor(data) {
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("Dataset is empty");
    }
    this.data = data;
  }

  // filter() -> steps > 7000
  getActiveUsers() {
    return this.data.filter((u) => u.steps > 7000);
  }

  // reduce() -> average calories
  getAverageCalories() {
    const total = this.data.reduce((sum, u) => sum + u.calories, 0);
    return total / this.data.length;
  }

  // map() -> formatted messages
  getUserSummary() {
    return this.data.map(
      (u) => `User ${u.user} walked ${u.steps} steps and burned ${u.calories} calories.`
    );
  }
}

const workoutData = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 },
];

try {
  const analytics = new FitnessAnalytics(workoutData);

  console.log("Active users:", analytics.getActiveUsers());
  console.log("Average calories:", analytics.getAverageCalories());
  console.log("User summary:");
  analytics.getUserSummary().forEach((msg) => console.log(" -", msg));
} catch (error) {
  console.log("Error:", error.message);
}

// Empty dataset check
try {
  new FitnessAnalytics([]);
} catch (error) {
  console.log("Error:", error.message);
}
