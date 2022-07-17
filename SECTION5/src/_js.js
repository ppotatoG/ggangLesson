window.scrollT
(() => {
    /*변수및 요소 선언*/

    let header = $('.header_wrap');
    let sectionMainVisual = $('.sec_mainvis');
    let sectionOverlap = $('.sec_list_overlap');
    let sectionMainTop; //섹션의 top값을 구함.
    let sectionMainBottom; //섹션의 BOTTOM값을 구함.

    let parallaxBody = $('.sec_list_overlap'); //패럴럭스가 시작될 엘리먼트 지정
    let parallaxList = $('.sec_parallax .img_box'); //변수에 페럴럭스에 반응할 이미지 리스트틀 지정합니다.

    /*리사이즈, 스크롤 할 때 변해야 할 값들*/
    let winScrollTop; //스크롤 위치를 담을 변수 선언
    let sectionIsMoving = false; //섹션이 이동 중인지 체크하는 변수

    let parallaxOffsetTop; //패럴럭스가 시작될 요소의 상단 위치값
    let parallaxThisTop; //패럴럭스가 시작될 위치값을 구함
    let parallaxSpeed = 1200; // 패럴럭스 요소의 스피드
    let parallaxPercent; // 패럴럭스 백분율값을 담을 변수를 선업합니다
    let parallaxStartValue = 1000; //패럴럭스요소가 200 위치에서 시작하도록 설정합니다.
    let parallaxMoveDistance; // 패럴럭스 요소가 움직일 거리를 담을 변수 선업합니다
    let isMac = navigator.platform.indexOf('Mac') >= 0;
    let isEdge = /Edg/.test(navigator.userAgent);

    const setProperty = () => { //스크롤 할 때 변할 값들을 세팅하는 함수

        winScrollTop = $(window).scrollTop(); //스크롤바의 현재 위치를 구함
        sectionMainTop = sectionMainVisual.offset().top; //섹션의 top값을 구함.
        sectionMainBottom = sectionMainTop + sectionMainVisual.height(); //섹션의 BOTTOM값을 구함.

        parallaxOffsetTop = parallaxBody.offset().top; //패럴럭스가 시작될 요소의 상단 위치값
        parallaxThisTop = winScrollTop - parallaxOffsetTop; //패럴럭스가 시작될 위치값을 구함.
        parallaxPercent = parallaxThisTop / parallaxSpeed * 100; // 이동할 거리 백분율 값을 담음
        parallaxMoveDistance = Math.max(parallaxStartValue - parallaxStartValue, Math.min(parallaxStartValue, parallaxStartValue - (parallaxStartValue * (parallaxPercent/100)))); //패럴럭스 요소가 움직일 거리를 구함
    }

    const motionParallax = () => {
        const parallaxList = document.querySelectorAll('.sec_parallax .img_box');
        const secParallax = document.querySelector('.sec_parallax');
        const bgLine = document.querySelector('.bg_line');

        if(parallaxPercent > 60) {
            secParallax.classList.add('active');
        } else {
            secParallax.classList.remove('active');
        }

        parallaxList[0].style.transform = `translate(0px,${parallaxMoveDistance}px)`;
        parallaxList[1].style.transform = `translate(0px,${parallaxMoveDistance * 2.1}px)`;
        parallaxList[2].style.transform = `translate(0px,${parallaxMoveDistance * 2.5}px)`;
        parallaxList[3].style.transform = `translate(0px,${parallaxMoveDistance * 3.5}px)`;
        parallaxList[4].style.transform = `translate(0px,${parallaxMoveDistance * 4.2}px)`;
        parallaxList[5].style.transform = `translate(0px,${parallaxMoveDistance * 4.8}px)`;
        parallaxList[6].style.transform = `translate(0px,${parallaxMoveDistance * 5.3}px)`;
        parallaxList[7].style.transform = `translate(0px,${parallaxMoveDistance * 2.7}px)`;

        bgLine.style.transform = `translate(0px, -${parallaxMoveDistance * 3}px)`;
    };

    const moveSection = (delta) => { //스크롤 할 때 호출함

        let deltaY = delta || null;

        setProperty(); //스크롤 할 때 변해야 할 값들의 변수를 선언한 함수
        motionParallax(); //패럴럭스 처리 함수

        if(
            deltaY && isMac && winScrollTop >= sectionMainTop && winScrollTop < sectionMainBottom ||
            deltaY && !isMac && winScrollTop > sectionMainTop && winScrollTop < sectionMainBottom
        ) {

            if(!sectionIsMoving) { //애니메이션이 진행 중인지 체크합니다.
                if(!isEdge) {
                    sectionIsMoving = true;
                }
                moveStartRender(deltaY);
            }
        }

        if( winScrollTop >= sectionMainBottom) {
            activeCehck();
        }
    };

    const activeCehck = () => {
        header.addClass('active');
        sectionMainVisual.addClass('active');
        sectionOverlap.addClass('active');
    };

    const moveStartRender = (deltaY) => {

        if(deltaY > 0) {

            header.addClass('active');
            sectionMainVisual.addClass('active');
            sectionOverlap.addClass('active');

            if(!isEdge) {
                $('html').stop(true).animate({
                    scrollTop: sectionMainBottom + 1 //IE버그 반복 버그 처리를 위해 1을 추가.
                },500,function(){
                    sectionIsMoving = false; //섹션이 이동 중인지 체크하는 변수
                });
            }

        } else { //해더 클래스가 있을 경우 위로 올라가는 상황

            header.removeClass('active');
            sectionMainVisual.removeClass('active');
            sectionOverlap.removeClass('active');

            if(!isEdge) {
                $('html').stop(true).animate({
                    scrollTop: sectionMainTop
                },500,function(){
                    sectionIsMoving = false; //섹션이 이동 중인지 체크하는 변수
                });
            }
        }
    }

    if(isMac) { //맥일경우
        window.addEventListener('wheel',(e) => {

            if(winScrollTop >= sectionMainTop && winScrollTop < sectionMainBottom) {
                e.preventDefault();
            }

            let delta = e.deltaY;
            moveSection(delta);

        }, {passive: false});
    }
    else { //맥이 아닐 경우
        let beforeScroll = -1;
        window.addEventListener('scroll', () => {
            let delta = 0;

            if(beforeScroll > $(window).scrollTop()) {
                delta = -1
            }else {
                delta = 1
            }

            moveSection(delta);
            beforeScroll = $(window).scrollTop();
        });
    }
})();