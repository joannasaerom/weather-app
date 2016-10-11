exports.weatherModule = Weather;

function Weather() {

}

Weather.prototype.convertToF = function(kelvin){
  var fahrenheit = parseInt(kelvin * (9/5) - 459.67);
  return fahrenheit;
};

Weather.prototype.convertToC = function(kelvin){
  var celsius = parseInt(kelvin - 273.15);
  return celsius;
};
