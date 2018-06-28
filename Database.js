
class Database {
	getRestaurantsNearGlasgow = function() {
		return {
			restaurants: [
				{name: "Panko",
					latitude: 55.860923,
					longitude: -4.259144,
					price: 6,
					category: "Japanese",
					starRating: 5,
					speed: 10},
				{name: "Bar-burrito",
					latitude: 55.860884,
					longitude: -4.258916,
					price: 4,
					category: "Mexican",
					starRating: 4.5,
					speed: 5 },
				{name: "Stereo",
					latitude: 55.860884,
					longitude: -4.258916,
					price: 8,
					category: "Vegan",
					starRating: 4.7,
					speed: 20}
			
			]
		}
	}
}