$(function(){
    var scrollBody = $('.motion_area');
    var parallaxDistance = 210;

    var bgContent = scrollBody.find('.bg');
    var ggangBody = scrollBody.find('.motion_ggang');
    var moonBody = scrollBody.find('.motion_moon');

    var scrollHeight;
    var scrollRealHeight;
    var winScrollTop;
    var percent;
    var moveDistance;

    function setProperty() {
        scrollHeight = scrollBody.height();
        scrollRealHeight = (scrollHeight - $(window).height());
        winScrollTop = $(window).scrollTop();
        var scrollPerecnt = winScrollTop / scrollRealHeight;
        percent = scrollPerecnt * 100;
        moveDistance = scrollPerecnt * parallaxDistance;
    };

    function motionGgang() {
        setProperty();
        changeBackgound();
        parallaxMove();
    };

    function changeBackgound() {//
        if(percent < 25){
            setBackground(0);
        }else if(percent >= 25 && percent < 50){
            setBackground(1);
        }else if(percent >= 50 && percent < 75){
            setBackground(2);
            moonBody.removeClass('active');
        }else if(percent >= 75 && percent < 100){
            setBackground(3);
            moonBody.addClass('active');

        }
    };

    function setBackground(index) {
        bgContent.removeClass('active');
        bgContent.eq(index).addClass('active');
    };

    function parallaxMove() {
        ggangBody.css({
            transform : 'translate(0px,'+ moveDistance +'px)'
        });
    };

    function init() {
        motionGgang();
    };

    $(window).scroll(function(e) {
        motionGgang();
    });

    init();

});