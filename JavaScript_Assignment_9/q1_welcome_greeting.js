// Q1 - Welcome Page Greeting (jQuery)

// $(function(){...}) runs the code only after the DOM is fully loaded (document ready)
$(function () {
  var userName = "Visitor";
  var showingQuote = false;
  var quoteIndex = 0;

  var quotes = [
    "The secret of getting ahead is getting started.",
    "Believe you can and you're halfway there.",
    "Dream big. Work hard. Stay focused.",
    "Success is the sum of small efforts repeated daily.",
    "Don't watch the clock; do what it does. Keep going."
  ];

  // Decide greeting according to current hour (Morning / Afternoon / Evening)
  function getTimeGreeting() {
    var hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  }

  // .text() safely sets text of the #greeting element
  function showTimeGreeting() {
    showingQuote = false;
    $("#greeting").text(getTimeGreeting() + ", " + userName + "!");
  }

  // 1. On page load -> personalised greeting
  showTimeGreeting();

  // 2. "Change Greeting" -> replace text with next motivational quote
  $("#changeGreetingBtn").on("click", function () {
    showingQuote = true;
    $("#greeting").hide().text(quotes[quoteIndex]).fadeIn(400);
    quoteIndex = (quoteIndex + 1) % quotes.length; // cycle through quotes
  });

  // Scenario: go back to the time-based greeting
  $("#resetGreetingBtn").on("click", showTimeGreeting);

  // Scenario: personalise with the visitor's name
  $("#setNameBtn").on("click", function () {
    var typed = $.trim($("#nameInput").val()); // $.trim removes extra spaces
    userName = typed !== "" ? typed : "Visitor";
    if (!showingQuote) showTimeGreeting();
  });

  // 3. Toggle visibility of welcome message
  $("#toggleWelcomeBtn").on("click", function () {
    $("#welcomeMessage").slideToggle(300);
  });

  // 4. Alert when greeting is clicked
  $("#greeting").on("click", function () {
    alert("You clicked the greeting: " + $(this).text());
  });
});
