// Q2 - Product Highlight (jQuery)

$(function () {

  // 4. Attribute selector: select only products that have a data-discount attribute
  //    and give them a different style (green price text)
  $(".product[data-discount]").find("p").css({ color: "#2e9e4f", fontWeight: "bold" });

  // Add a stock label to every product using data-stock attribute
  $(".product").each(function () {
    var stock = parseInt($(this).attr("data-stock"), 10);
    var label = stock === 0 ? "Out of stock" : stock + " in stock";
    $(this).append('<span class="stock">' + label + "</span>");
  });

  // 1 + 5. Click on product:
  //    - if out of stock -> alert (data attribute)
  //    - else highlight its background and remove highlight from others
  $(".product").on("click", function () {
    var stock = parseInt($(this).data("stock"), 10); // .data() reads data-stock
    if (stock === 0) {
      alert($(this).find("h3").text() + " is out of stock!");
      return;
    }
    $(".product").removeClass("highlight");
    $(this).addClass("highlight");
  });

  // 2. Hover: show / hide additional details
  $(".product").hover(
    function () { $(this).find(".details").stop(true, true).slideDown(200); }, // mouse enter
    function () { $(this).find(".details").stop(true, true).slideUp(200); }    // mouse leave
  );

  // 3. Favorite icon: toggle "selected" class on button and product
  $(".fav").on("click", function (e) {
    e.stopPropagation(); // do not trigger the product's own click handler
    $(this).toggleClass("selected");
    $(this).closest(".product").toggleClass("selected");
    // change the heart symbol depending on state
    $(this).html($(this).hasClass("selected") ? "&#9829;" : "&#9825;");
  });
});
