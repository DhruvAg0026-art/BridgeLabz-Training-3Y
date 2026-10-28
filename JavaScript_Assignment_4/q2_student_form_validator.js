"use strict";

const studentPatterns = {
  name: /^[A-Za-z]+$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\d{10}$/,
  password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S+$/
};

function validateStudentField(fieldName, value) {
  const pattern = studentPatterns[fieldName];
  return pattern ? pattern.test(value) : false;
}

function buildStudentForm() {
  const form = document.createElement("form");
  form.innerHTML = `
    <h2>Student Registration</h2>
    <label>Name <input name="name" type="text" required></label><small data-error="name"></small>
    <label>Email <input name="email" type="email" required></label><small data-error="email"></small>
    <label>Phone <input name="phone" type="tel" required></label><small data-error="phone"></small>
    <label>Password <input name="password" type="password" required></label><small data-error="password"></small>
    <button type="submit">Validate registration</button>`;
  form.style.cssText = "display:grid;gap:8px;max-width:360px;font:16px sans-serif";

  form.addEventListener("input", (event) => {
    const input = event.target;
    if (!input.name || !studentPatterns[input.name]) return;

    const valid = validateStudentField(input.name, input.value);
    input.style.border = `2px solid ${valid ? "green" : "red"}`;
    form.querySelector(`[data-error="${input.name}"]`).textContent =
      valid ? "Looks good." : "Please enter a valid value.";
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const allValid = [...form.querySelectorAll("input")]
      .every((input) => validateStudentField(input.name, input.value));
    console.log(allValid ? "Student form is valid." : "Please fix the highlighted fields.");
  });
  document.body.append(form);
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildStudentForm, { once: true });
  } else {
    buildStudentForm();
  }
} else {
  console.log("Student form preview (valid, invalid):");
  console.log("Name:", validateStudentField("name", "Asha"), validateStudentField("name", "Asha Rao"));
  console.log("Email:", validateStudentField("email", "asha@example.com"), validateStudentField("email", "invalid"));
  console.log("Phone:", validateStudentField("phone", "9876543210"), validateStudentField("phone", "1234"));
  console.log("Password:", validateStudentField("password", "Strong1!"), validateStudentField("password", "weak"));
  console.log("Open this file in a browser to use the interactive form.");
}
