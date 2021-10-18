$(document).ready(function() {
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('.collapsible').collapsible();
    $('.slick-prev').text('<')
    $('.slick-next').text('>')
});

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
});
// slider 2
$('.slider-for2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav2'
});
$('.slider-nav2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for2',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
});
// slider 3
$('.slider-for3').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav3'
});
$('.slider-nav3').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for3',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
});

let orderBtns = document.querySelectorAll('.modal-trigger');

orderBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        $('#articul').text(`Артикуль ${btn.dataset.art}`)
    })
});


// slider 4 phone
$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

// slider 5 question
$('.slider_question').slick();