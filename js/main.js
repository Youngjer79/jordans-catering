$(document).ready(function() {
  $("btn-link").click(function() {
    $("a").toggleClass("");
  });
});

// Carousel Controls
$(".carousel-control-prev").click(function() {
  $("#slides").carousel("prev");
});

$(".carousel-control-next").click(function() {
  $("#slides").carousel("next");
});
