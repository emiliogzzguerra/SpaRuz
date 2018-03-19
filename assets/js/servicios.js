$('.subdivision').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  console.log(target);
  if(target.length){
    var scrollTo = target.offset().top;
    $('body, html').animate({scrollTop: (scrollTo)+'px'}, 1000);
  }
});

$(".card").click(function(){
    $(this).find("i").toggleClass("down");
});
