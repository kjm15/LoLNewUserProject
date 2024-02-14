var floatPosition = parseInt($(".sideBanner").css('top'))

$(window).scroll(function() {

    var currentTop = $(window).scrollTop();
    var bannerTop = currentTop + floatPosition + 200 + "px";

    $(".sideBanner").stop().animate({
      "top" : bannerTop
    }, 500);

}).scroll();