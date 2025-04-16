function showTemperature(response) {
  let currentTemperatureValue = document.querySelector(
    "#current-temperature-value"
  );
  let currentTemperature = Math.round(response.data.temperature.current);
  let currentCityElement = document.querySelector("#current-city");
  let currentCity = response.data.city;
  currentCityElement.innerHTML = currentCity;
  currentTemperatureValue.innerHTML = currentTemperature;
}

function searchCity(city) {
  let apiKey = "733615547b11515efo464ab9111t0c1b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  searchCity(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearch);

searchCity("Paris");
