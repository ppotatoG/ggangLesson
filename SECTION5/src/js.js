(() => {

})();

const parallaxList = document.querySelectorAll('.sec_parallax .img_box');
const secParallax = document.querySelector('.sec_parallax');
const bgLine = document.querySelector('.bg_line');

const motionParallax = () => { // 스크롤 할 때 계속 호출될 패럴럭스 함수 선언

    if(parallaxPercent > 60) {
        secParallax.addClass('active');
    } else {
        secParallax.removeClass('active');
    }

    parallaxList[0].style.transform = `translate(0px, ${parallaxMoveDistance}px)`;
    parallaxList[1].style.transform = `translate(0px, ${parallaxMoveDistance * 2.1}px)`;
    parallaxList[2].style.transform = `translate(0px, ${parallaxMoveDistance * 2.5}px)`;
    parallaxList[3].style.transform = `translate(0px, ${parallaxMoveDistance * 3.5}px)`;
    parallaxList[4].style.transform = `translate(0px, ${parallaxMoveDistance * 4.2}px)`;
    parallaxList[5].style.transform = `translate(0px, ${parallaxMoveDistance * 4.8}px)`;
    parallaxList[6].style.transform = `translate(0px, ${parallaxMoveDistance * 5.3}px)`;
    parallaxList[7].style.transform = `translate(0px, ${parallaxMoveDistance * 2.7}px)`;

    bgLine.style.transform = `translate(0px, ${parallaxMoveDistance * 3}px)`;
};