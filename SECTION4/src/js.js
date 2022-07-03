window.onload = function() {

    var scrollBody = document.querySelector('.motion_area');
    var parallaxDistance = 110;
    var bgContent = scrollBody.querySelectorAll('.bg');
    var ggangBody = scrollBody.querySelector('.motion_ggang');
    var moonBody = scrollBody.querySelector('.motion_moon');

    var scrollHeight;
    var scrollRealHeight;
    var winScrollTop;
    var percent;
    var moveDistance;

    function setProperty() {

        scrollHeight = scrollBody.offsetHeight;
        scrollRealHeight = (scrollHeight - window.innerHeight);
        winScrollTop = window.pageYOffset;
        var scrollPerecnt = winScrollTop / scrollRealHeight;
        percent = scrollPerecnt * 100;
        moveDistance = scrollPerecnt * parallaxDistance;

    };

    function motionGgang(){

        setProperty();
        changeBackgound();
        parallaxMove();

    };

    function changeBackgound() {
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
    };

    function setBackground(index) {
        bgContent.forEach(function(el) {
            el.classList.remove('active');
        });

        bgContent[index].classList.add('active');
    };

    function parallaxMove() {
        ggangBody.style.transform = 'translate(0px,'+ moveDistance +'px)';
    };

    function init() {
        motionGgang();
    };

    window.addEventListener('scroll', function() {
        motionGgang();
    }, false);

    window.addEventListener('resize', function() {
        motionGgang();
    }, false);

    init();


};