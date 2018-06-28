function View() {
    // var navmenu = document.getElementById("navmenu");
    // var main = document.getElementById("mainNav");
    // var map = document.getElementById("mapNav");

    var menuSection = document.getElementById("menusection");
    var mainSection = document.getElementById("mainsection");
    var favouriteSection = document.getElementById("nav");
    var reviewSection = document.getElementById('reviewSection');

    this.init = function(callback) {
        document.getElementById('home').addEventListener("click", function(){
            menuSection.hidden = false;
            mainSection.hidden = true;
            favouriteSection.hidden = true;
        });
        document.getElementById('ID').addEventListener("click", function(){
            idSection.hidden = false;
            mainSection.hidden = true;
            favouriteSection.hidden = true;
        });
        document.getElementById('image1').addEventListener("click", function(){
            menuSection.hidden = true;
            mainSection.hidden = false;
            favouriteSection.hidden = false;
        });
        document.getElementById('imageID').addEventListener("click", function(){
            idSection.hidden = true;
            mainSection.hidden = false;
            favouriteSection.hidden = false;
        });
    };


    this.showReviews = function(restaurantName){
        var data = globalDatabase.getRestaurantsNearGlasgow();
        var restaurant;
        var reviews = '';
        //find the right restaurant
        data.restaurants.forEach(function(x) {
            if (x.name === restaurantName) {restaurant = x }
        } );
        //create a review div for each review
        restaurant.reviews.forEach(function(x){
            reviews += '<div>\n' +
                '      <h3>' + x.user +'</h3>\n' +
                '      <p>' + x.description +  '</p>\n' +
                '    </div>'
        });
        document.getElementById('reviews').innerHTML = reviews;
        menuSection.hidden = true;
        mainSection.hidden = true;
        favouriteSection.hidden = false;
        reviewSection.hidden = false;

    };


    // Navigation
    this.goToFunction = function(url) {
        return function () {
            console.log(url);
            window.location.href = url;
        };
    };



}
