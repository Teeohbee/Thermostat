thermostat = new Thermostat();

$(document).ready(function() {

  var updateTemp = function() {
    $("#temperature").show(function() {
      var temp_loc = $("#temperature")
      temp_loc.html(thermostat.temperature);
      thermostat.setColour();
      temperature.style.color = thermostat.colour;
    });
  };

  $("#city_submit").click(function() {
    var city = $("#city").val();
    $.getJSON(("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric"),function(result){
        $("#weather_api").html(result.weather[0].description+": "+result.main.temp+"&#8451");
    });
  });

  // $.ajax({
  //   dataType: "json",
  //   url: "http://api.openweathermap.org/data/2.5/weather",
  //   data: "q=London,UK&units=metric",
  //   success: function(result) {
  //     weather_api.innerHTML = result.weather[0].description + ": " + result.main.temp + "&#8451";
  //   }
  // });

  $("#temperature").show(function() {
    updateTemp();
  });

  $("#up").click(function() {
    thermostat.up();
    updateTemp();
  });

  $("#down").click(function() {
    thermostat.down();
    updateTemp();
  });

  $("#reset").click(function() {
    thermostat.reset();
    updateTemp();
  });

  $("#powersavingmode").change(function() {
    if (thermostat.powerSavingMode === true) {
      thermostat.powerSaverOff();
    } else {
      thermostat.powerSaverOn();
    }
  });

});
