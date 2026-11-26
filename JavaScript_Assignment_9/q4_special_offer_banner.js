// Q4 - Special Offer Banner (jQuery)

$(function () {

  // Helper: returns the banner(s) chosen in the dropdown (all or one specific banner)
  function getTarget() {
    var id = $("#target").val();
    return id === "all" ? $(".banner") : $("#" + id);
  }

  // 1. Hide button -> instantly hide banner(s)
  $("#hideBtn").on("click", function () { getTarget().hide(); });

  // 2. Show button -> show hidden banner(s)
  $("#showBtn").on("click", function () { getTarget().show(); });

  // 3. Slide Up / Slide Down
  $("#slideUpBtn").on("click", function () { getTarget().slideUp(400); });
  $("#slideDownBtn").on("click", function () { getTarget().slideDown(400); });

  // 4. Fade Out / Fade In (gradual)
  $("#fadeOutBtn").on("click", function () { getTarget().fadeOut(600); });
  $("#fadeInBtn").on("click", function () { getTarget().fadeIn(600); });

  // 5. Auto rotate slides every 5 seconds using fadeOut() then fadeIn()
  var $slides = $("#rotator .slide");
  var current = 0;

  setInterval(function () {
    var $currentSlide = $slides.eq(current);
    current = (current + 1) % $slides.length;      // next index, wraps to 0 at the end
    var $nextSlide = $slides.eq(current);

    // fade the current slide out, and when finished fade the next one in
    $currentSlide.fadeOut(400, function () {
      $nextSlide.css("display", "none").fadeIn(400).css("display", "flex");
    });
  }, 5000);
});
