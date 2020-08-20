let $backButton = $("#search-again");
let $results = document.getElementById("result-section");
let $array = new Array();
let arrayType;

//Ajax query; uses queryURL variable
$("document").ready(function()
{
     // need to link food recipe button
     $.ajax({
          url: localStorage.getItem("queryURL"),
          method: "GET"
            }).then(function(response)
                    {
                       arrayType = response[0];
                       console.log(response);
                       console.log(JSON.stringify(arrayType));
                       let $results = document.getElementById("result-section");
                       let foodOrDrink = localStorage.getItem("foodOrDrink");
                       switch (foodOrDrink)
                       {
                            case "food":
                                $array = response.meals;
                                displayResults("food");
                                break;
                           case "drink":
                                $array = response.drinks;
                                displayResults("drink");
                                break;
                           default:
                                console.log(localStorage.getItem("foodOrDrink"));
                       }
                    }
                   );
                                   // location.href = "results.html";
});
                              
function displayResults(foodOrDrink)
{
     for(let i = 0; i < $array.length; i++)
     {
          let searchQuery = $array[i];
          // console.log($array);
          let $recipeName = $(`<h2 class="recipeName"></h2>`);
          let $ingredients = $(`<ul class="ingredients"></ul>`);
          let keys = Object.keys(searchQuery);
          let steps = new Array();
          let ingNum = 1;
          for(let i in keys)
          {
               // console.log(keys[i]);
               if(keys[i].startsWith("strIngredient"))
               {
                    let index = keys.indexOf(`strIngredient${ingNum}`)-20;
                    steps.push({[searchQuery[`strIngredient${index}`]]:searchQuery[`strMeasure${index}`]});
                    ingNum++;
               }
          }
          // console.log(steps);
          for (let i = 0; i < steps.length; i++)
          {
               if(!steps[i].hasOwnProperty("null"))
               {
                    let $li = $(`<li></li>`);
                    let str = JSON.stringify(steps[i])
                    str = str.replace("{", "");
                    str = str.replace("}", "");
                    for(let i = 0; i < 4; i++)
                    {
                         str = str.replace(`"`, "");
                    }
                    $li.text(str);
                    $ingredients.append($li);
               }
          }
          let $thumbNail;
          let $instructions = $(`<p class="instructions"></p>`);
          let $result = $(`<div class="searchQuery"></div>`);
          if (foodOrDrink == "drink")
          {
               $thumbNail = $(`<img width="25%" src="${searchQuery.strDrinkThumb}" class="thumb-nail"><img>`);
               $recipeName.text(searchQuery.strDrink);
          }
          else
          {
               $thumbNail = $(`<img width="25%" src="${searchQuery.strMealThumb}" class="thumb-nail"><img>`);
               $recipeName.text(searchQuery.strMeal);
          }
          $instructions.text(searchQuery.strInstructions);
          $result.append($recipeName);
          $result.append($thumbNail);
          $result.append($ingredients);
          $result.append($instructions);
          $("#result-section").append($result);
     }
}



$backButton.on("click", function()
{
     window.location.replace("./index.html");
});