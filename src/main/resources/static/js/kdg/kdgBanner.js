//var floatPositionL = parseInt($(".sideBannerL").css('top'))
//var floatPositionR = parseInt($(".sideBannerR").css('top'))
//
//$(window).scroll(function() {
//
//    var currentTop = $(window).scrollTop();
//    var bannerTop = currentTop + floatPositionL + 115 + "px";
//
//    $(".sideBannerL").stop().animate({
//      "top" : bannerTop
//    }, 500);
//
//}).scroll();
//
//$(window).scroll(function() {
//
//    var currentTop = $(window).scrollTop();
//    var bannerTop = currentTop + floatPositionR + 115 + "px";
//
//    $(".sideBannerR").stop().animate({
//      "top" : bannerTop
//    }, 500);
//
//}).scroll();

$(window).scroll(  
    function(){  

        if($(window).scrollTop() > 450){  
  
            $('.sideBannerR').addClass("fix");  

        }else{  
            $('.sideBannerR').removeClass("fix");  
 
        }  
    }  
); 
 
$(window).scroll(  
    function(){  

        if($(window).scrollTop() > 450){  

            $('.sideBannerL').addClass("fix");  
 
        }else{  
            $('.sideBannerL').removeClass("fix");  

        }  
    }  
);  
