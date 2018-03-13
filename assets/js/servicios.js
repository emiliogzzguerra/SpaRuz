$('a[role="tab"]').click(function(e){
  e.preventDefault();
  var target = $($(this));
  if(target.length){
    console.log("entre");
    var scrollTo = target.offset().top;
    $('body, html').animate({scrollTop: scrollTo+'px'}, 1000);
  }
  console.log("sali");
});
