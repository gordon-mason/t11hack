function View() {
    // var navmenu = document.getElementById("navmenu");
    // var main = document.getElementById("mainNav");
    // var map = document.getElementById("mapNav");

    var menuSection = document.getElementById("menusection");
    var mainSection = document.getElementById("mainsection");
    var favouriteSection = document.getElementById("nav");
    var reviewSection = document.getElementById('reviewSection');
    var backToMapButton = document.getElementById('backToMap');

    this.init = function(callback) {
        var showHome = function(){
            menuSection.hidden = true;
            mainSection.hidden = false;
            favouriteSection.hidden = false;
            reviewSection.hidden = true;
            backToMapButton.hidden = true;
        };
        document.getElementById('home').addEventListener("click", function(){
            menuSection.hidden = false;
            mainSection.hidden = true;
            //favouriteSection.hidden = true;
            reviewSection.hidden = true;
            backToMapButton.hidden = true;
        });
        document.getElementById('backToMap').addEventListener("click", showHome);
        document.getElementById('image1').addEventListener("click", showHome);
        document.getElementById('imageID').addEventListener("click", function(){
            idSection.hidden = true;
            mainSection.hidden = false;
            favouriteSection.hidden = false;
        });
        document.getElementById('submit').addEventListener("click", function(e) {
            e.preventDefault();
            const formData = new FormData(document.querySelector("form"));
            globalDatabase.updateRestaurantsNearGlasgow(            {
                name: document.getElementById("restaurantName").innerHTML,
                rating: formData.get("rating"),
                comment: formData.get("comment")
            });
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
        if (restaurant.reviews) {
            restaurant.reviews.forEach(function (x) {
                reviews += '<div class="panel panel-default">\n' +
                    '      <h3> username: ' + x.user + '</h3>\n' +
                    '      <p> comment: ' + x.description + '</p>\n' +
                    '    </div>'
            });
        } else {
            reviews = 'No reviews, yet';
        }
        //show the reviews
        document.getElementById('reviews').innerHTML = reviews;
        //show the star rating and restaurant name:
        document.getElementById('restaurantName').innerHTML = restaurantName;
        var i = 0;
        var starElement = document.getElementById('starRating');
        starElement.innerHTML = '';
        while (i < restaurant.starRating) {
            starElement.innerHTML += '<i class="fas fa-star fa-2x"></i>';
            i++;
        }
        //hide other things and show reviews
        menuSection.hidden = true;
        mainSection.hidden = true;
        favouriteSection.hidden = false;
        reviewSection.hidden = false;
        backToMapButton.hidden = false;

    };

    // Navigation
    this.goToFunction = function(url) {
        return function () {
            console.log(url);
            window.location.href = url;
        };
    };

}
