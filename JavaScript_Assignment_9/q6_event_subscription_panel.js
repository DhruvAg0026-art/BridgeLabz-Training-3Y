// Q6 - Event Subscription Panel (jQuery .on() / .off())

$(function () {
  var notificationsEnabled = false;

  // 5. Dynamically insert a message into the DOM
  function showMessage(text, isWarning) {
    var $msg = $("<div>").addClass("msg").text(text); // .text() prevents HTML injection
    if (isWarning) $msg.addClass("warn");
    $("#messages").prepend($msg);                     // insert newest message on top
    setTimeout(function () { $msg.fadeOut(400, function () { $msg.remove(); }); }, 4000);
  }

  // 1. Subscribe -> enable notifications
  $("#subscribeBtn").on("click", function () {
    notificationsEnabled = true;
    $("#status").text("ON").addClass("on");
    showMessage("Success! Notifications are now enabled.");
  });

  // 2. Unsubscribe -> disable notifications
  $("#unsubscribeBtn").on("click", function () {
    notificationsEnabled = false;
    $("#status").text("OFF").removeClass("on");
    showMessage("You have unsubscribed. Notifications are disabled.", true);
  });

  // Attach click behaviour to a topic element using .on()
  // (namespaced event "click.topic" lets us remove only this handler later with .off())
  function bindTopic($topic) {
    $topic.on("click.topic", function () {
      $(this).toggleClass("active");
      var name = $(this).find(".topic-name").text();
      var subscribed = $(this).hasClass("active");
      if (notificationsEnabled) {
        showMessage((subscribed ? "Subscribed to " : "Unsubscribed from ") + name);
      } else {
        showMessage("Enable notifications first to receive alerts for " + name, true);
      }
    });

    // 4. Remove a specific subscription -> detach its click event with .off()
    $topic.find(".remove").on("click", function (e) {
      e.stopPropagation();                 // do not toggle the topic
      var name = $topic.find(".topic-name").text();
      $topic.off("click.topic");           // .off() detaches the topic click handler
      $topic.fadeOut(300, function () { $topic.remove(); });
      showMessage('Topic "' + name + '" removed and its click event detached.', true);
    });
  }

  // Bind the topics that already exist in the HTML
  $(".topic").each(function () { bindTopic($(this)); });

  // 3. Dynamically add new subscription topics and attach .on() events to them
  $("#addTopicForm").on("submit", function (e) {
    e.preventDefault();
    var name = $.trim($("#newTopic").val());
    if (name === "") { showMessage("Please enter a topic name.", true); return; }

    var $li = $("<li>").addClass("topic");
    $("<span>").addClass("topic-name").text(name).appendTo($li);
    $("<button>").addClass("remove").text("Remove").appendTo($li);

    $("#topicList").append($li);
    bindTopic($li);                        // attach the events to the new element
    $("#newTopic").val("");
    showMessage('New topic "' + name + '" added.');
  });
});
