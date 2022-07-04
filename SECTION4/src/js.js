const scrollBody = document.querySelector('.motion_area');
const bgContent = scrollBody.querySelectorAll('.bg');
const moonBody = scrollBody.querySelector('.motion_moon');
const ggangBody = scrollBody.querySelector('.motion_ggang');

const setGgang = (scrollY) => {
    const percent = scrollY / (scrollBody.offsetHeight - window.innerHeight) * 100;
    const moveDistance = percent / (100 / 110);
    let num = Math.floor(percent / (100 / bgContent.length));
    num === bgContent.length ? num = bgContent.length - 1 : num;

    bgContent.forEach((elClass, idx) => {
        num === idx 
        ? elClass.classList.add('active') 
        : elClass.classList.remove('active');

        if(num === 2) moonBody.classList.remove('active');
        if(num === 3) moonBody.classList.add('active');
    });

    ggangBody.style.transform = `translateY(${moveDistance}px)`;
};

(() => {
    console.log('arrow')
    window.addEventListener('scroll', () => {
        setGgang(window.scrollY);
    });
})();