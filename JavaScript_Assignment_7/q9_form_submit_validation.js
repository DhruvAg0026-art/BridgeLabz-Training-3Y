"use strict";

if (typeof document !== "undefined") {
  const heading = document.createElement("h1");
  heading.textContent = "Registration Form";
  const form = document.createElement("form");
  form.noValidate = true;
  const fields = [
    { name: "name", label: "Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Password", type: "password" }
  ];
  const inputByName = new Map();
  const errorByName = new Map();
  const successMessage = document.createElement("p");
  successMessage.setAttribute("aria-live", "polite");
  successMessage.style.color = "green";

  function getError(field, value) {
    if (field.name === "name" && !value.trim()) return "Name is required.";
    if (field.name === "email" && !value.trim()) return "Email is required.";
    if (field.name === "email" && !value.includes("@")) return "Email must contain @.";
    if (field.name === "password" && value.length < 6) {
      return "Password must be at least 6 characters.";
    }
    return "";
  }

  function validateField(field) {
    const input = inputByName.get(field.name);
    const error = getError(field, input.value);
    errorByName.get(field.name).textContent = error;
    input.setAttribute("aria-invalid", String(Boolean(error)));
    return !error;
  }

  for (const field of fields) {
    const label = document.createElement("label");
    const input = document.createElement("input");
    const errorMessage = document.createElement("span");
    label.textContent = `${field.label}: `;
    input.name = field.name;
    input.type = field.type;
    input.required = true;
    input.autocomplete = field.name === "password" ? "new-password" : field.name;
    input.style.display = "block";
    input.style.margin = "4px 0";
    errorMessage.setAttribute("aria-live", "polite");
    errorMessage.style.display = "block";
    errorMessage.style.color = "red";
    label.append(input);
    form.append(label, errorMessage);
    inputByName.set(field.name, input);
    errorByName.set(field.name, errorMessage);

    input.addEventListener("input", () => {
      validateField(field);
      successMessage.textContent = "";
    });
  }

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const isFormValid = fields.map(validateField).every(Boolean);

    if (isFormValid) {
      successMessage.textContent = "Form Submitted Successfully";
      form.reset();
    } else {
      successMessage.textContent = "";
    }
  });

  form.append(submitButton, successMessage);
  document.body.append(heading, form);
}
