function Database() {
	var restaurants = {
        restaurants: [
            {name: "Panko",
                latitude: 55.860923,
                longitude: -4.259144,
                price: 6,
                category: "Japanese",
                starRating: 5,
                speed: 10,
                reviews: [{
                    user: "bob",
                    starRating: 5,
                    description: "good"
                }]
            }, {
            	name: "Bar-burrito",
                latitude: 55.860884,
                longitude: -4.258916,
                price: 4,
                category: "Mexican",
                starRating: 4.5,
                speed: 5,
				reviews: []
			}, {
            	name: "Viva Brazil Glasgow",
                latitude: 55.861242,
                longitude: -4.262229,
                price: 6,
                category: "Steak House",
                starRating: 4,
                speed:7 ,
    			reviews: []
			}, {
				name: "The Opera Buffet",
                latitude: 55.860684,
                longitude: -4.262097,
                price: 4,
                category: "Buffet",
                starRating: 3,
                speed: 3,
                reviews: []
			}, {
            	name: "The grill on the Corner",
                latitude: 55.860917,
                longitude: -4.259839,
                price: 5,
                category: "Steak House",
                starRating: 5,
                speed: 7,
        		reviews: []
			}, {
				name: "Martha's",
                latitude: 55.861829,
                longitude: -4.258672,
                price: 3,
                category: "Healthy Take-away",
                starRating: 4,
                speed: 3,
                reviews: []
			}, {
				name: "Gusto",
                latitude: 55.861209,
                longitude: -4.259356,
                price: 4,
                category: "Restaurant",
                starRating: 4,
                speed: 6,
                reviews: []
			}, {
				name: "Stereo",
                latitude: 55.860884,
                longitude: -4.258916,
                price: 8,
                category: "Vegan",
                starRating: 4.7,
                speed: 20,
                reviews: []
        	}
        ]
    }

    this.getRestaurantsNearGlasgow = function() {
		return restaurants;
    };

	this.updateRestaurantsNearGlasgow = function(review) {
        restaurants.restaurants.forEach(function(rest) {
        	if(review.name === rest.name) {
        		rest.reviews.push({
					user: "JPMorgan Employee",
                    starRating: review.rating,
                    description: review.comment
        		});
                view.showReviews(review.name);
			}
		});
	};
}
