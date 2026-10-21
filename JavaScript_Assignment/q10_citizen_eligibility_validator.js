// Sample details; replace these values to evaluate another person.
const age = 19;
const isCitizen = true;
let eligibility;

if (isCitizen) {
  if (age >= 18 && age <= 20) {
    // Apply the specific "vote only" range before the general citizen rule.
    eligibility = "Eligible to vote only.";
  } else if (age >= 21) {
    eligibility = "Eligible for all services.";
  } else {
    eligibility = "Not eligible yet.";
  }
} else if (age >= 18) {
  eligibility = "Only age criteria met.";
} else {
  eligibility = "Not eligible yet.";
}

console.log(eligibility);
