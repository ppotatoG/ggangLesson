let countDateFlag = true;

const countDate = () => {
    const el = document.querySelector('.date-count');

    const date = new Date();
    const todayDate = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;
    const resultArray = todayDate.split('');

    const rolling = 24;

    resultArray.forEach((val, idx) => {
        const countBox = document.createElement('div');
        countBox.className = 'date-count__item';

        const number = Array.from({length: rolling + 1}, (v, i) => {
            const value = Number(val) + i;
            return value >= 10 ? value % 10 : value;
        }).reverse();

        number.forEach(number => {
            const countValue = document.createElement('p');
            countValue.innerText = `${number}`;

            countBox.appendChild(countValue);
        });

        el.appendChild(countBox);

        setTimeout(function() {
            countBox.classList.add('active');
        }, idx * 300);
    });

    countDateFlag = false;
};

const scrollObserver = () => {
    const targets = document.querySelectorAll('[data-ob=true]');

    const io = new IntersectionObserver(entries => {
        entries.forEach (entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active')
                // console.log(entry.target.dataset.obThreshold)
                if (
                    /today/.test(entry.target.classList.value)
                    && countDateFlag
                ) {
                    countDate();
                }
            }
        })
    }, {
        threshold: .1
    })

    targets.forEach(target => {
        io.observe(target);
    })
}

const scrollMove = (el) => {
    el.addEventListener('click', e => {
        const moveClass = el.dataset.scrollMove;
        const moveSection = document.querySelector(`.${moveClass}`);

        window.scrollTo({
            top: moveSection.offsetTop,
            left: 0,
            behavior: 'smooth'
        });

        e.preventDefault();
    }, false)
}

(() => {
    scrollObserver();

    const navButton = document.querySelectorAll('.js-scroll-move');
    navButton.forEach(el => scrollMove(el));
})();