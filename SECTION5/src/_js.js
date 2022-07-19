(() => {

})();

let sectionIsMoving = true;
let test = 0;
const secMainVis = document.querySelector('.sec_mainvis');
const secOverlap = document.querySelector('.sec_list_overlap');

const fullPages = () => {
    if(
        sectionIsMoving
        && 
        secOverlap.getBoundingClientRect().y >= 0
    ) {
        if (test > window.scrollY) {
            scrollMove(secMainVis)
            sectionIsMoving = false;
        }
        // else {
        //     console.log('down')
        //     scrollMove(secOverlap)
        // }

        test = window.scrollY;
    }
}

const scrollMove = (el) => {
    let curPoint = window.scrollY;
    const loop = setInterval(() => {
        console.log('setInterval')
        if(curPoint <= 0) {
            clearInterval(loop);
            sectionIsMoving = true;
        }
        
        else {
            console.log(curPoint)
            curPoint -= 300;
            console.log(curPoint)

            window.scrollTo({
                top: curPoint, 
                left: 0, 
                behavior: 'smooth'
            });
        }
    }, 10);
} 

const motionParallax = (winHeight) => {
    const parallaxList = document.querySelectorAll('.sec_parallax .img_box');
    const bgLine = document.querySelector('.bg_line');
    const secParallax = document.querySelector('.sec_parallax');
    const secParallaxHeight = secParallax.getBoundingClientRect().height;
    const scrollValue = winHeight - secParallax.getBoundingClientRect().top;
    const parallaxPercent = (scrollValue / secParallaxHeight) * 100;


    if(scrollValue >= 0 && scrollValue <= secParallaxHeight) {
        if(parallaxPercent > 40) {
            secParallax.classList.add('active');
        } else {
            secParallax.classList.remove('active');
        }
    }

    const percent = [1, 2.1, 2.5, 3.5, 4.2, 4.8, 5.3, 2.7];

    parallaxList.forEach((item, idx) => {
        item.style.transform = `translate(0px,${(100 - parallaxPercent) * percent[idx]}px)`;
    })

    bgLine.style.transform = `translate(0px, -${(100 - parallaxPercent) * 3}px)`;
};

const winHeight = window.innerHeight;

window.addEventListener('scroll', () => {
    motionParallax(winHeight);
    fullPages(winHeight);
});