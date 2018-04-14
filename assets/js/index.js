$(document).ready(function(){
  var auxSelectMap = "";
  if($(window).width() >= 768){
    auxSelectMap = "map2"
  } else {
    auxSelectMap = "map"
  }
  function initMap() {
    var locationSpa = {lat: 25.645351, lng: -100.282992};
    var map = new google.maps.Map(document.getElementById(auxSelectMap), {
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
});
