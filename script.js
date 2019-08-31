// EMPTY OBJECT THAT WILL HOLD ALL OUR APPLICATION CODE (NAMESPACE APP)
const foodApp = {} ;

foodApp.baseURL = `https://developers.zomato.com/api/v2.1/search`;
foodApp.apiKey = `ab555e02f8cc7344c070a66a218852f7`;


// METHOD THAT CONTAINS AN EVENT LISTENER FOR FORM SUBMIT
foodApp.submitEventHandler = function() {
    $('form').on('submit', function (e) {
        // TO PREVENT DEFAULT REFRESH
        e.preventDefault();
        // TO EMPTY THE PAGE BEFORE ADDING NEW CONTENT ONTO IT
        foodApp.$foodContainer.empty();
        // CALL THE FUNCTION TO GET USER'S INPUT
        foodApp.collectUserInfo();
    });
}


// METHOD THAT COLLECTS USER INPUT AND PASSES THE INFO AS ARGUMENTS TO THE API
foodApp.collectUserInfo = function () {
        const $foodChoice = $(`input[name=food]:checked`).val();
        const $countChoice = $(`input[name=count]:checked`).val();
        const $sortChoice = $(`input[name=sort]:checked`).val();
        console.log($foodChoice);
        console.log($countChoice);
        console.log($sortChoice);
        foodApp.getFood($foodChoice, $countChoice, $sortChoice);
}


// METHOD TO PASS THE USER'S SELECTIONS AS ARGUMENTS AND GET FOOD DATA FROM API 
foodApp.getFood = function (cuisineId, number, type) {
    $.ajax({
        url: foodApp.baseURL,
        headers: {
        'user-key': foodApp.apiKey,
        },
        method: 'GET',
        dataType: 'json',
        data: {
            entity_id:89,
            entity_type:'city',
            lat: 43.6483,
            lon: -79.3979,
            cuisines: cuisineId,
            count: number,
            sort: type,         
        }
    }).then( function (result) {
        foodApp.displayFood(result);
    })
}


// METHOD THAT ACCEPTS DATA FROM API AS AN ARGUMENT AND RENDERS IT TO THE DOM TO ULTIMATELY DISPLAY IT ON THE PAGE
foodApp.displayFood = function(result){
    // console.log(result.restaurants);
    result.restaurants.forEach(function(cafe){

        const restaurantName = cafe.restaurant.name;
        const restaurantRating = cafe.restaurant.user_rating.aggregate_rating;
        const costForTwo = cafe.restaurant.average_cost_for_two;
        const restaurantAddress = cafe.restaurant.location.address;
        const restaurantImage = cafe.restaurant.thumb

        const foodHtml = `
        <li>
            <p>Name: ${restaurantName}</p>
            <p>Rating: ${restaurantRating}</p>
            <p>Cost for two: ${costForTwo}</p>
            <p>Address: ${restaurantAddress}</p>
            <img src =${restaurantImage}>
        </li>
        `

        if (restaurantImage) {
            foodApp.$foodContainer.append(foodHtml);
        }
    })
}




// DEFINE INIT METHOD THAT WILL INITIALIZE ANYTHING THAT NEEDS TO HAPPEN ON PAGE LOAD (START APP)
foodApp.init = function(){
    // CACHE jQUERY SELECTORS
    foodApp.$foodContainer = $('.restoContainer')

    // EVENT HANDLERS
    foodApp.submitEventHandler();
}


$(document).ready(function(){
    // CALL THE INIT FUNCTION INSIDE JQUERY DOM SO THAT IT EXECUTES ON PAGE LOAD
    foodApp.init();
})