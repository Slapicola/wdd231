
function displayDinnerRecipes(dinnerRecipes) {
    const recipesArea = document.getElementById('dinnerRecipesArea');
    
    if (recipesArea) {
        recipesArea.innerHTML = "";
        dinnerRecipes.forEach((recipe) => {
            let ingredientsList = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("");
            let recipeDiv = document.createElement("div");
            recipeDiv.innerHTML = `
            <button type="button" class="favorite-btn" id="favorites-${recipe.id}"><img src = "images/favorite-button.svg" alt = "favorite button" width=25 height=25></button>
            <h3>${recipe.foodname}</h3>
            <p>Serving Size: ${recipe.servingsize}</p>
            <p>Prep Time: ${recipe.preptime}</p>
            <p>Cook Time: ${recipe.cooktime}</p>
            <section class="ingredientsList">
                <p>Ingredients:</p>
                <ul>${ingredientsList}</ul>
            </section>
            <section class="buttonArea">
            <button type="button" class="stepsButton">Steps</button>
            </section>`;
            recipesArea.appendChild(recipeDiv);
            
            recipeDiv.querySelector(".stepsButton").addEventListener("click", () => {
                        // console.log("Steps Button pressed!");
                        displayRecipeSteps(recipe);
                    })
            })
    } else {
        console.error("recipesArea element not found!");
    }
}

function toggleFavorite(recipe) {
    console.log('Toggling favorite for recipe:', recipe);
    let favorites = cleanAndGetFavorites();
    let index = favorites.indexOf(recipe);

    const button = document.querySelector(`#favorites-${recipe}`);
    if (!button) {
        console.error(`Button not found for recipe ID: ${recipe}`);
        return;
    }

    if (index === -1) {
        console.log('Adding to favorites:', recipe);
        favorites.push(recipe);
        button.innerHTML = "<img src = './images/favorite-button-selected.svg' alt = 'favorite button' width=25 height=25>";
    } else {
        console.log('Removing from favorites:', recipe);
        favorites.splice(index, 1);
        button.innerHTML = "<img src = './images/favorite-button.svg' alt = 'favorite button' width=25 height=25>";
    }
    console.log('Updated favorites list:', favorites);
    localStorage.setItem("favoriteRecipes", JSON.stringify(favorites));
}

function displayDessertRecipes(url) {
    const recipesArea = document.getElementById('dessertRecipesArea');

    if (recipesArea) {
        recipesArea.innerHTML = "";
        url.forEach((recipe) => {
            let ingredientsList = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("");
            let recipeDiv = document.createElement("div");

            recipeDiv.innerHTML = `
                        <button class="favorite-btn" id="favorites-${recipe.id}"><img src = "images/favorite-button.svg" alt = "favorite button" width=25 height=25></button>
                        <h3>${recipe.foodname}</h3>
                        <p>Serving Size: ${recipe.servingsize}</p>
                        <p>Prep Time: ${recipe.preptime}</p>
                        <p>Cook Time: ${recipe.cooktime}</p>
                        <section class="ingredientsList">
                            <p>Ingredients:</p>
                            <ul>${ingredientsList}</ul>
                        </section>
                        <section class="buttonArea">
                            <button class="stepsButton">Steps</button>
                        </section>`;
                        recipesArea.appendChild(recipeDiv);
            
            recipeDiv.querySelector(".stepsButton").addEventListener("click", () => {
                        displayRecipeSteps(recipe);
                    })
            })

    } else {
        console.error("recipesArea element not found!");
    }
}



const dialog = document.querySelector("dialog");
const steps = document.querySelector("#directions");
const closeButton = document.querySelector("#close");
function displayRecipeSteps(recipe) {
    let stepsList = recipe.directions.map(direction => `<li>${direction}</li>`).join("");
    steps.innerHTML = "";
    steps.innerHTML = `
            <h2>Steps</h2>
            <ul>${stepsList}</ul>
            `;
    dialog.showModal();

    closeButton.addEventListener("click", () => {
        dialog.close();
    });
}



export { displayDinnerRecipes, toggleFavorite, displayDessertRecipes};



