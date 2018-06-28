function View() {
    var menuSection = document.getElementById("menusection");
    var mainSection = document.getElementById("mainsection");
    var favouriteSection = document.getElementById("nav");
    var reviewSection = document.getElementById('reviewSection');
    var backToMapButton = document.getElementById('backToMap');
    var IDsection = document.getElementById("idsection");
    var startsection = document.getElementById("startsection");
    //componentsToHide holds a reference to all components
    var componentsToHide = [menuSection, mainSection, favouriteSection, reviewSection, backToMapButton, IDsection, startsection];
    //viewMap holds a reference to all of the components to show for each view
    var viewMap = [];
    viewMap["menu"] = [menuSection, favouriteSection, backToMapButton];
    viewMap["start"] = [startsection];
    viewMap["IDsection"] = [IDsection, favouriteSection];
    viewMap["review"] = [reviewSection, favouriteSection, backToMapButton];
    viewMap["map"] = [mainSection, favouriteSection];

    var switchView = function (viewName) {
        console.log(componentsToHide);
        console.log(viewMap);
        componentsToHide.forEach(function(comp){
            comp.hidden = true;
        });
        viewMap[viewName].forEach(function(comp){ comp.hidden = false; })
    };

    this.init = function(callback) {
        //set up navigation
        startsection.addEventListener("click", function(){switchView("map")});
        document.getElementById('home').addEventListener("click",  function(){switchView("menu")} );
        document.getElementById('backToMap').addEventListener("click", function(){switchView("map")} );
        document.getElementById('image1').addEventListener("click",function(){switchView("map")} );
        document.getElementById('imageID').addEventListener("click", function(){switchView("IDsection")} );
        document.getElementById('ID').addEventListener("click", function(){switchView("IDsection")} );

        //handle the submission of a review
        document.getElementById('submit').addEventListener("click", function(e) {
            e.preventDefault();
            const formData = new FormData(document.querySelector("form"));
            globalDatabase.updateRestaurantsNearGlasgow(            {
                name: document.getElementById("restaurantName").innerHTML,
                rating: formData.get("rating"),
                comment: formData.get("comment")
            });
        });

        //show the start page
        switchView("start");
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
}
