let $backButton = $("#search-again");
let $results = document.getElementById("result-section");


//Ajax query; uses queryURL variable
$("document").ready(function()
{
     // need to link food recipe button
     $.ajax({
          url: localStorage.getItem("queryURL"),
          method: "GET"
          }).then(function(response)
                  {
                      let $results = document.getElementById("result-section");
                      console.log(response);
                      let foodOrDrink = localStorage.getItem("foodOrDrink");
                      switch (foodOrDrink)
                      {
                           case "food":
                                results("food");
                                break;
                                case "drink":
                                     results("drink");
                                     break;
                                     default:
                                          console.log(localStorage.getItem("foodOrDrink"));
                                        }
                                   });
                                   // location.href = "results.html";
                              }
                         );
                              
function results(foodOrDrink)
{
     console.log(foodOrDrink);
     $results.textContent = localStorage.getItem("results");
}



$backButton.on("click", function()
{
     window.location.replace("./index.html");
});