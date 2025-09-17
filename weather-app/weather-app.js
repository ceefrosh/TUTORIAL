const apiKey = '570827c0b7e0878473bd9e45716b6848'; // OpenWeatherMap API key

document.getElementById('weather-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const city = document.getElementById('city').value;
    fetchWeather(city);
});

async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod !== '200') {
            throw new Error(data.message);
        }
        displayWeather(data);
    } catch (error) {
        document.getElementById('weather-display').innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

function displayWeather(data) {
    const display = document.getElementById('weather-display');
    display.innerHTML = `<h2>Weather in ${data.city.name}</h2>`;
    // Group forecasts by day (simplified to first entry per day)
    const daily = {};
    data.list.forEach(item => {
        const date = new Date(item.dt * 1000).toDateString();
        if (!daily[date]) {
            daily[date] = item;
        }
    });
    // Display up to 5 days
    Object.keys(daily).slice(0, 5).forEach(date => {
        const item = daily[date];
        const temp = item.main.temp;
        const desc = item.weather[0].description;
        const icon = item.weather[0].icon;
        display.innerHTML += `
            <div class="weather-day">
                <h3>${date}</h3>
                <img src="http://openweathermap.org/img/wn/${icon}.png" alt="${desc}">
                <p>${desc}</p>
                <p>Temperature: ${temp}°C</p>
            </div>
        `;
    });
}
