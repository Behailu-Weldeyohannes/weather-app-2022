const navMove = () => {
  const bar = document.querySelector(".bar-mobile");
  const navigation = document.querySelector(".menu-items");
  const navLinks = document.querySelectorAll(".menu-items li");

  bar.addEventListener("click", function () {
    navigation.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.getElementsByClassName.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    bar.classList.toggle("toggle");
  });
};

navMove();

//Local time

setInterval(function () {
  const currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let period = "AM";
  if (hours >= 12) {
    period = "PM";
  }
  if (hours > 12) {
    hours = hours - 12;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  const clockTime = hours + ":" + minutes + ":" + seconds + "" + period;

  const clock = document.getElementById("clock");
  clock.innerText = clockTime;
}, 1000);

//add date

const dateContainer = document.querySelector(".date");
function getDate(date) {
  const myMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return ` ${
    myMonths[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
}

setInterval(() => {
  const now = new Date();

  dateContainer.textContent = getDate(now);
}, 200);

//end date

// get weather

let getWeather = {
  apiKey: "a31fe52fd9aa64cfef2826a57414056f",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        // "&units=metric&appid=" +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response) {
          alert("Something went wrong");
        }
        return response.json();
      })
      .then((output) => this.displayData(output));
  },

  displayData: function (output) {
    const city = output.name;
    const country = output.sys.country;
    const { description, id } = output.weather[0];
    const { speed } = output.wind;
    const { temp, feels_like, humidity, temp_min, temp_max } = output.main;
    //
    //
    document.querySelector(".head-description").innerText = description;
    document.querySelector(".head-temp").innerText = Math.floor(temp) + "°";

    document.querySelector(".head-description").innerText = description;
    document.querySelector(".humidity").innerText = `${humidity}%`;
    document.getElementById("humidity").innerText = "Humidity";
    document.querySelector(".feels").innerText = Math.floor(feels_like) + "°";
    document.getElementById("feels").innerText = "Feels Like";
    document.querySelector(".high-temp").innerText = Math.floor(temp_max) + "°";
    document.getElementById("label-high").innerText = "High";

    document.querySelector(".min-temp").innerText = Math.floor(temp_min) + "°";
    document.getElementById("label-low").innerText = "Low";
    document.querySelector(".wind").innerText = `${Math.floor(speed)} mph`;
    document.getElementById("wind").innerText = "Wind";
    const bodySearch = document.querySelector(".wrapper-container");
    bodySearch.style.backgroundImage =
      "url('https://source.unsplash.com/1800x900/?" + city + "')";
    const icon = document.querySelector("img.icon-container");

    if (id == 800) {
      icon.src = "./assets/gif/sun.gif";
    } else if (id >= 200 && id <= 232) {
      icon.src = "./assets/gif/storm.gif";
    } else if (id >= 600 && id <= 622) {
      icon.src = "./assets/gif/snow.gif";
    } else if (id >= 701 && id <= 781) {
      icon.src = "./assets/gif/wind.gif";
    } else if (id >= 801 && id <= 804) {
      icon.src = "./assets/gif/clouds.gif";
    } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
      icon.src = "./assets/gif/rain.gif";
    }

    document.querySelector(
      ".location-container"
    ).innerText = `${city}, ${country}`;
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};
document.querySelector(".search button").addEventListener("click", function () {
  getWeather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      getWeather.search();
    }
  });
