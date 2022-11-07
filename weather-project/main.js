// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


const apiKey = "4d8fb5b93d4af21d66a2948710284366";

let weather = {
  apiKey,
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText =
      "The Current Weather in " + name + " is ";
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "℃";
  
    document.querySelector(".weather").classList.remove("loading");
    
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

// search

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Washington DC");
