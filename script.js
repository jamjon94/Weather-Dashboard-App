console.log("Lexa deserved better");

$(document).ready(function () {
  // VARIABLES
  var currentsWeather = $("#current-weather");
  var day1 = moment().add(1, "days").calendar();
  var day2 = moment().add(2, "days").calendar();
  console.log(day1);
  console.log(day2);
  // ARRAY

  // MOMENTJS

  dayDate = moment().format("MMM Do, YYYY");
  console.log(dayDate);

  // AJAX
  var cityInfo = $("city-info");

  var cityInput = $("#search-input");

  var APIKey = "73fcefd7f234ef273afab158599dbe69";

  $("#search-button").on("click", function () {
    $(".icon").empty();
    console.log("you searched for me");
    console.log(cityInput.val());

    var cityWeather = cityInput.val().toLowerCase();
    console.log(cityWeather);

    // CURRENT DAY WEATHER AJAX
    $.ajax({
      url:
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        cityWeather +
        "&appid=" +
        APIKey +
        "&units=imperial",
      method: "GET",
    }).then(function (response) {
      console.log(response);
      // $("#current-weather").append(response.namedayDate);
      $("#city-info").text(response.name + " " + "(" + dayDate + ")");
      $("#temp").text("Temperature: " + response.main.temp + "℉");
      $("#humidity").text("Humidity: " + response.main.humidity + "%");
      $("#wind-speed").text("Wind Speed: " + response.wind.speed + " MPH");

      var lat = response.coord.lat;
      var lon = response.coord.lon;

      $.ajax({
        url:
          "https://api.openweathermap.org/data/2.5/uvi?appid=" +
          APIKey +
          "&lat=" +
          lat +
          "&lon=" +
          lon,
      }).then(function (response) {
        console.log(response);

        $("#uv-index").text("UV Index: " + response.value);
        if (response.value < 5) {
          $("#uv-index").addClass("yellow-uv");
        } else if (response.value >= 5 && response.value <= 8) {
          $("#uv-index").addClass("orange-uv");
        } else $("#uv-index").addClass("red-uv");
      });
    });
    // 5 DAY WEATHER FORECAST AJAX
    $.ajax({
      url:
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        cityWeather +
        "&appid=" +
        APIKey +
        "&units=imperial",
    }).then(function (response) {
      console.log(response);
      $("#uv-index").text("UV Index: ");

      // DAY 1
      $(".card-date").text(response.list[4].dt_txt);
      $(".card-icon-1").append(
        $("<img>").attr(
          "src",
          "http://openweathermap.org/img/wn/" +
            response.list[4].weather[0].icon +
            "@2x.png"
        )
      );
      $(".card-temp-1").text("Temp: " + response.list[4].main.temp + " ℉");
      $(".card-humidity-1").text(
        "Humidity: " + response.list[4].main.humidity + "%"
      );

      // DAY 2
      $(".card-date").text(response.list[12].dt_txt);
      $(".card-icon-2").append(
        $("<img>").attr(
          "src",
          "http://openweathermap.org/img/wn/" +
            response.list[12].weather[0].icon +
            "@2x.png"
        )
      );
      $(".card-temp-2").text("Temp: " + response.list[12].main.temp + " ℉");
      $(".card-humidity-2").text(
        "Humidity: " + response.list[12].main.humidity + "%"
      );

      // DAY 3
      $(".card-date").text(response.list[20].dt_txt);
      $(".card-icon-3").append(
        $("<img>").attr(
          "src",
          "http://openweathermap.org/img/wn/" +
            response.list[20].weather[0].icon +
            "@2x.png"
        )
      );
      $(".card-temp-3").text("Temp: " + response.list[20].main.temp + " ℉");
      $(".card-humidity-3").text(
        "Humidity: " + response.list[20].main.humidity + "%"
      );

      // DAY 4
      $(".card-date").text(response.list[28].dt_txt);
      $(".card-icon-4").append(
        $("<img>").attr(
          "src",
          "http://openweathermap.org/img/wn/" +
            response.list[28].weather[0].icon +
            "@2x.png"
        )
      );
      $(".card-temp-4").text("Temp: " + response.list[28].main.temp + " ℉");
      $(".card-humidity-4").text(
        "Humidity: " + response.list[28].main.humidity + "%"
      );

      // DAY 5
      $(".card-date").text(response.list[36].dt_txt);
      $(".card-icon-5").append(
        $("<img>").attr(
          "src",
          "http://openweathermap.org/img/wn/" +
            response.list[36].weather[0].icon +
            "@2x.png"
        )
      );
      $(".card-temp-5").text("Temp: " + response.list[36].main.temp + " ℉");
      $(".card-humidity-5").text(
        "Humidity: " + response.list[36].main.humidity + "%"
      );
    });
  });
  // LOCAL STORAGE
  // $(".btn").on("click", function () {
  //   var saveCity = $(this).attr("city-input");
  //   console.log(saveCity);

  //   localStorage.setItem(saveCity, );
  // });
});