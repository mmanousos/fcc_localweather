$(document).ready(function() { // wait for page to load
    function loadWeather(weatherObject) {
        $("#temp").html("" + weatherObject.tempDisplayC + "");
        switch (weatherObject.weatherDisplay) {
            case "Clear": if (weatherObject.tempDisplayC < 10)  {
                    $('#body').addClass("cold");  
                    $('#weather').addClass("bright");
                } else if (weatherObject.tempDisplayC < 15) {
                    $('#body').addClass("cool");  
                    $('#weather').addClass("bright");
                } else if (weatherObject.tempDisplayC < 26) {
                    $('#body').addClass("tepid");   
                    $('.title, .credit, a, #weather').addClass("brighter");
                } else if (weatherObject.tempDisplayC < 32) {
                    $('#body').addClass("warm");     
                    $('#weather').addClass("brighter");
                } else if (weatherObject.tempDisplayC < 37) {
                    $('#body').addClass("hot");     
                } else   {
                    $('#body').addClass("scorching");
                    $('#weather').addClass("bright");
                };
                break;
            case "Rain": 
                $('#body').addClass("rainy");
                $('.main, #weather').addClass("bright");
                break;
            case "Overcast": 
                $('#body').addClass("overcast");
                $('.main, #weather').addClass("bright");
                break;
            case "Partly Cloudy": 
                $('#body').addClass("partly-cloudy");
                $('#weather').addClass("brighter");
                break;  
            case "Cloudy": 
                $('#body').addClass("cloudy");
                $('#weather').addClass("brighter");
                break;  
            }; 
        $("#weather").html("" + weatherObject.weatherDisplay + "");
        $("#forecast-icon").attr("src",  weatherObject.iconDisplay);
    }

    // autodetects location based on IP address
       var url = "https://cors-anywhere.herokuapp.com/http://api.wunderground.com/api/4dd3c502d6164004/conditions/astronomy/forecast/hourly/q/autoip.json"; // my key 4dd3c502d6164004 */
    
    
    function getWeather() {
        $.getJSON(url, function(data) {
            
            var iconVal = data.current_observation.icon_url;
            var tempValC = data.current_observation.temp_c;
            var tempValF = data.current_observation.temp_f;
            var weatherVal = data.current_observation.weather;
            
            var weatherObject = {
                iconDisplay: iconVal, 
                tempDisplayC: tempValC,  
                tempDisplayF: tempValF,
                weatherDisplay: weatherVal
            }; 
        
        console.log(weatherObject);
        loadWeather(weatherObject);
        toggleButton(weatherObject);
        });
    }
    getWeather();  
    
    // functionality of "Convert" button
    function toggleButton(weatherObject) {
        $("#convert").on("click", function() {
            if ($(this).is(".f-toggle")) {
                $("#temp-id").html("Fahrenheit");
                $("#temp").html("" + weatherObject.tempDisplayF + "");
                $("#convert").html("Convert to Celsius")
                $("#convert").addClass("c-toggle").removeClass("f-toggle");  
            } else {
                $("#temp-id").html("Celsius");
                $("#temp").html("" + weatherObject.tempDisplayC + "");
                $("#convert").html("Convert to Fahrenheit")
                $("#convert").addClass("f-toggle").removeClass("c-toggle");
            }
        });  
    };   
    
}); 



    
  /* only use if not autochecking location based on IP address 
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var log = position.coords.longitude;
            var locationObject = {
                latCur: lat, 
                logCur: log
            }
            console.log(locationObject);
            return (locationObject);
        }); 
    };
    */ 


// requires approval of location data
  /*  var url="https://cors-anywhere.herokuapp.com/http://api.wunderground.com/api/4dd3c502d6164004/conditions/astronomy/forecast/hourly/q/"; */

// I would prefer to use browser's precise location but I'm not sure how to use the lat and long pulled using geolocation and pass it into the API pull. 
    // for now use autoip and code for Celsius / Fahrenheit switch and new background images. 



  /*
    json = json.filter(function(locationObject) {
        return data.current_observation.latitude === latCur  
            });
    json = json.filter(function(locationObject) {
        return data.current_observation.longitude === logCur 
            });      
    console.log(data.current_observation.full);
    */
    
  
//example to filter objects in json
 /* function find_in_object(my_object, my_criteria){

  return my_object.filter(function(obj) {
    return Object.keys(my_criteria).every(function(c) {
      return obj[c] == my_criteria[c];
    });
  });

}
*/


         //filter data based on current location
     /*     var sortByLat = function(data, locationObject) {
              return json.filter(function(obj) {
                  return Object.keys(locationObject.curLat).every(function(c) {
                      return obj[c] == locationObject.curLat[c];
                  })
              }); console.log(json.current_observation.display_location.city); 
          } */

/* var jsonLat = json.current_observation.display_location.latitude;
var jsonLog = json.current_observation.display_location.longitude;
                
           let jsonSort = Array.prototype.filter(function(data, locationObject) {
        return jsonLat === latCur  
            });
        jsonSort = Array.prototype.filter(function(locationObject) {
        return jsonLog === logCur 
            });      */