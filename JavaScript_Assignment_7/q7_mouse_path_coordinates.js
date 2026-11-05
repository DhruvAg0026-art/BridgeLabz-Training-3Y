"use strict";

if (typeof document !== "undefined") {
  const heading = document.createElement("h1");
  heading.textContent = "Mouse Coordinates Logger";
  const instruction = document.createElement("p");
  instruction.textContent = "Move the mouse over the box; double-click to drop a red dot.";
  const coordinateOutput = document.createElement("p");
  coordinateOutput.setAttribute("aria-live", "polite");
  const mouseArea = document.createElement("div");

  Object.assign(mouseArea.style, {
    position: "relative",
    width: "min(400px, 90vw)",
    height: "min(400px, 90vw)",
    border: "2px solid #333",
    background: "#f1f5f9",
    overflow: "hidden",
    cursor: "crosshair"
  });

  mouseArea.addEventListener("mousemove", (event) => {
    coordinateOutput.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
  });

  mouseArea.addEventListener("dblclick", (event) => {
    const bounds = mouseArea.getBoundingClientRect();
    const dot = document.createElement("span");
    Object.assign(dot.style, {
      position: "absolute",
      left: `${event.clientX - bounds.left}px`,
      top: `${event.clientY - bounds.top}px`,
      width: "12px",
      height: "12px",
      background: "red",
      borderRadius: "50%",
      transform: "translate(-50%, -50%)",
      pointerEvents: "none"
    });
    dot.setAttribute("aria-label", "Double-click marker");
    mouseArea.append(dot);
  });

  document.body.append(heading, instruction, coordinateOutput, mouseArea);
}
