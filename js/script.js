$(document).ready(function () {
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
    })
});