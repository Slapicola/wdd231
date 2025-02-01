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

const loadDate = new Date();
let hours = loadDate.getHours();
let minutes = loadDate.getMinutes();
let seconds = loadDate.getSeconds();

document.getElementById("joinForm").addEventListener("submit", function() {
    document.getElementById("timeStamp").value = `${loadDate.toDateString()} ${hours}:${minutes}:${seconds}`;
});


const dialog = document.querySelector("dialog");
const membershipInfo = document.querySelector("#membershipInfo");
const openButton = document.querySelector("#Button");
const closeButton = document.querySelector("#close");


NPButton.addEventListener("click", () => {
    dialog.showModal();
    membershipInfo.innerHTML = `
    <h2>NP Level</h2>
    <p>Membership Fee: none</p>
    <h3>Benefits:</h3>
    <ul>
        <li>Training</li>
        <li>5% Event discount</li>
    </ul>
    `;
})

BronzeButton.addEventListener("click", () => {
    dialog.showModal();
    membershipInfo.innerHTML = `
    <h2>Bronze Level</h2>
    <p>Membership Fee: $5</p>
    <h3>Benefits:</h3>
    <ul>
        <li>Training</li>
        <li>10% Event discount</li>
    </ul>
    `;
})

SilverButton.addEventListener("click", () => {
    dialog.showModal();
    membershipInfo.innerHTML = `
    <h2>Silver Level</h2>
    <p>Membership Fee: $10</p>
    <h3>Benefits:</h3>
    <ul>
        <li>Training</li>
        <li>15% Event discount</li>
        <li>Advertisments on our homepage</li>
    </ul>
    `;
})

GoldButton.addEventListener("click", () => {
    dialog.showModal();
    membershipInfo.innerHTML = `
    <h2>Gold Level</h2>
    <p>Membership Fee: $15</p>
    <h3>Benefits:</h3>
    <ul>
        <li>Training</li>
        <li>20% Event discount</li>
        <li>Advertisments on our homepage</li>
        <li>Access to special Chamber Events</li>
    </ul>
    `;
})

closeButton.addEventListener("click", () => {
    dialog.close();
})

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    var input = document.getElementsByName('title').value;
    var pattern = /^[A-Za-z\s-]{7,}$/;
    if (!pattern.test(input)) {
        alert('Title can only contain letters, hyphens and spaces and be at least 7 characters long.');
        event.preventDefault(); // Prevent form submission
    }
});
