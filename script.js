const teaApp = {} ;

teaApp.baseURL = `https://developers.zomato.com/api/v2.1/search`;
teaApp.apiKey = `ab555e02f8cc7344c070a66a218852f7`;



teaApp.getTea = function (cuisineId, number){
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
            sort: 'real_distance',
            }
    }).then( function (result) {
        console.log(result);
        teaApp.getRestaurant(result);
            
        });
    
    // }).catch(function(error){
    //     console.log(error);
        
    }
    

teaApp.getRestaurant = function(result){
    console.log(result.restaurants);
    result.restaurants.forEach(function(cafe){
        
        const htmlToPost = `
        <h2>Name: ${cafe.restaurant.name}</h2>
        
        <p>${cafe.restaurant.user_rating.rating_text}</p>
        <p>${cafe.restaurant.user_rating.aggregate_rating}</p>
        <p>${cafe.restaurant.average_cost_for_two}</p>
        <img src=${cafe.restaurant.thumb}>`;

        $('.container').append(htmlToPost);
        
        console.log(result);
    })


}


$(document).ready(function(){
    // for(let i =0; i < 100; i=i+20){
    //     teaApp.getTea(i);
    // }
    // teaApp.getTea();
    // teaApp.getTea(73);
    // teaApp.getTea(411);
    // teaApp.getTea(320);



    $('form').on('submit', function(e){
        e.preventDefault();
        const foodChoice = $(`input[name=food]:checked`).val();
        console.log(foodChoice);

        teaApp.getTea(foodChoice);

        $('.container').empty();
        teaApp.getTea(foodChoice);
    });
})


