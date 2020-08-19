//list of variables
var queryURL;
var serchTerm;
var $drinkRecipe = document.getElementById("#drink-input");
var $foodRecipe = document.getElementById("food-input");
let $drinkButton = document.getElementById("drink-button");
let $foodButton = document.getElementById("food-button");
var $form = $("form");


function ajaxQuery(event)
{
    event.preventDefault();
    searchTerm = $(this).find(`input[name="search-input"]`).val();
    localStorage.setItem("foodOrDrink", $(this).find(`input[name="search-input"]`).attr("data-check"));
    var queryURL = $(this).attr("data-url");
    localStorage.setItem("queryURL", queryURL+searchTerm);
    window.location.replace("./results.html");
}



$form.on("submit", ajaxQuery);
