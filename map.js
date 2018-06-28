var position = {
    lat: 55.860682,
    lng: -4.264069
};

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
        }],
        mapTypeControlOption: false
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(event.latLng);
    });

    var data = globalDatabase.getRestaurantsNearGlasgow();
    data.restaurants.forEach(function(restaurant){
        var marker = new google.maps.Marker({
            name: restaurant.name,
            position: {lat: restaurant.latitude, lng: restaurant.longitude},
            map: map,
            title: restaurant.name
        });
        marker.addListener('click', function(){
            view.showReviews(marker.name);
        });
        console.log(restaurant.name);
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
