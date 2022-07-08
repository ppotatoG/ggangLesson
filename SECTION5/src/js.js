window.onload = function() {

    var header = document.querySelector('.header_wrap');
    var sectionMainVisual = document.querySelector('.sec_mainvis');
    var sectionOverlap = document.querySelector('.sec_list_overlap');
    var sectionMainTop;
    var sectionMainBottom;

    var winScrollTop;
    var sectionIsMoving = false;

    var parallaxBody = document.querySelector('.sec_list_overlap');
    var parallaxList = document.querySelectorAll('.sec_parallax .img_box');

    var parallaxOffsetTop;
    var parallaxThisTop;
    var parallaxSpeed = 1200;
    var parallaxPercent;
    var parallaxStartValue = 1000;
    var parallaxMoveDistance;
    var isMac = navigator.platform.indexOf('Mac') >= 0;
    var isEdge = /Edg/.test(navigator.userAgent);

    function setProperty() {

        winScrollTop = window.pageYOffset;
        sectionMainTop = sectionMainVisual.getBoundingClientRect().top + winScrollTop;
        sectionMainBottom = sectionMainTop + sectionMainVisual.offsetHeight;

        parallaxOffsetTop = parallaxBody.getBoundingClientRect().top + winScrollTop;
        parallaxThisTop = winScrollTop - parallaxOffsetTop;
        parallaxPercent = parallaxThisTop / parallaxSpeed * 100;
        parallaxMoveDistance = Math.max(parallaxStartValue - parallaxStartValue, Math.min(parallaxStartValue, parallaxStartValue - (parallaxStartValue * (parallaxPercent/100))));

    };

    function motionParallax() {

        if(parallaxPercent > 60){
            document.querySelector('.sec_parallax').classList.add('active');
        }else {
            document.querySelector('.sec_parallax').classList.remove('active');
        }

        parallaxList[0].style.transform = 'translate(0px,'+ parallaxMoveDistance +'px)';

        parallaxList[1].style.transform = 'translate(0px,'+ parallaxMoveDistance * 2.1 +'px)';

        parallaxList[2].style.transform = 'translate(0px,'+ parallaxMoveDistance * 2.5 +'px)';

        parallaxList[3].style.transform = 'translate(0px,'+ parallaxMoveDistance * 3.5 +'px)';

        parallaxList[4].style.transform = 'translate(0px,'+ parallaxMoveDistance * 4.2 +'px)';

        parallaxList[5].style.transform = 'translate(0px,'+ parallaxMoveDistance * 4.8 +'px)';

        parallaxList[6].style.transform = 'translate(0px,'+ parallaxMoveDistance * 5.3 +'px)';

        parallaxList[7].style.transform = 'translate(0px,'+ parallaxMoveDistance * 2.7 +'px)';

        document.querySelector('.sec_parallax .bg_line').style.transform = 'translate(0px,'+ -parallaxMoveDistance*3 +'px)';

    };

    function moveSection(delta) {

        var deltaY = delta || null;

        setProperty();
        motionParallax();

        if(deltaY && isMac && winScrollTop >= sectionMainTop && winScrollTop < sectionMainBottom ||
            deltaY && !isMac && winScrollTop > sectionMainTop && winScrollTop < sectionMainBottom
        ) {

            if(!sectionIsMoving){ //애니메이션이 진행중인지 체크합니다.
                if(!isEdge){
                    sectionIsMoving = true;
                }
                moveStartRender(deltaY); //섹션 이동을 처리해주는 함수
            }

        }

        if(winScrollTop >= sectionMainBottom) {
            activeCehck();
        }

    };

    function activeCehck() {

        header.classList.add('active');
        sectionMainVisual.classList.add('active');
        sectionOverlap.classList.add('active');
    };

    function moveStartRender(deltaY) {

        if(deltaY > 0) {

            header.classList.add('active');
            sectionMainVisual.classList.add('active');
            sectionOverlap.classList.add('active');

            if(!isEdge) {
                scrollMove(sectionMainBottom+1);
            }

        } else {

            header.classList.remove('active');
            sectionMainVisual.classList.remove('active');
            sectionOverlap.classList.remove('active');

            if(!isEdge) {
                scrollMove(sectionMainTop);
            }
        }

    };

    function scrollMove(moveY) {

        var speed = 3;
        var vy = 0;
        var scrollY = 0;

        var loop = setInterval(function() {

            var dir = moveY > window.pageYOffset ? 1 : -1;
            vy += speed * dir;

            if(dir > 0) {
                scrollY = Math.min(moveY, window.pageYOffset + vy)
            } else {
                scrollY = Math.max(moveY, window.pageYOffset + vy)
            }

            window.scrollTo(0, scrollY);

            if(scrollY >= moveY && dir > 0) {
                sectionIsMoving = false;
                clearInterval(loop);
            } else if(scrollY <= moveY && dir < 0) {
                sectionIsMoving = false;
                clearInterval(loop);
            }
        }, 10);
    };

    function init(){

        moveSection();
    };

    if(isMac) {
        window.addEventListener('wheel',function(e) {

            if(winScrollTop >= sectionMainTop && winScrollTop < sectionMainBottom) {
                e.preventDefault();
            }

            var delta = e.deltaY;
            moveSection(delta);

        }, {passive: false});
    } else {
        var beforeScroll = -1;
        window.addEventListener('scroll', function() {

            var delta = 0;
            if(beforeScroll > window.pageYOffset) {
                delta = -1
            }else {
                delta = 1
            }

            moveSection(delta);
            beforeScroll = window.pageYOffset;
        }, false);
    }

    init();
};