(() => {
    const scrollBody = document.querySelector('.motion_area');
    const parallaxDistance = 110;
    const bgContent = scrollBody.querySelectorAll('.bg');
    const ggangBody = scrollBody.querySelector('.motion_ggang');
    const moonBody = scrollBody.querySelector('.motion_moon');

    let scrollHeight;
    let scrollRealHeight;
    let winScrollTop;
    let percent;
    let moveDistance;

    const setProperty = () => {
        const scrollPercent = winScrollTop / scrollRealHeight;
        scrollHeight = scrollBody.offsetHeight;
        scrollRealHeight = (scrollHeight - window.innerHeight);
        winScrollTop = window.scrollY;
        percent = scrollPercent * 100;
        moveDistance = scrollPercent * parallaxDistance;
    }

    const motionGgang = () => {
        setProperty();
        changeBackground();
        parallaxMove();
    }

    const changeBackground = () => {
        if(percent < 25){
            setBackground(0);
        }else if(percent >= 25 && percent < 50){
            setBackground(1);
        }else if(percent >= 50 && percent < 75){
            setBackground(2);
            moonBody.classList.remove('active');
        }else if(percent >= 75 && percent < 100){
            setBackground(3);
            moonBody.classList.add('active');
        }
    }

    const setBackground = (index) => {
        bgContent.forEach(el => {
            el.classList.remove('active');
        });

        bgContent[index].classList.add('active');
    }

    const parallaxMove = () => {
        ggangBody.style.transform = 'translate(0px,'+ moveDistance +'px)';
    }

    const init = () => {
        motionGgang();
    }

    window.addEventListener('scroll', () => {
        motionGgang();
    }, false);

    window.addEventListener('resize', () => {
        motionGgang();
    }, false);

    init();
})();