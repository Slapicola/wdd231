const currentyear = document.querySelector("#currentyear");

const today = new Date();
currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;


const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
})

document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".nav-item");

    const activeTab = localStorage.getItem("activeTab");
    if (activeTab) {
        const activeElement = document.querySelector(`.nav-item[data-tab="${activeTab}"]`);
        if (activeElement) {
            activeElement.classList.add("active");
        }
    }
    
    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            tabs.forEach(navTab => navTab.classList.remove("active"));
            this.classList.add("active");

            const tabId = this.getAttribute("data-tab");
            localStorage.setItem("activeTab", tabId);
        });
    });
});

const cardArea = document.querySelector(".cardArea");
const url = "./data/areas.json";

async function getAreaInfo() {
    const response = await fetch(url);
    const info = await response.json();

    createInterestAreaCard(info.areas);
}

getAreaInfo();


function createInterestAreaCard(areas) {
    areas.forEach((area) => {
        cardArea.innerHTML += `
        <section>
        <h2>${area.areaname}</h2>
        <figure>
            <img src = ${area.imageurl} alt = "${area.areaname}" loading = lazy width = "300" height = "200">
        </figure>
        <address>Location: ${area.areaaddress}</address>
        <p>${area.areadescription}</p>
        <button id = "learnMoreButton">Learn More</button>
        </section>`
    });
}


// day last visited
const visitedArea = document.querySelector(".lastVisited");
const currentVisit = new Date();

let lastVisitString = localStorage.getItem("lastVisit");
if (lastVisitString) {
    let lastVisit = new Date(lastVisitString);
    
    let timeSinceLastVisit = currentVisit - lastVisit;
    
    let timeSinceInDays = Math.floor(timeSinceLastVisit / (1000 * 60 * 60 * 24));
    
    if (timeSinceInDays > 1) {
        let numDays = timeSinceInDays;
        visitedArea.textContent = `You last visited ${numDays} days ago.`;
    } else if (timeSinceInDays === 1) {
        visitedArea.textContent = `You last visited ${numDays} day ago.`;
    } else {
        visitedArea.textContent = "Back so soon! Awesome!";
    }
} else {
    visitedArea.textContent = "Welcome! Let us know if you have any questions.";
}

localStorage.setItem("lastVisit", currentVisit.toISOString());
