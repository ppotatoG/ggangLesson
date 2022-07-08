$(function(){
    /*변수및 요소 선언*/

    var header = $('.header_wrap');
    var sectionMainVisual = $('.sec_mainvis');
    var sectionOverlap = $('.sec_list_overlap');
    var sectionMainTop; //섹션의 top값을 ㅁ.
    var sectionMainBottom; //섹션의 BOTTOM값을 구함.

    var parallaxBody = $('.sec_list_overlap'); //패럴럭스가 시작될 엘리먼트 지정
    var parallaxList = $('.sec_parallax .img_box'); //변수에 페럴럭스에 반응할 이미지 리스트틀 지정합니다.

    /*리사이즈, 스크롤 할 때 변해야 할 값들*/
    var winScrollTop; //스크롤 위치를 담을 변수 선언
    var sectionIsMoving = false; //섹션이 이동 중인지 체크하는 변수

    var parallaxOffsetTop; //패럴럭스가 시작될 요소의 상단 위치값
    var parallaxThisTop; //패럴럭스가 시작될 위치값을 구함
    var parallaxSpeed = 1200; // 패럴럭스 요소의 스피드
    var parallaxPercent; // 패럴럭스 백분율값을 담을 변수를 선업합니다
    var parallaxStartValue = 1000; //패럴럭스요소가 200 위치에서 시작하도록 설정합니다.
    var parallaxMoveDistance; // 패럴럭스 요소가 움직일 거리를 담을 변수 선업합니다

    function setProperty(){ //스크롤 할 때 변할 값들을 세팅하는 함수

        winScrollTop = $(window).scrollTop(); //스크롤바의 현재 위치를 구함
        sectionMainTop = sectionMainVisual.offset().top; //섹션의 top값을 구함.
        sectionMainBottom = sectionMainTop + sectionMainVisual.height(); //섹션의 BOTTOM값을 구함.

        parallaxOffsetTop = parallaxBody.offset().top; //패럴럭스가 시작될 요소의 상단 위치값
        parallaxThisTop = winScrollTop - parallaxOffsetTop; //패럴럭스가 시작될 위치값을 구함.
        parallaxPercent = parallaxThisTop / parallaxSpeed * 100; // 이동할 거리 백분율 값을 담음
        parallaxMoveDistance = Math.max(parallaxStartValue - parallaxStartValue, Math.min(parallaxStartValue, parallaxStartValue - (parallaxStartValue * (parallaxPercent/100)))); //패럴럭스 요소가 움직일 거리를 구함
    };

    function motionParallax() { // 스크롤할때 계속 호출될 패럴럭스 함수 선언

        if(parallaxPercent > 60) {
            $('.sec_parallax').addClass('active');
        }else {
            $('.sec_parallax').removeClass('active');
        }

        parallaxList.eq(0).css({ //계산된 값을 엘리먼트에 적용
            transform : 'translate(0px,'+ parallaxMoveDistance +'px)'
        });

        parallaxList.eq(1).css({ //계산된 값을 엘리먼트에 적용
            transform : 'translate(0px,'+ parallaxMoveDistance * 2.1 +'px)'
        });

        parallaxList.eq(2).css({ //계산된 값을 엘리먼트에 적용
            transform : 'translate(0px,'+ parallaxMoveDistance * 2.5 +'px)'
        });

        parallaxList.eq(3).css({ //계산된 값을 엘리먼트에 적용
            transform : 'translate(0px,'+ parallaxMoveDistance * 3.5 +'px)'
        });

        parallaxList.eq(4).css({ //계산된 값을 엘리먼트에 적용
            transform : 'translate(0px,'+ parallaxMoveDistance * 4.2 +'px)'
        });

        parallaxList.eq(5).css({ //계산된 값을 엘리먼트에 적용
            transform : 'translate(0px,'+ parallaxMoveDistance * 4.8 +'px)'
        });

        parallaxList.eq(6).css({ //계산된 값을 엘리먼트에 적용
            transform : 'translate(0px,'+ parallaxMoveDistance * 5.3 +'px)'
        });

        parallaxList.eq(7).css({ //계산된 값을 엘리먼트에 적용
            transform : 'translate(0px,'+ parallaxMoveDistance * 2.7 +'px)'
        });

        $('.sec_parallax .bg_line').css({ //계산된 값을 엘리먼트에 적용
            transform : 'translate(0px,'+ -parallaxMoveDistance*3 +'px)'
        });
    };

    function moveSection() { //스크롤 할 때 호출함

        setProperty(); //스크롤 할 때 변해야 할 값들의 변수를 선언한 함수
        motionParallax(); //패럴럭스 처리 함수

        if(winScrollTop > sectionMainTop && winScrollTop < sectionMainBottom) { //섹션에 진입했는지 체크합니다.

            if(!sectionIsMoving) { //애니메이션이 진행 중인지 체크합니다.
                sectionIsMoving = true;
                moveStartRender(); //섹션 이동을 처리하는 함수
            }
        }

        if( winScrollTop >= sectionMainBottom) {
            activeCehck(); //새로고침을 할 때 페이지가 아래에서 시작할 경우 액티브돼야 할 요소들을 처리
        }
    };

    function activeCehck() { //새로고침을 할 때 페이지가 아래에서 시작할 경우 액티브돼야 할 요소들을 처리

        header.addClass('active');
        sectionMainVisual.addClass('active');
        sectionOverlap.addClass('active');
    };

    function moveStartRender() { //섹션 이동 처리 함수

        if(!header.hasClass('active')) { //해더 클래스가 없을 경우에는 아래로 내려오는 상황

            header.addClass('active');
            sectionMainVisual.addClass('active');
            sectionOverlap.addClass('active');

            $('html').stop(true).animate({
                scrollTop: sectionMainBottom+1 //IE버그 반복 버그 처리를 위해 1을 추가.
            },500,function(){
                sectionIsMoving = false; //섹션이 이동 중인지 체크하는 변수
            });
        } else { //해더 클래스가 있을 경우 위로 올라가는 상황

            header.removeClass('active');
            sectionMainVisual.removeClass('active');
            sectionOverlap.removeClass('active');

            $('html').stop(true).animate({
                scrollTop: sectionMainTop
            },500,function(){
                sectionIsMoving = false; //섹션이 이동 중인지 체크하는 변수
            });
        }
    };

    function init() { //초기화

        moveSection();
    };

    $(window).scroll(function(e) { //스크롤 이벤트를 추가합니다.

        moveSection(); // 스크롤 이동처리 함수입니다
    });

    init(); //초기화
});