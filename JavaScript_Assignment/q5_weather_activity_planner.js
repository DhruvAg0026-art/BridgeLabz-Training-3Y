// Sample weather conditions; change these values to try another forecast.
const temperature = 24;
const isRaining = false;
const windSpeed = 12;

let recommendation;

const shouldStayHome = isRaining || (temperature < 15 && windSpeed > 20);

if (shouldStayHome) {
  if (isRaining) {
    recommendation = "Stay indoors with hot coffee.";
  } else {
    recommendation = "Too cold and windy — stay home.";
  }
} else if (temperature > 35) {
  recommendation = "Go swimming.";
} else {
  recommendation = "Perfect day for a walk.";
}

console.log(recommendation);
