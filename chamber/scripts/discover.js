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

const cardArea = document.querySelector(".cardArea");

createInterestAreaCard();

function createInterestAreaCard() {

    cardArea.innerHTML = `
    <h2></h2>
    <figure></figure>
    <address></address>
    <p></p>
    <button></button>`
}