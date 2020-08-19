
// PLEASE FEEL FREE TO MAKE ANY CHANGES WITH COMMENTS AND RE-COMMIT TO THE REPO

//list of variables
 
var drinkRecipe = document.querySelector("#drink-input");
var foodRecipe = document.querySelector("#food-input");

//location href is pending
document.getElementById("#drink-button").onclick = function () {
    
// need to link drink recipe button
let searchTerm = "#drink-input"
let queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+searchTerm;
$.ajax({
     url: queryURL,
     method: "GET"
     }).then(function(response) 
             {
                 console.log(response);
                 });
    //location.href = "results.html"; 
};


//location href is pending
document.getElementById("#food-button").onclick = function () {

// need to link food recipe button
let searchTerm = "#food-input";
let queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s="+searchTerm;
$.ajax({
     url: queryURL,
     method: "GET"
     }).then(function(response) 
             {
                 console.log(response);
             });
    location.href = "results.html"; 
};


