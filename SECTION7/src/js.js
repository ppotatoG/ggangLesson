window.onload = function() {

    var scrollBody = document.querySelector('.fix_motion');
    var titText = scrollBody.querySelector('.intro_txt');
    var maskLeft = scrollBody.querySelector('.left_mask');
    var maskRight = scrollBody.querySelector('.right_mask');
    var bgImage = scrollBody.querySelector('.bg_img');
    var endingContent = scrollBody.querySelector('.ending_txt');

    var scrollHeight;
    var sectionOffsetTop;
    var sectionScrolTop;
    var scrollRealHeight;
    var winScrollTop;
    var scrollPerecnt;
    var percent;

    function changeOverlap() {

        setProperty();
        motionRender();
    };

    function setProperty() {

        scrollHeight = scrollBody.offsetHeight;
        winScrollTop = window.pageYOffset;
        sectionOffsetTop = scrollBody.getBoundingClientRect().top + window.pageYOffset;
        scrollRealHeight = (scrollHeight - window.innerHeight);
        sectionScrolTop = winScrollTop - sectionOffsetTop;
        scrollPerecnt =  sectionScrolTop / scrollRealHeight;
        percent = scrollPerecnt * 100 ;
    };

    function motionRender() {

        var maskStartValue = 50;
        var maskEndValue = 0;
        var zoomValue = 1.5;
        var zoomOutValue = 1;
        var maskVal = Math.max(maskEndValue, maskStartValue - (scrollPerecnt * maskStartValue));
        var scaleVal = Math.max(zoomOutValue, zoomValue - (scrollPerecnt * zoomValue));

        maskLeft.style.width = maskVal + '%'
        maskRight.style.width =  maskVal + '%';
        bgImage.style.transform = 'scale('+ scaleVal +')';

        if(percent > 0.3){
            titText.classList.add('active');
        }else{
            titText.classList.remove('active');
        }

        if(percent >= 70){
            endingContent.classList.add('active');
        }else {
            endingContent.classList.remove('active');
        }
    };

    function init(){
        changeOverlap();
        bindEvent();
    };

    function bindEvent(){
        window.addEventListener('scroll', function() {
            changeOverlap();
        });

        window.addEventListener('resize', function() {
            changeOverlap();
        });

    };

    if(Modernizr.csspositionsticky){
        init();
    };

};