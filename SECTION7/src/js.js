const motionRender = () => {
    const scrollBody = document.querySelector('.fix_motion');
    const titText = scrollBody.querySelector('.text_mask-start');
    const maskLeft = scrollBody.querySelector('.black_mask-left');
    const maskRight = scrollBody.querySelector('.black_mask-right');
    const bgImage = scrollBody.querySelector('.bg_img');
    const endingContent = scrollBody.querySelector('.text_mask-ending');

    const scrollHeight = scrollBody.offsetHeight;
    const winScrollTop = window.pageYOffset;
    const sectionOffsetTop = scrollBody.getBoundingClientRect().top + window.pageYOffset;
    const scrollRealHeight = (scrollHeight - window.innerHeight);
    const sectionScrollTop = winScrollTop - sectionOffsetTop;
    const scrollPercent =  sectionScrollTop / scrollRealHeight;
    const percent = scrollPercent * 100 ;

    const maskStartValue = 50;
    const maskEndValue = 0;
    const zoomValue = 1.5;
    const zoomOutValue = 1;
    const maskVal = Math.max(maskEndValue, maskStartValue - (scrollPercent * maskStartValue));
    const scaleVal = Math.max(zoomOutValue, zoomValue - (scrollPercent * zoomValue));

    maskLeft.style.width = `${maskVal}%`
    maskRight.style.width =  `${maskVal}%`;
    bgImage.style.transform = `scale(${scaleVal})`;

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
}

(() => {
    if(Modernizr.csspositionsticky){
        motionRender();

        window.addEventListener('scroll', function() {
            motionRender();
        });

        window.addEventListener('resize', function() {
            motionRender();
        });
    }
})()