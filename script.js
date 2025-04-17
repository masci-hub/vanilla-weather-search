function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function displayWeather(response) {
  let currentTemperatureValue = document.querySelector(
    "#current-temperature-value"
  );
  let currentTemperature = Math.round(response.data.temperature.current);
  let currentCityElement = document.querySelector("#current-city");
  let currentCity = response.data.city;
  let currentConditionElement = document.querySelector("#current-condition");
  let currentCondition = response.data.condition.description;
  let currentHumidityElement = document.querySelector("#current-humidity");
  let currentHumidity = response.data.temperature.humidity;
  let currentWindElement = document.querySelector("#current-wind");
  let currentWind = response.data.wind.speed;
  let currentDateElement = document.querySelector("#current-date");
  let currentDate = new Date(response.data.time * 1000);

  currentDateElement.innerHTML = formatDate(currentDate);
  currentWindElement.innerHTML = `${currentWind}km/h`;
  currentHumidityElement.innerHTML = `${currentHumidity}%`;
  currentConditionElement.innerHTML = currentCondition;
  currentCityElement.innerHTML = currentCity;
  currentTemperatureValue.innerHTML = currentTemperature;
}

function searchCity(city) {
  let apiKey = "733615547b11515efo464ab9111t0c1b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  searchCity(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearch);

searchCity("Paris");
