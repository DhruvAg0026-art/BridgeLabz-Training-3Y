// Sample customer comment for the feedback check.
const feedback =
  "Great product! Fast delivery and amazing sound quality!";
const feedbackWords = feedback.trim().split(/\s+/);
const normalizedFeedback = feedback.toLowerCase();

// Look for negative terms without depending on letter capitalization.
const needsImprovement =
  normalizedFeedback.includes("bad") || normalizedFeedback.includes("poor");
const feedbackResult = needsImprovement
  ? "Needs Improvement"
  : "Positive Feedback";

console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${feedbackWords.length}`);
console.log(feedbackResult);
