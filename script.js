$(document).ready(function() { // wait for page to load

    function loadWeather(weatherObject) {
        $("#temp").html("" + weatherObject.tempDisplay + "");
        $("#weather").html("" + weatherObject.weatherDisplay + "");
        $("#forecast-icon").attr("src",  weatherObject.iconDisplay);
        // <img src="">
        
    }
    
    
    function getWeather() {
        // var url = "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139";
        // var url = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139";
        var url = "https://cors-anywhere.herokuapp.com/http://api.wunderground.com/api/4dd3c502d6164004/conditions/q/CA/San_Francisco.json"; // key 4dd3c502d6164004
        $.getJSON(url, function(data) {
            // var iconVal = data.weather[0].icon; 
            var iconVal = data.current_observation.icon_url;
            var tempVal = data.current_observation.temp_c; 
            var weatherVal = data.current_observation.weather; 
            // var weatherVal = data.weather[0].main;
            // var descriptionVal = data.weather[0].description;
        

        var weatherObject = {
            iconDisplay: iconVal, 
            tempDisplay: tempVal,
            weatherDisplay: weatherVal,
           // descriptionDisplay: DescriptionVal
        };
        console.log(weatherObject);
        loadWeather(weatherObject);
        });
    }
    getWeather();    
}); 