const apiKey = "294babf4766443b6b6449319e6d9c792";


function fetchRecipes(ingredients) {
  fetch(
    "https://api.spoonacular.com/recipes/findByIngredients?apiKey=" + 
      apiKey +
      "&ingredients=" + //
      ingredients.join(",") + 
      "&number=50" //returning 50 results   
  ) 
    .then((res) => res.json()) 
    .then((data) => { 
      // document.getElementById("results").innerText = JSON.stringify(
      //   data,
      //   null,
      //   2
      // );
      const output = document.getElementById("search-recipes-output"); 
      output.innerHTML = "";  
    
      for (let recipe of data) { 
        const newEntry = document.createElement("div"); 
        newEntry.classList.add("card");
        output.appendChild(newEntry); 
        
        const img = document.createElement("img");
        img.src = recipe.image; 
        newEntry.appendChild(img); 
        
        const title = document.createElement("div"); 
        title.innerText = recipe.title; 
        newEntry.appendChild(title); 
      }
    });
} 

document 
  .getElementById("search-recipes") 
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;  
    const ingredients = []; 
    if (form.ingredients.length) { 
      for (let ingredientInput of form.ingredients) { 
        ingredients.push(ingredientInput.value);
      }
    } else {
      ingredients.push(form.ingredients.value); 
    }
    fetchRecipes(ingredients);
  });
document
  .getElementById("add-ingredient")
  .addEventListener("click", () => { 
    const container = document.getElementById("search-recipes-ingredients");
  
    const input = document.createElement("input");
    input.name = "ingredients";
    container.appendChild(input);
  })
