const apiKey = "d485c800abc344e902534f0f6c9db24e";

const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");
const weatherInfo = document.getElementById("weather-info");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();

    if (city === "") {
        weatherInfo.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    getWeather(city);
});

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            console.log(response); // <--- Check this in browser console
            return response.json();
        })
        .then(data => {
            console.log(data); // <--- Check this in browser console
            if (data.cod === "404") {
                weatherInfo.innerHTML = "<p>City not found.</p>";
                return;
            }

            displayWeather(data);
        })
        .catch(error => {
            console.error(error); // <--- See exact error
            weatherInfo.innerHTML = "<p>Error fetching data.</p>";
        });
}

function displayWeather(data) {
    const temperature = data.main.temp;
    const cityName = data.name;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    weatherInfo.innerHTML = `
        <h3>${cityName}</h3>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon">
        <p>${temperature}°C</p>
        <p>${description}</p>
    `;
}
