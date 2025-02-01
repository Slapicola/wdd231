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

const membershipArea = document.querySelector(".membershipLevels");

displayMembershipCard("NP");
displayMembershipCard("Bronze");
displayMembershipCard("Silver");
displayMembershipCard("Gold");

function displayMembershipCard(level) {
    membershipArea.innerHTML += `<div id=${level}>
    <p>${level} Membership Level</p>
    <button id=${level}Button>Learn More</button>
    </div>`
}

// const loadDate = newDate();

// let currentDate = document.getElementById("timeStamp").value = loadDate.toDateString();

const dialog = document.querySelector("dialog");
const openButton = document.querySelector("#Button");
const closeButton = document.querySelector("#close");


NPButton.addEventListener("click", () => {
    displayMembershipLevelInput("NP");
    benefits.innerHTML = `
    <h3>Benefits:</h3>
    <ul>
        <li>Training</li>
        <li>5% Event discount</li>
    </ul>
    `;
    dialog.showModal();
})

BronzeButton.addEventListener("click", () => {
    displayMembershipLevelInput("Bronze");
    benefits.innerHTML = `
    <h3>Benefits:</h3>
    <ul>
        <li>Training</li>
        <li>10% Event discount</li>
    </ul>
    `;
    dialog.showModal();
})

SilverButton.addEventListener("click", () => {
    displayMembershipLevelInput("Silver");
    benefits.innerHTML = `
    <h3>Benefits:</h3>
    <ul>
        <li>Training</li>
        <li>15% Event discount</li>
        <li>Advertisments on our homepage</li>
    </ul>
    `;
    dialog.showModal();
})

GoldButton.addEventListener("click", () => {
    displayMembershipLevelInput("Gold");
    benefits.innerHTML = `
    <h3>Benefits:</h3>
    <ul>
        <li>Training</li>
        <li>20% Event discount</li>
        <li>Advertisments on our homepage</li>
        <li>Access to special Chamber Events</li>
    </ul>
    `;
    dialog.showModal();
})

closeButton.addEventListener("click", () => {
    dialog.close();
})

function displayMembershipLevelInput(level) {
    dialog.innerHTML = `
    <h2>${level} Level</h2>
    <p id=benefits></p>`
}

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    var input = document.getElementsByName('title').value;
    var pattern = /^[A-Za-z\s-]{7,}$/;
    if (!pattern.test(input)) {
        alert('Title can only contain letters, hyphens and spaces and be at least 7 characters long.');
        event.preventDefault(); // Prevent form submission
    }
});
