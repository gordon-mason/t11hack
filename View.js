function View() {
    var navmenu = document.getElementById("navmenu");
    var main = document.getElementById("mainNav");
    var map = document.getElementById("mapNav");

    this.init = function(callback) {

    };

    // Navigation
    this.goToFunction = function(url) {
        return function () {
            console.log(url);
            window.location.href = url;
        };
    };
}





