var map;
var markers = [];
var Dnepr = {lat: 48.4666008, lng: 35.018155};

function initMap(pharm) {
  var pharm = pharm || 'аптека медицинской академии';

  map = new google.maps.Map(document.getElementById('map'), {
    center: Dnepr,
    zoom: 11,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();

  var service = new google.maps.places.PlacesService(map);

  service.nearbySearch({
    location: Dnepr,
    radius: 30000,
    name: pharm
  }, function (results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    } else if (status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
      setTimeout(function() {
        createMarker(results[i]);
      }, 250);
    }
  });

  function createMarker(place) {
    service.getDetails({
      placeId: place.place_id
    }, function(place, status) {

      if (status === google.maps.places.PlacesServiceStatus.OK) {

        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });

        markers.push(marker);

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(
            '<div class="map__popover"><b>' + place.name + '</b><br>' +
            place.formatted_address + '</div>'
          );
          infowindow.open(map, this);
        });
      }
    });
  }
};
