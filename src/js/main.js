
$(".btn-menu").on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".menu-navigation-wrap").toggleClass('show-menu');
    $("body").toggleClass('overflow-hidden');
});

$('.menu-navigation-wrap a').click(function(){
    $('.btn-menu').removeClass("active");
    $(".menu-navigation-wrap").removeClass('show-menu');
    $("body").removeClass('overflow-hidden');
});

function backToTop() {
    let button = $('.btn-scroll');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 50) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 1000);
    })
}

backToTop();