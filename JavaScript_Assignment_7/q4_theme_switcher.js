"use strict";

if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    body.theme-light { background: #fff; color: #222; }
    body.theme-dark { background: #222; color: #f5f5f5; }
    body.theme-blue { background: #dceeff; color: #123b62; }
    .theme-switcher button { margin: 4px; padding: 8px 12px; cursor: pointer; }
  `;
  document.head.append(style);

  const container = document.createElement("main");
  container.className = "theme-switcher";
  const heading = document.createElement("h1");
  heading.textContent = "Theme Switcher";
  const description = document.createElement("p");
  description.textContent = "Choose a theme. Your selection is saved as data-theme on the body.";
  container.append(heading, description);

  for (const theme of ["light", "dark", "blue"]) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = `${theme[0].toUpperCase()}${theme.slice(1)} theme`;
    button.addEventListener("click", () => {
      // setAttribute is used for both the theme state and the body's class.
      document.body.setAttribute("class", `theme-${theme}`);
      document.body.setAttribute("data-theme", theme);
    });
    container.append(button);
  }

  document.body.append(container);
  const savedTheme = document.body.getAttribute("data-theme");
  const initialTheme = ["light", "dark", "blue"].includes(savedTheme) ? savedTheme : "light";
  document.body.setAttribute("class", `theme-${initialTheme}`);
  document.body.setAttribute("data-theme", initialTheme);
}
