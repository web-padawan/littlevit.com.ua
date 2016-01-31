function initialize() {

  var locations = [
    ['Аптека 24', 48.4079623, 35.0393906],
    ['Аптека Линда Фарм', 48.4344963, 35.0193656]
  ];

  var infoWindowContent = [
      ['<div class="map__popover">' +
      '<h3>Аптека 24</h3>' +
      '</div>'],
      ['<div class="map__popover">' +
      '<h3>Аптека Линда Фарм</h3>' +
      '</div>'],
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 48.431306, lng: 35.002261},
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();
  var marker, i;
  var markers = [];

  for (i = 0; i < locations.length; i++) {

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });

    markers.push(marker);

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(infoWindowContent[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
};
