"use strict";

if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    .custom-dropdown { position: relative; display: inline-block; font: 16px Arial, sans-serif; }
    .custom-dropdown button { padding: 10px 14px; cursor: pointer; }
    .dropdown-options { display: none; position: absolute; z-index: 1; min-width: 180px; margin: 0; padding: 4px; list-style: none; background: white; border: 1px solid #aaa; }
    .dropdown-options.open { display: block; }
    .dropdown-options button { width: 100%; text-align: left; border: 0; background: white; }
    .dropdown-options button:hover { background: #e8f0fe; }
  `;
  document.head.append(style);

  const heading = document.createElement("h1");
  heading.textContent = "Custom Dropdown";
  const dropdown = document.createElement("div");
  dropdown.className = "custom-dropdown";
  const toggleButton = document.createElement("button");
  toggleButton.type = "button";
  toggleButton.textContent = "Choose an option";
  toggleButton.setAttribute("aria-expanded", "false");
  const optionsList = document.createElement("ul");
  optionsList.className = "dropdown-options";

  for (const optionName of ["JavaScript", "HTML", "CSS"]) {
    const listItem = document.createElement("li");
    const optionButton = document.createElement("button");
    optionButton.type = "button";
    optionButton.textContent = optionName;
    optionButton.addEventListener("click", () => {
      toggleButton.textContent = optionName;
      optionsList.classList.remove("open");
      toggleButton.setAttribute("aria-expanded", "false");
    });
    listItem.append(optionButton);
    optionsList.append(listItem);
  }

  toggleButton.addEventListener("click", () => {
    const isOpen = optionsList.classList.toggle("open");
    toggleButton.setAttribute("aria-expanded", String(isOpen));
  });

  // Capture outside clicks before the target handles them.
  document.addEventListener(
    "click",
    (event) => {
      if (!dropdown.contains(event.target)) {
        optionsList.classList.remove("open");
        toggleButton.setAttribute("aria-expanded", "false");
      }
    },
    true
  );

  dropdown.append(toggleButton, optionsList);
  document.body.append(heading, dropdown);
}
