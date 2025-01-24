
const currentyear = document.querySelector("#currentyear");

const today = new Date();
currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

const url = "./data/members.json";

async function getBusinessInfo() {
    const response = await fetch(url);
    const info = await response.json();

    displayBusinessCards(info.members);
}

getBusinessInfo();

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
})

const displayBusinessCards = (members) => {
    for (let i = 0; i < 3; i++) {
            let rand = Math.floor(Math.random()*members.length);
            let randomCompany = members[rand];
            if (randomCompany.membershiplevel == 2 || randomCompany.membershiplevel == 3){
                companySpotlights.innerHTML += `<section>
                <h1>${randomCompany.companyname}</h1>
                <img src = ${randomCompany.iconfilename} alt = "${randomCompany.companyname} Icon" loading = lazy width = "300" height = "150">
                <h2>${randomCompany.companyaddress}</h2>
                <p>${randomCompany.companyphonenumber}</p>
                <a href = "${randomCompany.websiteurl}">${randomCompany.websiteurl}</a>
                <p>Membership Level: ${randomCompany.membershiplevel}</p>
                </section>`
            }
        }
    };

// weather API

const currentTemp = document.querySelector("#currentTemp");
const weatherIcon = document.querySelector("#weatherIcon");
const conditions = document.querySelector("#conditions");
const highTemp = document.querySelector("#highTemp");
const lowTemp = document.querySelector("#lowTemp");
const humidity = document.querySelector("#humidity");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");

const todayTemp = document.querySelector("#todayTemp");
const tomorrow = document.querySelector("#tomorrow");
const tomorrowTemp = document.querySelector("#tomorrowTemp");
const nextDay = document.querySelector("#nextDay");
const nextDayTemp = document.querySelector("#nextDayTemp");

const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=32.77&lon=-96.80&appid=f8bd91cacc8885383b25d9f973108e65&units=imperial";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=32.77&lon=-96.80&appid=f8bd91cacc8885383b25d9f973108e65&units=imperial";

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok && url == weatherUrl) {
            const data = await response.json();
            console.log(data);
            displayWeather(data);
        } else if (response.ok && url == forecastUrl){
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error);
    }
}



apiFetch(weatherUrl);
apiFetch(forecastUrl);

function displayWeather(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", data.weather[0].description);
    conditions.innerHTML = `${data.weather[0].description}`;
    highTemp.innerHTML = `${data.main.temp_max}&deg`;
    lowTemp.innerHTML = `${data.main.temp_min}&deg`;
    humidity.innerHTML = `${data.main.humidity}`;
    sunrise.innerHTML = `${data.sys.sunrise}`;
    sunset.innerHTML = `${data.sys.sunset}`;
}

function displayForecast(data) {
    const day = new Date();

    //get the index for tommorow's date
    const tommorow = new Date(day);
    tommorow.setDate(day.getDate() + 1);
    const tommorowIndex = tommorow.getDay();

    //get the index for the day after tomorrow
    const afterTomorrow = new Date(tommorow);
    afterTomorrow.setDate(tommorow.getDate() + 1);
    const afterTomorrowIndex = afterTomorrow.getDay();

    //array of days of the week
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    todayTemp.innerHTML = `${data.list[0].main.temp}&deg;F`;
    tomorrow.innerHTML = weekDays[tommorowIndex];
    tomorrowTemp.innerHTML = `${data.list[8].main.temp}&deg;F`;
    nextDay.innerHTML = weekDays[afterTomorrowIndex];
    nextDayTemp.innerHTML = `${data.list[16].main.temp}&deg;F`;
}