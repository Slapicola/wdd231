import { displayDessertRecipes, toggleFavorite } from "./recipes.mjs";


window.onload = () => {
    getDessertRecipes();

    const tabs = document.querySelectorAll(".menu-tab");

    const activeTab = localStorage.getItem("activeTab");
    if (activeTab) {
        const activeElement = document.querySelector(`.menu-tab[data-tab="${activeTab}"]`);
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

};

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


const desserturl = "./data/desserts.json";
let dessertrecipes = [];

async function getDessertRecipes() {
    try {
        const response = await fetch(desserturl);
        const info = await response.json();
        dessertrecipes = info.dessertrecipes;
        displayDessertRecipes(dessertrecipes);

        const favoriteButtons = document.querySelectorAll(".favorite-btn");
        
        favoriteButtons.forEach((button, index) => {
            console.log('Adding event listener to button:', button);
            button.addEventListener("click", () => {
                const recipe = dessertrecipes[index].id;
                console.log('Button clicked for recipe:', recipe);
                toggleFavorite(recipe);
            })
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }

}

const recipesArea = document.getElementById('dessertRecipesArea');

const allRecipes = document.querySelector("#all");
allRecipes.addEventListener("click", () => {
    recipesArea.innerHTML = "";

    getDessertRecipes();
});

const cookieButton = document.querySelector("#cookies");
cookieButton.addEventListener("click", () => {
    recipesArea.innerHTML = "";

    getDessertRecipes().then(() => {
        let cookieRecipes = dessertrecipes.filter(recipe => recipe.genre === "Cookies")
        displayDessertRecipes(cookieRecipes);
    })
})

const cakeButton = document.querySelector("#cakes");
cakeButton.addEventListener("click", () => {
    recipesArea.innerHTML = "";

    getDessertRecipes().then(() => {
        let cakeRecipes = dessertrecipes.filter(recipe => recipe.genre === "Cakes")
        displayDessertRecipes(cakeRecipes);
    })

})

const brownieButton = document.querySelector("#brownies");
brownieButton.addEventListener("click", () => {
    recipesArea.innerHTML = "";

    getDessertRecipes().then(() => {
        let brownieRecipes = dessertrecipes.filter(recipe => recipe.genre === "Brownies")
        displayDessertRecipes(brownieRecipes);
    })

})