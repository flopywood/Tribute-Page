var shrinkHeroNavbar = function() {
  var hero = $(".hero-navbar");
  var newHeight = $(".hero-navbar").outerHeight(true);
  $(hero).parent().css("padding-top", newHeight);
  $(window).scroll(function() {
    var scrollOffset = $(window).scrollTop();
    if (scrollOffset < newHeight) {
      $(hero).css("height", (newHeight - scrollOffset));
    }
    if (scrollOffset > (newHeight - 215)) {
      $(hero).addClass("fix");
    }
    else {
      $(hero).removeClass("fix");
    };
  });
}

shrinkHeroNavbar();
