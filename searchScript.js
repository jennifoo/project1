let $backButton = $("#search-again");



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
                    //   $results.textContent = localStorage.getItem("results");
                      console.log(response);
                  });
         // location.href = "results.html";
     }
);





$backButton.on("click", function()
{
     window.location.replace("./index.html");
});