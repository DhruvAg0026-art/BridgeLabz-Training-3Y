// Q5 - Team Members Directory (jQuery traversal)

$(function () {

  // Remove every highlight class (used before applying a new highlight)
  function clearHighlights() {
    $(".member").removeClass("report-hl sibling-hl picked");
  }

  // 1. Click a manager -> highlight all direct reports
  //    Reports are employees whose data-manager equals manager's data-id
  $(".manager").on("click", function () {
    clearHighlights();
    var managerId = $(this).data("id");
    $('.employee[data-manager="' + managerId + '"]').addClass("report-hl");
  });

  // 2. Hover on an employee name -> show contact info
  //    .next() selects the element right after the name (the .contact span)
  $(".member .name").on("mouseenter", function () {
    $(this).next(".contact").stop(true, true).fadeIn(150);
  }).on("mouseleave", function () {
    $(this).next(".contact").stop(true, true).fadeOut(150);
  });

  // 3. Click on department title -> change background of all members of that department
  //    .parent() = header, .next(".members") = the list, .children() = all <li> members
  $(".dept-title").on("click", function () {
    var $members = $(this).parent().next(".members").children();
    // pick a random pastel colour for the department
    var colour = "hsl(" + Math.floor(Math.random() * 360) + ", 70%, 88%)";
    $members.css("background-color", colour);
  });

  // 4. Select a random employee -> highlight his/her sibling employees
  $("#randomBtn").on("click", function () {
    clearHighlights();
    var $all = $(".employee");
    var $random = $all.eq(Math.floor(Math.random() * $all.length));
    $random.addClass("picked");
    $random.siblings(".employee").addClass("sibling-hl"); // only employees, not the manager
  });

  // 5. Collapse / expand a team
  //    .parent() goes from button to header, .parent() again to the department section,
  //    .find(".members") searches inside it for the list
  $(".toggle-team").on("click", function () {
    $(this).parent().parent().find(".members").slideToggle(250);
  });
});
