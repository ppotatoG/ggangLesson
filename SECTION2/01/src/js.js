$(function() {
    $(window).scroll(function() {
        getPercent();
    })

    function getPercent() {
        var scrollHeight = $('.sec01').height();
        var scrollRealHeight = scrollHeight - $(window).height();
        var winScrollTop = $(window).scrollTop();
        var scrollPercent = (winScrollTop / scrollRealHeight) * 100;
        var textPercent = Math.round(scrollPercent);

        render(textPercent, scrollPercent);
    }

    var progressBar = $('.progress .bar');
    var text = $('.progress .txt');

    function render(textPercent, scrollPercent) {
        progressBar.css({
            width: scrollPercent + '%'
        });

        text.text(textPercent + '%');
    }

    function init() {
        getPercent();
    }

    init();
});