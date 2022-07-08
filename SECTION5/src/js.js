$(function(){
    /*변수및 요소 선언*/
    var header = $('.header_wrap');
    var sectionMainVisual = $('.sec_mainvis');
    var sectionOverlap = $('.sec_list_overlap');
    var sectionMainTop; //섹션의 top값을 구함.
    var sectionMainBottom; //섹션의 BOTTOM값을 구함.

    /*리사이즈, 스크롤 할 때 변해야 할 값들*/
    var winScrollTop; //스크롤 위치를 담을 변수 선언
    var sectionIsMoving = false; //섹션이 이동 중인지 체크하는 변수

    function setProperty() { //스크롤 할 때 변할 값들을 세팅하는 함수

        winScrollTop = $(window).scrollTop(); //스크롤 현재 위치를 구함
        sectionMainTop = sectionMainVisual.offset().top; //섹션의 top값을 구함.
        sectionMainBottom = sectionMainTop + sectionMainVisual.height(); //섹션의 BOTTOM값을 구함.
    };

    function moveSection() { //스크롤 할 때 호출함

        setProperty(); //스크롤 할 때 변해야 할 값들의 변수를 선언한 함수

        if(winScrollTop > sectionMainTop && winScrollTop < sectionMainBottom) { //섹션에 진입했는지 체크합니다.

            if(!sectionIsMoving) { //애니메이션이 진행 중인지 체크합니다.
                sectionIsMoving = true; //섹션이 이동 중인지 체크하는 변수
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

        moveSection(); //스크롤할때 호출함
    });

    init(); //초기화
});