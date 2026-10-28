"use strict";

const loginPatterns = {
  username: /^.{5,}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S{8,}$/
};

function validateLogin(username, password) {
  const errors = [];
  if (!loginPatterns.username.test(username)) {
    errors.push("Username must be at least 5 characters long.");
  }
  if (password.length < 8) errors.push("Password must be at least 8 characters long.");
  if (!/[A-Z]/.test(password)) errors.push("Password must include an uppercase letter.");
  if (!/[a-z]/.test(password)) errors.push("Password must include a lowercase letter.");
  if (!/\d/.test(password)) errors.push("Password must include a number.");
  if (!/[^A-Za-z0-9\s]/.test(password)) errors.push("Password must include a special character.");
  if (/\s/.test(password)) errors.push("Password cannot contain spaces.");
  return errors;
}

function buildLoginForm() {
  const form = document.createElement("form");
  form.innerHTML = `
    <h2>Login Validation</h2>
    <label>Username <input name="username" required></label>
    <label>Password <input name="password" type="password" required></label>
    <button type="submit">Validate</button>
    <p aria-live="polite"></p>`;
  form.style.cssText = "display:grid;gap:8px;max-width:360px;font:16px sans-serif";
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const { username, password } = Object.fromEntries(new FormData(form).entries());
    const errors = validateLogin(username, password);
    const message = form.querySelector("p");
    message.textContent = errors.length === 0 ? "Validation successful." : errors.join(" ");
    message.style.color = errors.length === 0 ? "green" : "red";
    console.log(message.textContent);
  });
  document.body.append(form);
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildLoginForm, { once: true });
  } else {
    buildLoginForm();
  }
} else {
  console.log("Valid sample errors:", validateLogin("student1", "StrongPass1!"));
  console.log("Invalid sample errors:", validateLogin("abc", "weak"));
  console.log("Open this file in a browser to use the interactive login form.");
}
