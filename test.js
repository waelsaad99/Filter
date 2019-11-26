$("document").ready(function() {
  if ($(window).width() > 767) {
    $(".expand-toggle").addClass("show");
  } else {
    $(".expand-toggle").removeClass("show");
  }
});
$(window).resize(function() {
  if ($(window).width() > 767) {
    $(".expand-toggle").addClass("show");
  } else {
    $(".expand-toggle").removeClass("show");
  }
});
