(() => {
    var target = document.querySelector('.sc_infinity .list');
    var breakList = 10;
    var listCount = 0;
    var winTop;
    var onTop;

    function getList() {
        var list;

        listCount++;

        if(listCount > breakList) {
            list = null;
        }else{
            list = '<li><figure><img src="../images/1.jpg"></figure></li>';
            list += '<li><figure><img src="../images/2.jpg"></figure></li>';
            list += '<li><figure><img src="../images/3.jpg"></figure></li>';
        }

        return list;

    }

    function listCall() {
        winTop = window.pageYOffset;
        onTop = document.body.offsetHeight - window.innerHeight - document.querySelector('.footer').offsetHeight;

        if(winTop >= onTop){

            var data = getList();

            if(data !== null) {
                var el = document.createElement('div');
                el.innerHTML = data;

                var node = Array.from(el.children);
                var arr = [];

                arr.push.apply(arr, el.children);

                arr.forEach(function(element) {
                    target.appendChild(element);
                });
            }else{
                return false;
            }

        }
    }

    function init(){ //초기화
        listCall();
    }

    window.addEventListener('scroll', function() {
        listCall();
    }, false);

    init();
})();