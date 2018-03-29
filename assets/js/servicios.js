if($(window).width() > 768){
  $(".servicios-contenido-movil").hide();
} else {
  $(".servicios-contenido-desktop").hide();
}

$('.subdivision').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  console.log(target);
  if(target.length){
    var scrollTo = target.offset().top;
    $('body, html').animate({scrollTop: (scrollTo - 75)+'px'}, 1000);
  }
});

$(".card").click(function(){
    $(this).find("i").toggleClass("down");
});

$(window).resize(function(event) {
  if($(window).width() > 768){
    $(".servicios-contenido-movil").hide();
    $(".servicios-contenido-desktop").show();
  } else {
    $(".servicios-contenido-movil").show();
    $(".servicios-contenido-desktop").hide();
  }
});
