// Sample smart-home security state; change these values to test other outcomes.
const isDoorLocked = true;
const isWindowClosed = true;
const isAlarmOn = true;
const isOwnerInside = true;

// Access is secure only when every required condition is true.
const isSecure =
  isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
const isUnsafe =
  !isAlarmOn || !isDoorLocked || !isWindowClosed || !isOwnerInside;

// The second condition makes use of OR and NOT explicit for the unsafe state.
if (isSecure && !isUnsafe) {
  console.log("Secure");
} else {
  console.log("Unsafe");
}
