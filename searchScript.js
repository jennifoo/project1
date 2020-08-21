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
               $thumbNail = $(`<img width="100%" src="${searchQuery.strDrinkThumb}" class="thumb-nail"><img>`);
               $recipeName.text(searchQuery.strDrink);
          }
          else
          {
               $thumbNail = $(`<img width="100%" src="${searchQuery.strMealThumb}" class="thumb-nail"><img>`);
               $recipeName.text(searchQuery.strMeal);
          }
          $instructions.text(searchQuery.strInstructions);

          // Result Item Div, Append all items to this one. And this one appends to ".result-section"
          let $resultItemDiv = $(`<div class="result-item"></div>`);
          // *****THIS IS A CONTAINER FOR APPENDING TO*****

                  // Recipe name, Append the h2 recipe name to this div.
                  let $resultItemRowH2Row = $(`<div class="row"></div>`);
                          let $resultItemRowH2Col = $(`<div class="col addResultTitle"></div>`);
                          $($resultItemRowH2Row).append($resultItemRowH2Col);
                          $($resultItemRowH2Col).append($recipeName);

                  // Row that contains the image and description. Append the image COLUMN and descript COLUMN to this Row div.
                  let $resultItemRowBody = $(`<div class="row"></div>`);
                  // ******THIS IS A CONTAINER FOR APPENDING TO*****

                            // Column that you need to append the image to.
                            let $resultItemColImage = $(`<div class="col m4">`);
                            $resultItemColImage.append($thumbNail);

                            // Column that you need to append the description to
                            let $resultItemColDescription = $(`<div class="col m8">`);
                            $resultItemColDescription.append($(`<h3>Ingredients</h3>`));
                            $resultItemColDescription.append($ingredients);
                            $resultItemColDescription.append($(`<h3>Instructions</h3>`));
                            $resultItemColDescription.append($instructions);

                            //$result.append($ingredients);

          $resultItemRowBody.append($resultItemColImage);
          $resultItemRowBody.append($resultItemColDescription);

          $resultItemDiv.append($resultItemRowH2Row);
          $resultItemDiv.append($resultItemRowBody);

          $("#result-section").append($resultItemDiv);
     }
}



$backButton.on("click", function()
{
     window.location.replace("./index.html");
});
