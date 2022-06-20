(() => {
    const gallery = document.querySelector('.sc_infinity .list');
    const target = document.querySelector('footer');
    let count = 0;
    const io = new IntersectionObserver((entry, observer) => {
        if (!entry.isIntersecting && count < 10) {
            io.unobserve(target);

            gallery.appendChild(document.createElement('li'));
            gallery.lastElementChild.textContent = `${count}`;

            io.observe(target);
        }
        count++;
    }, {
        threshold: 0
    });

    io.observe(target);
})();