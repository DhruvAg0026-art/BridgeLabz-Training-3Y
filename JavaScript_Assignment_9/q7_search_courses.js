// Q7 - Search Courses (jQuery live filtering)

$(function () {
  var $courses = $(".course");

  // Save the original title text so highlighting can always be reset
  $courses.find(".title").each(function () {
    $(this).data("original", $(this).text());
  });

  // Escape special regex characters typed by the user (e.g. "+" or "(")
  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // Wrap matched text in a <span> and colour it with .css()
  function highlight($title, keyword) {
    var original = $title.data("original");
    $title.empty();
    if (keyword === "") { $title.text(original); return; }

    // split with a capturing group -> odd indexes are the matched parts
    var parts = original.split(new RegExp("(" + escapeRegex(keyword) + ")", "i"));
    $.each(parts, function (i, part) {
      if (i % 2 === 1) {
        $("<span>").text(part).css({ backgroundColor: "#ffeb3b", fontWeight: "bold" }).appendTo($title);
      } else {
        $title.append(document.createTextNode(part));
      }
    });
  }

  function filterCourses() {
    var keyword = $.trim($("#searchInput").val());
    var matched = 0;

    $courses.each(function () {
      var $course = $(this);
      var $title = $course.find(".title");
      var isMatch = $title.data("original").toLowerCase().indexOf(keyword.toLowerCase()) !== -1;

      // 3. toggle(boolean) -> show matching courses, hide the others
      $course.toggle(isMatch);
      if (isMatch) matched++;

      // 2. highlight matched text
      highlight($title, isMatch ? keyword : "");
    });

    // 4. show count of matched courses
    $("#count").text("Showing " + matched + " of " + $courses.length + " courses");
    $("#noResult").toggle(matched === 0);
  }

  // 1. Real-time filtering on keyup
  $("#searchInput").on("keyup", filterCourses);

  // 5. Clear search -> reset list to show all courses
  $("#clearBtn").on("click", function () {
    $("#searchInput").val("").focus();
    filterCourses();
  });

  filterCourses(); // initial count on page load
});
