const teaApp = {} ;

teaApp.baseURL = `https://developers.zomato.com/api/v2.1/search`;
teaApp.apiKey = `ab555e02f8cc7344c070a66a218852f7`;

<<<<<<< Updated upstream
teaApp.getTea = function () {
    console.log('hello');
    
=======

teaApp.getTea = function (cuisineId){
>>>>>>> Stashed changes
    $.ajax({
        url: `https://developers.zomato.com/api/v2.1/search`,
        headers: {
        'user-key': 'ab555e02f8cc7344c070a66a218852f7',
        },
        method: 'GET',
        dataType: 'json',
        data: {
            entity_id:89,
            entity_type:'city',
<<<<<<< Updated upstream
            cuisines:247,
            
        }
    }).then( function (result) {
        console.log(result);
        console.log('hi');
=======
            lat: 43.6483,
            lon: -79.3979,
            cuisines: cuisineId,
            count:5,
            sort: 'real_distance',
            }
    }).then( function (result) {
        console.log(result);
        teaApp.getRestaurant(result);
            
        });
>>>>>>> Stashed changes
    
    // }).catch(function(error){
    //     console.log(error);
        
    }
    
<<<<<<< Updated upstream
}


$(document).ready(function(){
    teaApp.getTea()
})
=======

teaApp.getRestaurant = function(result){
    console.log(result.restaurants);

    result.restaurants.forEach(function(cafe){
        
        const htmlToPost = `<div class ="cafe">
        <h2>Name: ${cafe.restaurant.name}</h2>
        <p>Bogo offers available? ${cafe.restaurant.include_bogo_offers}</p>
        <p>${cafe.restaurant.user_rating.rating_text}</p>
        <p>${cafe.restaurant.user_rating.aggregate_rating}</p>
        <p>${cafe.restaurant.average_cost_for_two}</p>
        </div>`;

        $('#choices').append(htmlToPost);
        
        console.log(result);
        
        console.log('bogo:', result.restaurants.include_bogo_offers);
        console.log('name', result.restaurants.name);
        console.log('rating', result.restaurants.user_rating.rating_text);
        console.log('aggregate-rating', result.restaurants.user_rating.aggregate_rating);
        console.log('cost-for-two', result.restaurant.average_cost_for_two);
        
    })
}

$(document).ready(function(){
    // for(let i =0; i < 100; i=i+20){
    //     teaApp.getTea(i);
    // };

    // teaApp.getTea(247);
    // teaApp.getTea(73);
    // teaApp.getTea(411);
    // teaApp.getTea(320);

    $('form').on('submit', function (e) {
        e.preventDefault();

        const foodChoice = $('input[name=food]:checked').val();
        console.log(foodChoice);
        
        teaApp.getTea(foodChoice);
    });
})



>>>>>>> Stashed changes
