$('.subdivision').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  console.log(target);
  if(target.length){
    var scrollTo = target.offset().top;
    $('body, html').animate({scrollTop: (scrollTo)+'px'}, 1000);
  }
});

$(document).on('show','.accordion', function (e) {
     //$('.accordion-heading i').toggleClass(' ');
     $(e.target).prev('.accordion-heading').addClass('accordion-opened');
});

$(document).on('hide','.accordion', function (e) {
    $(this).find('.accordion-heading').not($(e.target)).removeClass('accordion-opened');
    //$('.accordion-heading i').toggleClass('fa-chevron-right fa-chevron-down');
});
