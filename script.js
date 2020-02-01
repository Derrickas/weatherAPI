$(document).ready(function() {

var city = $(".form-control")
var loc;
var cityWeather = $('#cityWeather')


$("#button-addon2").on("click", function () {
    loc = $(".city-input").val().trim()
    Weather(loc)
})


// ajax call for response data
function Weather(loc) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?units=Imperial&q=" + loc + ",us&appid=fc45e0cbf8b1460f4e4b7e449cb74df5";
  
    //         var icon = $("#icon").html('<img src="response.weather.icon"').append(icon) 
    //         var cityTemp = $("#temp").text(response.main.temp).append(cityTemp)
    //         var humidity = $("#humidity").text(response.main.humidity).append(humidity)
    //         var wind = $("#wind").text(response.wind.speed).append(wind)
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
       console.log(response)
        
      
        $('#wind').append('<li>Wind Speed:</li>' + response.wind.speed)
        $('#humidity').append('<li>Humidity:</li>' + response.main.humidity)
        $('#temp').append('<li>Temperature:</li>' + response.main.temp)
        $('#icon').html('<img src="response.weather.icon">')
        $('#cityWeather').prepend(response.name)
        
    
    })};
       
    
    });
    
    


// })}
// });
                    // $(".current-weather").html(cityName, icon, cityTemp, ,wind)

                
                                ;
//   function fiveDay(city) {
//     var queryURL = "https://api.openweathermap.org/data/2.5/weather?units=Imperial&q=" + city + ","
//   forecast = `<div>
//                     <day 1>`