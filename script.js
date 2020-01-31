$(document).ready(function() {

var city = $(".form-control")
var loc;
var cityDiv;

$("#button-addon2").on("click", function () {
    loc = $(".city-input").val().trim()
    Weather(loc)
})


// ajax call for response data
function Weather(loc) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?units=Imperial&q=" + loc + ",us&appid=fc45e0cbf8b1460f4e4b7e449cb74df5";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)});
    }

        // function listCity() {

        // var cityName = $(display-3 text-center)
        // var icon = $(response.weather.icon) 
        // var cityTemp = $(response.main.temp)
        // var Humidty = $(response.main.humidity)
        // var wind = $(response.wind.speed)
        //             $(".current-weather").html(cityName, icon, cityTemp, Humidty, wind)

        // }
        // listCity()
                
                                ;
//   function fiveDay(city) {
//     var queryURL = "https://api.openweathermap.org/data/2.5/weather?units=Imperial&q=" + city + ","
//   forecast = `<div>
//                     <day 1>`

// }
                    });


