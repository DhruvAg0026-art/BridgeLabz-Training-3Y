// Sample values represent records that might be stored in a user database.
const userName = "Aarav";
const accountBalance = 1250.75;
const isActive = true;
const favoriteColors = ["blue", "green"];
const profile = { city: "Pune", membership: "standard" };
const middleName = null;
let secondaryEmail;

// typeof null is "object" in JavaScript, so keep its displayed type explicit.
const dataSummary = [
  { label: "User name", value: userName, type: typeof userName },
  { label: "Account balance", value: accountBalance, type: typeof accountBalance },
  { label: "Active account", value: isActive, type: typeof isActive },
  {
    label: "Favorite colors",
    value: favoriteColors.join(", "),
    type: Array.isArray(favoriteColors) ? "array" : typeof favoriteColors,
  },
  { label: "Profile", value: JSON.stringify(profile), type: typeof profile },
  { label: "Middle name", value: middleName, type: middleName === null ? "null" : typeof middleName },
  { label: "Secondary email", value: secondaryEmail, type: typeof secondaryEmail },
];

console.table(dataSummary);
