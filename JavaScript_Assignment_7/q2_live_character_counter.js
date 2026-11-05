"use strict";

if (typeof document !== "undefined") {
  const maxCharacters = 100;
  const textArea = document.createElement("textarea");
  textArea.maxLength = maxCharacters;
  textArea.placeholder = "Write a message (100 characters maximum)";
  textArea.setAttribute("aria-label", "Message");
  textArea.rows = 5;
  textArea.style.display = "block";
  textArea.style.width = "min(100%, 420px)";
  textArea.style.marginBottom = "8px";

  const counter = document.createElement("p");
  const resetButton = document.createElement("button");
  resetButton.textContent = "Reset";

  function updateCounter() {
    const remaining = maxCharacters - textArea.value.length;
    counter.textContent = `${remaining} characters remaining`;
    counter.style.color = remaining === 0 ? "red" : remaining <= 20 ? "#b8860b" : "inherit";
  }

  // maxLength handles normal typing; this guard also explicitly blocks keys at the limit.
  textArea.addEventListener("keydown", (event) => {
    const allowedKeys = [
      "Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp",
      "ArrowDown", "Home", "End", "Tab"
    ];
    const isShortcut = event.ctrlKey || event.metaKey;
    if (textArea.value.length >= maxCharacters && !allowedKeys.includes(event.key) && !isShortcut) {
      event.preventDefault();
    }
  });

  textArea.addEventListener("input", updateCounter);
  resetButton.addEventListener("click", () => {
    textArea.value = "";
    updateCounter();
    textArea.focus();
  });

  updateCounter();
  document.body.append(
    Object.assign(document.createElement("h1"), { textContent: "Live Character Counter" }),
    textArea,
    counter,
    resetButton
  );
}
