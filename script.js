//list of variables
var queryURL;
var serchTerm;
var $drinkRecipe = document.getElementById("#drink-input");
var $foodRecipe = document.getElementById("food-input");
let $drinkButton = document.getElementById("drink-button");
let $foodButton = document.getElementById("food-button");

var $form = $("form");
//Drink button onclick function
// $drinkButton.addEventListener("click", ajaxQuery);


//Food button onclick function
// $foodButton.addEventListener("click", ajaxQuery);

function ajaxQuery(event)
{
    event.preventDefault();
    searchTerm = $(this).find(`input[name="search-input"]`).val();
    var queryURL = $(this).attr("data-url");
    localStorage.setItem("queryURL", queryURL+searchTerm);
    window.location.replace("./results.html");
}



$form.on("submit", ajaxQuery);
