var scrollBody = document.querySelector('.fix_motion');

var scrollHeight;
var sectionOffsetTop;
var sectionScrolTop;
var scrollRealHeight;
var winScrollTop;
var scrollPerecnt;
var percent;

var windowWdith = window.innerWidth;
var mobileSize = 1024;
var isMobile;

var el = document.querySelector('.canvas_wrap');
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
var imgSrc = './images/seq/';
var imgFormat = '.jpg';
var imgLength = 116;
var pcImgSize = [1920, 1080];
var mobileImgSize = [640, 360];
var imgWidth;
var imgHeight;
var imgArray = [];
var imageIterlator = 0;

const setProperty = () => {

    scrollHeight = scrollBody.offsetHeight;
    winScrollTop = window.pageYOffset;
    sectionOffsetTop = scrollBody.getBoundingClientRect().top + winScrollTop;
    scrollRealHeight = (scrollHeight - window.innerHeight);
    sectionScrolTop = winScrollTop - sectionOffsetTop;
    scrollPerecnt = sectionScrolTop / scrollRealHeight;
    percent = scrollPerecnt * 100;

    windowWdith = window.innerWidth;
    isMobile = windowWdith <= mobileSize;

    imgWidth = !isMobile ? pcImgSize[0] : mobileImgSize[0];
    imgHeight = !isMobile ? pcImgSize[1] : mobileImgSize[1];
};

const setCanvas = () => {

    canvas.width = imgWidth;
    canvas.height = imgHeight;
};

const scrollFunc = () => {

    var sequence = Math.min(imgLength, Math.max(0, Number((imgLength * scrollPerecnt).toFixed(0))));

    renderCanvas(sequence);
    contentIn();
};

const renderCanvas = (sequence) => {

    ctx.clearRect(0, 0, imgWidth, imgHeight);
    ctx.drawImage(imgArray[sequence], 0, 0, imgWidth, imgHeight);
};

const contentIn = () => {

    if (percent >= 39 && percent < 45) {
        document.querySelector('.fix_motion .txt.pos1').classList.add('active');
    }

    if (percent >= 45 && percent < 51) {
        document.querySelector('.fix_motion .txt.pos2').classList.add('active');
    }

    if (percent >= 51) {
        document.querySelector('.fix_motion .txt.pos3').classList.add('active');
    }

    if (percent > 62 || percent < 38) {
        document.querySelector('.fix_motion .txt.pos1').classList.remove('active');
        document.querySelector('.fix_motion .txt.pos2').classList.remove('active');
        document.querySelector('.fix_motion .txt.pos3').classList.remove('active');
    }
};
const bindEvent = () => {

    window.addEventListener('scroll', () => {

        setProperty()
        scrollFunc();
    }, false);

    window.addEventListener('resize', () => {

        setProperty();
        setCanvas();
        scrollFunc();
    }, false);
};
const init = () => {

    el.appendChild(canvas);

    for (var i = 0; i <= imgLength; i++) {

        var img = new Image();
        var path = imgSrc + i + imgFormat;

        img.src = path;

        img.onload = () => {
            imageIterlator += 1;
            if (imageIterlator === imgLength) {

                setProperty();
                setCanvas();
                bindEvent();
                scrollFunc();
            }
            ;
        }

        imgArray.push(img);
    }
    ;
};

(() => {
    if (Modernizr.csspositionsticky) {
        init();
    }
})()