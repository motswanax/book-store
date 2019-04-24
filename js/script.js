$(document).ready(function () {
    $('.hamburger-menu').click(function() {
        $('.navigation').toggleClass('change');
    });

    lightbox.option({
        // 'resizeDuration': 200,
        'wrapAround': true
    })

    $(window).scroll(function () {
        var position = $(this).scrollTop();
        // console.log(position);
        
        if (position >= 350) {
            $('.gallery').addClass('change');
        } else {
            $('.gallery').removeClass('change');
        }
    });

    $('.writers-accordion').click(function (event) {
        // console.log(event.target.id.split('-'));
        if (event.target.id.split('-')[0] === 'button') {
            // console.log('Hello');
            $('#book-1').attr('src', 'img/writers/' + event.target.id.split('-')[1] + '-book1.jpg');
            $('#book-2').attr('src', 'img/writers/' + event.target.id.split('-')[1] + '-book2.jpg');
        }
    });
});