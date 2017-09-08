$(document).ready(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() > ($("#team").offset().top + 350)) {
            $('.banner, .photo, .curriculum').addClass('attivo');
        } else {
            $('.banner, .photo, .curriculum').removeClass('attivo');
        }
    });
});
