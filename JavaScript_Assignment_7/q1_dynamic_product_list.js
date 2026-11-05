"use strict";

if (typeof document !== "undefined") {
  const heading = document.createElement("h1");
  heading.textContent = "Product List Manager";
  const productInput = document.createElement("input");
  productInput.placeholder = "Enter a product name";
  productInput.setAttribute("aria-label", "Product name");
  const addButton = document.createElement("button");
  addButton.textContent = "Add product";
  const productList = document.createElement("ul");
  productList.setAttribute("aria-label", "Products");

  Object.assign(productInput.style, { padding: "8px", marginRight: "8px" });
  Object.assign(addButton.style, { padding: "8px", cursor: "pointer" });
  productList.style.paddingLeft = "24px";

  function addProduct(name) {
    const productName = name.trim();
    if (!productName) return;

    const item = document.createElement("li");
    const label = document.createElement("span");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    label.textContent = productName;
    editButton.type = "button";
    editButton.textContent = "Edit";
    editButton.dataset.action = "edit";
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.dataset.action = "delete";

    item.append(label, " ", editButton, " ", deleteButton);
    item.style.margin = "10px 0";
    productList.append(item);
  }

  function saveEdit(item) {
    const editor = item.querySelector("input");
    if (!editor) return;

    const label = document.createElement("span");
    label.textContent = editor.value.trim() || item.dataset.originalName;
    editor.replaceWith(label);
    delete item.dataset.originalName;
  }

  addButton.addEventListener("click", () => {
    addProduct(productInput.value);
    productInput.value = "";
    productInput.focus();
  });

  productInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") addButton.click();
  });

  // One parent listener handles Edit and Delete for all current and future rows.
  productList.addEventListener("click", (event) => {
    const actionButton = event.target.closest("button[data-action]");
    if (!actionButton || !productList.contains(actionButton)) return;

    const item = actionButton.closest("li");
    if (actionButton.dataset.action === "delete") {
      item.remove();
      return;
    }

    if (!item.querySelector("input")) {
      const label = item.querySelector("span");
      const editor = document.createElement("input");
      editor.value = label.textContent;
      item.dataset.originalName = label.textContent;
      label.replaceWith(editor);
      editor.focus();
      editor.select();
      editor.addEventListener("blur", () => saveEdit(item), { once: true });
      editor.addEventListener("keydown", (keyEvent) => {
        if (keyEvent.key === "Enter") editor.blur();
        if (keyEvent.key === "Escape") {
          editor.value = item.dataset.originalName;
          editor.blur();
        }
      });
    }
  });

  // Clicking anywhere outside the active row saves its inline edit.
  document.addEventListener(
    "click",
    (event) => {
      const editingItem = productList.querySelector("li input");
      if (editingItem && !editingItem.closest("li").contains(event.target)) {
        saveEdit(editingItem.closest("li"));
      }
    },
    true
  );

  document.body.append(heading, productInput, addButton, productList);
}
