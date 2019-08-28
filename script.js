const teaApp = {} ;

teaApp.baseURL = `https://developers.zomato.com/api/v2.1/search`;
teaApp.apiKey = `ab555e02f8cc7344c070a66a218852f7`;

teaApp.getTea = function () {
    console.log('hello');
    
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
            cuisines:247,
            
        }
    }).then( function (result) {
        console.log(result);
        console.log('hi');
    
    }).catch(function(error){
        console.log(error);
        
    });
    
}


$(document).ready(function(){
    teaApp.getTea()
})
