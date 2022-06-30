$(".data-body span").on('click', function(){
    $(this).toggleClass('active');
    if ($(this).hasClass('no-active')) {
        $(this).removeClass('active');
    } else {
        $(".price").text($(".data-body span.active").length * 1500)
    }
})
$(".show-data").on('click', function(){
    $(".show").fadeOut().hide();
    $(".hide").fadeIn().show();
    $(".return-back").addClass('active')
    $(".price").text($(".data-body span.active").length * 1500)
})
$('.return-back').on('click', function(){
    $(".hide").fadeOut().hide();
    $(".show").fadeIn().show();
    $(this).removeClass('active')
})
