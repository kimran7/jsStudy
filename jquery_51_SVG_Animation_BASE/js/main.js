$(function(){
    var notePad=$('.notepads');
    $(window).scroll(function(){
        if($(this).scrollTop() > 300){
            notePad.addClass('animate');
                }else{
                    notePad.removeClass('animate');
        }
    })
});


