var globalDatabase = new Database();

function init() {
    var model = new Model();
    var view = new View();
    view.init();
    //uncomment to show the reviews for panko on load
    //view.showReviews('Panko');
}

window.addEventListener('load', init);
