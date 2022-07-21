const countDate = () => {
    const el = document.querySelector('.date-count');
    const date = new Date();
    const todayDate = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;
    const rolling = 24;
    const resultArray = todayDate.split('');
    const numberArray = Array.from({length : 100}, (val, idx) => (idx + 1) % 10);

    resultArray.forEach((val, idx) => {
        const conuntBox = document.createElement('div');
        conuntBox.className = 'date-count__item';

        const curNumber = val - 1 <= 0 ? Number(val += 9) : Number(val - 1);
        const number = [...numberArray].splice(curNumber, curNumber + rolling);

        if(idx === 1) {
            console.log(number)
            console.log(curNumber)
            console.log(curNumber + rolling)
        }

        number.forEach(number => {
            const countValue = document.createElement('p');
            countValue.innerText = number;

            conuntBox.appendChild(countValue);
        });

        el.appendChild(conuntBox);

        setTimeout(function() {
            conuntBox.classList.add('active');
        }, idx * 300);
    });
};
countDate();

(() => {

    setTimeout(() => {
        document.querySelector('section').classList.add('active');
    },200);  

})();