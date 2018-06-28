var globalDatabase = new Database();
var model = new Model();
var view = new View();

function init() {
    view.init();
    //uncomment to show the reviews for panko on load
    //view.showReviews('Panko');
}

window.addEventListener('load', init);
