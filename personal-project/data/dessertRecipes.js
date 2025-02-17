import { displayDessertRecipes } from "./recipes.mjs";


window.onload = () => {
    getDessertRecipes();

};

const desserturl = "./data/desserts.json";
let dessertrecipes = [];

async function getDessertRecipes() {
    try {
        const response = await fetch(desserturl);
        const info = await response.json();
        dessertrecipes = info.dessertrecipes;
        displayDessertRecipes(dessertrecipes);
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