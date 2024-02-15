// API key for OpenWeatherMap.
const apiKey = '7aba051dca9dcd051cd63cb864d22999';

// Function to get weather information
async function getWeather(location) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
        const data = await response.json();

        if (response.ok) {
            displayWeather(data);
        } else {
            displayError(data.message);
        }
    } catch (error) {
        displayError('An error occurred while fetching the weather.');
    }
}

// Function to display weather information
function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>${data.weather[0].description}</p>
        <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

// Function to display error message
function displayError(message) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `<p class="error">${message}</p>`;
}

// Event listener for the "Get Weather" button
document.getElementById('getWeatherBtn').addEventListener('click', () => {
    const locationInput = document.getElementById('location');
    const location = locationInput.value.trim();

    if (location !== '') {
        getWeather(location);
    } else {
        displayError('Please enter a location.');
    }
});
