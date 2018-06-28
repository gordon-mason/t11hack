function initialise() {
    var myLatlng = new google.maps.LatLng(55.8617, -4.2417);
    var mapOptions = {
        zoom: 15,
        center: myLatlng,
        styles: [ {
            featureType: "poi.business",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        }]
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(event.latLng);
    });
}

function placeMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}