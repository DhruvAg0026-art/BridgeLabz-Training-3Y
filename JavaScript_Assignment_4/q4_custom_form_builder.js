"use strict";

class FormBuilder {
  constructor(fields, mountPoint = document.body) {
    if (typeof document === "undefined") {
      throw new Error("FormBuilder requires a browser document");
    }
    this.fields = fields;
    this.mountPoint = mountPoint;
    this.form = null;
  }

  build() {
    const supportedTypes = new Set(["text", "email", "number", "password", "tel"]);
    const escapeHtml = (value) => String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");

    const fieldMarkup = this.fields.map((field, index) => {
      const type = supportedTypes.has(field.type) ? field.type : "text";
      const name = field.name || `field${index + 1}`;
      const label = field.label || name;
      return `<label>${escapeHtml(label)} <input type="${type}" name="${escapeHtml(name)}"></label>`;
    }).join("");

    this.form = document.createElement("form");
    this.form.innerHTML = `${fieldMarkup}<button type="submit">Submit</button><output></output>`;
    this.form.style.cssText = "display:grid;gap:8px;max-width:360px";
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = this.getFormData();
      this.form.querySelector("output").textContent = JSON.stringify(data);
      console.log("Submitted form data:", data);
    });
    this.mountPoint.append(this.form);
    return this.form;
  }

  getFormData() {
    if (!this.form) {
      throw new Error("Build the form before reading its data");
    }
    return Object.fromEntries(new FormData(this.form).entries());
  }
}

if (typeof document !== "undefined") {
  const initializeForm = () => {
    const builder = new FormBuilder([
      { type: "text", name: "username", label: "Username" },
      { type: "email", name: "email", label: "Email" }
    ]);
    builder.build();
    console.log("Custom form ready. Enter values and click Submit.");
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeForm, { once: true });
  } else {
    initializeForm();
  }
} else {
  console.log("Open this file in a browser to build and submit the dynamic form.");
}
