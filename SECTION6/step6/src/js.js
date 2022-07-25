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
};
countDate();

(() => {

    setTimeout(() => {
        document.querySelector('section').classList.add('active');
    },200);

})();

(() => {
    const overlap = document.querySelector('.section_overlap');

    setTimeout(() => {
        overlap.classList.add('active')
    }, 200)

})()
