// Q9 - Multi jQuery Widgets
// jq1 = jQuery 1.12.4  |  jq2 = jQuery 3.6.0  (both created with jQuery.noConflict(true) in the HTML)

// ---------------- Version 1 (jq1) ----------------
// $ is passed as a parameter, so inside this function "$" means jq1
(function ($) {
  $(function () {
    var $slides = $("#carousel .carousel-slide");
    var index = 0;

    // 1. Carousel slider rotation using version 1
    function showSlide(i) {
      index = (i + $slides.length) % $slides.length;
      $slides.hide().eq(index).css("display", "flex").hide().fadeIn(300).css("display", "flex");
    }
    $slides.hide().eq(0).css("display", "flex");

    $("#nextBtn").on("click", function (e) { e.stopPropagation(); showSlide(index + 1); });
    $("#prevBtn").on("click", function (e) { e.stopPropagation(); showSlide(index - 1); });
    setInterval(function () { showSlide(index + 1); }, 3000);  // auto rotate every 3 seconds

    // 3. Highlight the active widget using version 1
    $(".widget").on("click", function () {
      $(".widget").removeClass("active");
      $(this).addClass("active");
    });
  });
})(jq1);

// ---------------- Version 2 (jq2) ----------------
(function ($) {
  $(function () {
    // 2. Modal popup for notifications using version 2
    $("#openModalBtn").on("click", function (e) {
      e.stopPropagation();
      $("#modalOverlay").css("display", "flex").hide().fadeIn(200).css("display", "flex");
    });
    $("#closeModalBtn").on("click", function () { $("#modalOverlay").fadeOut(200); });
    // clicking the dark background also closes the modal
    $("#modalOverlay").on("click", function (e) {
      if (e.target === this) $(this).fadeOut(200);
    });

    // 4. Tooltips on hover using version 2 (text taken from data-tip)
    $(".help").on("mouseenter", function () {
      var $tip = $("<div>").addClass("tooltip").text($(this).data("tip")).appendTo("body");
      var offset = $(this).offset();
      $tip.css({ top: offset.top - 32, left: offset.left });
    }).on("mouseleave", function () {
      $(".tooltip").remove();
    });
  });
})(jq2);

// Show both versions side by side to prove that they work together
jq2(function () {
  jq2("#versionInfo").text("Running together -> jq1 version: " + jq1.fn.jquery + " | jq2 version: " + jq2.fn.jquery);
});
