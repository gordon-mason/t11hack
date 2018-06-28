function Model() {

    this.getLocation = function(showPosition) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}