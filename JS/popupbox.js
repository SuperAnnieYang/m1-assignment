$(document).ready(function(){

    $('.lightbox-toggle img').click(function(){
        
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        if ($('.box').contents('img')) {
            $('.box').contents().remove('img');
        }
        var image = $(this).clone();
        $('.box').append(image);
    });

    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });

});