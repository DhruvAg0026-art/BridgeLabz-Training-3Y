"use strict";

if (typeof document !== "undefined") {
  const students = [
    { name: "Aarav Patel", branch: "Computer Science", cgpa: 8.7 },
    { name: "Meera Shah", branch: "Electronics", cgpa: 9.1 },
    { name: "Kabir Rao", branch: "Mechanical", cgpa: 7.8 },
    { name: "Anaya Singh", branch: "Computer Science", cgpa: 9.4 },
    { name: "Ishaan Mehta", branch: "Civil", cgpa: 8.2 }
  ];

  const heading = document.createElement("h1");
  heading.textContent = "Student Table Filter";
  const searchInput = document.createElement("input");
  searchInput.type = "search";
  searchInput.placeholder = "Search name, branch, or CGPA";
  searchInput.setAttribute("aria-label", "Search students");
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.marginTop = "12px";
  const tableHead = table.createTHead();
  const headerRow = tableHead.insertRow();
  for (const label of ["Name", "Branch", "CGPA"]) {
    const cell = document.createElement("th");
    cell.textContent = label;
    cell.style.padding = "8px";
    cell.style.border = "1px solid #999";
    headerRow.append(cell);
  }
  const tableBody = table.createTBody();
  const noResults = document.createElement("p");
  noResults.textContent = "No results found";
  noResults.hidden = true;

  for (const student of students) {
    const row = tableBody.insertRow();
    for (const value of Object.values(student)) {
      const cell = row.insertCell();
      cell.textContent = String(value);
      cell.style.padding = "8px";
      cell.style.border = "1px solid #999";
    }
  }

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    let visibleRows = 0;

    for (const row of tableBody.rows) {
      const matches = row.textContent.toLowerCase().includes(query);
      row.hidden = !matches;
      if (matches) visibleRows += 1;
    }

    noResults.hidden = visibleRows !== 0;
  });

  document.body.append(heading, searchInput, table, noResults);
}
