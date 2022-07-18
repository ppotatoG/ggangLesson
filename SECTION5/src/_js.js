(() => {

})();

let sectionIsMoving = true;

const fullPages = (winHeight) => {

    const secMainVis = document.querySelector('.sec_mainvis');
    const secOverlap = document.querySelector('.sec_list_overlap');

    if(
        sectionIsMoving
        && secOverlap.getBoundingClientRect().bottom >= 0
    ) {

        const secMainVisTop = secMainVis.getBoundingClientRect().top;
        const secOverlapTop = secOverlap.getBoundingClientRect().top;

        console.log(window.scrollY)

        if (window.scrollY === 970) {
            sectionIsMoving = false;
        }
        // else {

            // return secOverlap;
        // }

        sectionIsMoving = true;
        console.log('end')
    }
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

window.addEventListener('scroll', (e) => {
    motionParallax(winHeight);
})

window.addEventListener('scrollDown', () => {
    if(sectionIsMoving) fullPages(winHeight);
})