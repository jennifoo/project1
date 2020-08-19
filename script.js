//list of variables
var queryURL;
var serchTerm;
var $drinkRecipe = document.getElementById("#drink-input");
var $foodRecipe = document.getElementById("food-input");
let $drinkButton = document.getElementById("drink-button");
let $foodButton = document.getElementById("food-button");


//Drink button onclick function
$drinkButton.onclick = function () {
    searchTerm = $drinkRecipe.value;
    localStorage.setItem("queryURL", "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+searchTerm);
    window.location.replace("./results.html");
};




//Food button onclick function
document.getElementById("food-button").onclick = function () {
    searchTerm = $foodRecipe.value;
    localStorage.setItem("queryURL", "https://www.themealdb.com/api/json/v1/1/search.php?s="+searchTerm);
    window.location.replace("./results.html");
};