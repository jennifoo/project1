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



/* --------------- ANIMATE BACKGROUND FUNCTIONS --------------- */
/* function animatebg1(){
  setTimeout(function() {
  $("#background1:before").css("background-image", "url(images/food-man.jpg)");
  animatebg2()
}, 2 * 1000);
}
function animatebg2(){
  setTimeout(function() {
  $("#background1:before").css("background-image", "url(images/drink-woman.jpg)");
}, 3 * 1000);
}
animatebg1(); */
/* --------------- END BACKGROUND FUNCTIONS --------------- */




function animatebg1(){
  setTimeout(function() {
  $('#background1').toggleClass('change1');
  animatebg2()
}, 1.25 * 1000);
}
function animatebg2(){
  setTimeout(function() {
  $('#background1').toggleClass('change2');
}, 1 * 1000);
}
animatebg1();
