// Q3 - Interactive FAQ (jQuery)

$(function () {

  // 1. Click on a question -> toggle its answer (.next() is the answer div)
  $(".question").on("click", function () {
    // .stop(true, true) finishes any running animation first so clicks never pile up in the queue
    $(this).next(".answer").stop(true, true).slideToggle(250);
  });

  // 2. Hover -> change question colour (mouseenter / mouseleave)
  $(".question").on("mouseenter", function () {
    $(this).css("color", "#d9480f");
  }).on("mouseleave", function () {
    $(this).css("color", ""); // empty string removes inline colour
  });

  // 3. Double click on a question -> collapse ALL answers
  $(".question").on("dblclick", function () {
    $(".answer").stop(true, true).slideUp(250);
  });

  // 4. Focus on the answer input -> highlight the parent question
  //    .closest(".faq-item") goes up to the FAQ item, .find(".question") gets its question
  $(".answer input").on("focus", function () {
    $(this).closest(".faq-item").find(".question").css("background-color", "#fff3b0");
  });

  // 5. Blur from the input -> reset the background colour
  $(".answer input").on("blur", function () {
    $(this).closest(".faq-item").find(".question").css("background-color", "");
  });
});
