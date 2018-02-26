$(document).ready(function(){
  $(window).resize(function(event) {
    if($(window).width() > 991){
      hideNav();
    } else {
      showNav();
    }
  });

  hideAndShow();

  function hideNav() {
    $("[data-nav-status='toggle']").removeClass("is-visible").addClass("is-hidden");
  }
  function showNav() {
    $("[data-nav-status='toggle']").removeClass("is-hidden").addClass("is-visible");
  }

  function initMap() {
    var locationSpa = {lat: 25.645351, lng: -100.282992};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: locationSpa,
      gestureHandling: 'none'
    });
    var marker = new google.maps.Marker({
      position: locationSpa,
      map: map,
      title: 'Spa Ruz!'
    });
  }

  initMap();

  function hideAndShow(){
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
        if(currentScroll >= 0 && currentScroll < 200){
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
  }
});
