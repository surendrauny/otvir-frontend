$('ul  li a').click(function(e) 
    { 
      $('.subnav').show();
      $('.search').show();
      $('.main-head').addClass('activenavhead'); 
    });

$(document).on('click', function (e) {
    if ($(e.target).closest(".main-head").length === 0) {
         $('.search').hide();
         $('.subnav').hide();
         $('.main-head').removeClass('activenavhead');  
         $('.main-nav li a').removeClass("activenav");
    }
});


$(document).ready(function(){
  $('.main-nav-links a').click(function(){
    $('.main-nav-links a').removeClass("activenav");
    $(this).addClass("activenav");
  });
});
    

$(document).ready(function() {
    $(".main-nav li a").on('click', function() {
        var page = $(this).data('page');
        $("#pages .page:not('.hide')").stop().fadeOut('fast', function() {
            $(this).addClass('hide');
            $('#pages .page[data-page="'+page+'"]').fadeIn('slow').removeClass('hide');
        });
    });
});