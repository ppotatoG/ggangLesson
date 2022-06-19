(() => {
    const gallery = document.querySelector('.sc_infinity .list');

    const imgEl = ['../images/1.jpg', '../images/2.jpg', '../images/3.jpg'];
    let listCount = 0;

    function getList() {
        let list = '';
        listCount++;

        if(listCount > 10) {
            list = null;
        }else{
            imgEl.forEach(src => {
                list += `<li><figure><img src="${src}"></figure></li>`;
            })
        }

        return list;
    }

    const listCall = () => {
        const winTop = window.scrollY;
        const onTop = document.documentElement.getBoundingClientRect().height - window.innerHeight - document.querySelector('.footer').offsetHeight;

        if(winTop >= onTop){
            const data = getList();
            if(data) {
                const el = document.createElement('div');
                el.innerHTML += data;

                const arr = [];
                arr.push.apply(arr, el.children);
                arr.forEach(function(element) {
                    gallery.appendChild(element);
                });
            }else{
                return false;
            }
        }

    }

    const init = () => listCall();

    window.addEventListener('scroll', function() {
        listCall();
    }, false);

    init();
})();