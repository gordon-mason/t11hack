function View() {
    // var navmenu = document.getElementById("navmenu");
    // var main = document.getElementById("mainNav");
    // var map = document.getElementById("mapNav");

    var menuSection = document.getElementById("menusection");
    var mainSection = document.getElementById("mainsection");
    var favouriteSection = document.getElementById("nav");

    this.init = function(callback) {
        document.getElementById('home').addEventListener("click", function(){
            menuSection.hidden = false;
            mainSection.hidden = true;
            favouriteSection.hidden = true;
        })
        document.getElementById('image1').addEventListener("click", function(){
            menuSection.hidden = true;
            mainSection.hidden = false;
            favouriteSection.hidden = false;
        })
    };


    // Navigation
    this.goToFunction = function(url) {
        return function () {
            console.log(url);
            window.location.href = url;
        };
    };
}
