
// PLEASE FEEL FREE TO MAKE ANY CHANGES WITH COMMENTS AND RE-COMMIT TO THE REPO

//list of variables

var drinkRecipe = document.querySelector("#drink-recipe");
var foodRecipe = document.querySelector("#food-recipe");

//location href is pending
document.getElementById("#drink-recipe").onclick = function () {
    location.href = "index2.html"; 
}

//location href is pending
document.getElementById("#food-recipe").onclick = function () {
    location.href = "index2.html"; 
};

// need to link food recipe button
let searchTerm = "";
let queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s="+searchTerm;
$.ajax({
     url: queryURL,
     method: "GET"
     }).then(function(response) 
             {
                 console.log(response);
             });



// need to link drink recipe button
let searchTerm = "";
let queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+searchTerm;
$.ajax({
     url: queryURL,
     method: "GET"
     }).then(function(response) 
             {
                 console.log(response);
                 });