import { displayDinnerRecipes, toggleFavorite } from "./recipes.mjs";

window.onload = () => {
    getDinnerRecipes();

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


const dinnerurl = "./data/dinners.json";
let dinnerrecipes = [];

async function getDinnerRecipes() {
    try {
        const response = await fetch(dinnerurl);
        const info = await response.json();
        dinnerrecipes = info.dinnerrecipes;
        displayDinnerRecipes(dinnerrecipes);
        
        const favoriteButtons = document.querySelectorAll(".favorite-btn");
        
        favoriteButtons.forEach((button, index) => {
            console.log('Adding event listener to button:', button);
            button.addEventListener("click", () => {
                const recipe = dinnerrecipes[index].id;
                console.log('Button clicked for recipe:', recipe);
                toggleFavorite(recipe);
            })
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// console.log(getDinnerRecipes(dinnerRecipes.dinnerurl));


const recipesArea = document.getElementById('dinnerRecipesArea');

const allRecipes = document.querySelector("#all");
allRecipes.addEventListener("click", () => {
    recipesArea.innerHTML = "";

    getDinnerRecipes();
});

const italianButton = document.querySelector("#italian");
italianButton.addEventListener("click", () => {
    recipesArea.innerHTML = "";

    getDinnerRecipes().then(() => {
        let italianRecipes = dinnerrecipes.filter(recipe => recipe.genre === "Italian")
        displayDinnerRecipes(italianRecipes);
    })
})

const mexicanButton = document.querySelector("#mexican");
mexicanButton.addEventListener("click", () => {
    recipesArea.innerHTML = "";

    getDinnerRecipes().then(() => {
        let mexicanRecipes = dinnerrecipes.filter(recipe => recipe.genre === "Mexican")
        displayDinnerRecipes(mexicanRecipes);
    })

})

const americanButton = document.querySelector("#american");
americanButton.addEventListener("click", () => {
    recipesArea.innerHTML = "";

    getDinnerRecipes().then(() => {
        let americanRecipes = dinnerrecipes.filter(recipe => recipe.genre === "American")
        displayDinnerRecipes(americanRecipes);
    })

})