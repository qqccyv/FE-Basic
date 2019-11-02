$(function() {
    var recommendTop = $('.recommend').offset().top;
    var flag = true;
    tool();

    function tool() {
        if ($(document).scrollTop() >= recommendTop) {
            $('.fixedtool').fadeIn()
        } else {
            $('.fixedtool').fadeOut()
        };
    }
    $(window).scroll(function() {
        tool()
        if (flag) {
            $(".floor .w").each(function(idx, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $(".fixedtool li").eq(idx).addClass("current").siblings().removeClass();
                }
            })
        }

    });

    $('.fixedtool li').click(function() {
        flag = false;
        var index = $(this).index();


        var offsetTop = $('.floor .w').eq(index).offset().top;
        $('body,html').stop().animate({
            scrollTop: offsetTop
        }, function() {
            flag = true;
        })
        $(this).addClass('current').siblings().removeClass();
    })
})