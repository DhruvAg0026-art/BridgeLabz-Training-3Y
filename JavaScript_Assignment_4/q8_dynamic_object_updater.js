"use strict";

const user = { name: "John", email: "john@mail.com", age: 21 };

function buildUserEditor() {
  const container = document.createElement("section");
  container.innerHTML = `
    <h2>Edit User</h2>
    <form>
      <label>Name <input name="name" required></label>
      <label>Email <input name="email" type="email" required></label>
      <label>Age <input name="age" type="number" min="0" required></label>
      <button type="submit">Update user</button>
    </form>
    <pre aria-live="polite"></pre>`;
  container.style.cssText = "display:grid;gap:8px;max-width:360px;font:16px sans-serif";

  const form = container.querySelector("form");
  for (const [key, value] of Object.entries(user)) {
    form.elements.namedItem(key).value = String(value);
  }
  const output = container.querySelector("pre");
  const renderUser = () => {
    output.textContent = JSON.stringify(user, null, 2);
  };
  renderUser();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    user.name = form.elements.namedItem("name").value.trim();
    user.email = form.elements.namedItem("email").value.trim();
    user.age = Number(form.elements.namedItem("age").value);
    renderUser();
    console.log("Updated user:", user);
  });
  document.body.append(container);
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildUserEditor, { once: true });
  } else {
    buildUserEditor();
  }
} else {
  user.name = "Jane";
  user.email = "jane@mail.com";
  user.age = 22;
  console.log("Updated user object:", user);
  console.log("Open this file in a browser to edit the object through the form.");
}
