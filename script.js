
// PLEASE FEEL FREE TO MAKE ANY CHANGES WITH COMMENTS AND RE-COMMIT TO THE REPO

//list of variables
var queryURL;
var serchTerm;
var $drinkRecipe = document.getElementById("#drink-input");
var $foodRecipe = document.getElementById("food-input");
let $drinkButton = document.getElementById("drink-button");

//location href is pending
$drinkButton.onclick = function () {
    searchTerm = $drinkRecipe.value()
    queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+searchTerm;
    ajaxQuery();
};




//location href is pending
document.getElementById("food-button").onclick = function () {
    queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s="+searchTerm;
    searchTerm = $foodRecipe.value()
};

function ajaxQuery() {
// need to link food recipe button
$.ajax({
     url: queryURL,
     method: "GET"
     }).then(function(response)
             {
                 console.log(response);
             });
    // location.href = "results.html";
}


