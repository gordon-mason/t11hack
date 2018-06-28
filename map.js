var position = {
    lat: 55.860682,
    lng: -4.264069
}

function initialise() {
    navigator.geolocation.getCurrentPosition(showPosition);
    var mapOptions = {
        zoom: 16,
        center: position,
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

function showPosition(event) {
    position.lat = event.coords.latitude;
    position.lng = event.coords.longitude;
}