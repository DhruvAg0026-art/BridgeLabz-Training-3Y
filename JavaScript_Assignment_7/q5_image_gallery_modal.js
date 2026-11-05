"use strict";

if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    .gallery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; max-width: 760px; }
    .gallery-grid img { width: 100%; height: 130px; object-fit: cover; cursor: pointer; border-radius: 8px; }
    .gallery-modal { position: fixed; inset: 0; display: none; place-items: center; padding: 24px; background: rgb(0 0 0 / 80%); }
    .gallery-modal.open { display: grid; }
    .gallery-modal img { max-width: min(90vw, 900px); max-height: 85vh; }
  `;
  document.head.append(style);

  const heading = document.createElement("h1");
  heading.textContent = "Image Gallery";
  const gallery = document.createElement("div");
  gallery.className = "gallery-grid";
  gallery.setAttribute("aria-label", "Image gallery");
  const modal = document.createElement("div");
  modal.className = "gallery-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  const preview = document.createElement("img");
  preview.alt = "Enlarged gallery preview";
  modal.append(preview);

  for (let imageNumber = 1; imageNumber <= 6; imageNumber += 1) {
    const image = document.createElement("img");
    image.src = `https://picsum.photos/seed/assignment7-${imageNumber}/320/220`;
    image.alt = `Gallery image ${imageNumber}`;
    image.loading = "lazy";
    image.addEventListener("click", () => {
      preview.src = image.src.replace("/320/220", "/1000/700");
      preview.alt = image.alt;
      modal.classList.add("open");
    });
    gallery.append(image);
  }

  modal.addEventListener("click", () => modal.classList.remove("open"));
  modal.addEventListener("dblclick", (event) => event.stopPropagation());
  preview.addEventListener("click", (event) => event.stopPropagation());

  document.body.append(heading, gallery, modal);
}
