$(document).ready(function(){
  $(window).resize(function(event) {
    if($(window).width() >= 576){
      hideNav();
      hideMenuItems();
    } else {
      showMenuItems();
      showNav();
    }
  });

  // if($(window).width() >= 576){
  //   hideNav();
  //   hideMenuItems();
  // } else {
  //   showMenuItems();
  //   showNav();
  // }

  function hideNav() {
    $("[data-nav-status='toggle']").removeClass("is-visible").addClass("is-hidden");
  }
  function showNav() {
    $("[data-nav-status='toggle']").removeClass("is-hidden").addClass("is-visible");
  }

  function hideMenuItems() {
    $("[data-nav-status='extraMenuItems']").removeClass("is-visible").addClass("is-hidden").css("margin", "0em 0em");
    $("[data-toggle='division']").removeClass("is-visible").addClass("is-hidden");
  };

  function showMenuItems() {
    $("[data-nav-status='extraMenuItems']").removeClass("is-hidden").addClass("is-visible").css("margin", "0.5em 0em");
    $("[data-toggle='division']").removeClass("is-hidden").addClass("is-visible");
  };
});
