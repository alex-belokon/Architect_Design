$(document).ready(function () {
  $("a.menu__link").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top + "px",
      },
      {
        duration: 500,
      }
    );
    return false;
  });
});
$(".slideToggleBtn").click(function () {
  $(".main__container").slideToggle("slow");
});
$(function () {
  $(".scrollup").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 900) {
    $(".scrollup").fadeIn();
  } else {
    $(".scrollup").fadeOut();
  }
});
