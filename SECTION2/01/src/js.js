(() => {
    const getPercent = () => {
        const scrollHeight = document.querySelector('.sec01').offsetHeight;
        const scrollRealHeight = scrollHeight - window.innerHeight;
        const winScrollTop = window.scrollY;
        const scrollPercent = Math.round((winScrollTop / scrollRealHeight) * 100);

        render(scrollPercent);
    }

    const text = document.querySelector('.progress .txt');
    const progressBar = document.querySelector('.progress .bar');

    const render = (scrollPercent) => {
        text.innerText = `${scrollPercent}%`;
        progressBar.style.width = `${scrollPercent}%`;
    }

    const init = () => getPercent();

    document.addEventListener('scroll', function() {
        getPercent();
    }, false);

    init();
})();