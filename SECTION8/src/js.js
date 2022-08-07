window.onload = function() {

    var scrollBody = document.querySelector('.fix_motion');

    var scrollHeight;
    var sectionOffsetTop;
    var sectionScrolTop;
    var scrollRealHeight;
    var winScrollTop;
    var scrollPerecnt;
    var percent;
    var isMobile;

    function scrollFunc() {

        setProperty();

        if(isMobile) {
            contentInMobile();
        }else{
            contentIn();
        }
    };

    function setProperty() {

        isMobile = window.innerWidth <= 1024 ? true : false;
        scrollHeight = scrollBody.offsetHeight;
        winScrollTop = window.pageYOffset;
        sectionOffsetTop = scrollBody.getBoundingClientRect().top + winScrollTop;
        scrollRealHeight = (scrollHeight - window.innerHeight);
        sectionScrolTop = winScrollTop - sectionOffsetTop;
        scrollPerecnt =  sectionScrolTop / scrollRealHeight;
        percent = scrollPerecnt * 100 ;
    };

    function contentIn() {

        var deviceImg = document.querySelector('.device_fix .slide_wrap figure');
        var imgWidth = deviceImg.offsetWidth;

        if(percent >= 12 && percent < 43){

            imageChange(imgWidth * 0);
            document.querySelector('.fix_motion .text_box .txt01').classList.add('active');

        }

        if(percent >= 43 && percent < 75) {

            imageChange(imgWidth * 1);
            document.querySelector('.fix_motion .text_box .txt02').classList.add('active');

        }

        if(percent >= 75 && percent < 100) {

            imageChange(imgWidth * 2);
            document.querySelector('.fix_motion .text_box .txt03').classList.add('active');

        }

        if(percent >= 100) {

            imageChange(imgWidth * 3);
            document.querySelector('.fix_motion .text_box .txt04').classList.add('active');

        }

        if(percent < 12 ){
            document.querySelector('.fix_motion .text_box .txt01').classList.remove('active');
            document.querySelector('.fix_motion .text_box .txt02').classList.remove('active');
            document.querySelector('.fix_motion .text_box .txt03').classList.remove('active');
            document.querySelector('.fix_motion .text_box .txt04').classList.remove('active');
        }
    };

    function contentInMobile(){ //섹션 진입후 처리될 기능정의

        var deviceImg = document.querySelector('.device_fix .slide_wrap figure');
        var imgWidth = deviceImg.offsetWidth;

        if(percent >= 5 && percent < 25){

            imageChange(imgWidth * 0);
            document.querySelectorAll('.fix_motion .text_box p').forEach(function(el) {
                el.classList.remove('active');
            });
            document.querySelector('.fix_motion .text_box .txt01').classList.add('active');
        }

        if(percent >= 25 && percent < 45) {

            imageChange(imgWidth * 1);
            document.querySelectorAll('.fix_motion .text_box p').forEach(function(el) {
                el.classList.remove('active');
            })
            document.querySelector('.fix_motion .text_box .txt02').classList.add('active');
        }

        if(percent >= 45 && percent < 65) {

            imageChange(imgWidth * 2);
            document.querySelectorAll('.fix_motion .text_box p').forEach(function(el) {
                el.classList.remove('active');
            })
            document.querySelector('.fix_motion .text_box .txt03').classList.add('active');
        }

        if(percent >= 65 && percent <= 85) {

            imageChange(imgWidth * 3);
            document.querySelectorAll('.fix_motion .text_box p').forEach(function(el) {
                el.classList.remove('active');
            })
            document.querySelector('.fix_motion .text_box .txt04').classList.add('active');
        }

        if(percent > 85) {
            imageChange(imgWidth * 3);
            document.querySelectorAll('.fix_motion .text_box p').forEach(function(el) {
                el.classList.remove('active');
            });
        }

        if(percent < 0) {

            imageChange(imgWidth * 0);
            document.querySelectorAll('.fix_motion .text_box p').forEach(function(el) {
                el.classList.remove('active');
            });
        }
    };

    function imageChange(moveX) {

        if(Modernizr.csspositionsticky){
            var img = document.querySelector('.fix_motion .slide_wrap .slide');
            img.style.transform = 'translateX('+ -moveX +'px)';
        }

    };

    function init() {

        scrollFunc();
    };

    window.addEventListener('scroll', function() {

        scrollFunc();
    });

    window.addEventListener('resize', function() {

        scrollFunc();
    });

    init();
};