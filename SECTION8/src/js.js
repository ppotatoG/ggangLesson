const isMobile = window.innerWidth <= 1024;

const scrollFunc = () => {
    if(isMobile) {
        contentInMobile();
    }else{
        contentIn();
    }
}

const contentIn = () => {
    const scrollBody = document.querySelector('.fix_motion');

    const scrollHeight = scrollBody.offsetHeight;
    const winScrollTop = window.pageYOffset;
    const sectionOffsetTop = scrollBody.getBoundingClientRect().top + winScrollTop;
    const scrollRealHeight = (scrollHeight - window.innerHeight);
    const sectionScrollTop = winScrollTop - sectionOffsetTop;
    const scrollPercent =  sectionScrollTop / scrollRealHeight;
    const percent = scrollPercent * 100 ;

    const deviceImg = document.querySelector('.device_fix .slide_wrap figure');
    const imgWidth = deviceImg.offsetWidth;

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
}

const contentInMobile = () => { //섹션 진입후 처리될 기능정의

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

const imageChange = (moveX) => {
    if(Modernizr.csspositionsticky){
        const slideImg = document.querySelector('.slide_wrap .slide');
        slideImg.style.transform = `translateX(-${moveX}px)`;
    }
}

(() => {
    window.addEventListener('scroll', function() {
        scrollFunc();
    });

    window.addEventListener('resize', function() {
        scrollFunc();
    });
})();