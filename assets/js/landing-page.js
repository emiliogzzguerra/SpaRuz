$(document).ready(function(){
  console.log($(window).width());
  if($(window).width() > 991){
    /** ===========================================
        Hide / show the master navigation menu
    ============================================ */
    var previousScroll = 0;
    var isShown = 0;
    $(window).scroll(function(){
      var currentScroll = $(this).scrollTop();
      /*
        If the current scroll position is greater than 0 (the top) AND it's less than 200 the navbar should be hidden
      */
      if(currentScroll >= 0 && currentScroll < 400){
        window.setTimeout(hideNav, 0);
        isShown = 0;
      } else {
        if(!isShown){
          window.setTimeout(showNav, 400);
          isShown = 1;
        }
      }
    });
  } else {
    showNav();
  }
  function hideNav() {
    $("[data-nav-status='toggle']").removeClass("is-visible").addClass("is-hidden");
  }
  function showNav() {
    $("[data-nav-status='toggle']").removeClass("is-hidden").addClass("is-visible");
  }


});
