// Q8 - Dynamic Blog Posts (jQuery DOM manipulation)

$(function () {
  var postCounter = 5; // number of posts that already exist in the HTML

  var sampleTopics = ["Web Development", "Database Design", "JavaScript Tips", "UI/UX Basics", "Career Advice"];

  function setStatus(text) { $("#status").text(text); }

  // Build a new post element (text is inserted with .text() so it is safe)
  function createPost(title, body, isFeatured) {
    var $li = $("<li>").addClass("post");
    if (isFeatured) $li.addClass("featured");
    var $article = $("<article>").appendTo($li);
    $("<h3>").text(title).appendTo($article);
    $("<p>").text(body).appendTo($article);
    return $li;
  }

  // 1. Add New Post -> .append() puts it at the END of the list
  $("#addPostBtn").on("click", function () {
    postCounter++;
    var topic = sampleTopics[postCounter % sampleTopics.length];
    $("#postList").append(createPost("New Post #" + postCounter + ": " + topic, "This post was added dynamically.", false));
    setStatus("Post #" + postCounter + " appended at the end.");
  });

  // 2. Prepend Featured Post -> .prepend() puts it at the TOP of the list
  $("#prependBtn").on("click", function () {
    postCounter++;
    $("#postList").prepend(createPost("Featured Post #" + postCounter, "Special featured content shown at the top.", true));
    setStatus("Featured post #" + postCounter + " added at the top.");
  });

  // 3. Remove Last Post -> :last selects the last .post, .remove() deletes it
  $("#removeLastBtn").on("click", function () {
    var $last = $("#postList .post:last");
    if ($last.length === 0) { setStatus("No posts left to remove."); return; }
    $last.remove();
    setStatus("Last post removed.");
  });

  // Click a post to select it (event delegation: works for posts added later too)
  $("#postList").on("click", ".post", function () {
    $(".post").removeClass("selected");
    $(this).addClass("selected");
  });

  // 4. Add tag to the selected post using .before() / .after() relative to the title
  $("#addTagBtn").on("click", function () {
    var tagText = $.trim($("#tagInput").val());
    var $post = $(".post.selected");

    if ($post.length === 0) { setStatus("Select a post first (click on it)."); return; }
    if (tagText === "") { setStatus("Please type a tag name."); return; }

    var $tag = $("<span>").addClass("tag").text("#" + tagText);
    var $title = $post.find("h3");

    if ($("#placement").val() === "before") {
      $title.before($tag);   // tag inserted BEFORE the heading
    } else {
      $title.after($tag);    // tag inserted AFTER the heading
    }
    $("#tagInput").val("");
    setStatus("Tag added to the selected post.");
  });

  // 5. Highlight posts that contain a keyword
  function highlightKeyword() {
    var keyword = $.trim($("#keywordInput").val()).toLowerCase();
    $(".post").removeClass("keyword-hit");
    if (keyword === "") { setStatus("Type a keyword to highlight."); return; }

    // .filter() keeps only posts whose text contains the keyword
    var $hits = $(".post").filter(function () {
      return $(this).text().toLowerCase().indexOf(keyword) !== -1;
    }).addClass("keyword-hit");

    setStatus($hits.length + " post(s) match \"" + keyword + "\".");
  }

  $("#highlightBtn").on("click", highlightKeyword);
  $("#clearHighlightBtn").on("click", function () {
    $(".post").removeClass("keyword-hit");
    $("#keywordInput").val("");
    setStatus("Highlights cleared.");
  });
});
