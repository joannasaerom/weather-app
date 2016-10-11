var Weather = require('./../js/weather.js').weatherModule;

var apiKey = "532354385b64b7b961b27c505a6176cf";


$(document).ready(function(){
  var kelvinTemperature;
  var newWeather = new Weather();

  $('#weatherLocation').click(function(){
    var city = $('#location').val();
    $('#location').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%.");
      kelvinTemperature = response.main.temp;
      console.log(response);
    });
  });
  $("#convertF").click(function(){
    newWeather.convertToF(kelvinTemperature);
    $("#fahrenheit").text(newWeather.convertToF(kelvinTemperature) + " fahrenheit");
  });

  $("#convertC").click(function(){
    newWeather.convertToF(kelvinTemperature);
    $("#celsius").text(newWeather.convertToC(kelvinTemperature) + " celcius");
  });


});
