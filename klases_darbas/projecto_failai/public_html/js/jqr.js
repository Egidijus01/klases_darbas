

$(function(){
    $('.tekstas').click(function(){
        $('.tekstas').each(function() {
            $(this).removeClass('active');
          });
          
        $(this).addClass('active')

    })
})