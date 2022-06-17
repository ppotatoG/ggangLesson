window.onload = function() {

    var text = document.querySelector('.progress .txt');
    var progressBar = document.querySelector('.progress .bar');

    function getPercent(){

        var scrollHeight = document.querySelector('.sec01').offsetHeight;
        var scrollRealHeight = scrollHeight - window.innerHeight;
        var winScrollTop = window.pageYOffset;
        var scrollPercent = (winScrollTop / scrollRealHeight) * 100;
        var textPercent = Math.round(scrollPercent);

        render(textPercent,scrollPercent);
    };

    function render(textPercent,scrollPercent){
        text.innerText = textPercent + '%';

        progressBar.style.width = scrollPercent + '%';
    };

    function init(){
        getPercent();
    };

    document.addEventListener('scroll', function() {
        getPercent();
    }, false);

    init(); //초기화

};