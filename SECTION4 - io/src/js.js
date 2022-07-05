const io = new IntersectionObserver(sections => {
    sections.forEach (section => {
        console.log(section);
        if(section.isIntersecting) {
            setIO(section.target);
        }
        else if(!(section.isIntersecting)) {
            
        }
    })
}, {
    // root: document.querySelector('.io_wrap'),
    // rootMargin: '50% 2% 50% 2%',
    threshold: 0
})

const ioWrap = document.querySelector('.io_wrap');
const ioConts = ioWrap.querySelectorAll('[class^=cont]');

const setIO = (curTarget) => {
    const prev = ioWrap.querySelector('[class^=cont].active');
    const color = curTarget.dataset.bgColor;

    if (prev) {
        prev.classList.remove('active');
    }
    
    if (curTarget) {
        curTarget.classList.add('active');
        ioWrap.style.backgroundColor = color;
    }
}

ioConts.forEach(el => {
    io.observe(el);
})