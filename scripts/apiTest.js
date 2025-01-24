const currentTemp = document.querySelector("#current-temp");
const weatherMap = document.querySelector("#weather-icon");
const mapCaption = document.querySelector("figcaption");

const url = "//api.openweathermap.org/data/2.5/weather?lat=49.77&lon=6.64&appid=f8bd91cacc8885383b25d9f973108e65&units=imperial";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherMap.setAttribute("src", iconsrc);
    weatherMap.setAttribute("alt", desc);
    mapCaption.textContent = `${desc}`;
}