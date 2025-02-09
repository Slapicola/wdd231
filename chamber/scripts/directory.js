const currentyear = document.querySelector("#currentyear");

const today = new Date();
currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

const url = "./data/members.json";
const businessCards = document.querySelector("#businessCards");

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

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {
    businessCards.classList.add("grid");
    businessCards.classList.remove("list");
});

listButton.addEventListener("click", () => {
    businessCards.classList.add("list");
    businessCards.classList.remove("grid");
});

const displayBusinessCards = (members) => {
    members.forEach((member) => {
        businessCards.innerHTML += `<section>
        <img src = ${member.iconfilename} alt = "${member.companyname} Icon" loading = lazy width = "300" height = "150">
        <h1>${member.companyname}</h1>
        <h2>${member.companyaddress}</h2>
        <p>${member.companyphonenumber}</p>
        <a href = "${member.websiteurl}">${member.websiteurl}</a>
        </section>`
    });
}