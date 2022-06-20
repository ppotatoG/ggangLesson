(() => {
    const gallery = document.querySelector('.sc_infinity .list');
    const target = document.querySelector('footer');
    let count = 0;
    const io = new IntersectionObserver((entry, observer) => {
        if (count < 10) {
            setImg(gallery);
            count++;
        }
        else {
            io.unobserve(target);
            return false;
        }

        io.observe(target);
    }, {
        threshold: 0
    });

    io.observe(target);
})();

const setImg = (target) => {
    const imgArr = ['../images/1.jpg', '../images/2.jpg', '../images/3.jpg'];

    imgArr.forEach(src => {
        const li = document.createElement('li');
        li.innerHTML = `<figure><img src="${src}"></figure>`;
        target.appendChild(li)
    })
}