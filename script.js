const teaApp = {} ;

teaApp.baseURL = `https://developers.zomato.com/api/v2.1/search`;
teaApp.apiKey = `ab555e02f8cc7344c070a66a218852f7`;


teaApp.getTea = function (cuisineId, number, type) {

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
            lat: 43.6483,
            lon: -79.3979,
            cuisines: cuisineId,
            count: number,

            sort: type,         
        }
    }).then( function (result) {
        console.log(result);
        teaApp.getRestaurant(result);
    })


teaApp.getRestaurant = function(result){
    console.log(result.restaurants);

    result.restaurants.forEach(function(cafe){

        console.log('bogo:', cafe.restaurant.include_bogo_offers);
        console.log('name:', cafe.restaurant.name);
        console.log('rating:', cafe.restaurant.user_rating.rating_text);
        console.log('aggregate-rating', cafe.restaurant.user_rating.aggregate_rating);
        console.log('cost-for-two:', cafe.restaurant.average_cost_for_two);

        


        if (cafe.restaurant.thumb) {
            const foodHtml = `
            <p>Name: ${cafe.restaurant.name}</p>
            <p>Rating: ${cafe.restaurant.user_rating.aggregate_rating}</p>
            <p>Cost for two: ${cafe.restaurant.average_cost_for_two}</p>
            <p>Address: ${cafe.restaurant.location.address}</p>
            <img src =${cafe.restaurant.thumb}>`
                $('.container').append(foodHtml);
        }
    
    
    })

}


$(document).ready(function(){



    $('form').on('submit', function(e){
        e.preventDefault();

        $('.container').empty();
        const foodChoice = $(`input[name=food]:checked`).val();
        const countChoice = $(`input[name=count]:checked`).val();
        const sortChoice = $(`input[name=sort]:checked`).val();
        console.log(foodChoice);
        console.log(countChoice);

        teaApp.getTea(foodChoice, countChoice, sortChoice);

        $('.container').empty();
        teaApp.getTea(foodChoice);
    });
})


