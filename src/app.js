thermostat = new Thermostat();

$(document).ready(function() {

  var updateTemp = function() {
    $("#temperature").show(function() {
      temperature.innerHTML = thermostat.temperature;
      thermostat.setColour();
      temperature.style.color = thermostat.colour;
    });
  };

  $("#weather_api").show(function() {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London,UK&units=metric",function(result){
        weather_api.innerHTML = result.weather[0].description+": "+result.main.temp+"&#8451";
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
  //
  // $("#up").mouseenter(function() {
  //   $(this).animate({
  //     height: "+=20px"
  //   });
  // });
  //
  // $("#up").mouseleave(function() {
  //   $(this).animate({
  //     height: "-=20px"
  //   });
  // });
  //
  // $("#down").mouseenter(function() {
  //   $(this).animate({
  //     height: "+=20px"
  //   });
  // });
  //
  // $("#down").mouseleave(function() {
  //   $(this).animate({
  //     height: "-=20px"
  //   });
  // });
  //
  //
  // $("#up").mouseenter(function() {
  //   $(this).animate({
  //     width: "+=20px"
  //   });
  // });
  //
  // $("#up").mouseleave(function() {
  //   $(this).animate({
  //     width: "-=20px"
  //   });
  // });
  //
  // $("#down").mouseenter(function() {
  //   $(this).animate({
  //     width: "+=20px"
  //   });
  // });
  //
  // $("#down").mouseleave(function() {
  //   $(this).animate({
  //     width: "-=20px"
  //   });
  // });

});
