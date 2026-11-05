"use strict";

if (typeof document !== "undefined") {
  const form = document.createElement("form");
  const heading = document.createElement("h1");
  heading.textContent = "Three-Step Form";
  form.noValidate = true;
  const stepLabel = document.createElement("p");
  const input = document.createElement("input");
  const message = document.createElement("p");
  const backButton = document.createElement("button");
  const nextButton = document.createElement("button");
  const steps = [
    { label: "Name", type: "text", autocomplete: "name" },
    { label: "Email", type: "email", autocomplete: "email" },
    { label: "Password", type: "password", autocomplete: "new-password" }
  ];
  const answers = [];
  let currentStep = 0;

  backButton.type = "button";
  backButton.textContent = "Back";
  nextButton.type = "submit";
  nextButton.textContent = "Next";
  input.required = true;
  input.style.display = "block";
  input.style.margin = "8px 0";
  message.setAttribute("aria-live", "polite");

  function showStep() {
    const step = steps[currentStep];
    stepLabel.textContent = `Step ${currentStep + 1} of ${steps.length}: ${step.label}`;
    input.type = step.type;
    input.autocomplete = step.autocomplete;
    input.value = answers[currentStep] || "";
    input.placeholder = step.label;
    input.setAttribute("aria-label", step.label);
    backButton.hidden = currentStep === 0;
    nextButton.textContent = currentStep === steps.length - 1 ? "Finish" : "Next";
    message.textContent = "";
  }

  function isValid(value) {
    if (currentStep === 1) return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (currentStep === 2) return value.length >= 6;
    return value.trim().length > 0;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!isValid(input.value)) {
      message.textContent = currentStep === 1
        ? "Enter a valid email address."
        : currentStep === 2
          ? "Password must be at least 6 characters."
          : "Name is required.";
      message.style.color = "red";
      input.focus();
      return;
    }

    answers[currentStep] = input.value;
    if (currentStep < steps.length - 1) {
      currentStep += 1;
      showStep();
      return;
    }

    form.replaceChildren(heading);
    const summary = document.createElement("section");
    for (const [index, label] of ["Name", "Email", "Password"].entries()) {
      const row = document.createElement("p");
      row.textContent = `${label}: ${index === 2 ? "••••••" : answers[index]}`;
      summary.append(row);
    }
    form.append(summary);
  });

  backButton.addEventListener("click", () => {
    if (currentStep > 0) {
      answers[currentStep] = input.value;
      currentStep -= 1;
      showStep();
    }
  });

  form.append(heading, stepLabel, input, message, backButton, nextButton);
  document.body.append(form);
  showStep();
}
